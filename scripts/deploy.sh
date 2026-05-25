#!/bin/bash
set -e

echo "🚀 Deploying Quantum Market Ready App..."

# Build Docker images
docker-compose -f docker/docker-compose.yml build

# Start services
docker-compose -f docker/docker-compose.yml up -d

# Wait for services
sleep 10

# Verify deployment
curl -f http://localhost:8080/health || exit 1

echo "✅ Deployment complete!"