/**
 * 教育费用计算器 - 扩展数据（大学及以上阶段）
 * 静态网页数据存储
 * 版本: v1.0
 * 最后更新: 2024年9月15日
 */

// 大学及以上阶段教育费用数据
const HIGHER_EDUCATION_COST_DATA = {
  
  // 大学阶段数据
  university: {
    // 国内方向
    domestic: {
      public: {
        name: "公办大学",
        costs: {
          tuition: { amount: 5000, unit: "year", currency: "CNY", description: "学费" },
          accommodation: { amount: 1200, unit: "year", currency: "CNY", description: "住宿费" },
          living: { amount: 1500, unit: "month", currency: "CNY", description: "生活费" },
          books: { amount: 1000, unit: "year", currency: "CNY", description: "书本费" },
          lab: { amount: 500, unit: "year", currency: "CNY", description: "实验费" },
          activities: { amount: 1000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "教育部官网"
      },
      private: {
        name: "民办大学",
        costs: {
          tuition: { amount: 25000, unit: "year", currency: "CNY", description: "学费" },
          accommodation: { amount: 3000, unit: "year", currency: "CNY", description: "住宿费" },
          living: { amount: 1800, unit: "month", currency: "CNY", description: "生活费" },
          books: { amount: 1500, unit: "year", currency: "CNY", description: "书本费" },
          lab: { amount: 800, unit: "year", currency: "CNY", description: "实验费" },
          activities: { amount: 1500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "中国教育在线"
      },
      jointProgram: {
        name: "中外合作办学",
        costs: {
          tuition: { amount: 80000, unit: "year", currency: "CNY", description: "学费" },
          accommodation: { amount: 5000, unit: "year", currency: "CNY", description: "住宿费" },
          living: { amount: 2500, unit: "month", currency: "CNY", description: "生活费" },
          books: { amount: 2000, unit: "year", currency: "CNY", description: "书本费" },
          lab: { amount: 1200, unit: "year", currency: "CNY", description: "实验费" },
          activities: { amount: 2000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "教育部官网"
      }
    },

    // 出国方向（按国家）
    overseas: {
      usa: {
        countryName: "美国",
        costs: {
          tuition: { amount: 40000, unit: "year", currency: "USD", description: "学费" },
          accommodation: { amount: 12000, unit: "year", currency: "USD", description: "住宿费" },
          living: { amount: 15000, unit: "year", currency: "USD", description: "生活费" },
          books: { amount: 1200, unit: "year", currency: "USD", description: "书本费" },
          insurance: { amount: 2500, unit: "year", currency: "USD", description: "保险费" },
          visa: { amount: 160, unit: "once", currency: "USD", description: "签证费" },
          airfare: { amount: 1500, unit: "year", currency: "USD", description: "机票费" },
          application: { amount: 100, unit: "per_school", currency: "USD", description: "申请费" },
          languageTest: { amount: 200, unit: "once", currency: "USD", description: "语言考试费" },
          agencyFee: { amount: 30000, unit: "once", currency: "CNY", description: "留学中介费用" },
          lab: { amount: 800, unit: "year", currency: "USD", description: "实验费" },
          activities: { amount: 1500, unit: "year", currency: "USD", description: "活动费" }
        },
        dataSource: "College Board"
      },
      uk: {
        countryName: "英国",
        costs: {
          tuition: { amount: 22000, unit: "year", currency: "GBP", description: "学费" },
          accommodation: { amount: 8000, unit: "year", currency: "GBP", description: "住宿费" },
          living: { amount: 12000, unit: "year", currency: "GBP", description: "生活费" },
          books: { amount: 800, unit: "year", currency: "GBP", description: "书本费" },
          insurance: { amount: 500, unit: "year", currency: "GBP", description: "保险费" },
          visa: { amount: 348, unit: "once", currency: "GBP", description: "签证费" },
          airfare: { amount: 800, unit: "year", currency: "GBP", description: "机票费" },
          application: { amount: 30, unit: "per_school", currency: "GBP", description: "申请费" },
          languageTest: { amount: 200, unit: "once", currency: "GBP", description: "语言考试费" },
          agencyFee: { amount: 25000, unit: "once", currency: "CNY", description: "留学中介费用" },
          lab: { amount: 600, unit: "year", currency: "GBP", description: "实验费" },
          activities: { amount: 1000, unit: "year", currency: "GBP", description: "活动费" }
        },
        dataSource: "UCAS官网"
      },
      canada: {
        countryName: "加拿大",
        costs: {
          tuition: { amount: 25000, unit: "year", currency: "CAD", description: "学费" },
          accommodation: { amount: 8000, unit: "year", currency: "CAD", description: "住宿费" },
          living: { amount: 12000, unit: "year", currency: "CAD", description: "生活费" },
          books: { amount: 1000, unit: "year", currency: "CAD", description: "书本费" },
          insurance: { amount: 800, unit: "year", currency: "CAD", description: "保险费" },
          visa: { amount: 150, unit: "once", currency: "CAD", description: "签证费" },
          airfare: { amount: 1200, unit: "year", currency: "CAD", description: "机票费" },
          application: { amount: 150, unit: "per_school", currency: "CAD", description: "申请费" },
          languageTest: { amount: 300, unit: "once", currency: "CAD", description: "语言考试费" },
          agencyFee: { amount: 25000, unit: "once", currency: "CNY", description: "留学中介费用" },
          lab: { amount: 600, unit: "year", currency: "CAD", description: "实验费" },
          activities: { amount: 1200, unit: "year", currency: "CAD", description: "活动费" }
        },
        dataSource: "加拿大统计局"
      },
      australia: {
        countryName: "澳洲",
        costs: {
          tuition: { amount: 30000, unit: "year", currency: "AUD", description: "学费" },
          accommodation: { amount: 12000, unit: "year", currency: "AUD", description: "住宿费" },
          living: { amount: 15000, unit: "year", currency: "AUD", description: "生活费" },
          books: { amount: 1000, unit: "year", currency: "AUD", description: "书本费" },
          insurance: { amount: 600, unit: "year", currency: "AUD", description: "保险费" },
          visa: { amount: 620, unit: "once", currency: "AUD", description: "签证费" },
          airfare: { amount: 1500, unit: "year", currency: "AUD", description: "机票费" },
          application: { amount: 100, unit: "per_school", currency: "AUD", description: "申请费" },
          languageTest: { amount: 350, unit: "once", currency: "AUD", description: "语言考试费" },
          agencyFee: { amount: 25000, unit: "once", currency: "CNY", description: "留学中介费用" },
          lab: { amount: 800, unit: "year", currency: "AUD", description: "实验费" },
          activities: { amount: 1500, unit: "year", currency: "AUD", description: "活动费" }
        },
        dataSource: "澳洲教育部"
      },
      germany: {
        countryName: "德国",
        costs: {
          tuition: { amount: 500, unit: "year", currency: "EUR", description: "学费" },
          accommodation: { amount: 4000, unit: "year", currency: "EUR", description: "住宿费" },
          living: { amount: 8000, unit: "year", currency: "EUR", description: "生活费" },
          books: { amount: 600, unit: "year", currency: "EUR", description: "书本费" },
          insurance: { amount: 100, unit: "year", currency: "EUR", description: "保险费" },
          visa: { amount: 75, unit: "once", currency: "EUR", description: "签证费" },
          airfare: { amount: 800, unit: "year", currency: "EUR", description: "机票费" },
          application: { amount: 50, unit: "per_school", currency: "EUR", description: "申请费" },
          languageTest: { amount: 200, unit: "once", currency: "EUR", description: "语言考试费" },
          agencyFee: { amount: 20000, unit: "once", currency: "CNY", description: "留学中介费用" },
          lab: { amount: 400, unit: "year", currency: "EUR", description: "实验费" },
          activities: { amount: 800, unit: "year", currency: "EUR", description: "活动费" }
        },
        dataSource: "DAAD官网"
      },
      france: {
        countryName: "法国",
        costs: {
          tuition: { amount: 2770, unit: "year", currency: "EUR", description: "学费" },
          accommodation: { amount: 3000, unit: "year", currency: "EUR", description: "住宿费" },
          living: { amount: 8000, unit: "year", currency: "EUR", description: "生活费" },
          books: { amount: 500, unit: "year", currency: "EUR", description: "书本费" },
          insurance: { amount: 200, unit: "year", currency: "EUR", description: "保险费" },
          visa: { amount: 99, unit: "once", currency: "EUR", description: "签证费" },
          airfare: { amount: 800, unit: "year", currency: "EUR", description: "机票费" },
          application: { amount: 0, unit: "per_school", currency: "EUR", description: "申请费" },
          languageTest: { amount: 200, unit: "once", currency: "EUR", description: "语言考试费" },
          agencyFee: { amount: 20000, unit: "once", currency: "CNY", description: "留学中介费用" },
          lab: { amount: 300, unit: "year", currency: "EUR", description: "实验费" },
          activities: { amount: 600, unit: "year", currency: "EUR", description: "活动费" }
        },
        dataSource: "Campus France"
      },
      japan: {
        countryName: "日本",
        costs: {
          tuition: { amount: 535800, unit: "year", currency: "JPY", description: "学费" },
          accommodation: { amount: 350000, unit: "year", currency: "JPY", description: "住宿费" },
          living: { amount: 800000, unit: "year", currency: "JPY", description: "生活费" },
          books: { amount: 50000, unit: "year", currency: "JPY", description: "书本费" },
          insurance: { amount: 20000, unit: "year", currency: "JPY", description: "保险费" },
          visa: { amount: 3000, unit: "once", currency: "JPY", description: "签证费" },
          airfare: { amount: 80000, unit: "year", currency: "JPY", description: "机票费" },
          application: { amount: 17000, unit: "per_school", currency: "JPY", description: "申请费" },
          languageTest: { amount: 25000, unit: "once", currency: "JPY", description: "语言考试费" },
          agencyFee: { amount: 25000, unit: "once", currency: "CNY", description: "留学中介费用" },
          lab: { amount: 30000, unit: "year", currency: "JPY", description: "实验费" },
          activities: { amount: 50000, unit: "year", currency: "JPY", description: "活动费" }
        },
        dataSource: "JASSO官网"
      },
      singapore: {
        countryName: "新加坡",
        costs: {
          tuition: { amount: 20000, unit: "year", currency: "SGD", description: "学费" },
          accommodation: { amount: 6000, unit: "year", currency: "SGD", description: "住宿费" },
          living: { amount: 10000, unit: "year", currency: "SGD", description: "生活费" },
          books: { amount: 800, unit: "year", currency: "SGD", description: "书本费" },
          insurance: { amount: 500, unit: "year", currency: "SGD", description: "保险费" },
          visa: { amount: 30, unit: "once", currency: "SGD", description: "签证费" },
          airfare: { amount: 600, unit: "year", currency: "SGD", description: "机票费" },
          application: { amount: 100, unit: "per_school", currency: "SGD", description: "申请费" },
          languageTest: { amount: 300, unit: "once", currency: "SGD", description: "语言考试费" },
          agencyFee: { amount: 20000, unit: "once", currency: "CNY", description: "留学中介费用" },
          lab: { amount: 500, unit: "year", currency: "SGD", description: "实验费" },
          activities: { amount: 1000, unit: "year", currency: "SGD", description: "活动费" }
        },
        dataSource: "新加坡教育部"
      }
    }
  },

  // 研究生阶段数据
  graduate: {
    // 国内方向
    domestic: {
      academic: {
        name: "学术型硕士",
        costs: {
          tuition: { amount: 8000, unit: "year", currency: "CNY", description: "学费" },
          accommodation: { amount: 1500, unit: "year", currency: "CNY", description: "住宿费" },
          living: { amount: 1800, unit: "month", currency: "CNY", description: "生活费" },
          books: { amount: 1200, unit: "year", currency: "CNY", description: "书本费" },
          lab: { amount: 800, unit: "year", currency: "CNY", description: "实验费" },
          conference: { amount: 2000, unit: "year", currency: "CNY", description: "会议费" },
          thesis: { amount: 500, unit: "year", currency: "CNY", description: "论文费" },
          activities: { amount: 1500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "教育部官网"
      },
      professional: {
        name: "专业型硕士",
        costs: {
          tuition: { amount: 15000, unit: "year", currency: "CNY", description: "学费" },
          accommodation: { amount: 2000, unit: "year", currency: "CNY", description: "住宿费" },
          living: { amount: 2000, unit: "month", currency: "CNY", description: "生活费" },
          books: { amount: 1500, unit: "year", currency: "CNY", description: "书本费" },
          lab: { amount: 1000, unit: "year", currency: "CNY", description: "实验费" },
          conference: { amount: 1500, unit: "year", currency: "CNY", description: "会议费" },
          thesis: { amount: 800, unit: "year", currency: "CNY", description: "论文费" },
          activities: { amount: 1800, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "中国教育在线"
      },
      phd: {
        name: "博士",
        costs: {
          tuition: { amount: 10000, unit: "year", currency: "CNY", description: "学费" },
          accommodation: { amount: 1500, unit: "year", currency: "CNY", description: "住宿费" },
          living: { amount: 1800, unit: "month", currency: "CNY", description: "生活费" },
          books: { amount: 1500, unit: "year", currency: "CNY", description: "书本费" },
          lab: { amount: 2000, unit: "year", currency: "CNY", description: "实验费" },
          conference: { amount: 5000, unit: "year", currency: "CNY", description: "会议费" },
          research: { amount: 3000, unit: "year", currency: "CNY", description: "调研费" },
          thesis: { amount: 2000, unit: "year", currency: "CNY", description: "论文费" },
          activities: { amount: 2000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "中国研究生招生信息网"
      }
    },

    // 出国方向（按国家）
    overseas: {
      usa: {
        countryName: "美国",
        master: {
          name: "硕士",
          costs: {
            tuition: { amount: 45000, unit: "year", currency: "USD", description: "学费" },
            accommodation: { amount: 12000, unit: "year", currency: "USD", description: "住宿费" },
            living: { amount: 18000, unit: "year", currency: "USD", description: "生活费" },
            books: { amount: 1500, unit: "year", currency: "USD", description: "书本费" },
            insurance: { amount: 2500, unit: "year", currency: "USD", description: "保险费" },
            visa: { amount: 160, unit: "once", currency: "USD", description: "签证费" },
            airfare: { amount: 1500, unit: "year", currency: "USD", description: "机票费" },
            application: { amount: 150, unit: "per_school", currency: "USD", description: "申请费" },
            languageTest: { amount: 320, unit: "once", currency: "USD", description: "语言考试费" },
            agencyFee: { amount: 35000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 1200, unit: "year", currency: "USD", description: "实验费" },
            conference: { amount: 3000, unit: "year", currency: "USD", description: "会议费" },
            thesis: { amount: 800, unit: "year", currency: "USD", description: "论文费" }
          }
        },
        phd: {
          name: "博士",
          costs: {
            tuition: { amount: 25000, unit: "year", currency: "USD", description: "学费" },
            accommodation: { amount: 12000, unit: "year", currency: "USD", description: "住宿费" },
            living: { amount: 20000, unit: "year", currency: "USD", description: "生活费" },
            books: { amount: 2000, unit: "year", currency: "USD", description: "书本费" },
            insurance: { amount: 2500, unit: "year", currency: "USD", description: "保险费" },
            visa: { amount: 160, unit: "once", currency: "USD", description: "签证费" },
            airfare: { amount: 1500, unit: "year", currency: "USD", description: "机票费" },
            application: { amount: 200, unit: "per_school", currency: "USD", description: "申请费" },
            languageTest: { amount: 320, unit: "once", currency: "USD", description: "语言考试费" },
            agencyFee: { amount: 40000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 2000, unit: "year", currency: "USD", description: "实验费" },
            conference: { amount: 5000, unit: "year", currency: "USD", description: "会议费" },
            research: { amount: 3000, unit: "year", currency: "USD", description: "调研费" },
            thesis: { amount: 1500, unit: "year", currency: "USD", description: "论文费" }
          }
        },
        dataSource: "Graduate School Guide"
      },
      uk: {
        countryName: "英国",
        master: {
          name: "硕士",
          costs: {
            tuition: { amount: 25000, unit: "year", currency: "GBP", description: "学费" },
            accommodation: { amount: 8000, unit: "year", currency: "GBP", description: "住宿费" },
            living: { amount: 12000, unit: "year", currency: "GBP", description: "生活费" },
            books: { amount: 1000, unit: "year", currency: "GBP", description: "书本费" },
            insurance: { amount: 500, unit: "year", currency: "GBP", description: "保险费" },
            visa: { amount: 348, unit: "once", currency: "GBP", description: "签证费" },
            airfare: { amount: 800, unit: "year", currency: "GBP", description: "机票费" },
            application: { amount: 50, unit: "per_school", currency: "GBP", description: "申请费" },
            languageTest: { amount: 350, unit: "once", currency: "GBP", description: "语言考试费" },
            agencyFee: { amount: 30000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 800, unit: "year", currency: "GBP", description: "实验费" },
            conference: { amount: 2000, unit: "year", currency: "GBP", description: "会议费" },
            thesis: { amount: 500, unit: "year", currency: "GBP", description: "论文费" }
          }
        },
        phd: {
          name: "博士",
          costs: {
            tuition: { amount: 20000, unit: "year", currency: "GBP", description: "学费" },
            accommodation: { amount: 8000, unit: "year", currency: "GBP", description: "住宿费" },
            living: { amount: 12000, unit: "year", currency: "GBP", description: "生活费" },
            books: { amount: 1200, unit: "year", currency: "GBP", description: "书本费" },
            insurance: { amount: 500, unit: "year", currency: "GBP", description: "保险费" },
            visa: { amount: 348, unit: "once", currency: "GBP", description: "签证费" },
            airfare: { amount: 800, unit: "year", currency: "GBP", description: "机票费" },
            application: { amount: 75, unit: "per_school", currency: "GBP", description: "申请费" },
            languageTest: { amount: 350, unit: "once", currency: "GBP", description: "语言考试费" },
            agencyFee: { amount: 35000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 1500, unit: "year", currency: "GBP", description: "实验费" },
            conference: { amount: 3000, unit: "year", currency: "GBP", description: "会议费" },
            research: { amount: 2000, unit: "year", currency: "GBP", description: "调研费" },
            thesis: { amount: 800, unit: "year", currency: "GBP", description: "论文费" }
          }
        },
        dataSource: "HESA官网"
      },
      canada: {
        countryName: "加拿大",
        master: {
          name: "硕士",
          costs: {
            tuition: { amount: 18000, unit: "year", currency: "CAD", description: "学费" },
            accommodation: { amount: 8000, unit: "year", currency: "CAD", description: "住宿费" },
            living: { amount: 12000, unit: "year", currency: "CAD", description: "生活费" },
            books: { amount: 1200, unit: "year", currency: "CAD", description: "书本费" },
            insurance: { amount: 800, unit: "year", currency: "CAD", description: "保险费" },
            visa: { amount: 150, unit: "once", currency: "CAD", description: "签证费" },
            airfare: { amount: 1200, unit: "year", currency: "CAD", description: "机票费" },
            application: { amount: 100, unit: "per_school", currency: "CAD", description: "申请费" },
            languageTest: { amount: 400, unit: "once", currency: "CAD", description: "语言考试费" },
            agencyFee: { amount: 30000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 800, unit: "year", currency: "CAD", description: "实验费" },
            conference: { amount: 2500, unit: "year", currency: "CAD", description: "会议费" },
            thesis: { amount: 600, unit: "year", currency: "CAD", description: "论文费" }
          }
        },
        phd: {
          name: "博士",
          costs: {
            tuition: { amount: 15000, unit: "year", currency: "CAD", description: "学费" },
            accommodation: { amount: 8000, unit: "year", currency: "CAD", description: "住宿费" },
            living: { amount: 15000, unit: "year", currency: "CAD", description: "生活费" },
            books: { amount: 1500, unit: "year", currency: "CAD", description: "书本费" },
            insurance: { amount: 800, unit: "year", currency: "CAD", description: "保险费" },
            visa: { amount: 150, unit: "once", currency: "CAD", description: "签证费" },
            airfare: { amount: 1200, unit: "year", currency: "CAD", description: "机票费" },
            application: { amount: 150, unit: "per_school", currency: "CAD", description: "申请费" },
            languageTest: { amount: 400, unit: "once", currency: "CAD", description: "语言考试费" },
            agencyFee: { amount: 35000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 1500, unit: "year", currency: "CAD", description: "实验费" },
            conference: { amount: 3000, unit: "year", currency: "CAD", description: "会议费" },
            research: { amount: 2000, unit: "year", currency: "CAD", description: "调研费" },
            thesis: { amount: 800, unit: "year", currency: "CAD", description: "论文费" }
          }
        },
        dataSource: "加拿大统计局"
      },
      australia: {
        countryName: "澳洲",
        master: {
          name: "硕士",
          costs: {
            tuition: { amount: 35000, unit: "year", currency: "AUD", description: "学费" },
            accommodation: { amount: 12000, unit: "year", currency: "AUD", description: "住宿费" },
            living: { amount: 15000, unit: "year", currency: "AUD", description: "生活费" },
            books: { amount: 1200, unit: "year", currency: "AUD", description: "书本费" },
            insurance: { amount: 600, unit: "year", currency: "AUD", description: "保险费" },
            visa: { amount: 620, unit: "once", currency: "AUD", description: "签证费" },
            airfare: { amount: 1500, unit: "year", currency: "AUD", description: "机票费" },
            application: { amount: 100, unit: "per_school", currency: "AUD", description: "申请费" },
            languageTest: { amount: 400, unit: "once", currency: "AUD", description: "语言考试费" },
            agencyFee: { amount: 30000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 1000, unit: "year", currency: "AUD", description: "实验费" },
            conference: { amount: 2000, unit: "year", currency: "AUD", description: "会议费" },
            thesis: { amount: 600, unit: "year", currency: "AUD", description: "论文费" }
          }
        },
        phd: {
          name: "博士",
          costs: {
            tuition: { amount: 30000, unit: "year", currency: "AUD", description: "学费" },
            accommodation: { amount: 12000, unit: "year", currency: "AUD", description: "住宿费" },
            living: { amount: 18000, unit: "year", currency: "AUD", description: "生活费" },
            books: { amount: 1500, unit: "year", currency: "AUD", description: "书本费" },
            insurance: { amount: 600, unit: "year", currency: "AUD", description: "保险费" },
            visa: { amount: 620, unit: "once", currency: "AUD", description: "签证费" },
            airfare: { amount: 1500, unit: "year", currency: "AUD", description: "机票费" },
            application: { amount: 100, unit: "per_school", currency: "AUD", description: "申请费" },
            languageTest: { amount: 400, unit: "once", currency: "AUD", description: "语言考试费" },
            agencyFee: { amount: 35000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 1500, unit: "year", currency: "AUD", description: "实验费" },
            conference: { amount: 2500, unit: "year", currency: "AUD", description: "会议费" },
            research: { amount: 2000, unit: "year", currency: "AUD", description: "调研费" },
            thesis: { amount: 800, unit: "year", currency: "AUD", description: "论文费" }
          }
        },
        dataSource: "澳洲教育部"
      },
      germany: {
        countryName: "德国",
        master: {
          name: "硕士",
          costs: {
            tuition: { amount: 500, unit: "year", currency: "EUR", description: "学费" },
            accommodation: { amount: 4000, unit: "year", currency: "EUR", description: "住宿费" },
            living: { amount: 10000, unit: "year", currency: "EUR", description: "生活费" },
            books: { amount: 800, unit: "year", currency: "EUR", description: "书本费" },
            insurance: { amount: 100, unit: "year", currency: "EUR", description: "保险费" },
            visa: { amount: 75, unit: "once", currency: "EUR", description: "签证费" },
            airfare: { amount: 800, unit: "year", currency: "EUR", description: "机票费" },
            application: { amount: 0, unit: "per_school", currency: "EUR", description: "申请费" },
            languageTest: { amount: 250, unit: "once", currency: "EUR", description: "语言考试费" },
            agencyFee: { amount: 25000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 600, unit: "year", currency: "EUR", description: "实验费" },
            conference: { amount: 1500, unit: "year", currency: "EUR", description: "会议费" },
            thesis: { amount: 300, unit: "year", currency: "EUR", description: "论文费" }
          }
        },
        phd: {
          name: "博士",
          costs: {
            tuition: { amount: 0, unit: "year", currency: "EUR", description: "学费" },
            accommodation: { amount: 4000, unit: "year", currency: "EUR", description: "住宿费" },
            living: { amount: 12000, unit: "year", currency: "EUR", description: "生活费" },
            books: { amount: 1000, unit: "year", currency: "EUR", description: "书本费" },
            insurance: { amount: 100, unit: "year", currency: "EUR", description: "保险费" },
            visa: { amount: 75, unit: "once", currency: "EUR", description: "签证费" },
            airfare: { amount: 800, unit: "year", currency: "EUR", description: "机票费" },
            application: { amount: 0, unit: "per_school", currency: "EUR", description: "申请费" },
            languageTest: { amount: 250, unit: "once", currency: "EUR", description: "语言考试费" },
            agencyFee: { amount: 30000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 1000, unit: "year", currency: "EUR", description: "实验费" },
            conference: { amount: 2000, unit: "year", currency: "EUR", description: "会议费" },
            research: { amount: 1500, unit: "year", currency: "EUR", description: "调研费" },
            thesis: { amount: 500, unit: "year", currency: "EUR", description: "论文费" }
          }
        },
        dataSource: "DAAD官网"
      },
      japan: {
        countryName: "日本",
        master: {
          name: "硕士",
          costs: {
            tuition: { amount: 535800, unit: "year", currency: "JPY", description: "学费" },
            accommodation: { amount: 350000, unit: "year", currency: "JPY", description: "住宿费" },
            living: { amount: 1000000, unit: "year", currency: "JPY", description: "生活费" },
            books: { amount: 60000, unit: "year", currency: "JPY", description: "书本费" },
            insurance: { amount: 20000, unit: "year", currency: "JPY", description: "保险费" },
            visa: { amount: 3000, unit: "once", currency: "JPY", description: "签证费" },
            airfare: { amount: 80000, unit: "year", currency: "JPY", description: "机票费" },
            application: { amount: 30000, unit: "per_school", currency: "JPY", description: "申请费" },
            languageTest: { amount: 30000, unit: "once", currency: "JPY", description: "语言考试费" },
            agencyFee: { amount: 30000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 50000, unit: "year", currency: "JPY", description: "实验费" },
            conference: { amount: 100000, unit: "year", currency: "JPY", description: "会议费" },
            thesis: { amount: 20000, unit: "year", currency: "JPY", description: "论文费" }
          }
        },
        phd: {
          name: "博士",
          costs: {
            tuition: { amount: 535800, unit: "year", currency: "JPY", description: "学费" },
            accommodation: { amount: 350000, unit: "year", currency: "JPY", description: "住宿费" },
            living: { amount: 1200000, unit: "year", currency: "JPY", description: "生活费" },
            books: { amount: 80000, unit: "year", currency: "JPY", description: "书本费" },
            insurance: { amount: 20000, unit: "year", currency: "JPY", description: "保险费" },
            visa: { amount: 3000, unit: "once", currency: "JPY", description: "签证费" },
            airfare: { amount: 80000, unit: "year", currency: "JPY", description: "机票费" },
            application: { amount: 30000, unit: "per_school", currency: "JPY", description: "申请费" },
            languageTest: { amount: 30000, unit: "once", currency: "JPY", description: "语言考试费" },
            agencyFee: { amount: 35000, unit: "once", currency: "CNY", description: "留学中介费用" },
            lab: { amount: 80000, unit: "year", currency: "JPY", description: "实验费" },
            conference: { amount: 150000, unit: "year", currency: "JPY", description: "会议费" },
            research: { amount: 100000, unit: "year", currency: "JPY", description: "调研费" },
            thesis: { amount: 30000, unit: "year", currency: "JPY", description: "论文费" }
          }
        },
        dataSource: "JASSO官网"
      }
    }
  }
};

// 导出数据以便在其他文件中使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HIGHER_EDUCATION_COST_DATA;
}
