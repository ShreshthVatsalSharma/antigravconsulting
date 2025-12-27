import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import textureImage from "@assets/generated_images/subtle_network_texture_background.png";
import tahirImage from "@assets/WhatsApp_Image_2025-12-27_at_02.13.17_1766827467534.jpeg";
import shreshthImage from "@assets/Screenshot_2025-12-27_at_2.55.19_PM_1766827524874.png";

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white py-20 relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">About AntiGrav</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a boutique advisory firm built on the belief that entering a new market shouldn't be a leap of faith, but a calculated strategic move.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              To be the most trusted bridge for global businesses entering India. We exist to simplify complexity, remove barriers, and enable sustainable growth for our clients.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We position ourselves as long-term strategic partners. We don't just hand over a report and walk away; we stand by you through execution and growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
               <div className="text-3xl font-bold text-primary mb-2">Strategic</div>
               <p className="text-sm text-muted-foreground">Looking beyond immediate gains to long-term value.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50 translate-y-8">
               <div className="text-3xl font-bold text-primary mb-2">Data-Driven</div>
               <p className="text-sm text-muted-foreground">Decisions backed by rigorous market analysis.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
               <div className="text-3xl font-bold text-primary mb-2">Founder-Led</div>
               <p className="text-sm text-muted-foreground">Personal attention from experts who care.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50 translate-y-8">
               <div className="text-3xl font-bold text-primary mb-2">Execution</div>
               <p className="text-sm text-muted-foreground">Focus on getting things done, not just planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Meet the Founders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining academic rigor from India's top institutes (IIT/IIM) with practical market expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white border border-border hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={shreshthImage} alt="Shreshth Vatsal Sharma" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-1">Shreshth Vatsal Sharma</h3>
                  <p className="text-sm text-muted-foreground">Co-founder</p>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Management student at IIM Ranchi. B.Tech in Computer Science & Engineering from IIT Jodhpur.</p>
                  <p>Shreshth brings a unique blend of analytical rigor, technology orientation, and strategic problem-solving to the firm. His background ensures a data-backed approach to market entry.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-border hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={tahirImage} alt="Tahir Khan" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-1">Tahir Khan</h3>
                  <p className="text-sm text-muted-foreground">Co-founder</p>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Management student at IIM Ranchi.</p>
                  <p>Tahir specializes in market understanding, sales strategy, and commercial execution. He ensures that strategies are not just theoretically sound but practically viable in the complex Indian market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
