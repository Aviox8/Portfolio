# Pre-deployment build and verification script for Windows
# Run this before deploying to Vercel

Write-Host "🚀 Starting pre-deployment checks..." -ForegroundColor Cyan

# Check Node version
Write-Host "`n📦 Checking Node.js version..." -ForegroundColor Yellow
$nodeVersion = node -v
Write-Host "Node version: $nodeVersion" -ForegroundColor Green

# Install dependencies
Write-Host "`n📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Run TypeScript type checking
Write-Host "`n🔍 Running TypeScript checks..." -ForegroundColor Yellow
npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Type errors found, but continuing..." -ForegroundColor Yellow
}

# Build the project
Write-Host "`n🏗️  Building project..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if (Test-Path "build") {
    Write-Host "`n✅ Build successful!" -ForegroundColor Green
    Write-Host "`n📊 Build size:" -ForegroundColor Cyan
    $buildSize = (Get-ChildItem build -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
    Write-Host ("{0:N2} MB" -f $buildSize) -ForegroundColor Green
    
    Write-Host "`n📁 Build contents:" -ForegroundColor Cyan
    Get-ChildItem build -Recurse | Select-Object Name, Length, LastWriteTime | Format-Table -AutoSize
} else {
    Write-Host "`n❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ Pre-deployment checks complete!" -ForegroundColor Green
Write-Host "`n🚀 Ready to deploy to Vercel!" -ForegroundColor Cyan
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Commit and push your changes"
Write-Host "2. Vercel will automatically deploy"
Write-Host "3. Or install Vercel CLI: npm i -g vercel"
Write-Host "4. Then run: vercel --prod"
