@echo off
REM Email Setup Quick Start Guide for Windows
REM This script helps you set up email functionality

echo.
echo ==========================================
echo ISEC Contact Form - Email Setup
echo ==========================================
echo.

REM Check if .env.local exists
if exist .env.local (
    echo [✓] .env.local already exists
) else (
    echo [✓] Creating .env.local from template...
    copy .env.local.example .env.local
    echo [✓] Created! Now edit .env.local with your credentials
)

echo.
echo ==========================================
echo NEXT STEPS:
echo ==========================================
echo.
echo 1. Edit .env.local with your email credentials:
echo    - For Gmail: Generate App Password at myaccount.google.com/apppasswords
echo    - For Other Services: Use provided SMTP credentials
echo.
echo 2. Test the form:
echo    npm run dev
echo    Then navigate to http://localhost:3000/company/contact
echo.
echo 3. For testing without a real email service:
echo    - Use Mailtrap (https://mailtrap.io) - Free tier available
echo    - Get SMTP credentials from Mailtrap
echo    - Update .env.local
echo.
echo ==========================================
echo FILE LOCATIONS:
echo ==========================================
echo.
echo Configuration:      src\utils\mailer.js
echo Email Templates:    src\utils\emailTemplates.js
echo API Route:          src\app\api\contact\route.js
echo Contact Form:       src\app\company\contact\page.jsx
echo Environment Vars:   .env.local (create from .env.local.example)
echo.
echo Documentation:      EMAIL_SETUP_GUIDE.md
echo Summary:            IMPLEMENTATION_SUMMARY.md
echo.
echo ==========================================
echo SUPPORT:
echo ==========================================
echo.
echo Having issues? Check EMAIL_SETUP_GUIDE.md for troubleshooting
echo.
pause
