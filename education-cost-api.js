/**
 * 教育费用计算器 - 数据访问API
 * 静态网页数据查询接口
 * 版本: v1.0
 * 最后更新: 2024年9月15日
 */

// 引入数据文件
// 在HTML中需要先引入 education-cost-data.js 和 education-cost-data-extended.js

/**
 * 教育费用数据访问类
 */
class EducationCostAPI {
  constructor() {
    // 检查数据是否已加载
    if (typeof EDUCATION_COST_DATA === 'undefined' || typeof HIGHER_EDUCATION_COST_DATA === 'undefined') {
      throw new Error('教育费用数据未加载，请确保已引入 education-cost-data.js 和 education-cost-data-extended.js 文件');
    }
    
    this.primaryData = EDUCATION_COST_DATA;
    this.higherData = HIGHER_EDUCATION_COST_DATA;
  }

  /**
   * 获取幼儿园阶段费用数据
   * @param {string} type - 学校类型 ('public' | 'private')
   * @param {string} city - 城市代码 ('beijing', 'shanghai', 'guangzhou', 'shenzhen', 'hangzhou', 'chengdu', 'wuhan')
   * @returns {Object} 费用数据对象
   */
  getKindergartenCosts(type, city) {
    try {
      const data = this.primaryData.kindergarten[type][city];
      if (!data) {
        throw new Error(`未找到 ${city} 的${type === 'public' ? '公立' : '私立'}幼儿园数据`);
      }
      return {
        stage: 'kindergarten',
        type: type === 'public' ? '公立' : '私立',
        location: data.cityName,
        costs: data.costs,
        dataSource: data.dataSource
      };
    } catch (error) {
      console.error('获取幼儿园数据失败:', error);
      return null;
    }
  }

  /**
   * 获取小学阶段费用数据
   * @param {string} type - 学校类型 ('public' | 'private')
   * @param {string} city - 城市代码 ('beijing', 'shanghai', 'guangzhou', 'shenzhen', 'hangzhou', 'chengdu', 'wuhan')
   * @returns {Object} 费用数据对象
   */
  getPrimarySchoolCosts(type, city) {
    try {
      const data = this.primaryData.primarySchool[type][city];
      if (!data) {
        throw new Error(`未找到 ${city} 的${type === 'public' ? '公立' : '私立'}小学数据`);
      }
      return {
        stage: 'primary',
        type: type === 'public' ? '公立' : '私立',
        location: data.cityName,
        costs: data.costs,
        dataSource: data.dataSource
      };
    } catch (error) {
      console.error('获取小学数据失败:', error);
      return null;
    }
  }

  /**
   * 获取初中阶段费用数据
   * @param {string} type - 学校类型 ('public' | 'private')
   * @param {string} city - 城市代码
   * @returns {Object} 费用数据对象
   */
  getMiddleSchoolCosts(type, city) {
    try {
      const data = this.primaryData.middleSchool[type][city];
      if (!data) {
        throw new Error(`未找到 ${city} 的${type === 'public' ? '公立' : '私立'}初中数据`);
      }
      return {
        stage: 'middle',
        type: type === 'public' ? '公立' : '私立',
        location: data.cityName,
        costs: data.costs,
        dataSource: data.dataSource
      };
    } catch (error) {
      console.error('获取初中数据失败:', error);
      return null;
    }
  }

  /**
   * 获取高中阶段费用数据
   * @param {string} direction - 方向 ('domestic' | 'international')
   * @param {string} type - 类型 ('public' | 'private' | 'internationalPublic' | 'internationalSchool' | 'overseas')
   * @param {string} location - 城市代码或国家代码
   * @returns {Object} 费用数据对象
   */
  getHighSchoolCosts(direction, type, location) {
    try {
      let data;
      let stageName = '';
      
      if (direction === 'domestic') {
        if (type === 'public') {
          data = this.primaryData.highSchool.domesticPublic[location];
          stageName = '国内方向-公立高中';
        } else if (type === 'private') {
          data = this.primaryData.highSchool.domesticPrivate[location];
          stageName = '国内方向-私立高中';
        }
      } else if (direction === 'international') {
        if (type === 'internationalPublic') {
          data = this.primaryData.highSchool.internationalPublic[location];
          stageName = '出国方向-公立国际部';
        } else if (type === 'internationalSchool') {
          data = this.primaryData.highSchool.internationalSchool[location];
          stageName = '出国方向-国际学校';
        } else if (type === 'overseas') {
          data = this.primaryData.highSchool.overseas[location];
          stageName = '海外高中';
        }
      }
      
      if (!data) {
        throw new Error(`未找到 ${location} 的 ${stageName} 数据`);
      }
      
      return {
        stage: 'high',
        type: stageName,
        location: data.cityName || data.countryName,
        costs: data.costs,
        dataSource: data.dataSource
      };
    } catch (error) {
      console.error('获取高中数据失败:', error);
      return null;
    }
  }

