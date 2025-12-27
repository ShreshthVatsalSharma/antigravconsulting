import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-heading font-bold tracking-tight mb-4 block">
              AntiGrav
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Strategic market-entry partners helping global businesses understand, enter, and expand in India. Founder-led, data-driven, and execution-oriented.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p className="text-muted-foreground">Email: <a href="mailto:info@antigravconsulting.com" className="hover:text-white transition-colors">info@antigravconsulting.com</a></p>
              <p className="text-muted-foreground">Location: India (Ranchi / Delhi)</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Legal Notice</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AntiGrav Consulting. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Trust.</p>
        </div>
      </div>
    </footer>
  );
}
