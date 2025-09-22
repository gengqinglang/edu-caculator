/**
 * 高中费用数据
 * 基于高中费用参考.md文件生成
 * 版本: v1.0
 * 最后更新: 2024年9月18日
 */

const HIGH_SCHOOL_COST_DATA = {
  metadata: {
    version: "1.0",
    lastUpdated: "2024-09-18",
    dataSource: "高中费用参考.md",
    stage: "高中",
    description: "高中教育阶段的标准化费用数据，包含国内和海外选项",
    costItems: {
      // 国内高中费用项
      tuition: "学费 (元/年)",
      accommodation: "住宿费 (元/年)",
      meal: "餐费 (元/年)",
      misc: "杂费 (元/年)",
      tutoring: "补课/辅导费 (元/年) - 公立高中",
      standardizedTest: "标化考试费 (元/年) - 国际部/国际高中",
      backgroundActivities: "背景提升活动费 (元/年) - 国际部/国际高中",
      consultingService: "留学中介服务费 (元/全程) - 国际部/国际高中",
      // 海外高中费用项
      medicalInsurance: "医疗保险费 (元/年) - 海外高中",
      guardianFee: "监护人费 (元/年) - 海外高中",
      visa: "签证及服务费 (元/次) - 海外高中",
      flights: "机票及交通费 (元/年) - 海外高中",
      livingExpenses: "生活费 (元/年) - 海外高中"
    },
    parentingStyles: {
      relaxed: "佛系",
      balanced: "平衡",
      intensive: "鸡娃"
    },
    directions: {
      domestic: "国内方向",
      international: "国际方向", 
      overseas: "海外方向"
    }
  },

  // 一线城市费用数据
  一线城市: {
    // 公立高中 (国内方向)
    "公立高中": {
      tuition: { min: 800, max: 2000 },
      meal: { min: 9600, max: 14400 }, // 800-1200元/月 * 12月
      misc: { min: 1000, max: 2000 },
      tutoring: {
        relaxed: { min: 20000, max: 30000 },
        balanced: { min: 35000, max: 60000 },
        intensive: { min: 80000, max: 150000 }
      }
    },
    
    // 公立国际部 (国际方向)
    "公立国际部": {
      tuition: { min: 80000, max: 120000 },
      accommodation: { min: 5000, max: 10000 },
      meal: { min: 10000, max: 15000 },
      misc: { min: 10000, max: 20000 },
      standardizedTest: {
        relaxed: { min: 10000, max: 20000 },
        balanced: { min: 20000, max: 40000 },
        intensive: { min: 40000, max: 70000 }
      },
      backgroundActivities: {
        relaxed: { min: 10000, max: 30000 },
        balanced: { min: 30000, max: 80000 },
        intensive: { min: 80000, max: 150000 }
      },
      consultingService: {
        relaxed: { min: 50000, max: 100000 },
        balanced: { min: 100000, max: 200000 },
        intensive: { min: 200000, max: 300000 }
      }
    },
    
    // 国际高中 (国际方向)
    "国际高中": {
      tuition: { min: 150000, max: 250000 },
      accommodation: { min: 15000, max: 30000 },
      meal: { min: 15000, max: 25000 },
      misc: { min: 20000, max: 40000 },
      standardizedTest: {
        relaxed: { min: 10000, max: 20000 },
        balanced: { min: 20000, max: 40000 },
        intensive: { min: 40000, max: 70000 }
      },
      backgroundActivities: {
        relaxed: { min: 20000, max: 40000 },
        balanced: { min: 40000, max: 100000 },
        intensive: { min: 100000, max: 200000 }
      },
      consultingService: {
        relaxed: { min: 50000, max: 100000 },
        balanced: { min: 100000, max: 200000 },
        intensive: { min: 200000, max: 300000 }
      }
    }
  },

  // 二线城市费用数据  
  二线城市: {
    "公立高中": {
      tuition: { min: 600, max: 1500 },
      meal: { min: 7200, max: 10800 }, // 600-900元/月 * 12月
      misc: { min: 800, max: 1500 },
      tutoring: {
        relaxed: { min: 12000, max: 20000 },
        balanced: { min: 25000, max: 45000 },
        intensive: { min: 60000, max: 120000 }
      }
    },
    
    "公立国际部": {
      tuition: { min: 60000, max: 100000 },
      accommodation: { min: 4000, max: 8000 },
      meal: { min: 8000, max: 12000 },
      misc: { min: 8000, max: 15000 },
      standardizedTest: {
        relaxed: { min: 8000, max: 15000 },
        balanced: { min: 15000, max: 30000 },
        intensive: { min: 30000, max: 50000 }
      },
      backgroundActivities: {
        relaxed: { min: 8000, max: 20000 },
        balanced: { min: 20000, max: 50000 },
        intensive: { min: 50000, max: 120000 }
      },
      consultingService: {
        relaxed: { min: 40000, max: 80000 },
        balanced: { min: 80000, max: 150000 },
        intensive: { min: 150000, max: 250000 }
      }
    },
    
    "国际高中": {
      tuition: { min: 120000, max: 200000 },
      accommodation: { min: 12000, max: 25000 },
      meal: { min: 12000, max: 20000 },
      misc: { min: 15000, max: 30000 },
      standardizedTest: {
        relaxed: { min: 8000, max: 15000 },
        balanced: { min: 15000, max: 30000 },
        intensive: { min: 30000, max: 50000 }
      },
      backgroundActivities: {
        relaxed: { min: 15000, max: 30000 },
        balanced: { min: 30000, max: 80000 },
        intensive: { min: 80000, max: 150000 }
      },
      consultingService: {
        relaxed: { min: 40000, max: 80000 },
        balanced: { min: 80000, max: 150000 },
        intensive: { min: 150000, max: 250000 }
      }
    }
  },

  // 三线城市费用数据
  三线城市: {
    "公立高中": {
      tuition: { min: 500, max: 1000 },
      meal: { min: 6000, max: 9600 }, // 500-800元/月 * 12月
      misc: { min: 600, max: 1000 },
      tutoring: {
        relaxed: { min: 8000, max: 15000 },
        balanced: { min: 18000, max: 35000 },
        intensive: { min: 45000, max: 90000 }
      }
    },
    
    "公立国际部": {
      tuition: { min: 50000, max: 80000 },
      accommodation: { min: 3000, max: 6000 },
      meal: { min: 6000, max: 10000 },
      misc: { min: 6000, max: 12000 },
      standardizedTest: {
        relaxed: { min: 5000, max: 10000 },
        balanced: { min: 10000, max: 20000 },
        intensive: { min: 20000, max: 40000 }
      },
      backgroundActivities: {
        relaxed: { min: 5000, max: 15000 },
        balanced: { min: 15000, max: 40000 },
        intensive: { min: 40000, max: 100000 }
      },
      consultingService: {
        relaxed: { min: 30000, max: 60000 },
        balanced: { min: 60000, max: 120000 },
        intensive: { min: 120000, max: 200000 }
      }
    },
    
    "国际高中": {
      tuition: { min: 100000, max: 160000 },
      accommodation: { min: 10000, max: 20000 },
      meal: { min: 10000, max: 18000 },
      misc: { min: 10000, max: 25000 },
      standardizedTest: {
        relaxed: { min: 5000, max: 10000 },
        balanced: { min: 10000, max: 20000 },
        intensive: { min: 20000, max: 40000 }
      },
      backgroundActivities: {
        relaxed: { min: 10000, max: 25000 },
        balanced: { min: 25000, max: 60000 },
        intensive: { min: 60000, max: 120000 }
      },
      consultingService: {
        relaxed: { min: 30000, max: 60000 },
        balanced: { min: 60000, max: 120000 },
        intensive: { min: 120000, max: 200000 }
      }
    }
  },

  // 四线及以下城市费用数据
  "四线及以下": {
    "公立高中": {
      tuition: { min: 300, max: 800 },
      meal: { min: 4800, max: 7200 }, // 400-600元/月 * 12月
      misc: { min: 500, max: 800 },
      tutoring: {
        relaxed: { min: 8000, max: 12000 },
        balanced: { min: 15000, max: 25000 },
        intensive: { min: 30000, max: 60000 }
      }
    },
    
    "公立国际部": {
      tuition: { min: 40000, max: 70000 },
      accommodation: { min: 2500, max: 5000 },
      meal: { min: 5000, max: 8000 },
      misc: { min: 5000, max: 10000 },
      standardizedTest: {
        relaxed: { min: 4000, max: 8000 },
        balanced: { min: 8000, max: 15000 },
        intensive: { min: 15000, max: 30000 }
      },
      backgroundActivities: {
        relaxed: { min: 4000, max: 12000 },
        balanced: { min: 12000, max: 30000 },
        intensive: { min: 30000, max: 80000 }
      },
      consultingService: {
        relaxed: { min: 25000, max: 50000 },
        balanced: { min: 50000, max: 100000 },
        intensive: { min: 100000, max: 150000 }
      }
    },
    
    "国际高中": {
      tuition: { min: 80000, max: 140000 },
      accommodation: { min: 8000, max: 15000 },
      meal: { min: 8000, max: 15000 },
      misc: { min: 8000, max: 20000 },
      standardizedTest: {
        relaxed: { min: 4000, max: 8000 },
        balanced: { min: 8000, max: 15000 },
        intensive: { min: 15000, max: 30000 }
      },
      backgroundActivities: {
        relaxed: { min: 8000, max: 20000 },
        balanced: { min: 20000, max: 50000 },
        intensive: { min: 50000, max: 100000 }
      },
      consultingService: {
        relaxed: { min: 25000, max: 50000 },
        balanced: { min: 50000, max: 100000 },
        intensive: { min: 100000, max: 150000 }
      }
    }
  },

  // 海外高中费用数据 (按国家/地区)
  海外: {
    "美国高中": {
      tuition: { min: 200000, max: 400000 },
      accommodation: { min: 100000, max: 200000 },
      meal: { min: 30000, max: 60000 }, // 通常包含在住宿费中，此处为额外餐费
      medicalInsurance: { min: 8000, max: 15000 },
      guardianFee: { min: 10000, max: 20000 },
      misc: { min: 20000, max: 40000 },
      visa: { min: 8000, max: 12000 }, // 按3年分摊
      flights: { min: 8000, max: 20000 }, // 年均往返机票
      livingExpenses: { min: 50000, max: 150000 }
    },
    
    "英国高中": {
      tuition: { min: 180000, max: 350000 },
      accommodation: { min: 100000, max: 180000 },
      meal: { min: 25000, max: 50000 },
      medicalInsurance: { min: 30000, max: 30000 }, // NHS附加费
      guardianFee: { min: 10000, max: 15000 },
      misc: { min: 20000, max: 40000 },
      visa: { min: 10000, max: 15000 },
      flights: { min: 10000, max: 25000 },
      livingExpenses: { min: 40000, max: 120000 }
    },
    
    "加拿大高中": {
      tuition: { min: 120000, max: 250000 },
      accommodation: { min: 70000, max: 120000 },
      meal: { min: 20000, max: 40000 },
      medicalInsurance: { min: 6000, max: 10000 },
      guardianFee: { min: 8000, max: 12000 },
      misc: { min: 15000, max: 30000 },
      visa: { min: 5000, max: 8000 },
      flights: { min: 8000, max: 18000 },
      livingExpenses: { min: 35000, max: 100000 }
    },
    
    "澳洲高中": {
      tuition: { min: 140000, max: 260000 },
      accommodation: { min: 80000, max: 140000 },
      meal: { min: 20000, max: 40000 },
      medicalInsurance: { min: 6000, max: 10000 }, // OSHC
      guardianFee: { min: 8000, max: 12000 },
      misc: { min: 15000, max: 30000 },
      visa: { min: 6000, max: 10000 },
      flights: { min: 8000, max: 18000 },
      livingExpenses: { min: 40000, max: 110000 }
    },
    
    "新加坡高中": {
      tuition: { min: 100000, max: 200000 },
      accommodation: { min: 60000, max: 120000 },
      meal: { min: 15000, max: 30000 },
      medicalInsurance: { min: 3000, max: 6000 },
      guardianFee: { min: 5000, max: 10000 },
      misc: { min: 10000, max: 20000 },
      visa: { min: 3000, max: 5000 },
      flights: { min: 5000, max: 12000 },
      livingExpenses: { min: 25000, max: 80000 }
    },
    
    "日本高中": {
      tuition: { min: 80000, max: 150000 },
      accommodation: { min: 50000, max: 100000 },
      meal: { min: 15000, max: 30000 },
      medicalInsurance: { min: 3000, max: 6000 },
      guardianFee: { min: 5000, max: 10000 },
      misc: { min: 10000, max: 20000 },
      visa: { min: 3000, max: 5000 },
      flights: { min: 4000, max: 10000 },
      livingExpenses: { min: 30000, max: 90000 }
    },
    
    "香港高中": {
      tuition: { min: 120000, max: 200000 },
      accommodation: { min: 60000, max: 120000 }, // 本地住宿
      meal: { min: 20000, max: 40000 },
      medicalInsurance: { min: 3000, max: 6000 },
      guardianFee: { min: 0, max: 5000 },
      misc: { min: 15000, max: 30000 },
      visa: { min: 2000, max: 3000 },
      flights: { min: 3000, max: 8000 },
      livingExpenses: { min: 30000, max: 80000 }
    },
    
    "瑞士高中": {
      tuition: { min: 250000, max: 600000 },
      accommodation: { min: 0, max: 0 }, // 通常包含在学费中
      meal: { min: 0, max: 0 }, // 通常包含在学费中
      medicalInsurance: { min: 5000, max: 10000 },
      guardianFee: { min: 0, max: 5000 },
      misc: { min: 30000, max: 60000 },
      visa: { min: 5000, max: 8000 },
      flights: { min: 8000, max: 20000 },
      livingExpenses: { min: 20000, max: 60000 }
    }
  }
};

