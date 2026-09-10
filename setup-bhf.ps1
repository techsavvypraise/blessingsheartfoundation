$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host " Blessings Heart Foundation Website Setup" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# FOLDERS
$folders = @(
    "src\app\about",
    "src\app\about\founder",
    "src\app\about\mission-vision",
    "src\app\about\team",
    "src\app\what-we-do",
    "src\app\what-we-do\food-pantry",
    "src\app\what-we-do\medical-missions",
    "src\app\take-action",
    "src\app\take-action\volunteer",
    "src\app\news",
    "src\app\contact",
    "src\app\donate",
    "src\components\sections",
    "src\components\ui",
    "public\images\brand",
    "public\images\food-pantry",
    "public\images\medical",
    "public\images\team",
    "public\icons"
)

Write-Host "Creating folders..." -ForegroundColor Yellow

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "  Created: $folder" -ForegroundColor Green
    }
    else {
        Write-Host "  Exists:  $folder" -ForegroundColor DarkGray
    }
}

# FILES
$files = @(
    "src\app\about\founder\page.tsx",
    "src\app\about\mission-vision\page.tsx",
    "src\app\about\team\page.tsx",
    "src\app\what-we-do\page.tsx",
    "src\app\what-we-do\medical-missions\page.tsx",
    "src\app\take-action\volunteer\page.tsx",
    "src\app\news\page.tsx",
    "src\app\contact\page.tsx",
    "src\app\donate\page.tsx",
    "src\components\sections\Hero.tsx",
    "src\components\sections\CTA.tsx",
    "src\components\sections\SectionHeading.tsx"
)

Write-Host ""
Write-Host "Creating files..." -ForegroundColor Yellow

foreach ($file in $files) {
    if (!(Test-Path $file)) {
        New-Item -ItemType File -Path $file -Force | Out-Null
        Write-Host "  Created: $file" -ForegroundColor Green
    }
    else {
        Write-Host "  Exists:  $file" -ForegroundColor DarkGray
    }
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host " Setup completed successfully!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Pages available:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  /about/founder"
Write-Host "  /about/mission-vision"
Write-Host "  /about/team"
Write-Host "  /what-we-do"
Write-Host "  /what-we-do/food-pantry"
Write-Host "  /what-we-do/medical-missions"
Write-Host "  /take-action/volunteer"
Write-Host "  /news"
Write-Host "  /contact"
Write-Host "  /donate"
Write-Host ""

Write-Host "Existing files were NOT overwritten." -ForegroundColor Green
Write-Host ""