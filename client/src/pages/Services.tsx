import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Briefcase, TrendingUp, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import textureImage from "@assets/generated_images/subtle_network_texture_background.png";

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "India Market Entry Strategy",
      description: "We analyze the market landscape, regulatory environment, and competitive dynamics to design a robust entry strategy tailored to your business goals.",
      points: ["Market Opportunity Assessment", "Regulatory & Compliance Roadmap", "Entry Structure Advisory (Sub/JV/Branch)"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Joint Venture & Partner Identification",
      description: "Finding the right local partner is critical. We identify, vet, and match you with strategic partners that align with your vision and values.",
      points: ["Partner Scoping & Profiling", "Due Diligence", "Deal Structuring Support"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Go-To-Market Strategy",
      description: "We help you define your pricing, distribution, and sales strategy to ensure product-market fit from day one.",
      points: ["Pricing & Positioning", "Channel Strategy", "Sales Enablement"]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Market & Sales Enablement",
      description: "Beyond strategy, we support execution. We help set up your initial sales operations and pipelines to generate early traction.",
      points: ["Sales Team Structure", "Lead Generation Frameworks", "Operational Setup"]
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Founder & Leadership Advisory",
      description: "Personalized advisory for international founders to navigate India's business culture and ecosystem effectively.",
      points: ["Cultural Contextualization", "Networking & ecosystem access", "Strategic Decision Support"]
    }
  ];

  return (
    <div className="pt-20">
       <section className="bg-secondary/30 py-20 relative border-b border-border/50">
        <div className="absolute inset-0 z-[-1] opacity-30">
           <img src={textureImage} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive advisory solutions designed to de-risk your entry and accelerate your growth in the Indian market.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="shrink-0">
                  <div className="h-16 w-16 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center text-sm font-medium text-primary/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-3"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2">Need a custom solution?</h2>
            <p className="text-primary-foreground/70">Every business is unique. Let's tailor a strategy for you.</p>
          </div>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-white/90 rounded-full px-8")}>
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
