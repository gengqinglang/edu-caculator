/**
 * 教育数据适配器
 * 将新的教育阶段配置与现有费用数据API进行连接
 * 版本: v2.0
 * 最后更新: 2024年9月15日
 */

class EducationDataAdapter {
  constructor(costAPI, stagesConfig) {
    this.costAPI = costAPI;
    this.stagesConfig = stagesConfig;
    
    // 教育水平到API参数的映射
    this.levelMappings = {
      // 小学阶段映射
      primary: {
        public: { type: 'public', city: 'beijing' },
        private: { type: 'private', city: 'beijing' },
        bilingual: { type: 'private', city: 'shanghai' } // 用上海私立代表双语
      },
      
      // 初中阶段映射
      middle: {
        public: { type: 'public', city: 'beijing' },
        private: { type: 'private', city: 'beijing' },
        bilingual: { type: 'private', city: 'shanghai' }
      },
      
      // 高中阶段映射
      high: {
        domesticPublic: { direction: 'domestic', type: 'public', location: 'beijing' },
        domesticPrivate: { direction: 'domestic', type: 'private', location: 'beijing' },
        internationalPublic: { direction: 'international', type: 'internationalPublic', location: 'beijing' },
        internationalSchool: { direction: 'international', type: 'internationalSchool', location: 'beijing' },
        overseas: { direction: 'international', type: 'overseas', location: 'usa' }
      },
      
      // 大学阶段映射
      university: {
        domesticPublic: { direction: 'domestic', type: 'public' },
        domesticPrivate: { direction: 'domestic', type: 'private' },
        jointProgram: { direction: 'domestic', type: 'jointProgram' },
        overseas: { direction: 'overseas', type: 'usa' }
      },
      
      // 研究生阶段映射
      graduate: {
        domesticAcademic: { direction: 'domestic', type: 'academic' },
        domesticProfessional: { direction: 'domestic', type: 'professional' },
        overseasMaster: { direction: 'overseas', type: 'usa', degree: 'master' }
      },
      
      // 博士阶段映射
      phd: {
        domesticPhd: { direction: 'domestic', type: 'phd' },
        overseasPhd: { direction: 'overseas', type: 'usa', degree: 'phd' }
      }
    };
    
    // 城市选择权重（用于智能推荐）
    this.cityWeights = {
      beijing: 1.0,
      shanghai: 0.9,
      guangzhou: 0.8,
      shenzhen: 0.8,
      hangzhou: 0.7,
      nanjing: 0.6,
      chengdu: 0.5,
      wuhan: 0.5
    };
    
    // 国家选择权重
    this.countryWeights = {
      usa: 1.0,
      uk: 0.9,
      canada: 0.8,
      australia: 0.8,
      singapore: 0.7,
      germany: 0.6,
      france: 0.5,
      japan: 0.7
    };
  }

  /**
   * 获取阶段费用数据
   * @param {string} stage - 教育阶段
   * @param {string} level - 教育水平
   * @param {Object} options - 额外选项（城市、国家等）
   * @returns {Object} 费用数据
   */
  getStageCostData(stage, level, options = {}) {
    try {
      const mapping = this.levelMappings[stage]?.[level];
      if (!mapping) {
        throw new Error(`未找到 ${stage} 阶段 ${level} 水平的映射配置`);
      }
      
      let costData = null;
      
      switch (stage) {
        case 'primary':
          costData = this.costAPI.getPrimarySchoolCosts(
            mapping.type, 
            options.city || mapping.city
          );
          break;
          
        case 'middle':
          costData = this.costAPI.getMiddleSchoolCosts(
            mapping.type, 
            options.city || mapping.city
          );
          break;
          
        case 'high':
          costData = this.costAPI.getHighSchoolCosts(
            mapping.direction,
            mapping.type,
            options.location || mapping.location
          );
          break;
          
        case 'university':
          costData = this.costAPI.getUniversityCosts(
            mapping.direction,
            options.country || mapping.type
          );
          break;
          
        case 'graduate':
          if (mapping.direction === 'overseas') {
            costData = this.costAPI.getGraduateCosts(
              mapping.direction,
              options.country || mapping.type,
              mapping.degree
            );
          } else {
            costData = this.costAPI.getGraduateCosts(
              mapping.direction,
              mapping.type
            );
          }
          break;
          
        case 'phd':
          if (mapping.direction === 'overseas') {
            costData = this.costAPI.getGraduateCosts(
              mapping.direction,
              options.country || mapping.type,
              mapping.degree
            );
          } else {
            costData = this.costAPI.getGraduateCosts(
              mapping.direction,
              mapping.type
            );
          }
          break;
      }
      
      return costData;
      
    } catch (error) {
      console.error('获取费用数据失败:', error);
      return this.getFallbackCostData(stage, level);
    }
  }

