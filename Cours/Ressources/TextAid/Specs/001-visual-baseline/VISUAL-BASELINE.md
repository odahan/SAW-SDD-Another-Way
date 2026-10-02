# TextAid visual baseline — candidate 1

> Before working on this lot, read the repository root README.md.

This is the proposed V0.1 visual contract. Review the [reference screen](reference.html), [existing logo](../../assets/Logo-final.png), and [application icon](../../assets/TextAid.ico) together. The HUMAN gate G-001-001 remains open until a named human accepts them.

## Palette and theme tokens

All values are sRGB. Use the exact names below as WPF `Color` resources and corresponding `*Brush` resources. The reference HTML uses the same values as CSS custom properties. Views must reference resources, including for focus, selection, borders, and error text.

| Token | Hex | Purpose |
|---|---|---|
| Background | `#0D1117` | Window content background |
| Surface | `#171D26` | Cards, fields, menus, tooltips |
| SurfaceAlt | `#222B37` | Hovered rows and nested surfaces |
| Foreground | `#F3F6FA` | Primary text |
| ForegroundMuted | `#AAB6C5` | Secondary text |
| Border | `#3B4859` | Control and panel outlines |
| Accent | `#34B9E8` | Primary action and focus |
| AccentHover | `#5CCDF2` | Primary hover |
| AccentPressed | `#178FB9` | Primary pressed |
| Success | `#4DD7A8` | Success status |
| Warning | `#F2C56B` | Caution status |
| Error | `#FF7D89` | Error status |
| Disabled | `#748092` | Disabled label and icon |
| Selection | `#294F67` | Selected text and rows |

Additional named semantic resources: `FocusBrush = AccentBrush`, `ChromeBackgroundBrush = BackgroundBrush`, `OnAccentBrush = #07141B`. `OnAccent` is needed for legible text on the accent fill and is not used as a view literal. Disabled controls use `SurfaceAltBrush`, `DisabledBrush`, and `BorderBrush`. Normal text on `Background` and `Surface` uses `ForegroundBrush`.

## Typography and dimensions

- Font: `Segoe UI Variable Text`, falling back to `Segoe UI`. No downloaded font is needed.
- Body: 14 px / 20 px, regular. Secondary labels: 12 px / 18 px. Section headings: 16 px / 22 px, semibold. Main title: 20 px / 28 px, semibold. About product name: 24 px / 32 px, semibold.
- Main transaction window: 680 × 520 WPF device-independent pixels (DIP), fixed, no minimize or maximize. Center it in the source monitor work area with DPI-aware Windows integration. `ShowInTaskbar = false`.
- About window: 460 × 390 DIP, fixed. The full logo is fitted within 380 × 180 DIP while preserving aspect ratio.
- Spacing scale: 4, 8, 12, 16, 24, 32 DIP. Content inset: 24 DIP. Card corner radius: 10 DIP. Control corner radius: 6 DIP. Standard control height: 36 DIP; primary footer buttons: 40 DIP. Minimum target size: 32 × 32 DIP.

## V0.1 control styles

| Control | Visual treatment and states |
|---|---|
| Window | Background fill, 1 DIP Border outline, native dark title bar. No custom caption buttons. |
| Primary button | Accent fill, OnAccent text. Hover AccentHover; pressed AccentPressed; disabled SurfaceAlt with Disabled text. |
| Secondary button | SurfaceAlt fill, Border outline, Foreground text. Hover raises border to Accent; pressed uses Selection. |
| TextBox / read-only captured text | Surface fill, Border outline, Foreground text, 12 DIP inset. Focus uses 2 DIP Accent outline. Selection uses Selection fill. |
| ComboBox / list | Surface fill, Border outline; popup uses Surface and Border; hovered row SurfaceAlt, selected row Selection. |
| Context and tray menus | Surface fill, Border outline; Foreground text; SurfaceAlt hover; Selection selected; separator Border. |
| ScrollBar | Surface track, Border thumb, AccentHover on hover, AccentPressed while dragging. |
| ToolTip | SurfaceAlt fill, Border outline, Foreground text. |
| Status and error | Success, Warning, Error color used for icon/short label; explanatory text remains Foreground. Never rely on color alone. |
| Focus | Visible 2 DIP Accent outline with at least 2 DIP offset on keyboard focus. |

The prototype shows a captured text, a disabled V0.1 `Accept` shell, `Cancel`, the About layout, and a compact control gallery. It is a visual reference, not a working implementation of AI, actions, Settings, or localization.

## Brand assets

- `assets/Logo-final.png` is the proposed full logo for About, README, and product material. The existing artwork highlights `AI` in cyan and teal. `assets/Logo-large.png` is the unframed source variant. The PNG is to be embedded as a WPF `Resource` in V0.1, never copied next to the distributed executable.
- `assets/TextAid-icon.svg` is the scalable icon master. `assets/TextAid.ico` is the Windows application and tray icon, with sizes 16, 24, 32, 48, 64, 128, and 256 px. `assets/TextAid-icon.png` is a 512 px preview. The mark combines a document with a blue incoming and green outgoing arrow, echoing the existing logo while remaining readable at small sizes. These are candidate assets pending G-001-001.
- Do not place the white logo artwork over an additional white WPF panel without reviewing its edge. Its existing white field is treated as part of the logo; About places it as a contained brand tile against the dark surface.

## Native window chrome

Keep the standard WPF non-client area. After the window handle is created, request dark caption rendering with `DwmSetWindowAttribute(DWMWA_USE_IMMERSIVE_DARK_MODE, TRUE)` on supported Windows builds. If that call is unsupported, leave native chrome in place and record the compatibility result during V0.1. Do not replace the caption or caption buttons merely to force a color. Native behavior must retain move, system menu, keyboard navigation, close, and DPI handling. Closing the transaction window maps to `Cancel`; this behavior is implemented and tested in V0.1.

## V0.1 implementation handoff

Put colors and brushes in `Themes/Colors.xaml` and `Themes/Brushes.xaml`, controls in `Themes/Controls.xaml`, and window resources in `Themes/Window.xaml`. Use `DynamicResource` references in views. Embed `Logo-final.png` and `TextAid.ico` as application resources. The reference dimensions and styles are fixed by this candidate only after G-001-001 passes.
