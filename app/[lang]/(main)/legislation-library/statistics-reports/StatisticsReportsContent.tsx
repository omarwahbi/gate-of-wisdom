"use client";

import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, FileText, BarChart3, Shield } from "lucide-react";
import { BoldText } from "@/components/BoldText";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";
import { useState } from "react";
import Link from "next/link";

interface StatisticsReportsContentProps {
  lang: "en" | "ar";
  dictionary: any;
}

interface ReportItem {
  number: number;
  title_en: string;
  title_ar: string;
  fileName: string;
}

const reportsList: ReportItem[] = [
  { number: 1, title_en: "Private Sector Development Strategy 2014–2030, Advisory Commission, Prime Minister's Office, 2014.", title_ar: "استراتيجية تطوير القطاع الخاص 2014- 2030، هيئة المستشارين/ مجلس الوزراء / 2014.", fileName: "01-private-sector-development-strategy.pdf" },
  { number: 2, title_en: "National Financial Inclusion Strategy 2025–2029, Central Bank of Iraq (CBI).", title_ar: "الإستراتيجية الوطنية للشمول المالي 2025-2029، البنك المركزي العراقي.", fileName: "02-national-financial-inclusion-strategy.pdf" },
  { number: 3, title_en: "Research and Reports of the Central Statistical Organization (CSO), Ministry of Planning.", title_ar: "البحوث والتقارير الخاصة بالجهاز المركزي للإحصاء/ وزارة التخطيط.", fileName: "03-cbos-statistical-reports-ministry-of-planning.pdf" },
  { number: 4, title_en: "Arab Economic Outlook Report 2025, Arab Monetary Fund (AMF), 2025.", title_ar: "تقرير آفاق الاقتصاد العربي لعام 2025- صندوق النقد العربي/2025.", fileName: "23-arab-economy-outlook-2025.pdf" },
  { number: 5, title_en: "Iraq Economic Report 2022, Macroeconomic Policies and Economic Modeling Department, Directorate of Economic and Financial Policies, Ministry of Planning.", title_ar: "تقرير الإقتصاد العراقي 2022، قسم السياسات الكلية وبناء النماذج الاقتصادية، دائرة السياسات الاقتصادية والمالية - وزارة التخطيط.", fileName: "10-iraqi-economic-report-2022.pdf" },
  { number: 6, title_en: "Annual Economic Report 2023, Statistics and Research Department, Central Bank of Iraq (CBI).", title_ar: "التقرير الإقتصادي السنوي 2023، دائرة الإحصاء والأبحاث/ البنك المركزي العراقي.", fileName: "04-annual-economic-report-2023.pdf" },
  { number: 7, title_en: "Annual Economic Report 2024, Statistics and Research Department, Central Bank of Iraq (CBI).", title_ar: "التقرير الإقتصادي السنوي 2024، دائرة الإحصاء والأبحاث/ البنك المركزي العراقي.", fileName: "05-annual-economic-report-2024.pdf" },
  { number: 8, title_en: "Q1 2024 Quarterly Economic Report, Macroeconomics Section, Statistics and Research Department, Central Bank of Iraq (CBI).", title_ar: "التقرير الاقتصادي للفصل الاول 2024، قسم الاقتصاد الكلي، دائرة الإحصاء والأبحاث/ البنك المركزي العراقي.", fileName: "06-q1-2024-economic-report.pdf" },
  { number: 9, title_en: "Q1 2025 Quarterly Economic Report, Macroeconomics Section, Statistics and Research Department, Central Bank of Iraq (CBI).", title_ar: "التقرير الاقتصادي للفصل الاول 2025، قسم الاقتصاد الكلي، دائرة الإحصاء والأبحاث/ البنك المركزي العراقي.", fileName: "07-q1-2025-economic-report.pdf" },
  { number: 10, title_en: "Q3 2024 Quarterly Economic Report, Macroeconomics Section, Statistics and Research Department, Central Bank of Iraq (CBI).", title_ar: "التقرير الاقتصادي للفصل الثالث 2024، قسم الاقتصاد الكلي، دائرة الإحصاء والأبحاث/ البنك المركزي العراقي.", fileName: "08-q3-2024-economic-report.pdf" },
  { number: 11, title_en: "Q2 2024 Quarterly Economic Report, Macroeconomics Section, Statistics and Research Department, Central Bank of Iraq (CBI).", title_ar: "التقرير الاقتصادي للفصل الثاني 2024، قسم الاقتصاد الكلي، دائرة الإحصاء والأبحاث/ البنك المركزي العراقي.", fileName: "09-q2-2024-economic-report.pdf" },
  { number: 12, title_en: "Iraq-China Comprehensive Trade Report (2020–2030).", title_ar: "التقرير التجاري الشامل العراق والصين (2020-2030).", fileName: "11-iraq-china-trade-report-2020-2030.pdf" },
  { number: 13, title_en: "Annual Imports Report 2021, Trade Statistics Directorate, Central Statistical Organization (CSO), Ministry of Planning, April 2022.", title_ar: "التقرير السنوي للإستيرادات لسنة 2021، مديرية إحصاء التجارة، الجهاز المركزي للإحصاء/ وزارة التخطيط-نيسان 2022.", fileName: "14-annual-imports-report-2021.pdf" },
  { number: 14, title_en: "Annual Imports Report 2022, Trade Statistics Directorate, Central Statistical Organization (CSO), Ministry of Planning, July 2022.", title_ar: "التقرير السنوي للإستيرادات لسنة 2022، مديرية احصاءات التجارة، الجهاز المركزي للإحصاء/ وزارة التخطيط- تموز 2022.", fileName: "13-annual-imports-report-2022.pdf" },
  { number: 15, title_en: "Annual Imports Report 2023, Trade Statistics Directorate, Central Statistical Organization (CSO), Ministry of Planning, August 2024.", title_ar: "التقرير السنوي للإستيرادات لسنة 2023، مديرية إحصاءات التجارة، الجهاز المركزي للإحصاء/ وزارة التخطيط - آب 2024.", fileName: "12-annual-imports-report-2023.pdf" },
  { number: 16, title_en: "Annual Progress Report on the Strategic Plan of the Central Bank of Iraq (CBI) 2024.", title_ar: "التقرير السنوي للخطة الإستراتيجية للبنك المركزي العراقي لسنة 2024.", fileName: "18-annual-strategic-plan-2024.pdf" },
  { number: 17, title_en: "Annual Exports Report 2022, Trade Statistics Directorate, Central Statistical Organization (CSO), Ministry of Planning.", title_ar: "التقرير السنوي للصادرات لسنة 2022، مديرية إحصاء التجارة، الجهاز المركزي للإحصاء/ وزارة التخطيط.", fileName: "15-annual-exports-report-2022.pdf" },
  { number: 18, title_en: "Annual Iraq Balance of Payments Report 2024, Balance of Payments and Foreign Trade Section, Statistics and Research Department, Central Bank of Iraq (CBI).", title_ar: "التقرير السنوي لميزان المدفوعات العراقي 2024، قسم ميزان المدفوعات والتجارة الخارجية، دائرة الإحصاء والأبحاث/ البنك المركزي العراقي.", fileName: "16-annual-balance-of-payments-2024.pdf" },
  { number: 19, title_en: "Iraq Trade Report 2023, Balance of Payments and Foreign Trade Section, Statistics and Research Department, Central Bank of Iraq (CBI).", title_ar: "تقرير تجارة العراق لعام 2023، قسم ميزان المدفوعات والتجارة الخارجية، دائرة الإحصاء والأبحاث/ البنك المركزي العراقي.", fileName: "25-iraq-trade-report-2023.pdf" },
  { number: 20, title_en: "Evaluation of Monetary and Banking Policies in Iraq, Macroeconomics Division, Macroeconomic Policies and Economic Modeling Department, Directorate of Economic and Financial Policies, Ministry of Planning, 2023.", title_ar: "تقييم السياسات النقدية والمصرفية في العراق، شعبة الإقتصاد الكلي، قسم السياسات الكلية وبناء النماذج الإقتصادية، دائرة السياسات الإقتصادية والمالية/ وزارة التخطيط- 2023.", fileName: "24-monetary-banking-policy-report-2023.pdf" },
  { number: 21, title_en: "Iraq's Economic and Commercial Readiness 2024 (Comprehensive Analytical Report), Hussein Faisal Rashak, Director of Risk Management, Central Bank of Iraq (CBI), 2024.", title_ar: "الجاهزية الإقتصادية والتجارية للعراق 2024 (تقرير تحليلي موسع)، حسين فيصل رشك، مدير إدارة المخاطر/ البنك المركزي العراقي- 2024.", fileName: "17-iraq-economic-trade-readiness-2024.pdf" },
  { number: 22, title_en: "Summary of the National Development Plan 2024–2028, Ministry of Planning, May 2024.", title_ar: "خلاصة خطة التنمية الوطنية 2024-2028، وزارة التخطيط العراقية/ آيار 2024.", fileName: "26-national-development-plan-2024-2028.pdf" },
  { number: 23, title_en: "The Role of CBI's Development Initiatives in Achieving Economic Growth, 2015.", title_ar: "دور المبادرات الإنمائية للبنك المركزي العراقي في تحقيق التنمية الاقتصادية، 2015.", fileName: "19-cbi-development-initiatives.pdf" },
  { number: 24, title_en: "Fire Protection Code for Buildings, Ministry of Planning - Ministry of Construction and Housing - Republic of Iraq / 2013.", title_ar: "مدونة حماية الأبنية من الحريق، وزارة التخطيط-وزارة الاعمار والإسكان-جمهورية العراق/2013.", fileName: "27-fire-protection-buildings-code.pdf" },
  { number: 25, title_en: "Annual Statistical Bulletin 2022, Statistics Department, Central Bank of Iraq (CBI).", title_ar: "النشرة الإحصائية السنوية 2022، دائرة الإحصاء/ البنك المركزي العراقي.", fileName: "20-annual-statistical-bulletin-2022.pdf" },
  { number: 26, title_en: "Annual Statistical Bulletin 2023, Statistics Department, Central Bank of Iraq (CBI).", title_ar: "النشرة الإحصائية السنوية 2023، دائرة الإحصاء/ البنك المركزي العراقي.", fileName: "21-annual-statistical-bulletin-2023.pdf" },
  { number: 27, title_en: "Annual Statistical Bulletin 2024, Statistics Department, Central Bank of Iraq (CBI).", title_ar: "النشرة الإحصائية السنوية 2024، دائرة الإحصاء/ البنك المركزي العراقي.", fileName: "22-annual-statistical-bulletin-2024.pdf" },
];

