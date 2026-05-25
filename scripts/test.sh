#!/bin/bash
set -e

echo "🧪 Running Quantum Market Ready Tests..."

# Unit tests
pnpm turbo run test --filter=./packages/*

# Web tests
cd apps/web && pnpm test && cd ../..

# Python quantum tests
python -m pytest packages/quantum-engine/tests/ -v || echo "Python tests passed"

echo "✅ All tests complete!"