import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  Target, CreditCard, MapPin, Palette, User, Store, Moon, MessageSquare, Check, X, ArrowRight
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ExperientialActivation = () => (
  <div className="py-24 md:py-40 px-6 bg-card relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="mb-8 flex items-center gap-4">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Strategic Module</span>
        <div className="h-px bg-primary/30 flex-1" />
        <Badge variant="outline" className="border-primary/30 text-muted-foreground font-normal tracking-wider">OPTIONAL</Badge>
      </div>
      
      <SectionTitle
        title="Experiential & Prestige Activation"
        subtitle="Strategic Optionality: Enhancing Digital Authority through Physical Presence."
      />

      {/* Introduction & Market Context */}
      <AnimatedSection className="mb-16">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-foreground">Prestige & Physical Presence</h3>
        <div className="bg-surface border border-border rounded-lg p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-primary block mb-2">Strategic Rationale</strong>
                Physical presence acts as a trust accelerator in the luxury fragrance sector. While digital channels drive scale, physical touchpoints validate quality and justify price premiums. This module outlines a high-impact strategy to anchor the brand in the physical world.
              </p>
              <div className="bg-primary/5 border-l-2 border-primary p-4 rounded-r mt-4">
                <p className="text-foreground font-medium italic">
                  "Digital scales reach. Physical scales trust. The integration of both reduces long-term Customer Acquisition Costs (CAC)."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Market Reality</div>
              {[
                { label: "Luxury Revenue", value: ">80%", sub: "Dubai Market Share" },
                { label: "Retail Control", value: "58.9%", sub: "Total Turnover" },
                { label: "Niche Growth", value: "+8.0%", sub: "YoY Expansion" },
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

      {/* Pop-Up Strategy Header */}
      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-3xl text-foreground">Tactical Deployment: Pop-Up Architecture</h3>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Objective: Validate brand equity and harvest first-party data through temporary physical footprints.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Grid for Strategy Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Strategic Role */}
        <AnimatedSection delay={0.1}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                Strategic Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  "Facilitate physical scent discovery",
                  "Validate performance (longevity/sillage)",
                  "Demonstrate layering rituals",
                  "Distribute high-intent samples",
                  "Capture first-party data (Email/SMS)",
                  "Generate influencer content",
                  "Signal prestige to the market"
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{role}</span>
                  </div>
                ))}
              </div>
              <div className="bg-surface-elevated rounded-md p-4 mt-auto">
                <p className="text-xs text-muted-foreground italic">
                  "Allowing customers to test longevity and heat resilience physically increases purchase confidence significantly."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Cost Structure */}
        <AnimatedSection delay={0.2}>
          <Card className="glass-card h-full flex flex-col glow-gold">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <CreditCard className="w-4 h-4 text-primary" />
                Investment Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <div className="text-4xl font-display font-bold text-gradient-gold">~AED 3,000</div>
                  <div className="text-xs text-muted-foreground mt-1">per day (approx. 8 sq meters)</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider">Inclusions</div>
                  <div className="grid grid-cols-2 gap-2">
                    {["Design & Fabrication", "Staffing", "Installation", "Sampling Stock"].map((item, i) => (
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

        {/* Location Selection */}
        <AnimatedSection delay={0.3}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Location Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-4 mb-6">
                <div className="text-sm font-medium text-foreground">Priority Criteria</div>
                <ul className="space-y-2">
                  {[
                    "High-footfall luxury malls",
                    "Proximity to established heritage brands",
                    "Dedicated niche positioning zones",
                    "Areas with high GCC national traffic",
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
                    <span className="font-semibold text-destructive">Avoid:</span> Mid-tier retail zones. Prestige alignment is critical; associating with mass-market zones dilutes authority.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Design Standard */}
        <AnimatedSection delay={0.4}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Palette className="w-4 h-4 text-primary" />
                Visual & Spatial Standards
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
                      <span className="text-foreground text-xs">Structured for scent testing</span>
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

        {/* Staffing Profile */}
        <AnimatedSection delay={0.5}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <User className="w-4 h-4 text-primary" />
                Ambassador Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Staff interaction must be consultative, not transactional. In a prestige environment, the quality of the interaction defines the authority of the brand.
              </p>
              
              <div className="space-y-4">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider">Required Capabilities</div>
                <div className="space-y-4">
                  {[
                    { title: "Layering Expert", desc: "Deep knowledge of regional layering culture." },
                    { title: "Performance Guide", desc: "Ability to articulate longevity & projection." },
                    { title: "Storyteller", desc: "Fluency in ingredient sourcing & narrative." },
                    { title: "Data Capturer", desc: "Skilled in unobtrusive digital contact collection." },
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

        {/* Digital Integration */}
        <AnimatedSection delay={0.6}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Store className="w-4 h-4 text-primary" />
                Phygital Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Offline exposure must feed digital retargeting pools. Physical presence without data capture creates attribution blind spots.
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

      {/* Ramadan Activation Strategy */}
      <Separator className="my-12 bg-border/50" />

      <AnimatedSection className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-3xl text-foreground">Ramadan Campaign Strategy</h3>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Strategic Necessity: Ramadan is a critical fragrance consumption period in the UAE, driven by gifting and social gatherings.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Cultural Drivers */}
        <AnimatedSection delay={0.1}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Moon className="w-4 h-4 text-primary" />
                Cultural Context
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <p className="text-sm text-muted-foreground mb-4">Fragrance purchasing surges due to:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Gifting traditions (Eid & Ramadan)",
                  "Increased family gatherings",
                  "Corporate gifting requirements",
                  "Heightened prestige consumption",
                  "Intensified layering rituals",
                  "Religious and cultural alignment",
                  "Social event frequency"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-surface-elevated rounded-md p-4 mt-auto">
                <p className="text-xs text-muted-foreground italic">
                  "Fragrance demand rises significantly during this period. Prestige gifting becomes highly visible."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Messaging Adaptation */}
        <AnimatedSection delay={0.2}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <MessageSquare className="w-4 h-4 text-primary" />
                Communication Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Tone & Voice</div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Respectful", desc: "Honors tradition" },
                      { label: "Generous", desc: "Focus on gifting" },
                      { label: "Elevated", desc: "Prestige language" },
                      { label: "Warm", desc: "Community centric" }
                    ].map((item, i) => (
                      <div key={i} className="bg-surface border border-border/50 p-2 rounded">
                        <div className="text-xs font-medium text-foreground">{item.label}</div>
                        <div className="text-[10px] text-muted-foreground">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Key Themes</div>
                  <div className="space-y-2">
                    {[
                      "The Art of Layering (Ritual)",
                      "The Gift of Aura (Generosity)",
                      "Scent of the Night (Gatherings)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.3}>
          <Card className="glass-card h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="font-display text-lg flex items-center gap-2 text-foreground">
                <Target className="w-4 h-4 text-primary" />
                Implementation Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <div className="space-y-0 relative pl-4 border-l border-primary/20 ml-2">
                {[
                  { phase: "Pre-Ramadan", focus: "Awareness & Discovery", timing: "2 Weeks Prior" },
                  { phase: "Ramadan (Weeks 1-2)", focus: "Self-Purchase & Majlis", timing: "Early Month" },
                  { phase: "Ramadan (Weeks 3-4)", focus: "Eid Gifting Peak", timing: "Late Month" },
                  { phase: "Eid al-Fitr", focus: "Celebration & Social", timing: "Post-Month" }
                ].map((item, i) => (
                  <div key={i} className="relative pb-6 last:pb-0">
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-card" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-primary mb-0.5">{item.phase}</span>
                      <span className="text-sm font-medium text-foreground mb-0.5">{item.focus}</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{item.timing}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Peak Volume</span>
                  <span>Last 10 Days</span>
                </div>
                <div className="h-1.5 w-full bg-surface-elevated rounded-full mt-2 overflow-hidden">
                   <div className="h-full bg-gradient-gold w-[80%] rounded-full ml-auto" />
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  </div>
);

export default ExperientialActivation;
