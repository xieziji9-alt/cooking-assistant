@echo off
chcp 65001 >nul
color 0B
cls

echo.
echo ═══════════════════════════════════════════════════════
echo.
echo           🚀 上传到GitHub - 超简单版
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 📝 只需2步：
echo.
echo 第1步：创建Token（2分钟）
echo 第2步：运行此脚本（1分钟）
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 🔑 第1步：创建GitHub Token
echo.
echo 1. 我会帮您打开Token创建页面
echo 2. 点击 "Generate new token (classic)"
echo 3. Note 填写：cooking
echo 4. Expiration 选择：No expiration
echo 5. 勾选：repo
echo 6. 点击 "Generate token"
echo 7. 复制Token（ghp_开头的一长串）
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 💡 准备好了吗？
echo.
echo 按任意键打开Token创建页面...
pause >nul

start https://github.com/settings/tokens/new

echo.
echo ═══════════════════════════════════════════════════════
echo.
echo ✅ Token创建页面已打开
echo.
echo 请按照上面的步骤创建Token
echo 创建完成后，复制Token并回到这里
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 📝 已经创建好Token了吗？
echo.
pause

cls
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo           🔑 输入您的Token
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 💡 提示：
echo - Token以 ghp_ 开头
echo - 输入时不会显示（这是正常的）
echo - 输入完按回车
echo.
echo ═══════════════════════════════════════════════════════
echo.

set /p TOKEN=请粘贴Token: 

if "%TOKEN%"=="" (
    echo.
    echo ❌ Token不能为空！
    echo.
    pause
    exit
)

echo.
echo ═══════════════════════════════════════════════════════
echo.
echo           🚀 开始上传...
echo.
echo ═══════════════════════════════════════════════════════
echo.

cd /d "%~dp0"

echo 📦 检查Git是否安装...
git --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ❌ 未检测到Git！
    echo.
    echo 正在打开Git下载页面...
    start https://git-scm.com/download/win
    echo.
    echo 请下载并安装Git后重新运行此脚本
    echo.
    pause
    exit
)

echo ✅ Git已安装
echo.

echo 📁 进入website目录...
cd website

echo 🔧 初始化Git仓库...
if exist .git (
    echo ✅ Git仓库已存在
) else (
    git init
    echo ✅ Git仓库初始化完成
)

echo.
echo 📝 配置Git用户信息...
git config user.name "xieziji9-alt"
git config user.email "xieziji9-alt@users.noreply.github.com"

echo.
echo 📦 添加所有文件...
git add .

echo.
echo 💾 提交更改...
git commit -m "Add cooking assistant website - 做菜小助手网站"

echo.
echo 🌐 设置远程仓库...
git remote remove origin 2>nul
git remote add origin https://%TOKEN%@github.com/xieziji9-alt/cooking-assistant.git

echo.
echo 📤 上传到GitHub...
echo （这可能需要几秒钟，请耐心等待...）
echo.

git branch -M main
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
    echo 3. 仓库不存在
    echo.
    echo 💡 解决方法：
    echo 1. 检查Token是否正确复制
    echo 2. 检查网络连接
    echo 3. 重新运行脚本
    echo.
    pause
    exit
)

cls
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo           ✅ 上传成功！
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 🎉 恭喜！文件已成功上传到GitHub！
echo.
echo 📁 您的仓库：
echo https://github.com/xieziji9-alt/cooking-assistant
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 📝 接下来您可以：
echo.
echo 方案1：使用GitHub Pages
echo   1. 访问仓库Settings → Pages
echo   2. Branch选择main，文件夹选择/website
echo   3. 保存并等待部署
echo   4. 网址：https://xieziji9-alt.github.io/cooking-assistant/
echo.
echo 方案2：使用Render（您已经创建了项目）
echo   1. 访问：https://dashboard.render.com
echo   2. 找到您的项目
echo   3. 连接GitHub仓库：cooking-assistant
echo   4. Root Directory填写：website
echo   5. 部署完成
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 💡 我现在会帮您打开相关页面
echo.
pause

echo.
echo 正在打开GitHub仓库...
start https://github.com/xieziji9-alt/cooking-assistant

echo.
echo 正在打开Render Dashboard...
start https://dashboard.render.com

echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 🎊 全部完成！
echo.
echo 现在您可以在Render上连接这个仓库了！
echo.
echo ═══════════════════════════════════════════════════════
echo.
pause

