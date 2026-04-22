# AIBRY Masterclass Landing

Static React landing page built with Vite.

## Windows Requirements

- Node.js `^20.19.0 || >=22.12.0`
- npm, using the committed `package-lock.json`

## Local Development

```powershell
npm install
npm run dev
```

Vite development serves on `http://localhost:5173` unless that port is already in use. To expose the dev server on the LAN, pass an explicit host:

```powershell
npm run dev -- --host 0.0.0.0
```

## Local Static Runtime

```powershell
npm install
npm run build
npm start
```

`npm start` serves the built `dist` folder with `serve` on `http://0.0.0.0:8083`. This is the same port Fedora nginx proxies for `apps.aibry.shop`.

## Durable Runtime With PM2

PM2 is appropriate only when this static site must keep running after the PowerShell window closes.

```powershell
npm install
npm run build
pm2 start ecosystem.config.cjs
pm2 save
```

The PM2 config runs the real `serve` Node entrypoint instead of treating a command string or the `dist` directory as a script path.

Useful PM2 commands:

```powershell
pm2 status
pm2 logs aibry-masterclass-landing
pm2 restart aibry-masterclass-landing
pm2 stop aibry-masterclass-landing
```

## Runtime Notes

- Required environment variables: none.
- Backend/API dependency: none.
- Fedora-hosted service dependency: none in the app source. Historical Fedora paths only appear in old log files.
- Static assets are served from `public/screenshots` and are referenced with root-relative `/screenshots/...` URLs.
