/**
 * 幼儿园、小学、初中费用数据
 * 基于幼小初费用参考.md文件生成
 * 版本: v2.0
 * 最后更新: 2024年9月17日
 */

const KINDERGARTEN_PRIMARY_MIDDLE_COST_DATA = {
  metadata: {
    version: "2.0",
    lastUpdated: "2024-09-17",
    dataSource: "幼小初费用参考.md",
    description: "幼儿园、小学、初中三个教育阶段的标准化费用数据",
    costItems: {
      tuition: "学费 (元/年)",
      meal: "餐费 (元/月)", 
      misc: "杂费 (元/月)",
      extracurricular: "课外费 (元/月)"
    },
    parentingStyles: {
      relaxed: "佛系",
      balanced: "平衡", // 对应原数据中的"正常"
      intensive: "鸡娃"
    }
  },

  // 一线城市费用数据
  一线城市: {
    幼儿园: {
      公立: {
        tuition: { min: 0, max: 0, note: "大班免费政策" },
        meal: { min: 5400, max: 7200 },
        misc: { min: 600, max: 1000 },
        extracurricular: {
          relaxed: { min: 1500, max: 4500 },
          balanced: { min: 6000, max: 18000 },
          intensive: { min: 15000, max: 30000 }
        }
      },
      "私立(中档)": {
        tuition: { min: 18000, max: 24000 },
        meal: { min: 5400, max: 7200 },
        misc: { min: 2000, max: 4000 },
        extracurricular: {
          relaxed: { min: 1500, max: 4500 },
          balanced: { min: 6000, max: 18000 },
          intensive: { min: 15000, max: 30000 }
        }
      },
      "私立(高档)": {
        tuition: { min: 60000, max: 100000, note: "以上按100000计算" },
        meal: { min: 5400, max: 7200 },
        misc: { min: 5000, max: 10000 },
        extracurricular: {
          relaxed: { min: 1500, max: 4500 },
          balanced: { min: 6000, max: 18000 },
          intensive: { min: 15000, max: 30000 }
        }
      }
    },
    小学: {
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
    初中: {
      公立: {
        tuition: { min: 0, max: 0 },
        meal: { min: 4000, max: 5500 },
        misc: { min: 1500, max: 2500 },
        extracurricular: {
          relaxed: { min: 4500, max: 12000 },
          balanced: { min: 12000, max: 45000 },
          intensive: { min: 30000, max: 60000 }
        }
      },
      "私立(中档)": {
        tuition: { min: 40000, max: 60000 },
        meal: { min: 5500, max: 8000 },
        misc: { min: 4000, max: 8000 },
        extracurricular: {
          relaxed: { min: 4500, max: 12000 },
          balanced: { min: 12000, max: 45000 },
          intensive: { min: 30000, max: 60000 }
        }
      },
      "私立(高档)": {
        tuition: { min: 90000, max: 150000, note: "以上按150000计算" },
        meal: { min: 5500, max: 8000 },
        misc: { min: 10000, max: 20000 },
        extracurricular: {
          relaxed: { min: 4500, max: 12000 },
          balanced: { min: 12000, max: 45000 },
          intensive: { min: 30000, max: 60000 }
        }
      }
    }
  },

  // 二线城市费用数据
  二线城市: {
    幼儿园: {
      公立: {
        tuition: { min: 0, max: 0, note: "大班免费政策" },
        meal: { min: 4800, max: 6600 },
        misc: { min: 500, max: 800 },
        extracurricular: {
          relaxed: { min: 1100, max: 3300 },
          balanced: { min: 4400, max: 13200 },
          intensive: { min: 11000, max: 22000 }
        }
      },
      "私立(中档)": {
        tuition: { min: 12000, max: 20000 },
        meal: { min: 4800, max: 6600 },
        misc: { min: 1500, max: 3000 },
        extracurricular: {
          relaxed: { min: 1100, max: 3300 },
          balanced: { min: 4400, max: 13200 },
          intensive: { min: 11000, max: 22000 }
        }
      },
      "私立(高档)": {
        tuition: { min: 30000, max: 50000 },
        meal: { min: 4800, max: 6600 },
        misc: { min: 4000, max: 8000 },
        extracurricular: {
          relaxed: { min: 1100, max: 3300 },
          balanced: { min: 4400, max: 13200 },
          intensive: { min: 11000, max: 22000 }
        }
      }
    },
    小学: {
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
    初中: {
      公立: {
        tuition: { min: 0, max: 0 },
        meal: { min: 3500, max: 5000 },
        misc: { min: 1000, max: 1800 },
        extracurricular: {
          relaxed: { min: 3300, max: 8800 },
          balanced: { min: 8800, max: 33000 },
          intensive: { min: 22000, max: 44000 }
        }
      },
      "私立(中档)": {
        tuition: { min: 25000, max: 45000 },
        meal: { min: 5000, max: 7000 },
        misc: { min: 3000, max: 6000 },
        extracurricular: {
          relaxed: { min: 3300, max: 8800 },
          balanced: { min: 8800, max: 33000 },
          intensive: { min: 22000, max: 44000 }
        }
      },
      "私立(高档)": {
        tuition: { min: 60000, max: 90000 },
        meal: { min: 5000, max: 7000 },
        misc: { min: 8000, max: 15000 },
        extracurricular: {
          relaxed: { min: 3300, max: 8800 },
          balanced: { min: 8800, max: 33000 },
          intensive: { min: 22000, max: 44000 }
        }
      }
    }
  },

  // 三线城市费用数据
  三线城市: {
    幼儿园: {
      公立: {
        tuition: { min: 0, max: 0, note: "大班免费政策" },
        meal: { min: 3600, max: 5000 },
        misc: { min: 300, max: 600 },
        extracurricular: {
          relaxed: { min: 850, max: 2550 },
          balanced: { min: 3400, max: 10200 },
          intensive: { min: 8500, max: 17000 }
        }
      },
      "私立(中档)": {
        tuition: { min: 8000, max: 15000 },
        meal: { min: 3600, max: 5000 },
        misc: { min: 1000, max: 2000 },
        extracurricular: {
          relaxed: { min: 850, max: 2550 },
          balanced: { min: 3400, max: 10200 },
          intensive: { min: 8500, max: 17000 }
        }
      },
      "私立(高档)": {
        tuition: { min: 20000, max: 35000 },
        meal: { min: 3600, max: 5000 },
        misc: { min: 3000, max: 6000 },
        extracurricular: {
          relaxed: { min: 850, max: 2550 },
          balanced: { min: 3400, max: 10200 },
          intensive: { min: 8500, max: 17000 }
        }
      }
    },
    小学: {
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
    初中: {
      公立: {
        tuition: { min: 0, max: 0 },
        meal: { min: 3000, max: 4000 },
        misc: { min: 800, max: 1500 },
        extracurricular: {
          relaxed: { min: 2550, max: 6800 },
          balanced: { min: 6800, max: 25500 },
          intensive: { min: 17000, max: 34000 }
        }
      },
      "私立(中档)": {
        tuition: { min: 18000, max: 30000 },
        meal: { min: 4000, max: 6000 },
        misc: { min: 2500, max: 5000 },
        extracurricular: {
          relaxed: { min: 2550, max: 6800 },
          balanced: { min: 6800, max: 25500 },
          intensive: { min: 17000, max: 34000 }
        }
      },
      "私立(高档)": {
        tuition: { min: 40000, max: 70000 },
        meal: { min: 4000, max: 6000 },
        misc: { min: 6000, max: 12000 },
        extracurricular: {
          relaxed: { min: 2550, max: 6800 },
          balanced: { min: 6800, max: 25500 },
          intensive: { min: 17000, max: 34000 }
        }
      }
    }
  },

  // 四线及以下城市费用数据
  四线及以下: {
    幼儿园: {
      公立: {
        tuition: { min: 0, max: 0, note: "大班免费政策" },
        meal: { min: 3000, max: 4200 },
        misc: { min: 200, max: 500 },
        extracurricular: {
          relaxed: { min: 650, max: 1950 },
          balanced: { min: 2600, max: 7800 },
          intensive: { min: 6500, max: 13000 }
        }
      },
      "私立(中档)": {
        tuition: { min: 6000, max: 10000 },
        meal: { min: 3000, max: 4200 },
        misc: { min: 800, max: 1500 },
        extracurricular: {
          relaxed: { min: 650, max: 1950 },
          balanced: { min: 2600, max: 7800 },
          intensive: { min: 6500, max: 13000 }
        }
      },
      "私立(高档)": {
        tuition: { min: 15000, max: 25000 },
        meal: { min: 3000, max: 4200 },
        misc: { min: 2000, max: 4000 },
        extracurricular: {
          relaxed: { min: 650, max: 1950 },
          balanced: { min: 2600, max: 7800 },
          intensive: { min: 6500, max: 13000 }
        }
      }
    },
    小学: {
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
    },
    初中: {
      公立: {
        tuition: { min: 0, max: 0 },
        meal: { min: 2500, max: 3500 },
        misc: { min: 600, max: 1200 },
        extracurricular: {
          relaxed: { min: 1950, max: 5200 },
          balanced: { min: 5200, max: 19500 },
          intensive: { min: 13000, max: 26000 }
        }
      },
      "私立(中档)": {
        tuition: { min: 12000, max: 22000 },
        meal: { min: 3500, max: 5000 },
        misc: { min: 2000, max: 4000 },
        extracurricular: {
          relaxed: { min: 1950, max: 5200 },
          balanced: { min: 5200, max: 19500 },
          intensive: { min: 13000, max: 26000 }
        }
      },
      "私立(高档)": {
        tuition: { min: 30000, max: 50000 },
        meal: { min: 3500, max: 5000 },
        misc: { min: 5000, max: 10000 },
        extracurricular: {
          relaxed: { min: 1950, max: 5200 },
          balanced: { min: 5200, max: 19500 },
          intensive: { min: 13000, max: 26000 }
        }
      }
    }
  }
};

/**
 * 获取指定城市等级、教育阶段、教育水平的费用数据
 * @param {string} cityTier - 城市等级
 * @param {string} stage - 教育阶段
 * @param {string} level - 教育水平
 * @returns {object} - 费用数据对象
 */
function getCostData(cityTier, stage, level) {
  return KINDERGARTEN_PRIMARY_MIDDLE_COST_DATA[cityTier]?.[stage]?.[level] || null;
}

/**
 * 计算平均费用值
 * @param {object} costRange - 费用范围对象 {min: number, max: number}
 * @returns {number} - 平均值
 */
function getAverageCost(costRange) {
  if (!costRange || typeof costRange.min !== 'number' || typeof costRange.max !== 'number') {
    return 0;
  }
  return Math.round((costRange.min + costRange.max) / 2);
}

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    KINDERGARTEN_PRIMARY_MIDDLE_COST_DATA, 
    getCostData, 
    getAverageCost 
  };
}

