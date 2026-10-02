$ErrorActionPreference = 'Stop'
$courseRoot = Split-Path -Parent $PSScriptRoot
$assetsPath = Join-Path $PSScriptRoot 'Assets'
New-Item -ItemType Directory -Path $assetsPath -Force | Out-Null
Copy-Item -LiteralPath 'E:\SAW\SAW-FR\SAW-LOGO-FINAL.png' -Destination (Join-Path $assetsPath 'logo.png')
Copy-Item -LiteralPath 'E:\LivresEtReflexions\Livre_B\05_Composition\Couvertures\Le_developpement_pilote_par_les_specifications_COUVERTURE_COMMUNE_v1.png' -Destination (Join-Path $assetsPath 'livre.png')
Copy-Item -LiteralPath 'E:\LivresEtReflexions\Livre_B\05_Composition\images_png\04_De_la_demande_a_l_intention.png' -Destination $assetsPath
Copy-Item -LiteralPath 'E:\TextAid\assets\Screenshots\02 Call TextAid to translate.png' -Destination (Join-Path $assetsPath 'textaid.png')
$referencePath = Join-Path $courseRoot 'Ressources\SAW'
New-Item -ItemType Directory -Path $referencePath -Force | Out-Null
foreach ($language in @('FR','EN')) {
    $targetPath = Join-Path $referencePath $language
    New-Item -ItemType Directory -Path $targetPath -Force | Out-Null
    foreach ($variant in @('SPECIFICATION','SPECIFICATION-EXEC')) {
        foreach ($extension in @('md','txt')) {
            Copy-Item -LiteralPath "E:\SAW\SAW-$language\SAW-3.2-$variant.$extension" -Destination $targetPath
        }
    }
}
$textAidPath = Join-Path $courseRoot 'Ressources\TextAid'
New-Item -ItemType Directory -Path $textAidPath -Force | Out-Null
foreach ($name in @('README.md','PROJECT.md','RULES.md','STATUS.md','LEDGER.md','HISTORY.md')) {
    Copy-Item -LiteralPath (Join-Path 'E:\TextAid' $name) -Destination $textAidPath
}
foreach ($lotDirectory in (Get-ChildItem -LiteralPath 'E:\TextAid\Specs' -Directory)) {
    $targetPath = Join-Path $textAidPath "Specs\$($lotDirectory.Name)"
    New-Item -ItemType Directory -Path $targetPath -Force | Out-Null
    Get-ChildItem -LiteralPath $lotDirectory.FullName -File -Filter '*.md' | Copy-Item -Destination $targetPath
}
$docsPath = Join-Path $textAidPath 'docs'
New-Item -ItemType Directory -Path $docsPath -Force | Out-Null
foreach ($name in @('SOURCE-MAP.md','PROSPEC-3-SPECIFICATION.md','PROSPEC-3-SPECIFICATION.FR.md','TextAid specification.md','TextAid specification.FR.md','README.BOOTSTRAP.md')) {
    Copy-Item -LiteralPath (Join-Path 'E:\TextAid\docs' $name) -Destination $docsPath
}
Write-Output 'Course assets and documentary snapshots prepared.'