  /**
   * 获取默认费用数据（当API调用失败时）
   * @param {string} stage - 教育阶段
   * @param {string} level - 教育水平
   * @returns {Object} 默认费用数据
   */
  getFallbackCostData(stage, level) {
    const stageInfo = this.stagesConfig.getStageInfo(stage);
    const levelInfo = this.stagesConfig.getEducationLevelInfo(stage, level);
    
    // 根据教育阶段和水平生成基础费用结构
    const baseCosts = this.generateBaseCosts(stage, level);
    
    return {
      stage: stage,
      type: levelInfo?.name || '未知教育水平',
      location: '全国平均',
      costs: baseCosts,
      dataSource: '系统估算数据'
    };
  }

  /**
   * 生成基础费用结构
   * @param {string} stage - 教育阶段
   * @param {string} level - 教育水平
   * @returns {Object} 费用结构
   */
  generateBaseCosts(stage, level) {
    const levelInfo = this.stagesConfig.getEducationLevelInfo(stage, level);
    const direction = levelInfo?.direction || 'domestic';
    
    // 基础费用模板
    const baseCosts = {
      tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
      books: { amount: 500, unit: "year", currency: "CNY", description: "书本费" },
      meals: { amount: 600, unit: "month", currency: "CNY", description: "餐费" }
    };
    
    // 根据阶段调整费用
    switch (stage) {
      case 'kindergarten':
        baseCosts.tuition.amount = direction === 'domestic' ? 
          (level === 'public' ? 0 : 30000) : 50000;
        break;
        
      case 'primary':
        baseCosts.tuition.amount = direction === 'domestic' ? 
          (level === 'public' ? 0 : 50000) : 80000;
        break;
        
      case 'middle':
        baseCosts.tuition.amount = direction === 'domestic' ? 
          (level === 'public' ? 0 : 60000) : 100000;
        break;
        
      case 'high':
        baseCosts.tuition.amount = this.getHighSchoolTuition(level, direction);
        if (direction === 'overseas') {
          baseCosts.tuition.currency = 'USD';
          baseCosts.tuition.amount = 35000;
          baseCosts.accommodation = { amount: 15000, unit: "year", currency: "USD", description: "住宿费" };
          baseCosts.insurance = { amount: 2000, unit: "year", currency: "USD", description: "保险费" };
        }
        break;
        
      case 'university':
        baseCosts.tuition.amount = this.getUniversityTuition(level, direction);
        if (direction === 'overseas') {
          baseCosts.tuition.currency = 'USD';
          baseCosts.tuition.amount = 40000;
          baseCosts.accommodation = { amount: 12000, unit: "year", currency: "USD", description: "住宿费" };
          baseCosts.living = { amount: 15000, unit: "year", currency: "USD", description: "生活费" };
        } else {
          baseCosts.accommodation = { amount: 1200, unit: "year", currency: "CNY", description: "住宿费" };
          baseCosts.living = { amount: 1500, unit: "month", currency: "CNY", description: "生活费" };
        }
        break;
        
      case 'graduate':
      case 'phd':
        baseCosts.tuition.amount = this.getGraduateTuition(stage, level, direction);
        if (direction === 'overseas') {
          baseCosts.tuition.currency = 'USD';
          baseCosts.accommodation = { amount: 12000, unit: "year", currency: "USD", description: "住宿费" };
          baseCosts.living = { amount: 18000, unit: "year", currency: "USD", description: "生活费" };
          baseCosts.conference = { amount: 3000, unit: "year", currency: "USD", description: "会议费" };
        } else {
          baseCosts.accommodation = { amount: 1500, unit: "year", currency: "CNY", description: "住宿费" };
          baseCosts.living = { amount: 1800, unit: "month", currency: "CNY", description: "生活费" };
          baseCosts.conference = { amount: 2000, unit: "year", currency: "CNY", description: "会议费" };
        }
        break;
    }
    
    return baseCosts;
  }