/**
 * 获取高中费用数据
 * @returns {object} 高中费用数据对象
 */
function getHighSchoolCostData() {
  return HIGH_SCHOOL_COST_DATA;
}

/**
 * 获取特定城市等级和学校类型的平均费用
 * @param {string} cityTier - 城市等级
 * @param {string} schoolType - 学校类型
 * @param {string} costItem - 费用项目
 * @param {string} parentingStyle - 教育风格 (可选，仅适用于弹性费用项)
 * @returns {number} 平均费用
 */
function getHighSchoolAverageCost(cityTier, schoolType, costItem, parentingStyle = null) {
  try {
    const stageData = HIGH_SCHOOL_COST_DATA[cityTier];
    if (!stageData) return 0;
    
    const schoolData = stageData[schoolType];
    if (!schoolData) return 0;
    
    const costData = schoolData[costItem];
    if (!costData) return 0;
    
    // 如果是带教育风格的费用项
    if (parentingStyle && costData[parentingStyle]) {
      const styleData = costData[parentingStyle];
      return Math.round((styleData.min + styleData.max) / 2);
    }
    
    // 如果是普通费用项
    if (typeof costData.min === 'number' && typeof costData.max === 'number') {
      return Math.round((costData.min + costData.max) / 2);
    }
    
    return 0;
  } catch (error) {
    console.error('获取高中平均费用失败:', error);
    return 0;
  }
}

// 导出配置
// 高中海外国家/地区枚举
const HIGH_SCHOOL_EDUCATION_LEVELS = {
  usa: "美国",
  uk: "英国", 
  canada: "加拿大",
  australia: "澳洲",
  singapore: "新加坡",
  japan: "日本",
  hongkong: "香港",
  europeOthers: "欧洲其他"
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HIGH_SCHOOL_COST_DATA, HIGH_SCHOOL_EDUCATION_LEVELS, getHighSchoolCostData, getHighSchoolAverageCost };
} else if (typeof window !== 'undefined') {
  // 浏览器环境下创建全局变量
  window.HIGH_SCHOOL_COST_DATA = HIGH_SCHOOL_COST_DATA;
  window.HIGH_SCHOOL_EDUCATION_LEVELS = HIGH_SCHOOL_EDUCATION_LEVELS;
}
