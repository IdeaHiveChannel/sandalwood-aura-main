
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
  Layers,
  Anchor
} from "lucide-react";

const Year2Transition = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-background">
      <div className="mb-12">
        <Badge variant="luxury" className="mb-4">Long-Term Strategy</Badge>
        <SectionTitle
          title="Growth & Scale Phase"
          subtitle="From market entry to sustainable category leadership."
        />
      </div>

      {/* Strategic Options */}
      <AnimatedSection className="mb-16 pdf-section">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
          Year 2 Strategic Options
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Stabilization Phase */}
        <AnimatedSection delay={0.1}>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Anchor className="w-5 h-5 text-primary" />
              </div>
              <div className="w-px h-full bg-border my-2" />
            </div>
            <div className="pb-8">
              <h3 className="text-xl font-display text-foreground mb-2">Operational Fortification</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Optimizing the foundation for long-term profitability and customer retention.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  CRM & Loyalty Architecture
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Supply Chain Resilience
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Expansion Phase */}
        <AnimatedSection delay={0.2}>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div className="w-px h-full bg-border my-2" />
            </div>
            <div className="pb-8">
              <h3 className="text-xl font-display text-foreground mb-2">Geographic & Portfolio Expansion</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Extending the brand footprint beyond initial borders and categories.
              </p>
               <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  KSA Market Penetration Strategy
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Home Fragrance Collection Launch
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="p-8 glass-card rounded-xl border border-primary/20 text-center max-w-3xl mx-auto">
          <h4 className="text-2xl font-display text-gradient-gold mb-4">Vision 2027</h4>
          <p className="text-muted-foreground leading-relaxed">
            "To become the definitive modern luxury sandalwood fragrance house of the region, bridging heritage with contemporary elegance."
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Year2Transition;
