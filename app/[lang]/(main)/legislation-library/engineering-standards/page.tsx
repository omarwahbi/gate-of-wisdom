import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Mail } from "lucide-react";
import { BoldText } from "@/components/BoldText";
import { LeadMagnetModal } from "./LeadMagnetModal";

interface StandardItem {
  number: number;
  title: string;
  title_ar: string;
  source: string;
  source_ar: string;
  year: string;
}

const iraqiStandards: StandardItem[] = [
  { number: 1, title: "Iraq Guide for Building Materials", title_ar: "الدليل العراقي لمواد البناء", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2017" },
  { number: 2, title: "Public Safety in the Execution of Construction Projects", title_ar: "السلامة العامة في تنفيذ المشاريع الانشائية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2017" },
  { number: 3, title: "Guidance Requirements for the Thermal Insulation Code", title_ar: "المتطلبات الاسترشادية لمدونة العزل الحراري", source: "وزارة الاعمار والإسكان", source_ar: "وزارة الاعمار والإسكان", year: "2024" },
  { number: 4, title: "Building Requirements for People with Special Needs", title_ar: "متطلبات البناء الخاص بذوي الاحتياجات الخاصة", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 5, title: "Code of Ethics for the Engineering Profession", title_ar: "مدونة أخلاقيات ممارسة المهنة الهندسية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2017" },
  { number: 6, title: "Loads and Forces Code", title_ar: "مدونة الأجمال والقوى", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 7, title: "Foundations and Retaining Walls Code", title_ar: "مدونة الأسس والجدران الساندة", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 8, title: "Internal Lighting Code", title_ar: "مدونة الانارة الداخلية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 9, title: "Natural Lighting Code", title_ar: "مدونة الانارة الطبيعية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 10, title: "Steel Construction Code", title_ar: "مدونة الانشاءات الفولاذية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 11, title: "Earthing and Lightning Protection Code", title_ar: "مدونة التأريض والوقاية من الصواعق", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 12, title: "Water Supply Systems in Buildings Code", title_ar: "مدونة التأسيسات المائية في المباني", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 13, title: "Air Conditioning (Cooling) Code", title_ar: "مدونة التبريد", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 14, title: "Refrigeration Code", title_ar: "مدونة التثليج", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 15, title: "Central Heating Code", title_ar: "مدونة التدفئة المركزية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 16, title: "Natural Ventilation and Sanitary Standards Code", title_ar: "مدونة التهوية الطبيعية والأصول الصحية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 17, title: "Mechanical Ventilation Code", title_ar: "مدونة التهوية الميكانيكية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 18, title: "Scaffolding Code", title_ar: "مدونة السقالات", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 19, title: "Sanitary Drainage (Sewage) in Buildings Code", title_ar: "مدونة الصرف الصحي في المباني", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2017" },
  { number: 20, title: "Acoustics Code", title_ar: "مدونة الصوتيات", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 21, title: "Thermal Insulation Code", title_ar: "مدونة العزل الحراري", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 22, title: "Waterproofing Code", title_ar: "مدونة العزل المائي", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 23, title: "Earthquake-Resistant Buildings Code", title_ar: "مدونة المباني المقاومة للزلازل", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2017" },
  { number: 24, title: "Elevators (Lifts) Code", title_ar: "مدونة المصاعد", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2014" },
  { number: 25, title: "Shelters Code", title_ar: "مدونة الملاجئ", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 26, title: "Waste Management Code", title_ar: "مدونة النفايات", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 27, title: "Fire Extinguishing Systems Code", title_ar: "مدونة أنظمة إطفاء الحريق", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2017" },
  { number: 28, title: "Urban Aesthetics (City Beautification) Code", title_ar: "مدونة جمال المدينة", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2017" },
  { number: 29, title: "Fire Protection for Buildings Code", title_ar: "مدونة حماية الأبنية من الحريق", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 30, title: "Spatial Space Requirements in Buildings Code", title_ar: "مدونة متطلبات الحيز الفضائي في المباني", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 31, title: "Fire Detection and Alarm Systems Code", title_ar: "مدونة منظومات الكشف والانذار بالحريق", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2013" },
  { number: 32, title: "Technical Specifications for Air Conditioning and Refrigeration Systems", title_ar: "المواصفات الفنية لأعمال تكييف الهواء ومنظومات التثليج", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 33, title: "Technical Specifications for Sanitary Works", title_ar: "المواصفات الفنية للأعمال الصحية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 34, title: "Technical Specifications for Electrical Works", title_ar: "المواصفات الفنية للأعمال الكهربائية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2015" },
  { number: 35, title: "Technical Specifications for Civil Works", title_ar: "المواصفات الفنية للأعمال المدنية", source: "وزارة الاعمار والإسكان، وزارة التخطيط", source_ar: "وزارة الاعمار والإسكان، وزارة التخطيط", year: "2017" },
];

export default async function EngineeringStandardsPage({ params }: { params: Promise<{ lang: "en" | "ar" }> }) {
  const { lang } = await params;

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* Hero Section */}
      <PageHeader
        title={lang === "ar" ? "الإطار المرجعي للمعايير الهندسية وكودات البناء" : "Engineering Standards & Building Codes Framework"}
        description={
          lang === "ar"
            ? "تمثل هذه القائمة المرجعية الدليل الهندسي والفني الحاكم لكافة مراحل تنفيذ المشروع، بدءاً من التصاميم الأولية وأعمال التشييد، وصولاً إلى مرحلة الفحص التشغيلي والافتتاح."
            : "This reference list serves as the governing engineering and technical guide for all stages of project execution, from initial design and construction to the operational testing and commissioning phase."
        }
        bgImageUrl="/images/legislation/engineering-standards-hero.jpg"
      />

      {/* Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground leading-tight">
            {lang === "ar"
              ? "التزامنا بالمعايير: خارطة الطريق لمشاريع هندسية آمنة ومستدامة"
              : "Our Commitment to Standards: The Roadmap for Safe and Sustainable Engineering Projects"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <BoldText
              text={
                lang === "ar"
                  ? "إن بناء المستقبل يبدأ من الالتزام الصارم بالأصول الفنية. نحن نؤمن بأن اعتماد المدونات الهندسية ليس مجرد إجراء قانوني، بل هو الضمانة الوحيدة لتفادي الإخفاقات الإنشائية والتكاليف غير المتوقعة التي تنتج عن العمل العشوائي."
                  : "Building the future begins with strict adherence to technical standards. We believe that adopting national engineering codes and environmental determinants is not merely a legal procedure, but the only guarantee to avoid structural failures and the unforeseen costs resulting from haphazard execution."
              }
            />
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <BoldText
              text={
                lang === "ar"
                  ? "إن المضي في تنفيذ المشاريع بعيداً عن هذه المرجعيات يضع استثماراتكم في مواجهة أخطار جسيمة، تبدأ من الثغرات الفنية في التشغيل، ولا تنتهي عند المساءلة القانونية أو الهدر في الموارد. لذا، نضع بين أيديكم هذه القائمة المرجعية الشاملة، وندعو كافة الشركاء والمهتمين لاعتمادها كدستور عمل ملزم، لضمان تحويل الرؤى المعمارية إلى واقع إنشائي آمن، مستدام، ومطابق لأعلى المواصفات العالمية."
                  : "Proceeding with projects without these references places your investments at grave risk—ranging from operational technical gaps to legal liabilities and resource depletion. Therefore, we provide you with this comprehensive reference list and invite all partners and stakeholders to adopt it as a binding work constitution."
              }
            />
          </p>
        </div>
      </section>

      {/* Standards List */}
      <section className="bg-muted py-16 md:py-24 border-t">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            {lang === "ar" ? "المصادر - المصادر الوطنية" : "Official Iraqi Building Codes & Technical Specifications"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {iraqiStandards.map((standard) => (
              <Card key={standard.number} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary">#{standard.number}</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {lang === "ar" ? standard.title_ar : standard.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {lang === "ar" ? standard.source_ar : standard.source} - {standard.year}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      data-standard={JSON.stringify(standard)}
                      className="shrink-0 download-btn"
                    >
                      <FileText className="w-4 h-4" />
                      <span className="sr-only">{lang === "ar" ? "تنزيل" : "Download"}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 md:py-24 border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {lang === "ar"
              ? "تحتاج إلى استشارة متخصصة؟"
              : "Need Specialized Consultation?"}
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            {lang === "ar"
              ? "فريقنا من المهندسين والخبراء مستعد لمساعدتك في تطبيق هذه المعايير على مشروعك"
              : "Our team of engineers and experts is ready to help you apply these standards to your project"}
          </p>
          <Button size="lg" className="gap-2">
            <Mail className="w-4 h-4" />
            {lang === "ar" ? "تواصل معنا" : "Contact Us"}
          </Button>
        </div>
      </section>

      {/* Lead Magnet Modal - Client Component */}
      <LeadMagnetModal lang={lang} />
    </main>
  );
}
