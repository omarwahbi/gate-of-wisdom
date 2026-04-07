import fs from 'fs';
import path from 'path';

const enPath = path.resolve('dictionaries/en.json');
const arPath = path.resolve('dictionaries/ar.json');

const enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arJson = JSON.parse(fs.readFileSync(arPath, 'utf8'));

enJson.lectures = {
  hero: {
    title: "Expert Lectures & Seminars",
    subtitle: "Free Online Webinars: Your First Gateway to Specialized Consulting Insights"
  },
  intro: {
    paragraphs: [
      "At “GATE OF WISDOM CONSULTING ENGINEERS”, we believe in sharing knowledge as a first step towards building successful partnerships.",
      "Our lectures/webinars section is designed to be your primary source for valuable, free information on the latest challenges and opportunities in the business and engineering world.",
      "Join our experts in live online sessions where we deliver strategic insights, lessons learned, and initial tools on vital topics such as project management, performance efficiency, and market strategies.",
      "The result? You gain a deeper understanding of your area of interest, receive free downloadable materials, and most importantly: build the confidence and knowledge needed to make informed business decisions."
    ],
    features_intro: "Our lecture and training programs provide you with:",
    features: [
      { "title": "Specialized & Practical Knowledge", "description": "Covering CRM, Feasibility Studies, Performance Evaluation, HR, Marketing & Sales, Project Management, Market Studies, and Investment Environments." },
      { "title": "Insights Built on Data", "description": "A treasure trove of continuously updated statistics and data that help you understand reality and inform stakeholders." },
      { "title": "Development of Thinking Skills", "description": "Designed to encourage critical thinking, active listening, and building a strong professional network." },
      { "title": "Excellence & Leadership", "description": "Targeted at advanced educational levels, companies, and individuals interested in leadership in their fields." }
    ]
  },
  target_audience: {
    title: "Target Audience & Key Attractors",
    subtitle: "Who is this for?",
    intro: "Our lectures are designed for any individual or organization seeking specialized knowledge, practical expertise, and advanced insights in management, economics, and engineering.",
    ideal_audience_intro: "Our ideal audience includes:",
    audiences: [
      { "title": "Educational Institutions", "description": "Universities striving to enrich curricula with practical expertise for advanced students." },
      { "title": "Private & Public Companies", "description": "Entities aiming to train their employees and enhance competencies in project management, CRM, or data analysis." },
      { "title": "Professionals & Interested Individuals", "description": "Those seeking to develop skills, keep pace with developments, or build a strong professional network." },
      { "title": "Students & Recent Graduates", "description": "Searching for a competitive edge in the job market through specialized practical knowledge." },
      { "title": "Managers & Leaders", "description": "Professionals needing a deeper understanding of economic indicators or administrative strategies." },
      { "title": "Stakeholders & Investors", "description": "Those who require enlightenment regarding the country's economic reality to make safe, profitable decisions." }
    ]
  },
  guide: {
    title: "The Consulting Knowledge Hub Guide",
    subtitle: "Your Path to Excellence Starts Here",
    why_start_intro: "We believe that knowledge is the cornerstone of every successful investment. We have designed our Live Webinar Program to be your primary gateway to deeply understanding our engineering and consulting services before taking any executive steps.",
    points: [
      { "title": "Explore Solutions", "desc": "Gain insight into the core of our services and how they address real-world challenges in the Iraqi market." },
      { "title": "Expert Insights", "desc": "Our lectures are not theoretical; they are a distillation of our field expertise since 2004, provided to help you make decisions with certainty." },
      { "title": "Trial Before Investment", "desc": "The webinar offers a chance to evaluate our methodology, ask complex questions, and receive immediate operational answers." }
    ],
    what_is_next: "The lecture is just the starting point. Through it, you will identify areas where your project requires deeper intervention (through Specialized Training Courses or Interactive Workshops).",
    gift: "Because we value your time, every participant receives a 'Free Toolkit' (Actionable templates, checklists, or draft plans) to serve as your first practical reference."
  },
  topics: {
    title: "Webinar Titles and Structure",
    subtitle: "A Preview of Our Advanced Strategic Sessions",
    registration_note: "In the Registration Page for each webinar, you will find: 'You will learn in this session...', the Agenda, 'Attendance Gift', and a detailed schedule to book.",
    items: [
      {
        "service": "Project Management",
        "title": "From Concept to Launch: How to Avoid Delays and Budget Overruns in Construction and Industrial Projects?",
        "structure": "The Hook, Identifying the Pain Points, The Engineering Methodology Solution, Quick Case Study, The Irresistible Offer."
      },
      {
        "service": "Market Study",
        "title": "Entering the Iraqi Market 2026: How to Discover Market Gaps Before Your Competitors?",
        "structure": "The Hook, Diagnosing 'Market Blindness', The Data Methodology Solution, Quick Case Study, The Closing."
      },
      {
        "service": "Feasibility Studies",
        "title": "Investment Certainty: Transforming Feasibility Data into Tangible Profits?",
        "structure": "The Hook, Diagnosing 'Fatal Errors', The Quad-Feasibility Framework, Gamble vs. Calculated Decision, The Closing."
      },
      {
        "service": "Performance Efficiency",
        "title": "Silent Profit Leakage: How to Detect Technical and Financial Waste in Your Operations?",
        "structure": "The Hook, Diagnosing the Symptoms, The Strategic Scalpel, 'Before & After' Case Study, The Closing."
      },
      {
        "service": "Human Resources",
        "title": "Institutional Engineering: Moving from People-Based Trust to KPI-Based Management?",
        "structure": "The Hook, Diagnosing 'Individual Chaos', The Institutional Engineering Principle, Transition to Discipline Case, The Closing."
      },
      {
        "service": "Marketing & Sales",
        "title": "Growth Engineering: Why Sales Fail Without a Strategic Marketing Framework?",
        "structure": "The Hook, Diagnosing 'Operational Chaos', The Growth Engineering System, Selling Products vs Solutions, The Closing."
      },
      {
        "service": "CRM System",
        "title": "Relationship Automation: How CRM Prevents Lost Deals and Turns Customers into Lasting Assets?",
        "structure": "The Hook, Diagnosing 'Digital Fragmentation', The Automation Engine, Iraqi Market Platform Comparison, The Closing."
      }
    ]
  },
  free_materials: {
    title: "What will attendees receive?",
    subtitle: "Free exclusive material to encourage rapid strategic implementation.",
    items: [
      {
        "title": "The Webinar Toolkit",
        "details": [
          "Ready-to-use Templates: 'Flexible Organizational Chart' or 'Marketing Plan Draft'.",
          "Cheat Sheets: One-page summaries of complex terminology.",
          "Mind Maps: Visual roadmaps executing specific projects from A to Z."
        ]
      },
      {
        "title": "Exclusive Checklists",
        "details": [
          "The Digital Transformation Readiness Checklist.",
          "15 Critical Points to Verify Before Signing a Machinery Supply Contract."
        ]
      },
      {
        "title": "Flash Data Reports",
        "details": [
          "Infographics: 'Iraq Economic Indicators Summary 2025'.",
          "Quick Comparison Matrices: Comparing top CRM platforms."
        ]
      },
      {
        "title": "Micro-Consultation",
        "details": [
          "The Promise: 'The first 10 registrants will receive a free 15-minute preliminary assessment of their projects after the webinar.'"
        ]
      }
    ]
  },
  cta: {
    title: "Your Next Project Deserves Certainty.",
    description: "Book your seat in our upcoming webinars and take the first step towards engineering growth for your institution.",
    button: "Book a Free Initial Consultation"
  }
};

