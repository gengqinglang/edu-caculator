// 大学费用数据适配器
// 处理大学阶段的费用计算逻辑

class UniversityAdapter {
  constructor() {
    this.stageCode = 'university';
    this.stageName = '大学';
  }

  /**
   * 检查是否支持该教育阶段
   * @param {string} stage - 教育阶段代码
   * @returns {boolean}
   */
  isStageSupported(stage) {
    return stage === 'university' || stage === 'college';
  }

  /**
   * 获取成本数据
   * @param {string} stage - 教育阶段
   * @param {string} grade - 年级（大学阶段不使用）
   * @param {string} level - 教育水平
   * @param {string} city - 城市（大学阶段不使用城市区分）
   * @param {string} educationStyle - 教育风格（大学阶段不使用）
   * @returns {Object} 成本数据对象
   */
  getCostData(stage, grade, level, city = '', country = '') {
    try {
      console.log(`🎓 UniversityAdapter.getCostData 调用参数:`, { stage, grade, level, city, country });
      
      if (!this.isStageSupported(stage)) {
        console.warn(`UniversityAdapter: 不支持的教育阶段: ${stage}`);
        return null;
      }

      // 解析教育水平，传递国家参数
      const parsedLevel = this.parseEducationLevel(level, country);
      console.log(`🔍 解析教育水平结果:`, parsedLevel);
      if (!parsedLevel) {
        console.warn(`UniversityAdapter: 无效的教育水平: ${level}, 国家: ${country}`);
        return null;
      }

      // 获取基础成本数据
      const costData = this.getBaseCostData(parsedLevel);
      if (!costData) {
        console.warn(`UniversityAdapter: 未找到成本数据，教育水平: ${level}`);
        return null;
      }

      // 转换为标准格式
      return this.formatCostData(costData, parsedLevel);

    } catch (error) {
      console.error('UniversityAdapter.getCostData error:', error);
      return null;
    }
  }

  /**
   * 解析教育水平
   * @param {string} level - 原始教育水平
   * @returns {Object|null} 解析后的教育水平信息
   */
  parseEducationLevel(level, country = '') {
    // 国内大学
    if (level === 'domesticPublic' || level === 'public') {
      return { type: 'domestic', subType: 'public' };
    }
    if (level === 'domesticPrivate' || level === 'private') {
      return { type: 'domestic', subType: 'private' };
    }

    // 海外大学 - 新的逻辑：教育水平为overseas，国家信息单独传递
    if (level === 'overseas') {
      const overseasCountries = ['usa', 'uk', 'australia', 'hongkong', 'singapore', 'japan', 'canada', 'europeOthers'];
      if (country && overseasCountries.includes(country)) {
        return { type: 'overseas', subType: country };
      } else {
        console.warn(`UniversityAdapter: 海外大学缺少有效国家信息: ${country}`);
        return null;
      }
    }

    // 兼容旧的逻辑：如果教育水平直接是国家代码
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
    if (!window.UNIVERSITY_COST_DATA) {
      console.error('UNIVERSITY_COST_DATA 未加载');
      return null;
    }

    const { type, subType } = parsedLevel;
    
    if (type === 'domestic') {
      return window.UNIVERSITY_COST_DATA.domestic[subType];
    } else if (type === 'overseas') {
      return window.UNIVERSITY_COST_DATA.overseas[subType];
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
    const costItems = window.UNIVERSITY_COST_ITEMS || {
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

    // 直接计算年度总费用，避免循环调用
    const yearlyTotal = Object.values(formattedCosts).reduce((sum, cost) => sum + cost.amount, 0);
    
    return {
      displayName,
      costs: formattedCosts,
      totalCost: yearlyTotal,
      dataSource: "系统数据",
      // 为了兼容现有系统，添加summary对象
      summary: {
        periodicTotal: yearlyTotal,
        grandTotal: yearlyTotal,
        yearlyTotal: yearlyTotal,
        onceTotal: 0
      }
    };
  }

  /**
   * 计算总费用
   * @param {Object} costData - 费用数据对象
   * @param {number} years - 年数
   * @returns {Object} 标准格式的计算结果
   */
  calculateTotalCost(costData, years) {
    try {
      if (!costData || !costData.costs) {
        console.warn('UniversityAdapter.calculateTotalCost: 无效的费用数据');
        return this.getEmptyCalculationResult(years);
      }

      let totalCost = 0;
      let yearlyTotal = 0;
      let oneTimeCost = 0;
      const details = {};

      for (const [key, cost] of Object.entries(costData.costs)) {
        const amount = parseFloat(cost.amount) || 0;
        let itemTotal = 0;
        let yearlyAmount = 0;

        // 大学费用通常按年计算
        itemTotal = amount * years;
        yearlyAmount = amount;
        yearlyTotal += yearlyAmount;

        totalCost += itemTotal;

        details[key] = {
          amount: amount,
          unit: 'year',
          itemTotal: itemTotal,
          yearlyAmount: yearlyAmount,
          description: cost.description || key
        };
      }

      // 创建兼容的breakdown对象
      const breakdown = {};
      for (const [key, detail] of Object.entries(details)) {
        breakdown[key] = {
          totalForPeriod: detail.itemTotal,
          yearlyAmount: detail.yearlyAmount,
          description: detail.description
        };
      }

      return {
        totalCost: Math.round(totalCost),
        yearlyTotal: Math.round(yearlyTotal),
        oneTimeCost: Math.round(oneTimeCost),
        details: details,
        breakdown: breakdown, // 添加breakdown兼容性
        years: years,
        summary: {
          periodicTotal: Math.round(totalCost),
          yearlyTotal: Math.round(yearlyTotal),
          onceTotal: Math.round(oneTimeCost),
          grandTotal: Math.round(totalCost)
        },
        metadata: {
          stage: costData.stage || 'university',
          level: costData.level || 'unknown',
          dataSource: costData.dataSource || '系统数据'
        }
      };

    } catch (error) {
      console.error('UniversityAdapter.calculateTotalCost error:', error);
      return this.getEmptyCalculationResult(years);
    }
  }

  /**
   * 获取空的计算结果
   * @param {number} years - 年数
   * @returns {Object} 空的计算结果
   */
  getEmptyCalculationResult(years) {
    return {
      totalCost: 0,
      yearlyTotal: 0,
      oneTimeCost: 0,
      details: {},
      years: years || 1,
      summary: {
        periodicTotal: 0,
        yearlyTotal: 0,
        onceTotal: 0,
        grandTotal: 0
      },
      metadata: {
        stage: 'university',
        level: 'unknown',
        dataSource: '系统数据'
      }
    };
  }

  /**
   * 获取教育水平选项
   * @returns {Array} 教育水平选项列表
   */
  getEducationLevelOptions() {
    return [
      { value: 'domesticPublic', label: '国内公立大学' },
      { value: 'domesticPrivate', label: '国内民办大学' },
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
   * @returns {boolean} 大学阶段不需要城市选择
   */
  requiresCitySelection() {
    return false;
  }

  /**
   * 检查是否需要教育风格选择
   * @returns {boolean} 大学阶段不需要教育风格选择
   */
  requiresEducationStyleSelection() {
    return false;
  }

  /**
   * 获取支持的教育阶段列表
   * @returns {Array} 支持的教育阶段
   */
  getSupportedStages() {
    return ['university', 'college'];
  }
}

// 导出适配器类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UniversityAdapter;
}
