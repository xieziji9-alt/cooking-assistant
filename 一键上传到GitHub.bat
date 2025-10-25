@echo off
chcp 65001 >nul
echo ═══════════════════════════════════════════════════════
echo 🚀 做菜小助手 - 一键上传到GitHub
echo ═══════════════════════════════════════════════════════
echo.

echo 📝 准备上传文件...
echo.

cd /d "%~dp0website"

echo 🔧 初始化Git仓库...
git init

echo.
echo 📦 添加文件...
git add index.html
git add styles.css
git add script.js
git add app.js
git add autoRecipes.js

echo.
echo 💾 提交更改...
git commit -m "Add cooking assistant website"

echo.
echo 🌐 连接到GitHub仓库...
git branch -M main
git remote add origin https://github.com/xieziji9-alt/cooking-assistant.git

echo.
echo 📤 上传到GitHub...
git push -u origin main

echo.
echo ═══════════════════════════════════════════════════════
echo ✅ 上传完成！
echo ═══════════════════════════════════════════════════════
echo.
echo 您的网站地址：
echo https://xieziji9-alt.github.io/cooking-assistant/
echo.
echo 📝 接下来请手动完成：
echo 1. 访问：https://github.com/xieziji9-alt/cooking-assistant
echo 2. 点击 Settings → Pages
echo 3. Source 选择 "Deploy from a branch"
echo 4. Branch 选择 "main"
echo 5. 点击 Save
echo 6. 等待1-2分钟
echo 7. 访问您的网站！
echo.
echo ═══════════════════════════════════════════════════════
pause

