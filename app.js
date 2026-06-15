const sourceLabels = {
  pierre: "皮埃尔杂货店",
  joja: "Joja超市",
  robin: "木匠罗宾",
  clint: "铁匠克林特",
  marnie: "玛妮牧场",
  willy: "威利鱼店",
  krobus: "科罗布斯",
  sandy: "绿洲商店",
  nightMarket: "夜市魔法商船",
  travelingCart: "旅行货车",
  eggFestival: "复活节彩蛋节",
  desertFestival: "沙漠节商人",
  raccoon: "浣熊太太商店",
  islandTrader: "姜岛商人",
};

const sourceFilters = [
  ["all", "全部来源"],
  ["pierre", "皮埃尔"],
  ["joja", "Joja"],
  ["robin", "罗宾"],
  ["clint", "克林特"],
  ["marnie", "玛妮"],
  ["willy", "威利"],
  ["krobus", "科罗布斯"],
  ["sandy", "绿洲"],
  ["travelingCart", "旅行货车"],
  ["nightMarket", "夜市"],
  ["eggFestival", "节日"],
  ["desertFestival", "沙漠节"],
  ["raccoon", "浣熊"],
  ["islandTrader", "姜岛"],
];

const categoryLabels = {
  seed: "种子",
  material: "材料",
  grocery: "杂货",
  supply: "用品",
};

const categoryFilters = [
  ["all", "全部商品"],
  ["seed", "种子"],
  ["material", "材料"],
  ["grocery", "杂货"],
  ["supply", "用品"],
];

const pageSize = 12;

