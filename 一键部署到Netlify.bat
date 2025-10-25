@echo off
chcp 65001 >nul
echo ========================================
echo    🚀 一键部署到 Netlify
echo ========================================
echo.
echo 📋 部署步骤：
echo.
echo 1. 打开浏览器访问：https://app.netlify.com/
echo 2. 登录您的账号
echo 3. 找到 lebronjame.site 网站
echo 4. 点击 "Deploys" 标签
echo 5. 将当前文件夹拖拽到上传区域
echo.
echo ========================================
echo 💡 提示：
echo    - 确保修改了 script.js 文件
echo    - 上传后等待几秒钟
echo    - 刷新网站测试（Ctrl + F5）
echo ========================================
echo.
echo 按任意键打开 Netlify 网站...
pause >nul

start https://app.netlify.com/

echo.
echo ✅ 浏览器已打开！
echo.
echo 📂 当前文件夹路径：
echo    %cd%
echo.
echo 请将此文件夹拖拽到 Netlify 的部署区域！
echo.
pause

