# Diversey • Barchester Checklist (PWA)

Offline‑ready, installable Progressive Web App for field teams.

## Features
- Installable (manifest + service worker)
- Offline caching (first visit online, then works offline)
- Stale‑while‑revalidate caching for fast reloads
- Bootstrap UI, Diversey‑styled header
- Stock entry with Copy/CSV/Email helpers
- L5000 wash‑count reset modal

## Quick Start
1. **Download** this folder or the ZIP.
2. Host the files:
   - **GitHub Pages** (recommended, free): push to a repo and enable Pages → `main` → `/root`.
   - Any static host (Netlify, Cloudflare Pages, Firebase Hosting, S3).
3. Visit the site once online. The service worker will cache assets for offline use.
4. Tap **Install** (top‑right) when prompted to add to Home Screen.

## Files
- `index.html` — App UI & logic
- `css/styles.css` — Minimal brand styles
- `js/pwa.js` — SW registration & install button
- `service-worker.js` — Caching logic
- `manifest.json` — PWA metadata
- `icons/` — PWA icons (placeholders)

## Notes
- External CDN assets (Bootstrap CSS/JS) are cached on first load for offline use.
- To update, bump `CACHE_VERSION` in `service-worker.js` (e.g., `v1.0.1`) so clients fetch the latest.
- Mailto actions open your email client; they don't require network to compose.

## Lighthouse Tips
- Serve over HTTPS (GitHub Pages does this by default).
- Keep images optimized and avoid blocking requests.
- First load must be online to seed the cache.

## License
Internal use for Diversey field teams.
