@echo off
chcp 65001 >nul
color 0A
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo           🚀 GitHub Pages 一键上传工具
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 📝 使用说明：
echo.
echo 1. 这个脚本会自动上传文件到GitHub
echo 2. 您需要先创建一个GitHub Personal Access Token
echo 3. 然后输入Token，脚本会自动完成上传
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 🔑 如何创建Token：
echo.
echo 1. 访问：https://github.com/settings/tokens
echo 2. 点击 "Generate new token (classic)"
echo 3. Note 填写：cooking-assistant
echo 4. 勾选：repo (所有选项)
echo 5. 点击 "Generate token"
echo 6. 复制Token（只显示一次）
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 💡 提示：如果您还没有创建Token，请先按Ctrl+C退出
echo          创建Token后再运行此脚本
echo.
echo ═══════════════════════════════════════════════════════
echo.
pause
echo.

echo 📝 请输入您的GitHub Personal Access Token：
echo （输入时不会显示，输入完按回车）
echo.
set /p TOKEN=Token: 

if "%TOKEN%"=="" (
    echo.
    echo ❌ Token不能为空！
    pause
    exit
)

echo.
echo ═══════════════════════════════════════════════════════
echo 🚀 开始上传...
echo ═══════════════════════════════════════════════════════
echo.

cd /d "%~dp0website"

echo 📦 初始化Git仓库...
git init
if errorlevel 1 (
    echo.
    echo ❌ Git初始化失败！请确保已安装Git
    echo 下载Git：https://git-scm.com/download/win
    pause
    exit
)

echo.
echo 📝 配置Git用户信息...
git config user.name "xieziji9-alt"
git config user.email "xieziji9-alt@users.noreply.github.com"

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
echo 🌐 设置远程仓库...
git branch -M main
git remote remove origin 2>nul
git remote add origin https://%TOKEN%@github.com/xieziji9-alt/cooking-assistant.git

echo.
echo 📤 上传到GitHub...
git push -u origin main --force

if errorlevel 1 (
    echo.
    echo ═══════════════════════════════════════════════════════
    echo ❌ 上传失败！
    echo ═══════════════════════════════════════════════════════
    echo.
    echo 可能的原因：
    echo 1. Token无效或权限不足
    echo 2. 网络连接问题
    echo 3. 仓库不存在或无权限
    echo.
    echo 请检查后重试
    echo.
    pause
    exit
)

echo.
echo ═══════════════════════════════════════════════════════
echo ✅ 上传成功！
echo ═══════════════════════════════════════════════════════
echo.
echo 📝 接下来请手动完成最后一步：
echo.
echo 1. 访问：https://github.com/xieziji9-alt/cooking-assistant/settings/pages
echo 2. Source 选择 "Deploy from a branch"
echo 3. Branch 选择 "main" 和 "/ (root)"
echo 4. 点击 "Save"
echo 5. 等待1-2分钟
echo.
echo 🌐 您的网站地址：
echo https://xieziji9-alt.github.io/cooking-assistant/
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 🎉 恭喜！文件已成功上传到GitHub！
echo.
echo 💡 提示：我现在会自动打开GitHub Pages设置页面
echo          请按照上面的步骤完成最后的设置
echo.
pause

start https://github.com/xieziji9-alt/cooking-assistant/settings/pages

echo.
echo 🎊 完成后，您的网站就上线了！
echo.
pause

