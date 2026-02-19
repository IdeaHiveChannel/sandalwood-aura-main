import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  Package, 
  Store, 
  Smartphone, 
  Target, 
  Repeat, 
  Megaphone, 
  Calendar,
  Gift,
  QrCode,
  MapPin,
  Zap,
  Building2,
  Search,
  Layers,
  ShoppingBag
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AdvancedAcquisition = () => {
  return (
    <section className="py-24 md:py-32 luxury-container">
      <div className="mb-12">
        <Badge variant="luxury" className="mb-4">Acquisition Engine</Badge>
        <SectionTitle
          title="Advanced Customer Acquisition"
          subtitle="Structural strategies to reduce risk, accelerate trust, and engineer authority."
        />
      </div>

      {/* Primary Acquisition Vehicles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        {/* The Discovery Kit */}
        <AnimatedSection>
          <Card className="glass-card h-full">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <Badge variant="outline">Entry Gateway</Badge>
              </div>
              <CardTitle className="font-display text-2xl text-foreground">The Discovery Kit Strategy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Primary acquisition tool designed to reduce consumer risk and acquire customers at break-even (Net-Zero Acquisition).
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-background/50 p-4 rounded-lg border border-border/50 text-center">
                  <div className="text-2xl font-display font-bold text-primary mb-1">35%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Target Conversion</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Digital-to-Physical</div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-border/50 text-center">
                  <div className="text-2xl font-display font-bold text-primary mb-1">13%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Immediate Purchase</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Convert to Full Bottle</div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-border/50 text-center">
                  <div className="text-2xl font-display font-bold text-primary mb-1">∞</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Rebate Loop</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Credit towards Full Bottle</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg border border-primary/10">
                <Repeat className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">The "Rebate Loop" Mechanism</h4>
                  <p className="text-sm text-muted-foreground">
                    Each kit includes a rebate code for a full bottle and triggers automated CRM "nurture" flows focused on educating the customer about "layering rituals".
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Phygital Pop-Up Architecture */}
        <AnimatedSection delay={0.1}>
          <Card className="glass-card h-full">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Store className="w-5 h-5 text-primary" />
                </div>
                <Badge variant="outline">Physical Trust</Badge>
              </div>
              <CardTitle className="font-display text-2xl text-foreground">"Phygital" Pop-Up Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Strategic physical touchpoints (58.9% market preference) designed to validate "longevity and sillage" in actual UAE heat.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <QrCode className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Mandatory Data Loops</h4>
                    <p className="text-sm text-muted-foreground">Every interaction must feed a digital retargeting pool through QR landing pages and pixel-integrated sampling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Location Strategy</h4>
                    <p className="text-sm text-muted-foreground">High-footfall luxury malls and premium corridors to signal prestige and distribute high-intent samples.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Advanced Expansion Tactics */}
      <AnimatedSection className="mb-16">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" /> Out-of-the-Box Expansion
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Smartphone,
              title: 'The "Smart" Scent Station',
              desc: 'Interactive kiosks in luxury lounges dispensing single-use "scent wipes" in exchange for digital contact info.',
              tag: "Automated Data Capture"
            },
            {
              icon: Megaphone,
              title: 'Scent-Triggered Ads',
              desc: 'Motion-sensor testers that trigger nearby digital screens showing "Performance Pillars" or immediate gifting discounts.',
              tag: "Contextual Conversion"
            },
            {
              icon: Building2,
              title: 'Corporate "Aura" Kiosks',
              desc: 'High-end sampling machines in Tier-1 corporate towers (DIFC) targeting time-poor, status-driven expats.',
              tag: "High-Net-Worth Access"
            }
          ].map((item, i) => (
            <AnimatedSection key={i} delay={0.2 + (i * 0.1)}>
              <Card className="glass-card h-full hover:bg-white/5 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="font-display text-lg text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <Badge variant="secondary" className="text-xs">{item.tag}</Badge>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Structural Scale & Authority */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection delay={0.3}>
          <Card className="glass-card h-full border-primary/10">
            <CardHeader>
              <CardTitle className="font-display text-xl text-foreground flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" /> High-Precision MOFU Targeting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Operating across three distinct layers to capture active demand and close sales using social proof.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Awareness Layer", val: "AED 6–15 CPC", desc: "Broad reach & interest targeting" },
                  { label: "High Intent Layer", val: "AED 20–40 CPC", desc: "Competitor & 'Sandalwood' keywords" },
                  { label: "Retargeting Layer", val: "5-7x Frequency", desc: "Unboxing videos & social proof" }
                ].map((layer, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded bg-background/30 border border-border/50">
                    <div>
                      <div className="font-semibold text-foreground text-sm">{layer.label}</div>
                      <div className="text-xs text-muted-foreground">{layer.desc}</div>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/20">{layer.val}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Card className="glass-card h-full border-primary/10">
            <CardHeader>
              <CardTitle className="font-display text-xl text-foreground flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" /> Authority & Surge Tactics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                  <Megaphone className="w-4 h-4 text-primary" /> Content Amplification
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Reserve 15–20% of media spend to amplify high-performing influencer content. Secure editorial mentions in luxury magazines as "Trust Signals".
                </p>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> Ramadan/Eid Surge
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>Allocate "Surge Budget" for last 10 days of Ramadan.</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>Pivot messaging to "The Art of Layering" & "The Gift of Aura".</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>Digital checkout as "Concierge Service".</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AdvancedAcquisition;
