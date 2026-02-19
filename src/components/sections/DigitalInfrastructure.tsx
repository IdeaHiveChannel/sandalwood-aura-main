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

const DigitalInfrastructure = () => (
  <section className="py-24 md:py-32 luxury-container">
    <div className="mb-12">
      <Badge variant="luxury" className="mb-4">Infrastructure</Badge>
      <SectionTitle
        title="Digital Ecosystem"
        subtitle="Objective: Deploy High-Performance Acquisition Infrastructure."
      />
    </div>

    <AnimatedSection className="mb-12">
      <Card className="glass-card">
        <CardContent className="pt-6">
          <p className="font-body text-muted-foreground leading-relaxed">
            <strong className="text-primary block mb-2">Efficiency First</strong>
            With high ad costs (AED 6–40 CPC), our site can't just be a catalog. It must be a conversion engine—fast, seamless, and built to turn visitors into buyers while protecting brand prestige.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* UX Architecture */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        UX & Standards
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Layout className="w-5 h-5 text-primary" />
                Conversion Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Narrative-Driven Homepage",
                  "High-Fidelity Product Pages",
                  "Low-Friction Sampling Funnel",
                  "Visual Ingredient Education",
                  "Transparent Logistics/Trust"
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
                Technical Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "4K Visual Quality",
                  "Premium Serif/Sans Typography",
                  "Zero Discount Clutter",
                  "100% Mobile Optimization",
                  "<2s Load Time (LCP)"
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
                Localization Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4">
                Arabic implementation requires professional translation and correct RTL formatting. Automated translation is a trust-killer in this segment.
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 mt-auto">
                <p className="text-xs text-muted-foreground italic">
                  <strong className="block text-primary mb-1">Insight:</strong>
                  "Inconsistent Arabic execution signals superficiality to Emirati Traditionalists."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>

    {/* Conversion Funnel */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Conversion Funnels
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary" />
              Primary Funnel: Full Bottle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-xs font-semibold text-foreground mb-2">Key Drivers:</div>
                <div className="flex flex-wrap gap-2">
                  {["Performance Credibility", "Unisex Positioning", "Layering Guides", "BNPL Options"].map((tag, i) => (
                    <Badge key={i} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Checkout must feel like a concierge service, not a transaction. Pricing is framed within the context of longevity and concentration.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg text-foreground flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Entry Funnel: Discovery Kit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-xs font-semibold text-foreground mb-2">Target Metrics:</div>
                <div className="flex gap-4">
                  <div className="bg-secondary/20 px-3 py-2 rounded text-xs">
                    <span className="font-bold text-primary">35%</span> Up-sell Rate
                  </div>
                  <div className="bg-secondary/20 px-3 py-2 rounded text-xs">
                    <span className="font-bold text-primary">13%</span> Immediate Conversion
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Sampling is framed as a "Ritual Introduction"—a low-risk entry point designed to validate scent performance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base text-muted-foreground uppercase tracking-wider">Funnel Segmentation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 border border-border/50 rounded bg-surface/50">
                <div className="font-semibold text-foreground mb-1">Awareness Layer</div>
                <div className="text-muted-foreground text-xs">Focus: Brand Story & Sampling</div>
              </div>
              <div className="p-3 border border-border/50 rounded bg-surface/50">
                <div className="font-semibold text-foreground mb-1">High-Intent Layer</div>
                <div className="text-muted-foreground text-xs">Focus: Direct Purchase Path</div>
              </div>
              <div className="p-3 border border-border/50 rounded bg-surface/50">
                <div className="font-semibold text-foreground mb-1">Retention Layer</div>
                <div className="text-muted-foreground text-xs">Focus: Authority Reinforcement</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* 4.3 Payment */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">2.3</span> Transaction Infrastructure
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Digital Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Seamless integration of major cards and digital wallets (Apple Pay/Google Pay).</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <RefreshCcw className="w-5 h-5 text-primary" />
              Buy Now, Pay Later
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Critical for Gen-Z acquisition and increasing Average Order Value (AOV).</p>
            <Badge variant="outline" className="text-[10px] border-primary/20 text-muted-foreground">Est. Fees: 2-9%</Badge>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <MousePointerClick className="w-5 h-5 text-primary" />
              Cash on Delivery (COD)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Regional necessity. Anticipate 15-25% volume. Requires strict verification protocols.</p>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* 4.4 Analytics */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">2.4</span> Data & Analytics Layer
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Event Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Full Pixel Suite (Meta, Google, TikTok)
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Deep-Funnel Events (Add-to-Cart, Initiate Checkout)
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Sampling-Specific Conversions
              </li>
            </ul>
            <p className="text-xs text-muted-foreground italic border-l-2 border-primary pl-3">
              Precision in event firing is non-negotiable for algorithmic optimization.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" />
              Audience Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "All Visitors (30/90/180 Days)",
                "Product Viewers",
                "Cart Abandoners",
                "Sample Purchasers",
                "Video Viewers (>50%)",
                "Seasonal (Ramadan) Lists"
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
        CRM & Lifecycle
      </h3>
      
      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Mail className="w-4 h-4 text-primary" />
                Acquisition
              </div>
              <p className="text-xs text-muted-foreground">
                Capture via sampling, checkout, and exit-intent. Tone: Exclusive, not promotional.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <RefreshCcw className="w-4 h-4 text-primary" />
                Nurture
              </div>
              <p className="text-xs text-muted-foreground">
                Automated flows for post-sampling conversion. Focus on education and layering rituals.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Lock className="w-4 h-4 text-primary" />
                Retention
              </div>
              <p className="text-xs text-muted-foreground">
                Specialized flows for Ramadan reactivation, gifting, and limited releases.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  </section>
);

export default DigitalInfrastructure;