// 博士费用数据适配器
// 处理博士阶段的费用计算逻辑

class PhdAdapter {
  constructor() {
    this.stageCode = 'phd';
    this.stageName = '博士';
  }

  /**
   * 检查是否支持该教育阶段
   * @param {string} stage - 教育阶段代码
   * @returns {boolean}
   */
  isStageSupported(stage) {
    return stage === 'phd' || stage === 'doctorate';
  }

  /**
   * 获取成本数据
   * @param {string} stage - 教育阶段
   * @param {string} grade - 年级（博士阶段不使用）
   * @param {string} level - 教育水平
   * @param {string} city - 城市（博士阶段不使用城市区分）
   * @param {string} educationStyle - 教育风格（博士阶段不使用）
   * @returns {Object} 成本数据对象
   */
  getCostData(stage, grade, level, city = '', educationStyle = '') {
    try {
      if (!this.isStageSupported(stage)) {
        console.warn(`PhdAdapter: 不支持的教育阶段: ${stage}`);
        return null;
      }

      // 解析教育水平
      const parsedLevel = this.parseEducationLevel(level);
      if (!parsedLevel) {
        console.warn(`PhdAdapter: 无效的教育水平: ${level}`);
        return null;
      }

      // 获取基础成本数据
      const costData = this.getBaseCostData(parsedLevel);
      if (!costData) {
        console.warn(`PhdAdapter: 未找到成本数据，教育水平: ${level}`);
        return null;
      }

      // 转换为标准格式
      return this.formatCostData(costData, parsedLevel);

    } catch (error) {
      console.error('PhdAdapter.getCostData error:', error);
      return null;
    }
  }

  /**
   * 解析教育水平
   * @param {string} level - 原始教育水平
   * @returns {Object|null} 解析后的教育水平信息
   */
  parseEducationLevel(level) {
    // 国内博士
    if (level === 'domesticPublic' || level === 'domestic' || level === 'public') {
      return { type: 'domestic', subType: 'public' };
    }

    // 海外博士
    const overseasCountries = ['usa', 'uk', 'australia', 'hongkong', 'singapore', 'japan', 'canada', 'europeOthers'];
    if (overseasCountries.includes(level)) {
      return { type: 'overseas', subType: level };
    }

    return null;
  }

  /**
   * 获取基础成本数据
   * @param {Object} parsedLevel - 解析后的教育水平
   * @returns {Object|null} 基础成本数据
   */
  getBaseCostData(parsedLevel) {
    if (!window.PHD_COST_DATA) {
      console.error('PHD_COST_DATA 未加载');
      return null;
    }

    const { type, subType } = parsedLevel;
    
    if (type === 'domestic') {
      return window.PHD_COST_DATA.domestic[subType];
    } else if (type === 'overseas') {
      return window.PHD_COST_DATA.overseas[subType];
    }

    return null;
  }

  /**
   * 格式化成本数据为标准格式
   * @param {Object} costData - 原始成本数据
   * @param {Object} parsedLevel - 解析后的教育水平
   * @returns {Object} 格式化后的成本数据
   */
  formatCostData(costData, parsedLevel) {
    const { displayName, costs } = costData;
    const formattedCosts = {};

    // 获取费用项目名称映射
    const costItems = window.PHD_COST_ITEMS || {
      tuition: "学费",
      accommodation: "住宿费", 
      livingExpenses: "生活费",
      medicalInsurance: "医疗保险",
      miscellaneous: "其他杂费"
    };

    // 转换每个费用项
    Object.entries(costs).forEach(([key, value]) => {
      const displayName = costItems[key] || key;
      const averageAmount = Math.round((value.min + value.max) / 2);
      
      formattedCosts[key] = {
        displayName,
        amount: averageAmount,
        min: value.min,
        max: value.max,
        unit: "year",
        currency: "CNY",
        description: displayName
      };
    });

    return {
      displayName,
      costs: formattedCosts,
      totalCost: this.calculateTotalCost(formattedCosts),
      dataSource: "系统数据"
    };
  }

  /**
   * 计算总费用
   * @param {Object} costs - 费用数据
   * @returns {number} 总费用
   */
  calculateTotalCost(costs) {
    return Object.values(costs).reduce((total, cost) => total + cost.amount, 0);
  }

  /**
   * 获取教育水平选项
   * @returns {Array} 教育水平选项列表
   */
  getEducationLevelOptions() {
    return [
      { value: 'domesticPublic', label: '国内博士' },
      { value: 'usa', label: '美国' },
      { value: 'uk', label: '英国' },
      { value: 'australia', label: '澳洲' },
      { value: 'hongkong', label: '香港' },
      { value: 'singapore', label: '新加坡' },
      { value: 'japan', label: '日本' },
      { value: 'canada', label: '加拿大' },
      { value: 'europeOthers', label: '欧洲其他' }
    ];
  }

  /**
   * 检查是否需要城市选择
   * @returns {boolean} 博士阶段不需要城市选择
   */
  requiresCitySelection() {
    return false;
  }

  /**
   * 检查是否需要教育风格选择
   * @returns {boolean} 博士阶段不需要教育风格选择
   */
  requiresEducationStyleSelection() {
    return false;
  }

  /**
   * 获取支持的教育阶段列表
   * @returns {Array} 支持的教育阶段
   */
  getSupportedStages() {
    return ['phd', 'doctorate'];
  }
}

// 导出适配器类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PhdAdapter;
}
