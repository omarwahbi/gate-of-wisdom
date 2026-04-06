import fs from 'fs';
import path from 'path';

const enPath = path.resolve('dictionaries/en.json');
const arPath = path.resolve('dictionaries/ar.json');

const enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arJson = JSON.parse(fs.readFileSync(arPath, 'utf8'));

const enDict = {
  hero: {
    title: "Technical & Economic Feasibility Studies",
    subtitle: "Invest with Confidence, Avoid the Pitfalls: Why a Feasibility Study is Your Investment Compass."
  },
  intro: {
    paragraphs: [
      "Investment projects carry great opportunities, but also significant risks. The technical and economic feasibility studies we provide are not just formal documentation; they are your scientific compass for making sound investment decisions.",
      "We transform your promising idea into an actionable plan supported by reliable data, comprehensive market analysis, and technical viability assessment. Our goal is to use scientific tools to ensure the optimal utilization of your resources, minimize the probability of failure, and maximize your profitability. Launch your project with a solid foundation and trusted data."
    ],
    services_intro: "Our feasibility study services are designed to provide you with:",
    services: [
      { "title": "Comprehensive Understanding of Your Project", "description": "From the initial concept to the final recommendations." },
      { "title": "Accurate Market Analysis", "description": "Evaluation of demand, competition, and potential opportunities." },
      { "title": "Clear Technical & Financial Visualization", "description": "Determining costs, revenues, and break-even points." },
      { "title": "Comprehensive Risk Assessment", "description": "Identifying potential challenges and developing strategies to deal with them." },
      { "title": "Reliable Economic Indicators", "description": "To ensure the project's continuity and profitability within its economic life cycle." }
    ]
  },
  target_audience: {
    title: "Target Audience & Key Attractors",
    subtitle: "Who is this for?",
    intro: "Our service is designed for any individual or business entity that has a project idea or is planning a financial investment, and requires an objective and reliable evaluation of the investment's feasibility before committing significant resources.",
    ideal_audience_intro: "Our ideal audience includes:",
    audiences: [
      { "title": "Individual Investors", "description": "Individuals with capital looking for safe and profitable investment channels, who need a formal feasibility report to support their decision." },
      { "title": "Entrepreneurs & Startups", "description": "Those who require a compelling and detailed feasibility study to present to potential investors or to obtain bank loans and financing." },
      { "title": "Existing Companies Seeking Expansion", "description": "Firms planning to launch a new product line, enter a new market, or build a new facility, needing a risk and expected return assessment." },
      { "title": "Industrial & Manufacturing Sectors", "description": "Companies that require a precise technical evaluation of proposed machinery, equipment, and production processes." },
      { "title": "Commercial & Service Sectors", "description": "Business owners or service providers who focus more on market studies and economic forecasts." },
      { "title": "Capital Owners & Executives", "description": "Leaders looking for bottom-line figures, Return on Investment (ROI), and break-even points." },
      { "title": "Project & Financial Managers", "description": "Professionals looking for technical details, accurate cost estimates, and risk management strategies." }
    ]
  },
  cases: {
    title: "Real-World Stories",
    subtitle: "Evidence that embodies the transition of strategy from paper to the field.",
    items: [
      {
        "title": "Dubai Lagoon – The Sensitivity Analysis Trap",
        "subtitle": "The Optimistic Figures Trap: Why are Sensitivity Analysis & Crisis Scenarios the true safety valves for your investment?",
        "issue": "In the mid-2000s, the massive residential project 'Dubai Lagoon' was launched. The initial feasibility study was overly optimistic, assuming the real estate boom would last forever. It lacked a “Sensitivity Analysis” to handle market downturns or liquidity shortages.",
        "analysis": [
          "When the global financial crisis hit in 2008, the project collapsed and stalled for years because the “financial feasibility” wasn't flexible enough to handle worst-case scenarios."
        ],
        "lesson": "Learn how our Feasibility Studies stress-test your investment against market volatility. Feasibility is about “Resilience,” not just projected profits. A feasibility study without a financial contingency plan turns investment into a reckless gamble."
      },
      {
        "title": "Tesla Giga Berlin – The Price of Ignoring Legal Feasibility",
        "subtitle": "Even Giants Stumble: Discover the importance of Legal & Environmental Feasibility in protecting your project from sudden halts.",
        "issue": "Elon Musk faced massive delays and millions of dollars in losses when building the “Tesla” factory in Germany. Initial studies focused heavily on economic and technical feasibility but underestimated strict German “Legal and Environmental Feasibility.”",
        "analysis": [
          "The project encountered legal battles regarding 'water supply' and 'forest protection,' causing construction to halt multiple times. Consequently, the company had to drastically modify its designs and operational plans at an additional cost to comply with local laws."
        ],
        "lesson": "Even tech giants can stumble when they underestimate local regulations. Discover why we prioritize Legal & Site Feasibility to ensure your project's smooth launch. Understanding the site's “operational and legal environment” determines whether the project will see the light of day."
      }
    ]
  },
  investor_guide: {
    title: "The Informed Investor’s Guide: How to Distinguish Between a Promising Opportunity and a Losing Venture?",
    phases: [
      {
        "title": "Market Feasibility Phase (The Primary Entry Point)",
        "points": [
          { "title": "Supply and Demand Analysis", "desc": "Is there a genuine market gap that justifies your project’s entry?" },
          { "title": "Market Share Estimation", "desc": "What is the projected sales volume in the presence of current competitors?" }
        ]
      },
      {
        "title": "Technical & Engineering Feasibility Phase (The Core Expertise)",
        "points": [
          { "title": "Production Engineering", "desc": "Selecting the most suitable technology, machinery, and equipment for the target production scale." },
          { "title": "Operational Inputs", "desc": "Identifying project requirements for raw materials, energy, and specialized technical staff." },
          { "title": "Site and Space Optimization", "desc": "Evaluating alternative locations based on proximity to suppliers and target markets." }
        ]
      },
      {
        "title": "Financial & Economic Feasibility Phase (The Language of Numbers)",
        "points": [
          { "title": "Investment Cost Estimation", "desc": "Calculating the capital required to commence operations (Fixed Assets and Working Capital)." },
          { "title": "Profitability Indicators", "desc": "Calculating the Payback Period and the Internal Rate of Return (IRR)." },
          { "title": "Sensitivity Analysis", "desc": "Measuring the project's resilience against price fluctuations or changes in operating costs." }
        ]
      },
      {
        "title": "Environmental & Legal Feasibility Phase",
        "points": [
          { "title": "Compliance and Legislation", "desc": "Ensuring the project aligns with current laws, regulations, and directives (specifically within the Iraqi business environment)." },
          { "title": "Environmental Impact", "desc": "Studying the project’s impact on the surrounding environment and ensuring long-term sustainability." }
        ]
      }
    ]
  },
  checklist: {
    title: "Checklist: Feasibility Study",
    headers: ["Phase", "Questions", "Yes", "No"],
    items: [
      { "phase": "Market Viability", "question": "Does the study rely on actual 2025 field data or just general estimates?" },
      { "phase": "Market Viability", "question": "Have you identified \"Direct Competitors\" and their specific strengths?" },
      { "phase": "Market Viability", "question": "Is your pricing strategy aligned with the current purchasing power of your target audience?" },
      { "phase": "Technical Integrity", "question": "Has the infrastructure capacity (power, water, roads) at the selected site been verified?" },
      { "phase": "Technical Integrity", "question": "Does the study include \"real quotations\" for machinery from reputable suppliers?" },
      { "phase": "Technical Integrity", "question": "Is there a clear training plan for the technical staff on the implemented technology?" },
      { "phase": "Financial Resilience", "question": "Is there enough Working Capital to cover expenses for at least six months post-launch?" },
      { "phase": "Financial Resilience", "question": "Has a \"Sensitivity Analysis\" been conducted to test profitability if sales drop by 20%?" },
      { "phase": "Financial Resilience", "question": "Is the Payback Period realistic and aligned with industry risks?" },
      { "phase": "Legal & Environmental", "question": "Does the project have initial approvals from sector authorities (industrial development, environment, investment board)?" },
      { "phase": "Legal & Environmental", "question": "Does the industrial waste disposal plan comply with prevailing environmental standards?" }
    ]
  },
  cautionary_tales: {
    title: "Cautionary Tales: The Hidden Risks of Skipping a Feasibility Study",
    subtitle: "Behind every struggling project, there is a truth ignored during the study phase.",
    tales: [
      {
        "title": "The 'Wrong Tech' Trap (Incompatible Equipment)",
        "scenario": "An investor imported a highly advanced production line from abroad based on the lowest price, without conducting a technical feasibility study.",
        "hidden_risk": "Upon arrival, it was discovered that the local power grid couldn't support the machinery's load, and spare parts were unavailable locally.",
        "result": "The project stalled for a year to rehabilitate the electrical network, missing the optimal market entry window."
      },
      {
        "title": "The 'Optimistic Market' Illusion (Ignoring Sensitivity Analysis)",
        "scenario": "Launching a massive industrial project based on \"expectations\" that raw material prices would remain constant, without a financial study featuring \"Sensitivity Analysis.\"",
        "hidden_risk": "A sudden 15% fluctuation occurred in exchange rates or global material prices.",
        "result": "Projected profits turned into continuous operational losses because the profit margin was too narrow and couldn't absorb market shocks."
      },
      {
        "title": "The 'Attractive Location' Error (Ignoring Service Impact Studies)",
        "scenario": "Building an industrial or commercial project in a crowded area to ensure \"visibility\" without a technical infrastructure feasibility study.",
        "hidden_risk": "The project became inaccessible due to severe traffic jams. Weak water pressure and electricity meant reliance on private generators.",
        "result": "Dramatically soaring operational costs devoured the profits, leading to a drop in the property's market value."
      }
    ]
  },
  lessons: {
    title: "Lessons from Failure",
    subtitle: "The difference between a successful project and a failed one isn't capital; it's the accuracy of the data it stands on.",
    items: [
      {
        "title": "Don't Mistake 'Wishes' for 'Numbers'",
        "desc": "Many investors fail because they replicate successful international models without studying the local Iraqi market's unique consumer behavior. What succeeds in Dubai may not succeed in Baghdad without precise engineering and marketing “adaptation.”"
      },
      {
        "title": "Ignoring 'Hidden Costs' Kills Profitability",
        "desc": "Failure to account for logistics, supply chain variables, and maintenance costs can turn a high-revenue project into an operational loss. True profitability lies in “Operational Costs,” not just “Capital Costs.”"
      },
      {
        "title": "Infrastructure is Not a Minor Detail",
        "desc": "Mega-projects often fail when they ignore technical feasibility regarding surrounding roads, power grids, and water supply, turning luxury assets into functional burdens. A project's success is tied to its integration with its infrastructural environment."
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
    title: "دراسات الجدوى الفنية والإقتصادية",
    subtitle: "استثمر بثقة وتجنب الخسائر، لماذا تعتبر دراسة الجدوى هي بوصلة قرارك الاستثماري؟"
  },
  intro: {
    paragraphs: [
      "المشاريع الاستثمارية تحمل فرصاً عظيمة، لكنها تنطوي على مخاطر حقيقية. دراسات الجدوى الفنية والاقتصادية التي نقدمها ليست مجرد وثائق رسمية، بل هي بوصلتك العلمية لصناعة القرار الاستثماري السليم.",
      "نحن نحول فكرتك الواعدة إلى خطة عمل مدعومة ببيانات موثوقة وتحليل شامل للسوق والجدوى الفنية. هدفنا هو استخدام الأدوات العلمية لضمان الاستخدام الأمثل لمواردك، تقليل احتمالات الفشل، وتعظيم عوائدك الربحية. ابدأ مشروعك بقاعدة صلبة وبيانات موثوقة."
    ],
    services_intro: "خدماتنا في دراسات الجدوى مصممة لتوفر لكم:",
    services: [
      { "title": "فهم شامل لمشروعكم", "description": "من المفهوم الأولي حتى التوصيات النهائية." },
      { "title": "تحليل دقيق للسوق", "description": "تقييم الطلب، والمنافسة، والفرص المحتملة." },
      { "title": "تصور فني ومالي واضح", "description": "تحديد التكاليف، والإيرادات، ونقاط التعادل." },
      { "title": "تقييم شامل للمخاطر", "description": "تحديد التحديات المحتملة ووضع استراتيجيات للتعامل معها." },
      { "title": "مؤشرات اقتصادية موثوقة", "description": "لضمان استمرارية المشروع وربحيتها ضمن عمره الاقتصادي." }
    ]
  },
  target_audience: {
    title: "جمهورنا المستهدف",
    subtitle: "لمن هذه الخدمة؟",
    intro: "أي فرد أو كيان تجاري يمتلك فكرة مشروع أو يخطط لاستثمار مالي، ويحتاج إلى تقييم موضوعي وموثوق لجدوى هذا الاستثمار قبل الالتزام بالموارد الكبيرة.",
    ideal_audience_intro: "يشمل جمهورنا المستهدف:",
    audiences: [
      { "title": "المستثمرون الأفراد", "description": "الأشخاص الذين لديهم رأس مال ويبحثون عن قنوات استثمارية آمنة ومربحة، ويحتاجون إلى تقرير جدوى رسمي لدعم قرارهم." },
      { "title": "رواد الأعمال والشركات الناشئة", "description": "الذين يحتاجون إلى دراسة جدوى مقنعة ومفصلة لتقديمها للمستثمرين المحتملين أو للحصول على قروض بنكية وتمويل." },
      { "title": "الشركات القائمة التي تسعى للتوسع", "description": "الشركات التي تخطط لإطلاق خط إنتاج جديد، أو دخول سوق جديد، أو بناء مصنع جديد، وتحتاج إلى تقييم المخاطر والعائد المتوقع." },
      { "title": "القطاع الصناعي والتصنيع", "description": "الشركات التي تحتاج إلى تقييم فني دقيق لآلات ومعدات وعمليات إنتاج مقترحة." },
      { "title": "القطاع التجاري والخدمي", "description": "أصحاب المشاريع التجارية أو الخدمية الذين يركزون بشكل أكبر على دراسات السوق والتوقعات الاقتصادية." },
      { "title": "أصحاب رؤوس الأموال والمديرون التنفيذيون", "description": "يبحثون عن الأرقام النهائية، العائد على الاستثمار (ROI)، ونقاط التعادل." },
      { "title": "مديرو المشاريع والمالية", "description": "يبحثون عن التفاصيل الفنية، تقديرات التكاليف الدقيقة، وإدارة المخاطر." }
    ]
  },
  cases: {
    title: "قصص من واقعنا",
    subtitle: "دليل إثبات يجسد انتقال الاستراتيجية من الورق إلى الميدان.",
    items: [
      {
        "title": "قصة مشروع مجمع دبي لاجون",
        "subtitle": "خديعة الأرقام المتفائلة: لماذا يعد تحليل الحساسية وسيناريوهات الأزمات صمام الأمان الحقيقي لاستثمارك؟",
        "issue": "في منتصف العقد الأول من القرن الحادي والعشرين، أُطلق مشروع \"دبي لاجون\" السكني الضخم. كانت دراسة الجدوى الأولية متفائلة جداً وتفترض استمرار الطفرة العقارية للأبد. الدراسة لم تتضمن \"تحليل حساسية\" حقيقي لمواجهة انخفاض أسعار العقار أو شح السيولة.",
        "analysis": [
          "عندما حلت الأزمة المالية العالمية عام 2008، انهار المشروع وتوقف لسنوات طويلة لأن \"الجدوى المالية\" لم تكن مرنة بما يكفي للتعامل مع أسوأ السيناريوهات."
        ],
        "lesson": "دراسة الجدوى ليست مجرد أرقام للربح، بل هي \"اختبار صمود\" للمشروع أمام الأزمات. غياب خطة الطوارئ المالية يحول الاستثمار إلى مغامرة غير محسوبة."
      },
      {
        "title": "قصة مصنع تسلا جيجا فكتوري - برلين",
        "subtitle": "حتى العمالقة يخطئون: اكتشف أهمية الجدوى القانونية والبيئية في حماية مشروعك من التوقف المفاجئ.",
        "issue": "واجه إيلون ماسك تأخيرات هائلة وخسائر بملايين الدولارات عند بناء مصنع \"تسلا\" في ألمانيا. ركزت الدراسات الأولية على الجدوى الاقتصادية والفنية، لكنها استخفت بـ \"الجدوى القانونية والبيئية\" الصارمة في ألمانيا.",
        "analysis": [
          "واجه المشروع قضايا قانونية تخص \"إمدادات المياه\" و\"حماية الغابات\" أدت لتوقف البناء لعدة مرات. واضطرت الشركة لتعديل تصاميمها وخططها التشغيلية بشكل جذري وبتكلفة إضافية لتتوافق مع القوانين المحلية."
        ],
        "lesson": "الجدوى ليست أرقام مبيعات فقط، إن فهم \"البيئة التشغيلية والقانونية\" للموقع هو الذي يحدد هل سيخرج المشروع للنور أم سيظل حبيس الأوراق القانونية."
      }
    ]
  },
  investor_guide: {
    title: "دليل المستثمر الواعي: كيف تفرق بين الفرصة الواعدة والمغامرة الخاسرة؟",
    phases: [
      {
        "title": "مرحلة الجدوى التسويقية (المدخل الرئيسي)",
        "points": [
          { "title": "تحليل العرض والطلب", "desc": "هل هناك فجوة حقيقية في السوق تسمح بدخول مشروعك؟" },
          { "title": "تقدير الحصة السوقية", "desc": "ما هو الحجم المتوقع للمبيعات في ظل وجود المنافسين الحاليين؟" }
        ]
      },
      {
        "title": "مرحلة الجدوى الفنية والهندسية (جوهر التخصص)",
        "points": [
          { "title": "هندسة الإنتاج", "desc": "اختيار التكنولوجيا والمكائن والمعدات الأنسب لمقياس الإنتاج المستهدف." },
          { "title": "مدخلات التشغيل", "desc": "تحديد احتياجات المشروع من مواد أولية، طاقة، وكوادر فنية متخصصة." },
          { "title": "الموقع والمساحة", "desc": "المفاضلة بين المواقع البديلة بناءً على القرب من الموردين والأسواق." }
        ]
      },
      {
        "title": "مرحلة الجدوى المالية والاقتصادية (لغة الأرقام)",
        "points": [
          { "title": "تقدير التكاليف الاستثمارية", "desc": "حساب رأس المال المطلوب لبدء التشغيل (أصول ثابتة، رأس مال عامل)." },
          { "title": "مؤشرات الربحية", "desc": "حساب فترة استرداد رأس المال (Payback Period) ومعدل العائد الداخلي (IRR)." },
          { "title": "تحليل الحساسية", "desc": "قياس مدى صمود المشروع أمام تقلبات الأسعار أو تغير تكاليف التشغيل." }
        ]
      },
      {
        "title": "مرحلة الجدوى البيئية والقانونية",
        "points": [
          { "title": "الامتثال والتشريعات", "desc": "التأكد من مواءمة المشروع مع القوانين والأنظمة والتعليمات النافذة (خاصة في البيئة العراقية)." },
          { "title": "الأثر البيئي", "desc": "دراسة تأثير المشروع على البيئة المحيطة وضمان الاستدامة." }
        ]
      }
    ]
  },
  checklist: {
    title: "قائمة تدقيق دراسة الجدوى",
    headers: ["المراحل", "الأسئلة", "نعم", "كلا"],
    items: [
      { "phase": "الجانب التسويقي", "question": "هل تعتمد الدراسة على بيانات ميدانية حقيقية لعام 2025 أم على تقديرات عامة؟" },
      { "phase": "الجانب التسويقي", "question": "هل تم تحديد \"المنافسين المباشرين\" ونقاط قوتهم التي ستواجهها عند الإطلاق؟" },
      { "phase": "الجانب التسويقي", "question": "هل استراتيجية التسعير المقترحة تأخذ بنظر الاعتبار القوة الشرائية الحالية للجمهور المستهدف؟" },
      { "phase": "الجانب الفني والهندسي", "question": "هل تم التأكد من قدرة البنية التحتية (كهرباء، ماء، طرق) في الموقع المختار على تحمل أحمال المشروع؟" },
      { "phase": "الجانب الفني والهندسي", "question": "هل تضمنت الدراسة الفنية \"عروض أسعار حقيقية\" للمكائن من مجهزين موثوقين؟" },
      { "phase": "الجانب الفني والهندسي", "question": "هل هناك خطة واضحة لتدريب الكادر الفني على التكنولوجيا المستخدمة؟" },
      { "phase": "الجانب المالي والاقتصادي", "question": "هل تم احتساب رأس مال عامل يكفي لتغطية المصاريف لستة أشهر على الأقل بعد الإطلاق؟" },
      { "phase": "الجانب المالي والاقتصادي", "question": "هل تم إجراء \"تحليل الحساسية\" لمعرفة مصير الأرباح في حال انخفاض المبيعات بنسبة 20%؟" },
      { "phase": "الجانب المالي والاقتصادي", "question": "هل فترة استرداد رأس المال منطقية وتتوافق مع مخاطر القطاع؟" },
      { "phase": "الجانب القانوني والبيئي", "question": "هل المشروع حاصل على موافقات مبدئية من الجهات القطاعية (تنمية صناعية، بيئة، هيئة استثمار)؟" },
      { "phase": "الجانب القانوني والبيئي", "question": "هل تتوافق خطة التخلص من المخلفات الصناعية مع المعايير البيئية النافذة في العراق؟" }
    ]
  },
  cautionary_tales: {
    title: "قصص تحذيرية: المخاطر الخفية لإهمال دراسات الجدوى",
    subtitle: "خلف كل مشروع متعثر، توجد حقيقة تم تجاهلها في مرحلة الدراسة.",
    tales: [
      {
        "title": "فخ التكنولوجيا الخاطئة (المعدات غير المتوافقة)",
        "scenario": "مستثمر قام باستيراد خط إنتاج متطور جداً من الخارج بناءً على السعر الأقل، دون إجراء دراسة جدوى فنية.",
        "hidden_risk": "عند وصول المعدات، اكتشف أن الطاقة الكهربائية في الموقع لا تتحمل أحمال الماكينات، وأن قطع الغيار غير متوفرة في السوق المحلي.",
        "result": "توقف المشروع لمدة عام لإعادة تأهيل الشبكة الكهربائية، وضياع فرصة دخول السوق في الوقت المناسب."
      },
      {
        "title": "وهم السوق المتفائل (إهمال تحليل الحساسية)",
        "scenario": "بناء مشروع صناعي ضخم بناءً على \"توقعات\" بأن سعر المادة الأولية سيظل ثابتاً، دون إجراء دراسة جدوى مالية تتضمن \"تحليل الحساسية\".",
        "hidden_risk": "حدث تقلب مفاجئ في أسعار الصرف أو أسعار المواد العالمية بنسبة 15%.",
        "result": "تحولت الأرباح المتوقعة إلى خسائر تشغيلية مستمرة لأن هامش الربح كان ضيقاً جداً ولم يحسب حساب التقلبات."
      },
      {
        "title": "خطأ \"الموقع الجاذب\" (إهمال دراسة الأثر الخدمي)",
        "scenario": "بناء مشروع في منطقة مزدحمة لضمان \"الرؤية\" دون دراسة جدوى فنية للبنى التحتية.",
        "hidden_risk": "المشروع أصبح غير قابل للوصول بسبب الاختناقات المرورية، وضعف ضغط الماء والكهرباء جعل تكلفة التشغيل عبر المولدات الخاصة تلتهم الأرباح.",
        "result": "انخفاض القيمة السوقية للعقارات أو المنتجات وصعوبة استقطاب المستأجرين."
      }
    ]
  },
  lessons: {
    title: "دروس من الفشل: كيف تحمي استثمارك من المصير المجهول؟",
    subtitle: "الفرق بين المشروع الناجح والفاشل ليس في حجم رأس المال، بل في دقة البيانات التي بني عليها.",
    items: [
      {
        "title": "لا تخلط بين 'الأمنيات' و 'الأرقام'",
        "desc": "مستثمرون اعتمدوا على \"انطباعهم الشخصي\" بنجاح مشروع معين لأنهم رأوا تجربة مماثلة ناجحة في بلد آخر، مع إهمال دراسة خصوصية السوق العراقي (القوة الشرائية، الثقافة الاستهلاكية، والمنافسة المحلية). ما ينجح في الخارج قد لا ينجح بالضرورة في بغداد دون \"تكييف\" هندسي وتسويقي دقيق."
      },
      {
        "title": "إهمال 'التكاليف الخفية' يقتل الربحية",
        "desc": "مشاريع صناعية تعثرت لأن دراسة الجدوى ركزت على تكلفة المكائن وأهملت تكاليف \"اللوجستيات\" و\"سلاسل الإمداد\" وعدم احتساب تكلفة النقل والخزن أو التوقف للصيانة. الربحية الحقيقية تكمن في تفاصيل \"التكاليف التشغيلية\"."
      },
      {
        "title": "'البنية التحتية' ليست مجرد تفصيل ثانوي",
        "desc": "مجمعات سكنية ميتة بسبب البدء بالتنفيذ قبل التأكد من الجدوى الفنية لشبكات الطرق والصرف الصحي. المشروع لا ينتهي عند الجدران، وتأثره بالبيئة التحتية يحدد نجاحه."
      }
    ]
  },
  cta: {
    title: "مشروعك القادم يستحق اليقين.",
    description: "خدماتنا لا تنتهي بتسليم الدراسة، نحن لا نسلمك ورقاً ونمضي، بل نعقد معك (جلسة محاكاة نهائية) لمناقشة كافة السيناريوهات المالية والفنية، لضمان أنك تدرك كل دينار أين سيصرف وكيف سيعود.",
    button: "احجز استشارة أولية مجانية"
  }
};

enJson.feasibility_studies = enDict;
arJson.feasibility_studies = arDict;

fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2));
fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2));

console.log("Feasibility Studies dictionaries updated successfully");
