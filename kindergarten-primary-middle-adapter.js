/**
 * 幼小初教育费用数据适配器
 * 处理基于城市等级和教育风格的费用计算
 * 版本: v2.0
 * 最后更新: 2024年9月17日
 */

class KindergartenPrimaryMiddleAdapter {
  constructor() {
    // 确保依赖的数据文件已加载
    if (typeof KINDERGARTEN_COST_DATA === 'undefined') {
      throw new Error('kindergarten-cost-data.js 未加载');
    }
    if (typeof PRIMARY_COST_DATA === 'undefined') {
      throw new Error('primary-cost-data.js 未加载');
    }
    if (typeof MIDDLE_COST_DATA === 'undefined') {
      throw new Error('middle-cost-data.js 未加载');
    }
    if (typeof getCityTier === 'undefined') {
      throw new Error('city-tier-mapping.js 未加载');
    }
    
    // 组合三个阶段的数据
    this.costData = {
      kindergarten: KINDERGARTEN_COST_DATA,
      primary: PRIMARY_COST_DATA,
      middle: MIDDLE_COST_DATA
    };
    this.getCityTier = getCityTier;
  }

  /**
   * 计算平均费用值
   * @param {object} costRange - 费用范围对象 {min: number, max: number}
   * @returns {number} - 平均值
   */
  getAverageCost(costRange) {
    if (!costRange || typeof costRange.min !== 'number' || typeof costRange.max !== 'number') {
      return 0;
    }
    return Math.round((costRange.min + costRange.max) / 2);
  }

  /**
   * 获取指定条件的费用数据
   * @param {string} stage - 教育阶段 (kindergarten, primary, middle)
   * @param {string} level - 教育水平 (public, private_mid, private_high)
   * @param {string} city - 城市代码
   * @param {string} educationStyle - 教育风格 (relaxed, balanced, intensive)
   * @returns {object} - 标准化的费用数据
   */
  getCostData(stage, level, city, educationStyle = 'balanced') {
    try {
      // 1. 获取城市等级（如果没有城市，会默认返回"四线及以下"）
      const cityTier = this.getCityTier(city || '');
      
      // 2. 转换阶段名称
      const stageName = this.mapStageToChineseName(stage);
      
      // 3. 转换教育水平名称
      const levelName = this.mapLevelToChineseName(level);
      
      // 4. 获取基础费用数据
      const stageData = this.costData[stage];
      const baseCostData = stageData?.[cityTier]?.[levelName];
      
      if (!baseCostData) {
        console.warn(`未找到费用数据: ${cityTier} - ${stageName} - ${levelName}`);
        return this.getDefaultCostData();
      }
      
      // 5. 构建标准化费用对象
      const costs = {
        学费: {
          amount: this.getAverageCost(baseCostData.tuition),
          unit: 'year',
          currency: 'CNY',
          description: '学费',
          note: baseCostData.tuition.note || null
        },
        餐费: {
          amount: this.getAverageCost(baseCostData.meal),
          unit: 'year',
          currency: 'CNY',
          description: '餐费'
        },
        杂费: {
          amount: this.getAverageCost(baseCostData.misc),
          unit: 'year', 
          currency: 'CNY',
          description: '杂费'
        },
        课外费: {
          amount: this.applyPrivateSchoolCoefficient(
            this.getAverageCost(baseCostData.extracurricular[educationStyle]),
            level
          ),
          unit: 'year',
          currency: 'CNY',
          description: '课外费',
          educationStyle: educationStyle
        }
      };
      
      return {
        costs: costs,
        cityTier: cityTier,
        stage: stageName,
        level: levelName,
        educationStyle: educationStyle,
        dataSource: 'kindergarten-primary-middle-cost-data.js'
      };
      
    } catch (error) {
      console.error('获取费用数据失败:', error);
      return this.getDefaultCostData();
    }
  }

