#!/bin/bash
set -e

echo "📦 Building Quantum Market Ready..."

# Install dependencies
pnpm install

# Build all packages
pnpm turbo run build

# Build web app
cd apps/web && pnpm build && cd ../..

# Build mobile
cd apps/mobile && pnpm build:android || echo "Android build skipped" && cd ../..

# Build desktop
cd apps/desktop && pnpm build || echo "Desktop build skipped" && cd ../..

echo "✅ Build complete!"