  /**
   * 获取高中学费
   */
  getHighSchoolTuition(level, direction) {
    const tuitionMap = {
      domesticPublic: 2000,
      domesticPrivate: 80000,
      internationalPublic: 150000,
      internationalSchool: 250000,
      overseas: 35000
    };
    return tuitionMap[level] || 50000;
  }

  /**
   * 获取大学学费
   */
  getUniversityTuition(level, direction) {
    if (direction === 'overseas') return 40000;
    
    const tuitionMap = {
      domesticPublic: 5000,
      domesticPrivate: 25000,
      jointProgram: 80000
    };
    return tuitionMap[level] || 15000;
  }

  /**
   * 获取研究生学费
   */
  getGraduateTuition(stage, level, direction) {
    if (direction === 'overseas') {
      return stage === 'phd' ? 25000 : 45000;
    }
    
    const tuitionMap = {
      domesticAcademic: 8000,
      domesticProfessional: 15000,
      domesticPhd: 10000
    };
    return tuitionMap[level] || 10000;
  }

  /**
   * 获取智能推荐的城市
   * @param {string} previousCity - 之前选择的城市
   * @returns {string} 推荐的城市
   */
  getRecommendedCity(previousCity) {
    if (!previousCity) return 'beijing';
    
    // 相同城市优先
    return previousCity;
  }

  /**
   * 获取智能推荐的国家
   * @param {string} previousCountry - 之前选择的国家
   * @returns {string} 推荐的国家
   */
  getRecommendedCountry(previousCountry) {
    if (!previousCountry) return 'usa';
    
    // 相同国家优先
    return previousCountry;
  }

  /**
   * 获取可用的城市列表
   * @returns {Array} 城市列表
   */
  getAvailableCities() {
    return this.costAPI.getAvailableCities();
  }

  /**
   * 获取可用的国家列表
   * @returns {Array} 国家列表
   */
  getAvailableCountries() {
    return this.costAPI.getAvailableStudyCountries();
  }

  /**
   * 计算总费用
   * @param {Object} costData - 费用数据
   * @param {number} years - 年数
   * @param {Object} customRates - 自定义汇率
   * @returns {Object} 计算结果
   */
  calculateTotalCost(costData, years, customRates = {}) {
    // 最新汇率（2024年基准）
    const exchangeRates = {
      'CNY': 1.0,      // 人民币基准
      'USD': 7.24,     // 美元
      'GBP': 9.15,     // 英镑
      'CAD': 5.31,     // 加拿大元
      'AUD': 4.82,     // 澳元
      'EUR': 7.85,     // 欧元
      'JPY': 0.049,    // 日元
      'SGD': 5.38,     // 新加坡元
      ...customRates   // 自定义汇率覆盖默认值
    };

    // 默认申请学校数量设置
    const defaultApplicationSchools = 5;

    let periodicTotal = 0;    // 剩余年限总费用
    let yearlyTotal = 0;      // 年均费用
    let onceTotal = 0;        // 一次性费用

    const breakdown = {};

    for (const [key, cost] of Object.entries(costData.costs)) {
      // 汇率转换到人民币
      const rate = exchangeRates[cost.currency] || 1;
      const amountInCNY = cost.amount * rate;

      let itemTotal = 0;
      let yearlyAmount = 0;
      let isOnceOnly = false;

      switch (cost.unit) {
        case 'year':
          // 按年计费
          itemTotal = amountInCNY * years;
          yearlyAmount = amountInCNY;
          break;

        case 'month':
          // 按月计费
          itemTotal = amountInCNY * 12 * years;
          yearlyAmount = amountInCNY * 12;
          break;

        case 'once':
          // 一次性费用
          itemTotal = amountInCNY;
          yearlyAmount = 0; // 一次性费用不计入年均
          isOnceOnly = true;
          break;

        case 'per_school':
          // 每所学校费用（如申请费）
          itemTotal = amountInCNY * defaultApplicationSchools;
          yearlyAmount = 0; // 申请费不计入年均
          isOnceOnly = true;
          break;

        case 'set':
          // 按套计费（如校服费）- 根据您的要求，校服费按年计算
          itemTotal = amountInCNY * years;
          yearlyAmount = amountInCNY;
          break;

        default:
          // 默认按年处理
          itemTotal = amountInCNY * years;
          yearlyAmount = amountInCNY;
          break;
      }

      // 记录详细计算结果
      breakdown[key] = {
        originalAmount: cost.amount,
        originalCurrency: cost.currency,
        convertedAmount: amountInCNY,
        exchangeRate: rate,
        totalForPeriod: itemTotal,
        yearlyAmount: yearlyAmount,
        unit: cost.unit,
        isOnceOnly: isOnceOnly,
        schoolCount: cost.unit === 'per_school' ? defaultApplicationSchools : 1
      };

      // 累加总费用
      periodicTotal += itemTotal;
      
      // 累加年均费用（不包括一次性费用）
      yearlyTotal += yearlyAmount;
      
      // 累加一次性费用
      if (isOnceOnly) {
        onceTotal += itemTotal;
      }
    }

    return {
      summary: {
        periodicTotal: Math.round(periodicTotal),    // 剩余年限总费用
        yearlyTotal: Math.round(yearlyTotal),        // 年均费用
        onceTotal: Math.round(onceTotal)             // 一次性费用
      },
      breakdown,
      metadata: {
        years,
        defaultApplicationSchools,
        exchangeRates,
        calculationDate: new Date().toISOString()
      }
    };
  }

