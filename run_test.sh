#!/bin/bash

echo "=== 编译Java程序 ==="
javac -cp src -d out src/model/*.java src/service/*.java src/ui/*.java src/Main.java src/TestRecipeLoading.java

if [ $? -ne 0 ]; then
    echo "❌ 编译失败！"
    exit 1
fi

echo "✅ 编译成功！"

echo ""
echo "=== 运行测试程序 ==="
java -cp out TestRecipeLoading

echo ""
echo "=== 运行主程序 ==="
echo "按Enter键启动主程序..."
read
java -cp out Main
