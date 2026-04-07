import fs from 'fs';
import path from 'path';

const enPath = path.resolve('dictionaries/en.json');
const arPath = path.resolve('dictionaries/ar.json');

const enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arJson = JSON.parse(fs.readFileSync(arPath, 'utf8'));

enJson.bi_center = {
  hero: {
    title: "Business Intelligence Center",
    subtitle: "Your Gateway to Real Opportunities in Iraq"
  },
  intro: {
    heading: "Business Intelligence & Investment Hub",
    paragraphs: [
      "In a dynamic economic environment like the Iraqi market, guesswork or reliance on superficial information is no longer sufficient. At “Gate of Wisdom Consulting Engineers”, we offer you a comprehensive Business Intelligence Center, designed to provide investors with accurate data, in-depth analysis, and strategic insights that protect capital and ensure sustainable growth.",
      "This hub is your tool to transition from the 'Investment Gamble' stage to the 'Calculated Decision' stage, and includes specialized modules in Iraq Economic Insights, Iraq Investment Study & International Indicators & Rankings."
    ]
  },
  categories: [
    {
      title: "Iraq Economic Insights",
      slug: "economic-insights",
      description: "Deep analytical coverage of Iraq's macroeconomic trends, GDP growth engines, and state fiscal policies.",
      icon: "LineChart"
    },
    {
      title: "Iraq Investment Study",
      slug: "investment-study",
      description: "Strategic assessments of high-yield sectors, local regulatory frameworks, and market entry roadmaps.",
      icon: "Landmark"
    },
    {
      title: "International Indicators & Rankings",
      slug: "international-indicators",
      description: "Tracking Iraq's position across global indices including ease of doing business, transparency, and risk metrics.",
      icon: "Globe"
    }
  ]
};

arJson.bi_center = {
  hero: {
    title: "مركز ذكاء الأعمال",
    subtitle: "نافذتك على الفرص الحقيقية في العراق"
  },
  intro: {
    heading: "مركز ذكاء الأعمال والاستثمار",
    paragraphs: [
      "في بيئة اقتصادية ديناميكية كالسوق العراقي، لم يعد التخمين أو الاعتماد على المعلومات السطحية كافياً. نحن في \"بوابة الحكمة للإستشارات الهندسية\" نقدم لك مركزاً متكاملاً لـ ذكاء الأعمال، مصمماً لتزويد المستثمرين بالبيانات الدقيقة، التحليلات المعمقة، والرؤى الاستراتيجية التي تحمي رؤوس الأموال وتضمن النمو المستدام.",
      "هذا المركز هو أداتك للعبور من مرحلة \"المغامرة الاستثمارية\" إلى مرحلة \"القرار المدروس\"، ويشمل محاور متخصصة في دراسة اقتصاد العراق، دراسة الاستثمار في العراق، ودراسة المؤشرات والتصنيفات الدولية."
    ]
  },
  categories: [
    {
      title: "دراسة اقتصاد العراق",
      slug: "economic-insights",
      description: "تغطية تحليلية عميقة لاتجاهات الاقتصاد الكلي في العراق، محركات نمو الناتج المحلي، والسياسات المالية للدولة.",
      icon: "LineChart"
    },
    {
      title: "دراسة الإستثمار في العراق",
      slug: "investment-study",
      description: "تقييمات استراتيجية للقطاعات ذات العوائد المرتفعة، الأطر التنظيمية المحلية، وخرائط طريق الدخول للسوق.",
      icon: "Landmark"
    },
    {
      title: "دراسة المؤشرات والتصنيفات الدولية",
      slug: "international-indicators",
      description: "تتبع موقع العراق عبر المؤشرات العالمية بما في ذلك سهولة ممارسة الأعمال، الشفافية، ومقاييس المخاطر.",
      icon: "Globe"
    }
  ]
};

fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2));
fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2));

console.log("BI Center dictionaries updated successfully");
