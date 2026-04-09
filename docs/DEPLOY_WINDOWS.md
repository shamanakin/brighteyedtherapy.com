# Bright Eyed Therapy — Windows Deployment Guide

Deploy the static Next.js export to DreamHost via WinSCP or PowerShell SCP.

## Server Details

| Item | Value |
|------|-------|
| **SSH/SCP host** | `brighteyedtherapy.com` |
| **SSH user** | `shamanakin` |
| **Remote site root** | `~/brighteyedtherapy.com/` |

Credentials: `adminvault/vault/CREDENTIALS.md` — password: vault entry for `brighteyedtherapy.com`.

## Prerequisites

- PowerShell 5+ (built into Windows 10/11)
- WinSCP installed (https://winscp.net) OR OpenSSH for Windows (available in Windows Settings → Optional Features)
- `npm run build` completed successfully (verify `out\` directory exists)

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
- Hostname: `brighteyedtherapy.com`
- Username: `shamanakin`
- Password: from vault

Or use WinSCP command-line (if WinSCP is in PATH):

```powershell
$password = "***REMOVED***"
& "C:\Program Files (x86)\WinSCP\WinSCP.exe" /command `
  "open sftp://shamanakin:$password@brighteyedtherapy.com/" `
  "synchronize remote out\ /brighteyedtherapy.com/" `
  "exit"
```

### Step 2 (Alternative) — Deploy with PowerShell + scp

If OpenSSH is installed:

```powershell
# Set password in environment (avoids interactive prompt)
$env:SSHPASS = "***REMOVED***"

# Deploy all static output
scp -r "out\." "shamanakin@brighteyedtherapy.com:~/brighteyedtherapy.com/"
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
scp -r "out\about" "shamanakin@brighteyedtherapy.com:~/brighteyedtherapy.com/"

# Deploy root index only
scp "out\index.html" "shamanakin@brighteyedtherapy.com:~/brighteyedtherapy.com/"
```

---

## Full Deploy PowerShell Script

Save this as `deploy.ps1` in the project root and run when needed:

```powershell
param(
    [string]$Target = "all"
)

$RemoteUser = "shamanakin"
$RemoteHost = "brighteyedtherapy.com"
$RemotePath = "~/brighteyedtherapy.com/"
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
| `Permission denied` | Verify SSH user (`shamanakin`) and password from vault |
| WinSCP connection refused | Confirm DreamHost SSH is enabled for the domain |
| Site shows old content | Hard-refresh browser (Ctrl+Shift+R). If Cloudflare is in front, purge cache from Cloudflare dashboard |
| `out\` directory missing | Run `npm run build` first |
