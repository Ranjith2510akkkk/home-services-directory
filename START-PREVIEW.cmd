@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Install Node.js 24 or newer, then reopen this launcher.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Project packages are missing. Run npm ci in this folder first.
  pause
  exit /b 1
)
echo Starting your local directory. Open the Local URL printed below.
echo Keep this window open. Press Ctrl+C to stop.
call npm.cmd run dev
pause
