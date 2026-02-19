
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  BarChart, Target, TrendingUp, AlertTriangle, Scale, Clock, 
  ArrowRight, Shield, Calculator, Check, LineChart, Search,
  Users, DollarSign, PieChart, Activity, Star, MessageCircle, Share2, Package, Gift, RefreshCw, Layers, CreditCard, Calendar, ClipboardCheck,
  Download, Loader2
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const PerformanceFramework = () => {
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
      const margin = 10;
      const contentWidth = pageWidth - (margin * 2);
      let currentY = margin;

      // Title Page or Header
      pdf.setFontSize(10);
      pdf.setTextColor(150);
      pdf.text(`Performance Framework - ${brandName}`, margin, margin - 2);

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
          pdf.text(`Performance Framework - ${brandName}`, margin, margin - 2);
        }

        pdf.addImage(imgData, "PNG", margin, currentY, contentWidth, imgHeight);
        currentY += imgHeight + 5;
      }

      pdf.save(`${brandName.replace(/\s+/g, "_")}_Performance_Framework.pdf`);
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
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Section 10</span>
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
        title="Performance Measurement Framework"
        subtitle="Tracking & Improving"
      />

      {/* 10.0 Context */}
      <AnimatedSection className="mb-16 pdf-section">
        <div className="bg-surface border border-border rounded-lg p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-semibold text-foreground">Market Facts</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              This is how we measure success. These numbers are based on real UAE market data.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {[
                "Specialty perfume market: ~$400M",
                "Most sales are luxury (>80%)",
                "Stores sell the most (~59%)",
                "Online sales growing (~6%)",
                "Ad Click Cost: AED 6–40",
                "Sampling success: ≥35% buy later",
                "Immediate buyers: ~13%",
                "Influencer Profit: 6.5x spend"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border-l-2 border-primary p-4 rounded-r mt-4">
              <p className="text-xs text-foreground italic">
                "We don't guess revenue. We measure what actually happens."
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* 10.1 Cost to Get Customers */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Getting Customers</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">10.1 How Much It Costs to Get a Customer</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              The cost to get a new customer depends on competition and how good our website is.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pdf-section">
        
        {/* What We Expect to Pay */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                What We Expect to Pay
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div className="space-y-3">
                  {[
                    { label: "Normal Click Cost", value: "AED 6–15" },
                    { label: "Ready-to-Buy Click Cost", value: "AED 20–40" },
                    { label: "Cost to Show Ads", value: "AED 5–15" },
                    { label: "Influencer Profit", value: "6.5x" },
                    { label: "Sampling Success", value: "≥35%" },
                    { label: "Immediate Buyers", value: "13%" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-2 last:border-0">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* What We Need to Know First */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Calculator className="w-4 h-4 text-primary" />
                What We Need to Know First
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div className="bg-destructive/5 border border-destructive/10 rounded p-3 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      We can't calculate exact profit without these numbers:
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Website buying rate",
                    "Average order value (AOV)",
                    "Return rate",
                    "Product cost",
                    "Sampling cost",
                    "Influencer fees",
                    "Payment fees (COD/BNPL)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 pdf-section">
        
        {/* What Changes the Price */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Scale className="w-4 h-4 text-primary" />
                What Changes the Price
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <ul className="space-y-2.5">
                {[
                  "Click costs (AED 6–40)",
                  "How many people buy (Buying Rate)",
                  "How good our follow-up ads are",
                  "How well sampling works",
                  "Influencer quality",
                  "Brand reputation",
                  "Ad tiredness (people getting bored)",
                  "Seasonality (Ramadan is expensive)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* How Long Until Prices Settle */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                How Long Until Prices Settle
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <p className="text-xs text-muted-foreground mb-4">
                It takes 90 days for prices to stabilize. Costs are always higher at the start.
              </p>
              
              <div className="space-y-4 relative pl-4 border-l border-border/50 ml-2">
                {[
                  { days: "Days 1–30", label: "High Costs", desc: "Learning phase" },
                  { days: "Days 31–60", label: "Improvement", desc: "Fixing what doesn't work" },
                  { days: "Days 61–90", label: "Stable", desc: "Running efficiently" }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-primary">{item.days}</span>
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                      <span className="text-[10px] text-muted-foreground">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-6">
                <p className="text-[10px] text-muted-foreground">
                  Don't judge the results until the 90 days are over.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 10.2 Making Money Back */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Money Value</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">10.2 Making Money Back (Ad Profit)</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              We need to measure how much money we make for every dirham we spend.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 pdf-section">
        
        {/* Ways to Measure */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <LineChart className="w-4 h-4 text-primary" />
                Ways to Measure
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-3">
                {[
                  "Direct Sales",
                  "Influencer Sales",
                  "Helped Sales (seen ad, bought later)",
                  "Total Sales (Blended)",
                  "Sales from Sampling"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-muted-foreground bg-surface border border-border/50 rounded p-2.5">
                    <span className="font-mono text-primary/50 text-[10px]">0{i + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Numbers We Need */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <PieChart className="w-4 h-4 text-primary" />
                Numbers We Need
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Money per sale",
                    "Buying rate",
                    "Average order value",
                    "Total Customer Value",
                    "Sampling cost",
                    "Influencer fees",
                    "Ad cost",
                    "Refunds",
                    "Payment fees"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto bg-surface border border-border rounded p-3">
                  <p className="text-[10px] text-muted-foreground italic">
                    We need these numbers to know if we are profitable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* How It Works */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Shield className="w-4 h-4 text-primary" />
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <ul className="space-y-3 mb-6">
                <li className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Cheap Traffic (AED 6–15):</span> Gets people to know us.
                </li>
                <li className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Expensive Traffic (AED 20–40):</span> Gets people to buy.
                </li>
                <li className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Follow-up Ads:</span> Reminds people to buy (cheaper).
                </li>
                <li className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Sampling:</span> Increases purchase probability.
                </li>
                <li className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">PR & Influencers:</span> Strengthen trust signals.
                </li>
              </ul>

              <div className="mt-auto border-t border-border/50 pt-3">
                <div className="text-[10px] font-semibold text-foreground uppercase tracking-wider mb-2">How Often We Check</div>
                <div className="flex gap-2 text-[10px] text-muted-foreground">
                  <Badge variant="secondary" className="text-[10px] h-5">Every Week</Badge>
                  <Badge variant="secondary" className="text-[10px] h-5">Every Month</Badge>
                  <Badge variant="secondary" className="text-[10px] h-5">Every 3 Months</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 10.3 Influencer Performance */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Quality & Sales</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">10.3 Influencer Results</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              We need to measure influencers by sales and quality, not just likes.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 pdf-section">
        
        {/* Validated Benchmarks */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                What Good Looks Like
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div className="space-y-3">
                  {[
                    { label: "Average Return", value: "6.5x" },
                    { label: "Best Case Return", value: "Up to 8.4x" },
                    { label: "Budget for Boosting", value: "15–20%" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-2 last:border-0">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-3">
                  <div className="bg-destructive/5 border border-destructive/10 rounded p-2.5">
                    <div className="text-[10px] font-semibold text-destructive uppercase tracking-wider mb-1">Warning Signs</div>
                    <p className="text-[10px] text-muted-foreground leading-snug">
                      Low sales, no one is buying, or fake comments.
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/10 rounded p-2.5">
                    <div className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">How to Fix It</div>
                    <ul className="text-[10px] text-muted-foreground space-y-1 leading-snug">
                      <li>• Spend more on the best ones</li>
                      <li>• Stop paying if they don't sell</li>
                      <li>• Use smaller influencers for trust</li>
                      <li>• Promote only the best posts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Measurement Methods */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Scale className="w-4 h-4 text-primary" />
                How We Measure
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Sales We Can See</div>
                  <ul className="space-y-1.5">
                    {[
                      "Tracking links",
                      "Discount codes",
                      "Special web pages"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Hidden Benefits</div>
                  <ul className="space-y-1.5">
                    {[
                      "More people clicking ads later",
                      "More people searching our name",
                      "More visitors when they post"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Activity className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Qualitative Signals */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                Quality Signs
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <ul className="space-y-2 mb-6">
                {[
                  "Are comments real or spam?",
                  "Do people talk about the brand?",
                  "Are people saving/sharing the post?",
                  "Does it fit the culture?",
                  "Do people watch the whole story?",
                  "Can we use this content in ads?"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-border/50 pt-3">
                <p className="text-[10px] text-muted-foreground italic">
                  "Don't just count followers. Look at sales and quality."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 10.4 Sampling Conversion */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Structural Layer</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">10.4 Sampling Results</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Sampling isn't just a cost; it's how we get people to buy perfume they haven't smelled.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 pdf-section">
        
        {/* Validated Benchmarks & Metrics */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Gift className="w-4 h-4 text-primary" />
                Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Winning Numbers</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface border border-border rounded p-3 text-center">
                      <div className="text-lg font-bold text-primary">≥35%</div>
                      <div className="text-[10px] text-muted-foreground">Sample → Buy Full Bottle</div>
                    </div>
                    <div className="bg-surface border border-border rounded p-3 text-center">
                      <div className="text-lg font-bold text-primary">13%</div>
                      <div className="text-[10px] text-muted-foreground">Buy Full Bottle Now</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">When to Check</div>
                  <ul className="space-y-1.5">
                    {[
                      "Right away (0–7 days)",
                      "Within 30 days",
                      "Sales from other ads",
                      "Do they buy again?",
                      "Is it cheaper to find them again?"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Financial Modeling */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Calculator className="w-4 h-4 text-primary" />
                Costs We Need to Track
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Cost per sample",
                    "Shipping & packaging",
                    "Email system costs",
                    "Full bottle price",
                    "Refunds",
                    "Payment fees"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="bg-surface border border-border rounded p-3 mb-3">
                    <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Why We Do It</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-[10px]">Find Good Customers</Badge>
                      <Badge variant="secondary" className="text-[10px]">Build Trust</Badge>
                      <Badge variant="secondary" className="text-[10px]">Cheaper Sales Later</Badge>
                    </div>
                  </div>
                  <p className="text-[10px] text-muted-foreground italic">
                    We need these numbers to calculate profit accurately.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 10.5 Blended Channel Performance */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Holistic View</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">10.5 Total Performance (Big Picture)</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              We need to look at everything together. Checking channels separately can be misleading.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 pdf-section">
        
        {/* Paid & Influencer Metrics */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Layers className="w-4 h-4 text-primary" />
                Getting New Customers
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Ads</div>
                  <ul className="space-y-1">
                    {["Clicks", "Cost to Click", "Buying Rate", "Follow-up Ad Sales", "Cost to Get a Buyer"].map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Influencers</div>
                  <ul className="space-y-1">
                    {["Direct Sales", "Hidden Help", "Visitor Quality", "Using Their Photos", "Sales from Boosted Posts"].map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* PR & Experiential & CRM */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <RefreshCw className="w-4 h-4 text-primary" />
                Keeping Customers & Building Trust
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Press (PR)</div>
                  <ul className="space-y-1">
                    {["Visitors from Articles", "Search Growth", "Good Magazine Features", "Trust Signals"].map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Events</div>
                  <ul className="space-y-1">
                    {["People Visiting", "Samples Given", "Emails Collected", "QR Scans", "New People Met"].map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Emails & Returning Customers</div>
                  <ul className="space-y-1">
                    {["Opens & Clicks", "Sales after Sampling", "People Buying Again", "Ramadan Sales"].map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Payment & Key Indicators */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <CreditCard className="w-4 h-4 text-primary" />
                Money Health
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">How People Pay</div>
                  <ul className="space-y-1.5">
                    {[
                      "Installments (Tabby/Tamara) (Costs 2–9%)",
                      "Cash on Delivery (COD) (15–25% share)",
                      "Failed Payments"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto bg-primary/5 border border-primary/10 rounded p-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Key Numbers</div>
                  <ul className="grid grid-cols-1 gap-1">
                    {["Customer Cost Trend", "Total Revenue Trend", "Sales from Samples", "People Buying Again"].map((item, i) => (
                      <li key={i} className="text-[10px] text-foreground font-medium flex items-center gap-1.5">
                        <Check className="w-2.5 h-2.5 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 10.6 90-Day Review */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Cadence</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">10.6 The First 90 Days Plan</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              We need a plan for the first 3 months. Stopping too early loses money.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pdf-section">
        
        {/* Phase 1 */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Search className="w-16 h-16 text-primary" />
            </div>
            <CardHeader className="pb-4 border-b border-border/50">
              <Badge variant="outline" className="w-fit mb-2 border-primary/20 text-primary">Weeks 1–4</Badge>
              <CardTitle className="font-display text-lg text-foreground">
                Month 1: Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Focus</div>
                  <ul className="space-y-1">
                    {["Testing ads", "Finding our audience", "Checking if sampling works", "Watching click costs (AED 6–40)"].map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto bg-surface border border-border/50 rounded p-3">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">What to Expect</div>
                  <ul className="text-[10px] text-muted-foreground space-y-1">
                    <li>• Higher costs</li>
                    <li>• Ads getting old quickly</li>
                    <li>• Not enough people to retarget yet</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Phase 2 */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Scale className="w-16 h-16 text-primary" />
            </div>
            <CardHeader className="pb-4 border-b border-border/50">
              <Badge variant="outline" className="w-fit mb-2 border-primary/20 text-primary">Weeks 5–8</Badge>
              <CardTitle className="font-display text-lg text-foreground">
                Month 2: Improving
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Focus</div>
                  <ul className="space-y-1">
                    {["Stop bad ads", "Adjust bids", "Retarget more people", "Fix influencer mix", "Improve website pages"].map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto bg-surface border border-border/50 rounded p-3">
                  <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">What to Expect</div>
                  <ul className="text-[10px] text-muted-foreground space-y-1">
                    <li>• Costs settling down</li>
                    <li>• More consistent sales</li>
                    <li>• Better idea of who buys</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Phase 3 */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-background border-border h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <CardHeader className="pb-4 border-b border-border/50">
              <Badge variant="outline" className="w-fit mb-2 border-primary/20 text-primary">Weeks 9–12</Badge>
              <CardTitle className="font-display text-lg text-foreground">
                Month 3: Steady Growth
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Focus</div>
                  <ul className="space-y-1">
                    {["Focus on what works", "Retarget harder", "Check sampling results", "Prepare for Ramadan", "Check influencer sales"].map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto bg-primary/5 border border-primary/10 rounded p-3">
                  <div className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">90-Day Outcome</div>
                  <ul className="text-[10px] text-muted-foreground space-y-1">
                    <li>• We know what works</li>
                    <li>• Budget is spent wisely</li>
                    <li>• Ready to grow bigger</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      {/* Corrective Action */}
      <AnimatedSection delay={0.4} className="mb-16 pdf-section">
        <Card className="bg-destructive/5 border-destructive/20 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-destructive/10 rounded-full">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <h4 className="font-display text-lg text-foreground">What If It's Not Working?</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  If we stop before 90 days, we lose the money we spent learning.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Change the ads",
                    "Change the message",
                    "Change influencers",
                    "Fix website issues",
                    "Check sampling",
                    "Fix retargeting"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* 10.7 Consolidated KPI Dashboard Summary */}
      <AnimatedSection delay={0.5} className="mb-16 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Executive Dashboard</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">10.7 Summary of Key Numbers</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              This table shows the most important numbers for Year 1.
            </p>
          </div>
        </div>

        <Card className="bg-background border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border/50">
                <tr>
                  <th className="p-4 whitespace-nowrap">Area</th>
                  <th className="p-4 whitespace-nowrap">Number to Watch</th>
                  <th className="p-4 whitespace-nowrap">Goal</th>
                  <th className="p-4 whitespace-nowrap">How Often to Check</th>
                  <th className="p-4 whitespace-nowrap">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  { category: "Traffic", kpi: "Ad Click Cost (Social)", target: "AED 6–15", freq: "Weekly", meaning: "Are ads too expensive?" },
                  { category: "Traffic", kpi: "Ad Click Cost (Search)", target: "AED 20–40", freq: "Daily", meaning: "Competition check" },
                  { category: "Sales", kpi: "Website Sales %", target: "To be found in 90 days", freq: "Weekly", meaning: "Is the website working?" },
                  { category: "Sampling", kpi: "Sample -> Full Bottle", target: "≥ 35%", freq: "Weekly", meaning: "Is sampling working?" },
                  { category: "Sampling", kpi: "Bought Immediately", target: "≥ 13%", freq: "Weekly", meaning: "Instant sales" },
                  { category: "Retargeting", kpi: "Sales from Follow-up Ads", target: "Better than cold traffic", freq: "Weekly", meaning: "Bringing people back" },
                  { category: "Influencer", kpi: "Profit vs Cost", target: "≥ 6.5x", freq: "Per campaign", meaning: "Are they worth it?" },
                  { category: "Trust", kpi: "People searching our name", target: "Going up", freq: "Monthly", meaning: "Brand fame" },
                  { category: "Retention", kpi: "Sales after Sampling", target: "≥ Benchmark", freq: "Monthly", meaning: "Long term value" },
                  { category: "Total", kpi: "Cost to Get a Customer", target: "Stable by Day 90", freq: "Weekly", meaning: "Can we grow?" },
                  { category: "Seasonal", kpi: "Ramadan Sales", target: "Higher than usual", freq: "Seasonal", meaning: "Big opportunity" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 font-medium text-foreground whitespace-nowrap">{row.category}</td>
                    <td className="p-4 text-foreground">{row.kpi}</td>
                    <td className="p-4 text-muted-foreground">{row.target}</td>
                    <td className="p-4 text-muted-foreground">{row.freq}</td>
                    <td className="p-4 text-muted-foreground italic">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-primary/5 border-primary/10">
            <CardContent className="p-6">
              <h4 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Why This Matters
              </h4>
              <ul className="space-y-3">
                {[
                  "Stops us from looking at just one bad number.",
                  "Prevents spending too much too fast.",
                  "Uses real UAE numbers as goals.",
                  "Turns guesses into facts."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-muted/30 border-border/50 flex items-center justify-center">
             <CardContent className="p-6 text-center">
              <p className="text-sm font-medium text-muted-foreground italic">
                "Without this table, we are just guessing."
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

    </div>
  </div>
  );
};

export default PerformanceFramework;