arJson.lectures = {
  hero: {
    title: "المحاضرات",
    subtitle: "محاضرات مجانية عبر الإنترنت: بوابتك الأولى نحو رؤى استشارية متخصصة"
  },
  intro: {
    paragraphs: [
      "في 'بوابة الحكمة للإستشارات الهندسية'، نؤمن بمشاركة المعرفة كخطوة أولى نحو بناء شراكات ناجحة.",
      "قسم المحاضرات لدينا مصمم ليكون مصدرك الأول للمعلومات القيمة والمجانية حول أحدث التحديات والفرص في عالم الأعمال والهندسة.",
      "انضم إلى خبرائنا في جلسات مباشرة عبر الإنترنت (Webinars) حيث نقدم رؤى استراتيجية، دروس مستفادة، وأدوات أولية في مواضيع حيوية مثل إدارة المشاريع، كفاءة الأداء، واستراتيجيات السوق.",
      "النتيجة؟ تكتسب فهماً أعمق للمجال الذي يهمك، تحصل على مواد مجانية قابلة للتنزيل، والأهم: تبني الثقة والمعرفة اللازمة لاتخاذ قرارات عمل مستنيرة."
    ],
    features_intro: "برامجنا التدريبية والمحاضرات تقدم لكم:",
    features: [
      { "title": "معرفة متخصصة وعملية", "description": "تغطي مواضيع CRM، دراسات الجدوى، تقييم كفاءة الأداء، الموارد البشرية، التسويق والمبيعات، وإدارة المشاريع." },
      { "title": "رؤى مبنية على البيانات والإحصائيات", "description": "نقدم لكم كنزاً من الإحصائيات المحدثة باستمرار والتي تساعدكم في فهم الواقع وتنوير أصحاب المصلحة." },
      { "title": "تطوير مهارات التفكير", "description": "تصميم المحاضرات لتشجيع التفكير النقدي والاستماع الفعال وبناء شبكات مهنية." },
      { "title": "التميز والريادة", "description": "برامج مصممة للمراحل التعليمية المتقدمة والشركات والأفراد المهتمين بالتميز في مجالاتهم." }
    ]
  },
  target_audience: {
    title: "جمهورنا المستهدف",
    subtitle: "لمن هذه المحاضرات؟",
    intro: "أي فرد أو مؤسسة تبحث عن المعرفة المتخصصة والخبرة العملية والرؤى المتقدمة التي تتجاوز المعلومات الأكاديمية.",
    ideal_audience_intro: "يشمل جمهورنا المستهدف:",
    audiences: [
      { "title": "المؤسسات التعليمية", "description": "التي تسعى لإثراء مناهجها بخبرات عملية من سوق العمل لطلاب المراحل المتقدمة." },
      { "title": "الشركات والمؤسسات", "description": "التي تهدف إلى تدريب موظفيها ورفع كفاءاتهم في إدارة المشاريع، CRM، وغيرها." },
      { "title": "المهنيون", "description": "الذين يسعون لتطوير مهاراتهم، مواكبة المستجدات، أو بناء شبكة علاقات قوية." },
      { "title": "الطلاب والخريجون الجدد", "description": "الباحثون عن ميزة تنافسية في سوق العمل من خلال المعرفة العملية." },
      { "title": "المديرون والقادة", "description": "الذين يحتاجون إلى فهم أعمق للمؤشرات لبناء قرارات مستنيرة." },
      { "title": "أصحاب المصلحة والمستثمرون", "description": "الذين يحتاجون إلى تنوير حول الواقع الاقتصادي والاستثماري لاتخاذ قرارات آمنة." }
    ]
  },
  guide: {
    title: "دليل منصة المعرفة الاستشارية",
    subtitle: "رحلتك نحو التميز تبدأ من هنا",
    why_start_intro: "نحن نؤمن بأن المعرفة هي حجر الزاوية لكل قرار استثماري ناجح. لذا، صممنا برنامج المحاضرات ليكون بوابتك الأولى لفهم أبعاد خدماتنا قبل البدء بأي خطوة تنفيذية.",
    points: [
      { "title": "استكشاف الحلول", "desc": "التعرف على جوهر خدماتنا وكيف تعالج تحديات السوق العراقي الواقعية." },
      { "title": "رؤية الخبير", "desc": "محاضراتنا ليست تنظيراً، بل استخلاص لخبرات ميدانية ممتدة نضعها لتتخذ قراراتك بيقين." },
      { "title": "التجربة قبل الاستثمار", "desc": "المحاضرة تمنحك فرصة طرح أسئلتك المعقدة والحصول على إجابات هندسية وإدارية فورية." }
    ],
    what_is_next: "ماذا بعد المحاضرات؟ ستكتشف المساحات التي يحتاج فيها مشروعك إلى تدخل أعمق عبر دوراتنا أو ورش العمل التفاعلية.",
    gift: "لأننا نقدر وقتك، يحصل كل مشارك في محاضراتنا على 'حقيبة أدوات مجانية' لتكون مرجعك العملي الأول."
  },
  topics: {
    title: "عناوين وهيكلية المحاضرات",
    subtitle: "لمحة عن جلساتنا المعرفية المتقدمة",
    registration_note: "في صفحة التسجيل (Landing Page) سيجد المتدرب: 'سوف تتعلم في هذه الجلسة..' والمنهاج وتواريخ الحجز التفصيلية.",
    items: [
      {
        "service": "إدارة المشاريع",
        "title": "من الفكرة إلى الإطلاق: كيف تتجنب التأخير وتجاوز الميزانية بناءً على أسس هندسية؟",
        "structure": "نقاط الضعف (تشخيص الألم)، استعراض الحل، دراسة حالة، ثم العرض."
      },
      {
        "service": "دراسة السوق",
        "title": "اختراق السوق العراقي 2026: كيف تكتشف الفجوات التسويقية قبل منافسيك؟",
        "structure": "تشخيص العمى السوقي، منهجية البيانات، دراسة حالة سريعة للمنافسين."
      },
      {
        "service": "دراسات الجدوى",
        "title": "يقين الاستثمار: كيف تحول أرقام دراسة الجدوى إلى واقع ربحي ملموس؟",
        "structure": "تشخيص الأخطاء القاتلة، هندسة الجدوى الرباعية، الفرق بين المغامرة والقرار المدروس."
      },
      {
        "service": "تقييم كفاءة الأداء",
        "title": "التسرب الصامت للأرباح: كيف تكتشف الهدر الفني والمالي في التشغيل؟",
        "structure": "تشخيص اعراض ضعف الكفاءة، المشرط الاستراتيجي للحل، مقياس قبل وبعد."
      },
      {
        "service": "الموارد البشرية",
        "title": "هندسة المؤسسة: كيف تنتقل من إدارة الأفراد بالثقة إلى مؤشرات (KPIs)؟",
        "structure": "فوضى الأفراد، مبدأ الهندسة المؤسسية، التحول من الفوضى للانضباط."
      },
      {
        "service": "التسويق والمبيعات",
        "title": "هندسة النمو: لماذا تفشل المبيعات في غياب الاستراتيجية التسويقية؟",
        "structure": "الفوضى التشغيلية، منظومة النمو، الفرق بين بيع المنتج وبيع الحل."
      },
      {
        "service": "علاقات الزبائن (CRM)",
        "title": "أتمتة العلاقات: كيف يمنع النظام ضياع صفقاتك ويصنع ولاء الزبون؟",
        "structure": "الشتات الرقمي، محرك الأتمتة، مقارنة واقعية للمنصات داخل العراق."
      }
    ]
  },
  free_materials: {
    title: "ماذا سيحصل الجمهور المستهدف؟",
    subtitle: "مواد مجانية تشجع على التسجيل والمبادرة.",
    items: [
      {
        "title": "مجموعة أدوات المحاضرة",
        "details": [
          "قالب جاهز: 'نموذج هيكل تنظيمي مرن' أو 'مسودة خطة'.",
          "ورقة عمل: تلخيص أهم مصطلحات المجال المختص.",
          "خريطة ذهنية: توضح خطوات التنفيذ من الألف للياء."
        ]
      },
      {
        "title": "قوائم التدقيق الحصرية",
        "details": [
          "قائمة جاهزية التحول الرقمي.",
          "15 نقطة يجب التأكد منها قبل توقيع عقود التوريد."
        ]
      },
      {
        "title": "تقارير البيانات المختصرة",
        "details": [
          "إنفوجرافيك: ملخص مؤشرات الاقتصاد للعراق 2025.",
          "مقارنة سريعة: أفضل منصات الـ CRM في السوق."
        ]
      },
      {
        "title": "التسجيل في الاستشارة المصغرة",
        "details": [
          "الوعد: أول 10 مسجلين سيحصلون على تقييم أولي مجاني למدة 15 دقيقة بعد المحاضرة."
        ]
      }
    ]
  },
  cta: {
    title: "مشروعك القادم يستحق اليقين",
    description: "تواصل مع خبرائنا لمناقشة كيف يمكن لهذه الأرقام أن تؤثر على استراتيجيتكم الاستثمارية.",
    button: "احجز استشارة أولية مجانية"
  }
};

fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2));
fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2));

console.log("Lectures dictionary updated successfully");
