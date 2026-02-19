import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  ShieldAlert, 
  Globe,
  CheckCircle2,
  Users,
  Download,
  Loader2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const ExecutiveOverview = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [brandName, setBrandName] = useState("Sandalwood Aura");

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return;
    
    setIsDownloading(true);
    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      
      // -- COVER PAGE --
      pdf.setFillColor(3, 7, 18); // #030712
      pdf.rect(0, 0, pageWidth, pageHeight, "F");
      
      // Brand Name
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(32);
      pdf.setTextColor(255, 255, 255);
      pdf.text(brandName, pageWidth / 2, pageHeight / 3, { align: "center" });
      
      // Title
      pdf.setFontSize(16);
      pdf.setTextColor(200, 200, 200);
      pdf.text("EXECUTIVE OVERVIEW", pageWidth / 2, (pageHeight / 3) + 15, { align: "center" });
      
      // Decorator Line
      pdf.setDrawColor(200, 200, 200);
      pdf.setLineWidth(0.5);
      pdf.line((pageWidth / 2) - 20, (pageHeight / 3) + 45, (pageWidth / 2) + 20, (pageHeight / 3) + 45);

      // Add new page for content
      pdf.addPage();
      
      // -- CONTENT PAGES --
      let currentY = margin;
      const sections = contentRef.current.querySelectorAll(".pdf-section");
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        const canvas = await html2canvas(section, {
          scale: 2,
          backgroundColor: "#030712", // Keep dark theme
          useCORS: true,
          logging: false,
          windowWidth: 1024,
          onclone: (clonedDoc) => {
            const style = clonedDoc.createElement('style');
            style.innerHTML = `
              html { font-size: 18px !important; }
              .pdf-section { 
                opacity: 1 !important; 
                transform: none !important; 
                margin-bottom: 0 !important;
              }
              .pdf-grid-3 { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
              .pdf-grid-2 { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
              .pdf-col-span-2 { grid-column: span 2 / span 2 !important; }
              
              .gap-6 { gap: 1rem !important; }
              .gap-8 { gap: 1.5rem !important; }
              .mb-8 { margin-bottom: 1rem !important; }
              .mb-12 { margin-bottom: 1.5rem !important; }
              .mb-16 { margin-bottom: 2rem !important; }
              .p-6 { padding: 1.25rem !important; }
              .p-8 { padding: 1.5rem !important; }
              .py-24 { padding-top: 0 !important; padding-bottom: 0 !important; }
              
              .pdf-table-row { display: grid !important; grid-template-columns: 1fr auto !important; gap: 1rem !important; }
            `;
            clonedDoc.head.appendChild(style);
          }
        });

        const imgData = canvas.toDataURL("image/png");
        const imgHeight = (canvas.height * contentWidth) / canvas.width;

        if (currentY + imgHeight > pageHeight - margin) {
          pdf.addPage();
          pdf.setFillColor(3, 7, 18);
          pdf.rect(0, 0, pageWidth, pageHeight, "F");
          currentY = margin;
        }

        pdf.addImage(imgData, "PNG", margin, currentY, contentWidth, imgHeight);
        currentY += imgHeight + 4;
      }

      // -- PAGE NUMBERS --
      const totalPages = pdf.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        if (i === 1) continue; 

        pdf.setFontSize(8);
        pdf.setTextColor(100, 100, 100);
        pdf.text(brandName, margin, pageHeight - 8);
        pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - 8, { align: "right" });
      }

      pdf.save(`${brandName.replace(/\s+/g, "_")}_Executive_Overview.pdf`);
    } catch (error) {
      console.error("PDF Export failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
  <section ref={contentRef} className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <Badge variant="luxury" className="mb-4">Strategic Blueprint</Badge>
        <SectionTitle
          title="Executive Overview"
          subtitle="Establishing a Premium Niche Sandalwood Fragrance Authority in the UAE."
        />
      </div>
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 border-primary/20 text-primary hover:bg-primary/10 whitespace-nowrap"
          onClick={handleDownloadPDF}
          disabled={isDownloading}
        >
          {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          {isDownloading ? "Exporting..." : "Download PDF"}
        </Button>
      </div>
    </div>

    <AnimatedSection className="mb-12 pdf-section">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Market Entry", desc: "Strategic authority acquisition." },
          { title: "Revenue Model", desc: "Scalable high-LTV framework." },
          { title: "Validation", desc: "Assumes product-market fit." },
          { title: "Focus", desc: "Positioning & Economics." }
        ].map((item, i) => (
          <Card key={i} className="bg-surface/50 border-primary/10 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="w-2 h-2 rounded-full bg-primary mx-auto mb-3" />
              <h4 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>

    {/* Market Opportunity */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Market Opportunity Snapshot
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pdf-grid-3">
        {[
          { value: "USD 1.37B", label: "Total Addressable Market", icon: Globe },
          { value: "USD 400M", label: "Serviceable Niche Segment", icon: Target },
          { value: "8.0%", label: "YoY Niche Growth Rate", icon: TrendingUp },
        ].map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1}>
            <Card className="glass-card h-full flex flex-col items-center justify-center text-center p-6 hover:border-primary/30 transition-colors">
              <div className="p-3 bg-primary/5 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="mb-16 pdf-section">
      <Card className="glass-card">
        <CardContent className="pt-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full mt-1">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">Why Now?</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-muted-foreground">Luxury Niche Growth</span>
                  <span className="text-green-400 font-bold">8.0%</span>
                </div>
                <div className="flex items-center justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-muted-foreground">Mass Market Growth</span>
                  <span className="text-muted-foreground font-mono">2.7%</span>
                </div>
                <p className="font-body text-xs text-muted-foreground italic mt-3">
                  "Consumers are shifting from mass-market to exclusive, high-performance scents."
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-4">Market Reality</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pdf-grid-3">
              {[
                "Luxury dominates >80% of revenue",
                "Retail is key: 58.9% share",
                "E-commerce growing fast: +5.88%"
              ].map((item, i) => (
                <div key={i} className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-sm text-muted-foreground font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-border/50 my-6" />

          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              Strategic Imperatives
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Positioning", value: "Premium Only" },
                { label: "Differentiation", value: "Structural Authority" },
                { label: "Speed", value: "Immediate Trust Signals" },
                { label: "Economics", value: "High LTV Focus" }
              ].map((item, i) => (
                <div key={i} className="bg-surface/50 p-3 rounded border border-border/50">
                  <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* Competitive Landscape */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Competitive Environment
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pdf-grid-3">
        <div className="lg:col-span-1">
          <Card className="h-full glass-card">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-primary" />
                Saturation Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">The USD 400M niche segment is densely contested.</p>
              <ul className="space-y-3">
                {[
                  "Global Heritage Houses",
                  "Regional Luxury Brands",
                  "Retail Monopolies (Dubai Mall)",
                  "High-Spend Digital Competitors"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 pdf-col-span-2 pdf-grid-2">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-sm text-muted-foreground uppercase tracking-wider">Digital Benchmarks (2026)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">Medium Competition CPC</span>
                  <span className="font-mono text-primary">AED 6–15</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary/40 w-[40%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">High-Intent Niche CPC</span>
                  <span className="font-mono text-primary">AED 20–40</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">Luxury CPM</span>
                  <span className="font-mono text-primary">AED 5–15</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary/30 w-[30%]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-sm text-muted-foreground uppercase tracking-wider">Influencer Rates (UAE)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2 pdf-table-row">
                <span>Nano</span>
                <span className="font-mono text-primary">AED 500–2K</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2 pdf-table-row">
                <span>Micro</span>
                <span className="font-mono text-primary">AED 2K–5K</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2 pdf-table-row">
                <span>Mid-tier</span>
                <span className="font-mono text-primary">AED 5K–20K</span>
              </div>
              <div className="flex justify-between items-center text-sm pdf-table-row">
                <span>Macro</span>
                <span className="font-mono text-primary">AED 15K–50K+</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
    
    {/* Risks */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Risks of Underinvestment
      </h3>
    </AnimatedSection>

    <AnimatedSection className="mb-16 pdf-section">
      <Card className="bg-surface/50 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-full shrink-0">
              <ShieldAlert className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-base font-semibold text-foreground mb-2">Visibility Requires Capital</h4>
              <ul className="space-y-2">
                {[
                  "Organic exposure is insufficient in saturated market.",
                  "Performance validation is prerequisite for ad spend.",
                  "Product failure leads to CAC spike."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* Target Consumer Segments */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Target Audience
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pdf-grid-3">
        {[
          {
            name: "Emirati Traditionalist",
            icon: Users,
            profile: ["High prestige sensitivity", "Performance-first", "Layering culture", "Frequent buyer"],
            drivers: ["Authority", "Craftsmanship", "Sampling"],
            note: "Key Driver: Authority Perception",
          },
          {
            name: "Status-Driven Expat",
            icon: Globe,
            profile: ["High-income pro", "Hybrid shopper", "Editorial reliance", "Global brands"],
            drivers: ["Reputation", "Influencers", "Packaging"],
            note: "Key Driver: Social Validation",
          },
          {
            name: "Trend-Driven Gen-Z",
            icon: TrendingUp,
            profile: ["Digitally native", "Social discovery", "BNPL user", "Unisex preference"],
            drivers: ["Social proof", "Visuals", "Flexibility"],
            note: "Key Driver: Viral Momentum",
          },
        ].map((segment, i) => (
          <AnimatedSection key={segment.name} delay={i * 0.1}>
            <Card className="h-full glass-card flex flex-col hover:border-primary/30 transition-colors">
              <CardHeader className="pb-4 border-b border-border/50">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <segment.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="font-display text-lg text-foreground">{segment.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 block">Profile</span>
                  <ul className="space-y-2">
                    {segment.profile.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                   <div className="bg-secondary/30 p-3 rounded text-xs text-muted-foreground italic border border-secondary text-center">
                     {segment.note}
                   </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  </section>
  );
};

export default ExecutiveOverview;
