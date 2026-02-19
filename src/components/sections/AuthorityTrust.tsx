import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  Megaphone, 
  Newspaper, 
  Users, 
  Star, 
  TrendingUp, 
  Share2, 
  MessageSquare, 
  CheckCircle2, 
  AlertTriangle,
  Award,
  BarChart3
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const AuthorityTrust = () => (
  <section className="py-24 md:py-32 luxury-container">
    <div className="mb-12">
      <Badge variant="luxury" className="mb-4">Authority</Badge>
      <SectionTitle
        title="Brand Authority & Trust"
        subtitle="Objective: Construct Pre-Scale Credibility & Trust."
      />
    </div>

    <AnimatedSection className="mb-12">
      <Card className="glass-card">
        <CardContent className="pt-6">
          <p className="font-body text-muted-foreground leading-relaxed">
            <strong className="text-primary block mb-2">Trust First</strong>
            In luxury, trust is currency. Consumers don't just buy products; they buy status and validation. We must establish authority before spending a single dirham on performance marketing.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* PR Strategy */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Media & PR
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { tier: "Entry Tier", price: "AED 10k–15k/mo", desc: "Limited scope. Minimal impact.", recommended: false },
          { tier: "Standard Luxury", price: "AED 15k–25k/mo", desc: "Baseline for credible entry.", recommended: true },
          { tier: "Premium Tier", price: "AED 25k–60k/mo", desc: "High-velocity authority.", recommended: false },
        ].map((t, i) => (
          <AnimatedSection key={t.tier} delay={i * 0.1}>
            <Card className={`h-full flex flex-col relative transition-all duration-300 ${t.recommended ? 'glass-card border-gold/50 shadow-gold/20' : 'glass-card border-white/10'}`}>
              {t.recommended && (
                <div className="absolute top-0 right-0 bg-gold text-primary-foreground text-[10px] uppercase tracking-wider px-2 py-1 rounded-bl font-bold">
                  Target
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="font-display text-lg text-foreground">{t.tier}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="font-display text-2xl font-semibold text-primary mb-2">{t.price}</div>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-primary" />
              Narrative Pillars
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-sm font-medium text-foreground mb-3">Core Themes</div>
              <ul className="space-y-2">
                {[
                  "Category Definition: 'The New Standard in Niche Sandalwood'",
                  "Product Truth: Ingredient purity & proven performance",
                  "Founder Story: Visionary leadership & cultural alignment"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-medium text-foreground mb-3">Narrative Risks:</div>
              <ul className="space-y-2">
                {[
                  "Discount-driven messaging",
                  "Fad-based trends",
                  "Short-term promotional claims"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Conversion Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              PR is not vanity; it is conversion fuel. It validates price points and reduces friction in the customer journey.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-foreground mb-1">Commercial Value</div>
                  <p className="text-xs text-muted-foreground">
                    In high-intent auctions (AED 20–40 CPC), editorial validation acts as a trust signal that materially improves conversion rates.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* Launch Editorial */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Editorial Launch Sequencing
      </h3>
      
      <Card className="glass-card overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-6 md:p-8 bg-surface md:col-span-2">
            <h4 className="font-display text-xl font-semibold text-foreground mb-4">The Launch Burst</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Launch positioning must center on the founder's vision, ingredient sourcing, and cultural relevance. The goal is correct positioning, not just volume.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-secondary/20 p-4 rounded border border-secondary/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Budget Allocation</div>
                <div className="font-semibold text-foreground">AED 20k – 100k</div>
              </div>
              <div className="bg-secondary/20 p-4 rounded border border-secondary/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Primary Objective</div>
                <div className="font-semibold text-foreground">Authority Classification</div>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8 bg-primary/5 border-l border-border/50 flex flex-col justify-center">
            <h4 className="font-display text-lg font-semibold text-primary mb-3">Timing Synchronization</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                Align with digital traffic activation
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                Coordinate with sampling availability
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                Precede aggressive paid scaling
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </AnimatedSection>

    {/* Influencer Seeding */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Influencer Partnerships
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <Card className="h-full glass-card">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Market Rates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { type: "Nano", range: "AED 500 – 2K" },
                { type: "Micro", range: "AED 2K – 5K" },
                { type: "Mid-tier", range: "AED 5K – 20K" },
                { type: "Macro", range: "AED 15K – 50K+" }
              ].map((rate, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-border/50 last:border-0 pb-2 last:pb-0">
                  <span className="text-muted-foreground">{rate.type}</span>
                  <span className="font-mono text-primary font-medium">{rate.range}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="font-display text-lg text-foreground">Allocation Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Early seeding prioritizes Nano and Micro tiers for their high engagement and cultural authenticity.
              </p>
              <div className="bg-destructive/10 p-3 rounded border border-destructive/20">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  <p className="text-xs text-destructive-foreground">Macro influencers are reserved for specific visibility campaigns, not initial seeding.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="font-display text-lg text-foreground">Performance Benchmarks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Target ROI</div>
                <div className="font-display text-2xl text-primary">6.5x</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">High-Performance</div>
                <div className="font-display text-2xl text-gradient-gold">8.4x</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-surface/50 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-full shrink-0">
              <Share2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-base font-semibold text-foreground mb-2">Content Amplification</h4>
              <p className="text-sm text-muted-foreground mb-3">
                High-performing influencer assets are not one-offs. They must be amplified via paid channels (allocating 15–20% of spend) to extend reach and drive efficiency.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* 5.4 Sampling Integration */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Sampling as Strategy
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground">Strategic Role</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Sampling is a risk-mitigation tool for the consumer. It validates longevity and builds the first-party data asset.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-3 rounded text-center border border-primary/10">
                <div className="text-2xl font-bold text-primary mb-1">35%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Conversion to Full Bottle</div>
              </div>
              <div className="bg-primary/5 p-3 rounded text-center border border-primary/10">
                <div className="text-2xl font-bold text-primary mb-1">13%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Immediate Purchase</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground">Integration Points</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-xs font-semibold text-foreground mb-2">Required Across:</div>
              <div className="flex flex-wrap gap-2">
                {["Influencer Campaigns", "Website Discovery", "Paid Media", "CRM Flows"].map((tag, i) => (
                  <Badge key={i} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                ))}
              </div>
            </div>
            <Separator className="bg-border/50" />
            <div>
              <div className="text-xs font-semibold text-foreground mb-2">KPIs:</div>
              <ul className="space-y-1">
                {["7-Day Conversion", "30-Day LTV", "Assisted Conversions"].map((item, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  </section>
);

export default AuthorityTrust;