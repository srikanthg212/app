#!/bin/bash
# Build script for Vercel to ensure CRACO is used

echo "🔧 Installing dependencies..."
yarn install

echo "🏗️ Building with CRACO..."
yarn build

echo "✅ Build complete!"
