import fs from 'fs';
import path from 'path';

const enPath = path.resolve('dictionaries/en.json');
const arPath = path.resolve('dictionaries/ar.json');

const enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arJson = JSON.parse(fs.readFileSync(arPath, 'utf8'));

const enDict = {
  hero: {
    title: "Customer Relationship Management (CRM)",
    subtitle: "Sustainable Growth Starts Here: Why CRM is No Longer an Option, but a Necessity for Your Business."
  },
  intro: {
    paragraphs: [
      "In today's complex business landscape, it is no longer enough to simply sell products.",
      "Customer Relationship Management (CRM) is an integrated business strategy and technology platform designed to help you understand your customers deeply, anticipate their needs, and foster lasting brand loyalty.",
      "We help you transform fragmented sales, marketing, and customer support data into unified strategic insights. The result? Streamlined operations, improved responsiveness to customer demands, and most importantly: achieving tangible, sustainable growth for your company."
    ],
    services_intro: "We utilize our engineering expertise in process analysis to provide:",
    services: [
      { "title": "CRM Strategy Built on Solid Foundations", "description": "Designing clear, measurable action plans to achieve your objectives." },
      { "title": "Ideal Organizational Structure", "description": "Designing the appropriate structures and teams that ensure efficiency and effectiveness in CRM management." },
      { "title": "Defining Roles and Responsibilities", "description": "Ensuring every team understands its vital role in achieving a 360-degree view of the customer." },
      { "title": "Expert Platform Recommendations", "description": "We provide thoughtful technical recommendations for choosing the most suitable CRM software tool/platform for your technical needs and budget." }
    ]
  },
  target_audience: {
    title: "Target Audience & Key Attractors",
    subtitle: "Who is this for?",
    intro: "Our service is designed for engineering, industrial, and construction sector companies seeking an organized, effective approach to customer relationship management to drive sustainable growth.",
    ideal_audience_intro: "Our ideal audience includes:",
    audiences: [
      { "title": "Engineering Consulting Offices", "description": "Firms offering design, supervision, and project management services." },
      { "title": "Contracting & Construction Companies", "description": "Entities that need to organize their relationships with subcontractors, customers, and project owners." },
      { "title": "Emerging Industrial Companies", "description": "Manufacturers of engineering products or equipment needing to improve their sales and distribution processes." },
      { "title": "Specialized Technical Service Companies", "description": "Such as elevator maintenance, HVAC systems, or industrial security services." },
      { "title": "Engineering Company Owners & Managers", "description": "Key decision-makers looking for solutions to increase efficiency, profitability, and growth." },
      { "title": "Sales & Marketing Managers", "description": "Professionals struggling with a lack of a unified system to track leads and manage the complex sales cycle." },
      { "title": "Operations Managers", "description": "Individuals seeking ways to link CRM with daily operations and project management." }
    ]
  },
  cases: {
    title: "Regional Insights: Careem – Defeating Uber with Local Data",
    subtitle: "The Power of the Field: How Reliable Local Data gave Careem the edge that forced a multi-billion-dollar acquisition.",
    items: [
      {
        "title": "Careem vs Uber",
        "subtitle": "Defeating Uber with Local Data",
        "issue": "When Uber entered the Middle East, it faced fierce competition from Careem. At the time, Uber relied strictly on credit card payments and purely digital mapping systems.",
        "analysis": [
          "Careem conducted a deep study of Arab consumer behavior and discovered that people preferred 'Cash on Delivery' and liked 'phone calls' to confirm locations. Consequently, Careem designed its CRM system and mobile app to support these specific local habits."
        ],
        "lesson": "Ultimately, Uber was forced to acquire Careem for $3.1 billion. Reliable local data is what wins the investment battle, not just the size of the capital."
      }
    ]
  },
  growth_guide: {
    title: "Customer Retention Guide",
    subtitle: "Why CRM is No Longer an Option, but a Necessity for Your Company's Growth?",
    phases: [
      {
        "title": "Building a Unified Database",
        "points": [
          { "title": "Goodbye to Fragmentation", "desc": "Centralizing customer data (phone, email, correspondence, invoices) in one location, instead of losing it in notebooks." },
          { "title": "Relationship History", "desc": "Documenting every interaction with the customer to ensure personalized and professional service every single time." }
        ]
      },
      {
        "title": "Engineering the Customer Journey",
        "points": [
          { "title": "Opportunity Tracking", "desc": "Classifying customers (interested, negotiation, sold, loyal) to follow up on each status with precision." },
          { "title": "Sales Forecasting", "desc": "Utilizing historical data to anticipate future revenues and plan accordingly." }
        ]
      },
      {
        "title": "Process Automation & Efficiency",
        "points": [
          { "title": "Smart Reminders", "desc": "Scheduling alerts for customer follow-ups or contract renewals, thereby preventing the loss of any 'sales opportunity'." },
          { "title": "Performance Reports", "desc": "Gaining instant visibility into the performance of the sales and customer service teams at the push of a button." }
        ]
      }
    ]
  },
  checklist: {
    title: "CRM Checklist: Do You Have a 'Growth System' or Just a Notebook?",
    headers: ["Phase", "Questions", "Yes", "No"],
    items: [
      { "phase": "Data Centralization", "question": "Do you lose customer data and interaction history when a sales employee leaves the company?" },
      { "phase": "Data Centralization", "question": "Can you access the full correspondence and invoice history for any customer in under 10 seconds?" },
      { "phase": "Data Centralization", "question": "Is your customer data stored in a secure central system, or scattered across staff phones and personal notebooks?" },
      { "phase": "Pipeline Engineering", "question": "Can you identify the exact number of 'interested leads' who haven't made a purchase yet?" },
      { "phase": "Pipeline Engineering", "question": "Do you have accurate data to forecast next month's revenue based on current 'open opportunities'?" },
      { "phase": "Pipeline Engineering", "question": "Does your team follow a documented pipeline to move customers from first contact to signed contract?" },
      { "phase": "Automation & Efficiency", "question": "Does your team occasionally forget to follow up with interested leads, losing them to competitors?" },
      { "phase": "Automation & Efficiency", "question": "Are you automatically alerted when a contract renewal or a quote follow-up is due?" },
      { "phase": "Automation & Efficiency", "question": "Can you generate an instant report on each salesperson’s performance with a single click?" }
    ]
  },
  insights: {
    title: "Consulting Insights: Why Does CRM Fail Sometimes?",
    subtitle: "'CRM is an engine, but you need a roadmap and a skilled driver.'",
    failure_reasons: [
      { "title": "User Resistance", "desc": "If employees perceive CRM as a 'monitoring tool' rather than a 'productivity booster,' they will feed it inaccurate data or bypass it entirely." },
      { "title": "Over-Engineering", "desc": "Choosing a high-end system with hundreds of unnecessary features, leading to user fatigue and confusion." },
      { "title": "Data Pollution", "desc": "Poor initial data entry results in flawed reports, causing management to lose faith in the system’s ROI." },
      { "title": "Operational Disconnect", "desc": "Implementing a system that doesn't mirror the actual daily sales cycle of the company." }
    ],
    examples: [
      { "title": "The Distribution Company Case", "desc": "A firm invested in a top-tier CRM, but field agents couldn't use it because it lacked 'offline mode' functionality for remote areas. Result: Sunk costs and a return to manual paperwork." },
      { "title": "The 'Data Graveyard' Case", "desc": "A firm implemented CRM but failed to integrate it with telephony and email systems. Result: Employees continued working outside the system, leaving the CRM useless." }
    ],
    roadmap: [
      "Define your sales processes before picking a tool. The CRM should adapt to your workflow.",
      "Involve your team in the selection process. When employees see it increases commissions, adoption rates soar.",
      "'Garbage in, garbage out.' Start with clean, organized data.",
      "Ensure seamless integration with email, phone, and social media.",
      "Choose a scalable platform. You might need basic features today, but as you grow you will need advanced automation."
    ]
  },
  comparison: {
    title: "Comparing the Top CRM Platforms for 2025",
    headers: ["Feature", "HubSpot", "Zoho CRM", "Salesforce", "Microsoft Dynamics 365", "Odoo"],
    items: [
      { "feature": "Best For", "hubspot": "Scaling Small to Medium Businesses.", "zoho": "Budget-conscious growing firms.", "salesforce": "Large enterprises with complex needs.", "dynamics": "Organizations already using Microsoft ecosystem.", "odoo": "Companies seeking a full ERP (Sales, Inventory, Accounting, HR) in one integrated platform." },
      { "feature": "User Experience", "hubspot": "Highly intuitive and easy to use.", "zoho": "Moderate; requires some setup time.", "salesforce": "Steep learning curve; requires training.", "dynamics": "Familiar to Office 365 users but complex.", "odoo": "Modern and user-friendly, though the vast number of modules requires initial organization." },
      { "feature": "Arabic Support", "hubspot": "Excellent Interface & Right-to-Left support.", "zoho": "Full Arabic support for RTL.", "salesforce": "Good, but customization takes effort.", "dynamics": "Comprehensive Arabic integration.", "odoo": "Outstanding; native Right-to-Left (RTL) support and localized interfaces." },
      { "feature": "Customization", "hubspot": "Flexible but limited in free versions.", "zoho": "Highly flexible at a low cost.", "salesforce": "Unlimited customization possibilities.", "dynamics": "Extremely flexible for industrial workflows.", "odoo": "Highest in class; Open-source nature allows for tailoring to specific Iraqi business workflows." },
      { "feature": "Key Advantage", "hubspot": "'All-in-one' Marketing & Sales sync.", "zoho": "Best value for money (Affordable).", "salesforce": "Global industry standard & deep AI.", "dynamics": "Seamless integration with Outlook & Excel.", "odoo": "All-in-One ecosystem; eliminates the need for 3rd-party integrations by housing everything in one place." },
      { "feature": "Starting Price", "hubspot": "Free tier available; paid starts moderate.", "zoho": "Very competitive entry pricing.", "salesforce": "Premium pricing; higher total cost.", "dynamics": "Premium pricing; depends on existing licenses.", "odoo": "Very flexible; pricing depends on the number of apps, generally offering a better ROI than global giants." },
      { "feature": "Offline Mode", "hubspot": "Limited.", "zoho": "Strong mobile offline capabilities.", "salesforce": "Available via Mobile App.", "dynamics": "Strong offline sync for field engineers", "odoo": "Available in specific modules (like POS) with reliable data synchronization." }
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
    title: "إدارة علاقات الزبائن (CRM)",
    subtitle: "النمو المستدام يبدأ من هنا، لماذا لم يعد الـ CRM خياراً، بل ضرورة لشركتك؟"
  },
  intro: {
    paragraphs: [
      "في عالم الأعمال المعقد اليوم، لم يعد كافياً مجرد بيع المنتجات.",
      "أنظمة إدارة علاقات الزبائن (CRM) هي استراتيجية عمل متكاملة ومنصة تقنية مصممة لمساعدتك على فهم زبائنك بعمق، توقع احتياجاتهم، وتعزيز ولائهم لعلامتك التجارية.",
      "نحن نساعدك على تحويل بيانات المبيعات والتسويق ودعم الزبائن المجزأة إلى رؤى استراتيجية موحدة. النتيجة؟ تبسيط العمليات، تحسين الاستجابة لرغبات الزبائن، والأهم تحقيق نمو مستدام وملموس لشركتك."
    ],
    services_intro: "نحن نوظف خبرتنا الهندسية في تحليل العمليات لتقديم:",
    services: [
      { "title": "استراتيجية CRM مبنية على أسس صلبة", "description": "تصميم خطط عمل واضحة وقابلة للقياس لتحقيق أهدافكم" },
      { "title": "هيكل تنظيمي مثالي", "description": "تصميم الهياكل والفرق المناسبة التي تضمن الكفاءة والفاعلية في إدارة علاقات الزبائن CRM" },
      { "title": "تحديد المهام والمسؤوليات", "description": "ضمان فهم كل فريق لدوره الحيوي في تحقيق رؤية الـ 360 درجة للزبون" },
      { "title": "توصيات فنية مدروسة", "description": "لاختيار الأداة البرمجية (منصة CRM) الأنسب لاحتياجاتكم التقنية والميزانية المحددة، مما يضمن اختيار الأدوات المناسبة التي تدعم استراتيجيتكم" }
    ]
  },
  target_audience: {
    title: "جمهورنا المستهدف",
    subtitle: "لمن هذه الخدمة؟",
    intro: "نخدم الشركات في القطاع الهندسي، الصناعي، والمقاولات التي تبحث عن نهج منظم وفعال لإدارة علاقات الزبائن.",
    ideal_audience_intro: "يشمل جمهورنا المستهدف:",
    audiences: [
      { "title": "المكاتب الاستشارية الهندسية", "description": "الشركات التي تقدم خدمات التصميم، الإشراف، وإدارة المشاريع." },
      { "title": "شركات المقاولات والإنشاءات", "description": "التي تحتاج إلى تنظيم علاقاتها مع المقاولين من الباطن والعملاء وأصحاب المشاريع." },
      { "title": "الشركات الصناعية الناشئة", "description": "التي تصنع منتجات هندسية أو معدات وتحتاج إلى تحسين عمليات المبيعات والتوزيع." },
      { "title": "شركات الخدمات الفنية المتخصصة", "description": "مثل صيانة المصاعد، أنظمة التدفئة والتبريد، أو خدمات الأمن الصناعي." },
      { "title": "أصحاب ومدراء الشركات الهندسية", "description": "هم صناع القرار الرئيسيون الذين يبحثون عن حلول لزيادة الكفاءة والربحية والنمو." },
      { "title": "مديرو المبيعات والتسويق", "description": "الذين يعانون من عدم وجود نظام موحد لتتبع الزبائن المتوقعين وإدارة دورة المبيعات المعقدة." },
      { "title": "مديرو العمليات", "description": "الذين يبحثون عن طرق لربط إدارة علاقات الزبائن بالعمليات اليومية وإدارة المشاريع." }
    ]
  },
  cases: {
    title: "قوة الميدان: كيف منحت البيانات المحلية شركة كريم أفضلية الاستحواذ الملياري؟",
    subtitle: "قصص من واقعنا: دليل إثبات يجسد انتقال الاستراتيجية من الورق إلى الميدان.",
    items: [
      {
        "title": "تجربة كريم الانتصار على أوبر",
        "subtitle": "الانتصار بالبيانات المحلية",
        "issue": "عندما دخلت 'أوبر' للمنطقة، واجهت منافسة شرسة من 'كريم'. 'أوبر' كانت تصر على الدفع بالبطاقة الائتمانية والخرائط الرقمية الصرفة.",
        "analysis": [
          "أجرت 'كريم' دراسة سلوك للمستهلك العربي، واكتشفت أن الناس يفضلون 'الدفع نقداً' ويحبون 'الاتصال بالهاتف'. صممت 'كريم' نظام CRM تطبيقاً يدعم هذه العادات."
        ],
        "lesson": "اضطرت 'أوبر' للاستحواذ على 'كريم' بـ 3.1 مليار دولار. البيانات المحلية الموثوقة هي التي تحسم المعركة الاستثمارية، وليس ضخامة رأس المال فقط."
      }
    ]
  },
  growth_guide: {
    title: "دليل الإحتفاظ بالزبائن",
    subtitle: "لماذا لم يعد الـ CRM خياراً، بل ضرورة لنمو شركتك؟",
    phases: [
      {
        "title": "مرحلة بناء قاعدة بيانات موحدة",
        "points": [
          { "title": "وداعاً للشتات", "desc": "تجميع بيانات الزبائن (الهاتف، البريد، المراسلات، الفواتير) في مكان واحد بدلاً من ضياعها في دفاتر أو هواتف الموظفين." },
          { "title": "تاريخ العلاقة", "desc": "توثيق كل تفاعل مع الزبون لضمان تقديم خدمة شخصية واحترافية في كل مرة." }
        ]
      },
      {
        "title": "مرحلة هندسة رحلة الزبون",
        "points": [
          { "title": "متابعة الفرص", "desc": "تصنيف الزبائن (مهتم، تفاوض، تم البيع، زبون دائم) لمتابعة كل حالة بدقة." },
          { "title": "التنبؤ بالمبيعات", "desc": "استخدام البيانات التاريخية لتوقع الإيرادات المستقبلية والتخطيط بناءً عليها." }
        ]
      },
      {
        "title": "أتمتة العمليات ورفع الكفاءة",
        "points": [
          { "title": "مرحلة التذكيرات الذكية", "desc": "جدولة التنبيهات لمتابعة الزبائن أو تجديد العقود، مما يمنع ضياع أي 'فرصة بيعية'." },
          { "title": "تقارير الأداء", "desc": "الحصول على رؤية فورية لأداء فريق المبيعات وخدمة الزبائن بضغطة زر." }
        ]
      }
    ]
  },
  checklist: {
    title: "قائمة تدقيق الـ CRM: هل تملك 'نظاماً للنمو' أم مجرد 'دفتر ملاحظات'؟",
    headers: ["المراحل", "الأسئلة", "نعم", "كلا"],
    items: [
      { "phase": "تنظيم البيانات", "question": "هل تضيع بيانات الزبائن وتاريخ تواصلهم عند استقالة أحد موظفي المبيعات؟" },
      { "phase": "تنظيم البيانات", "question": "هل يمكنك الوصول إلى كامل تاريخ المراسلات والفواتير لأي زبون في أقل من 10 ثوانٍ؟" },
      { "phase": "تنظيم البيانات", "question": "هل بيانات زبائنك مخزنة في نظام مركزي آمن أم موزعة بين هواتف الموظفين ودفاترهم؟" },
      { "phase": "هندسة المسار", "question": "هل يمكنك تحديد عدد الزبائن 'المهتمين' حالياً والذين لم يتحولوا لشراء فعلي بعد؟" },
      { "phase": "هندسة المسار", "question": "هل تملك أرقاماً دقيقة تتوقع حجم مبيعاتك للشهر القادم بناءً على 'الفرص الحالية'؟" },
      { "phase": "هندسة المسار", "question": "هل يملك فريقك مساراً واضحاً لمتابعة الزبون من أول اتصال حتى توقيع العقد؟" },
      { "phase": "الأتمتة والكفاءة", "question": "هل ينسى فريقك أحياناً معاودة الاتصال بزبون مهتم، مما يجعله يتجه للمنافسين؟" },
      { "phase": "الأتمتة والكفاءة", "question": "هل يتم تنبيهك تلقائياً عند اقتراب موعد تجديد عقد أو متابعة عرض سعري؟" },
      { "phase": "الأتمتة والكفاءة", "question": "هل يمكنك الحصول على تقرير فوري بـ 'ضغطة زر' يوضح أداء كل موظف مبيعات لديك؟" }
    ]
  },
  insights: {
    title: "رؤية استشارية معمقة: لماذا يفشل الـ CRM أحياناً؟",
    subtitle: "الـ CRM هو محرك لسيارة، لكنك تحتاج إلى خارطة طريق وسائق محترف.",
    failure_reasons: [
      { "title": "مقاومة التغيير عند البشر", "desc": "إذا لم يقتنع الموظف بأن النظام يسهل عمله بدلاً من كونه أداة رقابة، فسيقوم بإدخال بيانات خاطئة أو إهماله." },
      { "title": "تعقيد الواجهة", "desc": "شراء نظام معقد جداً يحتوي على مئات الخصائص التي لا تحتاجها الشركة، مما يجعل الموظف يشعر بالضياع." },
      { "title": "بيانات ملوثة", "desc": "إدخال بيانات غير دقيقة أو مكررة يؤدي إلى تقارير خاطئة، مما يجعل الإدارة تفقد الثقة." },
      { "title": "غياب الربط مع الاستراتيجية", "desc": "أن يكون النظام في وادٍ وطريقة عمل الفريق الميداني في وادٍ آخر." }
    ],
    examples: [
      { "title": "مثال شركة التوزيع", "desc": "شركة استوردت نظام CRM عالمي، لكن المندوبين لم يستخدموه لأنه يتطلب إنترنت دائما ولا يدعم العمل دون اتصال. النتيجة: عودة المندوبين للورق." },
      { "title": "مثال صندوق البريد المهمل", "desc": "شركة عقارات لم تربط النظام ببريد الموظفين أو اتصالاتهم. النتيجة: أصبح النظام 'مقبرة للبيانات' بدلاً من أن يكون أداة للمتابعة." }
    ],
    roadmap: [
      "ابدأ بالعمليات لا بالبرمجيات. النظام يجب أن 'يخدم' طريقتك في العمل.",
      "التركيز على تبني الموظفين. اجعل النظام 'مساعداً' لهم وليس 'رقيباً' عليهم.",
      "جودة البيانات هي الوقود. ابدأ ببيانات نظيفة ومنظمة.",
      "التكامل مع الأدوات الحالية. تأكد أن النظام يرتبط ببريدك واتصالاتك الهاتفية.",
      "التفكير في التوسع. اختر منصة مرنة تتيح لك إضافة الخصائص حسب الحاجة غداً."
    ]
  },
  comparison: {
    title: "مقارنة أفضل منصات CRM لعام 2025",
    headers: ["وجه المقارنة", "HubSpot", "Zoho CRM", "Salesforce", "Microsoft Dynamics 365", "Odoo"],
    items: [
      { "feature": "الأنسب لـ", "hubspot": "الشركات الصغيرة والمتوسطة الطموحة.", "zoho": "الشركات التي تبحث عن الجودة مقابل السعر.", "salesforce": "المؤسسات الضخمة ذات المتطلبات المعقدة.", "dynamics": "الشركات التي تعتمد كلياً على برامج مايكروسوفت.", "odoo": "الشركات التي ترغب بربط المبيعات بالمخازن والمحاسبة في منصة واحدة." },
      { "feature": "سهولة الاستخدام", "hubspot": "بديهي جداً وسهل التعلم للفريق.", "zoho": "متوسط السهولة؛ يتطلب بعض الوقت للإعداد.", "salesforce": "يحتاج لمنحنى تعلم طويل وتدريب مكثف.", "dynamics": "مألوف لمستخدمي Office 365 لكنه معقد تقنياً.", "odoo": "واجهة حديثة، كثرة التطبيقات قد تتطلب تنظيماً في البداية." },
      { "feature": "دعم اللغة العربية", "hubspot": "واجهة ممتازة ودعم كامل للكتابة من اليمين.", "zoho": "دعم كامل وشامل للغة العربية.", "salesforce": "جيد، لكن التخصيص للعربية يتطلب جهداً.", "dynamics": "تكامل شامل ومعرب بالكامل.", "odoo": "ممتاز جداً، ويدعم الكتابة من اليمين (RTL) بشكل أصيل." },
      { "feature": "المرونة والتخصيص", "hubspot": "مرن، لكنه محدود في النسخ المجانية.", "zoho": "مرن جداً وبأسعار معقولة.", "salesforce": "إمكانيات تخصيص لا نهائية.", "dynamics": "مرن جداً للعمليات الهندسية والصناعية.", "odoo": "الأعلى في فئته؛ كونه مفتوح المصدر يتيح تعديل أي عملية." },
      { "feature": "الميزة الجوهرية", "hubspot": "تكامل تام بين التسويق والمبيعات.", "zoho": "أفضل قيمة مقابل السعر (اقتصادي).", "salesforce": "المعيار العالمي واستخدام الذكاء الاصطناعي.", "dynamics": "تكامل سلس مع Outlook و Excel.", "odoo": "نظام (All-in-One) لا تحتاج لربط برامج خارجية." },
      { "feature": "مستوى السعر", "hubspot": "تتوفر نسخة مجانية؛ النسخ المدفوعة متوسطة.", "zoho": "تنافسي جداً؛ الأرخص في فئته.", "salesforce": "مرتفع التكلفة (استثمار ضخم).", "dynamics": "مرتفع؛ يعتمد على تراخيص مايكروسوفت.", "odoo": "مرن؛ يعتمد على عدد التطبيقات، غالباً أقل من المنافسين العالميين." },
      { "feature": "العمل دون إنترنت", "hubspot": "محدود.", "zoho": "قوي جداً في تطبيقات الموبايل (للعمل الميداني).", "salesforce": "متوفر من خلال تطبيق الموبايل.", "dynamics": "مزامنة قوية للمهندسين في المواقع البعيدة.", "odoo": "يدعم العمل دون إنترنت في تطبيقات محددة (مثل POS)." }
    ]
  },
  cta: {
    title: "مشروعك القادم يستحق اليقين.",
    description: "خدماتنا لا تنتهي بتسليم الدراسة، نحن لا نسلمك ورقاً ونمضي، بل نعقد معك (جلسة محاكاة نهائية) لمناقشة كافة السيناريوهات المالية والفنية، لضمان أنك تدرك كل دينار أين سيصرف وكيف سيعود.",
    button: "احجز استشارة أولية مجانية"
  }
};

enJson.crm = enDict;
arJson.crm = arDict;

fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2));
fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2));

console.log("CRM dictionaries updated successfully");
