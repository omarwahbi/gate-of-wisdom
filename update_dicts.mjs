import fs from 'fs';
import path from 'path';

const enPath = path.resolve('dictionaries/en.json');
const arPath = path.resolve('dictionaries/ar.json');

const enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arJson = JSON.parse(fs.readFileSync(arPath, 'utf8'));

const enDict = {
  hero: {
    title: "Market Studies",
    subtitle: "Precise Insights to Stay Ahead of the Competition & Uncover Opportunities"
  },
  intro: {
    paragraphs: [
      "Before entering any market or launching a new product, you need more than just guesswork; you need reliable data.",
      "At “GATE OF WISDOM CONSULTING ENGINEERS”, we provide you with precise market insights built on a comprehensive analysis of market dynamics, consumer behavior, and competitors.",
      "Our mission is to help you uncover hidden opportunities, mitigate risks, and develop effective marketing strategies. The result? You make informed investment decisions, meet your customers' immediate needs, and secure a leadership position in the market."
    ],
    services_intro: "Our market study services ensure you receive:",
    services: [
      {
        "title": "Precise Quantitative Market Analysis",
        "description": "Estimating market size, annual growth rate, future demand forecasts, and analyzing the surplus/deficit between local production and imports."
      },
      {
        "title": "Understanding Consumer Behavior & Competitors",
        "description": "A study of consumer behavior and preferences, identification of market gaps, and a comprehensive survey of competitors and their market shares."
      },
      {
        "title": "Comprehensive SWOT Analysis",
        "description": "A thorough analysis of success factors (price, quality, promotion, location, logistics) and the identification of opportunities and threats."
      },
      {
        "title": "Actionable Strategic Recommendations",
        "description": "Providing clear conclusions and recommendations to enhance your capabilities to meet local demand and ensure leadership."
      }
    ]
  },
  target_audience: {
    title: "Target Audience & Key Attractors",
    subtitle: "Who is this for?",
    intro: "Our service is designed for existing production and service companies, as well as new investors and entrepreneurs planning to enter a specific market. All require reliable, data-driven information to understand the market environment they operate in or plan to enter.",
    ideal_audience_intro: "Our ideal audience includes:",
    audiences: [
      { "title": "Companies Planning New Launches", "description": "Entities needing to verify market gaps, understand consumer preferences, and estimate future demand for new products or services." },
      { "title": "Companies Facing Competitive Challenges", "description": "Organizations requiring a detailed analysis of competitors' strengths and weaknesses to develop new pricing and promotion strategies." },
      { "title": "Companies Seeking Market Positioning", "description": "Firms needing to evaluate their current market share and relative position against competitors." },
      { "title": "New Investors", "description": "Individuals who require a reliable market study as part of a project feasibility study to assess investment viability." },
      { "title": "Company Owners & General Managers", "description": "Leaders looking for growth opportunities and making strategic decisions based on market facts." },
      { "title": "Marketing & Sales Managers", "description": "Professionals needing accurate data on consumer behavior and market size to design effective marketing campaigns." },
      { "title": "Business Development Managers", "description": "Individuals looking for annual growth rates and future demand forecasts to define expansion paths." }
    ]
  },
  cases: {
    title: "Real-World Stories",
    subtitle: "Evidence that embodies the transition of strategy from paper to the field.",
    items: [
      {
        "title": "Case Study: Aramex",
        "subtitle": "The Missing Address Challenge: How Innovative Local Solutions defeated logistics giants.",
        "issue": "When global courier giants like DHL and FedEx entered the Middle East, they encountered a significant challenge: the absence of precise postal addressing systems in many Arab cities.",
        "analysis": [
          "Aramex's Response: Instead of waiting for governments to regulate addressing systems, Aramex conducted an in-depth, on-the-ground market study. They innovated localized solutions such as \"Cash on Delivery\" and developed a deep understanding of narrow alleyways and unnamed streets."
        ],
        "lesson": "Excellence does not stem from merely replicating Western models, but from engineering and adapting logistical solutions to fit the local reality"
      },
      {
        "title": "Case Study: Vertical Housing Complexes in Iraq",
        "subtitle": "When Analysis is Absent, Projects Fail",
        "issue": "In recent years, high-cost vertical housing projects have proliferated in Iraqi city centers, yet many have struggled to achieve their social and economic goals.",
        "analysis": [
          "Ignoring Purchasing Power: These projects targeted a luxury segment while the real market demand lies in affordable housing.",
          "Infrastructure Strain: Lack of technical and environmental feasibility studies turned these complexes into burdens on electricity, water, and traffic networks.",
          "Planning Chaos: Investing in the wrong locations without integrated urban analysis led to unsustainable outcomes."
        ],
        "lesson": "The primary lesson is that building \"luxury\" units in a market starving for \"affordable\" housing is a strategic error. It is vital to conduct an Affordability Analysis to ensure the end product meets actual market demand. At “Gate of Wisdom Consulting Engineers”, we believe that building walls is easy, but building sustainable projects requires market and technical feasibility studies that ensure social acceptance and investment success."
      }
    ]
  },
  checklist: {
    title: "The Market Entry Readiness Checklist",
    headers: ["Phase", "Questions", "Yes", "No"],
    items: [
      { "phase": "Market & Consumer Analysis", "question": "Do you have reliable, up-to-date data on the number of potential customers in your target geographical area?" },
      { "phase": "Market & Consumer Analysis", "question": "Have you precisely defined the \"Competitive Advantage\" that makes customers choose you over existing rivals?" },
      { "phase": "Market & Consumer Analysis", "question": "Do you know the exact \"average spending\" of your target customer on the service/product you will offer?" },
      { "phase": "Market & Consumer Analysis", "question": "Have you mapped your \"Ideal Buyer Persona,\" including their purchasing motives and pain points?" },
      { "phase": "Competition & Distribution", "question": "Have you conducted a comprehensive analysis of the risks of new competitors entering the market in the next two years?" },
      { "phase": "Competition & Distribution", "question": "Is your pricing strategy aligned with the real purchasing power of the current market?" },
      { "phase": "Competition & Distribution", "question": "Have you identified the optimal distribution channels (retail, wholesale, online) to ensure smooth product flow?" },
      { "phase": "Competition & Distribution", "question": "Do you have a clear plan for navigating the logistical or legal barriers in the local market?" }
    ]
  },
  market_entry_guide: {
    title: "Market Entry Guide: How to Decode Opportunities and Risks Before Launching Your Project?",
    phases: [
      {
        title: "Market Size & Opportunity Analysis Phase",
        points: [
          {"title": "Target Market Identification", "desc": "Distinguishing between Total Addressable Market (TAM) and Serviceable Obtainable Market (SOM)."},
          {"title": "Trend Analysis", "desc": "Monitoring economic and social variables impacting purchasing power."},
          {"title": "Market Gaps", "desc": "Discovering unmet needs that your project can strategically fulfill."}
        ]
      },
      {
        title: "Competitor Dissection",
        points: [
          {"title": "Competition Mapping", "desc": "Identifying direct and indirect competitors within the landscape."},
          {"title": "SWOT Analysis", "desc": "Understanding competitors' pricing and distribution strategies."},
          {"title": "Market Share", "desc": "Estimating the weight of current rivals and strategizing how to capture a market foothold."}
        ]
      },
      {
        title: "Understanding Consumer Behavior",
        points: [
          {"title": "Buyer Persona Mapping", "desc": "Defining purchasing motives, habits, and the pain points faced by the customer."},
          {"title": "Customer Journey", "desc": "Tracking the path from product awareness to the final purchase decision."},
          {"title": "Response Testing", "desc": "Measuring target audience acceptance of proposed pricing and features."}
        ]
      },
      {
        title: "Distribution Channels & Supply Chain Analysis",
        points: [
          {"title": "Market Access", "desc": "Identifying optimal channels (Retail, Wholesale, or E-commerce platforms)."},
          {"title": "Entry Barriers", "desc": "Studying logistical or legal challenges that may hinder product flow."}
        ]
      }
    ]
  },
  cta: {
    title: "Your Next Project Deserves Certainty.",
    description: "Our services do not end with the delivery of a study. We don't just hand you a report and leave; instead, we conduct a (Final Simulation Session) with you to discuss all financial and technical scenarios, ensuring you understand exactly where every Dinar will be spent and how it will return.",
    button: "Book a Free Initial Consultation"
  }
};