const seedItems = [
  ["parsnip", "防风草", "防风草种子", "Parsnip", ["Spring"], ["pierre", "joja", "nightMarket", "travelingCart"], 4, null, 8, 10],
  ["green-bean", "青豆", "青豆种子", "Green Bean", ["Spring"], ["pierre", "joja", "nightMarket", "travelingCart"], 10, 3, 9, 10],
  ["cauliflower", "花椰菜", "花椰菜种子", "Cauliflower", ["Spring"], ["pierre", "joja", "nightMarket", "travelingCart"], 12, null, 23, 30],
  ["potato", "土豆", "土豆种子", "Potato", ["Spring"], ["pierre", "joja", "nightMarket", "travelingCart"], 6, null, 14, 10],
  ["tulip", "郁金香", "郁金香球茎", "Tulip", ["Spring"], ["pierre", "joja", "nightMarket", "travelingCart"], 6, null, 7, 18],
  ["kale", "甘蓝菜", "甘蓝种子", "Kale", ["Spring"], ["pierre", "joja", "nightMarket", "travelingCart"], 6, null, 17, 20],
  ["blue-jazz", "蓝爵士", "蓝爵士种子", "Blue Jazz", ["Spring"], ["pierre", "joja", "nightMarket", "travelingCart"], 7, null, 10, 18],
  ["garlic", "大蒜", "大蒜种子", "Garlic", ["Spring"], ["pierre", "nightMarket", "travelingCart"], 4, null, 12, 8, "皮埃尔与夜市从第2年开始出售"],
  ["unmilled-rice", "未碾米", "稻苗", "Unmilled Rice", ["Spring"], ["pierre", "travelingCart"], 8, null, 7, 1, "皮埃尔从第2年开始出售", "靠近水源灌溉时为6天"],
  ["carrot", "胡萝卜", "胡萝卜种子", "Carrot", ["Spring"], ["raccoon"], 3, null, 8, 30],
  ["strawberry", "草莓", "草莓种子", "Strawberry", ["Spring"], ["eggFestival", "desertFestival"], 8, 4, 18, 20],
  ["rhubarb", "大黄", "大黄种子", "Rhubarb", ["Spring"], ["sandy", "travelingCart"], 13, null, 26, -300],
  ["coffee-bean", "咖啡豆", "咖啡豆", "Coffee Bean", ["Spring", "Summer"], ["travelingCart"], 10, 2, 4, -300, "旅行货车偶尔出售"],
  ["tomato", "西红柿", "西红柿种子", "Tomato", ["Summer"], ["pierre", "joja", "nightMarket", "travelingCart"], 11, 4, 12, 8],
  ["hot-pepper", "辣椒", "辣椒种子", "Hot Pepper", ["Summer"], ["pierre", "joja", "nightMarket", "travelingCart"], 5, 3, 9, 5],
  ["wheat", "小麦", "小麦种子", "Wheat", ["Summer", "Fall"], ["pierre", "joja", "nightMarket", "travelingCart"], 4, null, 6, -300],
  ["summer-squash", "金皮西葫芦", "金皮西葫芦种子", "Summer Squash", ["Summer"], ["raccoon"], 6, 3, 9, 25],
  ["blueberry", "蓝莓", "蓝莓种子", "Blueberry", ["Summer"], ["pierre", "nightMarket", "travelingCart"], 13, 4, 10, 10, "Joja超市不出售蓝莓种子"],
  ["melon", "甜瓜", "甜瓜种子", "Melon", ["Summer"], ["pierre", "joja", "nightMarket", "travelingCart"], 12, null, 27, 45],
  ["hops", "啤酒花", "啤酒花种子", "Hops", ["Summer"], ["pierre", "joja", "nightMarket", "travelingCart"], 11, 1, 6, 18],
  ["poppy", "虞美人花", "虞美人种子", "Poppy", ["Summer"], ["pierre", "joja", "nightMarket", "travelingCart"], 7, null, 20, 18],
  ["radish", "萝卜", "萝卜种子", "Radish", ["Summer"], ["pierre", "joja", "nightMarket", "travelingCart"], 6, null, 15, 18],
  ["red-cabbage", "红叶卷心菜", "红叶卷心菜种子", "Red Cabbage", ["Summer"], ["pierre", "nightMarket", "travelingCart"], 9, null, 28, 30, "皮埃尔与夜市从第2年开始出售"],
  ["summer-spangle", "夏季亮片", "夏季亮片种子", "Summer Spangle", ["Summer"], ["pierre", "joja", "nightMarket", "travelingCart"], 8, null, 15, 18],
  ["starfruit", "杨桃", "杨桃种子", "Starfruit", ["Summer"], ["sandy", "travelingCart"], 13, null, 43, 50],
  ["corn", "玉米", "玉米种子", "Corn", ["Summer", "Fall"], ["pierre", "joja", "nightMarket", "travelingCart"], 14, 4, 10, 10],
  ["sunflower", "向日葵", "向日葵种子", "Sunflower", ["Summer", "Fall"], ["pierre", "joja", "nightMarket", "travelingCart"], 8, null, 5, 18, "Joja超市的向日葵种子更便宜"],
  ["eggplant", "茄子", "茄子种子", "Eggplant", ["Fall"], ["pierre", "joja", "nightMarket", "travelingCart"], 5, 5, 12, 8],
  ["broccoli", "西蓝花", "西蓝花种子", "Broccoli", ["Fall"], ["raccoon"], 8, 4, 13, 25],
  ["pumpkin", "南瓜", "南瓜种子", "Pumpkin", ["Fall"], ["pierre", "joja", "nightMarket", "travelingCart"], 13, null, 31, -300],
  ["bok-choy", "小白菜", "小白菜种子", "Bok Choy", ["Fall"], ["pierre", "joja", "nightMarket", "travelingCart"], 4, null, 14, 10],
  ["yam", "山药", "山药种子", "Yam", ["Fall"], ["pierre", "joja", "nightMarket", "travelingCart"], 10, null, 22, 18],
  ["cranberries", "蔓越莓", "蔓越莓种子", "Cranberries", ["Fall"], ["pierre", "joja", "nightMarket", "travelingCart"], 7, 5, 14, 15],
  ["grape", "葡萄", "葡萄种子", "Grape", ["Fall"], ["pierre", "joja", "nightMarket", "travelingCart"], 10, 3, 14, 15],
  ["artichoke", "洋蓟", "洋蓟种子", "Artichoke", ["Fall"], ["pierre", "nightMarket", "travelingCart"], 8, null, 22, 12, "皮埃尔与夜市从第2年开始出售"],
  ["amaranth", "苋菜", "苋菜种子", "Amaranth", ["Fall"], ["pierre", "joja", "nightMarket", "travelingCart"], 7, null, 21, 20],
  ["beet", "甜菜", "甜菜种子", "Beet", ["Fall"], ["sandy", "travelingCart"], 6, null, 16, 12],
  ["fairy-rose", "玫瑰仙子", "玫瑰仙子种子", "Fairy Rose", ["Fall"], ["pierre", "joja", "nightMarket", "travelingCart", "desertFestival"], 12, null, 29, 18],
  ["sweet-gem-berry", "宝石甜莓", "稀有种子", "Sweet Gem Berry", ["Fall"], ["travelingCart"], 24, null, 64, -300, "旅行货车在春夏固定机会出售，其他季节小概率出售"],
  ["powdermelon", "霜瓜", "霜瓜种子", "Powdermelon", ["Winter"], ["raccoon"], 7, null, 12, 25],
  ["taro-root", "芋头", "芋头块茎", "Taro Root", ["Summer", "GingerIsland"], ["islandTrader"], 10, null, 16, 15, null, "灌溉时为7天；姜岛全年可种"],
  ["pineapple", "菠萝", "菠萝种子", "Pineapple", ["Summer", "GingerIsland"], ["islandTrader"], 14, 7, 30, 55, "姜岛商人以岩浆菇交换"],
].map(([id, cropName, name, wikiName, seasons, sources, growthDays, regrowthDays, xp, edibility, sourceNote, growthNote]) => ({
  id,
  type: "seed",
  cropName,
  name,
  wikiName,
  seasons,
  sources,
  growthDays,
  regrowthDays,
  xp,
  edibility,
  sourceNote,
  growthNote,
}));

