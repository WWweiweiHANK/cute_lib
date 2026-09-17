@echo off
cd /d "%~dp0"
where node.exe >nul 2>nul
if errorlevel 1 (
  echo Node.js is required. Install Node.js 22.12 or newer.
  pause
  exit /b 1
)
node.exe "tools\launch.mjs"
if errorlevel 1 (
  if not "%NIGHTFALL_NO_OPEN%"=="1" pause
  exit /b 1
)
