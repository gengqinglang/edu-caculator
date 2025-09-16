#!/bin/bash
# 停止所有本地服务脚本

echo "🛑 停止所有本地服务..."

# 停止占用3000和3001端口的所有进程
echo "📡 停止端口 3000 和 3001 的服务..."
lsof -ti:3000,3001 | xargs kill -9 2>/dev/null || true

# 停止所有Python HTTP服务器
echo "🐍 停止所有Python HTTP服务器..."
pkill -f "python3.*http.server" 2>/dev/null || true

# 停止所有Stagewise进程
echo "🎨 停止所有Stagewise进程..."
pkill -f stagewise 2>/dev/null || true
pkill -f "npx stagewise" 2>/dev/null || true

# 等待进程完全停止
sleep 3

# 验证端口是否已释放
echo "🔍 验证端口状态..."
if lsof -i :3000,3001 > /dev/null 2>&1; then
    echo "⚠️  仍有进程占用端口，进行强制清理..."
    lsof -ti:3000,3001 | xargs kill -9 2>/dev/null || true
    sleep 2
fi

# 最终检查
if ! lsof -i :3000,3001 > /dev/null 2>&1; then
    echo "✅ 所有服务已成功停止"
    echo "📊 端口 3000 和 3001 已释放"
else
    echo "❌ 部分服务可能仍在运行"
    echo "🔍 当前端口占用情况："
    lsof -i :3000,3001 2>/dev/null || echo "无端口占用"
fi

echo ""
echo "🎉 服务停止操作完成！"
