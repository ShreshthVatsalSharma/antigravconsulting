export default function PrivacyPolicy() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg text-muted-foreground space-y-8 max-w-none">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">1. Introduction</h2>
              <p>
                AntiGrav Consulting ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you use our website and services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">2. Information We Collect</h2>
              <p>
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, company name, phone number, and any other information you provide through our contact forms.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent on pages, and referral sources.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze site traffic.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide consulting services.</li>
                <li>Send you updates about our services and market insights.</li>
                <li>Improve our website and user experience.</li>
                <li>Comply with legal obligations.</li>
                <li>Prevent fraudulent activity and enhance security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">4. Data Protection</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. However, no transmission over the internet or electronic storage is 100% secure. We encourage you to take precautions to protect your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">5. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">6. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at info@antigravconsulting.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:info@antigravconsulting.com" className="text-primary hover:underline">info@antigravconsulting.com</a><br/>
                Location: India (Ranchi / Delhi)
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
