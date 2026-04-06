import fs from 'fs';
import path from 'path';

const enPath = path.resolve('dictionaries/en.json');
const arPath = path.resolve('dictionaries/ar.json');

const enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arJson = JSON.parse(fs.readFileSync(arPath, 'utf8'));

const enDict = {
  hero: {
    title: "Project Management Consulting",
    subtitle: "From Idea to Successful, Profitable Launch."
  },
  intro: {
    paragraphs: [
      "The statistics are daunting: many promising ventures fail shortly after launch, not due to lack of funding, but because of poor management and inadequate risk planning.",
      "At “GATE OF WISDOM CONSULTING ENGINEERS”, we offer more than just guidance; we provide a comprehensive engineering framework for project management that ensures your resources are directed correctly.",
      "We help you execute a step-by-step action plan, from initial planning and performance measurement to proactive risk management. The result? A significant reduction in failure rates and the assurance of achieving desired objectives and profitability, so you can launch your next project with total confidence."
    ],
    services_intro: "We provide you with our engineering and management expertise to ensure the soundness of your investment decisions through our integrated project management consulting services:",
    services: [
      {
        "title": "Investment Analysis & Opportunities",
        "description": "Precise diagnosis of the current situation, identification of viable investment opportunities, and ensuring decisions are not based purely on personal desires."
      },
      {
        "title": "Comprehensive & Systematic Planning",
        "description": "Defining the legal form of the project, its objectives, size, location, and required material and human resources."
      },
      {
        "title": "Funding & Execution Management",
        "description": "Estimating the volume of investments and funding sources, and supervising implementation stages to ensure adherence to budget and quality standards."
      },
      {
        "title": "Monitoring & Risk Management",
        "description": "Continuous technical and economic evaluation, ongoing training, and enhancement of performance efficiency to ensure continuity and risk avoidance."
      }
    ]
  },
  target_audience: {
    title: "Target Audience & Key Attractors",
    subtitle: "Who is this for?",
    intro: "Our service is designed for investors (individuals and institutions) and entrepreneurs who are planning to establish or launch new projects and are looking for a reliable partner to provide precise scientific and engineering guidance to minimize the risks of failure and increase the chances of success.",
    ideal_audience_intro: "Our ideal audience includes:",
    audiences: [
      { "title": "New Investors (Individuals or Groups)", "description": "Those who have capital and are seeking a clear and well-studied investment opportunity and need professional management for their project from the idea stage to launch." },
      { "title": "Entrepreneurs & Startups", "description": "Those with innovative ideas but lack the administrative and engineering expertise to plan and execute the project properly." },
      { "title": "Governmental or Sectoral Bodies", "description": "Entities that launch development or infrastructure projects and require specialized consulting in project management and supervision." },
      { "title": "Existing Companies Expanding", "description": "Companies launching new subsidiary projects that require independent management to ensure operational efficiency." },
      { "title": "Capital Owners", "description": "Individuals seeking guarantees for the soundness of their investment decisions and financial returns (ROI)." },
      { "title": "Executives", "description": "Leaders looking for efficiency in execution, risk management, and adherence to budgets and timelines." },
      { "title": "Project Managers within Large Corporations", "description": "Professionals who may need specialized technical support in specific aspects of planning, execution, or risk management." }
    ]
  },
  cases: {
    title: "Real-World Stories",
    subtitle: "Evidence that embodies the transition of strategy from paper to the field.",
    items: [
      {
        "title": "Berlin Airport Lessons",
        "subtitle": "Berlin Brandenburg Airport (The Cost of Poor Supervision)",
        "issue": "A 9-year delay and a €4 billion budget overrun due to conflicting Variation Orders and the lack of a unified consulting oversight.",
        "lesson": "Project success requires Independent Consulting Supervision to govern changes and protect the budget."
      },
      {
        "title": "The Secret of Perfect Timing",
        "subtitle": "Dubai Metro (The Power of the Critical Path)",
        "issue": "Completing the world’s longest automated metro on time (09/09/09) by mastering Time Engineering and strictly monitoring the Critical Path.",
        "lesson": "On-time delivery is not luck; it is the result of rigorous Strategic Scheduling and proactive risk management."
      },
      {
        "title": "Case Study - Baghdad International Airport",
        "subtitle": "When Management Fails the Infrastructure.",
        "issue": "A vital facility with massive infrastructure, yet struggling with service quality decline, frequent technical failures, and a chaotic passenger experience.",
        "lesson": "Major projects don't fail just due to lack of funds, but due to the absence of Professional Project Management that ensures sustained efficiency. At “Gate of Wisdom Consulting Engineers” we ensure your assets remain assets, not operational burdens."
      }
    ]
  },
  checklist: {
    title: "Project Launch Readiness Checklist",
    headers: ["Phase", "Questions", "Yes", "No"],
    items: [
      { phase: "Planning & Feasibility", question: "Is the project scale optimized based on actual market demand?" },
      { phase: "Planning & Feasibility", question: "Is there a detailed list of physical assets and human resource requirements?" },
      { phase: "Planning & Feasibility", question: "Has an updated feasibility study been conducted reflecting current market prices?" },
      { phase: "Engineering & Contracting", question: "Do the technical specifications meet international standards?" },
      { phase: "Engineering & Contracting", question: "Are the contracts inclusive of 'Delay Penalties' and 'Maintenance Guarantees'?" },
      { phase: "Engineering & Contracting", question: "Were bids evaluated on technical merit (Quality) rather than just the lowest price?" },
      { phase: "Execution & Installation", question: "Is the ERP system ready to integrate with production lines?" },
      { phase: "Execution & Installation", question: "Is there a training schedule for the operational staff prior to equipment arrival?" },
      { phase: "Execution & Installation", question: "Is there a contingency plan for raw material supply delays?" }
    ]
  }
};

