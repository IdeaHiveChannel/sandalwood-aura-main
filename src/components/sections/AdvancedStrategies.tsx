import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { 
  Handshake, 
  Timer, 
  GraduationCap, 
  Moon, 
  Crown, 
  Sun, 
  Snowflake, 
  Flag, 
  Plane,
  Target,
  Gift,
  Users
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AdvancedStrategies = () => {
  return (
    <section className="py-24 md:py-32 luxury-container">
      <div className="mb-12">
        <Badge variant="luxury" className="mb-4">Strategic Expansion</Badge>
        <SectionTitle
          title="Advanced Campaign Concepts"
          subtitle="Out-of-the-box strategies designed to disrupt the market and deepen brand authority."
        />
      </div>

      {/* Core Creative Campaigns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {[
          {
            icon: Handshake,
            title: 'Collaborative "Scent-Scaping"',
            subtitle: "B2B Authority",
            campaign: 'Partner with elite interior design firms or real estate developers for a signature "Sandalwood Aura" ambient scent.',
            tactic: 'Provide exclusive "Home-Warming" gift sets for high-net-worth buyers to position the brand as a lifestyle marker.',
          },
          {
            icon: Timer,
            title: 'The "Longevity Challenge"',
            subtitle: "Performance Proof",
            campaign: "Invite niche fragrance enthusiasts to wear the scent during a high-activity day in the Dubai heat.",
            tactic: 'Use time-stamped, unedited social media "check-ins" to prove projection and sillage in real-world conditions.',
          },
          {
            icon: GraduationCap,
            title: "Olfactory Workshops",
            subtitle: "Experiential Education",
            campaign: "Host \"The Art of the Layering Ritual\" masterclasses at boutique luxury hotels or private members' clubs.",
            tactic: "Teach customers the chemistry of sandalwood and layering with heritage oils to build authority through expertise.",
          },
          {
            icon: Moon,
            title: '"Scent of the Majlis"',
            subtitle: "Cultural Integration",
            campaign: 'Offer a "Majlis Concierge" service during the last 10 days of Ramadan.',
            tactic: "Brand ambassador visits private Majlis gatherings for personalized scent consultations in a high-trust setting.",
          },
          {
            icon: Crown,
            title: '"Founder’s Reserve"',
            subtitle: "Scarcity & Prestige",
            campaign: 'Release a limited-run batch once a year using a rare or aged sandalwood varietal.',
            tactic: "Available only to the top 5% of the CRM database to reinforce luxury ambition and reward loyalty.",
          },
        ].map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1} className="h-full">
            <Card className="glass-card h-full hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="outline" className="w-fit mb-2 text-xs">{item.subtitle}</Badge>
                <CardTitle className="font-display text-xl text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1 uppercase tracking-wider">The Campaign</h4>
                  <p className="text-sm text-muted-foreground">{item.campaign}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1 uppercase tracking-wider">The Tactic</h4>
                  <p className="text-sm text-muted-foreground">{item.tactic}</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {/* Seasonal & Calendar Strategy */}
      <AnimatedSection>
        <div className="mb-12">
          <SectionTitle
            title="Seasonal Activation Calendar"
            subtitle="Advanced campaigns aligned with the specific rhythm of the UAE’s seasons and holidays."
          />
        </div>

        <div className="space-y-8">
          {[
            {
              season: "Summer (June – August)",
              title: 'The "Heat-Resistance" Protocol',
              icon: Sun,
              concept: '"The 12-Hour Aura Challenge"',
              tactic: "Partner with fitness influencers to document scent projection in 40°C+ heat.",
              goal: "Address 'Performance Mismatch' risk with 'Performance-First' evidence.",
            },
            {
              season: "Winter (November – February)",
              title: '"Winter Layers" & Heritage Fusion',
              icon: Snowflake,
              concept: '"Sandalwood & Heritage: The Private Collection"',
              tactic: "Workshops showing Sandalwood Aura as the perfect base note for Oud/Musk.",
              goal: "Position fragrance as a ritual to increase daily use occasions.",
            },
            {
              season: "Ramadan (Last 10 Days)",
              title: 'The "Majlis Concierge"',
              icon: Moon,
              concept: '"Aura at the Majlis"',
              tactic: "Concierge service for private Majlis gatherings instead of mall pop-ups.",
              goal: "Align with 'Prestige Gifting' and capture high-value first-party data.",
            },
            {
              season: "UAE National Day (Dec 2nd)",
              title: '"National Pride" Olfactory Gallery',
              icon: Flag,
              concept: '"Scent of the Nation’s Future"',
              tactic: "Phygital art installation pairing sandalwood scent with AI visuals of UAE heritage.",
              goal: "Align brand with national identity and cultural values.",
            },
            {
              season: "Spring Break & Eid Al-Adha",
              title: 'The "Traveler’s Aura"',
              icon: Plane,
              concept: '"The Scent of Home, Anywhere"',
              tactic: 'Market Discovery Kit as "Traveler’s Essential" with exclusive leather case upgrades.',
              goal: "Leverage discovery kits as conversion accelerators for status-driven expats.",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card p-6 rounded-xl border border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center group hover:bg-white/5 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-grow space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h3 className="text-xl font-display text-foreground">{item.title}</h3>
                    <Badge variant="secondary" className="w-fit">{item.season}</Badge>
                  </div>
                  <p className="text-sm font-medium text-primary">{item.concept}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Tactic: </span>
                      {item.tactic}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Goal: </span>
                      {item.goal}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AdvancedStrategies;