  /**
   * 验证教育路径的连续性
   * @param {Array} educationPath - 教育路径
   * @returns {Object} 验证结果
   */
  validateEducationPath(educationPath) {
    const validation = {
      isValid: true,
      warnings: [],
      suggestions: []
    };
    
    for (let i = 0; i < educationPath.length - 1; i++) {
      const current = educationPath[i];
      const next = educationPath[i + 1];
      
      const currentDirection = this.stagesConfig.getEducationLevelInfo(
        current.stage, current.level
      )?.direction;
      
      const nextDirection = this.stagesConfig.getEducationLevelInfo(
        next.stage, next.level
      )?.direction;
      
      // 检查方向转换的合理性
      if (this.isDirectionTransitionUnusual(currentDirection, nextDirection)) {
        validation.warnings.push(
          `从${current.stage}的${currentDirection}方向转到${next.stage}的${nextDirection}方向可能存在适应性风险`
        );
      }
    }
    
    return validation;
  }

  /**
   * 检查方向转换是否不寻常
   */
  isDirectionTransitionUnusual(from, to) {
    const unusualTransitions = [
      ['international', 'domestic'],
      ['overseas', 'domestic'],
      ['overseas', 'bilingual']
    ];
    
    return unusualTransitions.some(([f, t]) => f === from && t === to);
  }

  /**
   * 获取教育路径的总投资预估
   * @param {Array} educationPath - 教育路径
   * @returns {Object} 投资预估
   */
  calculatePathInvestment(educationPath) {
    let totalInvestment = 0;
    let yearlyBreakdown = [];
    let currencyBreakdown = { CNY: 0, USD: 0, GBP: 0, EUR: 0 };
    
    educationPath.forEach(stage => {
      if (stage.costData && stage.years) {
        const calculation = this.calculateTotalCost(stage.costData, stage.years);
        totalInvestment += calculation.summary.grandTotal;
        
        yearlyBreakdown.push({
          stage: stage.stage,
          years: stage.years,
          yearlyAverage: calculation.summary.yearlyTotal,
          totalCost: calculation.summary.grandTotal
        });
        
        // 统计各币种费用
        Object.entries(stage.costData.costs).forEach(([key, cost]) => {
          if (currencyBreakdown[cost.currency] !== undefined) {
            const rate = this.getExchangeRate(cost.currency);
            currencyBreakdown[cost.currency] += cost.amount * rate * stage.years;
          }
        });
      }
    });
    
    return {
      totalInvestment,
      yearlyBreakdown,
      currencyBreakdown,
      averageYearlyCost: totalInvestment / educationPath.reduce((sum, stage) => sum + (stage.years || 0), 0)
    };
  }

  /**
   * 获取汇率（简化版本）
   */
  getExchangeRate(currency) {
    const rates = {
      CNY: 1,
      USD: 7.2,
      GBP: 9.1,
      EUR: 8.0,
      CAD: 5.3,
      AUD: 4.8,
      JPY: 0.049,
      SGD: 5.4
    };
    return rates[currency] || 1;
  }
}

// 导出适配器类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EducationDataAdapter;
}

// 浏览器环境
if (typeof window !== 'undefined') {
  window.EducationDataAdapter = EducationDataAdapter;
}
