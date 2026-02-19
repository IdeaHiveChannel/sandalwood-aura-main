import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Globe, 
  Languages, 
  ShieldCheck, 
  Monitor, 
  Target, 
  X, 
  Package, 
  Sparkles, 
  Gift, 
  Mic2, 
  Palette, 
  Layers,
  PenTool,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const BrandFoundation = () => (
  <section className="py-24 md:py-32 luxury-container">
    <div className="mb-12">
      <Badge variant="luxury" className="mb-4">Foundation</Badge>
      <SectionTitle
        title="Brand Strategy"
        subtitle="In a USD 400 million niche segment, unclear brand foundations increase acquisition costs and reduce authority perception."
      />
    </div>

    <AnimatedSection className="mb-12">
      <Card className="glass-card">
        <CardContent className="pt-6">
          <p className="font-body text-muted-foreground leading-relaxed">
            <strong className="text-primary block mb-2">Core Strategy</strong>
            Authority isn't just ads—it's engineering. We build trust through precision, cultural alignment, and flawless execution. Marketing amplifies this foundation; it doesn't replace it.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* Naming Protocol */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Naming & Identity
      </h3>
      <p className="font-body text-muted-foreground mb-8 max-w-4xl">
        Every name must pass four critical filters to ensure safety, resonance, and ownership in the UAE market.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: Globe,
            title: "Cultural Screening",
            points: [
              "Zero negative connotation",
              "Phonetic safety (Gulf dialects)",
              "Religious compliance",
              "Regional value alignment"
            ],
            note: "Risk: Cultural misalignment causes permanent brand damage."
          },
          {
            icon: Languages,
            title: "Linguistic Compatibility",
            points: [
              "Clean Arabic pronunciation",
              "Elegant script translation",
              "Bilingual visual balance",
              "No awkward transliteration"
            ],
            note: "Requirement: Bilingual mastery is a non-negotiable luxury signal."
          },
          {
            icon: ShieldCheck,
            title: "Trademark Viability",
            points: [
              "UAE Class 3 clearance",
              "Distinct from niche players",
              "Global conflict check"
            ],
            note: "Asset: IP security must precede any public visibility."
          },
          {
            icon: Monitor,
            title: "Digital Discoverability",
            points: [
              "Exact-match .com/.ae",
              "Unified social handles",
              "Clean SERP footprint"
            ],
            note: "Impact: Discoverability lowers long-term acquisition costs."
          },
        ].map((filter, i) => (
          <AnimatedSection key={filter.title} delay={i * 0.1}>
            <Card className="h-full glass-card hover:border-primary/30 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <filter.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{filter.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {filter.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="bg-secondary/30 p-3 rounded text-xs text-muted-foreground italic border border-secondary">
                  {filter.note}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>

    {/* Positioning Strategy */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Positioning Strategy
      </h3>
      
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="font-display text-xl text-foreground flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Strategic Lane Definition
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <p className="text-sm text-muted-foreground mb-6">Brand positioning defines the strategic lane within the USD 400 million niche segment. It must be clear, non-emotional, and structurally aligned with UAE market realities.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="font-display text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> The Brand MUST Be:
                </h4>
                <div className="text-2xl font-display text-foreground mb-2">Premium Niche Sandalwood House</div>
                <p className="text-sm text-muted-foreground">Aligned with 8 percent niche growth rate and 80 percent luxury revenue concentration.</p>
              </div>
              
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <h4 className="font-display text-lg font-semibold text-destructive mb-4 flex items-center gap-2">
                  <X className="w-4 h-4" /> The Brand is NOT:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Mass fragrance",
                    "Designer alternative",
                    "Discount brand",
                    "Influencer-led trend label"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Separator className="bg-border/50" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" /> Performance-First Alignment
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                UAE fragrance buyers evaluate longevity, projection and sillage, heat resilience, and layering compatibility. Performance must be central to positioning. If performance is secondary in communication, conversion resistance increases, especially when competing for AED 20–40 high-intent keywords.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" /> Unisex Positioning
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Validated data shows 66 percent of consumers prefer unisex or gender-neutral fragrances. Positioning must avoid rigid gender labeling to maximize market addressability.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* Portfolio Architecture */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Portfolio Architecture
      </h3>
      <p className="font-body text-muted-foreground mb-8 max-w-4xl">Brand architecture prevents dilution and internal competition. It defines how products are structured under one identity.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            icon: Package,
            title: "Hero SKU Role",
            badge: "Revenue Driver",
            points: ["Represent core identity.", "Anchor performance perception.", "Generate majority of revenue.", "Signature scent reference."],
            note: "Must not compete with internal variations.",
          },
          {
            icon: Sparkles,
            title: "Prestige SKU Role",
            badge: "Brand Halo",
            points: ["Elevate craftsmanship narrative.", "Strengthen brand halo.", "Reinforce luxury ambition."],
            note: "Enhances authority without confusing the hero offer.",
          },
          {
            icon: Gift,
            title: "Discovery Kit Role",
            badge: "Acquisition",
            points: ["Entry gateway.", "Sampling conversion accelerator.", "Risk reduction tool."],
            note: "Strategic infrastructure, not a promotional product. 35% digital-to-physical conversion target.",
          },
        ].map((sku, i) => (
          <AnimatedSection key={sku.title} delay={i * 0.1}>
            <Card className="h-full glass-card flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <sku.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground text-[10px] tracking-wider uppercase">{sku.badge}</Badge>
                </div>
                <CardTitle className="font-display text-lg text-foreground">{sku.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {sku.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-muted-foreground italic border-t border-border/50 pt-4">
                  {sku.note}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <Card className="bg-surface/50 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-full shrink-0">
              <AlertCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-base font-semibold text-foreground mb-2">Year 1 SKU Discipline</h4>
              <p className="text-sm text-muted-foreground mb-3">Too many products dilute messaging, increase marketing complexity, increase paid acquisition cost, and lock cash in inventory.</p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="border-primary/30 text-muted-foreground">Limit SKU count</Badge>
                <Badge variant="outline" className="border-primary/30 text-muted-foreground">No excessive flankers</Badge>
                <Badge variant="outline" className="border-primary/30 text-muted-foreground">No trend-based releases</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* Voice & Messaging */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Voice & Messaging
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Mic2 className="w-5 h-5 text-primary" />
              Communication Principles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-sm font-medium text-foreground mb-3">Messaging MUST Be:</div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground bg-primary/5 p-3 rounded-md border border-primary/10">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Controlled, confident, minimal, and evidence-based.
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-foreground mb-3">Messaging Must AVOID:</div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground bg-destructive/5 p-3 rounded-md border border-destructive/10">
                <X className="w-4 h-4 text-destructive shrink-0" />
                Overstatement, trend slang, discount language, emotional exaggeration.
              </div>
            </div>
            <p className="text-xs text-primary font-medium italic text-center">
              "Luxury authority in the UAE is expressed through restraint and confidence, not volume."
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Messaging Frameworks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-sm font-medium text-foreground mb-3">Performance Pillars</div>
              <div className="grid grid-cols-2 gap-2">
                {["Longevity validation", "Projection strength", "Layering compatibility", "Heat resilience"].map((item, i) => (
                  <Badge key={i} variant="secondary" className="justify-center py-1.5 font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator className="bg-border/50" />
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-foreground">Layering Education: </span>
                <span className="text-sm text-muted-foreground">Position fragrance as ritual, reinforce repeat purchase logic, support multiple daily use occasions.</span>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Ramadan Adaptation: </span>
                <span className="text-sm text-muted-foreground">Emphasize gifting, reflect cultural tone, avoid aggressive selling, highlight prestige presentation.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* Visual Identity */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Visual Identity
      </h3>
      <p className="font-body text-muted-foreground mb-8 max-w-4xl">Visual identity must reflect premium niche positioning. In Dubai, where luxury accounts for over 80 percent of fragrance revenue, visual misalignment reduces authority.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: Sparkles,
            title: "Logo System",
            points: ["Bilingual function", "Scalable clarity", "Minimal structure", "No decorative excess"],
          },
          {
            icon: PenTool,
            title: "Typography",
            points: ["Modern luxury serif", "Clean sans-serif info", "Bilingual balance", "No ornamental overload"],
          },
          {
            icon: Palette,
            title: "Color System",
            points: ["Depth & restraint", "Prestige signaling", "Cultural compatibility", "No neon/pastels"],
          },
          {
            icon: Layers,
            title: "Visual Hierarchy",
            points: ["White space", "Structured layout", "Balanced margins", "Clean composition"],
          },
        ].map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <Card className="h-full glass-card">
              <CardHeader className="pb-3">
                <div className="mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-base text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-surface/50 border-primary/10">
          <CardContent className="pt-6 flex items-start gap-3">
            <Globe className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-foreground mb-1">Bilingual Execution</div>
              <p className="text-xs text-muted-foreground">Professional Arabic translation required. No machine translation. Inconsistent Arabic signals superficial localization.</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-surface/50 border-primary/10">
          <CardContent className="pt-6 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-foreground mb-1">Consistency Across Touchpoints</div>
              <p className="text-xs text-muted-foreground">From Instagram to unboxing, the visual language must not break. Inconsistency destroys trust.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  </section>
);

export default BrandFoundation;
