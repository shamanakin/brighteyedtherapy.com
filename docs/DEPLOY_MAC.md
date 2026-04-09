# Bright Eyed Therapy — macOS Deployment Guide

Deploy the static Next.js export to DreamHost via SCP.

## BEFORE FIRST DEPLOY: DreamHost Domain Setup Required

The domain `brighteyedtherapy.com` is currently on Wix. Before you can deploy to DreamHost, complete these steps:

1. **Add the domain in DreamHost Panel**
   - Log into panel.dreamhost.com
   - Go to Websites → Add a Website
   - Add `brighteyedtherapy.com` — choose "Fully Hosted"
   - This creates `~/brighteyedtherapy.com/` on the server

2. **Transfer the domain or update DNS**
   - Option A (recommended): Transfer the domain registration to DreamHost (Domains → Transfer Registration)
   - Option B: Keep domain at current registrar, change nameservers to DreamHost nameservers (ns1.dreamhost.com / ns2.dreamhost.com / ns3.dreamhost.com)
   - DNS propagation takes 24-48 hours

3. **Enable HTTPS**
   - Once domain resolves, enable Let's Encrypt SSL in DreamHost Panel → Secure Certificates

4. **Then deploy** using the steps below

The DreamHost SSH host for the `shamanakin` account is `pdx1-shared-a3-02.dreamhost.com`.

## Server Details

| Item | Value |
|------|-------|
| **SSH/SCP host** | `pdx1-shared-a3-02.dreamhost.com` |
| **SSH user** | `shamanakin` |
| **Remote site root** | `~/brighteyedtherapy.com/` |

Credentials: `adminvault/vault/CREDENTIALS.md` — password: vault entry for `brighteyedtherapy.com`.

## Prerequisites

- `ssh`, `scp`, `expect` available in Terminal (all standard on macOS)
- `npm run build` completed successfully (veriy `out/` directory exists)

## Standard Deployment Flow

### Step 1 — Build

```bash
cd WEBSITES/brighteyedtherapy.com
npm run build
ls out/   # Verify output exists: should contain index.html and other pages
```

### Step 2 — Deploy with expect script

Run from the project root. Replace `YOUR_PASSWORD` with the vault password.

```bash
expect << 'EOF'
set timeout 60
spawn scp -r out/. shamanakin@pdx1-shared-a3-02.dreamhost.com:~/brighteyedtherapy.com/
expect {
    -re ".*assword:.*" { send "***REMOVED***\r" }
    timeout { puts "Timed out"; exit 1 }
}
expect eof
EOF
```

### Step 3 — Verify

```bash
# Quick curl check (may return 403 from Cloudflare bot blocking — use browser if so)
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
spawn scp -r out/about shamanakin@pdx1-shared-a3-02.dreamhost.com:~/brighteyedtherapy.com/
expect -re ".*assword:.*" { send "***REMOVED***\r" }
expect eof
EOF

# Deploy just the root index and assets
expect << 'EOF'
set timeout 30
spawn scp out/index.html shamanakin@pdx1-shared-a3-02.dreamhost.com:~/brighteyedtherapy.com/
expect -re ".*assword:.*" { send "***REMOVED***\r" }
expect eof
EOF
```

---

## Full Deploy (all static files)

Use for initial launch or when many files have changed:

```bash
expect << 'EOF'
set timeout 120
spawn scp -r out/. shamanakin@pdx1-shared-a3-02.dreamhost.com:~/brighteyedtherapy.com/
expect {
    -re ".*assword:.*" { send "***REMOVED***\r" }
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
spawn ssh shamanakin@pdx1-shared-a3-02.dreamhost.com
expect -re ".*assword:.*" { send "***REMOVED***\r" }
expect "$ " { send "ls ~/brighteyedtherapy.com/\r" }
expect "$ " { send "exit\r" }
expect eof
EOF
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `Permission denied` | Verify SSH user (`shamanakin`) and password from vault |
| SCP hangs at password | Use the `expect` script above — it handles the prompt |
| Site shows old content | Hard-refresh browser (Cmd+Shift+R). If Cloudflare is in front, purge cache from Cloudflare dashboard |
| `out/` directory missing | Run `npm run build` first |
| 403 on curl probe | Likely Cloudflare bot blocking — verify with browser instead |
