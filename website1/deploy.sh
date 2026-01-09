#!/bin/bash

# Build and deploy script for GameZone website
echo "🚀 Building GameZone for deployment..."

# Install dependencies
npm install

# Build the project
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📦 Build output:"
    ls -la dist/
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    npx vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployment successful!"
        echo "🌐 Your website is live!"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
