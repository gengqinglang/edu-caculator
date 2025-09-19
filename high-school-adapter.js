/**
 * 高中教育阶段数据适配器
 * 处理高中阶段的费用数据获取和计算
 * 版本: v1.0
 * 最后更新: 2024年9月18日
 */

class HighSchoolAdapter {
  constructor() {
    // 检查依赖文件是否加载
    if (typeof HIGH_SCHOOL_COST_DATA === 'undefined') {
      throw new Error('high-school-cost-data.js 未加载');
    }
    if (typeof getCityTier === 'undefined') {
      throw new Error('city-tier-mapping.js 未加载');
    }
    
    this.costData = HIGH_SCHOOL_COST_DATA;
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
   * 检查是否支持该教育阶段
   * @param {string} stage - 教育阶段代码
   * @returns {boolean} - 是否支持
   */
  isStageSupported(stage) {
    return stage === 'high' || stage === 'high_school';
  }

  /**
   * 获取高中费用数据
   * @param {string} stage - 教育阶段代码
   * @param {string} level - 教育水平代码
   * @param {string} city - 城市代码  
   * @param {string} country - 国家代码 (海外高中)
   * @param {string} educationStyle - 教育风格
   * @returns {object} - 标准化的费用数据
   */
  getCostData(stage, level, city, country, educationStyle = 'balanced') {
    try {
      // 判断是否为海外高中
      if (level && level.includes('overseas')) {
        return this.getOverseasCostData(level, country, educationStyle);
      }
      
      // 国内高中逻辑
      const cityTier = this.getCityTier(city || '');
      const levelName = this.mapLevelToChineseName(level);
      
      const stageData = this.costData[cityTier];
      const baseCostData = stageData?.[levelName];
      
      if (!baseCostData) {
        console.warn(`未找到费用数据: ${cityTier} - ${levelName}`);
        return this.getDefaultCostData();
      }

      // 构建标准化费用对象
      const costs = this.buildDomesticCosts(baseCostData, level, educationStyle);
      
      return {
        costs: costs,
        cityTier: cityTier,
        stage: "高中",
        level: levelName,
        educationStyle: educationStyle,
        dataSource: "high-school-cost-data.js"
      };
      
    } catch (error) {
      console.error('获取高中费用数据失败:', error);
      return this.getDefaultCostData();
    }
  }

  /**
   * 获取海外高中费用数据
   */
  getOverseasCostData(level, country, educationStyle) {
    const countryMapping = {
      'usa': '美国高中',
      'uk': '英国高中', 
      'canada': '加拿大高中',
      'australia': '澳洲高中',
      'singapore': '新加坡高中',
      'japan': '日本高中',
      'hongkong': '香港高中',
      'switzerland': '瑞士高中'
    };
    
    const countryName = countryMapping[country] || '美国高中';
    const baseCostData = this.costData.海外?.[countryName];
    
    if (!baseCostData) {
      console.warn(`未找到海外费用数据: ${countryName}`);
      return this.getDefaultCostData();
    }

    const costs = {
      学费: {
        amount: this.getAverageCost(baseCostData.tuition),
        unit: 'year',
        currency: 'CNY',
        description: '学费'
      },
      住宿费: {
        amount: this.getAverageCost(baseCostData.accommodation),
        unit: 'year', 
        currency: 'CNY',
        description: '住宿费'
      },
      餐费: {
        amount: this.getAverageCost(baseCostData.meal),
        unit: 'year',
        currency: 'CNY', 
        description: '餐费'
      },
      医疗保险费: {
        amount: this.getAverageCost(baseCostData.medicalInsurance),
        unit: 'year',
        currency: 'CNY',
        description: '医疗保险费'
      },
      监护人费: {
        amount: this.getAverageCost(baseCostData.guardianFee),
        unit: 'year',
        currency: 'CNY',
        description: '监护人费'
      },
      杂费: {
        amount: this.getAverageCost(baseCostData.misc),
        unit: 'year',
        currency: 'CNY',
        description: '杂费'
      },
      签证费: {
        amount: this.getAverageCost(baseCostData.visa),
        unit: 'year',
        currency: 'CNY',
        description: '签证及服务费(年均)'
      },
      交通费: {
        amount: this.getAverageCost(baseCostData.flights),
        unit: 'year',
        currency: 'CNY',
        description: '机票及交通费'
      },
      生活费: {
        amount: this.getAverageCost(baseCostData.livingExpenses),
        unit: 'year',
        currency: 'CNY',
        description: '生活费'
      }
    };

    return {
      costs: costs,
      cityTier: "海外",
      stage: "高中",
      level: countryName,
      educationStyle: educationStyle,
      dataSource: "high-school-cost-data.js"
    };
  }

  /**
   * 构建国内高中费用对象
   */
  buildDomesticCosts(baseCostData, level, educationStyle) {
    const costs = {
      学费: {
        amount: this.getAverageCost(baseCostData.tuition),
        unit: 'year',
        currency: 'CNY',
        description: '学费'
      },
      住宿费: {
        amount: this.getAverageCost(baseCostData.accommodation),
        unit: 'year',
        currency: 'CNY',
        description: '住宿费'
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
      }
    };

    // 根据学校类型添加特定费用项
    if (level === 'domesticPublic') {
      // 公立高中：补课/辅导费
      costs.补课辅导费 = {
        amount: this.getAverageCost(baseCostData.tutoring[educationStyle]),
        unit: 'year',
        currency: 'CNY',
        description: '补课/辅导费'
      };
    } else if (level === 'internationalPublic' || level === 'internationalSchool') {
      // 国际部/国际高中：标化考试费、背景提升活动费、留学中介服务费
      costs.标化考试费 = {
        amount: this.getAverageCost(baseCostData.standardizedTest[educationStyle]),
        unit: 'year',
        currency: 'CNY',
        description: '标化考试费'
      };
      costs.背景提升费 = {
        amount: this.getAverageCost(baseCostData.backgroundActivities[educationStyle]),
        unit: 'year',
        currency: 'CNY',
        description: '背景提升活动费'
      };
      costs.留学中介费 = {
        amount: Math.round(this.getAverageCost(baseCostData.consultingService[educationStyle]) / 3), // 全程费用分3年
        unit: 'year',
        currency: 'CNY',
        description: '留学中介服务费(年均)'
      };
    }

    return costs;
  }

  /**
   * 映射教育水平代码到中文名称
   */
  mapLevelToChineseName(level) {
    const mapping = {
      // 完整名称映射
      'domesticPublic': '公立高中',
      'domesticPrivate': '私立高中',
      'internationalPublic': '公立国际部',
      'internationalSchool': '国际高中',
      'overseas': '海外高中',
      // 简化名称映射
      'public': '公立高中',
      'private': '私立高中',
      'international': '公立国际部'
    };
    return mapping[level] || level;
  }

  /**
   * 计算总费用
   * @param {object} costData - 费用数据
   * @param {number} years - 年数
   * @returns {object} - 计算结果
   */
  calculateTotalCost(costData, years) {
    try {
      let totalCost = 0;
      let yearlyTotal = 0;
      let oneTimeCost = 0;
      const details = {};
      const breakdown = {};

      for (const [key, cost] of Object.entries(costData.costs)) {
        const amount = parseFloat(cost.amount) || 0;
        let itemTotal = 0;

        switch (cost.unit) {
          case 'year':
            itemTotal = amount * years;
            yearlyTotal += amount;
            break;
          case 'month':
            itemTotal = amount * 12 * years;
            yearlyTotal += amount * 12;
            break;
          case 'once':
          case 'set':
            itemTotal = amount;
            oneTimeCost += amount;
            break;
          default:
            itemTotal = amount * years;
            yearlyTotal += amount;
        }

        totalCost += itemTotal;
        
        details[key] = {
          amount: amount,
          unit: cost.unit,
          currency: cost.currency,
          description: cost.description,
          itemTotal: itemTotal
        };

        breakdown[key] = {
          originalAmount: amount,
          exchangeRate: 1.0, // 高中数据已经转换为人民币
          isOnceOnly: cost.unit === 'once' || cost.unit === 'set',
          schoolCount: 1,
          totalForPeriod: itemTotal
        };
      }

      return {
        // 新结构
        totalCost: Math.round(totalCost),
        yearlyTotal: Math.round(yearlyTotal),
        oneTimeCost: Math.round(oneTimeCost),
        details: details,
        years: years,
        
        // 兼容性结构
        summary: {
          periodicTotal: Math.round(totalCost),
          yearlyTotal: Math.round(yearlyTotal),
          onceTotal: Math.round(oneTimeCost),
          grandTotal: Math.round(totalCost)
        },
        breakdown: breakdown,
        metadata: {
          stage: costData.stage,
          level: costData.level,
          cityTier: costData.cityTier,
          educationStyle: costData.educationStyle,
          dataSource: costData.dataSource
        }
      };
      
    } catch (error) {
      console.error('计算高中总费用失败:', error);
      return {
        totalCost: 0,
        yearlyTotal: 0,
        oneTimeCost: 0,
        details: {},
        years: years,
        summary: {
          periodicTotal: 0,
          yearlyTotal: 0,
          onceTotal: 0,
          grandTotal: 0
        },
        breakdown: {},
        metadata: {
          error: error.message
        }
      };
    }
  }

  /**
   * 获取默认费用数据
   */
  getDefaultCostData() {
    return {
      costs: {
        学费: { amount: 0, unit: 'year', currency: 'CNY', description: '学费' },
        住宿费: { amount: 0, unit: 'year', currency: 'CNY', description: '住宿费' },
        餐费: { amount: 0, unit: 'year', currency: 'CNY', description: '餐费' },
        杂费: { amount: 0, unit: 'year', currency: 'CNY', description: '杂费' }
      },
      cityTier: "未知",
      stage: "高中",
      level: "未知",
      educationStyle: "balanced",
      dataSource: "high-school-cost-data.js"
    };
  }
}

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HighSchoolAdapter };
}
