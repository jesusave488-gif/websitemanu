param(
  [string[]]$Ids,          # identifiants à rendre (vide = tous, lus depuis la liste)
  [string]$OutDir          # dossier de sortie des PNG
)
# Rend chaque maquette de mockups.html en PNG avec Edge sans interface.
if ($Ids.Count -eq 1 -and $Ids[0] -match ",") { $Ids = $Ids[0] -split "," }
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }
$page = (Join-Path $PSScriptRoot "mockups.html") -replace '\\', '/'
$sizes = Get-Content (Join-Path $PSScriptRoot "sizes.txt")
New-Item -ItemType Directory -Force $OutDir | Out-Null

foreach ($line in $sizes) {
  $parts = $line.Trim() -split '\s+'
  if ($parts.Count -lt 3) { continue }
  $id, $w, $h = $parts
  if ($Ids -and ($Ids -notcontains $id)) { continue }
  $out = Join-Path $OutDir "$id.png"
  $profile = Join-Path $env:TEMP "edge-mockups-$id"
  & $edge --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$profile" --window-size="$w,$h" --virtual-time-budget=3000 --screenshot="$out" "file:///$page`?id=$id" 2>$null | Out-Null
  $tries = 0
  while (-not (Test-Path $out) -and $tries -lt 40) { Start-Sleep -Milliseconds 250; $tries++ }
  "$id $((Get-Item $out -ErrorAction SilentlyContinue).Length)"
}
