import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  Star, MapPin, Sparkles, User, Palette, ShoppingBag, 
  Target, Info, ArrowRight, Check, X, Building2, Store, CreditCard,
  Moon, Gift, Users, MessageSquare, TrendingUp, Camera, Calendar, Flame,
  BarChart, Zap, AlertTriangle, Link, Layers, Activity, RefreshCw, Scale, Search, Eye
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ExperientialActivation = () => (
  <div className="py-24 md:py-40 px-6 bg-card relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="mb-8 flex items-center gap-4">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Section 7</span>
        <div className="h-px bg-primary/30 flex-1" />
        <Badge variant="outline" className="border-primary/30 text-muted-foreground font-normal tracking-wider">OPTIONAL MODULE</Badge>
      </div>
      
      <SectionTitle
        title="Experiential & Prestige Activation"
        subtitle="Year 1 — United Arab Emirates Only"
      />

      {/* 7.0 Introduction & Market Context */}
      <AnimatedSection className="mb-16">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-foreground">7.0 The Prestige Imperative</h3>
        <div className="bg-surface border border-border rounded-lg p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                This section defines physical visibility strategies within the United Arab Emirates luxury fragrance ecosystem. 
                Experiential activation is optional and dependent on the selected budget scenario. It is not required for launch.
              </p>
              <p>
                However, in a prestige-driven environment, physical presence strengthens authority, supports digital conversion, and reinforces brand legitimacy.
                Experiential investment must be structured, integrated with digital capture systems, and measurable.
              </p>
              <div className="bg-primary/5 border-l-2 border-primary p-4 rounded-r mt-4">
                <p className="text-foreground font-medium italic">
                  "Experiential visibility without conversion integration increases cost without measurable return."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Market Reality</div>
              {[
                { label: "Luxury Share", value: ">80%", sub: "of Dubai fragrance revenue" },
                { label: "Retail Control", value: "58.9%", sub: "of total turnover" },
                { label: "Niche Value", value: "$400M", sub: "growing at 8% annually" },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center border-b border-border/50 last:border-0 pb-3 last:pb-0">
                  <div>
                    <div className="text-xl font-display font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                  <div className="text-[10px] text-muted-foreground text-right max-w-[80px] leading-tight">{stat.sub}</div>
                </div>
              ))}
              
              <div className="pt-4 mt-2 border-t border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">High-Intent CPC</span>
                  <span className="text-xs font-bold text-foreground">AED 20–40</span>
                </div>
                <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-primary/60 w-3/4 rounded-full" />
                </div>
                <p className="text-[10px] text-muted-foreground mt-2 text-right">Physical presence reduces reliance on high-cost digital traffic.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 bg-border/50" />

      {/* 7.1 Pop-Up Strategy Header */}
      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-3xl text-foreground">7.1 Pop-Up Strategy</h3>
            <p className="text-muted-foreground mt-1 max-w-2xl">Structured physical activation for brand validation. Designed to create tangible brand equity in key luxury corridors.</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Grid for 7.1.1 - 7.1.6 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 7.1.1 Strategic Role */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                7.1.1 Strategic Role
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  "Physical scent discovery",
                  "Performance validation",
                  "Longevity testing zones",
                  "Layering demonstration",
                  "Sampling distribution",
                  "Data capture points",
                  "Influencer content creation",
                  "Prestige signaling"
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{role}</span>
                  </div>
                ))}
              </div>
              <div className="bg-surface-elevated rounded-md p-4 mt-auto">
                <p className="text-xs text-muted-foreground italic">
                  "In a performance-first fragrance culture, allowing customers to physically test longevity, sillage, and heat resilience increases purchase confidence."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.1.2 Cost Structure */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-surface border-border h-full flex flex-col glow-gold">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <CreditCard className="w-4 h-4 text-primary" />
                7.1.2 Cost Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <div className="text-4xl font-display font-bold text-gradient-gold">~AED 3,000</div>
                  <div className="text-xs text-muted-foreground mt-1">per day (approx. 8 sq meters)</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Includes</div>
                  <div className="grid grid-cols-2 gap-2">
                    {["Design/Fabrication", "Staffing", "Installation", "Sampling Stock"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary/60" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-border/50">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Duration Models</div>
                <div className="flex flex-wrap gap-2">
                  {["3-Day", "5-Day", "7-Day", "14-Day", "30-Day"].map((d, i) => (
                    <Badge key={i} variant="outline" className="text-[10px] border-border text-muted-foreground">
                      {d}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.1.3 Location Selection */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                7.1.3 Location Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-4 mb-6">
                <div className="text-sm font-medium text-foreground">Priority Criteria</div>
                <ul className="space-y-2">
                  {[
                    "High-footfall luxury malls",
                    "Proximity to established houses",
                    "Niche positioning zones",
                    "GCC national traffic areas",
                    "Premium corridors"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-destructive/5 border border-destructive/10 rounded-md p-4 mt-auto">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-destructive">Avoid:</span> Mid-tier retail zones. They dilute authority perception. Prestige alignment is more important than volume alone.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.1.4 Design Standard */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Palette className="w-4 h-4 text-primary" />
                7.1.4 Design Standard
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-sm font-medium text-foreground">Visual Identity</div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Premium materials",
                      "Minimalist structure",
                      "Controlled palette",
                      "Ingredient storytelling",
                      "Bilingual (Ar/En)",
                      "Ritual education"
                    ].map((item, i) => (
                      <div key={i} className="text-xs text-muted-foreground bg-background border border-border px-3 py-2 rounded-md text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-medium text-foreground">Spatial Requirements</div>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between text-sm text-muted-foreground border-b border-border/50 pb-2">
                      <span>Layout</span>
                      <span className="text-foreground text-xs">Clean, ample white space</span>
                    </li>
                    <li className="flex items-center justify-between text-sm text-muted-foreground border-b border-border/50 pb-2">
                      <span>Flow</span>
                      <span className="text-foreground text-xs">Structured scent testing</span>
                    </li>
                    <li className="flex items-center justify-between text-sm text-muted-foreground border-b border-border/50 pb-2">
                      <span>Tech</span>
                      <span className="text-foreground text-xs">Video & Data capture ready</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.1.5 Staffing Profile */}
        <AnimatedSection delay={0.5}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <User className="w-4 h-4 text-primary" />
                7.1.5 Staffing Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Staff interaction must be consultative, not transactional. In a prestige environment, staff behavior influences authority.
              </p>
              
              <div className="space-y-4">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider">Required Capabilities</div>
                <div className="space-y-4">
                  {[
                    { title: "Layering Expert", desc: "Understand regional layering culture" },
                    { title: "Performance Guide", desc: "Explain longevity & projection" },
                    { title: "Storyteller", desc: "Ingredient sourcing & sourcing info" },
                    { title: "Data Capturer", desc: "Digital contact collection" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.1.6 Digital Integration */}
        <AnimatedSection delay={0.6}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Store className="w-4 h-4 text-primary" />
                7.1.6 Digital Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Offline exposure must feed retargeting pools. Physical presence without digital capture creates attribution blind spots.
              </p>

              <div className="bg-background border border-border rounded-lg p-4 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Mandatory Integrations</div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                  {[
                    "QR Landing Pages",
                    "Sampling Registration",
                    "Email Capture Forms",
                    "Retargeting Pixels",
                    "Influencer Tagging",
                    "Campaign Tracking"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground bg-primary/5 p-3 rounded border border-primary/10">
                <span>Physical Interaction</span>
                <ArrowRight className="w-3 h-3 text-primary" />
                <span>Digital Retargeting Pool</span>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* 7.2 Ramadan Activation Strategy */}
      <Separator className="my-12 bg-border/50" />

      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-3xl text-foreground">7.2 Ramadan Activation Strategy</h3>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Ramadan is a structurally significant fragrance consumption period in the United Arab Emirates. 
              It is not optional within Year 1 planning.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* 7.2.1 Cultural Drivers */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Moon className="w-4 h-4 text-primary" />
                7.2.1 Cultural Drivers
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <p className="text-sm text-muted-foreground mb-4">Fragrance purchasing is influenced by:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Gifting traditions",
                  "Increased family gatherings",
                  "Corporate gifting",
                  "Heightened prestige consumption",
                  "Layering ritual intensification",
                  "Religious and cultural alignment",
                  "Social event frequency increase"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-surface-elevated rounded-md p-4 mt-auto">
                <p className="text-xs text-muted-foreground italic">
                  "Fragrance demand rises during this period, particularly in premium categories. Prestige gifting becomes more visible."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.2.2 Messaging Adaptation */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <MessageSquare className="w-4 h-4 text-primary" />
                7.2.2 Messaging Adaptation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Communication Requirements</div>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Be culturally respectful",
                    "Avoid aggressive sales tone",
                    "Emphasize elegance and gifting",
                    "Reinforce prestige positioning",
                    "Integrate layering ritual storytelling",
                    "Reflect warmth and heritage"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary/60" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto space-y-3 pt-4 border-t border-border/50">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Tone Shift</div>
                <div className="grid grid-cols-2 gap-2">
                  {["Ritual", "Generosity", "Presentation", "Cultural Alignment"].map((item, i) => (
                    <Badge key={i} variant="outline" className="text-[10px] border-primary/20 text-primary justify-center">
                      {item}
                    </Badge>
                  ))}
                </div>
                <p className="text-[10px] text-destructive mt-2">
                  *Cultural misalignment during Ramadan damages authority perception.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.2.3 Digital Surge Planning */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-surface border-border h-full flex flex-col glow-gold">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                7.2.3 Digital Surge Planning
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-sm font-medium text-foreground mb-2">Auction Competition</div>
                <p className="text-xs text-muted-foreground">
                  CPC may fluctuate within <span className="text-foreground font-semibold">AED 6–40</span> range and escalate during peak days.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Digital Plan Components</div>
                <ul className="space-y-2">
                  {[
                    "Increased retargeting allocation",
                    "Controlled high-intent keyword exposure",
                    "Sampling surge",
                    "Creative refresh cycles",
                    "Influencer posting frequency increase",
                    "Lookalike audience expansion",
                    "Budget flexibility"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ArrowRight className="w-3 h-3 text-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                <p className="text-xs text-primary font-medium text-center">
                  Ramadan surge must be pre-budgeted. Reactive scaling increases inefficiency.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.2.4 Influencer Role */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Camera className="w-4 h-4 text-primary" />
                7.2.4 Influencer Role
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-4 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Activation Types</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Gifting-focused content",
                    "Cultural storytelling",
                    "Iftar event presence",
                    "Layering demonstrations",
                    "Limited edition presentation",
                    "Sampling distribution"
                  ].map((item, i) => (
                    <div key={i} className="text-[10px] text-muted-foreground bg-background border border-border px-2 py-1.5 rounded text-center">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/50">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Tier Usage Scenarios</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Conservative</span>
                    <span className="text-foreground">Nano & Micro</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Balanced</span>
                    <span className="text-foreground">Micro & Mid-tier</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Prestige-heavy</span>
                    <span className="text-foreground">Mid-tier & Macro</span>
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground italic mt-2">
                  *Celebrity inclusion remains excluded in Year 1.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.2.5 Experiential Extension */}
        <AnimatedSection delay={0.5} className="md:col-span-2 lg:col-span-1">
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                7.2.5 Experiential Extension
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Optional Elements</div>
                <ul className="space-y-2">
                  {[
                    "Ramadan-themed pop-up",
                    "Limited-time sampling event",
                    "Mall activation",
                    "Influencer meet-and-greet",
                    "Corporate gifting showcase"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Sparkles className="w-3 h-3 text-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-border rounded-lg p-4 mt-auto">
                <div className="text-xs font-semibold text-destructive uppercase tracking-wider mb-2">Critical Requirement</div>
                <p className="text-xs text-muted-foreground mb-3">
                  All experiential activity must integrate:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["Digital capture", "QR landing pages", "Retargeting pool", "Sampling follow-up"].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-destructive" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground mt-3 italic">
                  "Ramadan experiential without digital linkage reduces return measurement."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* 7.3 Mall Media Packages */}
      <Separator className="my-12 bg-border/50" />

      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-3xl text-foreground">7.3 Mall Media Packages</h3>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              High-visibility positioning in Dubai Mall and Mall of the Emirates. A prestige accelerator for brand authority.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 7.3.1 Benchmark */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-surface border-border h-full flex flex-col glow-gold">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <BarChart className="w-4 h-4 text-primary" />
                7.3.1 Benchmark
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-sm font-medium text-foreground mb-2">Investment Scope</div>
                <div className="text-3xl font-display font-bold text-gradient-gold">~AED 180,000</div>
                <div className="text-xs text-muted-foreground mt-1">per month (Fashion Avenue package)</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Traffic Context</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="text-xs text-muted-foreground">Dubai Mall Visitors</span>
                    <span className="text-sm font-bold text-foreground">100M+ / year</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="text-xs text-muted-foreground">MOE Visitors</span>
                    <span className="text-sm font-bold text-foreground">42M / year</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded p-3 mt-auto">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Exposure Value</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "High-visibility placement",
                    "Premium retail association",
                    "Perception of brand scale",
                    "Luxury house alignment"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <Check className="w-3 h-3 text-primary/60" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.3.2 Strategic Role */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                7.3.2 Strategic Role
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-4 mb-6">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Primary Functions</div>
                <ul className="space-y-2">
                  {[
                    "Prestige accelerator",
                    "Authority reinforcement",
                    "Awareness amplifier",
                    "Perception elevation mechanism",
                    "Brand maturity signal"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto p-4 bg-surface-elevated rounded-lg border-l-2 border-primary">
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  "This is not a direct performance tool. It is a perception and positioning tool. It strengthens conversion confidence in digital channels indirectly."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.3.3 Preconditions */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-primary" />
                7.3.3 Preconditions Before Investment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <p className="text-sm text-muted-foreground mb-6">
                Mall media should only be activated if:
              </p>
              
              <div className="space-y-3 mb-6">
                {[
                  "Website and tracking infrastructure are stable",
                  "Sampling conversion benchmark is validated",
                  "Retargeting pools are active",
                  "Public relations authority is established",
                  "Influencer ecosystem is functioning"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground bg-background border border-border/50 p-2 rounded">
                    <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center text-primary text-[10px]">
                      {i + 1}
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 text-xs text-destructive bg-destructive/5 p-3 rounded">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Visibility without conversion capture increases risk. Mall media must support an already-functioning digital engine.</span>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.3.4 Integration & Risk */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Link className="w-4 h-4 text-primary" />
                7.3.4 Integration & Risk
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Integration</div>
                  <ul className="space-y-1.5">
                    {["QR landing pages", "Sampling registration", "Influencer amplification", "Retargeting pools", "Seasonal messaging"].map((item, i) => (
                      <li key={i} className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-destructive uppercase tracking-wider">Risks</div>
                  <ul className="space-y-1.5">
                    {["High fixed cost", "Limited attribution", "Reduced flexibility", "Maturity expectation"].map((item, i) => (
                      <li key={i} className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-destructive" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-border/50">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Suitable for: <span className="text-foreground font-medium">Prestige-heavy</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive" />
                    <span className="text-muted-foreground">Not for: <span className="text-foreground font-medium">Digital-first</span></span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>

      {/* 7.4 Experiential Measurement Framework */}
      <Separator className="my-12 bg-border/50" />

      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-3xl text-foreground">7.4 Experiential Measurement Framework</h3>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Experiential activation must be measurable and connected to digital performance.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        
        {/* 7.4.1 Core Quantitative Metrics */}
        <AnimatedSection delay={0.1}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Activity className="w-4 h-4 text-primary" />
                7.4.1 Core Quantitative Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-4 mb-6">
                <div className="text-sm font-medium text-foreground">Track</div>
                <ul className="space-y-2">
                  {[
                    "Daily footfall interaction count",
                    "Sampling distribution volume",
                    "Email capture rate",
                    "QR code scan volume",
                    "Immediate purchase volume",
                    "30-day post-visit conversion rate",
                    "Retargeting audience growth",
                    "Influencer content volume",
                    "Branded search uplift"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-destructive/5 border border-destructive/10 rounded-md p-4 mt-auto">
                <p className="text-xs text-muted-foreground italic">
                  "Without structured measurement, experiential ROI cannot be evaluated."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.4.2 Sampling Conversion Tracking */}
        <AnimatedSection delay={0.2}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                7.4.2 Sampling Conversion Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6 mb-6">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Benchmarks</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background border border-border p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-primary">35%</div>
                      <div className="text-[10px] text-muted-foreground leading-tight mt-1">Digital-to-physical conversion</div>
                    </div>
                    <div className="bg-background border border-border p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-primary">13%</div>
                      <div className="text-[10px] text-muted-foreground leading-tight mt-1">Immediate luxury conversion</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Required Tracking</div>
                  <ul className="space-y-1.5">
                    {["Sample-to-purchase conversion", "Time-to-conversion window", "Average order value", "Repeat purchase behavior"].map((item, i) => (
                      <li key={i} className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Revenue Modeling Inputs</div>
                  <div className="flex flex-wrap gap-2">
                    {["Product price", "Conversion rate", "Sampling cost"].map((item, i) => (
                      <Badge key={i} variant="outline" className="text-[10px] border-border text-muted-foreground font-normal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.4.3 Digital Uplift Measurement */}
        <AnimatedSection delay={0.3}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                7.4.3 Digital Uplift Measurement
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-4 mb-6">
                <div className="text-sm font-medium text-foreground">Measure</div>
                <ul className="space-y-2">
                  {[
                    "Retargeting conversion rate (Pre/Post)",
                    "Traffic spike correlation",
                    "Influencer engagement uplift",
                    "Branded search query increase",
                    "Cost per acquisition compression"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-md p-4 mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">Search Behavior</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Mall exposure often increases branded search behavior. This must be measured.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.4.4 Authority Perception Indicators */}
        <AnimatedSection delay={0.4}>
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Eye className="w-4 h-4 text-primary" />
                7.4.4 Authority Perception Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-4 mb-6">
                <div className="text-sm font-medium text-foreground">Qualitative Indicators</div>
                <ul className="space-y-2">
                  {[
                    "Influencer repost frequency",
                    "Media coverage amplification",
                    "Organic social mentions",
                    "Repeat visitor volume",
                    "Increase in direct website traffic"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-elevated rounded-md p-4 mt-auto">
                <p className="text-xs text-muted-foreground italic">
                  "Prestige acceleration is partially perceptual and must be evaluated alongside quantitative data."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 7.4.5 Decision Evaluation Framework */}
        <AnimatedSection delay={0.5} className="md:col-span-2 lg:col-span-2">
          <Card className="bg-surface border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Scale className="w-4 h-4 text-primary" />
                7.4.5 Decision Evaluation Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-sm font-medium text-foreground mb-4">Evaluation Questions</div>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Did sampling conversion improve?",
                      "Did retargeting efficiency increase?",
                      "Did branded search volume rise?",
                      "Did influencer engagement increase?",
                      "Did Ramadan uplift exceed baseline?",
                      "Did acquisition cost compress?"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Check className="w-3 h-3" />
                      If Positive
                    </div>
                    <p className="text-sm text-muted-foreground">Experiential allocation may expand.</p>
                  </div>
                  
                  <div className="bg-destructive/5 border border-destructive/10 rounded-lg p-4">
                    <div className="text-xs font-semibold text-destructive uppercase tracking-wider mb-2 flex items-center gap-2">
                      <X className="w-3 h-3" />
                      If Negative
                    </div>
                    <ul className="space-y-1">
                      {["Reduce duration", "Refine location", "Shorten activation window", "Reallocate budget toward digital performance"].map((item, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-destructive" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.6}>
        <div className="bg-surface-elevated border border-border p-8 rounded-lg text-center max-w-3xl mx-auto">
          <p className="font-display text-lg text-foreground mb-2">
            "Experiential activation in the UAE luxury fragrance market is not decorative visibility."
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            It is a structured prestige acceleration tool that must integrate with digital acquisition, sampling infrastructure, influencer amplification, and retargeting compression within a USD 400 million niche environment.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default ExperientialActivation;
