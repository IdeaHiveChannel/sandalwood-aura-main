import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  Calendar, Check, AlertTriangle, Flag, BarChart, Target, Shield, Zap, 
  PenTool, Video, Image, Globe, ArrowRight, Layout, Monitor, Layers,
  Database, Megaphone, Smartphone, UserCheck, Users, CreditCard, ShoppingBag,
  MousePointerClick, TrendingUp, Gift, Star, LineChart, PieChart, Repeat, Moon, Package, Award, MessageSquare, Store
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ExecutionRoadmap = () => (
  <div className="py-24 md:py-40 px-6 bg-background relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="mb-8 flex items-center gap-4">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Section 8</span>
        <div className="h-px bg-primary/30 flex-1" />
        <Badge variant="outline" className="border-primary/30 text-muted-foreground font-normal tracking-wider">MARKETING SCOPE ONLY</Badge>
      </div>
      
      <SectionTitle
        title="12-Month Execution Roadmap"
        subtitle="Year 1 — United Arab Emirates Only"
      />

      {/* 8.0 Roadmap Context */}
      <AnimatedSection className="mb-16">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-foreground">8.0 Execution Framework</h3>
        <div className="bg-surface border border-border rounded-lg p-6 md:p-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-sm font-medium text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                <Flag className="w-4 h-4 text-primary" />
                Validated Market Realities
              </div>
              <ul className="space-y-3">
                {[
                  "~$400M niche fragrance segment",
                  "~8% annual niche growth rate",
                  "~5.88% online growth rate",
                  "AED 6–15 medium-competition CPC",
                  "AED 20–40 high-intent keyword CPC",
                  "~58.9% specialty retail dominance",
                  ">80% luxury revenue in Dubai",
                  "35%+ digital-to-physical sampling conversion",
                  "13% immediate luxury sampling benchmark"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="text-sm font-medium text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Execution Assumptions
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <ul className="space-y-2">
                    {[
                      "Marketing budget has been approved",
                      "Budget scenario selected (Conservative, Balanced, or Prestige-Heavy)",
                      "All marketing functions are outsourced",
                      "Digital infrastructure is prepared before scale"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 border-l-2 border-primary p-4 rounded-r">
                <p className="text-xs text-foreground italic">
                  "No operational, manufacturing, regulatory, or capital structure tasks are included. This roadmap moves from authority build to stabilization, then seasonal surge capture."
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* Quarter 1 Header */}
      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Months 1–3</Badge>
              <h3 className="font-display text-3xl text-foreground">Quarter 1 — FOUNDATION</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Establish credibility, authority, infrastructure stability, and data readiness before scaling acquisition.
              Controlled deployment, not scale deployment.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        
        {/* 8.1 Strategic Priorities */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                8.1 Strategic Priorities
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-4">
                {[
                  "Complete brand foundation",
                  "Finalize creative bank",
                  "Stabilize website and tracking",
                  "Activate public relations retainer",
                  "Execute influencer seeding",
                  "Launch sampling funnel",
                  "Conduct controlled paid media testing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-background border border-border/50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-3 bg-primary/5 border border-primary/10 rounded text-center">
                <p className="text-xs text-primary font-medium">
                  Establishes structural readiness inside a $400M niche segment.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.2 Brand & Creative Finalization */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <PenTool className="w-4 h-4 text-primary" />
                8.2 Brand & Creative Finalization
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6 mb-6">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Deliverables</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Brand name validation",
                      "Positioning confirmation",
                      "Messaging hierarchy",
                      "Performance narrative",
                      "Longevity articulation",
                      "Layering framework",
                      "Unisex positioning",
                      "Ramadan tone guidelines",
                      "Visual identity system",
                      "Bilingual messaging",
                      "Product photography",
                      "Ingredient storytelling",
                      "Short-form video assets",
                      "Retargeting variants",
                      "Sampling creative",
                      "Influencer content"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-destructive/5 border border-destructive/10 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-destructive uppercase tracking-wider">
                        Risk: Insufficient Creative Volume
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Creative quality directly affects acquisition cost within AED 6–40 CPC conditions. Lack of volume increases:
                      </p>
                      <div className="flex gap-2">
                        {["CPC volatility", "Creative fatigue", "Conversion resistance"].map((risk, i) => (
                          <Badge key={i} variant="outline" className="text-[9px] border-destructive/30 text-destructive/80">
                            {risk}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      {/* Grid for 8.3 - 8.5 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        {/* 8.3 Website & Infrastructure Stabilization */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Globe className="w-4 h-4 text-primary" />
                8.3 Website Stabilization
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Core Requirements</div>
                  <ul className="space-y-1.5">
                    {[
                      "Bilingual interface (EN/AR)",
                      "RTL Arabic formatting",
                      "Discovery kit sampling page",
                      "Layering education section",
                      "Secure payment integration"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Payment & Tracking</div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {[
                      "Apple Pay / Google Pay",
                      "Buy Now Pay Later (Tabby/Tamara)",
                      "Cash on Delivery (15-25% usage)",
                      "Meta/Google/TikTok Pixels",
                      "CRM & Email Capture"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-destructive/5 border border-destructive/10 rounded-lg p-3 mt-auto">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  <p className="text-[10px] text-muted-foreground">
                    <span className="font-semibold text-destructive">Risk: </span>
                    Traffic without accurate tracking increases financial risk in AED 20–40 click environments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.4 Public Relations Activation */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Megaphone className="w-4 h-4 text-primary" />
                8.4 PR Activation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Validated Retainer Ranges</div>
                <div className="space-y-2">
                  {[
                    { label: "Basic", range: "AED 10k–15k" },
                    { label: "Standard Luxury", range: "AED 15k–25k" },
                    { label: "Premium", range: "AED 25k–60k" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-1.5 last:border-0">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Q1 Milestones</div>
                <ul className="space-y-1.5">
                  {[
                    "Brand narrative distribution",
                    "Ingredient credibility",
                    "Performance-first positioning",
                    "Cultural alignment",
                    "Initial editorial mentions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                <p className="text-[10px] text-muted-foreground text-center italic">
                  "Authority must precede traffic expansion. Editorial presence improves sampling confidence."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.5 Influencer Seeding Phase */}
        <AnimatedSection delay={0.5}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Users className="w-4 h-4 text-primary" />
                8.5 Influencer Seeding
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Nano Tier</div>
                  <div className="text-lg font-bold text-primary">AED 500-2k</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Micro Tier</div>
                  <div className="text-lg font-bold text-primary">AED 2k-5k</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Objectives</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Authentic unboxing",
                      "Longevity validation",
                      "Projection testing",
                      "Layering demo",
                      "Cultural relevance"
                    ].map((item, i) => (
                      <Badge key={i} variant="outline" className="text-[10px] border-primary/20 text-muted-foreground">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs bg-background border border-border rounded p-2">
                  <span className="text-muted-foreground">Amplification Allocation</span>
                  <span className="font-bold text-foreground">15% - 20%</span>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                <p className="text-[10px] text-muted-foreground text-center">
                  This is credibility-building, not immediate revenue optimization.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      {/* Grid for 8.6 - 8.7 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        
        {/* 8.6 Controlled Paid Media Testing */}
        <AnimatedSection delay={0.6}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <MousePointerClick className="w-4 h-4 text-primary" />
                8.6 Controlled Paid Media
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Campaign Focus</div>
                  <ul className="space-y-1.5">
                    {[
                      "Medium competition keywords (AED 6–15)",
                      "Limited high-intent testing (AED 20–40)",
                      "Awareness video campaigns",
                      "Traffic campaigns",
                      "Sampling acquisition"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Objectives</div>
                  <div className="flex flex-wrap gap-2">
                    {["Build retargeting pools", "Test creatives", "Test messaging", "Test audiences", "Test keywords"].map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-[10px] bg-secondary/50 text-secondary-foreground">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-background border border-border rounded p-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Characteristics</div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-muted-foreground text-center">
                    <div className="bg-surface p-1 rounded border border-border/50">High Volatility</div>
                    <div className="bg-surface p-1 rounded border border-border/50">Inconsistent Conv.</div>
                    <div className="bg-surface p-1 rounded border border-border/50">Higher CPA</div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-[10px] text-muted-foreground">
                    <span className="font-semibold text-primary">Validation Phase: </span>
                    No aggressive scale in Q1. Focus on learning and data accumulation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.7 Quarter 1 KPI Focus */}
        <AnimatedSection delay={0.7}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                8.7 Quarter 1 KPI Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Primary Indicators</div>
                <ul className="space-y-3">
                  {[
                    "Website traffic growth",
                    "Retargeting pool size",
                    "Sampling request volume",
                    "Influencer engagement",
                    "CPC stability within ranges",
                    "Early conversion signals",
                    "CRM list growth"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-border rounded p-4 mt-auto">
                <p className="text-xs text-muted-foreground text-center italic">
                  "Customer acquisition cost stabilization is not expected yet."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Quarter 2 Header */}
      <Separator className="my-12 bg-border/50" />
      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Months 4–6</Badge>
              <h3 className="font-display text-3xl text-foreground">Quarter 2 — AWARENESS EXPANSION</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Scale visibility while preserving premium positioning. 
              Transition from validation to controlled expansion.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Grid for 8.8 - 8.9 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* 8.8 Digital Expansion */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Globe className="w-4 h-4 text-primary" />
                8.8 Digital Expansion
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Campaign Structure</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Awareness (AED 6-15 CPC)",
                      "High-intent (AED 20-40 CPC)",
                      "Retargeting campaigns",
                      "Sampling acquisition",
                      "Lookalike expansion"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-background border border-border rounded p-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Budget Shift</div>
                  <ul className="space-y-1.5">
                    {["Highest-performing audiences", "Best-performing creatives", "Validated keyword groups"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <TrendingUp className="w-3 h-3 text-primary/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.9 Influencer Expansion */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Star className="w-4 h-4 text-primary" />
                8.9 Influencer Expansion
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Tiers</div>
                  <div className="text-sm text-muted-foreground">Micro + Selected Mid-tier</div>
                  <div className="text-xs text-primary font-bold mt-1">AED 5,000–20,000</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Target ROI</div>
                  <div className="text-xl font-bold text-gradient-gold">6.5x</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Objectives</div>
                  <div className="flex flex-wrap gap-2">
                    {["Broader reach", "Prestige reinforcement", "Performance storytelling", "Ramadan prep"].map((item, i) => (
                      <Badge key={i} variant="outline" className="text-[10px] border-primary/20 text-muted-foreground">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-destructive/5 border border-destructive/10 rounded p-3">
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <AlertTriangle className="w-3 h-3 text-destructive" />
                    <span>Underperforming partnerships are discontinued.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Grid for 8.10 - 8.12 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        {/* 8.10 Sampling Acceleration */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Gift className="w-4 h-4 text-primary" />
                8.10 Sampling Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Benchmarks</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="text-xs text-muted-foreground">Digital-to-Physical</span>
                    <span className="text-sm font-bold text-primary">35%+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="text-xs text-muted-foreground">Immediate Conv.</span>
                    <span className="text-sm font-bold text-primary">13%</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                <p className="text-[10px] text-muted-foreground text-center">
                  Sampling reduces reliance on expensive AED 20–40 clicks.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.11 PR Continuity */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Megaphone className="w-4 h-4 text-primary" />
                8.11 PR Continuity
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Secures</div>
                <ul className="space-y-2">
                  {[
                    "Feature placements",
                    "Ingredient-focused articles",
                    "Cultural positioning",
                    "Authority reinforcement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-border rounded p-3 mt-auto">
                <p className="text-[10px] text-muted-foreground text-center italic">
                  "Strengthens legitimacy before Ramadan escalation."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.12 Quarter 2 KPI Focus */}
        <AnimatedSection delay={0.5}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <LineChart className="w-4 h-4 text-primary" />
                8.12 Q2 KPI Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <ul className="space-y-2 mb-6">
                {[
                  "Sampling-to-purchase rate",
                  "Retargeting conversion",
                  "Influencer ROI vs 6.5:1",
                  "CPC stability",
                  "Website conversion trend",
                  "CRM growth rate"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-destructive/5 border border-destructive/10 rounded p-3 mt-auto">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-3 h-3 text-destructive shrink-0 mt-0.5" />
                  <p className="text-[10px] text-muted-foreground">
                    If CAC trends are unstable, structural revisions must occur before further scale.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Quarter 3 Header */}
      <Separator className="my-12 bg-border/50" />
      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Months 7–9</Badge>
              <h3 className="font-display text-3xl text-foreground">Quarter 3 — OPTIMIZATION</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Increase efficiency, compress acquisition cost, and prepare for Ramadan surge. 
              Quarter 3 is performance consolidation.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Grid for 8.13 - 8.14 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* 8.13 Digital Budget Reallocation */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <PieChart className="w-4 h-4 text-primary" />
                8.13 Budget Reallocation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Shift Toward</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Best-performing audiences",
                      "Highest-converting creatives",
                      "Retargeting-heavy allocation",
                      "Validated high-intent keywords"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ArrowRight className="w-3 h-3 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-background border border-border rounded p-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Primary Goal</div>
                  <p className="text-sm text-muted-foreground">
                    Reduce effective customer acquisition cost. Retargeting becomes larger share of total spend.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.14 Influencer Optimization */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Star className="w-4 h-4 text-primary" />
                8.14 Influencer Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Actions</div>
                  <ul className="space-y-1.5">
                    {[
                      "Evaluate ROI by tier",
                      "Remove low-performing creators",
                      "Expand top-performing partnerships",
                      "Strengthen content reuse in paid"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-xs bg-background border border-border rounded p-2">
                  <span className="text-muted-foreground">Macro Influencers</span>
                  <span className="font-bold text-foreground">Test in Prestige-Heavy</span>
                </div>

                <div className="bg-destructive/5 border border-destructive/10 rounded p-3 mt-auto">
                  <p className="text-[10px] text-muted-foreground text-center">
                    Celebrity remains excluded in Year 1.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Grid for 8.15 - 8.17 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        {/* 8.15 CRM Intensification */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Repeat className="w-4 h-4 text-primary" />
                8.15 CRM Intensification
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Key Flows</div>
                <div className="space-y-2">
                  {[
                    "Post-sampling follow-up",
                    "Performance reinforcement",
                    "Layering education",
                    "Cross-sell messaging",
                    "Repeat purchase prompts",
                    "Ramadan pre-engagement"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                <p className="text-[10px] text-muted-foreground text-center">
                  Retention reduces dependence on AED 20–40 CPC exposure.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.16 Pre-Ramadan Preparation */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-surface border-border h-full flex flex-col glow-gold">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Moon className="w-4 h-4 text-primary" />
                8.16 Pre-Ramadan Prep
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Critical Tasks</div>
                <ul className="space-y-2">
                  {[
                    "Creative refresh",
                    "Gifting visuals",
                    "Cultural tone adaptation",
                    "Influencer scheduling",
                    "Sampling scale planning",
                    "Budget surge modeling"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-border rounded p-3 mt-auto">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Requirement</div>
                <p className="text-[10px] text-muted-foreground">
                  Ramadan auction volatility must be anticipated. Budget flexibility must be pre-approved.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.17 Quarter 3 KPI Focus */}
        <AnimatedSection delay={0.5}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <LineChart className="w-4 h-4 text-primary" />
                8.17 Q3 KPI Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <ul className="space-y-2 mb-6">
                {[
                  "Blended CAC trend",
                  "Retargeting compression",
                  "Repeat purchase signals",
                  "Influencer ROI consistency",
                  "CRM-driven revenue share"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-destructive/5 border border-destructive/10 rounded p-3 mt-auto">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-3 h-3 text-destructive shrink-0 mt-0.5" />
                  <p className="text-[10px] text-muted-foreground">
                    If performance is unstable by Month 9, structural changes are required before Ramadan scale.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Quarter 4 Header */}
      <Separator className="my-12 bg-border/50" />
      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Months 10–12</Badge>
              <h3 className="font-display text-3xl text-foreground">Quarter 4 — RAMADAN AND PEAK SEASON ACTIVATION</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Capitalize on structural seasonal demand spike. 
              Ramadan and Eid represent culturally embedded fragrance purchase windows.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Grid for 8.18 - 8.19 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* 8.18 Messaging Realignment */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-surface border-border h-full flex flex-col glow-gold">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <MessageSquare className="w-4 h-4 text-primary" />
                8.18 Messaging Realignment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Communication Shift</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Gifting narratives",
                      "Prestige presentation",
                      "Cultural symbolism",
                      "Family & Corporate gifting",
                      "Layering rituals"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ArrowRight className="w-3 h-3 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-background border border-border rounded p-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Tone Requirement</div>
                  <p className="text-sm text-muted-foreground">
                    Tone must remain respectful and culturally aligned.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.19 Digital Surge Allocation */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Zap className="w-4 h-4 text-primary" />
                8.19 Digital Surge Allocation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Focus Areas</div>
                  <ul className="space-y-1.5">
                    {[
                      "Retargeting saturation",
                      "High-intent keyword capture",
                      "Influencer amplification",
                      "Sampling scale-up"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-xs bg-background border border-border rounded p-2">
                  <span className="text-muted-foreground">CPC Volatility</span>
                  <span className="font-bold text-foreground">AED 6–40 Range</span>
                </div>

                <div className="bg-destructive/5 border border-destructive/10 rounded p-3 mt-auto">
                   <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 text-destructive shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-foreground">
                      Auction discipline is critical.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Grid for 8.20 - 8.21 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* 8.20 Influencer Surge */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Star className="w-4 h-4 text-primary" />
                8.20 Influencer Surge
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Actions</div>
                <div className="space-y-2">
                  {[
                    "Increased posting frequency",
                    "Ramadan-specific storytelling",
                    "Gifting unboxing",
                    "Iftar presence",
                    "Layering demonstration"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background border border-border rounded p-3 mt-auto">
                <p className="text-[10px] text-muted-foreground text-center">
                  Macro influencers may be included. Celebrity remains excluded.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.21 Experiential Activation */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Store className="w-4 h-4 text-primary" />
                8.21 Experiential Activation (If Selected)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Options</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Short-term pop-up",
                    "Ramadan mall presence",
                    "Sampling event",
                    "Limited-edition presentation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Requirement</div>
                <p className="text-[10px] text-muted-foreground">
                  Must integrate QR capture, email registration, retargeting audience expansion, and sampling follow-up. Experiential without digital integration reduces measurable return.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Grid for 8.22 - 8.24 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        {/* 8.22 Sampling Intensification */}
        <AnimatedSection delay={0.5}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Package className="w-4 h-4 text-primary" />
                8.22 Sampling Intensification
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Objectives</div>
                  <ul className="space-y-1.5">
                    {[
                      "Increase trial",
                      "Drive gifting confidence",
                      "Accelerate purchase window"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                 <div className="bg-background border border-border rounded p-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Track</div>
                  <p className="text-xs text-muted-foreground">
                    7-day & 30-day conversion, Average Order Value.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.23 Post-Ramadan Conversion Window */}
        <AnimatedSection delay={0.6}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Repeat className="w-4 h-4 text-primary" />
                8.23 Post-Ramadan Conversion Window
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Actions</div>
                <div className="space-y-2">
                  {[
                    "Retarget all Ramadan traffic",
                    "Deploy urgency messaging",
                    "Encourage repeat purchase",
                    "Reinforce layering education",
                    "Push authority reminders"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 8.24 Quarter 4 KPI Focus */}
        <AnimatedSection delay={0.7}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <LineChart className="w-4 h-4 text-primary" />
                8.24 Quarter 4 KPI Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <ul className="space-y-2 mb-6">
                {[
                  "Ramadan revenue uplift",
                  "Retargeting efficiency",
                  "Sampling conversion spike",
                  "Influencer ROI performance",
                  "Blended CAC stability",
                  "Repeat purchase rate",
                  "Branded search volume trend"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-background border border-border rounded p-3 mt-auto">
                <p className="text-[10px] text-muted-foreground">
                  Performance must be evaluated across full seasonal cycle, not daily fluctuation.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  </div>
);

export default ExecutionRoadmap;
