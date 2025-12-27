export default function TermsOfService() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg text-muted-foreground space-y-8 max-w-none">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website and services provided by AntiGrav Consulting, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on AntiGrav Consulting's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials.</li>
                <li>Use the materials for any commercial purpose or for any public display.</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                <li>Remove any copyright or other proprietary notations from the materials.</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">3. Disclaimer</h2>
              <p>
                The materials on AntiGrav Consulting's website are provided on an 'as is' basis. AntiGrav Consulting makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">4. Limitations</h2>
              <p>
                In no event shall AntiGrav Consulting or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AntiGrav Consulting's website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on AntiGrav Consulting's website could include technical, typographical, or photographic errors. AntiGrav Consulting does not warrant that any of the materials on the website are accurate, complete, or current.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">6. Links</h2>
              <p>
                AntiGrav Consulting has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AntiGrav Consulting of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">7. Modifications</h2>
              <p>
                AntiGrav Consulting may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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
