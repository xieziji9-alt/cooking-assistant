@echo off
echo ========================================
echo    B站链接完整验证工具
echo ========================================

echo 正在编译所有Java文件...
javac -cp src -d out src/model/*.java src/service/*.java src/ui/*.java src/Main.java src/LinkVerifier.java

if %ERRORLEVEL% NEQ 0 (
    echo ❌ 编译失败！
    pause
    exit /b 1
)

echo ✅ 编译成功！
echo.
echo 启动链接验证器...
echo 这个工具会：
echo 1. 显示所有加载的菜谱数量
echo 2. 逐一测试每个B站链接
echo 3. 尝试在浏览器中打开链接
echo 4. 显示详细的成功/失败报告
echo.

java -cp out LinkVerifier
