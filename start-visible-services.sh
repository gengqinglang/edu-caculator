#!/bin/bash
# 可视化启动服务脚本 - 所有服务都在终端中显示

echo "🚀 启动可视化服务管理..."
echo "📍 项目路径: $(pwd)"
echo "🕐 启动时间: $(date)"
echo ""

echo "🌐 启动HTTP服务器 (端口3000)..."
echo "📄 服务文件: education-planner.html"
echo "🔗 访问地址: http://localhost:3000/education-planner.html"
echo ""

# 在新的终端窗口中启动HTTP服务器
osascript -e "tell application \"Terminal\" to do script \"cd '$PWD' && echo '🌐 HTTP服务器启动中...' && echo '📍 目录: $PWD' && echo '🔗 访问: http://localhost:3000/education-planner.html' && echo '' && python3 -m http.server 3000 --directory .\""

sleep 3

echo "⏳ 等待HTTP服务器启动..."
# 等待服务器启动
counter=0
while ! curl -s http://localhost:3000 > /dev/null 2>&1 && [ $counter -lt 10 ]; do
    echo "   等待中... ($counter/10)"
    sleep 1
    counter=$((counter + 1))
done

if [ $counter -lt 10 ]; then
    echo "✅ HTTP服务器启动成功!"
else
    echo "❌ HTTP服务器启动超时"
fi
echo ""

echo "🎨 启动Stagewise可视化编辑器..."
echo "🔗 Stagewise访问地址: http://localhost:4000 (预计)"
echo ""

# 在新的终端窗口中启动Stagewise
osascript -e "tell application \"Terminal\" to do script \"cd '$PWD' && echo '🎨 Stagewise启动中...' && echo '📍 目录: $PWD' && echo '🔗 连接到: http://localhost:3000' && echo '' && npx stagewise@latest --app-port 3000\""

echo "✅ 服务启动命令已执行!"
echo ""
echo "📊 当前服务状态:"
echo "   🌐 HTTP服务器: 端口3000 (新终端窗口)"
echo "   🎨 Stagewise: 连接到3000端口 (新终端窗口)"
echo ""
echo "💡 使用说明:"
echo "   - 每个服务都在独立的终端窗口中运行"
echo "   - 您可以在各自的窗口中看到实时日志"
echo "   - 要停止服务，在对应窗口中按 Ctrl+C"
echo "   - 或使用 ./stop-services.sh 停止所有服务"
echo ""
echo "🎉 启动完成!"
