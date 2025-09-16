#!/bin/bash
# 简化版可视化启动脚本

echo "🚀 教育费用计算器 - 服务启动脚本"
echo "================================================"
echo "📍 项目路径: $(pwd)"
echo "🕐 启动时间: $(date)"
echo ""

echo "💡 启动说明："
echo "   1. 这个脚本会帮您打开两个新的终端窗口"
echo "   2. 第一个窗口运行HTTP服务器 (端口3000)"
echo "   3. 第二个窗口运行Stagewise编辑器"
echo "   4. 所有日志都会在终端中实时显示"
echo ""

read -p "🤔 是否继续启动服务？(y/n): " confirm
if [[ $confirm != [yY] ]]; then
    echo "❌ 启动已取消"
    exit 0
fi

echo ""
echo "🌐 启动HTTP服务器..."

# 使用open命令打开新的终端窗口
open -a Terminal "$PWD" --args -e "echo '🌐 HTTP服务器 - 端口3000'; echo '📍 目录: $PWD'; echo '🔗 访问: http://localhost:3000/education-planner.html'; echo ''; python3 -m http.server 3000 --directory ."

sleep 2

echo "🎨 启动Stagewise编辑器..."

# 打开第二个终端窗口
open -a Terminal "$PWD" --args -e "echo '🎨 Stagewise可视化编辑器'; echo '📍 目录: $PWD'; echo '🔗 连接到: http://localhost:3000'; echo ''; npx stagewise@latest --app-port 3000"

echo ""
echo "✅ 启动完成!"
echo ""
echo "📊 服务信息:"
echo "   🌐 HTTP服务器: http://localhost:3000/education-planner.html"
echo "   🎨 Stagewise编辑器: 查看新打开的终端窗口"
echo ""
echo "🛑 停止服务:"
echo "   - 在各自的终端窗口中按 Ctrl+C"
echo "   - 或运行: ./stop-services.sh"
echo ""
