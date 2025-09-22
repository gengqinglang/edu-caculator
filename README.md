# 🎓 教育费用计算器

一个功能完整的静态网页教育费用计算器，为家庭教育规划提供精准的费用预估和参考。

## ✨ 核心功能

### 📊 费用默认填充
- 用户选择教育阶段和类型后，系统自动填充对应的费用项目和默认值
- 支持按城市/国家细分的精确费用数据
- 实时计算总费用和年均费用

### 🏫 覆盖教育阶段
- **小学**: 公立/私立，覆盖8个主要城市
- **初中**: 公立/私立，覆盖8个主要城市  
- **高中**: 国内公立/私立、国际部、国际学校、海外高中
- **大学**: 国内公办/民办/中外合作、海外8个主要留学国家
- **研究生**: 学术型/专业型硕士、博士，海外6个主要留学国家

### 💰 详细费用项目
每个教育阶段包含完整的费用构成：
- 学费、住宿费、生活费、书本费
- 签证费、机票费、保险费（海外）
- 申请费、语言考试费、中介费（留学）
- 实验费、会议费、论文费（研究生）

## 📁 文件结构

```
教育费用计算器/
├── index.html                          # 主页面
├── education-cost-data.js               # 基础教育阶段数据
├── education-cost-data-extended.js      # 高等教育阶段数据
├── education-cost-api.js                # 数据访问API
├── education-level-features.js          # 教育水平特点数据
└── README.md                           # 使用说明
```

## 🚀 快速开始

### 1. 部署方式
作为静态网页，支持多种部署方式：

**本地运行:**
```bash
# 直接用浏览器打开 index.html
open index.html
```

**Web服务器:**
```bash
# 使用Python简单服务器
python -m http.server 8000

# 使用Node.js服务器
npx serve .

# 或上传到任何静态网站托管服务
```

### 2. 使用流程
1. 打开 `index.html`
2. 选择教育阶段（小学/初中/高中/大学/研究生）
3. 选择学校类型和地区
4. 设置学习年数和其他参数
5. 点击"计算费用"查看详细结果

## 💻 API使用示例

### 基础用法
```javascript
// 初始化API
const api = new EducationCostAPI();

// 获取北京公立小学费用
const primaryCost = api.getPrimarySchoolCosts('public', 'beijing');

// 获取美国大学费用
const universityCost = api.getUniversityCosts('overseas', 'usa');

// 计算总费用（4年）
const calculation = api.calculateTotalCost(universityCost, 4);
```

### 高级功能
```javascript
// 费用对比
const paths = [
    { data: api.getUniversityCosts('domestic', 'public'), years: 4 },
    { data: api.getUniversityCosts('overseas', 'usa'), years: 4 }
];
const comparison = api.compareCosts(paths);

// 搜索教育路径
const results = api.searchEducationPath({
    stage: 'primary',
    city: 'beijing',
    type: 'public'
});

// 数据验证
const validation = api.validateData();
console.log('数据完整性:', validation.isValid);
```

## 📊 数据来源

### 国内数据来源
- 教育部官网
- 各地教委官网
- 权威教育媒体报道
- 学校官方公布数据

### 海外数据来源
- College Board (美国)
- UCAS官网 (英国)
- DAAD官网 (德国)
- 各国教育部官方数据
- JASSO官网 (日本)

## 🗄️ 数据结构说明

### 费用项目格式
```javascript
{
  amount: 35000,           // 金额
  unit: "year",           // 单位: year/month/once/per_school/set
  currency: "USD",        // 货币: CNY/USD/GBP/CAD/AUD/EUR/JPY/SGD
  description: "学费"      // 描述
}
```

### 支持的地区
**国内城市:** 北京、上海、广州、深圳、杭州、南京、成都、武汉

**留学国家:** 美国、英国、加拿大、澳洲、德国、法国、日本、新加坡

## ⚡ 系统特性

### 🎨 用户界面
- 响应式设计，支持移动端
- 现代化UI，渐变色彩
- 平滑动画效果
- 直观的费用展示

### 🔧 技术特点
- 纯静态网页，无需服务器
- 模块化JavaScript架构
- 完整的错误处理
- 实时数据验证

### 💡 核心优势
- **无依赖**: 纯原生JavaScript，无需框架
- **离线可用**: 所有数据本地存储
- **易于维护**: 数据与逻辑分离
- **扩展性强**: 易于添加新的教育阶段和地区

## 🔄 数据更新

### 定期更新建议
- **季度更新**: 学费和生活费用
- **年度更新**: 政策变化和汇率调整
- **实时更新**: 签证费用和考试费用

### 更新方式
1. 修改对应的数据文件
2. 更新 `metadata.lastUpdated` 字段
3. 重新部署静态文件

## 🛠️ 自定义开发

### 添加新城市
```javascript
// 在 education-cost-data.js 中添加
tianjin: {
  cityName: "天津",
  costs: {
    tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
    // ... 其他费用项
  },
  dataSource: "天津市教委"
}
```

### 添加新国家
```javascript
// 在相应的海外数据中添加
netherlands: {
  countryName: "荷兰",
  costs: {
    tuition: { amount: 15000, unit: "year", currency: "EUR", description: "学费" },
    // ... 其他费用项
  },
  dataSource: "荷兰教育部"
}
```

### 自定义汇率
```javascript
const customRates = {
  USD: 7.3,  // 自定义美元汇率
  GBP: 9.2   // 自定义英镑汇率
};

const calculation = api.calculateTotalCost(costData, years, customRates);
```

## 📱 应用场景

### 👨‍👩‍👧‍👦 家庭用户
- 制定子女教育规划
- 比较不同教育路径成本
- 预估教育投资总额

### 🏢 教育机构
- 为客户提供费用咨询
- 制作教育规划报告
- 对比分析不同方案

### 📊 研究分析
- 教育成本研究
- 国际教育费用对比
- 教育投资回报分析

## ⚠️ 注意事项

1. **数据仅供参考**: 实际费用可能因学校、专业、个人情况而异
2. **汇率波动**: 海外费用需根据实时汇率调整
3. **政策变化**: 教育政策可能影响费用标准
4. **定期更新**: 建议定期更新数据以保持准确性

## 📞 技术支持

如有问题或建议，请检查：
1. 浏览器控制台是否有错误信息
2. 数据文件是否正确加载
3. 网络连接是否正常

## 📄 许可证

本项目仅供教育和研究用途，数据来源于公开资料整理。使用时请注明数据来源，商业使用请联系相关数据提供方。

---

## 🌐 在线访问

**Gitee Pages**: https://egg-yellow-geng.gitee.io/edu-caculate

---

**版本**: v1.0  
**最后更新**: 2024年9月20日  
**维护者**: 教育费用计算器项目组