const goodsItems = [
  {
    id: "wood",
    type: "material",
    name: "木材",
    wikiName: "Wood",
    sources: ["robin", "desertFestival"],
    note: "基础建筑和制作材料。罗宾木匠店常规出售，沙漠节也会出售。",
  },
  {
    id: "stone",
    type: "material",
    name: "石头",
    wikiName: "Stone",
    sources: ["robin", "desertFestival"],
    note: "基础建筑和制作材料。罗宾木匠店常规出售，沙漠节也会出售。",
  },
  {
    id: "coal",
    type: "material",
    name: "煤炭",
    wikiName: "Coal",
    sources: ["clint"],
    note: "用于熔炼、制作和部分机器。铁匠铺出售。",
  },
  {
    id: "copper-ore",
    type: "material",
    name: "铜矿石",
    wikiName: "Copper Ore",
    sources: ["clint"],
    note: "可与煤炭一起熔炼成铜锭。铁匠铺出售。",
  },
  {
    id: "iron-ore",
    type: "material",
    name: "铁矿石",
    wikiName: "Iron Ore",
    sources: ["clint"],
    note: "可与煤炭一起熔炼成铁锭。铁匠铺出售。",
  },
  {
    id: "gold-ore",
    type: "material",
    name: "金矿石",
    wikiName: "Gold Ore",
    sources: ["clint"],
    note: "可与煤炭一起熔炼成金锭。铁匠铺出售。",
  },
  {
    id: "hay",
    type: "material",
    name: "干草",
    wikiName: "Hay",
    sources: ["marnie"],
    note: "动物饲料。玛妮牧场出售。",
  },
  {
    id: "grass-starter",
    type: "supply",
    name: "草籽",
    wikiName: "Grass Starter",
    sources: ["pierre"],
    note: "种在农场上会长出草地，可供动物放牧。",
  },
  {
    id: "heater",
    type: "supply",
    name: "加热器",
    wikiName: "Heater",
    sources: ["marnie"],
    note: "放在畜棚或鸡舍内，冬天让动物更舒适。",
  },
  {
    id: "milk-pail",
    type: "supply",
    name: "挤奶桶",
    wikiName: "Milk Pail",
    sources: ["marnie"],
    note: "用于给奶牛和山羊挤奶。",
  },
  {
    id: "shears",
    type: "supply",
    name: "剪刀",
    wikiName: "Shears",
    sources: ["marnie"],
    note: "用于给绵羊剪羊毛。",
  },
  {
    id: "auto-grabber",
    type: "supply",
    name: "自动采集器",
    wikiName: "Auto-Grabber",
    sources: ["marnie"],
    note: "达到耕种10级后可购买，能自动收集部分动物产品。",
  },
  {
    id: "basic-fertilizer",
    type: "supply",
    name: "初级肥料",
    wikiName: "Basic Fertilizer",
    sources: ["pierre"],
    note: "提高作物品质，播种前或播种当天施用。",
  },
  {
    id: "quality-fertilizer",
    type: "supply",
    name: "高级肥料",
    wikiName: "Quality Fertilizer",
    sources: ["pierre"],
    note: "提高作物品质，比初级肥料效果更好。",
  },
  {
    id: "basic-retaining-soil",
    type: "supply",
    name: "初级保湿土壤",
    wikiName: "Basic Retaining Soil",
    sources: ["pierre"],
    note: "有机会让土壤隔天保持湿润。",
  },
  {
    id: "quality-retaining-soil",
    type: "supply",
    name: "高级保湿土壤",
    wikiName: "Quality Retaining Soil",
    sources: ["pierre"],
    note: "有较高机会让土壤隔天保持湿润。",
  },
  {
    id: "speed-gro",
    type: "supply",
    name: "生长激素",
    wikiName: "Speed-Gro",
    sources: ["pierre"],
    note: "加快作物生长速度。",
  },
  {
    id: "deluxe-speed-gro",
    type: "supply",
    name: "高级生长激素",
    wikiName: "Deluxe Speed-Gro",
    sources: ["pierre", "sandy"],
    note: "加快作物生长速度。皮埃尔和绿洲都可购买。",
  },
  {
    id: "rice",
    type: "grocery",
    name: "大米",
    wikiName: "Rice",
    sources: ["pierre"],
    note: "烹饪材料。皮埃尔杂货店出售。",
    edibility: 5,
  },
  {
    id: "wheat-flour",
    type: "grocery",
    name: "小麦粉",
    wikiName: "Wheat Flour",
    sources: ["pierre"],
    note: "烹饪材料。皮埃尔杂货店出售。",
  },
  {
    id: "sugar",
    type: "grocery",
    name: "糖",
    wikiName: "Sugar",
    sources: ["pierre"],
    note: "烹饪材料。皮埃尔杂货店出售。",
  },
  {
    id: "oil",
    type: "grocery",
    name: "油",
    wikiName: "Oil",
    sources: ["pierre"],
    note: "烹饪材料。皮埃尔杂货店出售。",
  },
  {
    id: "vinegar",
    type: "grocery",
    name: "醋",
    wikiName: "Vinegar",
    sources: ["pierre"],
    note: "烹饪材料。皮埃尔杂货店出售。",
  },
  {
    id: "bait",
    type: "supply",
    name: "鱼饵",
    wikiName: "Bait",
    sources: ["willy"],
    note: "钓鱼用品。装在鱼竿上可减少上钩等待时间。",
  },
  {
    id: "spinner",
    type: "supply",
    name: "旋式鱼饵",
    wikiName: "Spinner",
    sources: ["willy"],
    note: "钓具。可略微增加鱼咬钩速度。",
  },
  {
    id: "trap-bobber",
    type: "supply",
    name: "陷阱浮标",
    wikiName: "Trap Bobber",
    sources: ["willy"],
    note: "钓具。鱼未上钩时进度条下降更慢。",
  },
  {
    id: "coconut",
    type: "grocery",
    name: "椰子",
    wikiName: "Coconut",
    sources: ["sandy"],
    note: "绿洲商店出售，也可在沙漠采集。",
    edibility: 15,
  },
  {
    id: "cactus-fruit",
    type: "grocery",
    name: "仙人掌果子",
    wikiName: "Cactus Fruit",
    sources: ["sandy"],
    note: "绿洲商店出售，也可在沙漠采集。",
    edibility: 30,
  },
  {
    id: "void-egg",
    type: "grocery",
    name: "虚空蛋",
    wikiName: "Void Egg",
    sources: ["krobus"],
    note: "科罗布斯出售。可孵化虚空鸡，也可用于料理或送礼。",
  },
  {
    id: "void-essence",
    type: "material",
    name: "虚空精华",
    wikiName: "Void Essence",
    sources: ["krobus"],
    note: "怪物战利品与制作材料。科罗布斯出售。",
  },
  {
    id: "solar-essence",
    type: "material",
    name: "太阳精华",
    wikiName: "Solar Essence",
    sources: ["krobus"],
    note: "怪物战利品与制作材料。科罗布斯出售。",
  },
  {
    id: "slime",
    type: "material",
    name: "史莱姆泥",
    wikiName: "Slime",
    sources: ["krobus"],
    note: "制作材料。科罗布斯出售。",
  },
];

