
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  AlertTriangle, 
  Scale, 
  Globe, 
  Store, 
  Zap, 
  Shield, 
  Calculator,
  Check,
  Layers
} from "lucide-react";

const Year2Transition = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-muted/20">
      <div className="mb-12">
        <Badge variant="outline" className="mb-4 border-primary/50 text-primary tracking-widest uppercase">Section 12</Badge>
        <SectionTitle
          title="Year 2 Strategic Transition Framework"
          subtitle="From stabilization to controlled scale."
        />
      </div>

      {/* Year 1 vs Year 2 Objectives */}
      <AnimatedSection className="mb-16 pdf-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Card className="glass-card/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-muted-foreground/30" />
            <CardHeader className="pb-2">
              <Badge variant="secondary" className="w-fit mb-2">Year 1 Objective</Badge>
              <CardTitle className="text-xl font-display text-muted-foreground">Stabilization & Authority</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Establish the brand, build trust, and prove the product works in the market.
              </p>
            </CardContent>
          </Card>

          <div className="flex justify-center md:hidden">
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
          </div>
          <div className="hidden md:flex justify-center">
            <ArrowRight className="w-8 h-8 text-muted-foreground" />
          </div>

          <Card className="bg-surface border-primary relative overflow-hidden shadow-lg shadow-primary/5">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <CardHeader className="pb-2">
              <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Year 2 Objective</Badge>
              <CardTitle className="text-xl font-display text-foreground">Controlled Scale & Leverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Expand geographically and increase volume only after the foundation is solid.
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      {/* 12.1 Preconditions */}
      <AnimatedSection className="mb-16 pdf-section">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
          <span className="text-primary">12.1</span> Preconditions for Expansion
        </h3>
        
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Scale className="w-5 h-5 text-primary" />
              Expansion Checklist
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Year 2 scale should only begin if these conditions are met.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "CAC is stable",
                "Sampling conversion ≥35% sustained",
                "Influencer ROI is stable",
                "Retargeting ads are working well",
                "Customers are coming back to buy again",
                "Product performance validated in UAE climate"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-destructive/5 border border-destructive/10 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-semibold text-destructive text-sm mb-1">Critical Rule</h5>
                <p className="text-xs text-muted-foreground">
                  If these are not stabilized, Year 2 should focus on <span className="text-foreground font-medium">optimization</span>, not expansion.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* 12.2 Strategic Options */}
      <AnimatedSection className="mb-16 pdf-section">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
          <span className="text-primary">12.2</span> Year 2 Strategic Options
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Option 1 */}
          <Card className="glass-card h-full">
            <CardHeader className="pb-3">
              <Badge variant="outline" className="w-fit mb-2">Option 1</Badge>
              <CardTitle className="text-base flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                SKU Expansion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Introduce flankers carefully
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Maintain hero dominance
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Option 2 */}
          <Card className="glass-card h-full">
            <CardHeader className="pb-3">
              <Badge variant="outline" className="w-fit mb-2">Option 2</Badge>
              <CardTitle className="text-base flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                Regional GCC
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Expand to KSA, Kuwait, Qatar
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Only after UAE stabilization
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Option 3 */}
          <Card className="glass-card h-full">
            <CardHeader className="pb-3">
              <Badge variant="outline" className="w-fit mb-2">Option 3</Badge>
              <CardTitle className="text-base flex items-center gap-2">
                <Store className="w-4 h-4 text-primary" />
                Retail Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Selective specialty retail
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Not mass placement
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Option 4 */}
          <Card className="glass-card h-full">
            <CardHeader className="pb-3">
              <Badge variant="outline" className="w-fit mb-2">Option 4</Badge>
              <CardTitle className="text-base flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Prestige Intensification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Controlled mall media
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Stronger experiential
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pdf-section">
        {/* 12.3 Risk Discipline */}
        <AnimatedSection delay={0.1}>
          <Card className="glass-card h-full">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="text-primary">12.3</span> Risk Discipline
                </h3>
                <Shield className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Luxury authority is built slowly. Avoid these mistakes.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Rapid SKU proliferation",
                  "Celebrity dependency",
                  "Aggressive discounting",
                  "Overexposure"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded bg-muted/30 border border-border/50">
                    <span className="text-sm font-medium text-muted-foreground">{item}</span>
                    <Badge variant="destructive" className="text-[10px] uppercase">Avoid</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* 12.4 Capital Discipline */}
        <AnimatedSection delay={0.2}>
          <Card className="glass-card h-full">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="text-primary">12.4</span> Capital Discipline
                </h3>
                <Calculator className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Before increasing budget, recalculate these metrics.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Break-even threshold",
                    "CAC stability",
                    "Repeat purchase rate",
                    "Sampling conversion trend"
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col p-3 rounded bg-primary/5 border border-primary/10">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Recalculate</span>
                      <span className="text-sm font-semibold text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Separator />
                <p className="text-sm font-medium text-center text-muted-foreground italic">
                  "Expansion must be funded by validated performance, not optimism."
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Year2Transition;
