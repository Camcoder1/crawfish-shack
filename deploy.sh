#!/bin/bash
set -euo pipefail

# ─────────────────────────────────────────────────────────
# The Crawfish Shack — Build & Deploy to AWS
# Target: shack.cameronwblair.com
# ─────────────────────────────────────────────────────────

S3_BUCKET="shack-cameronwblair-com"
DISTRIBUTION_ID="E275PHE7MCHWEB"

echo "============================================"
echo "  The Crawfish Shack — Deploy Script"
echo "============================================"
echo ""

# Step 1: Check prerequisites
echo "Step 1/5: Checking prerequisites..."
command -v aws >/dev/null 2>&1 || { echo "ERROR: AWS CLI not found"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "ERROR: npm not found"; exit 1; }
echo "   OK"
echo ""

# Step 2: Clean install
echo "Step 2/5: Installing dependencies..."
npm ci
echo "   OK"
echo ""

# Step 3: Build
echo "Step 3/5: Building static export..."
npm run build
echo "   OK"
echo ""

# Step 4: Sync to S3 with proper cache headers
echo "Step 4/5: Syncing to S3..."

# HTML files - no cache
aws s3 sync out/ "s3://${S3_BUCKET}/" \
  --delete \
  --cache-control "public, max-age=0, must-revalidate" \
  --exclude "_next/*"

# Static assets - immutable cache
aws s3 sync out/_next/ "s3://${S3_BUCKET}/_next/" \
  --cache-control "public, max-age=31536000, immutable"

echo "   OK"
echo ""

# Step 5: Invalidate CloudFront cache
echo "Step 5/5: Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "${DISTRIBUTION_ID}" \
  --paths "/*" \
  --query "Invalidation.Id" \
  --output text)
echo "   Invalidation: ${INVALIDATION_ID}"
echo "   OK"
echo ""

echo "============================================"
echo "  Deploy complete!"
echo "  https://shack.cameronwblair.com"
echo "============================================"