  /**
   * 获取大学阶段费用数据
   * @param {string} direction - 方向 ('domestic' | 'overseas')
   * @param {string} type - 类型 (国内: 'public'|'private'|'jointProgram', 海外: 国家代码)
   * @returns {Object} 费用数据对象
   */
  getUniversityCosts(direction, type) {
    try {
      let data;
      let stageName = '';
      let location = '';
      
      if (direction === 'domestic') {
        data = this.higherData.university.domestic[type];
        stageName = data.name;
        location = '中国';
      } else if (direction === 'overseas') {
        data = this.higherData.university.overseas[type];
        stageName = '海外大学';
        location = data.countryName;
      }
      
      if (!data) {
        throw new Error(`未找到 ${type} 的大学数据`);
      }
      
      return {
        stage: 'university',
        type: stageName,
        location: location,
        costs: data.costs,
        dataSource: data.dataSource
      };
    } catch (error) {
      console.error('获取大学数据失败:', error);
      return null;
    }
  }

  /**
   * 获取研究生阶段费用数据
   * @param {string} direction - 方向 ('domestic' | 'overseas')
   * @param {string} type - 类型 (国内: 'academic'|'professional'|'phd', 海外: 国家代码)
   * @param {string} degree - 学位类型 (海外: 'master'|'phd')
   * @returns {Object} 费用数据对象
   */
  getGraduateCosts(direction, type, degree = null) {
    try {
      let data;
      let stageName = '';
      let location = '';
      
      if (direction === 'domestic') {
        data = this.higherData.graduate.domestic[type];
        stageName = data.name;
        location = '中国';
      } else if (direction === 'overseas') {
        if (!degree) {
          throw new Error('海外研究生需要指定学位类型 (master/phd)');
        }
        data = this.higherData.graduate.overseas[type][degree];
        stageName = `海外${data.name}`;
        location = this.higherData.graduate.overseas[type].countryName;
      }
      
      if (!data) {
        throw new Error(`未找到 ${type} 的研究生数据`);
      }
      
      return {
        stage: 'graduate',
        type: stageName,
        location: location,
        costs: data.costs || data,
        dataSource: this.higherData.graduate.overseas[type]?.dataSource || data.dataSource
      };
    } catch (error) {
      console.error('获取研究生数据失败:', error);
      return null;
    }
  }

  /**
   * 获取所有可用的城市列表
   * @returns {Array} 城市列表
   */
  getAvailableCities() {
    const cities = Object.keys(this.primaryData.primarySchool.public);
    return cities.map(cityCode => ({
      code: cityCode,
      name: this.primaryData.primarySchool.public[cityCode].cityName
    }));
  }

  /**
   * 获取所有可用的海外国家列表
   * @returns {Array} 国家列表
   */
  getAvailableCountries() {
    const countries = Object.keys(this.primaryData.highSchool.overseas);
    return countries.map(countryCode => ({
      code: countryCode,
      name: this.primaryData.highSchool.overseas[countryCode].countryName
    }));
  }

  /**
   * 获取所有可用的留学国家列表（大学及以上）
   * @returns {Array} 国家列表
   */
  getAvailableStudyCountries() {
    const countries = Object.keys(this.higherData.university.overseas);
    return countries.map(countryCode => ({
      code: countryCode,
      name: this.higherData.university.overseas[countryCode].countryName
    }));
  }

  /**
   * 计算总费用
   * @param {Object} costData - 费用数据对象
   * @param {number} years - 年数
   * @param {Object} customRates - 自定义汇率 {USD: 7.2, GBP: 9.1, ...}
   * @returns {Object} 计算结果
   */
  calculateTotalCost(costData, years = 1, customRates = {}) {
    if (!costData || !costData.costs) {
      return null;
    }

    // 默认汇率（2024年9月参考汇率）
    const defaultRates = {
      CNY: 1,
      USD: 7.2,
      GBP: 9.1,
      CAD: 5.3,
      AUD: 4.8,
      EUR: 8.0,
      JPY: 0.049,
      SGD: 5.4
    };

    const exchangeRates = { ...defaultRates, ...customRates };
    
    let totalYearly = 0;
    let totalMonthly = 0;
    let totalOnce = 0;
    let totalPerSchool = 0;
    
    const breakdown = {};

    for (const [key, cost] of Object.entries(costData.costs)) {
      const rate = exchangeRates[cost.currency] || 1;
      const amountInCNY = cost.amount * rate;
      
      breakdown[key] = {
        original: cost,
        cnyAmount: amountInCNY,
        totalForPeriod: 0
      };

      switch (cost.unit) {
        case 'year':
          breakdown[key].totalForPeriod = amountInCNY * years;
          totalYearly += amountInCNY;
          break;
        case 'month':
          breakdown[key].totalForPeriod = amountInCNY * 12 * years;
          totalMonthly += amountInCNY;
          break;
        case 'once':
          breakdown[key].totalForPeriod = amountInCNY;
          totalOnce += amountInCNY;
          break;
        case 'per_school':
          breakdown[key].totalForPeriod = amountInCNY; // 单校费用，需要乘以申请学校数量
          totalPerSchool += amountInCNY;
          break;
        case 'set':
          breakdown[key].totalForPeriod = amountInCNY; // 套装费用，按需购买
          totalOnce += amountInCNY;
          break;
      }
    }

    const grandTotal = (totalYearly + totalMonthly * 12) * years + totalOnce + totalPerSchool;

    return {
      breakdown,
      summary: {
        yearlyTotal: totalYearly + totalMonthly * 12,
        periodicTotal: (totalYearly + totalMonthly * 12) * years,
        onceTotal: totalOnce,
        perSchoolTotal: totalPerSchool,
        grandTotal: grandTotal
      },
      years,
      exchangeRates,
      lastCalculated: new Date().toISOString()
    };
  }

