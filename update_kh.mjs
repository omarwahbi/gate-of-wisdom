import fs from 'fs';
import path from 'path';

const enPath = path.resolve('dictionaries/en.json');
const arPath = path.resolve('dictionaries/ar.json');

const enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arJson = JSON.parse(fs.readFileSync(arPath, 'utf8'));

enJson.knowledge_hub = {
  hero: {
    title: "Knowledge Hub",
    subtitle: "Empowering investors and leaders with field-tested scientific tools and methodologies."
  },
  intro: {
    heading: "The Consulting Knowledge Hub: Where Engineering Expertise Meets Managerial Vision",
    paragraphs: [
      "At “Gate of Wisdom Consulting Engineers”, we believe that knowledge is the most powerful tool for navigating market volatility. Therefore, we didn't just stop at offering consultations; we established this Hub to be a living reference aimed at empowering investors and leaders with scientific tools and methodologies—field-tested in the Iraqi market since 2004.",
      "This is not just an educational platform; it is your gateway to transition from (Crisis Management) to (Growth Engineering). Through our interactive webinars, specialized courses, and field workshops, we deliver the (Essence of Consulting Wisdom) to co-create an institutional future built on certainty and tangible results."
    ]
  },
  categories: [
    {
      title: "Lectures",
      slug: "lectures",
      description: "Gain rapid insights from expert-led sessions on market dynamics, engineering solutions, and strategic management.",
      icon: "Video"
    },
    {
      title: "Training Courses",
      slug: "courses",
      description: "In-depth, structured curriculums designed to elevate your team's technical and managerial competencies.",
      icon: "BookOpen"
    },
    {
      title: "Interactive Workshops",
      slug: "workshops",
      description: "Hands-on, collaborative sessions aimed at applying advanced consulting methodologies directly to your operations.",
      icon: "Users"
    }
  ]
};

arJson.knowledge_hub = {
  hero: {
    title: "منصة المعرفة الاستشارية",
    subtitle: "تمكين المستثمرين والقادة بالأدوات والمنهجيات العلمية التي تم اختبارها ميدانياً."
  },
  intro: {
    heading: "منصة المعرفة الاستشارية: حيث تلتقي الخبرة الهندسية بالرؤية الإدارية",
    paragraphs: [
      "في 'بوابة الحكمة للإستشارات الهندسية'، نؤمن بأن المعرفة هي الأداة الأقوى لمواجهة متغيرات السوق. لذا، لم نكتفي بتقديم الاستشارات، بل أنشأنا هذه المنصة لتكون مرجعاً حياً يهدف إلى تمكين المستثمرين والقادة بالأدوات والمنهجيات العلمية التي تم اختبارها ميدانياً في السوق العراقي منذ عام 2004.",
      "إنها ليست مجرد منصة تعليمية، بل هي بوابتك للعبور من (إدارة الأزمات) إلى (هندسة النمو). من خلال محاضراتنا التفاعلية، دوراتنا التخصصية، وورش العمل الميدانية، نحن ننقل إليك (خلاصة الحكمة الاستشارية) لنصنع معك مستقبلاً مؤسسياً قائماً على اليقين والنتائج الملموسة."
    ]
  },
  categories: [
    {
      title: "المحاضرات",
      slug: "lectures",
      description: "اكتسب رؤى سريعة من جلسات يقودها خبراء حول ديناميكيات السوق والحلول الهندسية والإدارة الاستراتيجية.",
      icon: "Video"
    },
    {
      title: "الدورات التدريبية",
      slug: "courses",
      description: "مناهج مهيكلة ومتعمقة مصممة للارتقاء بالكفاءات الفنية والإدارية لفريقك.",
      icon: "BookOpen"
    },
    {
      title: "ورش العمل التفاعلية",
      slug: "workshops",
      description: "جلسات عملية وتطبيقية تهدف إلى استخدام منهجيات استشارية متقدمة مباشرة في عملياتك.",
      icon: "Users"
    }
  ]
};

fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2));
fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2));

console.log("Knowledge Hub dictionaries updated successfully");
