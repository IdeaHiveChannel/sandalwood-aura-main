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
  <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
    <div className="mb-12">
      <Badge variant="outline" className="mb-4 border-primary/50 text-primary tracking-widest uppercase">Section 5</Badge>
      <SectionTitle
        title="Authority and Trust Development (Step 3)"
        subtitle="In the UAE premium fragrance environment, authority must be built before scale."
      />
    </div>

    <AnimatedSection className="mb-12">
      <Card className="bg-surface/50 border-primary/10 backdrop-blur-sm">
        <CardContent className="pt-6">
          <p className="font-body text-muted-foreground leading-relaxed">
            This is a market where the niche segment is valued at approximately USD 400 million, luxury fragrances account for more than 80 percent of Dubai fragrance revenue, specialty retail controls 58.9 percent of turnover, and high-intent digital traffic costs AED 20–40 per click.
          </p>
          <Separator className="my-4 bg-primary/10" />
          <p className="font-body text-sm text-primary font-medium">
            In such an environment, traffic without trust becomes expensive traffic. Step 3 ensures that when digital scale begins, the brand is already positioned as credible, not experimental.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* 5.1 PR Strategy */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">5.1</span> Public Relations Strategy
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { tier: "Basic", price: "AED 10k–15k/mo", desc: "Limited media access", recommended: false },
          { tier: "Standard Luxury", price: "AED 15k–25k/mo", desc: "Aligned with credibility expectations", recommended: true },
          { tier: "Premium", price: "AED 25k–60k/mo", desc: "Accelerates authority, high fixed cost", recommended: false },
        ].map((t, i) => (
          <AnimatedSection key={t.tier} delay={i * 0.1}>
            <Card className={`h-full bg-surface flex flex-col relative ${t.recommended ? 'border-primary shadow-lg shadow-primary/5' : 'border-border'}`}>
              {t.recommended && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider px-2 py-1 rounded-bl">
                  Recommended
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
        <Card className="bg-surface border-border">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-primary" />
              PR Objectives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-sm font-medium text-foreground mb-3">Focus On:</div>
              <ul className="space-y-2">
                {[
                  "Category definition (Premium Niche Sandalwood House)",
                  "Ingredient credibility & performance-first messaging",
                  "Cultural alignment & founder positioning"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-medium text-foreground mb-3">Avoid:</div>
              <ul className="space-y-2">
                {[
                  "Discounts or promotional claims",
                  "Trend-based narratives",
                  "Short-term offers"
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

        <Card className="bg-surface border-border">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Impact on Conversion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              PR influences digital conversion confidence, influencer credibility, sampling acceptance, and retail approach discussions.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-foreground mb-1">Commercial Value</div>
                  <p className="text-xs text-muted-foreground">
                    In high-intent AED 20–40 CPC environments, editorial validation can materially improve conversion performance by reducing perceived risk.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* 5.2 Launch Editorial */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">5.2</span> Launch Editorial Strategy
      </h3>
      
      <Card className="bg-surface border-border overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-6 md:p-8 bg-surface md:col-span-2">
            <h4 className="font-display text-xl font-semibold text-foreground mb-4">Launch Burst Model</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Launch positioning must include founder narrative, ingredient sourcing story, cultural context, and performance focus. The objective is not volume of coverage — the objective is correct positioning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-secondary/20 p-4 rounded border border-secondary/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Budget Range</div>
                <div className="font-semibold text-foreground">AED 20,000 – 100,000</div>
              </div>
              <div className="bg-secondary/20 p-4 rounded border border-secondary/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Primary Goal</div>
                <div className="font-semibold text-foreground">Authority Classification</div>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8 bg-primary/5 border-l border-border/50 flex flex-col justify-center">
            <h4 className="font-display text-lg font-semibold text-primary mb-3">Timing Alignment</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                Align with initial digital traffic push
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                Coordinate with sampling availability
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                Authority must precede aggressive paid scaling
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </AnimatedSection>

    {/* 5.3 Influencer Seeding */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">5.3</span> Influencer Seeding
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <Card className="h-full bg-surface border-border">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Rate Environment
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
          <Card className="bg-surface border-border">
            <CardHeader>
              <CardTitle className="font-display text-lg text-foreground">Tier Allocation Logic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Nano and Micro tiers are preferred in early seeding because of higher engagement rates, greater authenticity, and strong cultural relatability.
              </p>
              <div className="bg-destructive/10 p-3 rounded border border-destructive/20">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  <p className="text-xs text-destructive-foreground">Macro influencers typically reserved for structured visibility pushes, not initial seeding.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-surface border-border">
            <CardHeader>
              <CardTitle className="font-display text-lg text-foreground">Return Benchmarks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Average ROI</div>
                <div className="font-display text-2xl text-primary">6.5 to 1</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">High Performance</div>
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
                High-performing influencer content must be approved for paid amplification (15–20% of influencer spend). This extends reach beyond organic followers and increases efficiency.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* 5.4 Sampling Integration */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">5.4</span> Sampling Integration
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-surface border-border">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground">Strategic Role</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Sampling reduces purchase hesitation, validates longevity, and builds the database. In high-intent AED 20–40 keyword environments, sampling reduces risk perception.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-3 rounded text-center border border-primary/10">
                <div className="text-2xl font-bold text-primary mb-1">35%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Digital-to-Physical Conversion</div>
              </div>
              <div className="bg-primary/5 p-3 rounded text-center border border-primary/10">
                <div className="text-2xl font-bold text-primary mb-1">13%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Immediate Purchase</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-surface border-border">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground">Measurement & Channels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-xs font-semibold text-foreground mb-2">Required Integration:</div>
              <div className="flex flex-wrap gap-2">
                {["Influencer campaigns", "Website discovery", "Paid digital ads", "CRM flows"].map((tag, i) => (
                  <Badge key={i} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                ))}
              </div>
            </div>
            <Separator className="bg-border/50" />
            <div>
              <div className="text-xs font-semibold text-foreground mb-2">Success Metrics:</div>
              <ul className="space-y-1">
                {["Immediate purchase (7 days)", "30-day conversion", "Assisted conversions"].map((item, i) => (
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
