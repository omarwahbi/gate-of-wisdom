import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Target, Shield, TrendingUp, Globe, Server, Brain, Zap, Users, BookOpen, ExternalLink, Download, Database, Building2, Wifi, Smartphone, Cpu, Coins, Heart, GraduationCap, Home, Plane, Leaf, Lock, Scale, Newspaper, CreditCard } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BoldText } from "@/components/BoldText";
import { ServiceGiftSection } from "@/components/ServiceGiftSection";
import { FinalCTA } from "@/components/FinalCTA";

interface InternationalIndicesProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("international_indicators", lang as "en" | "ar", "bi-center/international-indicators");
}

export default async function InternationalIndicesPage(props: InternationalIndicesProps) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const schemas = getPageJsonLd("international_indicators", lang, "bi-center/international-indicators");

  const categories = [
    {
      id: 1,
      title: {
        en: "Governance, Transparency & Security",
        ar: "الحوكمة والشفافية والأمان"
      },
      description: {
        en: "Covering primary investor concerns regarding the legal and security environment for operating in Iraq.",
        ar: "تغطية المخاوف الأساسية للمستثمر حول البيئة القانونية والأمنية للعمل في العراق"
      },
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      indicators: [
        { en: "Corruption Perceptions Index (CPI)", ar: "مؤشر مدركات الفساد" },
        { en: "Bribery Risk Index (TRACE Matrix)", ar: "مؤشر مخاطر الرشوة" },
        { en: "Law and Order Index", ar: "مؤشر القانون والنظام العام" },
        { en: "Global Terrorism Index (GTI)", ar: "مؤشر الإرهاب العالمي" },
        { en: "Global Peace Index (GPI)", ar: "مؤشر السلام العالمي" },
        { en: "Crime Index", ar: "مؤشر الجريمة" },
        { en: "Fragile States Index", ar: "مؤشر الدول الهشة" },
      ]
    },
    {
      id: 2,
      title: {
        en: "Infrastructure & Logistics",
        ar: "البنية التحتية واللوجستيات"
      },
      description: {
        en: "Operational efficiency and the movement of goods and services (Internet, Transport, Energy).",
        ar: "كفاءة التشغيل وحركة البضائع والخدمات (الإنترنت، النقل، الطاقة)"
      },
      icon: Building2,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
      indicators: [
        { en: "Infrastructure Quality Index", ar: "مؤشر جودة البنية التحتية" },
        { en: "Logistics Performance Index (LPI)", ar: "مؤشر الأداء اللوجستي" },
        { en: "Road & Port Infrastructure Index", ar: "مؤشر البنية التحتية للنقل البري والموانئ" },
        { en: "Business Ready Index (B-READY)", ar: "مؤشر جاهزية الأعمال" },
        { en: "Internet Service Index", ar: "مؤشر خدمة الإنترنت" },
        { en: "Telecom & Mobile Service Index", ar: "مؤشر قطاع الاتصالات والهاتف النقال" },
        { en: "Safely Managed Sanitation Service", ar: "مؤشر الصرف الصحي الآمن" },
      ]
    },
    {
      id: 3,
      title: {
        en: "Innovation, Technology & Digitalization",
        ar: "الابتكار والتكنولوجيا والتحول الرقمي"
      },
      description: {
        en: "Iraq's economic readiness for digital transformation in 2025.",
        ar: "مدى جاهزية الاقتصاد العراقي للتحول الرقمي لعام 2025"
      },
      icon: Cpu,
      color: "text-violet-600",
      bgColor: "bg-violet-100 dark:bg-violet-900/30",
      indicators: [
        { en: "Global Innovation Index (GII)", ar: "مؤشر الابتكار العالمي" },
        { en: "Frontier Technologies Readiness Index", ar: "مؤشر جاهزية التكنولوجيا الرائدة" },
        { en: "Digital Quality of Life Index", ar: "مؤشر جودة الحياة الرقمية" },
        { en: "World Digital Competitiveness Ranking", ar: "مؤشر التنافسية الرقمية العالمي" },
        { en: "AI Readiness Index", ar: "المؤشر العالمي للذكاء الاصطناعي" },
        { en: "Government AI Readiness Index", ar: "مؤشر جاهزية الحكومة للذكاء الاصطناعي" },
        { en: "Digital Payment & FinTech Index", ar: "مؤشر الدفع الإلكتروني" },
        { en: "Global Cybersecurity Index (GCI)", ar: "مؤشر الأمن السيبراني" },
      ]
    },
    {
      id: 4,
      title: {
        en: "Macroeconomic Performance & Finance",
        ar: "الأداء الاقتصادي الكلي والتمويل"
      },
      description: {
        en: "Key financial figures, liquidity, and funding.",
        ar: "الأرقام المالية الكبيرة والسيولة والتمويل"
      },
      icon: Coins,
      color: "text-amber-600",
      bgColor: "bg-amber-100 dark:bg-amber-900/30",
      indicators: [
        { en: "Credit Rating (S&P, Moody's, Fitch)", ar: "مؤشر التصنيف الائتماني" },
        { en: "FDI Confidence Index (Emerging Markets)", ar: "مؤشر ثقة الاستثمار الأجنبي في الأسواق الناشئة" },
        { en: "Inflation Rate Index", ar: "مؤشر التضخم" },
        { en: "Financial Inclusion Index", ar: "مؤشر الشمول المالي" },
        { en: "Financial Literacy Index", ar: "مؤشر الثقافة المالية" },
      ]
    },
    {
      id: 5,
      title: {
        en: "Human Development & Quality of Life",
        ar: "التنمية البشرية ونوعية الحياة"
      },
      description: {
        en: "Human capital and basic resources.",
        ar: "رأس المال البشري والموارد الأساسية"
      },
      icon: Heart,
      color: "text-rose-600",
      bgColor: "bg-rose-100 dark:bg-rose-900/30",
      indicators: [
        { en: "Human Development Index (HDI)", ar: "مؤشر التنمية البشرية" },
        { en: "Quality of Life Index", ar: "مؤشر جودة الحياة" },
        { en: "Education Quality Index", ar: "مؤشر جودة التعليم" },
        { en: "Healthcare Quality Index", ar: "مؤشر جودة النظام الصحي" },
        { en: "Poverty Headcount Ratio", ar: "مؤشر الفقر" },
        { en: "Global Hunger Index (GHI)", ar: "مؤشر الجوع" },
        { en: "Adult Literacy Rate", ar: "مؤشر الأمية" },
      ]
    },
    {
      id: 6,
      title: {
        en: "Specialized Sectoral Indicators",
        ar: "مؤشرات قطاعية متخصصة"
      },
      description: {
        en: "Metrics for use in specialized feasibility studies.",
        ar: "يمكن استخدامها في دراسات الجدوى المتخصصة"
      },
      icon: Target,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
      indicators: [
        { en: "Food Self-Sufficiency Index", ar: "مؤشر الاكتفاء الذاتي الغذائي" },
        { en: "Environmental Performance Index (EPI)", ar: "مؤشر الأداء البيئي" },
        { en: "Global Real Estate Transparency Index", ar: "مؤشر الشفافية في السوق العقارية" },
        { en: "Travel & Tourism Development Index", ar: "مؤشر قطاع السياحة" },
        { en: "Global Soft Power Index", ar: "مؤشر القوة الناعمة العالمي" },
        { en: "Press Freedom Index", ar: "مؤشر حرية الصحافة" },
        { en: "Passport Power Index", ar: "مؤشر قوة جواز السفر العالمي" },
      ]
    },
  ];

  const targetAudience = [
    { en: "Foreign & International Investors", ar: "المستثمرون الأجانب والدوليون" },
    { en: "Multinational Corporations (MNCs)", ar: "الشركات المتعددة الجنسيات" },
    { en: "Governments & Regulatory Bodies", ar: "الحكومات والهيئات التنظيمية" },
    { en: "Executives & Investment Managers", ar: "المديرون التنفيذيون ومديرو الاستثمار" },
    { en: "Political & Economic Advisors", ar: "المستشارون السياسيون والاقتصاديون" },
    { en: "Financial Managers", ar: "المديرون الماليون" },
  ];

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      <JsonLd schemas={schemas} />
      {/* 1. Hero Section */}
      <PageHeader
        title={lang === 'ar' ? "موقع العراق في المؤشرات والتصنيفات الدولية" : "Iraq's Standing in International Benchmarks & Rankings"}
        description={lang === 'ar'
          ? "رؤية العالم للعراق: قراءة استراتيجية في المؤشرات والتصنيفات الدولية"
          : "Global Perspectives on Iraq: A Strategic Reading of International Benchmarks & Rankings"
        }
        bgImageUrl="/images/bi-center/international-indicators.jpg"
      />

      {/* 2. Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6 max-w-4xl text-start">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <BoldText text={lang === 'ar'
                ? "في بيئة اقتصادية تتسم بالتغير المتسارع، لم يعد كافياً للمستثمر والباحث الاعتماد على الرؤى المحلية فحسب، بل أصبح من الضروري فهم موقع العراق ضمن خارطة التنافسية العالمية."
                : "In a rapidly evolving economic landscape, it is no longer sufficient for investors and researchers to rely solely on local insights; understanding Iraq's position within the global competitiveness map has become an absolute necessity."
              } />
            </p>
          </div>

          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <div className="flex items-start gap-4">
              <Database className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {lang === 'ar' ? 'المؤشرات الدولية: قراءة معمقة لوضع العراق التنافسي عالمياً' : "International Indices & Rankings: An In-Depth Look at Iraq's Global Competitiveness"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <BoldText text={lang === 'ar'
                    ? '"القرارات الاستثمارية الكبرى تتطلب بيانات عالمية موثوقة. إن فهم ترتيب العراق في المؤشرات والتصنيفات الدولية الرئيسية (مثل التصنيف الائتماني، مؤشرات سهولة ممارسة الأعمال، ومخاطر الفساد) هو مفتاحك لتقييم المخاطر واكتشاف الفرص الحقيقية.'
                    : "\"Major investment decisions require reliable global data. Understanding Iraq's ranking in key international indicators (such as credit ratings, ease of doing business indices, and corruption risks) is your key to assessing risks and uncovering real opportunities."
                  } />
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <BoldText text={lang === 'ar'
                    ? 'في "بوابة الحكمة للإستشارات الهندسية"، نحن لا نكتفي بعرض الأرقام والإحصائيات الصادرة عن المنظمات الدولية. نقدم لك تحليلاً معمقاً ومخصصاً لكيفية تأثير هذه المؤشرات بشكل مباشر على قطاع عملك واستراتيجيتك الاستثمارية.'
                    : "At \"GATE OF WISDOM CONSULTING ENGINEERS\", we don't just present the figures and statistics issued by international organizations. We provide you with an in-depth, customized analysis of how these indices directly impact your specific sector and investment strategy."
                  } />
                </p>
                <p className="text-muted-foreground leading-relaxed font-semibold text-primary">
                  {lang === 'ar'
                    ? 'النتيجة؟ تتخذ قراراتك بناءً على معايير عالمية، وتضمن لنفسك رؤية واضحة للمشهد السوقي العراقي، مما يعزز ثقتك ويضمن استثماراً آمناً ومدروساً.'
                    : 'The result? You make decisions based on global benchmarks, ensuring a clear view of the Iraqi market landscape, which boosts your confidence and guarantees a secure, informed investment.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Categories Grid */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12 text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {lang === 'ar' ? 'الفئات الرئيسية للمؤشرات' : 'Key Indicator Categories'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {lang === 'ar'
                ? 'نحن نوفر لكم تحليلات اقتصادية شاملة تغطي كافة الفئات الرئيسية'
                : 'We provide you with comprehensive economic analyses covering all key categories'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="border-border hover:shadow-md transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0", category.bgColor)}>
                        <Icon className={cn("h-6 w-6", category.color)} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {lang === 'ar' ? category.title.ar : category.title.en}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {lang === 'ar' ? category.description.ar : category.description.en}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.indicators.map((indicator, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className={cn("h-4 w-4 flex-shrink-0 mt-0.5", category.color)} />
                          <span className="text-muted-foreground">
                            {lang === 'ar' ? indicator.ar : indicator.en}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Target Audience */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12 text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {lang === 'ar' ? 'جمهورنا المستهدف' : 'Our Target Audience'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetAudience.map((audience, i) => (
              <Card key={i} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm font-medium">
                      {lang === 'ar' ? audience.ar : audience.en}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Links */}
      <section className="bg-muted py-16 md:py-24 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
              {lang === 'ar' ? 'موارد ذات صلة' : 'Related Resources'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Legal Library Link */}
              <Link
                href={`/${lang}/legislation-library/laws-regulations`}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {lang === 'ar' ? 'المكتبة القانونية' : 'Legal Library'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === 'ar'
                    ? 'اطلع على أحدث القوانين والتشريعات في مكتبتنا'
                    : 'Access the latest laws and regulations in our comprehensive library'
                  }
                </p>
              </Link>

              {/* Statistics & Reports Link */}
              <Link
                href={`/${lang}/legislation-library/statistics-reports`}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Database className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {lang === 'ar' ? 'مركز المصادر' : 'Resource Centre'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === 'ar'
                    ? 'استكشف أحدث الإحصائيات والتقارير الوطنية في مكتبتنا'
                    : 'Explore the latest national statistics and reports in our library'
                  }
                </p>
              </Link>

              {/* Project Management Link */}
              <Link
                href={`/${lang}/services/project-management`}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {lang === 'ar' ? 'إدارة المشاريع' : 'Project Management'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === 'ar'
                    ? 'استشارات إدارة المشاريع من الفكرة إلى الإطلاق'
                    : 'Project management consulting from idea to launch'
                  }
                </p>
              </Link>

              {/* HR Management Link */}
              <Link
                href={`/${lang}/services/human-resources`}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {lang === 'ar' ? 'الموارد البشرية' : 'Human Resources'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === 'ar'
                    ? 'إدارة الموارد البشرية وبناء فريق عمل قوي'
                    : 'HR management and building a strong team'
                  }
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gift / Lead Magnet Section */}
      <ServiceGiftSection
        lang={lang}
        giftTitle={{
          en: "International Compliance Checklist",
          ar: "قائمة تدقيق الامتثال الدولي للمشاريع"
        }}
        giftDescription={{
          en: "Get Your International Compliance Checklist.",
          ar: "احصل على قائمة تدقيق الامتثال الدولي للمشاريع."
        }}
        downloadUrl={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL}/files/bi-center-gifts/03-international-compliance-checklist.pdf`}
        useEnvEndpoint={true}
        emailSubject={{
          en: "Gate of Wisdom - International Compliance Checklist",
          ar: "بوابة الحكمة - قائمة تدقيق الامتثال الدولي للمشاريع"
        }}
        emailMessage={{
          en: "Thank you for downloading the International Compliance Checklist. Please find the attachment below.",
          ar: "شكراً لتحميلك قائمة تدقيق الامتثال الدولي للمشاريع. تجد المرفق أدناه."
        }}
      />

      {/* 7. Final Call to Action */}
      <FinalCTA lang={lang} title={lang === 'ar' ? 'دعونا نساعدكم على اتخاذ قرارات استثمارية مستنيرة' : 'Let Us Help You Make Informed Investment Decisions'} description={lang === 'ar' ? 'تواصلوا معنا اليوم للحصول على رؤى دولية دقيقة توجه استثماراتكم نحو النمو المستدام.' : 'Contact us today to get accurate international insights that guide your investments towards sustainable growth.'} buttonLabel={lang === 'ar' ? 'تواصل معنا' : 'Contact Us'} border />
    </main>
  );
}
