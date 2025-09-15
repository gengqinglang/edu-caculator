/**
 * 教育费用计算器 - 基础数据
 * 静态网页数据存储
 * 版本: v1.0
 * 最后更新: 2024年9月15日
 */

// 教育费用数据结构
const EDUCATION_COST_DATA = {
  // 数据版本和更新信息
  metadata: {
    version: "1.0",
    lastUpdated: "2024-09-15",
    currency: {
      CNY: "人民币",
      USD: "美元", 
      GBP: "英镑",
      CAD: "加拿大元",
      AUD: "澳元",
      EUR: "欧元",
      JPY: "日元",
      SGD: "新加坡元"
    },
    dataSources: [
      "教育部官网",
      "各地教委官网", 
      "College Board",
      "UCAS官网",
      "DAAD官网",
      "各国教育部官方数据"
    ]
  },

  // 小学阶段数据
  primarySchool: {
    // 公立小学（按城市）
    public: {
      beijing: {
        cityName: "北京",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 300, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 600, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 200, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1000, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "北京市教委官网"
      },
      shanghai: {
        cityName: "上海",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 600, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 350, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 650, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 250, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1200, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 600, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "上海市教委官网"
      },
      guangzhou: {
        cityName: "广州",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 300, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 550, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 200, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 900, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "广州市教育局"
      },
      shenzhen: {
        cityName: "深圳",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 600, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 400, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 700, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 300, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1100, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 600, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "深圳市教育局"
      },
      hangzhou: {
        cityName: "杭州",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 300, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 600, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 200, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1000, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "杭州市教委"
      },
      nanjing: {
        cityName: "南京",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 300, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 550, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 200, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 950, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "南京市教育局"
      },
      chengdu: {
        cityName: "成都",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 450, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 280, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 500, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 180, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 800, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 450, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "成都市教育局"
      },
      wuhan: {
        cityName: "武汉",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 450, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 280, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 500, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 180, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 850, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 450, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "武汉市教育局"
      }
    },

    // 私立小学（按城市）
    private: {
      beijing: {
        cityName: "北京",
        costs: {
          tuition: { amount: 80000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 15000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 1200, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 800, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1000, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 2500, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 400, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1800, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 2000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "搜狐教育网"
      },
      shanghai: {
        cityName: "上海",
        costs: {
          tuition: { amount: 100000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 20000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 1500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1000, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1200, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 3000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 500, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 2000, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 2500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "新浪教育网"
      },
      guangzhou: {
        cityName: "广州",
        costs: {
          tuition: { amount: 60000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 12000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 1000, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 600, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 800, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 2000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 300, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1500, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 1500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "广州日报"
      },
      shenzhen: {
        cityName: "深圳",
        costs: {
          tuition: { amount: 80000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 15000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 1200, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 800, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1000, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 2500, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 400, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1800, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 2000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "深圳晚报"
      },
      hangzhou: {
        cityName: "杭州",
        costs: {
          tuition: { amount: 70000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 14000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 1100, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 700, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 900, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 2200, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 350, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1600, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 1800, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "钱江晚报"
      }
    }
  },

  // 初中阶段数据
  middleSchool: {
    // 公立初中（按城市）
    public: {
      beijing: {
        cityName: "北京",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 600, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 400, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 700, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 250, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1200, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 600, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "北京市教委官网"
      },
      shanghai: {
        cityName: "上海",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 700, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 450, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 750, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 300, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1500, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 700, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "上海市教委官网"
      },
      guangzhou: {
        cityName: "广州",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 600, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 400, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 650, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 250, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1100, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 600, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "广州市教育局"
      },
      shenzhen: {
        cityName: "深圳",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 700, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 500, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 800, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 350, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1300, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 700, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "深圳市教育局"
      },
      hangzhou: {
        cityName: "杭州",
        costs: {
          tuition: { amount: 0, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 600, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 400, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 700, unit: "month", currency: "CNY", description: "餐费" },
          transport: { amount: 250, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1200, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 600, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "杭州市教委"
      }
    },

    // 私立初中（按城市）
    private: {
      beijing: {
        cityName: "北京",
        costs: {
          tuition: { amount: 100000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 20000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 1500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1000, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1200, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 3000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 500, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 2200, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 2500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "搜狐教育网"
      },
      shanghai: {
        cityName: "上海",
        costs: {
          tuition: { amount: 120000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 25000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 1800, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1200, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1400, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 3500, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 600, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 2500, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 3000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "新浪教育网"
      },
      guangzhou: {
        cityName: "广州",
        costs: {
          tuition: { amount: 80000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 15000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 1200, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 800, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1000, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 2500, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 400, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1800, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 2000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "广州日报"
      },
      shenzhen: {
        cityName: "深圳",
        costs: {
          tuition: { amount: 100000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 20000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 1500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1000, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1200, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 3000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 500, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 2200, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 2500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "深圳晚报"
      }
    }
  },

  // 高中阶段数据
  highSchool: {
    // 国内方向-公立高中（按城市）
    domesticPublic: {
      beijing: {
        cityName: "北京",
        costs: {
          tuition: { amount: 2000, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 800, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 500, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 800, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 1200, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 300, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1500, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 800, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "北京市教委官网"
      },
      shanghai: {
        cityName: "上海",
        costs: {
          tuition: { amount: 2500, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 900, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 600, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 900, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 1500, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 400, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1800, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 1000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "上海市教委官网"
      },
      guangzhou: {
        cityName: "广州",
        costs: {
          tuition: { amount: 1800, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 700, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 500, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 750, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 1000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 300, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1300, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 700, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "广州市教育局"
      },
      shenzhen: {
        cityName: "深圳",
        costs: {
          tuition: { amount: 2000, unit: "year", currency: "CNY", description: "学费" },
          books: { amount: 800, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 500, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 800, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 1200, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 350, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 1500, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 800, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "深圳市教育局"
      }
    },

    // 国内方向-私立高中（按城市）
    domesticPrivate: {
      beijing: {
        cityName: "北京",
        costs: {
          tuition: { amount: 120000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 25000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 1800, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1200, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1500, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 4000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 600, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 2500, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 3000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "搜狐教育网"
      },
      shanghai: {
        cityName: "上海",
        costs: {
          tuition: { amount: 150000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 30000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 2000, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1500, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1800, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 5000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 800, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 3000, unit: "month", currency: "CNY", description: "课外辅导费" },
          activities: { amount: 4000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "新浪教育网"
      }
    },

    // 出国方向-公立国际部（按城市）
    internationalPublic: {
      beijing: {
        cityName: "北京",
        costs: {
          tuition: { amount: 150000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 30000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 2500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1200, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1500, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 4000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 600, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 3000, unit: "month", currency: "CNY", description: "辅导班费用" },
          examPrep: { amount: 25000, unit: "year", currency: "CNY", description: "备考费用" },
          agencyFee: { amount: 40000, unit: "once", currency: "CNY", description: "留学中介费用" },
          activities: { amount: 4000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "新学说国际教育"
      },
      shanghai: {
        cityName: "上海",
        costs: {
          tuition: { amount: 180000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 35000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 3000, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1500, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1800, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 4500, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 700, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 3500, unit: "month", currency: "CNY", description: "辅导班费用" },
          examPrep: { amount: 30000, unit: "year", currency: "CNY", description: "备考费用" },
          agencyFee: { amount: 45000, unit: "once", currency: "CNY", description: "留学中介费用" },
          activities: { amount: 5000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "腾讯教育"
      },
      guangzhou: {
        cityName: "广州",
        costs: {
          tuition: { amount: 120000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 25000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 2000, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1000, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1200, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 3500, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 500, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 2500, unit: "month", currency: "CNY", description: "辅导班费用" },
          examPrep: { amount: 20000, unit: "year", currency: "CNY", description: "备考费用" },
          agencyFee: { amount: 35000, unit: "once", currency: "CNY", description: "留学中介费用" },
          activities: { amount: 3500, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "南方都市报"
      },
      shenzhen: {
        cityName: "深圳",
        costs: {
          tuition: { amount: 150000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 30000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 2500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1200, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1500, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 4000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 600, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 3000, unit: "month", currency: "CNY", description: "辅导班费用" },
          examPrep: { amount: 25000, unit: "year", currency: "CNY", description: "备考费用" },
          agencyFee: { amount: 40000, unit: "once", currency: "CNY", description: "留学中介费用" },
          activities: { amount: 4000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "深圳特区报"
      }
    },

    // 出国方向-国际学校（按城市）
    internationalSchool: {
      beijing: {
        cityName: "北京",
        costs: {
          tuition: { amount: 250000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 50000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 3000, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1500, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 2000, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 5000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 800, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 4000, unit: "month", currency: "CNY", description: "辅导班费用" },
          examPrep: { amount: 35000, unit: "year", currency: "CNY", description: "备考费用" },
          agencyFee: { amount: 50000, unit: "once", currency: "CNY", description: "留学中介费用" },
          activities: { amount: 6000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "新学说国际教育"
      },
      shanghai: {
        cityName: "上海",
        costs: {
          tuition: { amount: 300000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 60000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 3500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 2000, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 2500, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 6000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 1000, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 4500, unit: "month", currency: "CNY", description: "辅导班费用" },
          examPrep: { amount: 40000, unit: "year", currency: "CNY", description: "备考费用" },
          agencyFee: { amount: 55000, unit: "once", currency: "CNY", description: "留学中介费用" },
          activities: { amount: 7000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "腾讯教育"
      },
      guangzhou: {
        cityName: "广州",
        costs: {
          tuition: { amount: 200000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 40000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 2500, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1200, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 1800, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 4500, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 700, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 3500, unit: "month", currency: "CNY", description: "辅导班费用" },
          examPrep: { amount: 30000, unit: "year", currency: "CNY", description: "备考费用" },
          agencyFee: { amount: 45000, unit: "once", currency: "CNY", description: "留学中介费用" },
          activities: { amount: 5000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "南方都市报"
      },
      shenzhen: {
        cityName: "深圳",
        costs: {
          tuition: { amount: 250000, unit: "year", currency: "CNY", description: "学费" },
          enrollment: { amount: 50000, unit: "once", currency: "CNY", description: "入学费" },
          books: { amount: 3000, unit: "year", currency: "CNY", description: "书本费" },
          uniform: { amount: 1500, unit: "set", currency: "CNY", description: "校服费" },
          meals: { amount: 2000, unit: "month", currency: "CNY", description: "餐费" },
          accommodation: { amount: 5000, unit: "month", currency: "CNY", description: "住宿费" },
          transport: { amount: 800, unit: "month", currency: "CNY", description: "交通费" },
          tutoring: { amount: 4000, unit: "month", currency: "CNY", description: "辅导班费用" },
          examPrep: { amount: 35000, unit: "year", currency: "CNY", description: "备考费用" },
          agencyFee: { amount: 50000, unit: "once", currency: "CNY", description: "留学中介费用" },
          activities: { amount: 6000, unit: "year", currency: "CNY", description: "活动费" }
        },
        dataSource: "深圳特区报"
      }
    },

    // 海外高中（按国家）
    overseas: {
      usa: {
        countryName: "美国",
        costs: {
          tuition: { amount: 35000, unit: "year", currency: "USD", description: "学费" },
          accommodation: { amount: 15000, unit: "year", currency: "USD", description: "住宿费" },
          living: { amount: 12000, unit: "year", currency: "USD", description: "生活费" },
          books: { amount: 1200, unit: "year", currency: "USD", description: "书本费" },
          uniform: { amount: 300, unit: "set", currency: "USD", description: "校服费" },
          insurance: { amount: 2000, unit: "year", currency: "USD", description: "保险费" },
          visa: { amount: 160, unit: "once", currency: "USD", description: "签证费" },
          airfare: { amount: 1500, unit: "year", currency: "USD", description: "机票费" },
          guardian: { amount: 3000, unit: "year", currency: "USD", description: "监护费" },
          activities: { amount: 2000, unit: "year", currency: "USD", description: "活动费" }
        },
        dataSource: "College Board"
      },
      uk: {
        countryName: "英国",
        costs: {
          tuition: { amount: 25000, unit: "year", currency: "GBP", description: "学费" },
          accommodation: { amount: 12000, unit: "year", currency: "GBP", description: "住宿费" },
          living: { amount: 10000, unit: "year", currency: "GBP", description: "生活费" },
          books: { amount: 800, unit: "year", currency: "GBP", description: "书本费" },
          uniform: { amount: 200, unit: "set", currency: "GBP", description: "校服费" },
          insurance: { amount: 500, unit: "year", currency: "GBP", description: "保险费" },
          visa: { amount: 348, unit: "once", currency: "GBP", description: "签证费" },
          airfare: { amount: 800, unit: "year", currency: "GBP", description: "机票费" },
          guardian: { amount: 2500, unit: "year", currency: "GBP", description: "监护费" },
          activities: { amount: 1500, unit: "year", currency: "GBP", description: "活动费" }
        },
        dataSource: "UCAS官网"
      },
      canada: {
        countryName: "加拿大",
        costs: {
          tuition: { amount: 30000, unit: "year", currency: "CAD", description: "学费" },
          accommodation: { amount: 12000, unit: "year", currency: "CAD", description: "住宿费" },
          living: { amount: 10000, unit: "year", currency: "CAD", description: "生活费" },
          books: { amount: 1000, unit: "year", currency: "CAD", description: "书本费" },
          uniform: { amount: 250, unit: "set", currency: "CAD", description: "校服费" },
          insurance: { amount: 800, unit: "year", currency: "CAD", description: "保险费" },
          visa: { amount: 150, unit: "once", currency: "CAD", description: "签证费" },
          airfare: { amount: 1200, unit: "year", currency: "CAD", description: "机票费" },
          guardian: { amount: 2000, unit: "year", currency: "CAD", description: "监护费" },
          activities: { amount: 1500, unit: "year", currency: "CAD", description: "活动费" }
        },
        dataSource: "加拿大教育局"
      },
      australia: {
        countryName: "澳洲",
        costs: {
          tuition: { amount: 28000, unit: "year", currency: "AUD", description: "学费" },
          accommodation: { amount: 15000, unit: "year", currency: "AUD", description: "住宿费" },
          living: { amount: 12000, unit: "year", currency: "AUD", description: "生活费" },
          books: { amount: 1000, unit: "year", currency: "AUD", description: "书本费" },
          uniform: { amount: 300, unit: "set", currency: "AUD", description: "校服费" },
          insurance: { amount: 600, unit: "year", currency: "AUD", description: "保险费" },
          visa: { amount: 620, unit: "once", currency: "AUD", description: "签证费" },
          airfare: { amount: 1500, unit: "year", currency: "AUD", description: "机票费" },
          guardian: { amount: 2500, unit: "year", currency: "AUD", description: "监护费" },
          activities: { amount: 1800, unit: "year", currency: "AUD", description: "活动费" }
        },
        dataSource: "澳洲教育部"
      },
      singapore: {
        countryName: "新加坡",
        costs: {
          tuition: { amount: 25000, unit: "year", currency: "SGD", description: "学费" },
          accommodation: { amount: 8000, unit: "year", currency: "SGD", description: "住宿费" },
          living: { amount: 8000, unit: "year", currency: "SGD", description: "生活费" },
          books: { amount: 800, unit: "year", currency: "SGD", description: "书本费" },
          uniform: { amount: 200, unit: "set", currency: "SGD", description: "校服费" },
          insurance: { amount: 500, unit: "year", currency: "SGD", description: "保险费" },
          visa: { amount: 30, unit: "once", currency: "SGD", description: "签证费" },
          airfare: { amount: 600, unit: "year", currency: "SGD", description: "机票费" },
          guardian: { amount: 1500, unit: "year", currency: "SGD", description: "监护费" },
          activities: { amount: 1200, unit: "year", currency: "SGD", description: "活动费" }
        },
        dataSource: "新加坡教育部"
      }
    }
  }
};

// 导出数据以便在其他文件中使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EDUCATION_COST_DATA;
}
