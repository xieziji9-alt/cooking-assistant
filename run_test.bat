@echo off
echo === 编译Java程序 ===
javac -cp src -d out src/model/*.java src/service/*.java src/ui/*.java src/Main.java src/TestRecipeLoading.java src/TestBrowserOpen.java

if %ERRORLEVEL% NEQ 0 (
    echo ❌ 编译失败！
    pause
    exit /b 1
)

echo ✅ 编译成功！

echo.
echo === 测试浏览器打开功能 ===
java -cp out TestBrowserOpen

echo.
echo === 运行数据测试程序 ===
java -cp out TestRecipeLoading

echo.
echo === 运行主程序 ===
echo 按任意键启动主程序...
pause > nul
java -cp out Main