export function StatisticsReportsContent({ lang, dictionary }: StatisticsReportsContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);

  const mainDownloadUrl = `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL}/files/studies-reports/statistics-reports.pdf`;
  const baseUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL || '';

  const handleDownload = (report: ReportItem) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const currentDownloadUrl = selectedReport
    ? `${baseUrl}/files/studies-reports/${selectedReport.fileName}`
    : mainDownloadUrl;

  return (
    <>
      <main className="flex min-h-screen flex-col w-full text-start">
        {/* Hero Section */}
        <PageHeader
          title={lang === 'ar' ? "التقارير والإحصائيات الوطنية" : "National Reports & Statistics"}
          description={
            lang === 'ar'
              ? "منصة متخصصة تضم أحدث البيانات والتقارير الصادرة عن البنك المركزي العراقي، وزارة التخطيط، والجهات القطاعية، لتمكينك من بناء خططك على أرقام رسمية دقيقة."
              : "A specialized platform featuring the latest data and reports from the Central Bank of Iraq, the Ministry of Planning, and relevant sectoral authorities, enabling you to build your plans on accurate official figures."
          }
          bgImageUrl="/images/legislation-library/statistics-reports.jpg"
        />

        {/* Introduction - Trust Building Content */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <div className="p-6 bg-muted/50 rounded-2xl border border-border">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {lang === 'ar'
                  ? "نقدم هذا المحتوى مجاناً بهدف بناء الثقة مع جمهورنا المستهدف، وجذب الباحثين عن التقارير والإحصائيات. المحتوى قابل للتنزيل مجاناً مقابل مشاركة معلومات التواصل، مما يساعدنا على بناء قاعدة بيانات للزبائن المحتملين."
                  : "We provide this content free of charge to build trust with our target audience and attract those seeking reports and statistics. The content is available for free download in exchange for sharing contact information, helping us build a database of potential customers."
                }
              </p>
            </div>
          </div>
        </section>

        {/* Reports List */}
        <section className="bg-muted py-16 md:py-24 border-t">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              {lang === "ar" ? "الإحصائيات والتقارير الوطنية" : "National Reports & Statistics"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reportsList.map((report) => (
                <Card key={report.number} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold text-primary">#{report.number}</span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm">
                          {lang === "ar" ? report.title_ar : report.title_en}
                        </h4>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownload(report)}
                        className="shrink-0 download-btn"
                      >
                        <Download className="w-4 h-4" />
                        <span className="sr-only">{lang === "ar" ? "تنزيل" : "Download"}</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gift / Lead Magnet Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {lang === 'ar'
                  ? "امتلك أدوات النجاح الآن"
                  : "Master the Tools of Success Today"
                }
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                <BoldText text={lang === 'ar'
                  ? 'حمّل "هدية **بوابة الحكمة**" الحصرية المجانية القابلة للتنزيل الآن. احصل على "الاحصائيات والتقارير الوطنية".'
                  : 'Download Your Exclusive, Free "Gate of Wisdom" Gift Now. Get Your National Reports & Statistics.'
                } />
              </p>

              {/* Lead Magnet Modal Trigger */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <p className="text-sm text-muted-foreground mb-6">
                  {lang === 'ar'
                    ? 'قدّم معلوماتك للحصول على الملف المجاني'
                    : 'Provide your information to get the free file'
                  }
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <Download className="h-5 w-5" />
                  {lang === 'ar'
                    ? 'حمّل الاحصائيات والتقارير الآن'
                    : 'Download Statistics & Reports Now'
                  }
                </button>

                <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  {lang === 'ar'
                    ? 'بمجرد تعبئة النموذج، سيتم فتح رابط التحميل فوراً'
                    : 'Once you fill out the form, the download link will open immediately'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Engineering Section */}
        <section className="bg-primary/5 py-16 md:py-24 border-t">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <BarChart3 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              {lang === "ar"
                ? "الأرقام لا تكذب، لكنها تحتاج إلى من يقرأ ما خلفها"
                : "Numbers Don't Lie, But They Need Someone to Read Between the Lines"
              }
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <BoldText text={lang === 'ar'
                ? 'البيانات والإحصائيات الرسمية هي الوقود الحقيقي لنجاح دراسات الجدوى وخطط النمو. في "بوابة الحكمة للإستشارات الهندسية"، نحن لا نكتفي بجمع الأرقام، بل نقوم بـ هندسة البيانات لتحويلها إلى فرص استثمارية ملموسة وخطط عمل واقعية.'
                : "Official data and statistics are the real fuel for successful feasibility studies and growth plans. At \"Gate of Wisdom Consulting Engineers\", we don't just collect figures; we engineer data to transform it into tangible investment opportunities and realistic action plans."
              } />
            </p>
            <p className="text-lg font-medium text-foreground mb-8">
              {lang === 'ar'
                ? 'هل تريد معرفة كيف تؤثر هذه الإحصائيات على حصتك السوقية أو جدوى مشروعك القادم؟'
                : 'Do you want to know how these statistics impact your market share or the feasibility of your next project?'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                {lang === 'ar' ? 'اكتب لنا' : 'Write Us'}
              </button>
              <button className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors">
                {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
              </button>
              <button className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-colors">
                {lang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
          </div>
        </section>

        {/* Unified Thank You / CTA Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <BoldText text={lang === 'ar'
                  ? "شكراً لاهتمامك بالرؤى الهندسية والاستشارية من **بوابة الحكمة**!"
                  : "Thank You for Your Interest in Engineering & Consulting Insights from Gate of Wisdom!"
                } />
              </h2>

              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {lang === 'ar'
                    ? "نأمل أن تكون هذه المواد بمثابة الأدوات الفورية التي تحتاجها لبدء رحلتك نحو الكفاءة والنمو."
                    : "We hope these materials serve as the immediate tools you need to start your journey toward efficiency and growth."
                  }
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-medium text-foreground">
                  {lang === 'ar'
                    ? "تواصل مع خبرائنا لمناقشة كيف يمكن لهذه الأرقام أن تؤثر على استراتيجياتكم الاستثمارية"
                    : "Connect with Our Experts to Discuss How These Figures Impact Your Investment Strategy"
                  }
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    {lang === 'ar' ? 'اكتب لنا' : 'Write Us'}
                  </button>
                  <button className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors">
                    {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
                  </button>
                  <button className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-colors">
                    {lang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </button>
                </div>

                <div className="pt-6 border-t border-border mt-8">
                  <Link
                    href={`/${lang}/contact`}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    {lang === 'ar' ? 'احجز استشارة أولية مجانية' : 'Book a Free Initial Consultation'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lead Magnet Modal */}
      <LeadMagnetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        giftTitle={selectedReport
          ? (lang === 'ar' ? selectedReport.title_ar : selectedReport.title_en)
          : (lang === 'ar' ? 'الإحصائيات والتقارير الوطنية' : 'National Reports & Statistics')
        }
        giftDescription={lang === 'ar'
          ? 'احصل على أحدث البيانات والتقارير الصادرة عن البنك المركزي العراقي ووزارة التخطيط'
          : 'Get the latest data and reports from the Central Bank of Iraq and Ministry of Planning'
        }
        downloadUrl={currentDownloadUrl}
        emailSubject={selectedReport
          ? (lang === 'ar' ? `بوابة الحكمة - تحميل ${selectedReport.title_ar}` : `Gate of Wisdom - ${selectedReport.title_en} Download`)
          : (lang === 'ar' ? 'بوابة الحكمة - تحميل الإحصائيات والتقارير الوطنية' : 'Gate of Wisdom - National Reports & Statistics Download')
        }
        emailMessage={lang === 'ar'
          ? 'شكراً لتحميلك الإحصائيات والتقارير الوطنية. تجد المرفق أدناه.'
          : 'Thank you for downloading the National Reports & Statistics. Please find the attachment below.'
        }
      />
    </>
  );
}
