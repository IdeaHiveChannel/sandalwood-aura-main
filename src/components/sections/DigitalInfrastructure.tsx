import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  Monitor, 
  Smartphone, 
  Globe, 
  CreditCard, 
  BarChart3, 
  Mail, 
  ShoppingCart, 
  Search, 
  Layout, 
  Zap,
  MousePointerClick,
  RefreshCcw,
  Database,
  Lock,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const DigitalInfrastructure = () => (
  <section className="py-24 md:py-32 luxury-container">
    <div className="mb-12">
      <Badge variant="luxury" className="mb-4">Section 4</Badge>
      <SectionTitle
        title="Digital Infrastructure (Step 2)"
        subtitle="This step builds the digital environment required before scaling paid acquisition."
      />
    </div>

    <AnimatedSection className="mb-12">
      <Card className="glass-card">
        <CardContent className="pt-6">
          <p className="font-body text-muted-foreground leading-relaxed">
            In a market where the niche segment is valued at approximately USD 400 million, online sales are growing at 5.88 percent annually, and cost per click ranges from AED 6–15 (medium competition) and AED 20–40 (high intent) — digital infrastructure must be prepared to convert high-cost traffic efficiently and protect brand authority.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* 4.1 Website Structure */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">4.1</span> Website Structure and Experience
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Layout className="w-5 h-5 text-primary" />
                Structural Layout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Clear homepage with brand story",
                  "Dedicated product pages",
                  "Discovery kit page with sampling emphasis",
                  "Layering education section",
                  "Cultural alignment content",
                  "Clear return and trust policies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Experience Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Clean white space & high-res photography",
                  "Consistent typography & color palette",
                  "No discount banners or clutter",
                  "Flawless mobile experience",
                  "Optimized page load speed"
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

        <div className="lg:col-span-1">
          <Card className="h-full glass-card flex flex-col">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Bilingual Execution
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4">
                Arabic implementation must be professionally translated, follow right-to-left formatting correctly, and avoid automated translation.
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <p className="text-xs text-muted-foreground italic">
                  "Inconsistent Arabic execution signals superficial localization and reduces trust among Emirati Traditionalists."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>

    {/* 4.2 Conversion Funnel */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">4.2</span> Conversion Funnel Design
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary" />
              Full Bottle Funnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-xs font-semibold text-foreground mb-2">Key Elements:</div>
                <div className="flex flex-wrap gap-2">
                  {["Performance credibility", "Unisex positioning", "Layering explanation", "BNPL visibility"].map((tag, i) => (
                    <Badge key={i} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                The checkout process must feel premium, not transactional. Pricing must be clearly positioned within premium tier context.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Discovery Kit Funnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-xs font-semibold text-foreground mb-2">Benchmarks:</div>
                <div className="flex gap-4">
                  <div className="bg-secondary/20 px-3 py-2 rounded text-xs">
                    <span className="font-bold text-primary">35%</span> Digital-to-Physical
                  </div>
                  <div className="bg-secondary/20 px-3 py-2 rounded text-xs">
                    <span className="font-bold text-primary">13%</span> Immediate Purchase
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Sampling must be framed as a controlled introduction to performance and a structured scent ritual experience.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base text-muted-foreground uppercase tracking-wider">Funnel Hierarchy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 border border-border/50 rounded bg-surface/50">
                <div className="font-semibold text-foreground mb-1">Awareness</div>
                <div className="text-muted-foreground text-xs">Sampling emphasis</div>
              </div>
              <div className="p-3 border border-border/50 rounded bg-surface/50">
                <div className="font-semibold text-foreground mb-1">High-Intent</div>
                <div className="text-muted-foreground text-xs">Direct purchase path</div>
              </div>
              <div className="p-3 border border-border/50 rounded bg-surface/50">
                <div className="font-semibold text-foreground mb-1">Retargeting</div>
                <div className="text-muted-foreground text-xs">Authority reinforcement</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* 4.3 Payment */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">4.3</span> Payment Integration
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Digital & Cards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Standard card processing and digital wallet support (Apple Pay/Google Pay).</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <RefreshCcw className="w-5 h-5 text-primary" />
              BNPL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Supports Gen-Z buyers and higher order values.</p>
            <Badge variant="outline" className="text-[10px] border-primary/20 text-muted-foreground">Fees: 2-9%</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <MousePointerClick className="w-5 h-5 text-primary" />
              COD
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Premium segment usage: 15-25%. Increases reach but requires monitoring.</p>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* 4.4 Analytics */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">4.4</span> Analytics & Tracking
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Tracking Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Platform pixels (Meta, Google, TikTok)
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Conversion & Add-to-cart events
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Sampling tracking
              </li>
            </ul>
            <p className="text-xs text-muted-foreground italic border-l-2 border-primary pl-3">
              Incorrect event firing distorts optimization and inflates acquisition cost.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" />
              Audience Pools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "All website visitors",
                "Product page visitors",
                "Cart viewers",
                "Sampling purchasers",
                "Video viewers (>50%)",
                "Ramadan seasonal audiences"
              ].map((tag, i) => (
                <Badge key={i} variant="secondary" className="font-normal text-xs">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* 4.5 CRM */}
    <AnimatedSection>
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">4.5</span> CRM Setup
      </h3>
      
      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Mail className="w-4 h-4 text-primary" />
                Email Capture
              </div>
              <p className="text-xs text-muted-foreground">
                Must occur through sampling, checkout, and exit-intent. Messaging must reflect prestige tone.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <RefreshCcw className="w-4 h-4 text-primary" />
                Post-Sampling
              </div>
              <p className="text-xs text-muted-foreground">
                Structured follow-up required. Automation must include performance reinforcement and layering education.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Lock className="w-4 h-4 text-primary" />
                Ramadan Reactivation
              </div>
              <p className="text-xs text-muted-foreground">
                Pre-built flows for awareness, gifting, and limited seasonal emphasis.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  </section>
);

export default DigitalInfrastructure;
