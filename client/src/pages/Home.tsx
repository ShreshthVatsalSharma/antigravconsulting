import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import heroImage from "@assets/generated_images/minimalist_architectural_abstract_hero_for_consulting_firm.png";
import textureImage from "@assets/generated_images/subtle_network_texture_background.png";
import tahirImage from "@assets/WhatsApp_Image_2025-12-27_at_02.13.17_1766827467534.jpeg";
import shreshthImage from "@assets/Screenshot_2025-12-27_at_2.55.19_PM_1766827524874.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-[-1] opacity-50">
           <img src={textureImage} alt="Background Texture" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={stagger}
            className="space-y-8"
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-primary">
              Helping global businesses <br/>
              <span className="text-muted-foreground">enter and scale</span> <br/>
              in <span className="relative">India<span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500/30"></span></span>.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              We simplify regulatory, market, and cultural complexity to help you build a sustainable presence in one of the world's fastest-growing economies.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-primary text-white rounded-full px-8 h-12 text-base font-medium hover:bg-primary/90")}>
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/services" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8 h-12 text-base font-medium hover:bg-secondary")}>
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={heroImage} 
              alt="Abstract Global Business" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </motion.div>
        </div>
      </section>

      {/* Divider with Indian Touch */}
      <div className="flex justify-center items-center py-8 bg-white">
        <div className="flex items-center gap-4 opacity-30">
          <div className="h-px w-12 bg-orange-500"></div>
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <div className="h-px w-12 bg-orange-500"></div>
        </div>
      </div>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              We act as your long-term strategic partner, not just a one-time advisor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Market Entry Strategy",
                desc: "Data-driven analysis to design the right entry route—wholly owned subsidiary, JV, or strategic partnership."
              },
              {
                title: "Partner Identification",
                desc: "Identifying and matching you with the right local partners to accelerate your go-to-market."
              },
              {
                title: "Execution & Growth",
                desc: "Hands-on support in setting up operations, sales enablement, and early growth execution."
              }
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-xl border border-border bg-secondary/30 hover:bg-white hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center items-center py-8 bg-secondary/20">
        <div className="flex items-center gap-3 opacity-40">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
        </div>
      </div>

      {/* Why AntiGrav */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Why AntiGrav?</h2>
              <p className="text-sm text-orange-300/80 italic mb-4">समझ, सेवा, सफलता • Understand, Serve, Succeed</p>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                India is complex. We simplify it. Unlike traditional firms that offer generic reports, we offer execution-oriented strategies led by founders who understand the market pulse.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Strategic & Data-Driven Approach",
                  "Founder-Led Execution Support",
                  "Deep Local Market Expertise",
                  "Focus on Long-Term Partnership"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                   <img src={shreshthImage} alt="Shreshth Vatsal Sharma" className="h-12 w-12 rounded-full object-cover shrink-0" />
                   <div>
                     <h4 className="font-bold text-lg text-white">Shreshth Vatsal Sharma</h4>
                     <p className="text-sm text-white/60 mb-2">Co-founder | IIT Jodhpur, IIM Ranchi</p>
                     <p className="text-sm text-white/60 font-semibold mb-1">Mission</p>
                     <p className="text-sm text-white/80">To simplify regulatory, market, and cultural complexity and enable sustainable growth for global businesses expanding into India.</p>
                   </div>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex gap-4 items-start">
                   <img src={tahirImage} alt="Tahir Khan" className="h-12 w-12 rounded-full object-cover shrink-0" />
                   <div>
                     <h4 className="font-bold text-lg text-white">Tahir Khan</h4>
                     <p className="text-sm text-white/60 mb-2">Co-founder | IIM Ranchi</p>
                     <p className="text-sm text-white/60 font-semibold mb-1">Vision</p>
                     <p className="text-sm text-white/80">To be the most trusted strategic partner and bridge for global businesses entering and scaling in the Indian market.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Ready to explore the Indian market?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let's discuss your expansion goals and how we can help you achieve them with minimized risk and maximized clarity.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-primary text-white rounded-full px-10 h-14 text-lg hover:bg-primary/90 shadow-xl shadow-primary/20")}>
            Talk to Us
          </Link>
        </div>
      </section>
    </div>
  );
}
