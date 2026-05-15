# Internal Hosting

Use this guide when moving the Design Library from GitHub Pages to an internal Unilever-hosted environment, including a Supermicro server.

## Hosting Shape

The Design Library builds to static files. It does not require a Node server at runtime.

Build output:

```text
site/
```

Required hosted files:

- `site/index.html`
- `site/assets/*`
- `site/manifest.json`
- `site/developer-handoff.json`

Because `vite.config.ts` uses `base: "./"`, the built site can be hosted from a domain root or a subfolder.

## Build Command

Run:

```bash
npm ci
npm run qa
```

`npm run qa` produces the `site/` folder and validates the catalog, handoff data, tokens, contrast pairs, release metadata, and docs links.

For a faster local build after dependencies are installed:

```bash
npm run build
```

## Package For Handoff

To prepare a clean static folder for Supermicro or another internal host, run:

```bash
npm run qa
npm run visual-qa
npm run package:site
```

The package command writes:

```text
release/design-library-site/
```

That folder contains the full static site plus `_deployment/README.md` and `_deployment/checksums.json` for upload verification. The `release/` folder is generated locally and is not committed to git.

## Supermicro Deployment Option

Recommended first internal setup:

1. Build the app on a trusted machine or CI runner.
2. Run `npm run package:site`.
3. Copy the full `release/design-library-site/` folder to the Supermicro web root or static hosting directory.
4. Configure the web server to serve `index.html` for the Design Library route.
5. Confirm these URLs load from the internal network:
   - `/`
   - `/manifest.json`
   - `/developer-handoff.json`
6. Confirm a direct refresh on a catalog page still loads the app shell.

## Web Server Notes

For Nginx-style static hosting:

```nginx
location /design-library/ {
  alias /var/www/design-library/;
  try_files $uri $uri/ /design-library/index.html;
}
```

For root hosting:

```nginx
location / {
  root /var/www/design-library;
  try_files $uri $uri/ /index.html;
}
```

Adjust paths to match the actual Supermicro server layout.

## Internal Share Checklist

Before sharing the internal URL:

- Confirm `npm run qa` passed for the deployed build.
- Confirm `npm run visual-qa` passed locally or in CI.
- Confirm `npm run package:site` produced `release/design-library-site/`.
- Confirm the internal URL loads over the expected network or VPN.
- Confirm `manifest.json` and `developer-handoff.json` are accessible.
- Confirm no private credentials, tokens, or local machine paths are exposed in hosted output.
- Confirm the team knows GitHub Pages is the temporary public preview and the internal URL is the preferred Unilever share link once available.

## Security And Access

Decide with IT or the platform owner:

- Internal network only, VPN only, or broader authenticated access.
- Whether GitHub Pages should remain available after internal hosting is live.
- Whether the repo stays public, private, or mirrored internally.
- Whether generated JSON endpoints can be accessed by AI-agent tooling.

## Update Links After Internal Hosting

When the Supermicro URL is ready, update:

- `README.md`
- [Launch handoff](LAUNCH-HANDOFF.md)
- [Share-ready checklist](SHARE-READY-CHECKLIST.md)
- [Team review packet](TEAM-REVIEW-PACKET.md)
- [Release checklist](RELEASE-CHECKLIST.md)
- Any pinned team message or onboarding page.

Keep GitHub Pages as the fallback preview until the internal link is confirmed stable.
