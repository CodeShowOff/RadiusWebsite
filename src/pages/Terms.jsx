import { motion } from 'framer-motion';
import { FileText, AlertCircle, Users, MessageCircle, Shield, CheckCircle } from 'lucide-react';
import './PageStyles.css';

const Terms = () => {
  return (
    <div className="page-container legal-page">
      <motion.div 
        className="page-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="hero-icon">
            <FileText size={48} />
          </div>
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-subtitle">
            Last Updated: February 7, 2026
          </p>
        </div>
      </motion.div>

      <div className="container page-content legal-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <section className="legal-section">
            <h2>Agreement to Terms</h2>
            <p>
              Welcome to Radius! By accessing or using our app, you agree to be bound by these Terms 
              of Service ("Terms"). If you don't agree to these Terms, please don't use Radius.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and Radius ("we," "us," 
              or "our"). Please read them carefully.
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <CheckCircle size={24} />
            </div>
            <h2>Eligibility</h2>
            <p>
              To use Radius, you must:
            </p>
            <ul>
              <li>Be at least 13 years old (or the minimum age in your country)</li>
              <li>Have the legal capacity to enter into binding agreements</li>
              <li>Not be prohibited from using the service under applicable laws</li>
              <li>Not have been previously banned from Radius</li>
            </ul>
            <p>
              If you're under 18, you must have parental or guardian consent to use Radius.
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <Users size={24} />
            </div>
            <h2>Your Account</h2>
            
            <h3>Account Creation</h3>
            <p>
              You may create an account using email, Google, or Apple Sign-In. You must provide 
              accurate and complete information and keep your account information up to date.
            </p>

            <h3>Account Security</h3>
            <ul>
              <li>You're responsible for maintaining the confidentiality of your account credentials</li>
              <li>You're responsible for all activities that occur under your account</li>
              <li>Notify us immediately if you suspect unauthorized access to your account</li>
              <li>You may not share your account with others or transfer it to anyone</li>
            </ul>

            <h3>Account Termination</h3>
            <p>
              You may delete your account at any time through app settings. We may suspend or 
              terminate your account if you violate these Terms or engage in harmful behavior.
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <MessageCircle size={24} />
            </div>
            <h2>Acceptable Use</h2>
            
            <h3>You May:</h3>
            <ul className="check-list">
              <li>Use Radius to discover and connect with people nearby</li>
              <li>Send messages, photos, and other content to your connections</li>
              <li>Join and participate in groups</li>
              <li>Use features like Guess Me game and Nearby Help</li>
              <li>Share content that is legal and respectful</li>
            </ul>

            <h3>You May NOT:</h3>
            <ul className="x-list">
              <li>Harass, bully, threaten, or intimidate other users</li>
              <li>Post illegal, hateful, violent, or sexually explicit content</li>
              <li>Impersonate others or create fake accounts</li>
              <li>Spam, advertise without permission, or engage in commercial activities without authorization</li>
              <li>Share others' private information without consent</li>
              <li>Use Radius for illegal activities or to promote illegal activities</li>
              <li>Attempt to hack, reverse engineer, or interfere with the app's operations</li>
              <li>Use automated systems (bots, scripts) to access Radius</li>
              <li>Collect user data for unauthorized purposes</li>
              <li>Circumvent geographical, technical, or access restrictions</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Content & Intellectual Property</h2>
            
            <h3>Your Content</h3>
            <p>
              You retain ownership of content you post on Radius ("Your Content"). However, by posting 
              content, you grant us a non-exclusive, worldwide, royalty-free license to:
            </p>
            <ul>
              <li>Store, display, and transmit Your Content to other users as necessary for service operation</li>
              <li>Make backups and technical copies for service reliability</li>
              <li>Analyze content to improve features and detect abuse (in aggregated, anonymized form)</li>
            </ul>
            <p>
              This license ends when you delete your content or account, except for reasonable backup 
              retention periods.
            </p>

            <h3>Content Responsibility</h3>
            <p>
              You're solely responsible for Your Content. You represent that:
            </p>
            <ul>
              <li>You own or have rights to post Your Content</li>
              <li>Your Content doesn't violate third-party rights or laws</li>
              <li>Your Content is accurate (if factual claims are made)</li>
            </ul>

            <h3>Radius Intellectual Property</h3>
            <p>
              All aspects of Radius—including design, code, logos, and features—are owned by us or 
              our licensors and protected by intellectual property laws. You may not copy, modify, 
              distribute, or create derivative works without permission.
            </p>
          </section>

          <section className="legal-section">
            <h2>Content Moderation</h2>
            <p>
              We reserve the right (but have no obligation) to:
            </p>
            <ul>
              <li>Monitor, review, and moderate content</li>
              <li>Remove content that violates these Terms</li>
              <li>Suspend or ban users who violate these Terms</li>
              <li>Report illegal activity to law enforcement</li>
            </ul>
            <p>
              We're not liable for user-generated content but will act on violations brought to our attention.
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <Shield size={24} />
            </div>
            <h2>Privacy & Data</h2>
            <p>
              Your use of Radius is also governed by our <a href="/privacy">Privacy Policy</a>. 
              Key points:
            </p>
            <ul>
              <li>We use Bluetooth for proximity detection, not GPS tracking</li>
              <li>We never sell your data</li>
              <li>You control your profile visibility and data sharing</li>
              <li>Read our full Privacy Policy for details</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>
              Radius uses third-party services (Firebase, cloud providers, etc.). Your use of these 
              services through Radius is subject to their terms and policies. We're not responsible 
              for third-party services.
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <AlertCircle size={24} />
            </div>
            <h2>Disclaimers & Limitations</h2>
            
            <h3>Service "As Is"</h3>
            <p>
              Radius is provided "as is" and "as available" without warranties of any kind, express 
              or implied. We don't guarantee:
            </p>
            <ul>
              <li>Uninterrupted or error-free service</li>
              <li>That all features will work on all devices</li>
              <li>That the service meets your specific needs</li>
              <li>The accuracy or reliability of user-generated content</li>
            </ul>

            <h3>Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Radius and its operators shall not be liable for:
            </p>
            <ul>
              <li>Indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages arising from your use or inability to use Radius</li>
              <li>User conduct or content</li>
              <li>Unauthorized access to your data</li>
            </ul>
            <p>
              In any case, our total liability shall not exceed $100 or the amount you paid us in the 
              past 12 months (whichever is greater).
            </p>

            <h3>User Interactions</h3>
            <p>
              You're solely responsible for your interactions with other users. We're not responsible 
              for disputes between users, though we may assist at our discretion. Exercise caution 
              when meeting people in person.
            </p>
          </section>

          <section className="legal-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold Radius harmless from claims, damages, and expenses 
              (including legal fees) arising from:
            </p>
            <ul>
              <li>Your use of Radius</li>
              <li>Your Content</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of others' rights</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Dispute Resolution</h2>
            
            <h3>Governing Law</h3>
            <p>
              These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict 
              of law principles.
            </p>

            <h3>Arbitration</h3>
            <p>
              Any disputes arising from these Terms or your use of Radius shall be resolved through 
              binding arbitration, except for claims that may be brought in small claims court. 
              You waive your right to a jury trial or class action.
            </p>

            <h3>Informal Resolution</h3>
            <p>
              Before filing a claim, please contact us at 
              <a href="mailto:radius.codeshowoff@gmail.com"> radius.codeshowoff@gmail.com</a> to 
              attempt informal resolution.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be communicated 
              via email or in-app notification. Your continued use after changes constitutes 
              acceptance of the new Terms.
            </p>
            <p>
              If you don't agree to revised Terms, you must stop using Radius and may delete your account.
            </p>
          </section>

          <section className="legal-section">
            <h2>Termination</h2>
            <p>
              Either party may terminate this agreement at any time:
            </p>
            <ul>
              <li><strong>You:</strong> Delete your account through app settings</li>
              <li><strong>Us:</strong> Suspend or terminate accounts that violate these Terms</li>
            </ul>
            <p>
              Upon termination, your right to use Radius ceases immediately. Provisions that should 
              survive termination (like disclaimers, indemnification) will remain in effect.
            </p>
          </section>

          <section className="legal-section">
            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found invalid or unenforceable, that provision will 
              be modified to the minimum extent necessary or severed, and the remaining provisions 
              will remain in full effect.
            </p>
          </section>

          <section className="legal-section">
            <h2>Entire Agreement</h2>
            <p>
              These Terms, along with our Privacy Policy, constitute the entire agreement between 
              you and Radius regarding use of the service.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              Questions about these Terms? Contact us at:
            </p>
            <p className="contact-info">
              <strong>Email:</strong> <a href="mailto:radius.codeshowoff@gmail.com">radius.codeshowoff@gmail.com</a>
            </p>
          </section>

          <section className="legal-section terms-summary">
            <h2>Quick Summary</h2>
            <p>
              While you should read the full Terms, here's a quick overview:
            </p>
            <ul className="highlight-list">
              <li>Be respectful and legal in your use of Radius</li>
              <li>You're responsible for your account and content</li>
              <li>We respect your privacy and don't sell your data</li>
              <li>Service is provided "as is" with limitations on liability</li>
              <li>Contact us if you have questions or concerns</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
