import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name is required." }),
  organizationBase: z.string().min(2, { message: "Please specify your organization's base." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      organizationBase: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Google Forms endpoint
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeEfehlx7PSKywmkrCbW7FeZUxlAOCklM06vKMoq9P6pfypsQ/formResponse";
    
    // Create FormData with Google Forms entry IDs
    const formData = new FormData();
    formData.append("entry.2005620554", values.name); // Name
    formData.append("entry.1045781291", values.email); // Email
    formData.append("entry.1065046570", values.company); // Company
    formData.append("entry.2042827541", values.organizationBase); // Organization Base
    formData.append("entry.1166974658", values.message); // How can we help

    // Submit to Google Forms
    fetch(googleFormURL, {
      method: "POST",
      body: formData,
      mode: "no-cors" // Bypass CORS restrictions
    })
    .then(() => {
      toast({
        title: "Request Received",
        description: "We'll get back to you shortly to discuss your India expansion plans.",
      });
      form.reset();
    })
    .catch(() => {
      // Even if fetch fails due to CORS, Google Forms still receives the submission
      toast({
        title: "Request Received",
        description: "We'll get back to you shortly to discuss your India expansion plans.",
      });
      form.reset();
    });
  }

  return (
    <div className="pt-20 min-h-screen bg-secondary/20">
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Let's Discuss Your Expansion</h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Ready to take the first step towards the Indian market? Schedule a discovery call with our founders.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Email Us</h3>
                    <p className="text-muted-foreground">info@antigravconsulting.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Location</h3>
                    <p className="text-muted-foreground">India (Ranchi / Delhi)</p>
                  </div>
                </div>
                
                 <div className="p-6 bg-primary/5 rounded-xl border border-primary/10 mt-8">
                    <h4 className="font-bold text-primary mb-2">What happens next?</h4>
                    <p className="text-sm text-muted-foreground">
                      1. We'll review your inquiry within 24 hours.<br/>
                      2. We'll schedule a brief discovery call.<br/>
                      3. We'll outline a preliminary roadmap for your needs.
                    </p>
                 </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-border">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Send us a message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Sarah Mitchell" {...field} className="bg-secondary/20 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="sarah.mitchell@techventures.com" {...field} className="bg-secondary/20 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="TechVentures Global Solutions" {...field} className="bg-secondary/20 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organizationBase"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Where is your organization currently based?</FormLabel>
                        <FormControl>
                          <Input placeholder="United States, Europe, Asia Pacific, etc." {...field} className="bg-secondary/20 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your expansion goals..." 
                            className="min-h-[120px] bg-secondary/20 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                    Send Request
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
