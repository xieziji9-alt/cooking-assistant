@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   做菜小助手 - 快速验证视频链接
echo ========================================
echo.
echo 正在打开几个示例视频，请验证是否正常播放...
echo.

echo [1/5] 打开：西红柿炒鸡蛋教程
start https://www.bilibili.com/video/BV1gY411C7BY
timeout /t 2 >nul

echo [2/5] 打开：酸辣土豆丝教程
start https://www.bilibili.com/video/BV1BHZmYjENX
timeout /t 2 >nul

echo [3/5] 打开：宫保鸡丁教程
start https://www.bilibili.com/video/BV1gt411o78F
timeout /t 2 >nul

echo [4/5] 打开：麻婆豆腐教程
start https://www.bilibili.com/video/BV1Rs411V7i9
timeout /t 2 >nul

echo [5/5] 打开：红烧肉教程
start https://www.bilibili.com/video/BV11xpjezEBV
timeout /t 2 >nul

echo.
echo ========================================
echo   验证完成！
echo ========================================
echo.
echo 请在浏览器中检查以上5个视频是否正常播放
echo.
echo 如果所有视频都能正常播放，说明视频链接更新成功！
echo.
pause

