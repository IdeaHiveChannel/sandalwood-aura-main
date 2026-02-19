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
  Image,
  CheckCircle2,
  AlertCircle,
  Users,
  Layers,
  PenTool,
  Video
} from "lucide-react";

const BrandFoundation = () => (
  <section className="py-24 md:py-32 luxury-container">
    <div className="mb-12">
      <Badge variant="luxury" className="mb-4">Section 3</Badge>
      <SectionTitle
        title="Brand Foundation (Step 1)"
        subtitle="In a USD 400 million niche segment growing at 8 percent annually, unclear brand foundations increase acquisition costs, reduce authority perception, and amplify risk in high-cost digital environments."
      />
    </div>

    <AnimatedSection className="mb-12">
      <Card className="glass-card">
        <CardContent className="pt-6">
          <p className="font-body text-muted-foreground leading-relaxed">
            This step must be completed before meaningful digital investment. Brand authority in the UAE fragrance market is not created through advertising alone. It is created through clarity, cultural alignment, performance credibility, and disciplined visual execution. Marketing can amplify a strong foundation, but it cannot compensate for structural weakness in identity or positioning.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* 3.1 Brand Name Validation */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">3.1</span> Brand Name Validation
      </h3>
      <p className="font-body text-muted-foreground mb-8 max-w-4xl">Brand naming is not creative decoration. It is a legal, cultural, linguistic, and positioning decision. In the United Arab Emirates, naming must pass four structured filters:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: Globe,
            title: "1. Cultural Screening",
            points: [
              "Have no negative meaning in Arabic.",
              "Avoid phonetic similarity to inappropriate words in Gulf dialects.",
              "Avoid religious misuse.",
              "Avoid cultural insensitivity.",
            ],
            note: "Fragrance is culturally embedded in the UAE. Misalignment can damage credibility immediately and permanently within tightly networked consumer communities.",
          },
          {
            icon: Languages,
            title: "2. Arabic Language Compatibility",
            points: [
              "Be pronounceable in Arabic.",
              "Translate cleanly into Arabic script.",
              "Maintain visual balance in bilingual layout.",
              "Avoid awkward transliteration.",
            ],
            note: "In the UAE luxury market, bilingual presentation is expected. A name that works only in English reduces market alignment and may signal foreign detachment from local culture.",
          },
          {
            icon: ShieldCheck,
            title: "3. Trademark Availability",
            points: [
              "Availability within fragrance classification in the UAE.",
              "No conflict with existing niche fragrance houses.",
              "No similarity to international luxury brands that may cause confusion.",
            ],
            note: "Rebranding after launch is costly and damages authority. Trademark validation must precede creative rollout.",
          },
          {
            icon: Monitor,
            title: "4. Digital Availability",
            points: [
              "Domain availability.",
              "Social media handle availability.",
              "Clean search engine results (no unrelated associations).",
            ],
            note: "Digital discoverability affects paid performance efficiency, particularly in AED 6–40 CPC environments where branded search and retargeting become increasingly important over time.",
          },
        ].map((filter, i) => (
          <AnimatedSection key={filter.title} delay={i * 0.1}>
            <Card className="h-full glass-card hover:border-primary/30 transition-colors duration-300">
              <CardHeader className="pb-4 border-b border-border/50">
                <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                  <filter.icon className="w-5 h-5 text-primary" />
                  {filter.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex flex-col h-full">
                <ul className="space-y-3 mb-6 flex-1">
                  {filter.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0 mt-2" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/5 border border-primary/10 rounded-md p-4 mt-auto">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground italic">{filter.note}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>

    {/* 3.2 Brand Positioning */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">3.2</span> Brand Positioning
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

    {/* 3.3 Brand Architecture */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">3.3</span> Brand Architecture
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

    {/* 3.4 Brand Voice */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">3.4</span> Brand Voice & Messaging
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

    {/* 3.5 Visual Identity */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">3.5</span> Visual Identity System
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
              <p className="text-xs text-muted-foreground">Website, social, packaging, and influencer kits must be visually unified. Inconsistency increases perceived amateurism.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* 3.6 Creative Asset Development */}
    <AnimatedSection>
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">3.6</span> Creative Asset Development
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Image, title: "Cinematic Product Photography", items: ["High-res imagery", "Texture emphasis", "Detail shots", "Prestige lighting"] },
          { icon: Sparkles, title: "Ingredient Storytelling", items: ["Sandalwood origin", "Raw material texture", "Performance context"] },
          { icon: Video, title: "Video Assets", items: ["Short-form vertical", "Performance demos", "Layering rituals", "Ramadan edits"] },
          { icon: Layers, title: "Social Content Library", items: ["Posting calendar", "Authority posts", "Educational content", "Sampling CTA"] },
          { icon: Target, title: "Retargeting Variants", items: ["Performance reinforcement", "Sampling reminders", "Authority validation"] },
          { icon: Gift, title: "Influencer Kits", items: ["Brand guidelines", "Visual references", "Messaging anchors", "Usage demos"] },
        ].map((block, i) => (
          <AnimatedSection key={block.title} delay={i * 0.05}>
            <Card className="h-full glass-card hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-3 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <block.icon className="w-4 h-4 text-primary" />
                  <CardTitle className="font-display text-sm text-foreground">{block.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  {block.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  </section>
);

export default BrandFoundation;
