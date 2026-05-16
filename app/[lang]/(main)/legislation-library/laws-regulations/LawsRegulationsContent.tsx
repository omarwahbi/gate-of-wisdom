"use client";

import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, FileText, Shield, Briefcase } from "lucide-react";
import { BoldText } from "@/components/BoldText";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";
import { useState } from "react";
import Link from "next/link";

interface LawsRegulationsContentProps {
  lang: "en" | "ar";
  dictionary: any;
}

interface LawItem {
  number: number;
  title_en: string;
  title_ar: string;
  fileName: string;
}

const lawsList: LawItem[] = [
  { number: 1, title_en: "Central Organization for Standardization and Quality Control (COSQC) Law No. 54 of 1979.", title_ar: "قانون الجهاز المركزي للتقييس والسيطرة النوعية رقم (54) لسنة 1979.", fileName: "16-central-organization-standardization-quality-control-law.pdf" },
  { number: 2, title_en: "Civil Defence Law No. 44 of 2013.", title_ar: "قانون الدفاع المدني رقم 44 لسنة 2013.", fileName: "17-civil-defense-law-no44.pdf" },
  { number: 3, title_en: "Companies Law No. 21 of 1997, as amended in 2004.", title_ar: "قانون الشركات رقم 21 لسنة 1997 المعدل لسنة 2004.", fileName: "18-companies-law-no21.pdf" },
  { number: 4, title_en: "Competition and Monopoly Prevention Law No. (14) of 2010.", title_ar: "قانون المنافسة ومنع الاحتكار رقم (14) لسنة 2010.", fileName: "23-competition-anti-monopoly-law-no14-2010.pdf" },
  { number: 5, title_en: "Consumer Protection Law No. (1) of 2010.", title_ar: "قانون حماية المستهلك رقم (1) لسنة 2010.", fileName: "29-consumer-protection-law-no1-2010.pdf" },
  { number: 6, title_en: "Customs Tariff Law No. 22 of 2010.", title_ar: "قانون التعرفة الجمركية رقم 22 لسنة 2010.", fileName: "13-customs-tariff-law-no22.pdf" },
  { number: 7, title_en: "Depreciation and Amortization of Fixed Assets in Economic Units – Ministry of Finance Instructions No. (11) of 1988.", title_ar: "اندثار وإطفاء الموجودات الثابتة في الوحدات الإقتصادية – تعليمات وزارة المالية العدد (11) لسنة 1988.", fileName: "02-fixed-assets-depreciation-extinguishment-no11-1988.pdf" },
  { number: 8, title_en: "Due Diligence Rules for Financial Institutions No. (1) of 2023.", title_ar: "تعليمات قواعد العناية الواجبة للمؤسسات المالية رقم (1) لسنة 2023.", fileName: "06-due-diligence-rules-financial-institutions-no1-2023.pdf" },
  { number: 9, title_en: "Environmental Constraints Instructions for Projects No. (3) of 2011.", title_ar: "تعليمات المحددات البيئية للمشاريع رقم (3) لسنة 2011.", fileName: "04-environmental-determinants-instructions-no3-2011.pdf" },
  { number: 10, title_en: "Federal General Budget Law of the Republic of Iraq No. (13) of 2023.", title_ar: "قانون الموازنة العامة الإتحادية لجمهورية العراق، رقم (13) لسنة 2023.", fileName: "24-federal-budget-law-no13-2023.pdf" },
  { number: 11, title_en: "General Population and Housing Census Project in Iraq 2024–2025: Final Results, February 2025.", title_ar: "مشروع التعداد العام للسكان والمساكن في العراق 2024- 2025/ النتائج النهائية، شباط 2025.", fileName: "34-iraq-population-housing-census-project-2024-2025.pdf" },
  { number: 12, title_en: "Guide for Joint-Stock Companies, Registrar of Companies Directorate – Ministry of Trade.", title_ar: "دليل الشركات المساهمة / دائرة تسجيل الشركات – وزارة التجارة.", fileName: "07-joint-stock-companies-guide.pdf" },
  { number: 13, title_en: "Income Tax Law No. (113) of 1982, as amended.", title_ar: "قانون ضريبة الدخل رقم (113) لسنة 1982 وتعديلاته.", fileName: "32-income-tax-law-no113-1982-amendments.pdf" },
  { number: 14, title_en: "Industrial Cities Law No. (2) of 2019.", title_ar: "قانون المدن الصناعية رقم (2) لسنة 2019.", fileName: "22-industrial-cities-law-no2-2019.pdf" },
  { number: 15, title_en: "Industrial Investment Law for Private and Mixed Sectors No. (20) of 1998.", title_ar: "قانون الاستثمار الصناعي للقطاعين الخاص والمختلط رقم (20) لسنة 1998.", fileName: "10-industrial-investment-law.pdf" },
  { number: 16, title_en: "Investment License Application Form.", title_ar: "استمارة طلب اجازة الاستثمار.", fileName: "01-investment-license-application-form.pdf" },
  { number: 17, title_en: "Iraq Development Fund Regulation No. (3) of 2023.", title_ar: "نظام صندوق العراق للتنمية رقم (3) لسنة 2023.", fileName: "38-iraq-development-fund-system.pdf" },
  { number: 18, title_en: "Iraqi Investment Law No. (13) of 2006, amended by Law No. (2) of 2010 and Law No. (50) of 2015.", title_ar: "قانون الاستثمار العراقي رقم (13) لسنة 2006 المعدل بالقانون رقم (2) لسنة 2010، والقانون رقم (50) لسنة 2015.", fileName: "11-iraqi-investment-law.pdf" },
  { number: 19, title_en: "Iraqi Trade Law No. (30) of 1984.", title_ar: "قانون التجارة العراقي رقم 30 لسنة 1984.", fileName: "12-iraqi-commerce-law-no30-1984.pdf" },
  { number: 20, title_en: "Job Description Guide for the Ministry of Planning and Development Cooperation, 2009.", title_ar: "دليل وصف الوظائف لوزارة التخطيط والتعاون الإنمائي – المركز الوطني للإستشارات والتطوير الإداري/2009.", fileName: "09-job-description-guide-ministry-planning-2009.pdf" },
  { number: 21, title_en: "Labor Law No. (37) of 2015.", title_ar: "قانون العمل رقم 37 لسنة 2015.", fileName: "20-labor-law-no37-2015.pdf" },
  { number: 22, title_en: "Labor Law No. (71) of 1987.", title_ar: "قانون العمل رقم (71) لسنة1987.", fileName: "21-labor-law-no71-1987.pdf" },
  { number: 23, title_en: "Labor Retirement and Social Security Law No. (18) of 2023.", title_ar: "قانون التقاعد والضمان الاجتماعي للعمال رقم (18) لسنة 2023.", fileName: "14-workers-pension-social-security-no18-2023.pdf" },
  { number: 24, title_en: "Law of Protection and Improvement of the Environment No. 27 of 2009.", title_ar: "قانون حماية وتحسين البيئة رقم 27 لسنة 2009.", fileName: "env-protection-law.pdf" },
  { number: 25, title_en: "Legal Guide to Investment in Iraq – National Investment Commission.", title_ar: "الدليل القانوني للاستثمار في العراق/ الهيئة الوطنية للاستثمار-بغداد العراق.", fileName: "03-legal-guide-investment-iraq-nia-2016.pdf" },
  { number: 26, title_en: "Military Industrialization Authority Law No. (25) of 2019.", title_ar: "قانون رقم (25) لسنة 2019 -هيئة التصنيع العسكري.", fileName: "31-military-manufacturing-authority-law-no25-2019.pdf" },
  { number: 27, title_en: "National Product Promotion Guide, Ministry of Planning, 2025.", title_ar: "دليل تشجيع المنتوج الوطني (منتجات الشركات الوطنية المستوفية للشروط) وزارة التخطيط العراقية/2025.", fileName: "08-national-product-promotion-guide.pdf" },
  { number: 28, title_en: "Official Holidays Law No. (12) of 2024.", title_ar: "قانون العطلات الرسمية رقم (12) لسنة 2024.", fileName: "19-official-holidays-law-no12-2024.jpg" },
  { number: 29, title_en: "Per Diem and Travel Allowances Law No. (38) of 1980, as amended.", title_ar: "قانون مخصصات الإيفاد والسفر رقم 38 لسنة 1980 المعدل.", fileName: "33-mission-travel-allowances-law-no38-1980.pdf" },
  { number: 30, title_en: "Protection of Iraqi Products Law No. (11) of 2010.", title_ar: "قانون حماية المنتجات العراقية رقم (11) لسنة 2010.", fileName: "30-iraqi-products-protection-law-no11-2010.pdf" },
  { number: 31, title_en: "Public Economic Enterprises Profit Distribution Law No. (56) of 1982.", title_ar: "قانون توزيع ارباح المنشآت الإقتصادية العامة رقم (56) لسنة 1982.", fileName: "28-economic-projects-profits-distribution-law-no56-1982.pdf" },
  { number: 32, title_en: "Reconstruction Council Draft Law of 2019.", title_ar: "مشروع قانون مجلس الإعمار رقم (  ) لسنة 2019.", fileName: "35-reconstruction-council-draft-law-2019.pdf" },
  { number: 33, title_en: "Regulation of Commercial Agencies Law No. (79) of 2017.", title_ar: "قانون تنظيم الوكالات التجارية رقم (79) لسنة 2017.", fileName: "27-commercial-agency-organization-law-no79-2017.pdf" },
  { number: 34, title_en: "Sale and Lease of State Assets for Investment Regulation No. (12) of 2025.", title_ar: "نظام بيع وإيجار عقارات وأراضي الدولة والقطاع العام لغرض الاستثمار والمساطحة عليها رقم (12) لسنة 2025.", fileName: "36-state-real-estate-sale-lease-system-no12-2025.pdf" },
  { number: 35, title_en: "Sale and Lease of State Assets for Investment Regulation No. (6) of 2017.", title_ar: "نظام بيع وإيجار عقارات وأراضي الدولة والقطاع العام لغرض الاستثمار والمساطحة عليها رقم (6) لسنة 2017.", fileName: "37-state-real-estate-sale-lease-system-no6-2017.pdf" },
  { number: 36, title_en: "Sales Tax Assessment and Collection Instructions No. (5) of 2015.", title_ar: "تعليمات فرض وجباية ضريبة المبيعات رقم (5) لسنة 2015.", fileName: "05-sales-tax-collection-instructions-no5-2015.pdf" },
  { number: 37, title_en: "Secondment and Deputation of Employees in Iraqi and Comparative Law.", title_ar: "انتداب الموظف واعارته في القانون العراقي والمقارن.", fileName: "25-employee-secondment-law.pdf" },
  { number: 38, title_en: "State and Public Sector Employees Discipline Law No. (14) of 1991.", title_ar: "قانون انضباط موظفي الدولة والقطاع العام رقم (14) لسنة 1991.", fileName: "26-state-employees-discipline-law-no14-1991.pdf" },
  { number: 39, title_en: "Workers' Retirement and Social Security Law No. (39) of 1971.", title_ar: "قانون التقاعد والضمان الاجتماعي للعمال رقم (39) لسنة 1971.", fileName: "15-workers-pension-social-security-no39-1971.pdf" },
];

