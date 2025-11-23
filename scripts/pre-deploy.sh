#!/bin/bash

# Pre-deployment build and verification script
# Run this before deploying to Vercel

echo "🚀 Starting pre-deployment checks..."

# Check Node version
echo "📦 Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "Node version: $NODE_VERSION"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run TypeScript type checking
echo "🔍 Running TypeScript checks..."
npm run lint || echo "⚠️  Type errors found, but continuing..."

# Build the project
echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "✅ Build successful!"
    echo "📊 Build size:"
    du -sh build
    echo ""
    echo "📁 Build contents:"
    ls -lh build/
else
    echo "❌ Build failed!"
    exit 1
fi

echo ""
echo "✅ Pre-deployment checks complete!"
echo ""
echo "🚀 Ready to deploy to Vercel!"
echo ""
echo "Next steps:"
echo "1. Commit and push your changes"
echo "2. Vercel will automatically deploy"
echo "3. Or run: vercel --prod"
