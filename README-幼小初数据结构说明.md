# 🏫 幼小初教育费用数据结构说明

## 📁 文件结构

### 核心数据文件
```
📦 幼小初教育费用数据
├── 🏙️ city-tier-mapping.js          # 城市等级映射
├── 🧸 kindergarten-cost-data.js     # 幼儿园费用数据
├── 📚 primary-cost-data.js          # 小学费用数据
├── 🎓 middle-cost-data.js           # 初中费用数据
├── 🔧 kindergarten-primary-middle-adapter.js  # 统一适配器
└── 🧪 test-separated-data.html      # 分离数据测试页面
```

### 支持文件
- `index.html` - 主应用页面（已集成新数据）
- `test-new-cost-data.html` - 基础功能测试
- `education-stages-config.js` - 教育阶段配置（已更新私立分档）

## 🎯 数据结构设计

### 1. 城市等级映射 (`city-tier-mapping.js`)
```javascript
const CITY_TIER_MAPPING = {
  tier1: ["beijing", "shanghai", "guangzhou", "shenzhen"],      // 一线城市
  newTier1: ["chengdu", "hangzhou", ...],                       // 新一线→二线
  tier2: ["suzhou", "wuxi", "changzhou", ...],                  // 二线城市
  tier3: ["zhenjiang", "yangzhou", ...],                        // 三线城市
  tier4AndBelow: []  // 其他城市默认为四线及以下
}
```

**映射规则:**
- 一线城市 (4个): 北上广深
- 新一线城市 (15个): 按二线处理
- 二线城市 (30个): 包括苏州、无锡等
- 三线城市 (70个): 包括镇江、扬州等  
- 四线及以下: 其他所有城市

### 2. 各阶段费用数据结构

每个阶段文件都包含相同的结构：

```javascript
const [STAGE]_COST_DATA = {
  metadata: {
    version: "2.0",
    stage: "阶段名称",
    costItems: {
      tuition: "学费 (元/年)",
      meal: "餐费 (元/年)", 
      misc: "杂费 (元/年)",
      extracurricular: "课外费 (元/年)"
    },
    parentingStyles: {
      relaxed: "佛系",
      balanced: "平衡",
      intensive: "鸡娃"
    }
  },
  
  // 四个城市等级
  一线城市: {
    公立: { /* 费用数据 */ },
    "私立(中档)": { /* 费用数据 */ },
    "私立(高档)": { /* 费用数据 */ }
  },
  二线城市: { /* 同上结构 */ },
  三线城市: { /* 同上结构 */ },
  四线及以下: { /* 同上结构 */ }
}
```

### 3. 费用项目详细结构

```javascript
{
  tuition: { min: 最低学费, max: 最高学费, note: "特殊说明" },
  meal: { min: 最低餐费, max: 最高餐费 },
  misc: { min: 最低杂费, max: 最高杂费 },
  extracurricular: {
    relaxed: { min: 佛系最低, max: 佛系最高 },
    balanced: { min: 平衡最低, max: 平衡最高 },
    intensive: { min: 鸡娃最低, max: 鸡娃最高 }
  }
}
```

## 📊 数据覆盖范围

### 教育阶段 (3个)
- 🧸 **幼儿园**: 3年制，支持大班免费政策
- 📚 **小学**: 6年制，公立学费为0
- 🎓 **初中**: 3年制，公立学费为0

### 城市等级 (4个)
- 🏙️ **一线城市**: 北上广深
- 🌆 **二线城市**: 新一线+传统二线
- 🏘️ **三线城市**: 地级市
- 🏡 **四线及以下**: 县级市及以下

### 学校类型 (3个)
- 🏛️ **公立**: 政府办学
- 🏫 **私立(中档)**: 中等收费私立学校
- 🏰 **私立(高档)**: 高端私立学校

### 教育风格 (3个)
- 😌 **佛系**: 尊重天性，快乐成长
- ⚖️ **平衡**: 全面发展，适度投入
- 🐔 **鸡娃**: 精准培养，高额投入

## 🔧 适配器功能

### 核心方法
```javascript
// 获取费用数据
adapter.getCostData(stage, level, city, educationStyle)

// 计算总费用
adapter.calculateTotalCost(costData, years)

// 验证输入参数
adapter.validateInputs(stage, level, city, educationStyle)
```

### 特殊处理
- **大班免费政策**: 公立幼儿园学费为0
- **开放金额**: "以上"类型按最大值处理
- **城市映射**: 自动将城市代码转换为等级
- **费用平均**: 取最小值和最大值的平均数

## 🧪 测试方案

### 1. 基础功能测试 (`test-new-cost-data.html`)
- 城市映射功能
- 费用数据获取
- 费用计算逻辑

### 2. 分离数据测试 (`test-separated-data.html`)
- 数据文件加载状态
- 各阶段数据完整性
- 适配器集成功能
- 完整计算流程

### 3. 集成测试 (`index.html`)
- 与现有系统的兼容性
- UI交互功能
- 数据保存和恢复

## 📈 数据统计

### 数据点统计
- **总数据点**: 36个 (4城市等级 × 3学校类型 × 3教育阶段)
- **费用项目**: 4个基础项目 + 3个教育风格变体
- **特殊规则**: 3个 (大班免费、开放金额、城市映射)

### 文件大小
- `kindergarten-cost-data.js`: ~195行
- `primary-cost-data.js`: ~195行  
- `middle-cost-data.js`: ~195行
- `city-tier-mapping.js`: ~114行
- `适配器文件`: ~286行

## 🚀 使用示例

```javascript
// 初始化适配器
const adapter = new KindergartenPrimaryMiddleAdapter();

// 获取北京公立小学平衡风格的费用数据
const costData = adapter.getCostData('primary', 'public', 'beijing', 'balanced');

// 计算6年总费用
const calculation = adapter.calculateTotalCost(costData, 6);

console.log(`总费用: ${calculation.totalCost}元`);
console.log(`年均费用: ${calculation.yearlyTotal}元`);
```

## 🔄 扩展计划

当您提供其他教育阶段数据时，将按照相同模式创建：
- `high-school-cost-data.js` - 高中费用数据
- `university-cost-data.js` - 大学费用数据
- `graduate-cost-data.js` - 研究生费用数据
- `phd-cost-data.js` - 博士费用数据

每个阶段都将有独立的数据文件和对应的适配器，保持系统的模块化和可维护性。

---

*最后更新: 2024年9月17日*  
*数据来源: 幼小初费用参考.md + 城市和几线映射关系.md*