export function LawsRegulationsContent({ lang, dictionary }: LawsRegulationsContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLaw, setSelectedLaw] = useState<LawItem | null>(null);

  const mainDownloadUrl = `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL}/files/laws/iraqi-laws-regulations.pdf`;
  const baseUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL || '';

  const handleDownload = (law: LawItem) => {
    setSelectedLaw(law);
    setIsModalOpen(true);
  };

  const currentDownloadUrl = selectedLaw
    ? `${baseUrl}/files/laws/${selectedLaw.fileName}`
    : mainDownloadUrl;

  return (
    <>
      <main className="flex min-h-screen flex-col w-full text-start">
        {/* Hero Section */}
        <PageHeader
          title={lang === 'ar' ? "القوانين والتشريعات" : "Iraqi Legislation & Official Gazette"}
          description={
            lang === 'ar'
              ? "قاعدة بيانات محدثة لكافة القوانين والأنظمة والتعليمات المنشورة في جريدة الوقائع العراقية، لضمان مواءمة مشاريعك مع الأطر القانونية النافذة."
              : "An updated database of all laws, regulations, and instructions published in the Official Gazette (Al-Waqai' Al-Iraqiya), ensuring your projects align with the effective legal frameworks."
          }
          bgImageUrl="/images/legislation-library/laws-regulations.jpg"
        />

        {/* Introduction - Trust Building Content */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <div className="p-6 bg-muted/50 rounded-2xl border border-border">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {lang === 'ar'
                  ? "نقدم هذا المحتوى مجاناً بهدف بناء الثقة مع جمهورنا المستهدف، وجذب الباحثين عن القوانين والتشريعات. المحتوى قابل للتنزيل مجاناً مقابل مشاركة معلومات التواصل، مما يساعدنا على بناء قاعدة بيانات للزبائن المحتملين."
                  : "We provide this content free of charge to build trust with our target audience and attract those seeking laws and regulations. The content is available for free download in exchange for sharing contact information, helping us build a database of potential customers."
                }
              </p>
            </div>
          </div>
        </section>

        {/* Laws List */}
        <section className="bg-muted py-16 md:py-24 border-t">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              {lang === "ar" ? "قوانين وتشريعات" : "Laws & Legislations"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lawsList.map((law) => (
                <Card key={law.number} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold text-primary">#{law.number}</span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm">
                          {lang === "ar" ? law.title_ar : law.title_en}
                        </h4>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownload(law)}
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
                  ? 'حمّل "هدية **بوابة الحكمة**" الحصرية المجانية القابلة للتنزيل الآن. احصل على "القوانين والتشريعات".'
                  : 'Download Your Exclusive, Free "Gate of Wisdom" Gift Now. Get Your Iraqi laws, regulations, and instructions.'
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
                    ? 'حمّل القوانين والتشريعات الآن'
                    : 'Download Laws & Regulations Now'
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

        {/* Legal Understanding Section */}
        <section className="bg-primary/5 py-16 md:py-24 border-t">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              {lang === "ar"
                ? "فهم القانون هو حجر الزاوية لأمان استثمارك"
                : "Legal Understanding is the Foundation of Your Investment Security"
              }
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <BoldText text={lang === 'ar'
                ? 'المعلومات والبيانات الرسمية هي البداية فقط، والقيمة الحقيقية تكمن في تحويل هذه النصوص إلى استراتيجيات عمل آمنة. نحن في "بوابة الحكمة للإستشارات الهندسية" نساعدك على تفسير هذه التشريعات وضمان الامتثال التام لها بما يحمي مشروعك من المخاطر القانونية والبيروقراطية.'
                : 'Official information and data are only the beginning; the real value lies in transforming these regulations into secure business strategies. At "Gate of Wisdom Consulting Engineers", we help you interpret these legislations and ensure full compliance, protecting your project from legal and bureaucratic risks.'
              } />
            </p>
            <p className="text-lg font-medium text-foreground mb-8">
              {lang === 'ar'
                ? 'هل تحتاج إلى استشارة تخصصية حول أثر هذه القوانين على مشروعك؟'
                : 'Do you need a specialized consultation on how these laws impact your project?'
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
                    ? "تواصل مع خبرائنا لمناقشة كيف يمكن لهذه الدروس أن تؤثر على استراتيجياتكم الاستثمارية"
                    : "Connect with Our Experts to Discuss How These Lessons Impact Your Investment Strategy"
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
        giftTitle={selectedLaw
          ? (lang === 'ar' ? selectedLaw.title_ar : selectedLaw.title_en)
          : (lang === 'ar' ? 'القوانين والتشريعات' : 'Iraqi Laws & Regulations')
        }
        giftDescription={lang === 'ar'
          ? 'احصل على قاعدة بيانات محدثة لكافة القوانين والأنظمة والتعليمات المنشورة في جريدة الوقائع العراقية'
          : 'Get an updated database of all laws, regulations, and instructions published in the Official Gazette'
        }
        downloadUrl={currentDownloadUrl}
        emailSubject={selectedLaw
          ? (lang === 'ar' ? `بوابة الحكمة - تحميل ${selectedLaw.title_ar}` : `Gate of Wisdom - ${selectedLaw.title_en} Download`)
          : (lang === 'ar' ? 'بوابة الحكمة - تحميل القوانين والتشريعات' : 'Gate of Wisdom - Iraqi Laws & Regulations Download')
        }
        emailMessage={lang === 'ar'
          ? 'شكراً لتحميلك القوانين والتشريعات. تجد المرفق أدناه.'
          : 'Thank you for downloading the Iraqi Laws & Regulations. Please find the attachment below.'
        }
      />
    </>
  );
}
