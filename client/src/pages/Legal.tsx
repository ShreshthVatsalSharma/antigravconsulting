export default function Legal() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">Legal Notice</h1>
          
          <div className="prose prose-lg text-muted-foreground space-y-8 max-w-none">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Company Information</h2>
              <p>
                <strong>AntiGrav Consulting</strong><br/>
                Location: India (Ranchi / Delhi)<br/>
                Email: <a href="mailto:info@antigravconsulting.com" className="text-primary hover:underline">info@antigravconsulting.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Intellectual Property Rights</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of AntiGrav Consulting or its content suppliers and is protected by international copyright laws. Unauthorized use or reproduction of any materials is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">User Responsibilities</h2>
              <p>
                By using this website, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and truthful information.</li>
                <li>Not engage in any activities that are illegal or violate third-party rights.</li>
                <li>Not attempt to gain unauthorized access to the website or its systems.</li>
                <li>Not transmit viruses, malware, or any harmful code.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Liability Disclaimer</h2>
              <p>
                AntiGrav Consulting provides consulting services and information on an "as is" basis. While we strive to provide accurate and reliable information, we make no warranties or guarantees regarding the completeness, accuracy, or usefulness of any information provided. Your reliance on any information from our website is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Consultation Services</h2>
              <p>
                All consulting services are provided subject to our service agreement. Clients are responsible for verifying all information and conducting their own due diligence. AntiGrav Consulting is not liable for any business decisions made based on our advisory services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, AntiGrav Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of this website or our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless AntiGrav Consulting, its officers, directors, and employees from any claims, damages, or expenses arising from your use of the website or violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Contact for Legal Matters</h2>
              <p>
                For any legal inquiries or concerns, please contact us at:
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
