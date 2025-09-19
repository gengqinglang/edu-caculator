// 大学费用基础数据
// 数据来源：大学费用参考.md

const UNIVERSITY_COST_DATA = {
  // 国内大学
  domestic: {
    public: {
      displayName: "国内公立大学",
      costs: {
        tuition: { min: 4000, max: 14000 },           // 学费
        accommodation: { min: 1000, max: 2500 },      // 住宿费
        livingExpenses: { min: 15000, max: 30000 },   // 生活费
        miscellaneous: { min: 1000, max: 3000 }       // 其他杂费
      }
    },
    private: {
      displayName: "国内民办大学",
      costs: {
        tuition: { min: 15000, max: 40000 },          // 学费（普遍）
        accommodation: { min: 1000, max: 2500 },      // 住宿费（校内）
        livingExpenses: { min: 15000, max: 48000 },   // 生活费
        miscellaneous: { min: 2000, max: 5000 }       // 其他杂费
      }
    }
  },

  // 海外大学（按国家/地区）
  overseas: {
    usa: {
      displayName: "美国",
      costs: {
        tuition: { min: 175000, max: 600000 },        // 学费
        accommodation: { min: 60000, max: 150000 },   // 住宿费
        livingExpenses: { min: 60000, max: 90000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 7000, max: 14000 },  // 医疗保险
        miscellaneous: { min: 15000, max: 25000 }     // 其他杂费
      }
    },
    uk: {
      displayName: "英国",
      costs: {
        tuition: { min: 100000, max: 400000 },        // 学费
        accommodation: { min: 48000, max: 125000 },   // 住宿费
        livingExpenses: { min: 45000, max: 70000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 30000, max: 30000 }, // 医疗保险（NHS）
        miscellaneous: { min: 13000, max: 18000 }     // 其他杂费
      }
    },
    australia: {
      displayName: "澳洲",
      costs: {
        tuition: { min: 110000, max: 360000 },        // 学费
        accommodation: { min: 60000, max: 100000 },   // 住宿费
        livingExpenses: { min: 40000, max: 60000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 2600, max: 3800 },   // 医疗保险
        miscellaneous: { min: 12400, max: 16200 }     // 其他杂费
      }
    },
    hongkong: {
      displayName: "香港",
      costs: {
        tuition: { min: 110000, max: 490000 },        // 学费
        accommodation: { min: 21000, max: 100000 },   // 住宿费（校内少）
        livingExpenses: { min: 40000, max: 60000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 1000, max: 2000 },   // 医疗保险（估算）
        miscellaneous: { min: 16000, max: 23000 }     // 其他杂费
      }
    },
    singapore: {
      displayName: "新加坡",
      costs: {
        tuition: { min: 86000, max: 220000 },         // 学费
        accommodation: { min: 48000, max: 96000 },    // 住宿费
        livingExpenses: { min: 35000, max: 55000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 1500, max: 2500 },   // 医疗保险
        miscellaneous: { min: 12500, max: 17500 }     // 其他杂费
      }
    },
    japan: {
      displayName: "日本",
      costs: {
        tuition: { min: 38000, max: 70000 },          // 学费（国公立）
        accommodation: { min: 48000, max: 72000 },    // 住宿费
        livingExpenses: { min: 40000, max: 55000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 450, max: 650 },     // 医疗保险（国民健康险）
        miscellaneous: { min: 11550, max: 17650 }     // 其他杂费
      }
    },
    canada: {
      displayName: "加拿大",
      costs: {
        tuition: { min: 60000, max: 200000 },         // 学费
        accommodation: { min: 40000, max: 90000 },    // 住宿费
        livingExpenses: { min: 35000, max: 50000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 4000, max: 8000 },   // 医疗保险
        miscellaneous: { min: 11000, max: 18000 }     // 其他杂费
      }
    },
    europeOthers: {
      displayName: "欧洲其他",
      costs: {
        tuition: { min: 1500, max: 100000 },          // 学费（差异巨大）
        accommodation: { min: 30000, max: 90000 },    // 住宿费
        livingExpenses: { min: 35000, max: 60000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 3000, max: 6000 },   // 医疗保险（估算）
        miscellaneous: { min: 9500, max: 21000 }      // 其他杂费
      }
    }
  }
};

// 费用项目显示名称映射
const UNIVERSITY_COST_ITEMS = {
  tuition: "学费",
  accommodation: "住宿费", 
  livingExpenses: "生活费",
  medicalInsurance: "医疗保险",
  miscellaneous: "其他杂费"
};

// 教育水平显示名称映射
const UNIVERSITY_EDUCATION_LEVELS = {
  // 国内
  domesticPublic: "国内公立大学",
  domesticPrivate: "国内民办大学",
  
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
    UNIVERSITY_COST_DATA,
    UNIVERSITY_COST_ITEMS,
    UNIVERSITY_EDUCATION_LEVELS
  };
}