const items = [...seedItems, ...goodsItems];

const templates = [
  {
    id: "delivery",
    label: "快递确认",
    build: (item, quantity) => `【${selectedSourceLabel(item)}】订单确认
叮咚~亲爱的农场主，您订购的
「${item.name}×${quantity}」已到账！
发货来源：${selectedSourceLabel(item)}
${detailsBlock(item)}
售后须知：
1⃣️本店商品支持「意念签收」 下单即视为已放进背包
2⃣️如需实体包裹，请摇晃手机3次领取（成功率0.01%）
3⃣️如包裹在山谷里迷路，请携带咖啡前往客服柜台
祝您丰收！欢迎下次光临~`,
  },
  {
    id: "receipt",
    label: "商店小票",
    build: (item, quantity) => `【${selectedSourceLabel(item)}】购物小票
商品：${item.name}
数量：×${quantity}
购买来源：${sourceText(item)}
本次发货：${selectedSourceLabel(item)}
分类：${categoryLabels[item.type] ?? "商品"}
${compactDetailsBlock(item)}
收货人：亲爱的农场主

温馨提示：本店不对忘记浇水、背包满格、季节结束后一夜枯萎等情况负责。
欢迎下次光临！`,
  },
  {
    id: "cute",
    label: "丰收便签",
    build: (item, quantity) => `【今日快递便签】
${item.name}×${quantity} 已加入农场计划。

🛒 本次发货：${selectedSourceLabel(item)}
🏷️ 可购买于：${sourceText(item)}
${compactDetailsBlock(item)}

请保持背包留格，今天也很适合期待包裹送达。`,
  },
];

