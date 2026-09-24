$ErrorActionPreference = 'Stop'
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
if ($nodeCommand) {
    $finrelNode = $nodeCommand.Source
} else {
    $finrelNode = Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
}
if (-not (Test-Path -LiteralPath $finrelNode)) {
    throw 'Node.js was not found. Install Node.js 20 or newer and run this script again.'
}
Push-Location $PSScriptRoot
try {
    & $finrelNode build.mjs
    if ($LASTEXITCODE -ne 0) { throw 'The site build failed.' }
    & $finrelNode server.mjs
} finally {
    Pop-Location
}
