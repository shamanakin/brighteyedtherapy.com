# Bright Eyed Therapy — Windows Deployment Guide

Deploy the static Next.js export to a shared host (e.g. DreamHost) via WinSCP or PowerShell SCP.

All host-specific values are read from environment variables so no credentials
live in this file. Set them once per PowerShell session (or in your profile):

```powershell
$env:BET_DEPLOY_HOST = "your-host.example.com"   # SSH/SCP host
$env:BET_DEPLOY_USER = "your-ssh-user"           # SSH user
$env:BET_DEPLOY_PASSWORD = "••••••••"            # from your password manager
$env:BET_DEPLOY_PATH = "~/brighteyedtherapy.com/" # remote site root
```

## Prerequisites

- PowerShell 5+ (built into Windows 10/11)
- WinSCP installed (https://winscp.net) OR OpenSSH for Windows (Windows Settings → Optional Features)
- `npm run build` completed successfully (verify `out\` directory exists)
- The `BET_DEPLOY_*` environment variables above are set

## Standard Deployment Flow

### Step 1 — Build

```powershell
cd "WEBSITES\brighteyedtherapy.com"
npm run build
dir out\   # Verify output: should contain index.html
```

### Step 2 — Deploy with WinSCP (recommended)

Open WinSCP, create a new session:
- Protocol: SFTP
- Hostname: `$env:BET_DEPLOY_HOST`
- Username: `$env:BET_DEPLOY_USER`
- Password: from your password manager

Or use WinSCP command-line (if WinSCP is in PATH):

```powershell
& "C:\Program Files (x86)\WinSCP\WinSCP.exe" /command `
  "open sftp://$($env:BET_DEPLOY_USER):$($env:BET_DEPLOY_PASSWORD)@$($env:BET_DEPLOY_HOST)/" `
  "synchronize remote out\ /brighteyedtherapy.com/" `
  "exit"
```

### Step 2 (Alternative) — Deploy with PowerShell + scp

If OpenSSH is installed:

```powershell
# Deploy all static output (you'll be prompted for the password)
scp -r "out\." "$($env:BET_DEPLOY_USER)@$($env:BET_DEPLOY_HOST):$($env:BET_DEPLOY_PATH)"
```

### Step 3 — Verify

```powershell
# Open the live site in browser
Start-Process "https://brighteyedtherapy.com"
```

---

## Targeted Deploys (when only some files changed)

```powershell
# Deploy a single rebuilt page folder (e.g., About)
scp -r "out\about" "$($env:BET_DEPLOY_USER)@$($env:BET_DEPLOY_HOST):$($env:BET_DEPLOY_PATH)"

# Deploy root index only
scp "out\index.html" "$($env:BET_DEPLOY_USER)@$($env:BET_DEPLOY_HOST):$($env:BET_DEPLOY_PATH)"
```

---

## Full Deploy PowerShell Script

Save this as `deploy.ps1` in the project root and run when needed:

```powershell
param(
    [string]$Target = "all"
)

$RemoteUser = $env:BET_DEPLOY_USER
$RemoteHost = $env:BET_DEPLOY_HOST
$RemotePath = $env:BET_DEPLOY_PATH
$LocalOut = "out"

Write-Host "Building..."
npm run build
if ($LASTEXITCODE -ne 0) { Write-Error "Build failed"; exit 1 }

Write-Host "Deploying to $RemoteHost..."
scp -r "$LocalOut\." "${RemoteUser}@${RemoteHost}:${RemotePath}"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deploy complete. Verify at https://brighteyedtherapy.com"
} else {
    Write-Error "Deploy failed — check connection and credentials"
}
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `Permission denied` | Verify `BET_DEPLOY_USER` and the password in your password manager |
| WinSCP connection refused | Confirm SSH is enabled for the domain in your host's panel |
| Site shows old content | Hard-refresh browser (Ctrl+Shift+R). If a CDN is in front, purge its cache |
| `out\` directory missing | Run `npm run build` first |
