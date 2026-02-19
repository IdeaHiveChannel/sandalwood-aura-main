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
      <Badge variant="luxury" className="mb-4">Growth Strategy</Badge>
      <SectionTitle
        title="Digital Performance & Acquisition"
        subtitle="Executing high-precision paid acquisition to drive qualified traffic and revenue."
      />
    </div>

    <AnimatedSection className="mb-12">
      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="font-display text-xl text-foreground">Market Calibration</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                <strong className="text-primary block mb-2">Strategic Reality:</strong>
                Digital performance in the UAE luxury sector is an auction for attention. Success requires disciplined execution, not just spending. Traffic without authority is merely an expense; traffic with authority is an asset.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Niche Market Value", val: "~$400M" },
                { label: "YoY Growth", val: "+8.0%" },
                { label: "Standard CPC", val: "AED 6–15" },
                { label: "High-Intent CPC", val: "AED 20–40" },
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

    {/* Stabilization Phase */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Acquisition Stabilization Phase
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            phase: "Phase 1: Calibration",
            days: "Days 1–30",
            icon: Search,
            objective: "Data Collection & Validation",
            activities: ["Creative testing (Performance focus)", "Interest-based audience testing", "Keyword bid calibration (AED 6–15)"],
            expected: "Baseline conversion data, initial funnel metrics."
          },
          {
            phase: "Phase 2: Optimization",
            days: "Days 31–60",
            icon: Filter,
            objective: "Efficiency & Cost Reduction",
            activities: ["Cut underperforming creatives", "Refine keyword targeting", "Scale retargeting pools", "Activate influencer assets"],
            expected: "Improved CTR, reduced CPC, higher sampling rate."
          },
          {
            phase: "Phase 3: Stabilization",
            days: "Days 61–90",
            icon: TrendingUp,
            objective: "Predictable Scale",
            activities: ["Focus spend on winning audiences", "Maximize retargeting frequency", "Prepare Ramadan surge strategy"],
            expected: "Stable CAC, predictable revenue model."
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
                <strong className="block text-primary not-italic text-xs uppercase mb-1">Objective</strong>
                {item.objective}
              </p>
              
              <div className="space-y-2 flex-1">
                <div className="text-xs font-semibold text-foreground">Execution Steps:</div>
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
                <span className="font-semibold text-primary block mb-1">Success Metric:</span> {item.expected}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>

    {/* Paid Media Structure */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Paid Media Ecosystem
      </h3>
      
      <Card className="glass-card mb-8">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground mb-6">
            <strong className="text-primary">Strategic Necessity:</strong>
            Layered acquisition is non-negotiable. Relying on a single channel in a high-CPC environment (AED 20–40) guarantees inefficiency. We must operate across three distinct layers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-5 bg-surface/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Megaphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">Layer 1: Awareness</div>
                  <div className="text-xs text-muted-foreground">Top of Funnel</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Target CPC</span>
                  <span className="font-semibold text-primary">AED 6–15</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Target CPM</span>
                  <span className="font-semibold text-primary">AED 5–15</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <strong>Role:</strong> Feed the retargeting pool. Introduce brand narrative and drive discovery kit traffic.
                </p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-5 bg-surface/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary/10 px-2 py-1 text-[10px] text-primary font-bold rounded-bl">CRITICAL</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">Layer 2: High Intent</div>
                  <div className="text-xs text-muted-foreground">Middle of Funnel</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Target CPC</span>
                  <span className="font-semibold text-primary">AED 20–40</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Primary KPI</span>
                  <span className="font-semibold text-primary">Conversion</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <strong>Role:</strong> Capture active demand. Target "sandalwood perfume" and specific competitor keywords.
                </p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-5 bg-surface/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">Layer 3: Retargeting</div>
                  <div className="text-xs text-muted-foreground">Bottom of Funnel</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Frequency</span>
                  <span className="font-semibold text-primary">High (5-7x)</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Creative</span>
                  <span className="font-semibold text-primary">Social Proof</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <strong>Role:</strong> Close the sale. Utilize reviews, unboxing videos, and scarcity triggers.
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