const state = {
  itemId: "tomato",
  category: "all",
  season: "all",
  source: "all",
  templateId: "delivery",
  selectedSources: {},
  page: 0,
  cart: [],
};

const itemGrid = document.querySelector("#crop-grid");
const searchInput = document.querySelector("#crop-search");
const quantityInput = document.querySelector("#quantity");
const minusQty = document.querySelector("#minus-qty");
const plusQty = document.querySelector("#plus-qty");
const selectedTitle = document.querySelector("#selected-title");
const selectedImage = document.querySelector("#selected-image");
const templateTabs = document.querySelector("#template-tabs");
const categoryTabs = document.querySelector("#category-tabs");
const sourceTabs = document.querySelector("#source-tabs");
const resultCount = document.querySelector("#result-count");
const appShell = document.querySelector(".app-shell");
const filtersToggle = document.querySelector("#filters-toggle");
const purchasePanel = document.querySelector("#purchase-panel");
const purchaseToggle = document.querySelector("#purchase-toggle");
const purchaseOptions = document.querySelector("#purchase-options");
const purchaseNote = document.querySelector("#purchase-note");
const prevPage = document.querySelector("#prev-page");
const nextPage = document.querySelector("#next-page");
const pageStatus = document.querySelector("#page-status");
const output = document.querySelector("#message-output");
const copyButton = document.querySelector("#copy-button");
const addCartButton = document.querySelector("#add-cart-button");
const resetButton = document.querySelector("#reset-button");
const copyStatus = document.querySelector("#copy-status");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const generateCartButton = document.querySelector("#generate-cart-button");
const clearCartButton = document.querySelector("#clear-cart-button");

function wikiFile(name) {
  return `https://stardewvalleywiki.com/Special:FilePath/${encodeURIComponent(name)}.png`;
}

function currentItem() {
  return items.find((item) => item.id === state.itemId) ?? items[0];
}

function currentTemplate() {
  return templates.find((template) => template.id === state.templateId) ?? templates[0];
}

function itemById(id) {
  return items.find((item) => item.id === id);
}

function selectedSource(item) {
  return state.selectedSources[item.id] ?? item.sources[0];
}

function selectedSourceLabel(item) {
  return sourceLabels[selectedSource(item)] ?? "星露谷快递";
}

function sourceText(item) {
  const sourceNames = item.sources.map((source) => sourceLabels[source] ?? source).join(" / ");
  return item.sourceNote ? `${sourceNames}（${item.sourceNote}）` : sourceNames;
}

function seasonText(item) {
  if (!item.seasons) return "不限季节";
  const names = {
    Spring: "春季",
    Summer: "夏季",
    Fall: "秋季",
    Winter: "冬季",
    GingerIsland: "姜岛全年",
  };
  return item.seasons.map((season) => names[season] ?? season).join(" / ");
}

function growthLine(item) {
  const note = item.growthNote ? `（${item.growthNote}）` : "";
  if (item.regrowthDays) {
    return `${item.growthDays}天${note}，成熟后还能继续结果每${item.regrowthDays}天一次（记得每天浇水哦~）`;
  }
  return `${item.growthDays}天${note}（记得每天浇水哦~）`;
}

