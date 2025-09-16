#!/bin/bash
# Stagewise 设置脚本

echo "🚀 设置教育费用计算器的 Stagewise 可视化编辑环境..."

# 确保在正确目录
cd "/Users/zhangxiaojing/Desktop/教育费用计算器"

# 检查服务器状态
echo "📡 检查 HTTP 服务器状态..."
if lsof -i :3000 > /dev/null 2>&1; then
    echo "✅ HTTP 服务器正在端口 3000 运行"
else
    echo "❌ HTTP 服务器未运行，正在启动..."
    python3 -m http.server 3000 --directory . &
    sleep 3
fi

# 测试页面访问
echo "🧪 测试页面访问..."
if curl -s http://localhost:3000/education-planner.html | grep -q "教育规划计算器"; then
    echo "✅ 页面可以正常访问"
else
    echo "❌ 页面访问失败"
    exit 1
fi

# 启动 Stagewise
echo "🎨 启动 Stagewise 可视化编辑器..."
npx stagewise@latest --port 3000 &

sleep 5

# 打开浏览器
echo "🌐 打开浏览器..."
open http://localhost:3000/education-planner.html

echo ""
echo "🎉 Stagewise 设置完成！"
echo "📊 项目信息："
echo "   - 项目路径: /Users/zhangxiaojing/Desktop/教育费用计算器"
echo "   - 开发服务器: http://localhost:3000"
echo "   - 项目类型: HTML"
echo "   - 入口文件: education-planner.html"
echo ""
echo "💡 使用说明："
echo "   - 页面已在浏览器中打开"
echo "   - Stagewise 工具栏应该显示在页面上"
echo "   - 可以直接在浏览器中进行可视化编辑"
echo ""
