import { motion } from 'framer-motion';
import { Cookie, Info, Shield, Settings } from 'lucide-react';
import './PageStyles.css';

const Cookies = () => {
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
            <Cookie size={48} />
          </div>
          <h1 className="page-title">Cookie Policy</h1>
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
            <div className="section-icon">
              <Info size={24} />
            </div>
            <h2>Introduction</h2>
            <p>
              This Cookie Policy explains how Radius uses cookies and similar technologies. 
              Currently, the Radius mobile application <strong>does not use cookies</strong> 
              in the traditional web sense.
            </p>
            <p>
              This policy primarily applies to our website (radiusconnect.tech) and explains 
              what technologies might be used in the future as we expand our services.
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <Cookie size={24} />
            </div>
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that websites place on your device to store information 
              about your preferences and activity. They help websites remember you and provide a 
              better experience.
            </p>
            <p>
              Mobile apps like Radius typically don't use cookies, but they may use similar 
              technologies like local storage, preferences, and device identifiers.
            </p>
          </section>

          <section className="legal-section">
            <h2>Current State: No Cookies</h2>
            <div className="no-cookies-notice">
              <Shield size={32} />
              <h3>Radius Mobile App: Cookie-Free</h3>
              <p>
                The Radius mobile application <strong>does not use cookies</strong>. We store 
                necessary data locally on your device using secure app storage mechanisms provided 
                by iOS and Android.
              </p>
            </div>

            <h3>What We Store Locally</h3>
            <p>
              While we don't use cookies, the app stores some information locally on your device:
            </p>
            <ul className="highlight-list">
              <li><strong>Authentication Tokens:</strong> To keep you logged in securely</li>
              <li><strong>App Preferences:</strong> Your settings and preferences (theme, notifications, etc.)</li>
              <li><strong>Cached Data:</strong> Temporary data to improve performance (images, profiles)</li>
              <li><strong>Device Tokens:</strong> For push notifications</li>
            </ul>
            <p>
              This data is stored securely on your device and can be cleared by uninstalling the 
              app or clearing app data in your device settings.
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <Settings size={24} />
            </div>
            <h2>Website Cookies</h2>
            <p>
              Our website (radiusconnect.tech) currently uses minimal cookies:
            </p>

            <h3>Essential Cookies</h3>
            <ul>
              <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
              <li><strong>Preference Cookies:</strong> Remember your language and region settings</li>
            </ul>

            <h3>Analytics (Future)</h3>
            <p>
              We may implement analytics cookies in the future to understand how visitors use our website:
            </p>
            <ul>
              <li>Page views and navigation patterns</li>
              <li>Time spent on pages</li>
              <li>Device and browser information</li>
              <li>Referral sources</li>
            </ul>
            <p>
              If we implement analytics, we'll update this policy and provide opt-out options.
            </p>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>
              While we don't directly use cookies, some third-party services we rely on may use 
              their own cookies or similar technologies:
            </p>

            <h3>Firebase (Google)</h3>
            <p>
              We use Firebase for authentication, database, and storage. Firebase may use cookies 
              and identifiers for service functionality. See 
              <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer"> Google's Cookie Policy</a> 
              for details.
            </p>

            <h3>Content Delivery Network (CDN)</h3>
            <p>
              Our website uses CDN services to deliver content faster. CDNs may use cookies for 
              performance optimization.
            </p>
          </section>

          <section className="legal-section">
            <h2>Your Choices & Control</h2>
            
            <h3>Browser Cookie Controls</h3>
            <p>
              Most browsers allow you to control cookies through settings:
            </p>
            <ul>
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Clear cookies after browsing sessions</li>
              <li>Receive alerts when cookies are set</li>
            </ul>
            <p>
              Note: Blocking all cookies may affect website functionality.
            </p>

            <h3>Mobile App Data</h3>
            <p>
              To clear data stored by the Radius app:
            </p>
            <ul>
              <li><strong>iOS:</strong> Settings → Radius → Clear Cache (if available) or uninstall app</li>
              <li><strong>Android:</strong> Settings → Apps → Radius → Storage → Clear Data</li>
            </ul>
            <p>
              Clearing data will log you out and reset your preferences.
            </p>

            <h3>Opt-Out Options</h3>
            <p>
              If we implement analytics in the future, we will provide:
            </p>
            <ul>
              <li>Cookie consent banner with opt-in/opt-out options</li>
              <li>Clear instructions for disabling analytics</li>
              <li>Respect for "Do Not Track" browser signals (if implemented)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              As Radius evolves, our use of cookies and similar technologies may change. We will 
              update this Cookie Policy accordingly and notify you of material changes through:
            </p>
            <ul>
              <li>In-app notifications</li>
              <li>Email announcements</li>
              <li>Website banner notices</li>
            </ul>
            <p>
              We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="legal-section">
            <h2>More Information</h2>
            <p>
              To learn more about online privacy and cookies, visit:
            </p>
            <ul>
              <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
              <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
              <li><a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              Questions about cookies or data storage? Contact us at:
            </p>
            <p className="contact-info">
              <strong>Email:</strong> <a href="mailto:radius.codeshowoff@gmail.com">radius.codeshowoff@gmail.com</a>
            </p>
          </section>

          <section className="legal-section cookie-summary">
            <h2>Summary</h2>
            <div className="summary-box">
              <Shield size={24} />
              <div>
                <h3>The Bottom Line on Cookies</h3>
                <ul className="check-list">
                  <li>Radius mobile app doesn't use cookies</li>
                  <li>Website uses minimal essential cookies only</li>
                  <li>No advertising or tracking cookies currently</li>
                  <li>You control your data and can clear it anytime</li>
                  <li>We'll notify you if this changes in the future</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="legal-section related-policies">
            <h2>Related Policies</h2>
            <div className="policy-links">
              <a href="/privacy" className="policy-link">
                <Shield size={20} />
                Privacy Policy
              </a>
              <a href="/terms" className="policy-link">
                <Info size={20} />
                Terms of Service
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
