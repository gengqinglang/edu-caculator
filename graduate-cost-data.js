// 研究生费用基础数据
// 数据来源：硕士费用参考.md

const GRADUATE_COST_DATA = {
  // 国内研究生
  domestic: {
    academic: {
      displayName: "国内学术型硕士",
      costs: {
        tuition: { min: 6000, max: 12000 },           // 学费
        accommodation: { min: 1000, max: 2500 },      // 住宿费
        livingExpenses: { min: 15000, max: 36000 },   // 生活费
        miscellaneous: { min: 1000, max: 3000 }       // 其他杂费
      }
    },
    professional: {
      displayName: "国内专业型硕士",
      costs: {
        tuition: { min: 10000, max: 80000 },          // 学费（差异巨大，普通专业与热门专业如金融、MBA差距显著）
        accommodation: { min: 1000, max: 2500 },      // 住宿费（部分专硕不提供宿舍或宿舍紧张，需校外租房，费用较高）
        livingExpenses: { min: 15000, max: 48000 },   // 生活费（包含饮食、交通、日用品、学习材料等）
        miscellaneous: { min: 2000, max: 5000 }       // 其他杂费（教材、论文打印、学术软件订阅、会议差旅等）
      }
    }
  },

  // 海外研究生（按国家/地区）
  overseas: {
    usa: {
      displayName: "美国",
      costs: {
        tuition: { min: 105000, max: 420000 },        // 学费
        accommodation: { min: 60000, max: 150000 },   // 住宿费
        livingExpenses: { min: 50000, max: 90000 },   // 生活费（不含住宿）
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
        medicalInsurance: { min: 9300, max: 9300 },   // 医疗保险
        miscellaneous: { min: 13000, max: 18000 }     // 其他杂费
      }
    },
    australia: {
      displayName: "澳洲",
      costs: {
        tuition: { min: 110000, max: 360000 },        // 学费
        accommodation: { min: 60000, max: 100000 },   // 住宿费
        livingExpenses: { min: 40000, max: 60000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 2100, max: 3000 },   // 医疗保险
        miscellaneous: { min: 12400, max: 16200 }     // 其他杂费
      }
    },
    hongkong: {
      displayName: "香港",
      costs: {
        tuition: { min: 110000, max: 490000 },        // 学费
        accommodation: { min: 21000, max: 100000 },   // 住宿费
        livingExpenses: { min: 40000, max: 60000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 1000, max: 2000 },   // 医疗保险
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
        tuition: { min: 38000, max: 70000 },          // 学费
        accommodation: { min: 48000, max: 72000 },    // 住宿费
        livingExpenses: { min: 40000, max: 55000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 450, max: 650 },     // 医疗保险
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
        tuition: { min: 1500, max: 100000 },          // 学费
        accommodation: { min: 30000, max: 90000 },    // 住宿费
        livingExpenses: { min: 35000, max: 60000 },   // 生活费（不含住宿）
        medicalInsurance: { min: 3000, max: 6000 },   // 医疗保险（估算）
        miscellaneous: { min: 9500, max: 21000 }      // 其他杂费
      }
    }
  }
};

// 费用项目显示名称映射
const GRADUATE_COST_ITEMS = {
  tuition: "学费",
  accommodation: "住宿费", 
  livingExpenses: "生活费",
  medicalInsurance: "医疗保险",
  miscellaneous: "其他杂费"
};

// 教育水平显示名称映射
const GRADUATE_EDUCATION_LEVELS = {
  // 国内
  domesticAcademic: "国内学术型硕士",
  domesticProfessional: "国内专业型硕士",
  
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
    GRADUATE_COST_DATA,
    GRADUATE_COST_ITEMS,
    GRADUATE_EDUCATION_LEVELS
  };
} else if (typeof window !== 'undefined') {
  // 浏览器环境下创建全局变量
  window.GRADUATE_COST_DATA = GRADUATE_COST_DATA;
  window.GRADUATE_COST_ITEMS = GRADUATE_COST_ITEMS;
  window.GRADUATE_EDUCATION_LEVELS = GRADUATE_EDUCATION_LEVELS;
}
