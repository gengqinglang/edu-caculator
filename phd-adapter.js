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
  getCostData(stage, grade, level, city = '', country = '') {
    try {
      if (!this.isStageSupported(stage)) {
        console.warn(`PhdAdapter: 不支持的教育阶段: ${stage}`);
        return null;
      }

      // 解析教育水平，传递国家参数
      const parsedLevel = this.parseEducationLevel(level, country);
      if (!parsedLevel) {
        console.warn(`PhdAdapter: 无效的教育水平: ${level}, 国家: ${country}`);
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
  parseEducationLevel(level, country = '') {
    // 国内博士
    if (level === 'domesticPublic' || level === 'domestic' || level === 'public') {
      return { type: 'domestic', subType: 'public' };
    }

    // 海外博士 - 新的逻辑：教育水平为overseas，国家信息单独传递
    if (level === 'overseas') {
      const overseasCountries = ['usa', 'uk', 'australia', 'hongkong', 'singapore', 'japan', 'canada', 'europeOthers'];
      if (country && overseasCountries.includes(country)) {
        return { type: 'overseas', subType: country };
      } else {
        console.warn(`PhdAdapter: 海外博士缺少有效国家信息: ${country}`);
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

    const totalCost = this.calculateTotalCost(formattedCosts);
    
    return {
      displayName,
      costs: formattedCosts,
      totalCost: totalCost,
      dataSource: "系统数据",
      // 为了兼容现有系统，添加summary对象
      summary: {
        periodicTotal: totalCost,
        grandTotal: totalCost,
        yearlyTotal: totalCost, // 假设1年制
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
        console.warn('PhdAdapter.calculateTotalCost: 无效的费用数据');
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

        // 博士费用通常按年计算
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

      return {
        totalCost: Math.round(totalCost),
        yearlyTotal: Math.round(yearlyTotal),
        oneTimeCost: Math.round(oneTimeCost),
        details: details,
        years: years,
        summary: {
          periodicTotal: Math.round(totalCost),
          yearlyTotal: Math.round(yearlyTotal),
          onceTotal: Math.round(oneTimeCost),
          grandTotal: Math.round(totalCost)
        },
        metadata: {
          stage: costData.stage || 'phd',
          level: costData.level || 'unknown',
          dataSource: costData.dataSource || '系统数据'
        }
      };

    } catch (error) {
      console.error('PhdAdapter.calculateTotalCost error:', error);
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
        stage: 'phd',
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