const arDict = {
  hero: {
    title: "استشارات إدارة المشاريع",
    subtitle: "من الفكرة إلى الاطلاق الناجح والمربح"
  },
  intro: {
    paragraphs: [
      "الإحصائيات مخيفة: العديد من المشاريع الواعدة تفشل بعد وقت قصير من إطلاقها، ليس بسبب نقص التمويل، بل بسبب سوء الإدارة والتخطيط للمخاطر.",
      "في \"بوابة الحكمة للإستشارات الهندسية\"، نقدم لك أكثر من مجرد إرشادات؛ نقدم لك إطار عمل هندسي متكامل لإدارة المشاريع يضمن توجيه مواردك في الاتجاه الصحيح.",
      "نحن نساعدك على تنفيذ خطة عمل خطوة بخطوة، من التخطيط الأولي وقياس الأداء إلى إدارة المخاطر. النتيجة؟ تقليل كبير لمعدلات الفشل وضمان تحقيق الأهداف المرجوة والربحية، حتى تتمكن من إطلاق مشروعك القادم بثقة تامة."
    ],
    services_intro: "نحن نوفر لكم خبرتنا الهندسية والإدارية لضمان سلامة قراركم الاستثماري عبر خدمات استشارات إدارة المشاريع المتكاملة:",
    services: [
      {
        "title": "تحليل وفرص الاستثمار",
        "description": "تشخيص دقيق للوضع الراهن، وتحديد الفرصة الاستثمارية المجدية، وضمان عدم الاستناد إلى الرغبات الشخصية."
      },
      {
        "title": "تخطيط شامل ومنهجي",
        "description": "تحديد الشكل القانوني للمشروع، أهدافه، حجمه، موقعه، ومستلزماته المادية والبشرية المطلوبة."
      },
      {
        "title": "إدارة التمويل والتنفيذ",
        "description": "تخمين حجم الاستثمارات ومصادر التمويل، والإشراف على مراحل التنفيذ لضمان الالتزام بالميزانية والجودة."
      },
      {
        "title": "المراقبة وإدارة المخاطر",
        "description": "تقييم فني واقتصادي مستمر، تدريب مستمر، ورفع كفاءة الأداء لضمان الاستمرارية وتجنب المخاطر."
      }
    ]
  },
  target_audience: {
    title: "جمهورنا المستهدف",
    subtitle: "",
    intro: "المستثمرون (أفراداً ومؤسسات) ورواد الأعمال الذين يخططون لتأسيس أو إطلاق مشاريع جديدة ويبحثون عن شريك موثوق يقدم لهم التوجيه العلمي والهندسي الدقيق لتقليل مخاطر الفشل وزيادة فرص النجاح.",
    ideal_audience_intro: "يشمل جمهورنا المستهدف:",
    audiences: [
      { "title": "المستثمرون الجدد (أفراد أو مجموعات)", "description": "الذين يمتلكون رأس مال ويبحثون عن فرصة استثمارية واضحة ومدروسة، ويحتاجون إلى إدارة احترافية لمشروعهم من الفكرة إلى الإطلاق." },
      { "title": "رواد الأعمال والشركات الناشئة", "description": "الذين لديهم أفكار مبتكرة ولكنهم يفتقرون إلى الخبرة الإدارية والهندسية لتخطيط وتنفيذ المشروع بشكل سليم." },
      { "title": "الجهات الحكومية أو القطاعية", "description": "التي تطلق مشاريع تنموية أو بنية تحتية وتحتاج إلى استشارات متخصصة في إدارة المشاريع والإشراف عليها." },
      { "title": "الشركات القائمة التي تتوسع", "description": "والتي تطلق مشاريع فرعية جديدة وتحتاج إلى إدارة مستقلة لهذه المشاريع لضمان الكفاءة التشغيلية." },
      { "title": "أصحاب رؤوس الأموال", "description": "يبحثون عن ضمانات لسلامة قرارهم الاستثماري والعائد المالي (ROI)." },
      { "title": "المديرون التنفيذيون", "description": "يبحثون عن الكفاءة في التنفيذ وإدارة المخاطر والالتزام بالميزانيات والجداول الزمنية." },
      { "title": "مديرو المشاريع داخل الشركات الكبرى", "description": "الذين قد يحتاجون إلى دعم فني متخصص في جوانب معينة من التخطيط أو التنفيذ أو إدارة المخاطر." }
    ]
  },
  cases: {
    title: "قصص من واقعنا",
    subtitle: "دليل إثبات يجسد انتقال الاستراتيجية من الورق إلى الميدان.",
    items: [
      {
        "title": "دروس من مطار برلين",
        "subtitle": "قصة \"مطار برلين براندنبورغ\" (لعنة غياب الإشراف الموحد)",
        "issue": "كان من المقرر افتتاح مطار برلين في 2012، لكنه لم يفتتح إلا في 2020، بتكلفة تجاوزت الميزانية بـ 4 مليارات يورو.",
        "lesson": "النجاح في المشاريع الإنشائية الضخمة لا يعتمد على قوة المقاولين فقط، بل على \"الرقابة الاستشارية المستقلة\" التي تضمن عدم تشتت المشروع وضبط ميزانيته من اليوم الأول."
      },
      {
        "title": "سر الالتزام بالثانية",
        "subtitle": "قصة \"مشروع مترو دبي\" (عبقرية المسار الحرج)",
        "issue": "عندما أُطلق مشروع مترو دبي، شكك الكثيرون في إمكانية افتتاح أطول مترو آلي في العالم خلال 4 سنوات فقط في بيئة صحراوية قاسية.",
        "lesson": "الالتزام بالموعد النهائي ليس \"حظاً\"، بل هو نتيجة \"هندسة زمنية\" دقيقة وتخطيط استباقي للمخاطر."
      },
      {
        "title": "دراسة حالة: مطار بغداد الدولي",
        "subtitle": "عندما تتقادم الإدارة قبل المنشأة",
        "issue": "مرفق حيوي يمتلك بنية تحتية ضخمة، لكنه يعاني من تراجع حاد في جودة الخدمات، تكرار الحوادث الفنية (مثل الحرائق أو تعطل المنظومات)، وفوضى في تجربة المسافر.",
        "lesson": "المشاريع الكبرى لا تنهار بسبب نقص التمويل دائماً، بل بسبب غياب نظم إدارة المشاريع التي تضمن ديمومة الكفاءة. في \"بوابة الحكمة للإستشارات الهندسية\"، نحن نؤمن بأن الإدارة الهندسية الصحيحة هي التي تمنع تحول أصولك الثمينة إلى أعباء تشغيلية."
      }
    ]
  },
  checklist: {
    title: "قائمة تدقيق: جاهزية إطلاق المشروع",
    headers: ["المراحل", "الأسئلة", "نعم", "كلا"],
    items: [
      { phase: "التخطيط والجدوى", question: "هل تم تحديد الحجم الأمثل للمشروع بناءً على دراسة طلب السوق الفعلية؟" },
      { phase: "التخطيط والجدوى", question: "هل هناك قائمة مفصلة بالمستلزمات المادية (معدات) والبشرية (كادر)؟" },
      { phase: "التخطيط والجدوى", question: "هل حصلت على دراسة جدوى اقتصادية محدثة تعكس أسعار السوق الحالية؟" },
      { phase: "الهندسة والتعاقدات", question: "هل المواصفات الفنية للمكائن والمعدات مطابقة للمعايير الدولية؟" },
      { phase: "الهندسة والتعاقدات", question: "هل تتضمن العقود الموقعة بنداً واضحاً لـ \"غرامات التأخير\" و\"ضمان الصيانة\"؟" },
      { phase: "الهندسة والتعاقدات", question: "هل تم تقييم العروض بناءً على معايير فنية (الجودة) وليس فقط السعر الأقل؟" },
      { phase: "التنفيذ والتركيب", question: "هل نظام تخطيط موارد المشروع (ERP) جاهز للربط مع خطوط الإنتاج؟" },
      { phase: "التنفيذ والتركيب", question: "هل تم وضع جدول زمني لتدريب الكادر التشغيلي قبل وصول المعدات؟" },
      { phase: "التنفيذ والتركيب", question: "هل توجد خطة طوارئ في حال تأخر توريد المواد الأولية؟" }
    ]
  }
};

enJson.project_management = enDict;
arJson.project_management = arDict;

fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2));
fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2));

console.log("Dictionaries updated successfully");
