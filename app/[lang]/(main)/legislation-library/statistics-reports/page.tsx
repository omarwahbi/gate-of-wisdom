import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Download, Mail } from "lucide-react";
import { BoldText } from "@/components/BoldText";

interface StatisticsReportsPageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function StatisticsReportsPage(props: StatisticsReportsPageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* Hero Section */}
      <PageHeader
        title={lang === 'ar' ? "التقارير والإحصائيات الوطنية" : "National Reports & Statistics"}
        description={
          lang === 'ar'
            ? "منصة متخصصة تضم أحدث البيانات والتقارير الصادرة عن البنك المركزي العراقي، وزارة التخطيط، والجهات القطاعية، لتمكينك من بناء خططك على أرقام رسمية دقيقة."
            : "A specialized platform featuring the latest data and reports from the Central Bank of Iraq, the Ministry of Planning, and relevant sectoral authorities, enabling you to build your plans on accurate official figures."
        }
        bgImageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Introduction - Trust Building Content */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="p-6 bg-muted/50 rounded-2xl border border-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {lang === 'ar'
                ? "نقدم هذا المحتوى مجاناً بهدف بناء الثقة مع جمهورنا المستهدف، وجذب الباحثين عن البيانات والإحصائيات الرسمية. المحتوى قابل للتنزيل مجاناً مقابل مشاركة معلومات التواصل، مما يساعدنا على بناء قاعدة بيانات للزبائن المحتملين."
                : "We provide this content free of charge to build trust with our target audience and attract those seeking official data and statistics. The content is available for free download in exchange for sharing contact information, helping us build a database of potential customers."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Gift / Lead Magnet Section */}
      <section className="bg-muted py-16 md:py-24">
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
                ? 'حمّل "هدية **بوابة الحكمة**" الحصرية المجانية القابلة للتنزيل الآن. احصل على "الإحصائيات والتقارير الوطنية".'
                : 'Download Your Exclusive, Free "Gate of Wisdom" Gift Now. Get Your Statistics & National Reports.'
              } />
            </p>

            {/* Lead Capture Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-start">
                    <label className="block text-sm font-medium mb-2" htmlFor={`name-${lang}`}>
                      {lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input
                      id={`name-${lang}`}
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder={lang === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                    />
                  </div>
                  <div className="text-start">
                    <label className="block text-sm font-medium mb-2" htmlFor={`email-${lang}`}>
                      {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input
                      id={`email-${lang}`}
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder={lang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    />
                  </div>
                </div>
                <div className="text-start">
                  <label className="block text-sm font-medium mb-2" htmlFor={`company-${lang}`}>
                    {lang === 'ar' ? 'اسم الشركة / المؤسسة' : 'Company / Organization'}
                  </label>
                  <input
                    id={`company-${lang}`}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={lang === 'ar' ? 'أدخل اسم الشركة' : 'Enter your company name'}
                  />
                </div>
                <div className="text-start">
                  <label className="block text-sm font-medium mb-2" htmlFor={`phone-${lang}`}>
                    {lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input
                    id={`phone-${lang}`}
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={lang === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg mt-4"
                >
                  <Download className="h-5 w-5" />
                  {lang === 'ar'
                    ? 'حمّل الإحصائيات والتقارير الآن'
                    : 'Download Statistics & Reports Now'
                  }
                </button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                {lang === 'ar'
                  ? 'بمجرد تعبئة النموذج، سيتم إرسال الملف إلى بريدك الإلكتروني فوراً'
                  : 'Once you fill out the form, the file will be sent to your email immediately'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