function qualityStats(item) {
  if (item.edibility === undefined || item.edibility < 0) return null;
  const baseEnergy = item.edibility * 2.5;
  return [
    ["普通", 1],
    ["银星", 1.4],
    ["金星", 1.8],
    ["铱星", 2.6],
  ].map(([label, multiplier]) => {
    const energy = Math.floor(baseEnergy * multiplier);
    const health = Math.floor(energy * 0.45);
    return { label, energy, health };
  });
}

function effectLines(item) {
  const stats = qualityStats(item);
  if (!stats) return "不可食用或无恢复效果：❤️+0  ⚡+0";
  return stats.map((entry) => `${entry.label}：❤️+${entry.energy}  ⚡+${entry.health}`).join("\n");
}

function detailsBlock(item) {
  if (item.type === "seed") {
    return `（附赠种植小贴士+）
成熟周期：${growthLine(item)}
适宜季节：${seasonText(item)}
耕种经验：+${item.xp}点
作物效果：
${effectLines(item)}`;
  }

  return `（附赠商品小贴士+）
分类：${categoryLabels[item.type] ?? "商品"}
可购买于：${sourceText(item)}
用途说明：${item.note ?? "暂无额外说明"}
商品效果：
${effectLines(item)}`;
}

function compactDetailsBlock(item) {
  if (item.type === "seed") {
    return `🌱 成熟周期：${growthLine(item)}
🗓️ 适宜季节：${seasonText(item)}
⭐ 耕种经验：+${item.xp}点`;
  }
  return `📦 用途说明：${item.note ?? "暂无额外说明"}`;
}

function cartLineKey(itemId, source) {
  return `${itemId}::${source}`;
}

function cartTotals() {
  return state.cart.reduce(
    (totals, entry) => {
      totals.lines += 1;
      totals.quantity += entry.quantity;
      return totals;
    },
    { lines: 0, quantity: 0 },
  );
}

function addCurrentItemToCart() {
  const item = currentItem();
  const source = selectedSource(item);
  const quantity = normalizedQuantity();
  const key = cartLineKey(item.id, source);
  const existing = state.cart.find((entry) => cartLineKey(entry.itemId, entry.source) === key);

  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ itemId: item.id, source, quantity });
  }

  renderCart();
  copyStatus.textContent = "已加入购物车";
}

function updateCartQuantity(index, delta) {
  const entry = state.cart[index];
  if (!entry) return;
  entry.quantity += delta;
  if (entry.quantity <= 0) {
    state.cart.splice(index, 1);
  }
  renderCart();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  renderCart();
}

function generateCartReceipt() {
  if (!state.cart.length) {
    copyStatus.textContent = "购物车还是空的";
    return;
  }

  const totals = cartTotals();
  const lines = state.cart
    .map((entry, index) => {
      const item = itemById(entry.itemId);
      const source = sourceLabels[entry.source] ?? entry.source;
      return `${index + 1}. ${item?.name ?? "未知商品"}×${entry.quantity}\n   发货：${source}`;
    })
    .join("\n");

  output.value = `【星露谷快递】本次购物小票
亲爱的农场主，您的订单已打包完成：

${lines}

本次包裹共 ${totals.lines} 类商品，合计 ${totals.quantity} 件。
配送备注：如包裹未送达，请检查背包是否已满。
祝您丰收！欢迎下次光临~`;

  copyStatus.textContent = "已生成购物小票";
}

function normalizedQuantity() {
  const parsed = Number.parseInt(quantityInput.value, 10);
  if (Number.isNaN(parsed)) return 1;
  return Math.min(Math.max(parsed, 1), 999);
}

function setQuantity(nextValue) {
  quantityInput.value = String(Math.min(Math.max(nextValue, 1), 999));
  renderMessage();
}

function filteredItems() {
  const query = searchInput.value.trim().toLowerCase();
  return items.filter((item) => {
    const inCategory = state.category === "all" || item.type === state.category;
    const inSeason = state.season === "all" || item.seasons?.includes(state.season);
    const inSource = state.source === "all" || item.sources.includes(state.source);
    const text = `${item.name} ${item.cropName ?? ""} ${item.wikiName} ${sourceText(item)} ${item.note ?? ""}`.toLowerCase();
    return inCategory && inSeason && inSource && text.includes(query);
  });
}

function keepSelectionVisible() {
  const filtered = filteredItems();
  if (!filtered.length) return;
  if (!filtered.some((item) => item.id === state.itemId)) {
    state.itemId = filtered[0].id;
    state.page = 0;
    return;
  }
  const selectedIndex = filtered.findIndex((item) => item.id === state.itemId);
  state.page = Math.floor(selectedIndex / pageSize);
}

