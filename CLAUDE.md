# The Crawfish Shack — shack.cameronwblair.com

## Overview
Louisiana-themed crawfish shack website. Single-page static Next.js site deployed
to AWS S3 + CloudFront as a subdomain of cameronwblair.com.

## Tech Stack
- **Framework**: Next.js 16 (static export)
- **UI**: React 19, Tailwind CSS 4, Lucide React icons
- **Fonts**: Playfair Display (display), Source Sans 3 (body)
- **Hosting**: AWS S3 + CloudFront
- **DNS**: Route53 (cameronwblair.com hosted zone)
- **SSL**: ACM wildcard certificate (*.cameronwblair.com)

## AWS Resources
- **S3 Bucket**: `shack-cameronwblair-com` (us-east-1)
- **CloudFront Distribution**: `E275PHE7MCHWEB` (d19o4bsuf3ypk2.cloudfront.net)
- **CloudFront Function**: `shack-url-rewrite` (URL rewriting for SPA routing)
- **Origin Access Control**: `E2UNY3WC2IGXBE` (S3 access via CloudFront only)
- **ACM Certificate**: `695e213b-70eb-4357-8193-5dff7f2bf443` (shared wildcard)
- **Route53 Zone**: `Z06762271E585ETPNMX0G` (cameronwblair.com)
- **DNS Records**: A + AAAA alias → CloudFront distribution
- **AWS Account**: 871104587854

## Architecture
```
Route53: shack.cameronwblair.com → A/AAAA alias
  → CloudFront (E275PHE7MCHWEB)
    → CloudFront Function (viewer-request): URL rewrite /path → /path/index.html
    → Origin: S3 bucket (shack-cameronwblair-com) via OAC
    → Custom error: 403/404 → /404/index.html
```

## Project Structure
```
crawfishsite/
├── src/app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Full single-page site (all sections)
│   └── globals.css       # Cajun theme, animations, utilities
├── deploy.sh             # Build + S3 sync + CloudFront invalidation
├── next.config.ts        # Static export config
├── package.json
└── CLAUDE.md             # This file
```

## Color Palette (Cajun Theme)
- `crawfish` (#c62828) — primary red
- `crawfish-dark` (#8e0000) — dark red
- `crawfish-light` (#ff5f52) — bright red accent
- `cajun-orange` (#e65100) — spicy orange
- `mustard` (#f9a825) — gold/yellow highlights
- `cream` (#fdf6e3) — background
- `bark` (#3e2723) — dark brown sections
- `charcoal` (#212121) — near-black footer

## Development
```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # Static export → out/
```

## Deployment
When the user says "deploy" or "push to AWS", run these two steps:
1. **Deploy to AWS**: `bash deploy.sh` (builds, syncs to S3, invalidates CloudFront)
2. **Push to GitHub**: `git add -A && git commit && git push origin main`

AWS CLI is already configured — no extra auth needed.

```bash
bash deploy.sh       # Full build + S3 sync + CloudFront invalidation
```

## GitHub
- **Repo**: https://github.com/Camcoder1/crawfish-shack
- **Remote**: `origin` (HTTPS)

## Cache Strategy
- HTML files: `public, max-age=0, must-revalidate`
- Static assets (_next/): `public, max-age=31536000, immutable`
- CloudFront error pages: 10s TTL
- CloudFront Function handles SPA URL rewriting

## Patterns (consistent with other cameronwblair.com sites)
- Static Next.js export (output: 'export', images: unoptimized, trailingSlash)
- S3 + CloudFront + Route53 hosting
- CloudFront Function for clean URL routing
- ACM wildcard cert shared across all subdomains
- Same AWS account: 871104587854