  /**
   * 计算总费用
   * @param {object} costData - 费用数据对象
   * @param {number} years - 年数
   * @param {object} customRates - 自定义汇率 (暂不使用，保持兼容性)
   * @returns {object} - 计算结果
   */
  calculateTotalCost(costData, years, customRates = {}) {
    if (!costData || !costData.costs) {
      return {
        totalCost: 0,
        yearlyTotal: 0,
        oneTimeCost: 0,
        details: {},
        years: years || 0,
        // 为了兼容现有系统，添加summary对象
        summary: {
          periodicTotal: 0,
          yearlyTotal: 0,
          onceTotal: 0,
          grandTotal: 0
        },
        // 添加空的breakdown对象
        breakdown: {},
        // 添加metadata对象
        metadata: {
          years: years || 0,
          defaultApplicationSchools: 1,
          exchangeRates: { 'CNY': 1.0 },
          calculationDate: new Date().toISOString()
        }
      };
    }

    let totalCost = 0;
    let yearlyTotal = 0;
    let oneTimeCost = 0;
    const details = {};

    // 创建与原系统兼容的breakdown对象
    const breakdown = {};

    // 遍历所有费用项目
    Object.entries(costData.costs).forEach(([key, cost]) => {
      const amount = cost.amount || 0;
      let itemTotal = 0;
      let yearlyAmount = 0;
      let isOnceOnly = false;

      // 根据单位计算费用
      switch (cost.unit) {
        case 'year':
          itemTotal = amount * years;
          yearlyAmount = amount;
          yearlyTotal += yearlyAmount;
          break;
        case 'month':
          // 按12个月计算年费用
          yearlyAmount = amount * 12;
          itemTotal = yearlyAmount * years;
          yearlyTotal += yearlyAmount;
          break;
        case 'quarter':
          // 按4个季度计算年费用
          yearlyAmount = amount * 4;
          itemTotal = yearlyAmount * years;
          yearlyTotal += yearlyAmount;
          break;
        case 'once':
        case 'set':
          itemTotal = amount;
          oneTimeCost += amount;
          isOnceOnly = true;
          break;
        case 'per_school':
          itemTotal = amount;
          oneTimeCost += amount;
          isOnceOnly = true;
          break;
        default:
          // 默认按年计算
          itemTotal = amount * years;
          yearlyAmount = amount;
          yearlyTotal += yearlyAmount;
      }

      totalCost += itemTotal;
      
      // 保持新的details结构
      details[key] = {
        amount: amount,
        unit: cost.unit,
        itemTotal: itemTotal,
        yearlyAmount: yearlyAmount,
        description: cost.description,
        note: cost.note || null
      };

      // 添加与原系统完全兼容的breakdown结构
      breakdown[key] = {
        originalAmount: amount,
        originalCurrency: cost.currency || 'CNY',
        convertedAmount: amount, // 幼小初只用CNY，无需转换
        exchangeRate: 1.0,       // CNY汇率为1
        totalForPeriod: itemTotal,
        yearlyAmount: yearlyAmount,
        unit: cost.unit,
        isOnceOnly: isOnceOnly,
        schoolCount: cost.unit === 'per_school' ? 1 : 1  // 幼小初阶段默认为1
      };
    });

    return {
      totalCost: Math.round(totalCost),
      yearlyTotal: Math.round(yearlyTotal), 
      oneTimeCost: Math.round(oneTimeCost),
      details: details,
      years: years,
      // 为了兼容现有系统，添加summary对象
      summary: {
        periodicTotal: Math.round(totalCost),    // 总费用
        yearlyTotal: Math.round(yearlyTotal),    // 年均费用  
        onceTotal: Math.round(oneTimeCost),      // 一次性费用
        grandTotal: Math.round(totalCost)        // 总投资（与periodicTotal相同）
      },
      // 添加与原系统完全兼容的breakdown对象
      breakdown,
      // 添加metadata对象，保持与原系统一致
      metadata: {
        years,
        defaultApplicationSchools: 1,  // 幼小初阶段默认为1
        exchangeRates: { 'CNY': 1.0 }, // 只支持CNY
        calculationDate: new Date().toISOString()
      }
    };
  }