function pageItems(filtered) {
  const totalPages = Math.max(Math.ceil(filtered.length / pageSize), 1);
  state.page = Math.min(Math.max(state.page, 0), totalPages - 1);
  const start = state.page * pageSize;
  return {
    totalPages,
    start,
    items: filtered.slice(start, start + pageSize),
  };
}

function selectFirstOnCurrentPage() {
  const filtered = filteredItems();
  const page = pageItems(filtered);
  if (page.items.length) {
    state.itemId = page.items[0].id;
  }
}

function renderItems() {
  const filtered = filteredItems();
  const currentPage = pageItems(filtered);
  itemGrid.innerHTML = "";

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有找到这个商品";
    itemGrid.append(empty);
    resultCount.textContent = "0件";
    pageStatus.textContent = "0 / 0";
    prevPage.disabled = true;
    nextPage.disabled = true;
    return;
  }

  const fragment = document.createDocumentFragment();
  currentPage.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = `crop-card${item.id === state.itemId ? " is-active" : ""}`;

    const mainButton = document.createElement("button");
    mainButton.type = "button";
    mainButton.className = "item-main";
    mainButton.innerHTML = `
      <img src="${wikiFile(item.wikiName)}" alt="" loading="lazy" />
      <span class="crop-name">${item.name}</span>
      <span class="crop-season">${item.type === "seed" ? seasonText(item) : categoryLabels[item.type]}</span>
    `;
    mainButton.addEventListener("click", () => {
      state.itemId = item.id;
      render();
    });

    card.append(mainButton);
    fragment.append(card);
  });

  itemGrid.append(fragment);
  const pageStart = currentPage.start + 1;
  const pageEnd = Math.min(currentPage.start + currentPage.items.length, filtered.length);
  resultCount.textContent = `${filtered.length}件`;
  pageStatus.textContent = `${pageStart}-${pageEnd} / ${filtered.length}`;
  prevPage.disabled = state.page === 0;
  nextPage.disabled = state.page >= currentPage.totalPages - 1;
}

function renderFilterTabs(container, filters, activeValue, onClick) {
  container.innerHTML = "";
  filters.forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-tab${value === activeValue ? " is-active" : ""}`;
    button.textContent = label;
    button.addEventListener("click", () => onClick(value));
    container.append(button);
  });
}

function renderTemplates() {
  templateTabs.innerHTML = "";
  templates.forEach((template) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `template-tab${template.id === state.templateId ? " is-active" : ""}`;
    button.textContent = template.label;
    button.addEventListener("click", () => {
      state.templateId = template.id;
      render();
    });
    templateTabs.append(button);
  });
}

function renderMessage() {
  const item = currentItem();
  const template = currentTemplate();
  const quantity = normalizedQuantity();
  quantityInput.value = String(quantity);
  output.value = template.build(item, quantity);
}

function renderPurchaseOptions() {
  const item = currentItem();
  purchaseOptions.innerHTML = "";
  item.sources.forEach((source) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `purchase-option${selectedSource(item) === source ? " is-active" : ""}`;
    button.textContent = sourceLabels[source] ?? source;
    button.addEventListener("click", () => {
      state.selectedSources[item.id] = source;
      renderPurchaseOptions();
      renderMessage();
      copyStatus.textContent = "";
    });
    purchaseOptions.append(button);
  });
  purchaseNote.textContent = item.sourceNote ? item.sourceNote : `当前发货：${selectedSourceLabel(item)}`;
}

function renderCart() {
  const totals = cartTotals();
  cartCount.textContent = `${totals.quantity}件`;
  cartItems.innerHTML = "";

  if (!state.cart.length) {
    const empty = document.createElement("p");
    empty.className = "cart-empty";
    empty.textContent = "还没有商品。选好商品和购买方式后，点“加入购物车”。";
    cartItems.append(empty);
    generateCartButton.disabled = true;
    clearCartButton.disabled = true;
    return;
  }

  generateCartButton.disabled = false;
  clearCartButton.disabled = false;

  state.cart.forEach((entry, index) => {
    const item = itemById(entry.itemId);
    const card = document.createElement("article");
    card.className = "cart-item";
    card.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-title">${item?.name ?? "未知商品"}</div>
        <div class="cart-item-source">${sourceLabels[entry.source] ?? entry.source}</div>
        <div class="cart-item-controls">
          <button class="cart-step" type="button" data-cart-action="minus" data-cart-index="${index}">-</button>
          <span class="cart-qty">×${entry.quantity}</span>
          <button class="cart-step" type="button" data-cart-action="plus" data-cart-index="${index}">+</button>
        </div>
        <button class="cart-remove" type="button" data-cart-action="remove" data-cart-index="${index}">移除</button>
      </div>
      <div class="cart-item-sprite">
        <img src="${item ? wikiFile(item.wikiName) : ""}" alt="" loading="lazy" />
      </div>
    `;
    cartItems.append(card);
  });
}

