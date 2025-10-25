@echo off
echo ========================================
echo    B站链接测试工具
echo ========================================

echo 正在编译测试程序...
javac -cp src -d out src/LinkTester.java

if %ERRORLEVEL% NEQ 0 (
    echo ❌ 编译失败！
    pause
    exit /b 1
)

echo ✅ 编译成功！
echo.
echo 启动链接测试工具...
echo 这个工具会测试5个真实的B站链接：
echo 1. 西红柿炒蛋
echo 2. 宫保鸡丁  
echo 3. 红烧肉
echo 4. 酸辣土豆丝
echo 5. 青椒肉丝
echo.
echo 如果链接能正常打开浏览器并跳转到B站，说明功能正常！
echo.

java -cp out LinkTester
