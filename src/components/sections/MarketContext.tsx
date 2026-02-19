import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  TrendingUp, 
  MapPin, 
  Store, 
  MousePointerClick, 
  Eye, 
  ArrowUpRight,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const MarketContext = () => (
  <section className="py-24 md:py-32 luxury-container">
    <div className="mb-12">
      <Badge variant="luxury" className="mb-4">Market Facts</Badge>
      <SectionTitle
        title="Market Reality"
        subtitle="This section is based on real UAE market data. No guesses, just facts."
      />
    </div>

    {/* Market Size */}
    <AnimatedSection className="mb-16 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Market Size & Potential
      </h3>
      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <span className="text-sm text-muted-foreground">Total Market Value</span>
                  <span className="text-xl font-bold text-foreground">USD 1.37 Billion</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <span className="text-sm text-muted-foreground">Niche Segment</span>
                  <span className="text-xl font-bold text-primary">USD 400 Million</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <span className="text-sm text-muted-foreground">YoY Growth (Niche)</span>
                  <span className="text-xl font-bold text-green-400">+8.0%</span>
                </div>
              </div>
              
              <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg mt-6">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Market Reality</div>
                <p className="text-sm text-muted-foreground italic">
                  "High liquidity market demanding luxury signaling. Capital exists, but flows strictly to perceived authority."
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="font-semibold text-foreground flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Strategic Implications
              </div>
              <ul className="space-y-3">
                {[
                  "Niche Dominance: ~30% of total market value",
                  "Divergent Growth: Mass market stagnating; Luxury accelerating",
                  "Quality Threshold: High sophistication demands performance",
                  "Differentiation: Generic positioning will fail"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* Growth Trajectory */}
    <AnimatedSection className="mb-16 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Growth Trajectory: Mass vs. Luxury
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="glass-card opacity-80">
          <CardContent className="pt-6 flex flex-col items-center justify-center text-center h-full">
            <div className="font-display text-4xl font-bold text-muted-foreground mb-2">2.7%</div>
            <div className="font-body text-xs uppercase tracking-wider text-muted-foreground">Mass Market Growth</div>
            <p className="text-xs text-muted-foreground mt-4 px-4">Saturated. Price-war driven. Low margin.</p>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-gold/50 bg-gold/5 shadow-gold/10">
          <CardContent className="pt-6 flex flex-col items-center justify-center text-center h-full">
            <div className="font-display text-4xl font-bold text-primary mb-2">8.0%</div>
            <div className="font-body text-xs uppercase tracking-wider text-primary">Luxury Niche Growth</div>
            <p className="text-xs text-muted-foreground mt-4 px-4">Expanding. Premiumization trend. High margin.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            If we want to build a brand that lasts, we need to be in the luxury market. That's where the growth is. But that means we have to look and act like a luxury brand.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* Revenue Concentration */}
    <AnimatedSection className="mb-16 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Revenue Concentration
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="bg-surface border-primary/30 h-full flex flex-col justify-center text-center p-6">
            <div className="flex justify-center mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <div className="font-display text-5xl md:text-6xl font-bold text-gradient-gold mb-3">80%+</div>
            <div className="font-body text-sm text-muted-foreground">of Dubai's perfume sales are luxury</div>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="glass-card h-full">
            <CardHeader>
              <CardTitle className="font-display text-lg">What This Means</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="bg-primary/10 p-2 rounded h-fit">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Price It Right</div>
                    <p className="text-xs text-muted-foreground">Don't be too cheap. People expect to pay for quality.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary/10 p-2 rounded h-fit">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">High Standards</div>
                    <p className="text-xs text-muted-foreground">The perfume must last long and smell expensive.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary/10 p-2 rounded h-fit">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">The Heat Factor</div>
                    <p className="text-xs text-muted-foreground">UAE is hot. Weak perfumes die quickly. We need strong performance.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>

    {/* Channel & Costs Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 pdf-section">
      {/* Channel Distribution */}
      <AnimatedSection>
        <h3 className="font-display text-xl font-semibold mb-6 text-foreground flex items-center gap-3">
          Channel Distribution
        </h3>
        <Card className="glass-card h-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Store Sales</CardTitle>
            <Store className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-4">58.9%</div>
            <p className="text-xs text-muted-foreground mb-4">
              Most people still buy in stores. If we are online only, we need to build extra trust.
            </p>
            <div className="space-y-2">
              <Badge variant="secondary" className="w-full justify-start font-normal">People like to smell before buying</Badge>
              <Badge variant="secondary" className="w-full justify-start font-normal">We need a mix of both</Badge>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Acquisition Economics */}
      <AnimatedSection>
        <h3 className="font-display text-xl font-semibold mb-6 text-foreground flex items-center gap-3">
          Acquisition Economics
        </h3>
        <Card className="glass-card h-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Click Costs</CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase text-muted-foreground">Standard</span>
                  <div className="font-bold text-foreground">AED 6–15</div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase text-muted-foreground">High Interest</span>
                  <div className="font-bold text-primary">AED 20–40</div>
                </div>
              </div>
              <Separator />
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-primary">Warning:</span> Ads are expensive. If people click but don't buy, we lose money fast.
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>

    {/* Influencer Benchmarks */}
    <AnimatedSection className="mb-16 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Influencer Benchmarks
      </h3>
      
      <Card className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/20">
                <th className="text-left p-4 font-medium text-muted-foreground">Size</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Followers</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Price (AED)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cat: "Small (Nano)", followers: "1k–10k", price: "500 – 2,000" },
                { cat: "Niche (Micro)", followers: "10k–50k", price: "2,000 – 5,000" },
                { cat: "Medium", followers: "50k–500k", price: "5,000 – 20,000" },
                { cat: "Big (Macro)", followers: "500k+", price: "15,000 – 50,000+" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/10 transition-colors">
                  <td className="p-4 font-medium text-foreground">{row.cat}</td>
                  <td className="p-4 text-muted-foreground">{row.followers}</td>
                  <td className="p-4 text-right font-mono text-primary">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-primary/5 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex gap-4">
            <span>Avg Return: <strong className="text-primary">6.5x</strong></span>
            <span>Best Return: <strong className="text-primary">8.4x</strong></span>
          </div>
          <span className="italic">It works if they are authentic.</span>
        </div>
      </Card>
    </AnimatedSection>

    {/* Sampling Economics */}
    <AnimatedSection className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Sampling Economics
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-surface border-primary/20 shadow-lg shadow-primary/5">
          <CardContent className="pt-6 text-center">
            <div className="font-display text-4xl font-bold text-primary mb-2">35%+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Digital-to-Physical Conversion</div>
          </CardContent>
        </Card>
        
        <Card className="bg-surface border-primary/20 shadow-lg shadow-primary/5">
          <CardContent className="pt-6 text-center">
            <div className="font-display text-4xl font-bold text-primary mb-2">13%</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Immediate Purchase</div>
          </CardContent>
        </Card>

        <Card className="glass-card flex flex-col justify-center">
          <CardContent className="pt-6">
            <p className="text-xs text-muted-foreground text-center italic">
              "Sampling is not optional. It is a structural accelerator. If trial experience fails, conversion falls below 35%."
            </p>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>

    {/* Visibility Requirements */}
    <AnimatedSection>
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Visibility Requirements
      </h3>
      
      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                What We Need to Be Seen
              </div>
              <ul className="space-y-3">
                {[
                  "Paid Ads (AED 6–40 per click)",
                  "Influencers (Different sizes)",
                  "PR & Articles (Retainer)",
                  "Sampling Program",
                  "Ramadan & Eid Push"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-secondary/30 flex items-center justify-center text-[10px] text-primary font-bold">
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-destructive/5 border border-destructive/10 rounded-lg p-5">
              <div className="font-semibold text-destructive mb-3 text-sm">What Happens If We Don't Spend Enough</div>
              <ul className="space-y-2">
                {[
                  "People won't know us",
                  "Fewer people to show ads to again",
                  "Ads will cost more",
                  "Harder to build trust"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-destructive flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-4 italic">
                "You have to pay to be seen in this market."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>

    {/* Competitive Positioning */}
    <AnimatedSection className="mt-16 mb-16 pdf-section">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
        Competitive Positioning
      </h3>
      
      <div className="bg-surface border border-border rounded-lg p-6 mb-8">
        <h4 className="font-display text-lg text-foreground mb-4">The Market Landscape</h4>
        <p className="text-sm text-muted-foreground mb-6">
          The UAE niche market includes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            "International heritage niche houses",
            "Regional premium oud houses",
            "Designer crossover brands",
            "Digital-first entrants"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground bg-primary/5 p-3 rounded border border-primary/10">
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Positioning Axes Visual */}
            <div className="relative border border-border/50 bg-muted/20 rounded-lg h-[300px] flex items-center justify-center overflow-hidden">
                {/* Y Axis Label */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-muted-foreground tracking-widest uppercase whitespace-nowrap origin-center">
                    Prestige / Authority Level
                </div>
                {/* X Axis Label */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-muted-foreground tracking-widest uppercase whitespace-nowrap">
                    Performance Credibility
                </div>
                
                {/* Axes Lines */}
                <div className="absolute left-16 bottom-16 top-12 w-px bg-border/50" />
                <div className="absolute left-16 right-12 bottom-16 h-px bg-border/50" />
                
                {/* Quadrants / Zones */}
                <div className="absolute top-16 right-16">
                     <div className="relative">
                         <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                         <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded shadow-lg border border-primary-foreground/20 whitespace-nowrap">
                            Your Brand
                         </div>
                         <div className="text-[9px] text-primary mt-1 text-center font-medium whitespace-nowrap">Upper-Mid Prestige</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default MarketContext;
