/**
 * 小学费用数据
 * 基于幼小初费用参考.md文件生成
 * 版本: v2.0
 * 最后更新: 2024年9月17日
 */

const PRIMARY_COST_DATA = {
  metadata: {
    version: "2.0",
    lastUpdated: "2024-09-17",
    dataSource: "幼小初费用参考.md",
    stage: "小学",
    description: "小学教育阶段的标准化费用数据",
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
      tuition: { min: 0, max: 0 },
      meal: { min: 3600, max: 4800 },
      misc: { min: 1000, max: 2000 },
      extracurricular: {
        relaxed: { min: 3000, max: 7500 },
        balanced: { min: 9000, max: 30000 },
        intensive: { min: 22500, max: 45000 }
      }
    },
    "私立(中档)": {
      tuition: { min: 30000, max: 50000 },
      meal: { min: 5000, max: 7000 },
      misc: { min: 3000, max: 6000 },
      extracurricular: {
        relaxed: { min: 3000, max: 7500 },
        balanced: { min: 9000, max: 30000 },
        intensive: { min: 22500, max: 45000 }
      }
    },
    "私立(高档)": {
      tuition: { min: 80000, max: 120000, note: "以上按120000计算" },
      meal: { min: 5000, max: 7000 },
      misc: { min: 8000, max: 15000 },
      extracurricular: {
        relaxed: { min: 3000, max: 7500 },
        balanced: { min: 9000, max: 30000 },
        intensive: { min: 22500, max: 45000 }
      }
    }
  },

  // 二线城市费用数据
  二线城市: {
    公立: {
      tuition: { min: 0, max: 0 },
      meal: { min: 3000, max: 4500 },
      misc: { min: 800, max: 1500 },
      extracurricular: {
        relaxed: { min: 2200, max: 5500 },
        balanced: { min: 6600, max: 22000 },
        intensive: { min: 16500, max: 33000 }
      }
    },
    "私立(中档)": {
      tuition: { min: 20000, max: 35000 },
      meal: { min: 4500, max: 6000 },
      misc: { min: 2500, max: 5000 },
      extracurricular: {
        relaxed: { min: 2200, max: 5500 },
        balanced: { min: 6600, max: 22000 },
        intensive: { min: 16500, max: 33000 }
      }
    },
    "私立(高档)": {
      tuition: { min: 50000, max: 80000 },
      meal: { min: 4500, max: 6000 },
      misc: { min: 6000, max: 12000 },
      extracurricular: {
        relaxed: { min: 2200, max: 5500 },
        balanced: { min: 6600, max: 22000 },
        intensive: { min: 16500, max: 33000 }
      }
    }
  },

  // 三线城市费用数据
  三线城市: {
    公立: {
      tuition: { min: 0, max: 0 },
      meal: { min: 2500, max: 3500 },
      misc: { min: 600, max: 1200 },
      extracurricular: {
        relaxed: { min: 1700, max: 4250 },
        balanced: { min: 5100, max: 17000 },
        intensive: { min: 12750, max: 25500 }
      }
    },
    "私立(中档)": {
      tuition: { min: 15000, max: 25000 },
      meal: { min: 3500, max: 5000 },
      misc: { min: 2000, max: 4000 },
      extracurricular: {
        relaxed: { min: 1700, max: 4250 },
        balanced: { min: 5100, max: 17000 },
        intensive: { min: 12750, max: 25500 }
      }
    },
    "私立(高档)": {
      tuition: { min: 35000, max: 60000 },
      meal: { min: 3500, max: 5000 },
      misc: { min: 5000, max: 10000 },
      extracurricular: {
        relaxed: { min: 1700, max: 4250 },
        balanced: { min: 5100, max: 17000 },
        intensive: { min: 12750, max: 25500 }
      }
    }
  },

  // 四线及以下城市费用数据
  四线及以下: {
    公立: {
      tuition: { min: 0, max: 0 },
      meal: { min: 2000, max: 3000 },
      misc: { min: 500, max: 1000 },
      extracurricular: {
        relaxed: { min: 1300, max: 3250 },
        balanced: { min: 3900, max: 13000 },
        intensive: { min: 9750, max: 19500 }
      }
    },
    "私立(中档)": {
      tuition: { min: 10000, max: 18000 },
      meal: { min: 3000, max: 4000 },
      misc: { min: 1500, max: 3000 },
      extracurricular: {
        relaxed: { min: 1300, max: 3250 },
        balanced: { min: 3900, max: 13000 },
        intensive: { min: 9750, max: 19500 }
      }
    },
    "私立(高档)": {
      tuition: { min: 25000, max: 40000 },
      meal: { min: 3000, max: 4000 },
      misc: { min: 4000, max: 8000 },
      extracurricular: {
        relaxed: { min: 1300, max: 3250 },
        balanced: { min: 3900, max: 13000 },
        intensive: { min: 9750, max: 19500 }
      }
    }
  }
};

/**
 * 获取指定城市等级、教育水平的小学费用数据
 * @param {string} cityTier - 城市等级
 * @param {string} level - 教育水平
 * @returns {object} - 费用数据对象
 */
function getPrimaryCostData(cityTier, level) {
  return PRIMARY_COST_DATA[cityTier]?.[level] || null;
}

/**
 * 计算平均费用值
 * @param {object} costRange - 费用范围对象 {min: number, max: number}
 * @returns {number} - 平均值
 */
function getPrimaryAverageCost(costRange) {
  if (!costRange || typeof costRange.min !== 'number' || typeof costRange.max !== 'number') {
    return 0;
  }
  return Math.round((costRange.min + costRange.max) / 2);
}

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    PRIMARY_COST_DATA, 
    getPrimaryCostData, 
    getPrimaryAverageCost 
  };
}
