
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  Gavel, TrendingUp, ShoppingCart, Globe, Users, Target, 
  Shield, Scale, Zap, Check, AlertTriangle, ArrowRight,
  MousePointer2, Store, Smartphone, Activity, BarChart, Layers,
  Crosshair, Radio, Signal, MapPin, Calendar, CreditCard,
  Gift, Heart, Flame, ClipboardList, Clock, Download, Loader2, RefreshCw, PauseCircle
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const OwnerDecisionFramework = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [brandName, setBrandName] = useState("Sandalwood Aura");
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [selectedDigital, setSelectedDigital] = useState<string | null>(null);
  const [selectedInfluencer, setSelectedInfluencer] = useState<string | null>(null);
  const [selectedExperiential, setSelectedExperiential] = useState<string | null>(null);
  const [selectedRamadan, setSelectedRamadan] = useState<string | null>(null);

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
      const margin = 10;
      const contentWidth = pageWidth - (margin * 2);
      let currentY = margin;

      // Title Page or Header
      pdf.setFontSize(10);
      pdf.setTextColor(150);
      pdf.text(`Owner Decision Framework - ${brandName}`, margin, margin - 2);

      const sections = contentRef.current.querySelectorAll(".pdf-section");
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        const canvas = await html2canvas(section, {
          scale: 2,
          backgroundColor: "#030712", // Dark background
          useCORS: true,
          logging: false,
          windowWidth: 1280 // Force desktop width for consistent PDF layout
        });

        const imgData = canvas.toDataURL("image/png");
        const imgHeight = (canvas.height * contentWidth) / canvas.width;

        // Check if content fits on current page
        if (currentY + imgHeight > pageHeight - margin) {
          pdf.addPage();
          currentY = margin;
          pdf.setFontSize(10);
          pdf.setTextColor(150);
          pdf.text(`Owner Decision Framework - ${brandName}`, margin, margin - 2);
        }

        pdf.addImage(imgData, "PNG", margin, currentY, contentWidth, imgHeight);
        currentY += imgHeight + 5;
      }

      pdf.save(`${brandName.replace(/\s+/g, "_")}_Owner_Decision_Framework.pdf`);
    } catch (error) {
      console.error("PDF Export failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
  <div ref={contentRef} className="py-24 md:py-40 px-6 bg-background relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Section 11</span>
          <div className="h-px bg-primary/30 w-12" />
          <Badge variant="outline" className="border-primary/30 text-muted-foreground font-normal tracking-wider hidden sm:inline-flex">YEAR 1 — UAE ONLY</Badge>
        </div>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Label htmlFor="brandName" className="sr-only">Brand Name</Label>
            <Input
              id="brandName"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="bg-background/50 border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground/50 h-9 text-sm"
              placeholder="Enter Brand Name"
            />
          </div>
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
      
      <SectionTitle
        title="Owner Decision Framework"
        subtitle="Decisions You Need to Make"
      />

      {/* Context Block */}
      <AnimatedSection className="mb-16 pdf-section">
        <div className="bg-surface border border-border rounded-lg p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gavel className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-semibold text-foreground">Market Facts</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              These are the key things you need to know before we start.
              The UAE niche fragrance market is worth about $400M and growing fast.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {[
                { icon: ShoppingCart, text: "Luxury perfumes: >80% of sales" },
                { icon: Store, text: "Retail stores: 58.9% of sales" },
                { icon: Globe, text: "Online sales growth: ~6% per year" },
                { icon: MousePointer2, text: "Click Cost: AED 6–40" },
                { icon: Users, text: "Influencer Return: 6.5x (up to 8.4x)" },
                { icon: Target, text: "Sampling Success: 35% buy later" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-muted-foreground bg-background/50 p-2 rounded border border-border/30">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border-l-2 border-primary p-4 rounded-r mt-4">
              <p className="text-xs text-foreground italic">
                "We need to decide on the budget before we set sales targets. The budget determines what is possible."
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* 11.1 Budget Selection */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Critical Decision</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">11.1 Choose Your Budget</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Select one of these three plans. This decides how much we spend and how fast we grow.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pdf-section">
        
        {/* Scenario 1 */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <CardHeader className="pb-4 border-b border-border/50">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="border-primary/20 text-primary">Option 1</Badge>
              </div>
              <CardTitle className="font-display text-lg text-foreground">
                Digital First (Conservative)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col space-y-6">
              <div>
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">What's Included</div>
                <ul className="space-y-2">
                  {[
                    "Focus on online ads",
                    "Basic PR (AED 10k–15k/mo)",
                    "Small influencers (AED 500–5k)",
                    "Very few physical events",
                    "Limited free samples"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Analysis</div>
                <div className="space-y-3">
                  <div className="bg-green-500/5 border border-green-500/10 rounded p-2.5">
                    <span className="text-[10px] font-bold text-green-600 block mb-1">PROS</span>
                    <p className="text-[10px] text-muted-foreground leading-snug">
                      Lower cost, safer to test the market, focused on data.
                    </p>
                  </div>
                  <div className="bg-destructive/5 border border-destructive/10 rounded p-2.5">
                    <span className="text-[10px] font-bold text-destructive block mb-1">CONS</span>
                    <p className="text-[10px] text-muted-foreground leading-snug">
                      Slower growth, less "luxury" feel, harder to compete on ad costs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button 
                  className="w-full" 
                  variant={selectedScenario === "Scenario 1" ? "default" : "outline"}
                  onClick={() => setSelectedScenario("Scenario 1")}
                >
                  {selectedScenario === "Scenario 1" ? "Selected" : "Select Option 1"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Scenario 2 */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-primary/40 h-full flex flex-col relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Scale className="w-16 h-16 text-primary" />
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/40" />
            <CardHeader className="pb-4 border-b border-border/50">
              <div className="flex justify-between items-start mb-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Option 2</Badge>
                <span className="text-[10px] font-medium text-primary uppercase tracking-wider">Recommended</span>
              </div>
              <CardTitle className="font-display text-lg text-foreground">
                Balanced (Recommended)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col space-y-6">
              <div>
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">What's Included</div>
                <ul className="space-y-2">
                  {[
                    "Strong online presence",
                    "Standard PR (AED 15k–25k/mo)",
                    "Medium influencers (AED 2k–20k)",
                    "Short-term pop-up shops",
                    "More free samples"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Analysis</div>
                <div className="space-y-3">
                  <div className="bg-green-500/5 border border-green-500/10 rounded p-2.5">
                    <span className="text-[10px] font-bold text-green-600 block mb-1">PROS</span>
                    <p className="text-[10px] text-muted-foreground leading-snug">
                      Good balance of authority and sales, stronger brand image.
                    </p>
                  </div>
                  <div className="bg-destructive/5 border border-destructive/10 rounded p-2.5">
                    <span className="text-[10px] font-bold text-destructive block mb-1">CONS</span>
                    <p className="text-[10px] text-muted-foreground leading-snug">
                      Moderate cost, requires careful management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button 
                  className="w-full" 
                  variant={selectedScenario === "Scenario 2" ? "default" : "outline"}
                  onClick={() => setSelectedScenario("Scenario 2")}
                >
                  {selectedScenario === "Scenario 2" ? "Selected" : "Select Option 2"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Scenario 3 */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-background border-border h-full flex flex-col relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-16 h-16 text-primary" />
            </div>
            <CardHeader className="pb-4 border-b border-border/50">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="border-primary/20 text-primary">Option 3</Badge>
              </div>
              <CardTitle className="font-display text-lg text-foreground">
                High Visibility (Prestige)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col space-y-6">
              <div>
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">What's Included</div>
                <ul className="space-y-2">
                  {[
                    "Top-tier PR (AED 25k–60k/mo)",
                    "Famous influencers (AED 5k–50k+)",
                    "Many pop-ups (~AED 3k/day)",
                    "Mall billboard ads (~AED 180k/mo)",
                    "Lots of samples"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Analysis</div>
                <div className="space-y-3">
                  <div className="bg-green-500/5 border border-green-500/10 rounded p-2.5">
                    <span className="text-[10px] font-bold text-green-600 block mb-1">PROS</span>
                    <p className="text-[10px] text-muted-foreground leading-snug">
                      Fastest growth, strongest luxury signal, everyone knows you.
                    </p>
                  </div>
                  <div className="bg-destructive/5 border border-destructive/10 rounded p-2.5">
                    <span className="text-[10px] font-bold text-destructive block mb-1">CONS</span>
                    <p className="text-[10px] text-muted-foreground leading-snug">
                      Very high cost, less flexible, higher risk if it fails.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button 
                  className="w-full" 
                  variant={selectedScenario === "Scenario 3" ? "default" : "outline"}
                  onClick={() => setSelectedScenario("Scenario 3")}
                >
                  {selectedScenario === "Scenario 3" ? "Selected" : "Select Option 3"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      {/* Decision Impact & CTA */}
      <AnimatedSection delay={0.4} className="pdf-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface border border-border rounded-lg p-6 md:p-8">
          <div>
            <h4 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              What This Decision Changes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "How many people see us",
                "How fast we beat competitors",
                "How 'premium' we look",
                "How many people we can reach again",
                "How big our sales spikes are",
                "How many samples we give out",
                "How much money is at risk"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ArrowRight className="w-3 h-3 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary/5 border border-primary/10 rounded p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
            <h5 className="font-display text-base text-foreground mb-2">Decision Required</h5>
            <p className="text-xs text-muted-foreground mb-4">
              You must pick one of these options before we can start. This sets our path.
            </p>
            <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 h-auto text-xs">
              Awaiting Your Decision
            </Badge>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* 11.2 Digital Ads Level */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">How Pushy?</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">11.2 Online Ad Strategy</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              We need to decide how hard to fight for attention in the UAE market.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pdf-section">
        
        {/* Layer 1 */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Signal className="w-4 h-4 text-primary" />
                Level 1: Getting Noticed
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div className="bg-surface border border-border/50 rounded p-2.5 mb-2">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Focus</div>
                  <div className="text-sm font-bold text-foreground">AED 6–15 per Click</div>
                </div>
                <ul className="space-y-2">
                  {[
                    "Reaching more people",
                    "Cheaper traffic",
                    "Takes longer to get a sale",
                    "Building a list of interested people",
                    "Introducing samples"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <p className="text-[10px] text-muted-foreground italic mb-3">
                    Good for starting out and building familiarity.
                  </p>
                  <Button 
                    className="w-full h-8 text-xs" 
                    variant={selectedDigital === "Awareness Focus" ? "default" : "outline"}
                    onClick={() => setSelectedDigital("Awareness Focus")}
                  >
                    {selectedDigital === "Awareness Focus" ? "Selected" : "Select Awareness"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Layer 2 */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Crosshair className="w-4 h-4 text-primary" />
                Level 2: Winning New Customers
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div className="bg-surface border border-border/50 rounded p-2.5 mb-2">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Focus</div>
                  <div className="text-sm font-bold text-foreground">AED 20–40 per Click</div>
                </div>
                <ul className="space-y-2">
                  {[
                    "People ready to buy",
                    "High competition",
                    "More expensive",
                    "Needs strong brand trust",
                    "Needs a great website"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <p className="text-[10px] text-muted-foreground italic mb-3">
                    Expensive if the brand isn't trusted yet.
                  </p>
                  <Button 
                    className="w-full h-8 text-xs" 
                    variant={selectedDigital === "Growth Focus" ? "default" : "outline"}
                    onClick={() => setSelectedDigital("Growth Focus")}
                  >
                    {selectedDigital === "Growth Focus" ? "Selected" : "Select Growth"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Layer 3 */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Layers className="w-4 h-4 text-primary" />
                Level 3: Bringing Them Back
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div className="bg-surface border border-border/50 rounded p-2.5 mb-2">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Focus</div>
                  <div className="text-sm font-bold text-foreground">Follow-up Ads</div>
                </div>
                <ul className="space-y-2">
                  {[
                    "Website visitors",
                    "People who looked at products",
                    "People who got samples",
                    "Abandoned carts",
                    "Influencer fans"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <p className="text-[10px] text-muted-foreground italic mb-3">
                    Cheaper and very effective for sales.
                  </p>
                  <Button 
                    className="w-full h-8 text-xs" 
                    variant={selectedDigital === "Follow-up Focus" ? "default" : "outline"}
                    onClick={() => setSelectedDigital("Follow-up Focus")}
                  >
                    {selectedDigital === "Follow-up Focus" ? "Selected" : "Select Follow-up"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      {/* Ramadan Surge */}
      <AnimatedSection className="mb-16 pdf-section">
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-full hidden sm:block">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-lg text-foreground mb-2">Ramadan Online Plan</h4>
              <p className="text-xs text-muted-foreground mb-4 max-w-3xl">
                Ads get more expensive during Ramadan because everyone is competing. If we don't spend enough, we might be invisible.
                We need to decide if we want to spend more to stay visible.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Pay More for Ads", "Show Ads Again More Often", "Give More Samples", "Use More Influencers"].map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-[10px] font-normal">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* 11.3 Influencer Plan */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Influencer Types</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">11.3 Influencer Plan</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Who we work with changes how people see us. No celebrities in Year 1.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 pdf-section">
        
        {/* Benchmarks Panel */}
        <AnimatedSection delay={0.1} className="lg:col-span-1">
          <Card className="bg-background border-border h-full">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <BarChart className="w-4 h-4 text-primary" />
                Costs & Returns
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  {[
                    { label: "Tiny (Nano)", value: "AED 500–2,000" },
                    { label: "Small (Micro)", value: "AED 2,000–5,000" },
                    { label: "Medium (Mid-tier)", value: "AED 5,000–20,000" },
                    { label: "Large (Macro)", value: "AED 15,000–50,000+" },
                    { label: "Boosting", value: "15–20% of spend" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-2 last:border-0">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-surface border border-border rounded p-3">
                  <div className="text-[10px] font-semibold text-foreground uppercase tracking-wider mb-2">Goal Return</div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Average</span>
                    <span className="font-bold text-primary">6.5x</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className="text-muted-foreground">High-Perf</span>
                    <span className="font-bold text-primary">8.4x</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Models Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Real People",
              focus: "Nano & Micro",
              pros: "Trustworthy, Good engagement",
              cons: "Slower fame",
              fit: "Option 1"
            },
            {
              title: "Balanced Mix",
              focus: "Micro & Mid-tier",
              pros: "Good reach & trust",
              cons: "Moderate cost",
              fit: "Option 2"
            },
            {
              title: "Famous Faces",
              focus: "Big Influencers",
              pros: "Fast fame",
              cons: "High risk if it fails",
              fit: "Option 3"
            }
          ].map((model, i) => (
            <AnimatedSection key={i} delay={0.2 + (i * 0.1)}>
              <Card className="bg-background border-border h-full flex flex-col hover:border-primary/30 transition-colors">
                <CardHeader className="pb-3 border-b border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary font-display font-bold text-sm">
                    {i + 1}
                  </div>
                  <CardTitle className="font-display text-base text-foreground leading-tight">
                    {model.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex-1 flex flex-col text-xs">
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-muted-foreground block mb-0.5 text-[10px] uppercase">Focus</span>
                      <span className="font-medium text-foreground">{model.focus}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block mb-0.5 text-[10px] uppercase">Pros</span>
                      <span className="font-medium text-foreground">{model.pros}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block mb-0.5 text-[10px] uppercase">Cons</span>
                      <span className="font-medium text-foreground">{model.cons}</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-3 border-t border-border/50 space-y-3">
                    <span className="text-[10px] text-primary italic block">{model.fit}</span>
                    <Button 
                      className="w-full h-8 text-xs" 
                      variant={selectedInfluencer === model.title ? "default" : "outline"}
                      onClick={() => setSelectedInfluencer(model.title)}
                    >
                      {selectedInfluencer === model.title ? "Selected" : "Select Model"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 11.4 Experiential Activation */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">In-Store Presence</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">11.4 Real-World Events</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              In the UAE, people like to smell perfumes before buying. 
              Since almost 60% of sales happen in stores, not having a physical presence can slow us down.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Benchmarks */}
      <AnimatedSection delay={0.1} className="mb-8 pdf-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Prime Mall Pop-up", value: "~AED 3,000", sub: "per day" },
            { label: "Fashion Ave Media", value: "~AED 180,000", sub: "per month" },
            { label: "Dubai Mall Visitors", value: "100 Million+", sub: "annual" },
            { label: "MOE Visitors", value: "~42 Million", sub: "annual" }
          ].map((stat, i) => (
            <Card key={i} className="bg-surface border-border/50">
              <CardContent className="p-4 text-center">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-lg font-bold text-foreground">{stat.value}</div>
                <div className="text-[10px] text-primary">{stat.sub}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 pdf-section">
        {[
          {
            title: "Option 1: No Events",
            desc: "Only online.",
            pros: "Cheapest",
            cons: "Harder to trust",
            icon: Globe
          },
          {
            title: "Option 2: Short Pop-Up",
            desc: "5–14 Days.",
            pros: "Great for content",
            cons: "Medium cost",
            icon: Store
          },
          {
            title: "Option 3: Month-Long",
            desc: "30 Days (Ramadan).",
            pros: "High visibility",
            cons: "High commitment",
            icon: MapPin
          },
          {
            title: "Option 4: Big Mall Ads",
            desc: "Huge screens.",
            pros: "Maximum fame",
            cons: "Very expensive",
            icon: Radio
          }
        ].map((option, i) => (
          <AnimatedSection key={i} delay={0.2 + (i * 0.1)}>
            <Card className="bg-background border-border h-full flex flex-col hover:border-primary/30 transition-colors">
              <CardHeader className="pb-3 border-b border-border/50">
                <div className="flex justify-between items-start mb-2">
                  <option.icon className="w-5 h-5 text-primary" />
                  <span className="text-[10px] font-bold text-muted-foreground">0{i + 1}</span>
                </div>
                <CardTitle className="font-display text-base text-foreground">
                  {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 flex-1 flex flex-col text-xs">
                <p className="text-muted-foreground mb-3">{option.desc}</p>
                <div className="mt-auto space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-foreground">{option.pros}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="w-3 h-3 text-amber-500" />
                    <span className="text-muted-foreground">{option.cons}</span>
                  </div>
                  <Button 
                    className="w-full mt-3 h-8 text-xs" 
                    variant={selectedExperiential === option.title ? "default" : "outline"}
                    onClick={() => setSelectedExperiential(option.title)}
                  >
                    {selectedExperiential === option.title ? "Selected" : "Select"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4} className="mb-16 pdf-section">
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-full hidden sm:block">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-lg text-foreground mb-2">Must-Haves for Events</h4>
              <p className="text-xs text-muted-foreground mb-4 max-w-3xl">
                If we do an event, we must capture data. Visibility without data is a waste. We must have:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Collect Emails", "Scan QR Codes", "Ad Follow-ups"].map((req, i) => (
                  <Badge key={i} variant="outline" className="text-[10px] border-primary/20 text-primary bg-background">{req}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* 11.5 Ramadan Budget */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Seasonal Peak</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">11.5 Ramadan Budget Plan</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Ramadan is the biggest time for perfume sales. People buy gifts and use more perfume.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pdf-section">
        
        {/* Level 1 */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col relative overflow-hidden">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                1. Normal Spend
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <ul className="space-y-2 mb-4">
                {["Keep doing what we are doing", "No extra spending", "Focus on current ads"].map((item, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <Button 
                  className="w-full" 
                  variant={selectedRamadan === "Standard" ? "default" : "outline"}
                  onClick={() => setSelectedRamadan("Standard")}
                >
                  {selectedRamadan === "Standard" ? "Selected" : "Select Normal"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Level 2 */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full" />
            <CardHeader className="pb-4 border-b border-border/50 relative">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                2. Boosted Spend
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col relative">
              <ul className="space-y-2 mb-4">
                {["More influencers", "More samples", "More follow-up ads", "Slightly higher ad costs"].map((item, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 relative z-10">
                <Button 
                  className="w-full" 
                  variant={selectedRamadan === "Moderate Surge" ? "default" : "outline"}
                  onClick={() => setSelectedRamadan("Moderate Surge")}
                >
                  {selectedRamadan === "Moderate Surge" ? "Selected" : "Select Boosted"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Level 3 */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-background border-primary/20 h-full flex flex-col relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <CardHeader className="pb-4 border-b border-primary/20 relative">
              <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Aggressive</Badge>
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Flame className="w-4 h-4 text-primary" />
                3. Maximum Spend
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col relative">
              <ul className="space-y-2 mb-4">
                {["Huge influencer push", "Paying more to be #1", "Physical events", "Massive sampling", "Focus on the last week of Ramadan"].map((item, i) => (
                  <li key={i} className="text-xs text-foreground flex items-center gap-2 font-medium">
                    <Check className="w-3 h-3 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 relative z-10">
                <Button 
                  className="w-full" 
                  variant={selectedRamadan === "Ramadan Scale" ? "default" : "outline"}
                  onClick={() => setSelectedRamadan("Ramadan Scale")}
                >
                  {selectedRamadan === "Ramadan Scale" ? "Selected" : "Select Maximum"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <AnimatedSection delay={0.4} className="mb-8 pdf-section">
         <div className="bg-amber-500/5 border border-amber-500/20 rounded p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="text-sm font-medium text-amber-500 mb-1">Warning: Costs Will Go Up</h5>
            <p className="text-xs text-muted-foreground">
              Ad costs can jump from AED 6 to AED 40+ during Ramadan. 
              If we don't spend enough, our ads might not show up at all.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* 11.6 Governance */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Oversight</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">11.6 Checking Progress</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              We need to agree on everything before we start. This stops us from making bad decisions later.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 pdf-section">
        
        {/* Mandatory Confirmations */}
        <AnimatedSection delay={0.1} className="lg:col-span-1">
          <Card className="bg-background border-border h-full">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <ClipboardList className="w-4 h-4 text-primary" />
                Things You Must Approve
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-xs text-muted-foreground italic">
                  You must say "Yes" to these before we launch:
                </p>
                <div className="space-y-3">
                  {[
                    "The Budget Plan",
                    "How aggressive we are online",
                    "Which influencers we use",
                    "If we do physical events",
                    "How much we spend for Ramadan",
                    "The PR plan"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-primary">
                        {i + 1}
                      </div>
                      <span className="text-xs text-foreground font-medium pt-0.5">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Review Cadence */}
        <AnimatedSection delay={0.2} className="lg:col-span-2">
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                When We Review
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    period: "Weekly",
                    items: ["Campaign results", "Ad costs (AED 6-40)", "Are ads working?", "Follow-up list size"]
                  },
                  {
                    period: "Monthly",
                    items: ["Where we spend money", "Influencer Profit (Target 6.5x)", "Sampling success (Target 35%)", "Cost per customer"]
                  },
                  {
                    period: "Quarterly",
                    items: ["Budget changes", "Influencer changes", "Event results", "Big strategy updates"]
                  }
                ].map((col, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-sm font-bold text-primary border-b border-border/50 pb-2 mb-2">
                      {col.period}
                    </div>
                    <ul className="space-y-2">
                      {col.items.map((item, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      {/* 90-Day Governance Rule */}
      <AnimatedSection delay={0.3} className="mb-12 pdf-section">
        <div className="bg-background border border-primary/20 rounded-lg overflow-hidden shadow-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0 p-4 bg-primary/5 rounded-full border border-primary/10">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left space-y-3">
              <h4 className="font-display text-xl text-foreground">The 90-Day Rule</h4>
              <p className="text-sm text-muted-foreground max-w-3xl">
                We must stick to the plan for at least 90 days. It takes time for ads, samples, and influencers to work. 
                Changing things too soon is a mistake.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/5 border border-destructive/20 rounded text-destructive">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs font-semibold">
                  Stopping too early wastes money.
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* 11.7 Success Thresholds by Scenario */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Success Metrics</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">11.7 Success Thresholds by Scenario</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              This defines what “success” means under each scenario.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 pdf-section">
        {/* Scenario 1 */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <Badge variant="outline" className="w-fit mb-2 text-xs">Option 1</Badge>
              <CardTitle className="font-display text-lg text-foreground">Conservative Digital-First</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                Goal: Stable growth with low risk.
              </p>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col gap-6">
              <div>
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Check className="w-3 h-3" /> Success Defined As
                </h5>
                <ul className="space-y-2">
                  {[
                    "CAC stabilizes within 90 days",
                    "Sampling ≥30–35% conversion",
                    "Influencer ROI ≥5:1",
                    "Retargeting conversion exceeds cold traffic",
                    "CRM database growing steadily",
                    "No capital stress"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-4 border-t border-border/50">
                 <h5 className="text-xs font-bold text-destructive uppercase tracking-wider mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3" /> Failure Indicators
                </h5>
                <ul className="space-y-2">
                  {[
                    "CAC unstable beyond 120 days",
                    "Sampling below 25%",
                    "No branded search growth"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-destructive flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Scenario 2 */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-primary/20 h-full flex flex-col shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full" />
            <CardHeader className="pb-4 border-b border-primary/10">
              <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-0 text-xs">Option 2</Badge>
              <CardTitle className="font-display text-lg text-foreground">Balanced Prestige</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                Goal: Build authority + stable sales.
              </p>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col gap-6">
              <div>
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Check className="w-3 h-3" /> Success Defined As
                </h5>
                <ul className="space-y-2">
                  {[
                    "CAC stabilizes within 90 days",
                    "Sampling ≥35%",
                    "Influencer ROI near or above 6.5:1",
                    "Measurable branded search growth",
                    "Strong Ramadan uplift",
                    "Retargeting meaningful share of revenue"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-4 border-t border-border/50">
                 <h5 className="text-xs font-bold text-destructive uppercase tracking-wider mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3" /> Failure Indicators
                </h5>
                <ul className="space-y-2">
                  {[
                    "No authority lift",
                    "Influencer ROI below 4:1",
                    "Sampling below 30%"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-destructive flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Scenario 3 */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-primary text-primary-foreground h-full flex flex-col shadow-md">
            <CardHeader className="pb-4 border-b border-primary-foreground/20">
              <Badge className="w-fit mb-2 bg-white text-primary hover:bg-white/90 border-0 text-xs">Option 3</Badge>
              <CardTitle className="font-display text-lg">Prestige-Heavy Visibility</CardTitle>
              <p className="text-xs text-primary-foreground/80 mt-1">
                Goal: Become famous fast.
              </p>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col gap-6">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Check className="w-3 h-3" /> Success Defined As
                </h5>
                <ul className="space-y-2">
                  {[
                    "Rapid authority recognition",
                    "Strong branded search increase",
                    "Influencer ROI ≥6.5:1",
                    "Sampling ≥35%",
                    "Retargeting pool depth strong",
                    "CAC compresses by Month 6–9"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-primary-foreground/90 flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-white flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-4 border-t border-primary-foreground/20">
                 <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3" /> Failure Indicators
                </h5>
                <ul className="space-y-2">
                  {[
                    "High fixed cost without authority lift",
                    "No measurable digital uplift from experiential",
                    "CAC unstable beyond 90 days"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-primary-foreground/90 flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-white flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 11.8 Capital Protection Triggers */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Money Safety</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">11.8 When to Stop Spending</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              We need to protect our money. These rules tell us when to pause or cut the budget.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 pdf-section">
        
        {/* 11.8.1 Digital Performance */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Activity className="w-4 h-4 text-primary" />
                Online Ads
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col gap-4">
              <div>
                <h5 className="text-xs font-bold text-destructive uppercase tracking-wider mb-2 flex items-center gap-2">
                  <PauseCircle className="w-3 h-3" /> Pause or Cut Budget If
                </h5>
                <ul className="space-y-1.5">
                  {[
                    "Customer cost is too high for 90+ days",
                    "Sales conversion is too low",
                    "Retargeting is worse than new ads",
                    "Sampling conversion < 25%"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-destructive flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto bg-surface border border-border rounded p-3">
                <div className="text-xs font-semibold text-primary mb-1">Move Money To:</div>
                <div className="text-[10px] text-muted-foreground">
                  Retargeting • Samples • Influencer ads
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 11.8.2 Influencer Protection */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Users className="w-4 h-4 text-primary" />
                Influencers
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col gap-4">
              <div>
                <h5 className="text-xs font-bold text-destructive uppercase tracking-wider mb-2 flex items-center gap-2">
                  <PauseCircle className="w-3 h-3" /> Reduce Spend If
                </h5>
                <ul className="space-y-1.5">
                  {[
                    "Return on investment is below 3x",
                    "Engagement (likes/comments) is low",
                    "No increase in website traffic",
                    "No increase in brand searches"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-destructive flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto bg-surface border border-border rounded p-3">
                <div className="text-xs font-semibold text-primary mb-1">Move Money To:</div>
                <div className="text-[10px] text-muted-foreground">
                  Better influencers • Smaller, authentic influencers
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 11.8.3 Experiential Protection */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Store className="w-4 h-4 text-primary" />
                Physical Events
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col gap-4">
              <div>
                <h5 className="text-xs font-bold text-destructive uppercase tracking-wider mb-2 flex items-center gap-2">
                  <PauseCircle className="w-3 h-3" /> Stop Events If
                </h5>
                <ul className="space-y-1.5">
                  {[
                    "Few people scanning QR codes",
                    "Event samplers buy less than online samplers",
                    "No increase in brand searches",
                    "Follow-up list not growing"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-destructive flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto bg-primary/5 border border-primary/10 rounded p-3">
                <p className="text-[10px] text-muted-foreground italic">
                  "Events must help online sales to be worth it."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 11.8.4 PR Allocation Review */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Signal className="w-4 h-4 text-primary" />
                PR (Public Relations)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col gap-4">
              <div>
                <h5 className="text-xs font-bold text-destructive uppercase tracking-wider mb-2 flex items-center gap-2">
                  <RefreshCw className="w-3 h-3" /> Re-evaluate If
                </h5>
                <ul className="space-y-1.5">
                  {[
                    "No increase in website traffic",
                    "No increase in brand searches",
                    "Influencers don't look trustworthy",
                    "Magazines aren't mentioning us"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-destructive flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto bg-primary/5 border border-primary/10 rounded p-3">
                <p className="text-[10px] text-muted-foreground italic">
                  "PR is supposed to make ads cheaper by building trust."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 11.8.5 Sampling Protection */}
        <AnimatedSection delay={0.5}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Gift className="w-4 h-4 text-primary" />
                Sampling
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col gap-4">
              <div>
                <h5 className="text-xs font-bold text-destructive uppercase tracking-wider mb-2 flex items-center gap-2">
                  <RefreshCw className="w-3 h-3" /> Review If
                </h5>
                <ul className="space-y-1.5">
                  {[
                    "Less than 35% buy a full bottle",
                    "Immediate purchase < 13%",
                    "Email follow-ups not working",
                    "No repeat purchases"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-destructive flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto bg-destructive/5 border border-destructive/10 rounded p-3">
                <p className="text-[10px] text-muted-foreground italic">
                  "If samples don't sell bottles, they are just a cost."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 11.8.6 Full Strategic Pause */}
        <AnimatedSection delay={0.6}>
          <Card className="bg-destructive/5 border-destructive/20 h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-destructive/10 rounded-bl-full" />
            <CardHeader className="pb-4 border-b border-destructive/10">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-destructive">
                <PauseCircle className="w-4 h-4" />
                STOP EVERYTHING
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col gap-4">
              <div>
                <h5 className="text-xs font-bold text-destructive uppercase tracking-wider mb-2">
                  Re-think Strategy If
                </h5>
                <ul className="space-y-1.5">
                  {[
                    "Customer cost is unstable after 120 days",
                    "Sampling conversion < 25%",
                    "Influencer Profit < 3x everywhere",
                    "No growth in brand searches",
                    "Customers hate the product"
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-destructive flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto bg-background border border-border/50 rounded p-3">
                <div className="text-xs font-semibold text-foreground mb-1">Evaluate:</div>
                <div className="text-[10px] text-muted-foreground">
                  New ads • New Brand Position • New Product • Cut Budget
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 11.9 Risk Mitigation Matrix */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Strategic Control</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">11.9 Risk Mitigation Matrix</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Risk is not theoretical. It is structural. This matrix defines risks, impact, early warning signs, and mitigation action.
            </p>
          </div>
        </div>
        
        {/* Market Context Box */}
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                UAE Premium Fragrance Market Context
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                    "USD 400M niche segment",
                    "8% annual growth",
                    "80%+ luxury revenue in Dubai",
                    "58.9% specialty retail",
                    "AED 6–40 CPC auction"
                ].map((item, i) => (
                    <div key={i} className="bg-background/50 border border-primary/10 rounded px-3 py-2 text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                    </div>
                ))}
            </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 pdf-section">
        {[
          {
            title: "High Customer Acquisition Cost",
            icon: TrendingUp,
            cause: ["Rising CPC (AED 20–40)", "Weak conversion rate", "Poor retargeting depth", "Creative fatigue"],
            impact: ["Unstable CAC", "Negative ROAS", "Budget burn without scale"],
            warning: ["CPC drifting toward upper band", "Conversion rate low", "Retargeting weak"],
            mitigation: ["Increase sampling emphasis", "Strengthen authority messaging", "Reallocate toward retargeting", "Refresh creative bank"]
          },
          {
            title: "Weak Sampling Conversion",
            icon: Target,
            benchmark: "≥35% conversion",
            cause: ["Weak scent performance", "Poor follow-up automation", "Weak layering education", "Poor positioning clarity"],
            impact: ["Lower conversion confidence", "Higher dependency on cold traffic", "Reduced influencer ROI"],
            warning: ["Sampling conversion < 25%", "Low repeat purchase"],
            mitigation: ["Audit product performance", "Improve CRM sequence", "Improve layering education", "Strengthen performance messaging"]
          },
          {
            title: "Influencer Underperformance",
            icon: Users,
            benchmark: "6.5:1 ROI",
            cause: ["Poor audience alignment", "Overuse of macro tier", "Weak creative integration", "No amplification"],
            impact: ["Wasted budget", "Weak retargeting pool", "No authority lift"],
            warning: ["ROI below 3:1 sustained", "Low comment depth", "No branded search lift"],
            mitigation: ["Shift toward nano/micro", "Amplify validated content", "Improve creative briefing", "Adjust tier concentration"]
          },
          {
            title: "Authority Gap",
            icon: Shield,
            cause: ["Weak PR execution", "No Tier-1 editorial", "No influencer layering talk", "No experiential validation"],
            impact: ["High-intent clicks convert poorly", "Brand seen as experimental", "Premium pricing resistance"],
            warning: ["Low branded search growth", "Weak referral traffic", "Low social proof"],
            mitigation: ["Strengthen PR tier", "Improve founder narrative", "Increase influencer seeding", "Consider experiential activation"]
          },
          {
            title: "Product Performance Mismatch",
            icon: AlertTriangle,
            isCritical: true,
            cause: ["Weak longevity in UAE heat", "Poor projection", "Poor layering compatibility"],
            impact: ["Negative word-of-mouth", "Sampling conversion collapse", "Influencer trust erosion"],
            warning: ["Performance complaints", "High refund rate", "Low repeat purchase"],
            mitigation: ["Pause scale", "Re-evaluate formula", "Improve messaging clarity", "Adjust positioning"]
          },
          {
            title: "Ramadan Underinvestment",
            icon: Calendar,
            cause: ["No surge allocation", "No creative refresh", "Weak influencer presence"],
            impact: ["Missed seasonal uplift", "Lost prestige positioning opportunity"],
            mitigation: ["Pre-approve Ramadan budget", "Increase retargeting", "Align gifting messaging", "Intensify sampling"]
          }
        ].map((risk, i) => (
          <AnimatedSection key={i} delay={0.1 * (i + 1)}>
            <Card className={`h-full flex flex-col ${risk.isCritical ? 'border-destructive/40 bg-destructive/5' : 'bg-background border-border'}`}>
              <CardHeader className={`pb-4 border-b ${risk.isCritical ? 'border-destructive/20' : 'border-border/50'}`}>
                <div className="flex justify-between items-start mb-1">
                   <div className="flex items-center gap-2">
                      <risk.icon className={`w-5 h-5 ${risk.isCritical ? 'text-destructive' : 'text-primary'}`} />
                      <CardTitle className={`font-display text-lg ${risk.isCritical ? 'text-destructive' : 'text-foreground'}`}>
                        {risk.title}
                      </CardTitle>
                   </div>
                   {risk.isCritical && <Badge variant="destructive" className="text-[10px]">Highest Risk</Badge>}
                   {risk.benchmark && <Badge variant="outline" className="text-[10px]">{risk.benchmark}</Badge>}
                </div>
              </CardHeader>
              <CardContent className="pt-6 flex-1 flex flex-col gap-4">
                
                {/* Cause & Impact Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Cause</span>
                    <ul className="space-y-1">
                      {risk.cause.map((item, j) => (
                        <li key={j} className="text-[10px] text-muted-foreground leading-tight flex items-start gap-1.5">
                          <div className={`w-1 h-1 rounded-full mt-1 flex-shrink-0 ${risk.isCritical ? 'bg-destructive' : 'bg-primary'}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Impact</span>
                    <ul className="space-y-1">
                      {risk.impact.map((item, j) => (
                        <li key={j} className="text-[10px] text-muted-foreground leading-tight flex items-start gap-1.5">
                          <div className={`w-1 h-1 rounded-full mt-1 flex-shrink-0 ${risk.isCritical ? 'bg-destructive' : 'bg-primary'}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Warning & Mitigation */}
                <div className="space-y-3 mt-2">
                  {risk.warning && (
                    <div className="bg-background/50 border border-border/50 rounded p-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 block mb-1">Early Warning Signs</span>
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {risk.warning.map((item, j) => (
                          <span key={j} className="text-[10px] text-muted-foreground flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-orange-500/50" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className={`${risk.isCritical ? 'bg-destructive/10 border-destructive/20' : 'bg-primary/5 border-primary/10'} border rounded p-3`}>
                    <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${risk.isCritical ? 'text-destructive' : 'text-primary'}`}>
                      Mitigation Action
                    </span>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {risk.mitigation.map((item, j) => (
                        <span key={j} className="text-[10px] text-foreground flex items-center gap-1">
                          <Check className={`w-3 h-3 ${risk.isCritical ? 'text-destructive' : 'text-primary'}`} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
  );
};

export default OwnerDecisionFramework;