  /**
   * 搜索教育路径
   * @param {Object} criteria - 搜索条件
   * @returns {Array} 匹配的教育路径
   */
  searchEducationPath(criteria) {
    const results = [];
    
    // 小学搜索
    if (criteria.stage === 'primary' || !criteria.stage) {
      for (const type of ['public', 'private']) {
        for (const city of Object.keys(this.primaryData.primarySchool[type])) {
          if (!criteria.city || city === criteria.city) {
            if (!criteria.type || type === criteria.type) {
              results.push({
                stage: 'primary',
                type,
                city,
                data: this.getPrimarySchoolCosts(type, city)
              });
            }
          }
        }
      }
    }

    // 可以继续添加其他阶段的搜索逻辑...
    
    return results;
  }

  /**
   * 获取费用对比数据
   * @param {Array} paths - 要对比的教育路径
   * @returns {Object} 对比结果
   */
  compareCosts(paths) {
    const comparison = {
      paths: [],
      cheapest: null,
      mostExpensive: null,
      averageCost: 0
    };

    let totalCosts = [];

    for (const path of paths) {
      const costData = this.calculateTotalCost(path.data, path.years || 1);
      if (costData) {
        const pathComparison = {
          ...path,
          calculation: costData,
          totalCost: costData.summary.grandTotal
        };
        
        comparison.paths.push(pathComparison);
        totalCosts.push(costData.summary.grandTotal);
      }
    }

    if (totalCosts.length > 0) {
      comparison.cheapest = comparison.paths.find(p => p.totalCost === Math.min(...totalCosts));
      comparison.mostExpensive = comparison.paths.find(p => p.totalCost === Math.max(...totalCosts));
      comparison.averageCost = totalCosts.reduce((a, b) => a + b, 0) / totalCosts.length;
    }

    return comparison;
  }

  /**
   * 验证数据完整性
   * @returns {Object} 验证结果
   */
  validateData() {
    const validation = {
      isValid: true,
      errors: [],
      warnings: [],
      summary: {
        primarySchoolCities: 0,
        middleSchoolCities: 0,
        highSchoolCities: 0,
        countries: 0,
        studyCountries: 0
      }
    };

    try {
      // 验证小学数据
      validation.summary.primarySchoolCities = Object.keys(this.primaryData.primarySchool.public).length;
      
      // 验证初中数据
      validation.summary.middleSchoolCities = Object.keys(this.primaryData.middleSchool.public).length;
      
      // 验证高中数据
      validation.summary.highSchoolCities = Object.keys(this.primaryData.highSchool.domesticPublic).length;
      validation.summary.countries = Object.keys(this.primaryData.highSchool.overseas).length;
      
      // 验证大学数据
      validation.summary.studyCountries = Object.keys(this.higherData.university.overseas).length;

      // 数据完整性检查
      if (validation.summary.primarySchoolCities === 0) {
        validation.errors.push('小学数据为空');
        validation.isValid = false;
      }
      
      if (validation.summary.countries === 0) {
        validation.errors.push('海外高中数据为空');
        validation.isValid = false;
      }
      
      if (validation.summary.studyCountries === 0) {
        validation.errors.push('海外大学数据为空');
        validation.isValid = false;
      }

    } catch (error) {
      validation.isValid = false;
      validation.errors.push(`数据验证失败: ${error.message}`);
    }

    return validation;
  }
}

// 导出API类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EducationCostAPI;
}

// 全局实例（浏览器环境）
if (typeof window !== 'undefined') {
  window.EducationCostAPI = EducationCostAPI;
}
