import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign, 
  ShieldAlert, 
  Users, 
  Target, 
  BarChart3, 
  Megaphone, 
  Search, 
  Globe,
  AlertTriangle,
  CheckCircle2,
  X,
  Palette,
  Monitor,
  Newspaper,
  Gift,
  Store,
  Calculator,
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
      const margin = 15; // Increased margin for better layout
      const contentWidth = pageWidth - (margin * 2);
      
      // -- COVER PAGE --
      // Background
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
          windowWidth: 1024, // Optimized for A4 layout
          onclone: (clonedDoc) => {
            // Force visibility of all sections (override Framer Motion initial states)
            const style = clonedDoc.createElement('style');
            style.innerHTML = `
              html { font-size: 18px !important; } /* Mobile view text sizing */
              .pdf-section { 
                opacity: 1 !important; 
                transform: none !important; 
                margin-bottom: 0 !important; /* Remove external margins for tighter packing */
              }
              /* Force grid layouts in PDF */
              .pdf-grid-3 { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
              .pdf-grid-2 { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
              .pdf-col-span-2 { grid-column: span 2 / span 2 !important; }
              
              /* Tighten internal spacing for PDF only */
              .gap-6 { gap: 1rem !important; }
              .gap-8 { gap: 1.5rem !important; }
              .mb-8 { margin-bottom: 1rem !important; }
              .mb-12 { margin-bottom: 1.5rem !important; }
              .mb-16 { margin-bottom: 2rem !important; }
              .p-6 { padding: 1.25rem !important; }
              .p-8 { padding: 1.5rem !important; }
              .py-24 { padding-top: 0 !important; padding-bottom: 0 !important; }
              
              /* Table alignment fixes */
              .pdf-table-row { display: grid !important; grid-template-columns: 1fr auto !important; gap: 1rem !important; }
            `;
            clonedDoc.head.appendChild(style);

            // Enhance visibility in PDF
            const clonedElement = clonedDoc.body.querySelector(`[data-pdf-id="${i}"]`) || clonedDoc.body;
          }
        });

        const imgData = canvas.toDataURL("image/png");
        const imgHeight = (canvas.height * contentWidth) / canvas.width;

        // Check if content fits on current page
        if (currentY + imgHeight > pageHeight - margin) {
          pdf.addPage();
          // Set background for new page
          pdf.setFillColor(3, 7, 18);
          pdf.rect(0, 0, pageWidth, pageHeight, "F");
          currentY = margin;
        }

        pdf.addImage(imgData, "PNG", margin, currentY, contentWidth, imgHeight);
        currentY += imgHeight + 4; // Reduced spacing between sections
      }

      // -- PAGE NUMBERS & FOOTER --
      const totalPages = pdf.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        
        // Skip cover page footer if desired, but let's keep it minimal or skip
        if (i === 1) continue; 

        pdf.setFontSize(8);
        pdf.setTextColor(100, 100, 100);
        
        // Left: Brand
        pdf.text(brandName, margin, pageHeight - 8);
        
        // Right: Page Number
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
        <Badge variant="outline" className="mb-4 border-primary/50 text-primary tracking-widest uppercase">Section 1</Badge>
        <SectionTitle
          title="Executive Overview"
          subtitle="This document outlines the marketing strategy required to establish a premium niche sandalwood fragrance brand in the United Arab Emirates. It excludes operational, manufacturing, and capital structure decisions."
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
      <Card className="bg-surface/50 border-primary/10 backdrop-blur-sm">
        <CardContent className="pt-6">
          <p className="font-body text-muted-foreground leading-relaxed">
            The focus is strictly on marketing visibility, authority building, acquisition structure, and budget requirements. Marketing execution assumes validated product-market alignment. While operational mechanics are excluded, product performance validation under UAE climatic and cultural conditions is a prerequisite for efficient marketing scale. Without confirmed performance strength (longevity, projection, heat resilience, and layering compatibility), paid acquisition economics may become unsustainable within the defined auction environment.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* 1.1 UAE Niche Market Opportunity */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">1.1</span> UAE Niche Market Opportunity
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pdf-grid-3">
        {[
          { value: "USD 1.37B", label: "Total UAE fragrance market 2025–2026", icon: Globe },
          { value: "USD 400M", label: "Niche fragrance segment", icon: Target },
          { value: "8%", label: "Annual niche growth rate", icon: TrendingUp },
        ].map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1}>
            <Card className="bg-card border-border h-full flex flex-col items-center justify-center text-center p-6 hover:border-primary/30 transition-colors">
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
      <Card className="bg-surface border-border">
        <CardContent className="pt-6 space-y-6">
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            The niche segment is expanding at an estimated 8 percent annual growth rate, significantly higher than the mass fragrance segment, which is growing at approximately 2.7 percent annually. This growth differential confirms sustained premiumization within the fragrance category.
          </p>
          
          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-4">Structural Indicators</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pdf-grid-3">
              {[
                "Luxury fragrances account for >80% of Dubai's fragrance revenue.",
                "Specialty fragrance stores control ~58.9% of total market turnover.",
                "Online fragrance sales growing at ~5.88% annually."
              ].map((item, i) => (
                <div key={i} className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-border/50" />

          <div className="bg-surface/50 p-6 rounded-lg border border-border/50">
            <h4 className="font-display text-base font-semibold text-foreground mb-3">Key Strategic Implications</h4>
            <ul className="space-y-2 mb-4">
              {[
                "The UAE market favors premium positioning over price-driven consumption.",
                "Niche fragrance is a structurally growing segment.",
                "Prestige perception is central to market acceptance.",
                "Entry into the niche segment requires visible differentiation and structured brand authority."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4 py-1">
              The opportunity does not lie in volume expansion at mass pricing. It lies in establishing authority within a premium environment where consumers are accustomed to high-performance, high-prestige fragrance houses.
            </p>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* 1.2 Competitive Landscape */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">1.2</span> Competitive Landscape
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pdf-grid-3">
        <div className="lg:col-span-1">
          <Card className="h-full bg-surface border-border">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-primary" />
                Market Reality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">The USD 400 million niche segment is densely populated by established international and regional houses.</p>
              <ul className="space-y-3">
                {[
                  "Strong presence of global niche brands",
                  "High visibility of heritage houses",
                  "Heavy concentration in Dubai Mall/MOE",
                  "Active digital competition in auctions"
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
          <Card className="bg-surface border-border">
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

          <Card className="bg-surface border-border">
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
    
    <AnimatedSection className="mb-16 pdf-section">
      <Card className="bg-surface/50 border-primary/20">
        <CardContent className="pt-6 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">Visibility is not free.</span> Organic exposure alone is insufficient. Competitive saturation requires visibility investment and performance validation. If product longevity/projection fails, acquisition costs will spike.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* 1.3 Target Consumer Segments */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">1.3</span> Target Consumer Segments
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pdf-grid-3">
        {[
          {
            name: "Emirati Traditionalist",
            icon: Users,
            profile: ["High prestige sensitivity", "Performance-first (longevity)", "Strong layering culture", "Frequent purchasing"],
            drivers: ["Authority", "Craftsmanship", "Physical sampling"],
            note: "Price sensitivity is low. Authority perception is critical.",
          },
          {
            name: "Status-Driven Expat",
            icon: Globe,
            profile: ["High-income professional", "Hybrid retail/online", "Editorial reliance", "Global brand preference"],
            drivers: ["Brand reputation", "Influencer credibility", "Packaging"],
            note: "Requires structured prestige signaling and editorial validation.",
          },
          {
            name: "Trend-Driven Gen-Z",
            icon: TrendingUp,
            profile: ["Digitally native", "Social discovery", "BNPL adoption", "Unisex preference (66%)"],
            drivers: ["Social validation", "Visual identity", "Payment flexibility"],
            note: "Drives momentum but requires retargeting to convert.",
          },
        ].map((segment, i) => (
          <AnimatedSection key={segment.name} delay={i * 0.1}>
            <Card className="h-full bg-surface border-border flex flex-col hover:border-primary/30 transition-colors">
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
                   <div className="bg-secondary/30 p-3 rounded text-xs text-muted-foreground italic border border-secondary">
                     {segment.note}
                   </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>

    {/* 1.4 Budget Before Revenue */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">1.4</span> Budget vs. Revenue
      </h3>
    </AnimatedSection>
    
    <AnimatedSection className="mb-16 pdf-section">
      <Card className="bg-surface border-border overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 pdf-grid-2">
          <div className="p-8 bg-surface">
            <h4 className="font-display text-xl font-semibold text-foreground mb-4">Why Budget Comes First</h4>
            <p className="text-sm text-muted-foreground mb-6">Revenue planning cannot precede budget determination in the UAE luxury sector because costs are structural and fixed.</p>
            <ul className="space-y-3">
              {[
                "Digital acquisition costs are fixed by auction (AED 6–40 CPC).",
                "Influencer pricing is standardized by tier.",
                "PR retainers are fixed monthly bands.",
                "Experiential activations have defined benchmarks."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-primary/5 border-l border-border/50 flex flex-col justify-center">
             <div className="mb-4">
               <h4 className="font-display text-lg font-semibold text-primary mb-2">The Strategic Reality</h4>
               <p className="text-sm text-muted-foreground italic">
                 "Marketing budget selection must precede revenue ambition. The budget defines the ceiling of achievable awareness and acquisition within a USD 400 million niche segment."
               </p>
             </div>
             <div className="grid grid-cols-2 gap-4 mt-4">
               <div className="bg-surface p-4 rounded border border-border/50">
                 <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Volume Depends On</div>
                 <div className="font-semibold text-foreground">Budget & Traffic</div>
               </div>
               <div className="bg-surface p-4 rounded border border-border/50">
                 <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Conversion Depends On</div>
                 <div className="font-semibold text-foreground">Authority & Trust</div>
               </div>
             </div>
          </div>
        </div>
      </Card>
    </AnimatedSection>

    {/* 1.5 Year 1 Objectives */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">1.5</span> Year 1 Objectives
      </h3>
    </AnimatedSection>
    
    <AnimatedSection className="mb-16 pdf-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pdf-grid-2">
        <Card className="bg-surface border-border">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground">Primary Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {[
                "Establish authority within the UAE niche fragrance segment.",
                "Build awareness in a high-density luxury environment.",
                "Develop digital infrastructure for AED 6–40 CPC conditions.",
                "Integrate sampling (Target: 35% digital-to-physical conversion).",
                "Align positioning with unisex preference (66%).",
                "Complete 90-day stabilization before scaling."
              ].map((goal, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {goal}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
        
        <Card className="bg-surface border-border">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground">Success Definition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Stable Acquisition", desc: "Predictable CAC within benchmarks" },
                { label: "Authority Validation", desc: "PR & Influencer traction" },
                { label: "Repeat Purchase", desc: "Signals product performance strength" },
                { label: "Data Accumulation", desc: "Clear audience segmentation" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-secondary/20 rounded border border-secondary/50 pdf-table-row">
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* 1.6 Budget Scenarios */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">1.6</span> Budget Scenarios
      </h3>
    </AnimatedSection>

    <AnimatedSection className="mb-16 pdf-section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pdf-grid-3">
        {[
          {
            name: "Conservative",
            sub: "Digital-First",
            items: ["Low-range CPC focus", "Basic PR", "Nano/Micro influencers", "No experiential"],
            useCase: "Controlled testing.",
            limit: "Slow prestige acceleration.",
            borderColor: "border-border"
          },
          {
            name: "Balanced",
            sub: "Prestige",
            items: ["Sustained digital", "Standard Luxury PR", "Micro/Mid-tier influencers", "Controlled pop-ups", "Ramadan amplification"],
            useCase: "Authority + Stability.",
            limit: null,
            borderColor: "border-primary",
            recommended: true
          },
          {
            name: "High-Visibility",
            sub: "Prestige-Heavy",
            items: ["Full spectrum CPC", "Premium PR", "Macro influencers", "Major pop-ups", "Fashion Avenue media"],
            useCase: "Accelerated entry.",
            limit: "High upfront commitment.",
            borderColor: "border-border"
          },
        ].map((scenario, i) => (
          <AnimatedSection key={scenario.name} delay={i * 0.1} className="h-full">
            <Card className={`h-full bg-surface flex flex-col relative ${scenario.recommended ? 'border-primary shadow-lg shadow-primary/5' : 'border-border'}`}>
              {scenario.recommended && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider px-2 py-1 rounded-bl">
                  Recommended
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="font-display text-xl text-foreground">
                  {scenario.name}
                  <span className="block text-sm font-normal text-muted-foreground mt-1">{scenario.sub}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {scenario.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${scenario.recommended ? 'bg-primary' : 'bg-muted-foreground'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold text-foreground mb-1">Use Case:</p>
                  <p className="text-xs text-muted-foreground mb-3">{scenario.useCase}</p>
                  {scenario.limit && (
                    <>
                      <p className="text-xs font-semibold text-destructive/80 mb-1">Limitation:</p>
                      <p className="text-xs text-muted-foreground italic">{scenario.limit}</p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>

    {/* 1.7 Risks */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">1.7</span> Risks of Underinvestment
      </h3>
    </AnimatedSection>
    
    <AnimatedSection className="mb-16 pdf-section">
      <Card className="bg-destructive/5 border-destructive/20">
        <CardHeader>
          <CardTitle className="font-display text-lg text-destructive flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Strategic Warnings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">In a market where luxury accounts for &gt;80% of revenue, underinvestment does not reduce risk—it increases the time required to establish credibility.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pdf-grid-2">
            <div>
              <h4 className="font-display text-sm font-semibold text-foreground mb-3">Primary Risks</h4>
              <ul className="space-y-2">
                {[
                  "Insufficient awareness in USD 400M segment",
                  "Weak authority vs. global houses",
                  "High CAC without retargeting depth",
                  "Limited sampling reach"
                ].map((risk, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold text-foreground mb-3">Consequences</h4>
              <ul className="space-y-2">
                {[
                  "Extended 90-day stabilization period",
                  "Reduced Ramadan capability",
                  "Escalation of CPA if performance fails",
                  "Low visibility interpreted as low authority"
                ].map((risk, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-surface/50 p-4 rounded border border-border/50 text-center">
             <p className="text-sm text-muted-foreground italic">
               "Marketing scale without confirmed product strength increases financial exposure. Authority cannot be manufactured solely through media spend."
             </p>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* 1.8 Structural Prerequisites */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">1.8</span> Structural Prerequisites Before Marketing Execution
      </h3>
    </AnimatedSection>
    
    <AnimatedSection className="mb-8 pdf-section">
      <div className="bg-surface/50 border border-primary/10 rounded-lg p-6 mb-8">
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Before any paid marketing begins, three structural layers must be fully prepared.
        </p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          In a USD 400 million niche fragrance segment where digital traffic costs AED 6–40 per click and luxury accounts for more than 80 percent of Dubai fragrance revenue, launching ads without these foundations increases Customer Acquisition Cost (CAC), weakens authority perception, and increases capital exposure.
        </p>
        <p className="font-body text-sm font-semibold text-foreground">
          Marketing amplifies structure. It cannot replace it.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 pdf-grid-3">
        {/* A. Brand Foundation */}
        <Card className="bg-surface border-border h-full flex flex-col">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="w-5 h-5 text-primary" />
              </div>
              Brand Foundation
            </CardTitle>
            <Badge variant="secondary" className="w-fit mt-2">Non-Negotiable</Badge>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <p className="text-sm text-muted-foreground mb-4">
              The brand must be structurally defined before visibility investment.
            </p>
            <div className="space-y-4 flex-1">
              <div>
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">Required</span>
                <ul className="space-y-2">
                  {[
                    "Validated brand name (culturally screened)",
                    "Clear positioning (Premium Niche)",
                    "Visual identity system",
                    "Packaging design (Prestige)",
                    "Structured brand story"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-secondary/20 p-3 rounded border border-secondary/50">
                <span className="text-xs font-semibold text-foreground mb-1 block">Performance Validation:</span>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-muted-foreground">
                    <span>• Longevity</span>
                    <span>• Projection</span>
                    <span>• Heat resilience</span>
                    <span>• Layering</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground italic">
                If performance strength is not validated, sampling conversion declines and AED 20–40 CPC becomes inefficient.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* B. Digital Infrastructure */}
        <Card className="bg-surface border-border h-full flex flex-col">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              Digital Infrastructure
            </CardTitle>
            <Badge variant="secondary" className="w-fit mt-2">Required Before Ads</Badge>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <p className="text-sm text-muted-foreground mb-4">
              Paid advertising must not begin before tracking and conversion systems are validated.
            </p>
            <div className="space-y-4 flex-1">
              <div>
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">Required</span>
                <ul className="space-y-2">
                  {[
                    "Luxury bilingual website (EN/AR)",
                    "Secure checkout",
                    "Payment: Cards, Apple/Google Pay",
                    "BNPL (Tabby/Tamara) & COD",
                    "CRM email system",
                    "Sampling landing page"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/20 p-3 rounded border border-secondary/50">
                <span className="text-xs font-semibold text-foreground mb-1 block">Tracking Setup:</span>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-muted-foreground">
                    <span>• Meta Pixel</span>
                    <span>• Google Ads</span>
                    <span>• TikTok Pixel</span>
                    <span>• Retargeting</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground italic">
                Traffic without tracking increases financial leakage inside AED 6–40 click environments.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* C. Authority Layer */}
        <Card className="bg-surface border-border h-full flex flex-col">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <ShieldAlert className="w-5 h-5 text-primary" />
              </div>
              Authority Layer
            </CardTitle>
            <Badge variant="secondary" className="w-fit mt-2">Trust Before Scale</Badge>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <p className="text-sm text-muted-foreground mb-4">
              The UAE luxury fragrance environment is trust-driven. Authority must precede aggressive acquisition scale.
            </p>
            <div className="space-y-4 flex-1">
              <div>
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">Required</span>
                <ul className="space-y-2">
                  {[
                    "Active PR retainer",
                    "Influencer seeding (nano/micro)",
                    "Sampling system integrated with CRM",
                    "Structured layering education",
                    "Experiential activation (scenario dependent)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/20 p-3 rounded border border-secondary/50">
                <span className="text-xs font-semibold text-foreground mb-1 block">Impact:</span>
                <ul className="space-y-1 text-[10px] text-muted-foreground">
                    <li>• Authority reduces purchase risk</li>
                    <li>• Reduced risk improves conversion</li>
                    <li>• Higher conversion stabilizes CAC</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground italic">
                Without authority, traffic becomes expensive traffic.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h4 className="font-display text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          Structural Principle
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pdf-grid-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Marketing Budget</span>
            <span className="font-semibold text-foreground">Determines visibility ceiling</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Authority</span>
            <span className="font-semibold text-foreground">Determines conversion efficiency</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Product Performance</span>
            <span className="font-semibold text-foreground">Determines long-term sustainability</span>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-primary/10">
           <p className="text-sm font-medium text-foreground text-center">
             If these three layers are incomplete, scale should be delayed.
           </p>
        </div>
      </div>
    </AnimatedSection>

    {/* 1.9 Marketing Service Breakdown */}
    <AnimatedSection className="mb-4 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">1.9</span> Marketing Service Breakdown (Year 1)
      </h3>
    </AnimatedSection>
    
    <AnimatedSection className="mb-6 pdf-section">
      <div className="bg-surface/50 border border-border rounded-lg p-6 mb-8">
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Marketing for a premium niche fragrance brand in the UAE is not just "running ads." It is a structured system made up of multiple professional services working together.
        </p>
        <p className="text-sm font-medium text-foreground">
          This breakdown details exactly what is required and what the investment covers across 6 major pillars.
        </p>
      </div>
    </AnimatedSection>

    <AnimatedSection className="mb-6 pdf-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pdf-grid-3">
        
        {/* 1. Brand & Creative Development */}
        <Card className="bg-surface border-border h-full flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Palette className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="outline" className="text-xs">Foundation</Badge>
            </div>
            <CardTitle className="font-display text-lg text-foreground">
              Brand & Creative Development
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground">
              Without this, paid ads become expensive and ineffective. Creative quality directly impacts CTR and CAC.
            </p>
            
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block mb-1">Services Required</span>
                <ul className="space-y-1">
                  {[
                    "Brand positioning strategy",
                    "Visual identity system",
                    "Packaging design alignment",
                    "Brand story & ingredient narrative",
                    "Performance messaging framework"
                  ].map((item, i) => (
                    <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block mb-1">Production</span>
                <ul className="space-y-1">
                  {[
                    "Professional product photography",
                    "Luxury lifestyle & ingredient shots",
                    "Short-form video (Reels/TikTok)",
                    "Ramadan-specific content",
                    "Retargeting ad creatives"
                  ].map((item, i) => (
                    <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-border/50">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Est. Investment:</span>
                <span className="font-mono font-medium text-foreground">~AED 90,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. Digital Infrastructure */}
        <Card className="bg-surface border-border h-full flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="outline" className="text-xs">Conversion Engine</Badge>
            </div>
            <CardTitle className="font-display text-lg text-foreground">
              Digital Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground">
              The online engine that converts traffic into sales. Without tracking, ads cannot optimize.
            </p>
            
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block mb-1">Development & Payment</span>
                <ul className="space-y-1">
                  {[
                    "Custom luxury website (EN/AR)",
                    "Sampling funnel & checkout optim.",
                    "Apple Pay / Google Pay",
                    "BNPL (Tabby/Tamara)",
                    "Cash on Delivery (COD)"
                  ].map((item, i) => (
                    <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block mb-1">Tracking & CRM</span>
                <ul className="space-y-1">
                  {[
                    "Meta Pixel / Google Analytics / GTM",
                    "Conversion event tracking",
                    "Email automation flows",
                    "Abandoned cart recovery",
                    "Ramadan reactivation campaigns"
                  ].map((item, i) => (
                    <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-border/50">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Cost:</span>
                <span className="font-mono font-medium text-foreground">Scope Dependent</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Paid Advertising */}
        <Card className="bg-surface border-border h-full flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Megaphone className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="outline" className="text-xs">Acquisition</Badge>
            </div>
            <CardTitle className="font-display text-lg text-foreground">
              Paid Advertising
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground">
              Structured customer acquisition in a AED 6–40 CPC market. Covers media planning and optimization.
            </p>
            
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block mb-1">Channels & Campaign Types</span>
                <ul className="space-y-1">
                  {[
                    "Meta Ads (Instagram/Facebook)",
                    "Google Search & Display",
                    "YouTube & TikTok Ads (Optional)",
                    "Sampling acquisition campaigns",
                    "High-intent keyword capture",
                    "Retargeting compression"
                  ].map((item, i) => (
                    <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-primary/5 p-2 rounded border border-primary/10">
                <span className="text-[10px] font-bold text-primary block mb-1">What Budget Covers</span>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  90-day stabilization, creative testing, audience validation, and Ramadan scaling.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-border/50">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Min. Annual Budget:</span>
                <span className="font-mono font-medium text-foreground">AED 450,000</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    <AnimatedSection className="mb-8 pdf-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pdf-grid-3">
        {/* 4. Influencer Marketing */}
        <Card className="bg-surface border-border h-full flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="outline" className="text-xs">Trust & Authority</Badge>
            </div>
            <CardTitle className="font-display text-lg text-foreground">
              Influencer Marketing
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground">
              Builds trust and authority. Includes vetting, negotiation, briefing, and paid amplification.
            </p>
            
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block mb-1">Services & Tiers</span>
                <ul className="space-y-1">
                  {[
                    "Identification, vetting & contracting",
                    "Performance messaging guidance",
                    "Usage rights acquisition",
                    "Nano: AED 500–2,000",
                    "Micro: AED 2,000–5,000",
                    "Macro: AED 15,000–50,000+"
                  ].map((item, i) => (
                    <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-secondary/20 p-2 rounded border border-secondary/50">
                <span className="text-[10px] font-bold text-foreground block mb-1">Deliverables</span>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  Content creation, brand exposure, authority validation, and reusable ad assets.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-border/50">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Balanced Budget:</span>
                <span className="font-mono font-medium text-foreground">~AED 120,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. Public Relations (PR) */}
        <Card className="bg-surface border-border h-full flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Newspaper className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="outline" className="text-xs">Editorial Authority</Badge>
            </div>
            <CardTitle className="font-display text-lg text-foreground">
              Public Relations (PR)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground">
              Builds editorial authority. In UAE luxury markets, trust reduces CAC and improves conversion.
            </p>
            
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block mb-1">Services Included</span>
                <ul className="space-y-1">
                  {[
                    "Media pitching & press releases",
                    "Founder story positioning",
                    "Ingredient credibility narrative",
                    "Luxury publication coverage",
                    "Influencer credibility reinforcement"
                  ].map((item, i) => (
                    <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-secondary/20 p-2 rounded border border-secondary/50">
                <span className="text-[10px] font-bold text-foreground block mb-1">Impact</span>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  Improves conversion rates, sampling acceptance, and high-intent keyword performance.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-border/50">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Standard Luxury:</span>
                <span className="font-mono font-medium text-foreground">AED 180k–300k/yr</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 6. Sampling System */}
        <Card className="bg-surface border-border h-full flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="outline" className="text-xs">Structured Acquisition</Badge>
            </div>
            <CardTitle className="font-display text-lg text-foreground">
              Sampling System
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground">
              A structured acquisition tool, not a giveaway. Critical for conversion in high CPC auctions.
            </p>
            
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block mb-1">Components</span>
                <ul className="space-y-1">
                  {[
                    "Discovery kit design",
                    "Landing page creation",
                    "Sampling ad campaigns",
                    "CRM automation sequence",
                    "Conversion tracking"
                  ].map((item, i) => (
                    <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-primary/5 p-2 rounded border border-primary/10">
                <span className="text-[10px] font-bold text-primary block mb-1">Benchmarks</span>
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>Sample-to-Bottle:</span>
                  <span className="font-mono font-bold text-foreground">≥35%</span>
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>Immediate Purchase:</span>
                  <span className="font-mono font-bold text-foreground">~13%</span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-border/50">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Cost Variable:</span>
                <span className="font-mono font-medium text-foreground">Production + Shipping</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* 7. Optional Prestige Activation */}
    <AnimatedSection className="mb-8 pdf-section">
      <Card className="bg-surface border-border h-full flex flex-col border-dashed">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Store className="w-5 h-5 text-primary" />
            </div>
            <Badge variant="outline" className="text-xs">Optional Prestige Activation</Badge>
          </div>
          <CardTitle className="font-display text-lg text-foreground">
            7. Optional Prestige Activation <span className="text-sm font-normal text-muted-foreground ml-2">(Not included in retainer, quoted separately)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
              <div className="space-y-4 flex-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block mb-1">Mall Pop-up / Activation Services</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    {[
                      "Design & Fabrication",
                      "Staffing & Training",
                      "Data Capture System",
                      "QR & Sampling Integration",
                      "Influencer Footfall Management",
                      "Retail Partner Coordination"
                    ].map((item, i) => (
                      <li key={i} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="w-full md:w-auto min-w-[250px] bg-secondary/20 p-4 rounded border border-secondary/50">
                <span className="text-[10px] font-bold text-foreground block mb-2">Cost Structure</span>
                <div className="space-y-2">
                  <div className="flex flex-col text-[10px] gap-1">
                    <span className="text-muted-foreground">Pop-up space (Mall):</span>
                    <span className="font-mono font-medium text-foreground">~AED 3,000 – 10,000 / day</span>
                    <span className="text-[9px] text-muted-foreground italic">(Season dependent)</span>
                  </div>
                  <div className="flex flex-col text-[10px] gap-1 pt-2 border-t border-border/30">
                    <span className="text-muted-foreground">Mall Media Screens:</span>
                    <span className="font-mono font-medium text-foreground">~AED 180,000 / month</span>
                    <span className="text-[9px] text-muted-foreground italic">(Dubai Mall)</span>
                  </div>
                </div>
              </div>
            </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* Total Marketing Service Structure */}
    <AnimatedSection className="mb-8 pdf-section">
      <div className="bg-surface border border-border rounded-lg p-6">
        <h4 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-primary" />
          Total Marketing Service Structure (Year 1)
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pdf-grid-3">
          <div className="p-4 rounded-lg border border-border bg-background/50 flex flex-col">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Conservative Digital-First</div>
            <div className="text-xl font-display font-bold text-foreground mb-1">~AED 710k – 800k+</div>
            <div className="text-[10px] text-muted-foreground italic mt-auto">(Excludes website build)</div>
          </div>
          
          <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-bl">Recommended</div>
            <div className="text-xs text-primary uppercase tracking-wider mb-2 font-semibold">Balanced Prestige</div>
            <div className="text-xl font-display font-bold text-foreground mb-1">~AED 880k – 1M+</div>
            <div className="text-[10px] text-muted-foreground italic mt-auto">(Includes PR & Mid-tier Influencers)</div>
          </div>
          
          <div className="p-4 rounded-lg border border-border bg-background/50 flex flex-col">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Prestige-Heavy Visibility</div>
            <div className="text-xl font-display font-bold text-foreground mb-1">~AED 1.2M – 1.5M+</div>
            <div className="text-[10px] text-muted-foreground italic mt-auto">(Includes Major Pop-ups & Macro Influencers)</div>
          </div>
        </div>
        
        <p className="text-[10px] text-muted-foreground mt-4 text-center italic">
          (Excludes final website/CRM vendor cost and exact sampling production cost.)
        </p>
      </div>
    </AnimatedSection>
  </section>
  );
};

export default ExecutiveOverview;
