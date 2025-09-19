// 博士费用基础数据
// 数据来源：网络搜索及调研数据

const PHD_COST_DATA = {
  // 国内博士
  domestic: {
    public: {
      displayName: "国内博士",
      costs: {
        tuition: { min: 8000, max: 15000 },           // 学费
        accommodation: { min: 1200, max: 3000 },      // 住宿费
        livingExpenses: { min: 18000, max: 40000 },   // 生活费
        miscellaneous: { min: 2000, max: 5000 }       // 其他杂费
      }
    }
  },

  // 海外博士（按国家/地区）
  overseas: {
    usa: {
      displayName: "美国",
      costs: {
        tuition: { min: 140000, max: 420000 },        // 学费
        accommodation: { min: 56000, max: 105000 },   // 住宿费
        livingExpenses: { min: 84000, max: 168000 },  // 生活费（不含住宿）
        medicalInsurance: { min: 8400, max: 16800 },  // 医疗保险
        miscellaneous: { min: 14000, max: 28000 }     // 其他杂费
      }
    },
    uk: {
      displayName: "英国",
      costs: {
        tuition: { min: 135000, max: 270000 },        // 学费
        accommodation: { min: 54000, max: 108000 },   // 住宿费
        livingExpenses: { min: 90000, max: 135000 },  // 生活费（不含住宿）
        medicalInsurance: { min: 4230, max: 4230 },   // 医疗保险（固定费用）
        miscellaneous: { min: 13500, max: 27000 }     // 其他杂费
      }
    },
    australia: {
      displayName: "澳洲",
      costs: {
        tuition: { min: 96000, max: 216000 },         // 学费
        accommodation: { min: 48000, max: 96000 },    // 住宿费
        livingExpenses: { min: 72000, max: 120000 },  // 生活费（不含住宿）
        medicalInsurance: { min: 2400, max: 3360 },   // 医疗保险
        miscellaneous: { min: 9600, max: 19200 }      // 其他杂费
      }
    },
    hongkong: {
      displayName: "香港",
      costs: {
        tuition: { min: 38000, max: 42000 },          // 学费
        accommodation: { min: 36000, max: 72000 },    // 住宿费
        livingExpenses: { min: 45000, max: 72000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 1000, max: 2000 },   // 医疗保险
        miscellaneous: { min: 9000, max: 18000 }      // 其他杂费
      }
    },
    singapore: {
      displayName: "新加坡",
      costs: {
        tuition: { min: 30000, max: 40000 },          // 学费
        accommodation: { min: 30000, max: 60000 },    // 住宿费
        livingExpenses: { min: 75000, max: 100000 },  // 生活费（不含住宿）
        medicalInsurance: { min: 2500, max: 4000 },   // 医疗保险
        miscellaneous: { min: 10000, max: 20000 }     // 其他杂费
      }
    },
    japan: {
      displayName: "日本",
      costs: {
        tuition: { min: 26000, max: 58000 },          // 学费
        accommodation: { min: 17500, max: 29000 },    // 住宿费
        livingExpenses: { min: 48500, max: 72750 },   // 生活费（不含住宿）
        medicalInsurance: { min: 970, max: 1450 },    // 医疗保险
        miscellaneous: { min: 4850, max: 9700 }       // 其他杂费
      }
    },
    canada: {
      displayName: "加拿大",
      costs: {
        tuition: { min: 42000, max: 105000 },         // 学费
        accommodation: { min: 31500, max: 63000 },    // 住宿费
        livingExpenses: { min: 52500, max: 78750 },   // 生活费（不含住宿）
        medicalInsurance: { min: 3150, max: 5250 },   // 医疗保险
        miscellaneous: { min: 7875, max: 15750 }      // 其他杂费
      }
    },
    europeOthers: {
      displayName: "欧洲其他",
      costs: {
        tuition: { min: 12000, max: 160000 },         // 学费
        accommodation: { min: 24000, max: 72000 },    // 住宿费
        livingExpenses: { min: 40000, max: 80000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 2400, max: 4800 },   // 医疗保险（估算）
        miscellaneous: { min: 8000, max: 16000 }      // 其他杂费
      }
    }
  }
};

// 费用项目显示名称映射
const PHD_COST_ITEMS = {
  tuition: "学费",
  accommodation: "住宿费", 
  livingExpenses: "生活费",
  medicalInsurance: "医疗保险",
  miscellaneous: "其他杂费"
};

// 教育水平显示名称映射
const PHD_EDUCATION_LEVELS = {
  // 国内
  domesticPublic: "国内博士",
  
  // 海外
  usa: "美国",
  uk: "英国", 
  australia: "澳洲",
  hongkong: "香港",
  singapore: "新加坡",
  japan: "日本",
  canada: "加拿大",
  europeOthers: "欧洲其他"
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PHD_COST_DATA,
    PHD_COST_ITEMS,
    PHD_EDUCATION_LEVELS
  };
}
