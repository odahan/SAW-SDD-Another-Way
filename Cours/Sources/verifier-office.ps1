$ErrorActionPreference = 'Stop'
$courseRoot = Split-Path -Parent $PSScriptRoot
$verificationRoot = Join-Path $PSScriptRoot 'Verification'
$wordApplication = $null
$document = $null
try {
    $wordApplication = New-Object -ComObject Word.Application
    $wordApplication.Visible = $false
    $wordApplication.DisplayAlerts = 0
    $document = $wordApplication.Documents.Open((Join-Path $courseRoot 'SAW-3.2-Script-formateur.docx'), $false, $true)
    $document.Repaginate()
    $document.ExportAsFixedFormat((Join-Path $verificationRoot 'script-formateur.pdf'),17)
    $records = @()
    foreach ($paragraph in $document.Paragraphs) {
        $text = $paragraph.Range.Text.Trim()
        if ($text -match '^Slide (\d{2})') {
            $records += [pscustomobject]@{ slide = [int]$Matches[1]; title = $text; page = $paragraph.Range.Information(3) }
        }
    }
    $pageCount = $document.ComputeStatistics(2)
    [pscustomobject]@{ pageCount = $pageCount; slideSections = $records } | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $verificationRoot 'word-pages.json') -Encoding utf8
    Write-Output "Word rendered $pageCount pages with $($records.Count) slide sections."
} finally {
    if ($null -ne $document) { $document.Close(0); [void][Runtime.InteropServices.Marshal]::FinalReleaseComObject($document) }
    if ($null -ne $wordApplication) { $wordApplication.Quit(); [void][Runtime.InteropServices.Marshal]::FinalReleaseComObject($wordApplication) }
}

$powerPointApplication = $null
$presentation = $null
try {
    $powerPointApplication = New-Object -ComObject PowerPoint.Application
    $powerPointApplication.DisplayAlerts = 1
    $presentation = $powerPointApplication.Presentations.Open((Join-Path $courseRoot 'SAW-3.2-Cours.pptx'), $true, $false, $false)
    $nativePath = Join-Path $verificationRoot 'PowerPoint'
    New-Item -ItemType Directory -Path $nativePath -Force | Out-Null
    $presentation.Export($nativePath,'PNG',1280,720)
    $findings = @()
    foreach ($slide in $presentation.Slides) {
        foreach ($shape in $slide.Shapes) {
            if ($shape.HasTextFrame -and $shape.TextFrame.HasText) {
                $range = $shape.TextFrame2.TextRange
                if ($range.BoundHeight -gt ($shape.Height + 2)) {
                    $findings += [pscustomobject]@{slide=$slide.SlideIndex; name=$shape.Name; text=$range.Text; shapeHeight=$shape.Height; textHeight=$range.BoundHeight}
                }
            }
        }
    }
    [pscustomobject]@{ slideCount=$presentation.Slides.Count; textOverflow=$findings } | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $verificationRoot 'powerpoint-layout.json') -Encoding utf8
    Write-Output "PowerPoint rendered $($presentation.Slides.Count) slides; detected $($findings.Count) textbox height overflows."
} finally {
    if ($null -ne $presentation) { $presentation.Close(); [void][Runtime.InteropServices.Marshal]::FinalReleaseComObject($presentation) }
    if ($null -ne $powerPointApplication) { $powerPointApplication.Quit(); [void][Runtime.InteropServices.Marshal]::FinalReleaseComObject($powerPointApplication) }
}