const arDict = {
  hero: {
    title: "دراسة السوق",
    subtitle: "رؤى دقيقة لاستباق المنافسة واكتشاف الفرص"
  },
  intro: {
    paragraphs: [
      "قبل دخول أي سوق أو إطلاق منتج جديد، تحتاج إلى أكثر من مجرد التخمين؛ تحتاج إلى بيانات موثوقة.",
      "نحن في \"بوابة الحكمة للإستشارات الهندسية\" نقدم لك رؤى سوقية دقيقة مبنية على تحليل شامل لديناميكيات السوق، سلوك المستهلكين، والمنافسين.",
      "مهمتنا هي مساعدتك في اكتشاف الفرص المخفية، تقليل المخاطر، وتطوير استراتيجيات تسويق فعالة. النتيجة؟ تتخذ قرارات استثمارية مدروسة، تلبي احتياجات زبائنك المباشرة، وتضمن لنفسك موقعاً ريادياً في السوق."
    ],
    services_intro: "خدماتنا في دراسات السوق تضمن لكم:",
    services: [
      {
        "title": "تحليل كمي دقيق للسوق",
        "description": "تقدير حجم السوق، معدل نموه السنوي، توقعات الطلب المستقبلية، تحليل الفائض والعجز بين الإنتاج والاستيراد."
      },
      {
        "title": "فهم سلوك المستهلك والمنافسين",
        "description": "دراسة سلوك وتفضيلات المستهلكين، تحديد الفجوة السوقية، واستطلاع شامل للمنافسين وحصصهم السوقية."
      },
      {
        "title": "تقييم شامل لنقاط القوة والضعف",
        "description": "تحليل شامل لعوامل النجاح (السعر، الجودة، الترويج، الموقع، اللوجستيات) وتحديد الفرص والتهديدات."
      },
      {
        "title": "توصيات استراتيجية قابلة للتنفيذ",
        "description": "تقديم استنتاجات وتوصيات واضحة لرفع قدراتكم لتلبية الطلب المحلي وضمان الريادة."
      }
    ]
  },
  target_audience: {
    title: "جمهورنا المستهدف",
    subtitle: "لمن هذه الخدمة؟",
    intro: "الشركات الإنتاجية والخدمية القائمة، بالإضافة إلى المستثمرين ورواد الأعمال الجدد الذين يخططون لدخول سوق معين. جميعهم يحتاجون إلى معلومات موثوقة ومبنية على البيانات لفهم بيئة السوق التي يعملون فيها أو يخططون لدخولها.",
    ideal_audience_intro: "يشمل جمهورنا المستهدف:",
    audiences: [
      { "title": "الشركات التي تخطط لإطلاق منتجات أو خدمات جديدة", "description": "والتي تحتاج إلى التحقق من وجود فجوة سوقية، وفهم تفضيلات المستهلكين، وتقدير الطلب المستقبلي." },
      { "title": "الشركات التي تواجه تحديات تنافسية", "description": "والتي تحتاج إلى تحليل مفصل لنقاط قوة وضعف المنافسين لوضع استراتيجيات تسعير وترويج جديدة." },
      { "title": "الشركات التي تسعى لتحديد موقعها في السوق", "description": "والتي تحتاج إلى تقييم حصتها السوقية الحالية وموقعها النسبي مقابل المنافسين." },
      { "title": "المستثمرون الجدد", "description": "الذين يحتاجون إلى دراسة سوق موثوقة كجزء من دراسة جدوى المشروع لتقييم جدوى الاستثمار." },
      { "title": "أصحاب الشركات والمديرون العامون", "description": "الذين يبحثون عن فرص النمو واتخاذ قرارات استراتيجية مبنية على حقائق السوق." },
      { "title": "مديرو التسويق والمبيعات", "description": "الذين يحتاجون إلى بيانات دقيقة حول سلوك المستهلك وحجم السوق لتصميم حملات تسويقية فعالة." },
      { "title": "مديرو تطوير الأعمال", "description": "الذين يبحثون عن معدلات النمو السنوي وتوقعات الطلب المستقبلية لتحديد مسارات التوسع." }
    ]
  },
  cases: {
    title: "قصص من واقعنا",
    subtitle: "دليل إثبات يجسد انتقال الاستراتيجية من الورق إلى الميدان.",
    items: [
      {
        "title": "تجربة أرامكس",
        "subtitle": "تحدي العناوين المفقودة: شاهد كيف تغلبت الحلول المحلية المبتكرة على عمالقة اللوجستيات.",
        "issue": "عندما دخلت شركات البريد العالمية مثل DHL و FedEx للشرق الأوسط، واجهت مشكلة غياب العناوين البريدية الدقيقة في المدن العربية.",
        "analysis": [
          "ماذا فعلت أرامكس؟ بدلاً من انتظار الحكومات لتنظيم العناوين، أجرت \"أرامكس\" دراسة سوق ميدانية عميقة وابتكرت حلولاً محلية مثل \"الدفع عند الاستلام\" وفهم الأزقة الضيقة والشوارع غير المسماة."
        ],
        "lesson": "التميز لا يأتي من تقليد النماذج الغربية، بل من \"تطويع الحلول الهندسية واللوجستية لتناسب الواقع المحلي\"."
      },
      {
        "title": "دراسة حالة: المجمعات السكنية العمودية",
        "subtitle": "عندما يغيب التحليل وتفشل الرؤية",
        "issue": "المشكلة: تعتبر هذه التجربة في العراق مثالاً حياً ونموذجياً لـ \"فشل التخطيط بسبب غياب دراسات السوق والجدوى المتكاملة\".",
        "analysis": [
          "انفصال عن الواقع الشرائي: تم بناء مجمعات بمواصفات \"رفاهية\" وتكاليف عالية في بلد تعاني فيه الطبقة الأكبر (الموظفين وذوي الدخل المحدود) من أزمة سكن.",
          "إهمال القدرة الاستيعابية للبنى التحتية: غياب دراسة \"الجدوى الفنية والبيئية\" أدى إلى ضغط هائل على شبكات الكهرباء والماء المتهالكة أصلاً.",
          "غياب تحليل \"التأثير الحضري\": بناء عمودي مكثف في مناطق مكتظة دون تطوير الخدمات المرافقة يعكس غياب الرؤية الهندسية المتكاملة."
        ],
        "lesson": "المشروع الناجح ليس مجرد بناء جدران، بل هو ابتكار حلول تتناغم مع القدرة الشرائية للناس وكفاءة البنية التحتية للمدينة. في \"بوابة الحكمة للإستشارات الهندسية\"، نحن نؤمن بأن بناء الجدران سهل، ولكن بناء المشاريع المستدامة يتطلب دراسات سوق وجدوى فنية تضمن قبول المجتمع ونجاح الاستثمار."
      }
    ]
  },
  checklist: {
    title: "قائمة تدقيق دراسة السوق",
    headers: ["المراحل", "الأسئلة", "نعم", "كلا"],
    items: [
      { "phase": "تحليل السوق والمستهلك", "question": "هل لديك بيانات موثوقة ومحدثة عن عدد الزبائن المحتملين في منطقتك الجغرافية المستهدفة؟" },
      { "phase": "تحليل السوق والمستهلك", "question": "هل قمت بتحديد \"الميزة التنافسية\" التي تجعل الزبون يترك المنافسين الحاليين ويأتي إليك؟" },
      { "phase": "تحليل السوق والمستهلك", "question": "هل تعرف بدقة \"متوسط المبلغ\" الذي ينفقه العميل المستهدف على الخدمة/المنتج الذي ستقدمه؟" },
      { "phase": "تحليل السوق والمستهلك", "question": "هل تم رسم \"شخصية العميل المثالي\" (Buyer Persona) بما في ذلك دوافعه الشرائية والمشاكل التي يواجهها؟" },
      { "phase": "المنافسة والتوزيع", "question": "هل قمت بتحليل شامل لمخاطر دخول منافسين جدد إلى السوق في العامين القادمين؟" },
      { "phase": "المنافسة والتوزيع", "question": "هل استراتيجية التسعير الخاصة بك تتماشى مع القوة الشرائية الحقيقية للسوق حالياً؟" },
      { "phase": "المنافسة والتوزيع", "question": "هل قمت بتحديد أفضل قنوات التوزيع (تجزئة، جملة، أونلاين) لضمان انسيابية وصول المنتج؟" },
      { "phase": "المنافسة والتوزيع", "question": "هل لديك خطة واضحة للتعامل مع العوائق اللوجستية أو القانونية في السوق المحلي؟" }
    ]
  },
  market_entry_guide: {
    title: "دليل إختراق السوق: كيف تقرأ الفرص والمخاطر قبل إطلاق مشروعك؟",
    phases: [
      {
        title: "مرحلة تحليل حجم وفرص السوق",
        points: [
          {"title": "تحديد السوق المستهدف", "desc": "تمييز السوق المتاح والسوق الذي يمكن خدمته فعلياً."},
          {"title": "تحليل الاتجاهات", "desc": "رصد المتغيرات الاقتصادية والاجتماعية التي تؤثر على القوة الشرائية."},
          {"title": "فجوات السوق", "desc": "اكتشاف الاحتياجات غير الملباة التي يمكن لمشروعك سدها."}
        ]
      },
      {
        title: "تشريح المنافسين",
        points: [
          {"title": "خارطة المنافسة", "desc": "تحديد المنافسين المباشرين وغير المباشرين."},
          {"title": "تحليل نقاط القوة والضعف", "desc": "فهم استراتيجيات المنافسين في التسعير والتوزيع."},
          {"title": "الحصة السوقية", "desc": "تقدير وزن المنافسين الحاليين وكيفية الحصول على حصة منهم."}
        ]
      },
      {
        title: "فهم سلوك المستهلك",
        points: [
          {"title": "رسم شخصية الزبون", "desc": "تحديد الدوافع الشرائية، العادات، والمشاكل التي يواجهها الزبون."},
          {"title": "رحلة الزبون", "desc": "تتبع المسار الذي يتخذه الزبون من الوعي بالمنتج إلى قرار الشراء."},
          {"title": "اختبار الاستجابة", "desc": "قياس مدى تقبل الجمهور المستهدف للسعر والميزات المقترحة."}
        ]
      },
      {
        title: "تحليل قنوات التوزيع وسلاسل الإمداد",
        points: [
          {"title": "الوصول إلى السوق", "desc": "تحديد أفضل القنوات (تجزئة، جملة، منصات إلكترونية)."},
          {"title": "عوائق الدخول", "desc": "دراسة التحديات اللوجستية أو القانونية التي قد تعيق انسيابية المنتج."}
        ]
      }
    ]
  },
  cta: {
    title: "مشروعك القادم يستحق اليقين.",
    description: "خدماتنا لا تنتهي بتسليم الدراسة، نحن لا نسلمك ورقاً ونمضي، بل نعقد معك (جلسة محاكاة نهائية) لمناقشة كافة السيناريوهات المالية والفنية، لضمان أنك تدرك كل دينار أين سيصرف وكيف سيعود.",
    button: "احجز استشارة أولية مجانية"
  }
};

enJson.market_studies = enDict;
arJson.market_studies = arDict;

fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2));
fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2));

console.log("Market Studies dictionaries updated successfully");
