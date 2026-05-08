# AGENTS.md — AIBRY Masterclass Landing

## Scope

This file applies to this repository:

```txt
C:\Users\bryan\aibry\projects\aibry-masterclass-landing
```

If this file conflicts with a parent `AGENTS.md`, follow this repo-level file for repo-specific work and the parent file for broad AIBRY operating policy.

## AIBRY Host Split

AIBRY uses a split-host model:

```txt
Fedora = infrastructure/control-plane host
Windows = app/runtime/operator host
```

Fedora owns infrastructure/control-plane concerns such as Postgres, durable storage, Cloudflare ingress, admin-proxy, aibry-admin, node-agent, systemd/Podman/Docker infrastructure, backups, rollback artifacts, and Fedora worker services.

Windows owns PM2-managed app runtimes, migrated app/API/UI processes where applicable, Garage Admin V2, and the Windows runtime worker.

Do not blur Fedora and Windows responsibilities.

## Secrets Policy

Never expose, log, commit, render, or pass to the frontend:

- `.env`
- `.env.*`
- API keys
- database passwords
- Cloudflare Access credentials
- AIBRY auth tokens
- worker auth tokens
- OAuth access tokens
- OAuth refresh tokens
- private keys/certificates
- service account JSON
- raw PM2 environment dumps

Do not ask the operator to paste secrets into chat.

Do not commit `node_modules`, unintended `dist`/build churn, raw logs, temporary browser profiles, database dumps, backup archives, or secrets.

## Git Hygiene

Before changes:

```bash
git status --short
git branch --show-current
git remote -v
```

Before any commit:

```bash
git diff --stat
git diff
```

Prefer targeted changes over broad rewrites. Avoid force-pushes unless explicitly approved.

## Project Role

This repo serves the AIBRY apps/masterclass landing page.

Current known public site:

```txt
https://apps.aibry.shop/
```

Windows owns the app/runtime surface.

## Current ChordMaster Hero Context

The landing hero currently features ChordMaster.

Known ChordMaster public target:

```txt
https://chordmaster.aibry.shop
```

Known screenshot paths:

```txt
public/screenshots/chordmaster/ChordMaster1.PNG
public/screenshots/chordmaster/ChordMaster2.PNG
```

Cache-busting for ChordMaster screenshot paths was previously applied/recommended. Preserve cache-busting when changing screenshot assets.

## Asset Rules

Do not commit unintended build output unless this repo intentionally tracks it.

Do not commit `node_modules`.

When replacing public assets, verify file names, references, and cache behavior.

## Layout Rules

Preserve responsive hero layout. Be careful with wide app titles such as `ChordMaster` on desktop.

## Validation

Common checks:

```bash
npm run build
```

If runtime validation is available:

```txt
local / returns 200
public / references rebuilt asset bundle
ChordMaster screenshot path returns 200
```

Do not restart PM2 unless explicitly requested.

