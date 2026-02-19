import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  Building, Camera, Megaphone, Globe, Users, Check, AlertTriangle, 
  Database, Layout, ArrowRight, Shield, CreditCard, Mail, Scale, Crown, Target, Gem, TrendingUp, Activity, Calculator, PieChart, Layers, Clock, CalendarClock, CheckCircle2, Gift
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const MarketingBudget = () => (
  <div className="py-24 md:py-40 px-6 bg-surface relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="mb-8 flex items-center gap-4">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Financial Strategy</span>
        <div className="h-px bg-primary/30 flex-1" />
        <Badge variant="outline" className="border-primary/30 text-muted-foreground font-normal tracking-wider">MARKETING SCOPE ONLY</Badge>
      </div>
      
      <SectionTitle
        title="Marketing Budget Structure"
        subtitle="Year 1 — United Arab Emirates Only"
      />

      {/* Context */}
      <AnimatedSection className="mb-16 pdf-section">
        <div className="glass-card border border-primary/20 rounded-lg p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Market Calibration Data
            </h3>
            <p className="text-sm text-muted-foreground">
              <strong className="text-primary">Strategic Baseline:</strong>
              The following budget structure is derived from verified UAE market data for Year 1. It assumes a focus on authority acquisition and disciplined scale.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Addressable Niche Market: ~$400M",
                "Luxury Segment Share: ≥80%",
                "Specialty Retail Contribution: ~58.9%",
                "Standard CPC: AED 6–15",
                "High-Intent CPC: AED 20–40",
                "Influencer Seeding Rates: AED 500–50,000+",
                "PR Retainer Range: AED 10k–60k",
                "Pop-Up Operational Cost: ~AED 3k/day",
                "Paid Amplification Load: 15–20%",
                "Target Sampling Conversion: ≥35%"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border-l-2 border-primary p-4 rounded-r mt-4">
              <p className="text-xs text-foreground italic">
                <strong className="block mb-1">Financial Discipline:</strong>
                "We operate on verified data, not assumptions. Where data is pending, we declare it."
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* Header */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Fixed Allocation</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">Foundational Costs</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Non-negotiable investments required to establish authority and trust before aggressive media spend.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 pdf-section">
        
        {/* Creative Development Bank */}
        <AnimatedSection delay={0.1}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Camera className="w-4 h-4 text-primary" />
                Visual Asset Bank
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Required Deliverables</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "High-fidelity product photography",
                      "Ingredient narrative visuals",
                      "Social-first video assets (Reels/TikTok)",
                      "Influencer seeding kits",
                      "Editorial-style campaign imagery",
                      "Ramadan-specific content",
                      "Website visual hierarchy",
                      "Retargeting creative variations",
                      "Sampling funnel assets",
                      "Product performance videos"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <ArrowRight className="w-3 h-3 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface border border-border rounded p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-foreground">Estimated Allocation</span>
                    <span className="text-sm font-bold text-primary">AED 90,000</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    High-quality assets reduce CPA by increasing ad relevance and trust.
                  </p>
                </div>

                <div className="bg-destructive/5 border border-destructive/10 rounded p-3 mt-auto">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 text-destructive shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-foreground">
                      Underspending on creative leads to faster ad fatigue and higher acquisition costs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Public Relations Retainer */}
        <AnimatedSection delay={0.2}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Megaphone className="w-4 h-4 text-primary" />
                Authority Engineering (PR)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Monthly Retainer Tiers</div>
                  <div className="space-y-2">
                    {[
                      { label: "Entry Level", range: "AED 10k–15k" },
                      { label: "Standard Luxury", range: "AED 15k–25k" },
                      { label: "Premium / Prestige", range: "AED 25k–60k" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-1.5 last:border-0">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.range}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Annual Projection</div>
                  <div className="space-y-2">
                    {[
                      { label: "Entry", range: "AED 120k–180k" },
                      { label: "Standard", range: "AED 180k–300k" },
                      { label: "Premium", range: "AED 300k–720k" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-1.5 last:border-0">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.range}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Strategic Value</div>
                  <p className="text-[10px] text-muted-foreground">
                    PR validates the price point. Editorial coverage serves as a critical trust signal for cold traffic.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 pdf-section">
        
        {/* Website and Digital Infrastructure */}
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
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Core Requirements</div>
                  <ul className="space-y-1.5">
                    {[
                      "Bespoke luxury e-commerce build",
                      "Bilingual (English/Arabic) localization",
                      "Advanced analytics & pixel integration",
                      "Conversion API (CAPI) setup",
                      "Secure payment gateway (Stripe/Checkout.com)",
                      "BNPL integration (Tabby/Tamara)",
                      "COD logistics workflow",
                      "Dedicated sampling landing pages",
                      "Dynamic retargeting feed",
                      "CRM database integration"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded p-3 mt-auto">
                  <div className="flex items-start gap-2">
                    <Shield className="w-3 h-3 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-foreground italic">
                      "Exact costing requires technical scoping. This is a capital expenditure, not an expense."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* CRM Infrastructure Setup */}
        <AnimatedSection delay={0.4}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Users className="w-4 h-4 text-primary" />
                Retention Architecture (CRM)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">System Capabilities</div>
                  <ul className="space-y-1.5">
                    {[
                      "Automated welcome flows",
                      "Post-sampling conversion sequences",
                      "Product education series",
                      "High-value customer segmentation",
                      "Ramadan & seasonal reactivation",
                      "Ad audience synchronization",
                      "Lifetime Value (LTV) reporting"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Mail className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded p-3 mt-auto">
                  <div className="flex items-start gap-2">
                    <Database className="w-3 h-3 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-foreground italic">
                      "SaaS licensing fees are variable. Implementation is a fixed cost."
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded p-3">
                  <p className="text-[10px] text-muted-foreground">
                    <strong>ROI Driver:</strong> Email marketing creates zero-cost revenue events, offsetting paid acquisition costs over time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* Header */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Variable Allocation</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">Growth & Scale Costs</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              These investments scale directly with revenue objectives. They are the engine of growth.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 pdf-section">
        
        {/* Paid Digital Media */}
        <AnimatedSection delay={0.1}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Layout className="w-4 h-4 text-primary" />
                Performance Media
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Unit Economics</div>
                  <div className="space-y-1.5">
                    {[
                      { label: "Standard CPC", value: "AED 6–15" },
                      { label: "High-Intent CPC", value: "AED 20–40" },
                      { label: "Retargeting CPM", value: "AED 5–15" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-1.5 last:border-0">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Channel Mix</div>
                  <ul className="space-y-1.5">
                    {[
                      "Brand Awareness (Top Funnel)",
                      "Traffic Acquisition (Mid Funnel)",
                      "Sampling Conversion (Mid Funnel)",
                      "Search Intent Capture (Bottom Funnel)",
                      "Dynamic Retargeting (Bottom Funnel)",
                      "Seasonal Surge (Ramadan)",
                      "Post-Influencer Amplification"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded p-3 mt-auto">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-foreground">Initial Budget Cap</span>
                    <span className="text-sm font-bold text-primary">AED 450,000</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    Sufficient for Year 1 market entry and testing. Scale is contingent on performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Influencer Campaigns */}
        <AnimatedSection delay={0.2}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Users className="w-4 h-4 text-primary" />
                Influencer Seeding
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Strategic Goal</div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Leverage "borrowed trust" to validate the brand before scaling cold traffic ads.
                  </p>
                  <div className="bg-surface border border-border rounded p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-foreground">Allocation</span>
                      <span className="text-sm font-bold text-primary">~20% of Media</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                  <p className="text-[10px] text-muted-foreground">
                    <strong>Note:</strong> We prioritize engagement rate over follower count.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Sampling Program */}
        <AnimatedSection delay={0.3}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Gift className="w-4 h-4 text-primary" />
                Discovery Program (Sampling)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">The "Discovery Set"</div>
                  <p className="text-xs text-muted-foreground mb-3">
                    A paid or subsidized sample set that lowers the barrier to entry for new customers.
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "Low entry price point",
                      "Full brand experience unboxing",
                      "Rebate code for full bottle",
                      "Email capture mechanism",
                      "High-intent audience signal"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded p-3 mt-auto">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-foreground">Target CPA</span>
                    <span className="text-sm font-bold text-primary">Break-even</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    The goal is to acquire a customer at net-zero cost, then profit on the full bottle upgrade.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 9.3 Header */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Your Choices</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">9.3 Budget Choices</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Choose how much you want to invest.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pdf-section">
        
        {/* Scenario 2 */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/30" />
            <CardHeader className="pb-4 border-b border-border/50">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="border-primary/30 text-primary">Recommended</Badge>
                <Scale className="w-5 h-5 text-muted-foreground" />
              </div>
              <CardTitle className="font-display text-xl text-foreground">
                Option 2: Balanced Growth
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Best for a premium brand. Good growth, less risk.
              </p>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Cost Breakdown</div>
                  <div className="space-y-2">
                    {[
                      { label: "Photos & Videos", value: "AED 90,000" },
                      { label: "PR & Magazines", value: "~AED 180,000/yr" },
                      { label: "Online Ads", value: "AED 450,000" },
                      { label: "Influencers (Medium)", value: "~AED 120,000" },
                      { label: "Pop-up", value: "~AED 40k–50k" },
                      { label: "Ramadan Ads", value: "Moderate" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-1.5 last:border-0">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface border border-border rounded p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-foreground">Estimated Total</span>
                    <span className="text-sm font-bold text-primary">AED 880k–940k</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground italic">
                    (Does not include exact website & CRM software costs yet)
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Main Focus</div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {[
                      "Growing sales and trust",
                      "Being seen in real life",
                      "Using the right influencers"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Target className="w-3 h-3 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Scenario 3 */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <CardHeader className="pb-4 border-b border-border/50">
              <div className="flex justify-between items-start mb-2">
                <Badge className="bg-primary text-primary-foreground">High Visibility</Badge>
                <Crown className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="font-display text-xl text-foreground">
                Option 3: Go Big
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Fastest growth. You will be seen everywhere.
              </p>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Cost Breakdown</div>
                  <div className="space-y-2">
                    {[
                      { label: "Photos & Videos", value: "AED 90,000" },
                      { label: "Top PR & Magazines", value: "~AED 300k–420k/yr" },
                      { label: "Online Ads", value: "AED 450,000" },
                      { label: "Influencers (Famous)", value: "~AED 275,000" },
                      { label: "Big Pop-up Shop", value: "~AED 90,000" },
                      { label: "Ads in Malls (Optional)", value: "~AED 180k/mo" },
                      { label: "Ramadan Ads", value: "Significant" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-1.5 last:border-0">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface border border-border rounded p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-foreground">Estimated Total</span>
                    <span className="text-sm font-bold text-primary">AED 1.2M–1.5M+</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground italic">
                    (Depends on how long we run mall ads)
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Main Focus</div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {[
                      "Everyone knows the brand",
                      "People recognize us quickly",
                      "Big presence in real life"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Gem className="w-3 h-3 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-destructive/5 border border-destructive/10 rounded p-3 mt-auto">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 text-destructive shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-foreground">
                      High fixed costs mean we need to watch performance closely.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 9.5 Header */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Making Money</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">9.5 How We Make Money</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              How we turn ad money into sales. It depends on 3 things: Visitors, Buyers, and Order Size.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 pdf-section">
        
        {/* 9.5.1 The Revenue Equation */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                9.5.1 The Money Formula
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6">
                <div className="bg-surface border border-border rounded p-4 text-center">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">The Formula</div>
                  <div className="text-xl md:text-2xl font-display font-bold text-foreground">
                    Revenue = <span className="text-primary">Visitors</span> × <span className="text-primary">Buyers</span> × <span className="text-primary">Order Size</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">The Main Parts</div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center justify-between text-xs bg-surface border border-border/50 rounded p-2">
                      <span className="text-muted-foreground">Where Visitors Come From</span>
                      <span className="font-medium text-foreground">Ads (60-70%), Search (15%), Influencers (15%)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs bg-surface border border-border/50 rounded p-2">
                      <span className="text-muted-foreground">How Many Buy</span>
                      <span className="font-medium text-foreground">1.5% (Safe) – 2.5% (Goal)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs bg-surface border border-border/50 rounded p-2">
                      <span className="text-muted-foreground">Average Order Size</span>
                      <span className="font-medium text-foreground">AED 650 – AED 850</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                  <p className="text-[10px] text-muted-foreground">
                    We need to test these to know when we start making a profit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 9.5.2 Capital Protection Logic */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Activity className="w-4 h-4 text-primary" />
                9.5.2 When to Stop Spending
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                 <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Stop If...</div>
                  <ul className="space-y-1.5">
                    {[
                      "Click cost > AED 25 (and no sales)",
                      "Change ads if no one clicks",
                      "Pause influencers if they don't sell",
                      "Stop sampling if people don't buy"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <AlertTriangle className="w-3 h-3 text-destructive" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface border border-border rounded p-3 mt-auto">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-foreground">Profit Goal</span>
                    <span className="text-sm font-bold text-primary">Months 6-9</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    We save money and test before spending big.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      <Separator className="my-12 bg-border/50" />

      {/* 9.6 Header */}
      <AnimatedSection className="mb-8 pdf-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Profit Plan</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">9.6 When We Make Profit</h3>
            </div>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              How long it takes to make money back.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 pdf-section">
        
        {/* 9.6.1 Structural Break-Even Formula */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Calculator className="w-4 h-4 text-primary" />
                9.6.1 The Profit Formula
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6">
                <div className="bg-surface border border-border rounded p-4">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">The Math</div>
                  <div className="space-y-2 font-mono text-xs md:text-sm">
                    <div className="flex justify-between">
                      <span>Profit</span>
                      <span className="text-primary">= Marketing Cost</span>
                    </div>
                    <div className="h-px bg-border/50 my-2" />
                    <div className="flex justify-between">
                      <span>Units to Sell</span>
                      <span className="text-foreground">= Total Cost ÷ Profit Per Bottle</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">What We Need to Know</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Price of Bottle",
                      "Cost to Make",
                      "Delivery Cost",
                      "Card Fees (2–9%)",
                      "Return Rate",
                      "Unpaid Orders (15–25%)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-destructive/5 border border-destructive/10 rounded p-3 mt-auto">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 text-destructive shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-foreground">
                      We can't know exact profit until we know the product costs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 9.6.2 How Long It Takes */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <CalendarClock className="w-4 h-4 text-primary" />
                9.6.2 How Long It Takes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6">
                <div className="relative border-l border-border/50 ml-3 space-y-8 py-2">
                  {[
                    { title: "Phase 1: Spending (Months 1-3)", desc: "Spending money to learn what works." },
                    { title: "Phase 2: Improving (Months 4-6)", desc: "Fixing mistakes, better ads." },
                    { title: "Phase 3: Breaking Even (Months 6-9)", desc: "Sales pay for the ads." },
                    { title: "Phase 4: Making Profit (Month 9+)", desc: "Making more than we spend." }
                  ].map((item, i) => (
                    <div key={i} className="relative pl-6">
                      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-surface border border-primary" />
                      <div className="text-sm font-medium text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-foreground">
                      This is a safe estimate. If we grow fast, we make money sooner.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 9.6.3 Risks for Each Option */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Layers className="w-4 h-4 text-primary" />
                9.6.3 Risks for Each Option
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4">
                {[
                  {
                    title: "Option 1: Safe",
                    desc: "Less risk. Takes longer to be known.",
                    risk: "Low"
                  },
                  {
                    title: "Option 2: Balanced",
                    desc: "Medium risk. Good balance.",
                    risk: "Medium"
                  },
                  {
                    title: "Option 3: High Visibility",
                    desc: "High risk. Needs strong sales to work.",
                    risk: "High"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-surface border border-border rounded p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-foreground">{item.title}</span>
                      <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-primary/20 text-primary">
                        {item.risk} Risk
                      </Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 9.6.4 Time to Profit */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-background border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                9.6.4 Time to Profit
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6">
                <div className="flex items-center gap-3 bg-surface border border-border rounded p-3">
                  <div className="text-2xl font-bold text-primary">90+</div>
                  <div className="text-xs text-muted-foreground">
                    Days needed to start making money back.
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Structural Phases</div>
                  <div className="space-y-2">
                    {[
                      { phase: "Days 1–90", label: "Learning (High Volatility)" },
                      { phase: "Months 4–6", label: "Stabilization Phase" },
                      { phase: "Months 7–12", label: "Efficiency Compression" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-1.5 last:border-0">
                        <span className="font-medium text-foreground">{item.phase}</span>
                        <span className="text-muted-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-foreground">
                      Premature break-even pressure before CAC stabilization distorts scaling decisions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>
    </div>
  </div>
);

export default MarketingBudget;