function renderSelected() {
  const item = currentItem();
  selectedTitle.textContent = item.name;
  selectedImage.src = wikiFile(item.wikiName);
  selectedImage.alt = item.name;
}

function render() {
  renderItems();
  renderFilterTabs(categoryTabs, categoryFilters, state.category, (value) => {
    state.category = value;
    state.page = 0;
    keepSelectionVisible();
    render();
  });
  renderFilterTabs(sourceTabs, sourceFilters, state.source, (value) => {
    state.source = value;
    state.page = 0;
    keepSelectionVisible();
    render();
  });
  renderTemplates();
  renderSelected();
  renderPurchaseOptions();
  renderCart();
  renderMessage();
  copyStatus.textContent = "";
}

searchInput.addEventListener("input", () => {
  state.page = 0;
  keepSelectionVisible();
  render();
});

quantityInput.addEventListener("input", () => {
  renderMessage();
  copyStatus.textContent = "";
});

quantityInput.addEventListener("blur", () => {
  setQuantity(normalizedQuantity());
});

minusQty.addEventListener("click", () => {
  setQuantity(normalizedQuantity() - 1);
});

plusQty.addEventListener("click", () => {
  setQuantity(normalizedQuantity() + 1);
});

document.querySelectorAll(".season-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.season = button.dataset.season;
    state.page = 0;
    document.querySelectorAll(".season-tab").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    keepSelectionVisible();
    render();
  });
});

copyButton.addEventListener("click", async () => {
  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(output.value);
      copied = true;
    }
  } catch {
    copied = false;
  }

  if (!copied) {
    output.focus();
    output.select();
    copied = document.execCommand("copy");
  }

  copyStatus.textContent = copied ? "已复制" : "已选中，按 Ctrl+C";
});

addCartButton.addEventListener("click", addCurrentItemToCart);

resetButton.addEventListener("click", renderMessage);

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-cart-action]");
  if (!button) return;

  const index = Number.parseInt(button.dataset.cartIndex, 10);
  if (button.dataset.cartAction === "plus") {
    updateCartQuantity(index, 1);
  } else if (button.dataset.cartAction === "minus") {
    updateCartQuantity(index, -1);
  } else if (button.dataset.cartAction === "remove") {
    removeCartItem(index);
  }
});

generateCartButton.addEventListener("click", generateCartReceipt);

clearCartButton.addEventListener("click", () => {
  state.cart = [];
  renderCart();
  copyStatus.textContent = "购物车已清空";
});

prevPage.addEventListener("click", () => {
  state.page -= 1;
  selectFirstOnCurrentPage();
  render();
});

nextPage.addEventListener("click", () => {
  state.page += 1;
  selectFirstOnCurrentPage();
  render();
});

filtersToggle.addEventListener("click", () => {
  const collapsed = appShell.classList.toggle("filters-collapsed");
  filtersToggle.textContent = collapsed ? "‹" : "›";
  filtersToggle.setAttribute("aria-label", collapsed ? "展开筛选" : "收起筛选");
  filtersToggle.title = collapsed ? "展开筛选" : "收起筛选";
  filtersToggle.setAttribute("aria-expanded", String(!collapsed));
});

purchaseToggle.addEventListener("click", () => {
  const collapsed = purchasePanel.classList.toggle("purchase-collapsed");
  purchaseToggle.textContent = collapsed ? "›" : "‹";
  purchaseToggle.setAttribute("aria-label", collapsed ? "展开购买方式" : "收起购买方式");
  purchaseToggle.title = collapsed ? "展开购买方式" : "收起购买方式";
  purchaseToggle.setAttribute("aria-expanded", String(!collapsed));
  purchasePanel.setAttribute("aria-label", collapsed ? "购买方式已收起" : "购买方式");
});

render();