  /**
   * 映射阶段代码到中文名称
   */
  mapStageToChineseName(stage) {
    const stageMapping = {
      kindergarten: '幼儿园',
      primary: '小学',
      middle: '初中'
    };
    return stageMapping[stage] || stage;
  }

  /**
   * 映射教育水平代码到中文名称
   */
  mapLevelToChineseName(level) {
    const levelMapping = {
      public: '公立',
      private_mid: '私立(中档)',
      private_high: '私立(高档)',
      // 兼容旧格式
      private: '私立(中档)'
    };
    return levelMapping[level] || level;
  }

  /**
   * 获取默认费用数据
   */
  getDefaultCostData() {
    return {
      costs: {
        学费: { amount: 0, unit: 'year', currency: 'CNY', description: '学费' },
        餐费: { amount: 3000, unit: 'year', currency: 'CNY', description: '餐费' },
        杂费: { amount: 1000, unit: 'year', currency: 'CNY', description: '杂费' },
        课外费: { amount: 5000, unit: 'year', currency: 'CNY', description: '课外费' }
      },
      cityTier: '未知',
      stage: '未知',
      level: '未知',
      educationStyle: 'balanced',
      dataSource: 'default'
    };
  }

  /**
   * 检查是否支持指定的教育阶段
   * @param {string} stage - 教育阶段
   * @returns {boolean}
   */
  isStageSupported(stage) {
    return ['kindergarten', 'primary', 'middle'].includes(stage);
  }

  /**
   * 获取支持的教育风格列表
   * @returns {array}
   */
  getSupportedEducationStyles() {
    return [
      { code: 'relaxed', name: '佛系', description: '尊重天性，快乐成长' },
      { code: 'balanced', name: '平衡', description: '全面发展，适度投入' },
      { code: 'intensive', name: '鸡娃', description: '精准培养，高额投入' }
    ];
  }

  /**
   * 获取支持的城市等级列表
   * @returns {array}
   */
  getSupportedCityTiers() {
    return ['一线城市', '二线城市', '三线城市', '四线及以下'];
  }

  /**
   * 验证输入参数
   * @param {string} stage - 教育阶段
   * @param {string} level - 教育水平  
   * @param {string} city - 城市代码
   * @param {string} educationStyle - 教育风格
   * @returns {object} - 验证结果
   */
  validateInputs(stage, level, city, educationStyle) {
    const errors = [];
    
    if (!this.isStageSupported(stage)) {
      errors.push(`不支持的教育阶段: ${stage}`);
    }
    
    if (!city) {
      errors.push('城市代码不能为空');
    }
    
    const supportedStyles = this.getSupportedEducationStyles().map(s => s.code);
    if (!supportedStyles.includes(educationStyle)) {
      errors.push(`不支持的教育风格: ${educationStyle}`);
    }
    
    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }

  /**
   * 应用私立学校系数到课外费
   * 基于市场调研：私立中档1.4倍，私立高档2.2倍
   * @param {number} baseAmount - 公立学校基础金额
   * @param {string} level - 学校类型 (public, private_mid, private_high)
   * @returns {number} - 应用系数后的金额
   */
  applyPrivateSchoolCoefficient(baseAmount, level) {
    console.log(`应用私立学校系数 - 基础金额: ${baseAmount}, 学校类型: ${level}`);
    
    const coefficients = {
      'public': 1.0,           // 公立学校：基准，无系数
      'private_mid': 1.4,      // 私立中档：1.4倍（基于调研84%参与率vs47%全国平均）
      'private_high': 2.2      // 私立高档：2.2倍（基于实际案例8-12万vs4万支出比例）
    };
    
    const coefficient = coefficients[level] || 1.0;
    const finalAmount = Math.round(baseAmount * coefficient);
    
    console.log(`私立学校系数计算 - 系数: ${coefficient}, 最终金额: ${finalAmount}`);
    
    return finalAmount;
  }
}

// 导出适配器类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KindergartenPrimaryMiddleAdapter;
}

