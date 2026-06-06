# Bright Eyed Therapy — macOS Deployment Guide

Deploy the static Next.js export to a shared host (e.g. DreamHost) via SCP.

All host-specific values are read from environment variables so no credentials
live in this file. Set them once per shell session (or in `~/.zshrc`):

```bash
export BET_DEPLOY_HOST="your-host.example.com"   # SSH/SCP host
export BET_DEPLOY_USER="your-ssh-user"           # SSH user
export BET_DEPLOY_PASSWORD="••••••••"            # from your password manager
export BET_DEPLOY_PATH="~/brighteyedtherapy.com/" # remote site root
```

## BEFORE FIRST DEPLOY: Host Setup

1. **Add the domain in your host's panel** and choose "Fully Hosted" so the
   server creates the remote site root.
2. **Point DNS at the host** — either transfer the registration or update the
   nameservers at your current registrar. Allow 24–48h for propagation.
3. **Enable HTTPS** (Let's Encrypt) once the domain resolves.

## Prerequisites

- `ssh`, `scp`, `expect` available in Terminal (all standard on macOS)
- `npm run build` completed successfully (verify `out/` directory exists)
- The `BET_DEPLOY_*` environment variables above are set

## Standard Deployment Flow

### Step 1 — Build

```bash
cd WEBSITES/brighteyedtherapy.com
npm run build
ls out/   # Verify output exists: should contain index.html and other pages
```

### Step 2 — Deploy with expect script

Run from the project root. The script reads `BET_DEPLOY_*` from the environment.

```bash
expect << 'EOF'
set timeout 120
spawn scp -r out/. $env(BET_DEPLOY_USER)@$env(BET_DEPLOY_HOST):$env(BET_DEPLOY_PATH)
expect {
    -re ".*assword:.*" { send "$env(BET_DEPLOY_PASSWORD)\r" }
    timeout { puts "Timed out waiting for password prompt"; exit 1 }
}
expect eof
puts "Deploy complete"
EOF
```

### Step 3 — Verify

```bash
# Quick curl check (may return 403 from a CDN/bot filter — use browser if so)
curl -I https://brighteyedtherapy.com

# Or take a Playwright screenshot against the live domain
npx playwright screenshot https://brighteyedtherapy.com /tmp/bet-live-check.png --full-page 2>/dev/null || \
  open https://brighteyedtherapy.com
```

---

## Targeted Deploys (when only some files changed)

After build, deploy specific directories or files:

```bash
# Deploy a single page (e.g., after updating the About page)
expect << 'EOF'
set timeout 30
spawn scp -r out/about $env(BET_DEPLOY_USER)@$env(BET_DEPLOY_HOST):$env(BET_DEPLOY_PATH)
expect -re ".*assword:.*" { send "$env(BET_DEPLOY_PASSWORD)\r" }
expect eof
EOF

# Deploy just the root index
expect << 'EOF'
set timeout 30
spawn scp out/index.html $env(BET_DEPLOY_USER)@$env(BET_DEPLOY_HOST):$env(BET_DEPLOY_PATH)
expect -re ".*assword:.*" { send "$env(BET_DEPLOY_PASSWORD)\r" }
expect eof
EOF
```

---

## Full Deploy (all static files)

Use for initial launch or when many files have changed:

```bash
expect << 'EOF'
set timeout 120
spawn scp -r out/. $env(BET_DEPLOY_USER)@$env(BET_DEPLOY_HOST):$env(BET_DEPLOY_PATH)
expect {
    -re ".*assword:.*" { send "$env(BET_DEPLOY_PASSWORD)\r" }
    timeout { puts "Timed out waiting for password prompt"; exit 1 }
}
expect eof
puts "Deploy complete"
EOF
```

---

## SSH Access

For server-side commands (checking files, clearing anything):

```bash
expect << 'EOF'
set timeout 30
spawn ssh $env(BET_DEPLOY_USER)@$env(BET_DEPLOY_HOST)
expect -re ".*assword:.*" { send "$env(BET_DEPLOY_PASSWORD)\r" }
expect "$ " { send "ls ~/brighteyedtherapy.com/\r" }
expect "$ " { send "exit\r" }
expect eof
EOF
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `Permission denied` | Verify `BET_DEPLOY_USER` and the password in your password manager |
| SCP hangs at password | Use the `expect` script above — it handles the prompt |
| Site shows old content | Hard-refresh browser (Cmd+Shift+R). If a CDN is in front, purge its cache |
| `out/` directory missing | Run `npm run build` first |
| 403 on curl probe | Likely CDN/bot filtering — verify with browser instead |
