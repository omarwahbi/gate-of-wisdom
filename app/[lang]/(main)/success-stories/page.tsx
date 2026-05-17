import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase, TrendingUp, AlertTriangle, Users, Building2, Factory, ShoppingCart, Smartphone, Truck, Wrench, Plane, Train } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BoldText } from "@/components/BoldText";
import { FinalCTA } from "@/components/FinalCTA";

interface SuccessStoriesPageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

interface CaseStudy {
  id: number;
  title: string;
  title_ar: string;
  subtitle: string;
  subtitle_ar: string;
  shortDescription: string;
  shortDescription_ar: string;
  icon: string;
  linkedService: string;
  linkedServiceLabel: string;
  linkedServiceLabel_ar: string;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("success_stories", lang as "en" | "ar", "success-stories");
}

export default async function SuccessStoriesPage(props: SuccessStoriesPageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Berlin Airport: The €4 Billion Lesson",
      title_ar: "مطار برلين برندبورغ: لعنة الـ 4 مليارات يورو",
      subtitle: "What happens when unified consulting oversight is missing?",
      subtitle_ar: "ماذا يحدث عندما يغيب الإشراف الاستشاري الموحد؟",
      shortDescription: "A 9-year delay and €4 billion budget overrun due to conflicting variation orders and lack of unified consulting oversight.",
      shortDescription_ar: "تأخير 9 سنوات وتجاوز الميزانية بـ 4 مليارات يورو بسبب أوامر التغيير المتضاربة وغياب الإشراف الاستشاري الموحد.",
      icon: "Plane",
      linkedService: "/services/project-management",
      linkedServiceLabel: "Project Management Consulting",
      linkedServiceLabel_ar: "استشارات إدارة المشاريع"
    },
    {
      id: 2,
      title: "Dubai Metro: How Time Engineering Defeated the Impossible",
      title_ar: "مترو دبي: كيف هزمت هندسة الجدولة تحديات الزمن والمكان؟",
      subtitle: "Completing the world's longest automated metro on time (09/09/09)",
      subtitle_ar: "إكمال أطول مترو آلي في العالم في الوقت المحدد (09/09/09)",
      shortDescription: "On-time delivery through rigorous Strategic Scheduling and Critical Path monitoring.",
      shortDescription_ar: "التسليم في الوقت المحدد من خلال الجدولة الاستراتيجية الصارمة ومراقبة المسار الحرج.",
      icon: "Train",
      linkedService: "/services/project-management",
      linkedServiceLabel: "Project Management Consulting",
      linkedServiceLabel_ar: "استشارات إدارة المشاريع"
    },
    {
      id: 3,
      title: "Aramex: The Genius of Local Solutions vs. Global Giants",
      title_ar: "تجربة أرامكس: عبقرية الحلول المحلية في مواجهة العمالقة",
      subtitle: "How did Aramex defeat global giants by understanding the 'narrow alleyways' of our Arab cities?",
      subtitle_ar: "كيف هزمت أرامكس العمالقة العالميين بفهم 'الأزقة الضيقة' في مدننا العربية؟",
      shortDescription: "Local expertise and cultural understanding outpaced globalization with innovative logistics solutions.",
      shortDescription_ar: "الخبرة المحلية والفهم الثقافي تفوقا على العولمة بحلول لوجستية مبتكرة.",
      icon: "Truck",
      linkedService: "/services/market-studies",
      linkedServiceLabel: "Market Studies",
      linkedServiceLabel_ar: "دراسات السوق"
    },
    {
      id: 4,
      title: "Dubai Lagoon: The Optimism Trap",
      title_ar: "مجمع 'دبي لا جون': فخ التفاؤل المفرط",
      subtitle: "Why did a mega-project fail during the 2008 crisis?",
      subtitle_ar: "لماذا لم يصمد 'دبي لاجون' أمام أزمة 2008؟",
      shortDescription: "When paper numbers collapse against reality - the importance of realistic feasibility studies.",
      shortDescription_ar: "عندما تنهار الأرقام الورقية أمام الواقع: أهمية دراسات الجدوى الواقعية.",
      icon: "AlertTriangle",
      linkedService: "/services/feasibility-studies",
      linkedServiceLabel: "Feasibility Studies",
      linkedServiceLabel_ar: "دراسات الجدوى"
    },
    {
      id: 5,
      title: "Tesla Giga Berlin: The Compliance Crisis",
      title_ar: "مصنع 'تسلا' في برلين: ثمن تجاهل القوانين المحلية",
      subtitle: "Elon Musk vs. Bureaucracy – Is tech enough for success?",
      subtitle_ar: "إيلون ماسك في مواجهة البيروقراطية: هل تكفي التكنولوجيا وحدها لنجاح المشروع؟",
      shortDescription: "Even tech giants must respect local regulations and environmental compliance.",
      shortDescription_ar: "حتى عمالقة التكنولوجيا يجب أن يحترموا القوانين المحلية والامتثال البيئي.",
      icon: "Factory",
      linkedService: "/services/feasibility-studies",
      linkedServiceLabel: "Feasibility Studies",
      linkedServiceLabel_ar: "دراسات الجدوى"
    },
    {
      id: 6,
      title: "Zain & Etisalat: From Bureaucracy to Performance Excellence",
      title_ar: "تجربة 'زين' و 'اتصالات': التحول من 'البيروقراطية' إلى 'عولمة الأداء'",
      subtitle: "How did telecom companies evolve from administrative bloat into global giants?",
      subtitle_ar: "كيف تحولت شركات الاتصالات من ترهل إداري إلى عمالقة عابرين للقارات؟",
      shortDescription: "Transforming from bureaucratic structures to performance-driven multinational operations.",
      shortDescription_ar: "التحول من الهياكل البيروقراطية إلى عمليات متعددة الجنسيات قائمة على الأداء.",
      icon: "Smartphone",
      linkedService: "/services/performance-efficiency",
      linkedServiceLabel: "Performance Efficiency Assessment",
      linkedServiceLabel_ar: "تقييم كفاءة الأداء"
    },
    {
      id: 7,
      title: "Nissan 2025: When Selling Headquarters is the Price of Survival",
      title_ar: "تجربة نيسان 2025: عندما يصبح 'بيع المقر' هو ثمن النجاة",
      subtitle: "Even Giants Stumble: How operational bloat turned into an existential crisis",
      subtitle_ar: "حتى العمالقة يترنحون: كيف تحول الترهل التشغيلي إلى أزمة وجودية",
      shortDescription: "Operational inefficiency led to an existential crisis requiring drastic restructuring measures.",
      shortDescription_ar: "عدم الكفاءة التشغيلية أدى إلى أزمة وجودية تطلبت إجراءات إعادة هيكلة جذرية.",
      icon: "AlertTriangle",
      linkedService: "/services/performance-efficiency",
      linkedServiceLabel: "Performance Efficiency Assessment",
      linkedServiceLabel_ar: "تقييم كفاءة الأداء"
    },
    {
      id: 8,
      title: "Oriental Weavers: Building an Institution That Survives Individuals",
      title_ar: "تجربة النساجون الشرقيون: كيف تبني مؤسسة لا تموت برحيل الأفراد؟",
      subtitle: "From a family business to a global empire – The secret of moving from 'Trust-based' to 'Performance-based' management",
      subtitle_ar: "من مؤسسة عائلية إلى إمبراطورية عالمية: سر التحول من 'إدارة الثقة' إلى 'إدارة الأداء'",
      shortDescription: "The transition from family-run operations to professional HR management systems.",
      shortDescription_ar: "الانتقال من العمليات العائلية إلى أنظمة إدارة الموارد البشرية المهنية.",
      icon: "Users",
      linkedService: "/services/human-resources",
      linkedServiceLabel: "Human Resources Management",
      linkedServiceLabel_ar: "إدارة الموارد البشرية"
    },
    {
      id: 9,
      title: "Edita: The Power of Branding vs. Price Wars",
      title_ar: "'إيديتا': قوة العلامة التجارية في مواجهة حروب الأسعار",
      subtitle: "How did Edita get customers to pay a 30% premium for their snacks?",
      subtitle_ar: "كيف دفعت 'إيديتا' الزبائن لطلب منتجاتها بالاسم ودفع سعر أعلى؟",
      shortDescription: "Brand engineering transformed generic commodities into premium products consumers ask for by name.",
      shortDescription_ar: "هندسة العلامة التجارية حولت السلع العادية إلى منتجات متميزة يطلبها المستهلكون بالاسم.",
      icon: "ShoppingCart",
      linkedService: "/services/marketing-sales",
      linkedServiceLabel: "Marketing & Sales",
      linkedServiceLabel_ar: "التسويق والمبيعات"
    },
    {
      id: 10,
      title: "Noon: Local Culture, Global Success",
      title_ar: "'نون': مواءمة التكنولوجيا مع الثقافة المحلية",
      subtitle: "How did Noon outpace Amazon in the Middle East?",
      subtitle_ar: "كيف هزمت 'نون' العملاق العالمي أمازون في عقر داره بالشرق الأوسط؟",
      shortDescription: "Cultural intelligence and local adaptation (Cash on Delivery) created competitive advantage.",
      shortDescription_ar: "الذكاء الثقافي والتكيف المحلي (الدفع عند الاستلام) خلق ميزة تنافسية.",
      icon: "ShoppingCart",
      linkedService: "/services/marketing-sales",
      linkedServiceLabel: "Marketing & Sales",
      linkedServiceLabel_ar: "التسويق والمبيعات"
    },
    {
      id: 11,
      title: "Petromin: From Selling Products to Solutions",
      title_ar: "'بترومين': التحول من بيع 'منتج' إلى بيع 'حلول'",
      subtitle: "The secret to doubling profits by focusing on Customer Lifetime Value (CLV)",
      subtitle_ar: "سر مضاعفة الأرباح عبر القيمة طويلة الأمد للزبون (CLV)",
      shortDescription: "Transitioning from product sales to service-based customer relationships doubled CLV.",
      shortDescription_ar: "الانتقال من مبيعات المنتجات إلى علاقات العملاء القائمة على الخدمات ضاعف القيمة طويلة الأمد.",
      icon: "Wrench",
      linkedService: "/services/marketing-sales",
      linkedServiceLabel: "Marketing & Sales",
      linkedServiceLabel_ar: "التسويق والمبيعات"
    },
    {
      id: 12,
      title: "Careem: Local Insights vs. Global Capital",
      title_ar: "تجربة كريم: كيف هزمت 'الخبرة المحلية' عمالقة التكنولوجيا؟",
      subtitle: "Why did Uber pay $3.1 billion to acquire its local rival?",
      subtitle_ar: "لماذا دفع العملاق العالمي 'أوبر' 3.1 مليار دولار للاستحواذ على منافسه المحلي؟",
      shortDescription: "Deep local market understanding and CRM excellence defeated global capital and technology.",
      shortDescription_ar: "الفهم العميق للسوق المحلي وتميز إدارة علاقات العملاء هزما رأس المال والتكنولوجيا العالميين.",
      icon: "Briefcase",
      linkedService: "/services/crm",
      linkedServiceLabel: "CRM Solutions",
      linkedServiceLabel_ar: "حلول إدارة علاقات العملاء"
    }
  ];

  const iconMap: Record<string, any> = {
    Building2,
    TrendingUp,
    Truck,
    AlertTriangle,
    Factory,
    Smartphone,
    Users,
    ShoppingCart,
    Wrench,
    Briefcase,
    Plane,
    Train
  };

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* Hero Section */}
      <PageHeader
        title={lang === 'ar' ? "قصص من واقعنا: تجارب إقليمية ورؤى استراتيجية" : "Real-World Stories: Regional Successes & Strategic Insights"}
        description={
          lang === 'ar'
            ? "خلف كل قصة نجاح أو عثرة تجارية تكمن دروس لا تقدر بثمن. في \"**بوابة الحكمة للإستشارات الهندسية**\"، لا نكتفي بتقديم النظريات، بل نستخلص العبر من تجارب الشركات التي واجهت تحديات حقيقية في بيئتنا الإقليمية. هذا القسم هو مختبرنا المعرفي، حيث نحلل نجاحات شركات مثل (كريم، أرامكس، وزين) لنكتشف (الخبرة المحلية) التي هزمت العولمة، ونشرح أسباب تعثر عمالقة مثل (نوكيا وكوداك) لنتعلم كيف نحمي استثماراتنا من مفاجآت التغيير. إنها دعوة لتتعلم من تجارب الآخرين، لتبني نجاحك الخاص على أسس من اليقين والحكمة."
            : "Behind every success story or business setback lies an invaluable lesson. At \"Gate of Wisdom Consulting Engineers\", we go beyond theory to distill wisdom from the experiences of companies that faced real challenges in our regional environment. This section is our Knowledge Lab, where we analyze the triumphs of companies like (Careem, Aramex, and Zain) to discover the (Local Expertise) that outpaced globalization. We also dissect the setbacks of giants like (Nokia and Kodak) to learn how to shield our investments from the surprises of change. It is an invitation to learn from others' experiences, so you can build your own success on a foundation of certainty and wisdom."
        }
        bgImageUrl="/images/success-stories/success-stories-hero.jpg"
      />

      {/* Case Studies Grid */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((caseStudy) => {
              const Icon = iconMap[caseStudy.icon] || Briefcase;
              const currentCase = lang === 'ar' ? caseStudy.title_ar : caseStudy.title;
              const currentSubtitle = lang === 'ar' ? caseStudy.subtitle_ar : caseStudy.subtitle;
              const currentDescription = lang === 'ar' ? caseStudy.shortDescription_ar : caseStudy.shortDescription;
              const linkedServiceLabel = lang === 'ar' ? caseStudy.linkedServiceLabel_ar : caseStudy.linkedServiceLabel;

              return (
                <Link
                  key={caseStudy.id}
                  href={`/${lang}${caseStudy.linkedService}`}
                  className="block h-full"
                >
                  <Card className={cn(
                    "h-full border-border transition-all duration-300 flex flex-col relative overflow-hidden group/card hover:border-primary/50 hover:shadow-lg bg-card hover:-translate-y-1"
                  )}>
                    <div className="absolute top-0 end-0 p-6 opacity-5 transition-transform duration-500 group-hover/card:opacity-10 group-hover/card:scale-110">
                      <Icon className="w-32 h-32 text-primary" />
                    </div>

                    <CardHeader className="relative z-10 pb-4">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-colors duration-300 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        {lang === 'ar' ? `القصة (${caseStudy.id})` : `Case Study (${caseStudy.id})`}
                      </div>
                      <CardTitle className="text-xl font-bold leading-tight text-foreground group-hover/card:text-primary">
                        {currentCase}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative z-10 flex flex-col flex-1 justify-between">
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-muted-foreground">
                          {currentSubtitle}
                        </p>
                        <CardDescription className="text-base text-muted-foreground leading-relaxed">
                          {currentDescription}
                        </CardDescription>
                      </div>

                      <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-border">
                        <div className="flex items-center text-primary opacity-80 group-hover/card:opacity-100 transition-opacity">
                          <span className="text-sm font-semibold">
                            {lang === 'ar'
                              ? `اقرأ القصة الكاملة → ${linkedServiceLabel}`
                              : `Read Full Story → ${linkedServiceLabel}`
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <ArrowRight className={cn(
                            "w-3 h-3 transition-transform duration-300",
                            lang === 'ar' ? 'rotate-180 group-hover/card:-translate-x-1' : 'group-hover/card:translate-x-1'
                          )} />
                          <span>
                            {lang === 'ar'
                              ? 'تعرف على منهجيتنا في تحويل هذه العبر إلى نتائج واقعية'
                              : 'Learn our methodology for turning insights into real results'
                            }
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA
        lang={lang}
        title={lang === 'ar' ? 'الدروس وحدها لا تكفي، التطبيق هو الفرق' : 'Lessons Alone Aren\'t Enough — Execution Is the Difference'}
        description={lang === 'ar' ? 'خلف كل قصة نجاح منهجية واضحة. فريقنا مستعد لمساعدتك في تحويل هذه الرؤى إلى استراتيجيات تنفيذية تحمي استثمارك وتضمن نموه.' : 'Behind every success story is a clear methodology. Our team is ready to help you turn these insights into executable strategies that protect your investment and drive growth.'}
        border
      />
    </main>
  );
}
