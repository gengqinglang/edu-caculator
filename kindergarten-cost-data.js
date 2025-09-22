/**
 * 幼儿园费用数据
 * 基于幼小初费用参考.md文件生成
 * 版本: v2.0
 * 最后更新: 2024年9月17日
 */

const KINDERGARTEN_COST_DATA = {
  metadata: {
    version: "2.0",
    lastUpdated: "2024-09-17",
    dataSource: "幼小初费用参考.md",
    stage: "幼儿园",
    description: "幼儿园教育阶段的标准化费用数据",
    costItems: {
      tuition: "学费 (元/年)",
      meal: "餐费 (元/年)", 
      misc: "杂费 (元/年)",
      extracurricular: "课外费 (元/年)"
    },
    parentingStyles: {
      relaxed: "佛系",
      balanced: "平衡", // 对应原数据中的"正常"
      intensive: "鸡娃"
    }
  },

  // 一线城市费用数据
  一线城市: {
    公立: {
      tuition: { min: 0, max: 0, note: "大班免费政策" },
      meal: { min: 5400, max: 7200 },
      misc: { min: 600, max: 1000 },
      extracurricular: {
        relaxed: { min: 8000, max: 15000 },
        balanced: { min: 20000, max: 35000 },
        intensive: { min: 50000, max: 80000 }
      }
    },
    "私立(中档)": {
      tuition: { min: 18000, max: 24000 },
      meal: { min: 5400, max: 7200 },
      misc: { min: 2000, max: 4000 },
      extracurricular: {
        relaxed: { min: 8000, max: 15000 },
        balanced: { min: 20000, max: 35000 },
        intensive: { min: 50000, max: 80000 }
      }
    },
    "私立(高档)": {
      tuition: { min: 60000, max: 100000, note: "以上按100000计算" },
      meal: { min: 5400, max: 7200 },
      misc: { min: 5000, max: 10000 },
      extracurricular: {
        relaxed: { min: 8000, max: 15000 },
        balanced: { min: 20000, max: 35000 },
        intensive: { min: 50000, max: 80000 }
      }
    }
  },

  // 二线城市费用数据
  二线城市: {
    公立: {
      tuition: { min: 0, max: 0, note: "大班免费政策" },
      meal: { min: 4800, max: 6600 },
      misc: { min: 500, max: 800 },
      extracurricular: {
        relaxed: { min: 4800, max: 9000 },
        balanced: { min: 12000, max: 21000 },
        intensive: { min: 30000, max: 48000 }
      }
    },
    "私立(中档)": {
      tuition: { min: 12000, max: 20000 },
      meal: { min: 4800, max: 6600 },
      misc: { min: 1500, max: 3000 },
      extracurricular: {
        relaxed: { min: 4800, max: 9000 },
        balanced: { min: 12000, max: 21000 },
        intensive: { min: 30000, max: 48000 }
      }
    },
    "私立(高档)": {
      tuition: { min: 30000, max: 50000 },
      meal: { min: 4800, max: 6600 },
      misc: { min: 4000, max: 8000 },
      extracurricular: {
        relaxed: { min: 4800, max: 9000 },
        balanced: { min: 12000, max: 21000 },
        intensive: { min: 30000, max: 48000 }
      }
    }
  },

  // 三线城市费用数据
  三线城市: {
    公立: {
      tuition: { min: 0, max: 0, note: "大班免费政策" },
      meal: { min: 3600, max: 5000 },
      misc: { min: 300, max: 600 },
      extracurricular: {
        relaxed: { min: 3200, max: 6000 },
        balanced: { min: 8000, max: 14000 },
        intensive: { min: 20000, max: 32000 }
      }
    },
    "私立(中档)": {
      tuition: { min: 8000, max: 15000 },
      meal: { min: 3600, max: 5000 },
      misc: { min: 1000, max: 2000 },
      extracurricular: {
        relaxed: { min: 3200, max: 6000 },
        balanced: { min: 8000, max: 14000 },
        intensive: { min: 20000, max: 32000 }
      }
    },
    "私立(高档)": {
      tuition: { min: 20000, max: 35000 },
      meal: { min: 3600, max: 5000 },
      misc: { min: 3000, max: 6000 },
      extracurricular: {
        relaxed: { min: 3200, max: 6000 },
        balanced: { min: 8000, max: 14000 },
        intensive: { min: 20000, max: 32000 }
      }
    }
  },

  // 四线及以下城市费用数据
  四线及以下: {
    公立: {
      tuition: { min: 0, max: 0, note: "大班免费政策" },
      meal: { min: 3000, max: 4200 },
      misc: { min: 200, max: 500 },
      extracurricular: {
        relaxed: { min: 3200, max: 6000 },
        balanced: { min: 8000, max: 14000 },
        intensive: { min: 20000, max: 32000 }
      }
    },
    "私立(中档)": {
      tuition: { min: 6000, max: 10000 },
      meal: { min: 3000, max: 4200 },
      misc: { min: 800, max: 1500 },
      extracurricular: {
        relaxed: { min: 3200, max: 6000 },
        balanced: { min: 8000, max: 14000 },
        intensive: { min: 20000, max: 32000 }
      }
    },
    "私立(高档)": {
      tuition: { min: 15000, max: 25000 },
      meal: { min: 3000, max: 4200 },
      misc: { min: 2000, max: 4000 },
      extracurricular: {
        relaxed: { min: 3200, max: 6000 },
        balanced: { min: 8000, max: 14000 },
        intensive: { min: 20000, max: 32000 }
      }
    }
  }
};

/**
 * 获取指定城市等级、教育水平的幼儿园费用数据
 * @param {string} cityTier - 城市等级
 * @param {string} level - 教育水平
 * @returns {object} - 费用数据对象
 */
function getKindergartenCostData(cityTier, level) {
  return KINDERGARTEN_COST_DATA[cityTier]?.[level] || null;
}

/**
 * 计算平均费用值
 * @param {object} costRange - 费用范围对象 {min: number, max: number}
 * @returns {number} - 平均值
 */
function getKindergartenAverageCost(costRange) {
  if (!costRange || typeof costRange.min !== 'number' || typeof costRange.max !== 'number') {
    return 0;
  }
  return Math.round((costRange.min + costRange.max) / 2);
}

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    KINDERGARTEN_COST_DATA, 
    getKindergartenCostData, 
    getKindergartenAverageCost 
  };
}
