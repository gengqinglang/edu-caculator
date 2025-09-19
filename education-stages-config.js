/**
 * 教育阶段和年级配置
 * 用于新版教育费用计算器
 * 版本: v2.0
 * 最后更新: 2024年9月15日
 */

const EDUCATION_STAGES_CONFIG = {
  // 教育阶段定义
  stages: {
    kindergarten: {
      name: "幼儿园",
      totalYears: 3,
      grades: [
        { code: "small", name: "小班", year: 1 },
        { code: "middle", name: "中班", year: 2 },
        { code: "large", name: "大班", year: 3 }
      ],
      educationLevels: [
        { code: "public", name: "公立幼儿园", direction: "domestic" },
        { code: "private_mid", name: "私立幼儿园(中档)", direction: "domestic" },
        { code: "private_high", name: "私立幼儿园(高档)", direction: "domestic" }
      ],
      nextStage: "primary"
    },
    
    primary: {
      name: "小学",
      totalYears: 6,
      grades: [
        { code: "grade1", name: "一年级", year: 1 },
        { code: "grade2", name: "二年级", year: 2 },
        { code: "grade3", name: "三年级", year: 3 },
        { code: "grade4", name: "四年级", year: 4 },
        { code: "grade5", name: "五年级", year: 5 },
        { code: "grade6", name: "六年级", year: 6 }
      ],
      educationLevels: [
        { code: "public", name: "公立小学", direction: "domestic" },
        { code: "private_mid", name: "私立小学(中档)", direction: "domestic" },
        { code: "private_high", name: "私立小学(高档)", direction: "domestic" }
      ],
      nextStage: "middle"
    },
    
    middle: {
      name: "初中",
      totalYears: 3,
      grades: [
        { code: "grade1", name: "初一", year: 1 },
        { code: "grade2", name: "初二", year: 2 },
        { code: "grade3", name: "初三", year: 3 }
      ],
      educationLevels: [
        { code: "public", name: "公立初中", direction: "domestic" },
        { code: "private_mid", name: "私立初中(中档)", direction: "domestic" },
        { code: "private_high", name: "私立初中(高档)", direction: "domestic" }
      ],
      nextStage: "high"
    },
    
    high: {
      name: "高中",
      totalYears: 3,
      grades: [
        { code: "grade1", name: "高一", year: 1 },
        { code: "grade2", name: "高二", year: 2 },
        { code: "grade3", name: "高三", year: 3 }
      ],
      educationLevels: [
        { code: "domesticPublic", name: "国内方向-公立高中", direction: "domestic" },
        { code: "domesticPrivate", name: "国内方向-私立高中", direction: "domestic" },
        { code: "internationalPublic", name: "出国方向-公立国际部", direction: "international" },
        { code: "internationalSchool", name: "出国方向-国际学校", direction: "international" },
        { code: "overseas", name: "海外高中", direction: "overseas" }
      ],
      nextStage: "university"
    },
    
    university: {
      name: "大学",
      totalYears: 4,
      grades: [
        { code: "grade1", name: "大一", year: 1 },
        { code: "grade2", name: "大二", year: 2 },
        { code: "grade3", name: "大三", year: 3 },
        { code: "grade4", name: "大四", year: 4 }
      ],
      educationLevels: [
        { code: "domesticPublic", name: "国内公立大学", direction: "domestic" },
        { code: "domesticPrivate", name: "国内民办大学", direction: "domestic" },
        { code: "overseas", name: "海外大学", direction: "overseas" }
      ],
      // 海外国家选项将从数据文件动态获取
      overseasCountries: ["usa", "uk", "australia", "hongkong", "singapore", "japan", "canada", "europeOthers"],
      nextStage: "graduate"
    },
    
    graduate: {
      name: "研究生",
      totalYears: 3,
      grades: [
        { code: "grade1", name: "研一", year: 1 },
        { code: "grade2", name: "研二", year: 2 },
        { code: "grade3", name: "研三", year: 3 }
      ],
      educationLevels: [
        { code: "domesticAcademic", name: "国内学术型硕士", direction: "domestic" },
        { code: "domesticProfessional", name: "国内专业型硕士", direction: "domestic" },
        { code: "overseas", name: "海外硕士", direction: "overseas" }
      ],
      // 海外国家选项将从数据文件动态获取
      overseasCountries: ["usa", "uk", "australia", "hongkong", "singapore", "japan", "canada", "europeOthers"],
      nextStage: "phd"
    },
    
    phd: {
      name: "博士",
      totalYears: 4,
      grades: [
        { code: "grade1", name: "博一", year: 1 },
        { code: "grade2", name: "博二", year: 2 },
        { code: "grade3", name: "博三", year: 3 },
        { code: "grade4", name: "博四", year: 4 }
      ],
      educationLevels: [
        { code: "domestic", name: "国内博士", direction: "domestic" },
        { code: "overseas", name: "海外博士", direction: "overseas" }
      ],
      // 海外国家选项将从数据文件动态获取
      overseasCountries: ["usa", "uk", "australia", "hongkong", "singapore", "japan", "canada", "europeOthers"],
      nextStage: null // 最终阶段
    }
  },

  // 教育路径方向定义
  directions: {
    domestic: {
      name: "国内方向",
      description: "以国内教育体系为主",
      suggestedNext: ["domestic", "bilingual"]
    },
    bilingual: {
      name: "双语方向", 
      description: "中西结合的双语教育",
      suggestedNext: ["bilingual", "international", "overseas"]
    },
    international: {
      name: "国际方向",
      description: "以出国留学为目标",
      suggestedNext: ["international", "overseas"]
    },
    overseas: {
      name: "海外方向",
      description: "直接海外教育",
      suggestedNext: ["overseas"]
    }
  },

  // 获取剩余年限
  getRemainingYears: function(stage, currentGrade) {
    const stageInfo = this.stages[stage];
    if (!stageInfo) return 0;
    
    const gradeInfo = stageInfo.grades.find(g => g.code === currentGrade);
    if (!gradeInfo) return stageInfo.totalYears;
    
    return stageInfo.totalYears - gradeInfo.year + 1;
  },

  // 获取海外国家选项
  getOverseasCountries: function(stageCode) {
    const stage = this.stages[stageCode];
    if (!stage || !stage.overseasCountries) {
      return [];
    }
    
    // 根据阶段类型获取对应的国家枚举
    let countryLabels = {};
    
    try {
      if (stageCode === 'university' && window.UNIVERSITY_EDUCATION_LEVELS) {
        countryLabels = window.UNIVERSITY_EDUCATION_LEVELS;
      } else if (stageCode === 'graduate' && window.GRADUATE_EDUCATION_LEVELS) {
        countryLabels = window.GRADUATE_EDUCATION_LEVELS;
      } else if (stageCode === 'phd' && window.PHD_EDUCATION_LEVELS) {
        countryLabels = window.PHD_EDUCATION_LEVELS;
      }
    } catch (error) {
      console.warn('无法获取国家标签，使用默认标签');
    }
    
    return stage.overseasCountries.map(code => ({
      code: code,
      name: countryLabels[code] || code
    }));
  },

  // 获取后续教育阶段
  getSubsequentStages: function(currentStage) {
    const stages = [];
    let stage = currentStage;
    
    while (stage && this.stages[stage]) {
      stages.push({
        code: stage,
        name: this.stages[stage].name,
        config: this.stages[stage]
      });
      stage = this.stages[stage].nextStage;
    }
    
    return stages;
  },

  // 根据方向推荐教育水平
  suggestEducationLevels: function(stage, previousDirection) {
    const stageInfo = this.stages[stage];
    if (!stageInfo) return [];
    
    if (!previousDirection) {
      return stageInfo.educationLevels;
    }
    
    const directionInfo = this.directions[previousDirection];
    if (!directionInfo) {
      return stageInfo.educationLevels;
    }
    
    // 按照建议方向排序
    const suggested = stageInfo.educationLevels.filter(level => 
      directionInfo.suggestedNext.includes(level.direction)
    );
    
    const others = stageInfo.educationLevels.filter(level => 
      !directionInfo.suggestedNext.includes(level.direction)
    );
    
    return [...suggested, ...others];
  },

  // 验证年级选择
  validateGradeSelection: function(stage, grade) {
    const stageInfo = this.stages[stage];
    if (!stageInfo) return false;
    
    return stageInfo.grades.some(g => g.code === grade);
  },

  // 验证教育水平选择
  validateEducationLevel: function(stage, level) {
    const stageInfo = this.stages[stage];
    if (!stageInfo) return false;
    
    return stageInfo.educationLevels.some(l => l.code === level);
  },

  // 获取阶段信息
  getStageInfo: function(stage) {
    return this.stages[stage] || null;
  },

  // 获取年级信息
  getGradeInfo: function(stage, grade) {
    const stageInfo = this.stages[stage];
    if (!stageInfo) return null;
    
    return stageInfo.grades.find(g => g.code === grade) || null;
  },

  // 获取教育水平信息
  getEducationLevelInfo: function(stage, level) {
    const stageInfo = this.stages[stage];
    if (!stageInfo) return null;
    
    return stageInfo.educationLevels.find(l => l.code === level) || null;
  },

  // 获取后续教育阶段
  getSubsequentStages: function(currentStage) {
    const stageOrder = ['kindergarten', 'primary', 'middle', 'high', 'university', 'graduate', 'phd'];
    const currentIndex = stageOrder.indexOf(currentStage);
    
    if (currentIndex === -1) {
      return [];
    }
    
    // 返回当前阶段及后续所有阶段的完整信息
    return stageOrder.slice(currentIndex).map(stageCode => {
      const stageInfo = this.stages[stageCode];
      return {
        code: stageCode,
        name: stageInfo.name,
        totalYears: stageInfo.totalYears,
        educationLevels: stageInfo.educationLevels,
        grades: stageInfo.grades
      };
    });
  },

  // 获取完整教育路径预览
  getEducationPathPreview: function(startStage, startGrade) {
    const path = [];
    const stages = this.getSubsequentStages(startStage);
    
    stages.forEach((stage, index) => {
      if (index === 0) {
        // 当前阶段
        const remainingYears = this.getRemainingYears(startStage, startGrade);
        path.push({
          ...stage,
          isCurrent: true,
          remainingYears: remainingYears,
          totalYears: stage.config.totalYears
        });
      } else {
        // 后续阶段
        path.push({
          ...stage,
          isCurrent: false,
          remainingYears: 0,
          totalYears: stage.config.totalYears
        });
      }
    });
    
    return path;
  }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EDUCATION_STAGES_CONFIG;
}

// 浏览器环境
if (typeof window !== 'undefined') {
  window.EDUCATION_STAGES_CONFIG = EDUCATION_STAGES_CONFIG;
}
