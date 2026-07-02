import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Natural Grains | Premium Rice Manufacturer" },
      { name: "description", content: "Privacy Policy for Natural Grains" },
    ],
  }),
});

function PrivacyPolicy() {
  return (
    <div className="bg-canvas min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow py-32 md:py-40">
        <div className="mx-auto max-w-4xl px-6 prose prose-ink prose-headings:font-display prose-h1:text-4xl prose-h1:mb-8 prose-h1:text-ink prose-a:text-gold hover:prose-a:text-ink transition-colors">
          <h1 className="text-4xl md:text-5xl font-display text-ink mb-12">Privacy Policy</h1>
          
          <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest mb-12">
            <strong>Effective Date:</strong> June 29, 2026
          </p>

          <p>
            At <strong>Natural Grains</strong>, we are committed to protecting the privacy and personal information of our customers, business partners, and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or contact us through our inquiry forms.
          </p>

          <p>
            By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy.
          </p>

          <hr className="my-12 border-ink/10" />

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide when submitting an inquiry or contacting us, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-ink/80">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company or Organization Name (if applicable)</li>
            <li>Country or Location</li>
            <li>Business Inquiry Details</li>
            <li>Any additional information you choose to provide</li>
          </ul>

          <p>We may also automatically collect certain technical information, including:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-ink/80">
            <li>IP Address</li>
            <li>Browser Type and Version</li>
            <li>Device Information</li>
            <li>Operating System</li>
            <li>Referring Website</li>
            <li>Pages Visited</li>
            <li>Date and Time of Visit</li>
            <li>Website Usage Analytics</li>
          </ul>

          <hr className="my-12 border-ink/10" />

          <h2>2. How We Use Your Information</h2>
          <p>Natural Grains may use your information to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-ink/80">
            <li>Respond to inquiries and customer requests.</li>
            <li>Provide information about our rice products and services.</li>
            <li>Communicate regarding distributorships, wholesale orders, export opportunities, or business partnerships.</li>
            <li>Improve our website, products, and customer experience.</li>
            <li>Analyze website performance and visitor engagement.</li>
            <li>Maintain internal business records.</li>
            <li>Comply with applicable legal and regulatory obligations.</li>
          </ul>
          <p>We only process personal information for legitimate business purposes.</p>

          <hr className="my-12 border-ink/10" />

          <h2>3. Information We Do Not Collect</h2>
          <p>
            Our website is designed to promote our brand and facilitate business inquiries. We do <strong>not</strong> collect or process:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-ink/80">
            <li>Credit or Debit Card Information</li>
            <li>Banking Details</li>
            <li>Payment Information</li>
            <li>User Account Credentials</li>
            <li>Financial Information</li>
          </ul>
          <p>No online purchases or payment transactions are conducted through this website.</p>

          <hr className="my-12 border-ink/10" />

          <h2>4. Cookies and Analytics</h2>
          <p>Our website may use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-ink/80">
            <li>Enhance your browsing experience.</li>
            <li>Remember website preferences.</li>
            <li>Analyze website traffic and performance.</li>
            <li>Improve functionality and user experience.</li>
          </ul>
          <p>
            You may choose to disable cookies through your browser settings; however, certain website features may not function as intended.
          </p>

          <hr className="my-12 border-ink/10" />

          <h2>5. Sharing of Information</h2>
          <p>Natural Grains respects your privacy and does not sell, rent, or trade your personal information.</p>
          <p>Your information may be shared only:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-ink/80">
            <li>With trusted service providers assisting in website operations or business services.</li>
            <li>When required by applicable laws, regulations, or legal processes.</li>
            <li>To protect the rights, property, or safety of Natural Grains, our customers, or the public.</li>
          </ul>
          <p>All authorized service providers are expected to maintain appropriate confidentiality and security standards.</p>

          <hr className="my-12 border-ink/10" />

          <h2>6. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and organizational safeguards to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p>
            Although we strive to use commercially accepted security measures, no method of internet transmission or electronic storage can be guaranteed to be completely secure.
          </p>

          <hr className="my-12 border-ink/10" />

          <h2>7. Data Retention</h2>
          <p>We retain personal information only for as long as necessary to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-ink/80">
            <li>Respond to inquiries and business requests.</li>
            <li>Maintain customer and business relationships.</li>
            <li>Fulfill legal, contractual, or regulatory obligations.</li>
            <li>Resolve disputes and enforce our policies.</li>
          </ul>
          <p>When personal information is no longer required, it is securely deleted or anonymized where appropriate.</p>

          <hr className="my-12 border-ink/10" />

          <h2>8. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites for your convenience.</p>
          <p>
            Natural Grains is not responsible for the privacy practices, security, or content of external websites. We encourage visitors to review the privacy policies of any third-party websites they access.
          </p>

          <hr className="my-12 border-ink/10" />

          <h2>9. Your Rights</h2>
          <p>Subject to applicable laws, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-ink/80">
            <li>Access the personal information we hold about you.</li>
            <li>Request corrections to inaccurate or incomplete information.</li>
            <li>Request deletion of your personal information where legally applicable.</li>
            <li>Withdraw consent for communications, where applicable.</li>
            <li>Request information regarding the processing of your personal data.</li>
          </ul>
          <p>Requests may be submitted using the contact information provided below.</p>

          <hr className="my-12 border-ink/10" />

          <h2>10. Children's Privacy</h2>
          <p>
            Our website is intended for business and general informational purposes and is not directed toward children under the age of 13 (or the applicable age required by local law).
          </p>
          <p>We do not knowingly collect personal information from children.</p>

          <hr className="my-12 border-ink/10" />

          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            Natural Grains reserves the right to update or modify this Privacy Policy at any time to reflect changes in our business practices, legal requirements, or website functionality.
          </p>
          <p>
            Any revisions will be posted on this page along with an updated Effective Date. Continued use of the website after changes are published constitutes acceptance of the revised Privacy Policy.
          </p>

          <hr className="my-12 border-ink/10" />

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact us:
          </p>
          <div className="bg-ink/5 p-6 rounded-lg mt-6">
            <p className="mb-2"><strong>Natural Grains</strong></p>
            <p className="mb-2"><strong>Address:</strong> Dhule, Maharashtra, India</p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:greenfieldindustriess@gmail.com" className="text-gold hover:underline">
                greenfieldindustriess@gmail.com
              </a>
            </p>
            <p className="mb-2"><strong>Customer Care:</strong> +91 95529 55990</p>
            <p><strong>Business Hours:</strong> Monday – Friday</p>
          </div>

          <p className="mt-12 text-sm text-muted-foreground">
            <strong>Last Updated:</strong> June 29, 2026
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
