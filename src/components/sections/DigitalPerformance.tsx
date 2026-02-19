import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  LineChart, 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  Layers, 
  Filter, 
  PieChart,
  Megaphone,
  BarChart4,
  Search,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const DigitalPerformance = () => (
  <section className="py-24 md:py-32 luxury-container">
    <div className="mb-12">
      <Badge variant="luxury" className="mb-4">Section 6</Badge>
      <SectionTitle
        title="Digital Performance Strategy (Step 4)"
        subtitle="This section defines how paid acquisition is executed after brand foundation, website, PR authority, influencer seeding, and sampling infrastructure are operational."
      />
    </div>

    <AnimatedSection className="mb-12">
      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="font-display text-xl text-foreground">Validated UAE Market Realities</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Digital performance in the UAE luxury fragrance sector is auction-based, competitive, and prestige-sensitive. Execution must be structured, phased, disciplined, culturally aligned, and measured continuously. Traffic without authority becomes expensive traffic.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Niche Value", val: "~$400M" },
                { label: "Growth Rate", val: "8%" },
                { label: "Med CPC", val: "AED 6–15" },
                { label: "High Intent", val: "AED 20–40" },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-lg p-3 text-center hover:bg-white/5 transition-colors">
                  <div className="text-primary font-bold text-lg">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* 6.1 90-Day Stabilization */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">6.1</span> 90-Day Acquisition Stabilization Plan
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            phase: "Phase 1: Exploration",
            days: "Days 1–30",
            icon: Search,
            objective: "Structured data collection and creative validation.",
            activities: ["Creative testing (Performance-first)", "Audience testing (Interest-based)", "Keyword testing (AED 6–15 band)"],
            expected: "Confirmed conversion rate, AOV, funnel drop-off data."
          },
          {
            phase: "Phase 2: Optimization",
            days: "Days 31–60",
            icon: Filter,
            objective: "Remove inefficiencies and concentrate budget.",
            activities: ["Eliminate weak creatives", "Narrow keyword exposure", "Expand retargeting budgets", "Integrate influencer content"],
            expected: "Reduced volatility, improved CTR, stronger sampling uptake."
          },
          {
            phase: "Phase 3: Stabilization",
            days: "Days 61–90",
            icon: TrendingUp,
            objective: "Establish predictable performance baseline.",
            activities: ["Concentrate spend on validated audiences", "Increase retargeting compression", "Prepare Ramadan surge plan"],
            expected: "Identifiable CAC trend, validated sampling ratio."
          }
        ].map((item, i) => (
          <Card key={i} className="glass-card flex flex-col h-full">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary" className="text-xs">{item.days}</Badge>
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="font-display text-lg text-foreground">{item.phase}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col space-y-4">
              <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                "{item.objective}"
              </p>
              
              <div className="space-y-2 flex-1">
                <div className="text-xs font-semibold text-foreground">Key Activities:</div>
                <ul className="space-y-1">
                  {item.activities.map((act, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {act}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/10 p-3 rounded text-xs text-muted-foreground mt-4">
                <span className="font-semibold text-primary">Expected:</span> {item.expected}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>

    {/* 6.2 Paid Media Structure */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        <span className="text-primary">6.2</span> Paid Media Structure
      </h3>
      
      <Card className="glass-card mb-8">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground mb-6">
            Digital acquisition must operate across three structured layers. Operating without layered structure increases auction inefficiency in the AED 6–40 CPC environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-5 bg-surface/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Megaphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">Layer 1</div>
                  <div className="text-xs text-muted-foreground">Awareness</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">CPC</span>
                  <span className="font-semibold text-primary">AED 6–15</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">CPM</span>
                  <span className="font-semibold text-primary">AED 5–15</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Introduce brand positioning, build retargeting pools, promote discovery kits.
                </p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-5 bg-surface/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary/10 px-2 py-1 text-[10px] text-primary font-bold rounded-bl">PRIORITY</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">Layer 2</div>
                  <div className="text-xs text-muted-foreground">High Intent</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">CPC</span>
                  <span className="font-semibold text-primary">AED 20–40</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-semibold text-primary">Conversion</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Capture active demand for "sandalwood perfume" and "niche fragrance".
                </p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-5 bg-surface/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">Layer 3</div>
                  <div className="text-xs text-muted-foreground">Retargeting</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Frequency</span>
                  <span className="font-semibold text-primary">High</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Asset</span>
                  <span className="font-semibold text-primary">Social Proof</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Convert interested traffic using reviews, unboxing, and limited offers.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
    
  </section>
);

export default DigitalPerformance;
