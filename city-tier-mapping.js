/**
 * 城市等级映射配置
 * 根据城市和几线映射关系.md文件生成
 * 版本: v1.0
 * 最后更新: 2024年9月17日
 */

const CITY_TIER_MAPPING = {
  // 一线城市 (4个)
  tier1: [
    "beijing",    // 北京
    "shanghai",   // 上海
    "guangzhou",  // 广州
    "shenzhen"    // 深圳
  ],

  // 新一线城市 (15个) - 在费用计算中按二线处理
  newTier1: [
    "chengdu",    // 成都
    "hangzhou",   // 杭州
    "chongqing",  // 重庆
    "wuhan",      // 武汉
    "suzhou",     // 苏州
    "xian",       // 西安
    "nanjing",    // 南京
    "changsha",   // 长沙
    "zhengzhou",  // 郑州
    "tianjin",    // 天津
    "hefei",      // 合肥
    "qingdao",    // 青岛
    "dongguan",   // 东莞
    "ningbo",     // 宁波
    "foshan"      // 佛山
  ],

  // 二线城市 (30个)
  tier2: [
    "kunming", "jinan", "xiamen", "fuzhou", "wenzhou", "dalian", "shijiazhuang",
    "nanning", "haerbin", "changchun", "nanchang", "guiyang", "changzhou", 
    "nantong", "jiaxing", "zhuhai", "huizhou", "zhongshan", "shaoxing", 
    "taizhou", "xuzhou", "taiyuan", "yantai", "lanzhou", "weifang", 
    "jinhua", "quanzhou", "baoding", "langfang"
  ],

  // 三线城市 (70个)
  tier3: [
    "haikou", "shantou", "yangzhou", "luoyang", "wulumuqi", "linyi", "tangshan",
    "zhenjiang", "yancheng", "huzhou", "ganzhou", "zhangzhou", "jieyang", 
    "jiangmen", "guilin", "handan", "taizhou2", "jining", "huhehaote", 
    "xianyang", "wuhu", "sanya", "fuyang", "huaian", "zunyi", "yinchuan",
    "hengyang", "shangrao", "liuzhou", "zibo", "putian", "mianyang", 
    "zhanjiang", "shangqiu", "yichang", "cangzhou", "lianyungang", "nanyang",
    "bengbu", "zhumadian", "chuzhou", "xingtai", "chaozhou", "qinhuangdao",
    "zhaoqing", "jingzhou", "zhoukou", "maanshan", "qingyuan", "suzhou2",
    "weihai", "jiujiang", "xinxiang", "xinyang", "xiangyang", "yueyang",
    "anqing", "heze", "yichun", "huanggang", "taian", "suqian", "zhuzhou",
    "ningde", "anshan", "nanchong", "luan", "daqing", "zhoushan"
  ],

  // 四线及以下城市 - 其他所有城市
  tier4AndBelow: "default" // 默认分类
};

/**
 * 根据城市代码获取城市等级
 * @param {string} cityCode - 城市代码
 * @returns {string} - 城市等级 (一线城市|二线城市|三线城市|四线及以下)
 */
function getCityTier(cityCode) {
  if (CITY_TIER_MAPPING.tier1.includes(cityCode)) {
    return "一线城市";
  }
  
  if (CITY_TIER_MAPPING.newTier1.includes(cityCode)) {
    return "二线城市"; // 新一线按二线处理
  }
  
  if (CITY_TIER_MAPPING.tier2.includes(cityCode)) {
    return "二线城市";
  }
  
  if (CITY_TIER_MAPPING.tier3.includes(cityCode)) {
    return "三线城市";
  }
  
  return "四线及以下";
}

/**
 * 获取城市中文名称
 * @param {string} cityCode - 城市代码
 * @returns {string} - 城市中文名称
 */
function getCityName(cityCode) {
  const cityNames = {
    beijing: "北京",
    shanghai: "上海", 
    guangzhou: "广州",
    shenzhen: "深圳",
    chengdu: "成都",
    hangzhou: "杭州",
    nanjing: "南京",
    wuhan: "武汉"
  };
  
  return cityNames[cityCode] || cityCode;
}

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CITY_TIER_MAPPING, getCityTier, getCityName };
}

