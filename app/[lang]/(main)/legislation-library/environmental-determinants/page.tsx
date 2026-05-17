import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Shield } from "lucide-react";
import { BoldText } from "@/components/BoldText";
import { FinalCTA } from "@/components/FinalCTA";
import { LeadMagnetModal } from "./LeadMagnetModal";

interface EnvironmentalLaw {
  number: number;
  title: string;
  title_ar: string;
  source: string;
  source_ar: string;
  year: string;
}

const environmentalLaws: EnvironmentalLaw[] = [
  { number: 1, title: "National Strategy for the Protection and Improvement of the Environment in Iraq", title_ar: "الاستراتيجية الوطنية لحماية وتحسين البيئة في العراق", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2024-2030" },
  { number: 2, title: "Instructions for Hazardous Waste Management No. (3)", title_ar: "تعليمات إدارة النفايات الخطرة رقم (3)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2015" },
  { number: 3, title: "Instructions for the Use of Treated Wastewater for Irrigation No. (3)", title_ar: "تعليمات استخدام مياه الصرف الصحي المعالجة في الري رقم (3)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2012" },
  { number: 4, title: "Instructions for the Preservation of Documents in the Ministry of Environment No. (1)", title_ar: "تعليمات الحفاظ على الوثائق في وزارة البيئة رقم (1)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2025" },
  { number: 5, title: "Instructions for Safety in Storage and Handling of Chemical Substances No. (4)", title_ar: "تعليمات السلامة في خزن وتداول المواد الكيمياوية رقم (4)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "1989" },
  { number: 6, title: "Instructions for Environmental Determinants for Establishing Projects and Monitoring Implementation Safety No. (3)", title_ar: "تعليمات المحددات البيئية لإنشاء المشاريع ومراقبة سلامة تنفيذها رقم (3)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2011" },
  { number: 7, title: "Instructions for the Identification of Communicable Diseases No. (1)", title_ar: "تعليمات تحديد الأمراض الانتقالية رقم (1)", source: "وزارة الصحة", source_ar: "وزارة الصحة", year: "2007" },
  { number: 8, title: "Instructions for the Manufacture and Handling of Pesticides No. (2)", title_ar: "تعليمات تصنيع وتداول المبيدات الحشرية رقم (2)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "1990" },
  { number: 9, title: "Instructions for Environmental Protection from Municipal Waste No. (2)", title_ar: "تعليمات حماية البيئة من مخلفات البلدية رقم (2)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2014" },
  { number: 10, title: "Instructions for Accreditation Requirements for Consulting Offices and Laboratories in Environmental Protection No. (3)", title_ar: "تعليمات شروط اعتماد المكاتب الاستشارية والمختبرات في مجال حماية البيئة رقم (3)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2014" },
  { number: 11, title: "Instructions for the Environmental Protection Fund No. (1)", title_ar: "تعليمات صندوق حماية البيئة رقم (1)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2013" },
  { number: 12, title: "Instructions for National Emission Determinants for Activities and Works No. (3)", title_ar: "تعليمات محددات الانبعاث الوطنية للأنشطة والأعمال رقم (3)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2012" },
  { number: 13, title: "Guiding Manual for Environmental Impact Assessment (EIA)", title_ar: "الدليل الاسترشادية لتقييم الأثر البيئي", source: "هيئة المنظمة الاقتصادية الخاصة - الدقم - سلطنة عمان", source_ar: "هيئة المنظمة الاقتصادية الخاصة - الدقم - سلطنة عمان", year: "2017" },
  { number: 14, title: "Regulations for Organizing Environmental Courses and Seminars No. (1)", title_ar: "ضوابط تنظيم الدورات والندوات البيئية رقم (1)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2018" },
  { number: 15, title: "Regulations for Granting Environmental Approval for Projects Affecting World Heritage Properties No. (1)", title_ar: "ضوابط منح الموافقة البيئية للمشاريع التي تؤثر على ممتلك التراث العالمي رقم (1)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2017" },
  { number: 16, title: "Plant Quarantine Law No. 76", title_ar: "قانون الحجر الزراعي رقم 76", source: "وزارة الزراعة", source_ar: "وزارة الزراعة", year: "2012" },
  { number: 17, title: "Noise Control Law No. (41)", title_ar: "قانون السيطرة على الضوضاء رقم (41)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2015" },
  { number: 18, title: "Animal Health Law No. 32", title_ar: "قانون الصحة الحيوانية رقم 32", source: "وزارة الزراعة", source_ar: "وزارة الزراعة", year: "2013" },
  { number: 19, title: "Public Health Law No. (89)", title_ar: "قانون الصحة العامة رقم (89)", source: "وزارة الصحة", source_ar: "وزارة الصحة", year: "1981" },
  { number: 20, title: "Forests and Woodlands Law No. (30)", title_ar: "قانون الغابات والمشاجر رقم (30)", source: "وزارة الزراعة", source_ar: "وزارة الزراعة", year: "2009" },
  { number: 21, title: "Natural Reserves Law No. (2)", title_ar: "قانون المحميات الطبيعية رقم (2)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2014" },
  { number: 22, title: "Iraqi Environmental Protection and Improvement Law No. (27)", title_ar: "قانون حماية وتحسين البيئة العراقي رقم (27)", source: "المرجع القانوني الأساسي", source_ar: "المرجع القانوني الأساسي", year: "2009" },
  { number: 23, title: "Ministry of Environment Law No. (37)", title_ar: "قانون وزارة البيئة رقم (37)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2008" },
  { number: 24, title: "National Emission Determinants for Activities and Works No. (3)", title_ar: "محددات الانبعاث الوطنية للأنشطة والأعمال رقم (3)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2012" },
  { number: 25, title: "System for the Preservation of Water Resources No. (2)", title_ar: "نظام الحفاظ على الموارد المائية رقم (2)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2001" },
  { number: 26, title: "Ambient Air Quality Protection from Pollution System No. (4)", title_ar: "نظام حماية الهواء المحيط من التلوث رقم (4)", source: "وزارة البيئة", source_ar: "وزارة البيئة", year: "2012" },
];

export default async function EnvironmentalDeterminantsPage({ params }: { params: Promise<{ lang: "en" | "ar" }> }) {
  const { lang } = await params;

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* Hero Section */}
      <PageHeader
        title={lang === "ar" ? "قوانين المحددات البيئية" : "Laws of Environmental Determinants"}
        description={
          lang === "ar"
            ? "حزمة متكاملة من القوانين والأنظمة والتعليمات النافذة في جمهورية العراق. تهدف هذه القائمة المرجعية إلى ضمان امتثال المشروع لكافة المحددات البيئية، ومتطلبات السلامة العامة."
            : "An integrated framework of laws, regulations, and instructions effective in the Republic of Iraq. This reference list aims to ensure the project's compliance with all environmental determinants and public safety requirements."
        }
        bgImageUrl="/images/legislation/environmental-determinants-hero.jpg"
      />

      {/* Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground leading-tight">
            {lang === "ar"
              ? "رؤيتنا للاستدامة: التوازن بين النمو وحماية البيئة"
              : "Our Vision for Sustainability: Balancing Growth and Environmental Protection"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <BoldText
              text={
                lang === "ar"
                  ? "تعد الاستدامة البيئية اليوم حجر الزاوية الذي لا ينفصل عن الجدوى الاقتصادية لأي نشاط استثماري رائد. فالمشروع الناجح هو الذي يحقق توازناً دقيقاً بين طموحات التوسع وحماية المحيط الحيوي."
                  : "Today, environmental sustainability is an inseparable cornerstone of the economic feasibility of any leading investment activity. A truly successful project is one that strikes a delicate balance between expansion ambitions and the preservation of the biosphere."
              }
            />
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <BoldText
              text={
                lang === "ar"
                  ? "لقد ولى زمن النظر إلى الامتثال البيئي كإجراء تكميلي، حيث تحول اليوم إلى ضمانة استثمارية وشرطاً جوهرياً لضمان ديمومة التشغيل وحماية رأس مالكم من المخاطر القانونية والتشغيلية. نحن ندعوكم للاطلاع على محدداتنا البيئية، لنعمل معاً على بناء مشاريع تخدم الاقتصاد وتحترم الطبيعة."
                  : "The era of viewing environmental compliance as a mere supplementary procedure is over. It has evolved into a core investment safeguard and a fundamental prerequisite for operational continuity and the protection of capital from legal and operational risks. We invite you to explore our environmental determinants, as we work together to build projects that serve the economy while respecting nature."
              }
            />
          </p>
        </div>
      </section>

      {/* Laws List */}
      <section className="bg-muted py-16 md:py-24 border-t">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            {lang === "ar" ? "التشريعات والقوانين البيئية العراقية" : "Iraqi Environmental Laws and Regulations"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {environmentalLaws.map((law) => (
              <Card key={law.number} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Leaf className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary">#{law.number}</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {lang === "ar" ? law.title_ar : law.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {lang === "ar" ? law.source_ar : law.source} - {law.year}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      data-law={JSON.stringify(law)}
                      className="shrink-0 download-btn"
                    >
                      <Leaf className="w-4 h-4" />
                      <span className="sr-only">{lang === "ar" ? "تنزيل" : "Download"}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA
        lang={lang}
        title={lang === "ar" ? "الامتثال البيئي هو ضمانة استثمارك" : "Environmental Compliance Is Your Investment Safeguard"}
        description={lang === "ar" ? "فريقنا من الخبراء مستعد لمساعدتك في تطبيق هذه المحددات البيئية على مشروعك لضمان الامتثال الكامل والحماية من المخاطر القانونية والتشغيلية." : "Our team of experts is ready to help you apply these environmental determinants to your project, ensuring full compliance and protection from legal and operational risks."}
        icon={<Shield className="w-12 h-12" />}
        border
      />

      {/* Lead Magnet Modal - Client Component */}
      <LeadMagnetModal lang={lang} />
    </main>
  );
}
