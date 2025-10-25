@echo off
echo === 快速链接测试 ===

echo 正在编译...
javac -cp src -d out src/QuickLinkTest.java

if %ERRORLEVEL% NEQ 0 (
    echo ❌ 编译失败！
    pause
    exit /b 1
)

echo ✅ 编译成功！
echo 启动测试工具...

java -cp out QuickLinkTest
