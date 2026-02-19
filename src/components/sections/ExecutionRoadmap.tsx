import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  Calendar, Check, AlertTriangle, Flag, Target, Shield,
  PenTool, Globe, Megaphone, Users, MousePointerClick, TrendingUp
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
        <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Strategic Timeline</span>
        <div className="h-px bg-primary/30 flex-1" />
        <Badge variant="outline" className="border-primary/30 text-muted-foreground font-normal tracking-wider">MARKETING SCOPE</Badge>
      </div>
      
      <SectionTitle
        title="12-Month Execution Roadmap"
        subtitle="Strategic Timeline: Year 1 Market Entry & Acceleration."
      />

      {/* Execution Strategy */}
      <AnimatedSection className="mb-16">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-foreground">Strategy Overview</h3>
        <div className="bg-surface border border-border rounded-lg p-6 md:p-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-sm font-medium text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                <Flag className="w-4 h-4 text-primary" />
                Market Context
              </div>
              <ul className="space-y-3">
                {[
                  "Niche Segment: ~$400M (8% YoY Growth)",
                  "Online Sales: +5.88% Velocity",
                  "Ad Costs: AED 6–15 (Standard) / AED 20–40 (High Intent)",
                  "Retail Landscape: 58.9% Specialty / >80% Luxury",
                  "Target Conversion: 35% (Digital-to-Sample)"
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
                  Key Assumptions
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <ul className="space-y-2">
                    {[
                      "Capital is secured & liquid",
                      "Scenario (Conservative vs Aggressive) is defined",
                      "100% Specialist Agency Model",
                      "Digital Infrastructure is live"
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
                  <strong className="block mb-1">Focus</strong>
                  Strictly market entry velocity and revenue capture. Manufacturing/Legal out of scope.
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
              <h3 className="font-display text-3xl text-foreground">Phase 1: Foundation</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Objective: Establish credibility, authority, infrastructure stability, and data readiness before scaling acquisition.
              Focus: Controlled deployment.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        
        {/* Strategic Priorities */}
        <AnimatedSection delay={0.1}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                Strategic Priorities
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

        {/* Brand & Creative Finalization */}
        <AnimatedSection delay={0.2}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <PenTool className="w-4 h-4 text-primary" />
                Creative Development
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

      {/* Grid for Strategy Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        {/* Website & Infrastructure Stabilization */}
        <AnimatedSection delay={0.3}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Globe className="w-4 h-4 text-primary" />
                Digital Infrastructure
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

        {/* Public Relations Activation */}
        <AnimatedSection delay={0.4}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Megaphone className="w-4 h-4 text-primary" />
                PR Continuity
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

        {/* Influencer Seeding Phase */}
        <AnimatedSection delay={0.5}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Users className="w-4 h-4 text-primary" />
                Influencer Seeding
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

      {/* Grid for Paid Media & KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        
        {/* Controlled Paid Media Testing */}
        <AnimatedSection delay={0.6}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <MousePointerClick className="w-4 h-4 text-primary" />
                Paid Media Testing
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
                
                <div className="bg-surface border border-border rounded p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-foreground">Initial Budget Cap</span>
                    <span className="text-sm font-bold text-primary">AED 450,000</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    Allocated for Year 1 market entry testing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Phase 1 KPI Targets */}
        <AnimatedSection delay={0.7}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                Quarter 1 KPI Focus
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
              
              <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground bg-primary/5 p-3 rounded border border-primary/10">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>Success Metric</span>
                </div>
                <span className="font-semibold text-primary">Data Readiness</span>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
      
      {/* Quarter 2-4 Placeholder for Presentation Completeness */}
      <Separator className="my-12 bg-border/50" />
      
      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline" className="border-primary/50 text-primary">Months 4–12</Badge>
              <h3 className="font-display text-3xl text-foreground">Phase 2 & 3: Optimization & Scale</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Following foundation validation, the strategy shifts to aggressive optimization and scaling of profitable channels.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Phase 2: Optimization (Months 4-6)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Refine creative based on performance data</li>
                <li>• Optimize landing pages for conversion</li>
                <li>• Scale winning influencer partnerships</li>
                <li>• Expand successful ad sets</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Phase 3: Scale (Months 7-12)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Aggressive budget increase on high-ROAS channels</li>
                <li>• Launch seasonal campaigns (Ramadan/Eid)</li>
                <li>• Expand product line visibility</li>
                <li>• Maximize retention and LTV strategies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

    </div>
  </div>
);

export default ExecutionRoadmap;
