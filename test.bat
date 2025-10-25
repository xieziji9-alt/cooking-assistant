@echo off
echo 编译测试程序...
javac -d . src/model/*.java src/service/*.java src/test/*.java

if %errorlevel% neq 0 (
    echo 编译失败，请检查Java环境是否正确安装
    pause
    exit /b 1
)

echo 编译成功，运行测试...
java test.RecipeRecommendationServiceTest

pause
