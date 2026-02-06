import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, Bell } from 'lucide-react';
import './PageStyles.css';

const Privacy = () => {
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
            <Shield size={48} />
          </div>
          <h1 className="page-title">Privacy Policy</h1>
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
            <h2>Introduction</h2>
            <p>
              Welcome to Radius. We are committed to protecting your privacy and being transparent 
              about how we handle your data. This Privacy Policy explains what information we collect, 
              how we use it, and your rights regarding your personal data.
            </p>
            <p>
              <strong>Privacy is fundamental to Radius.</strong> Unlike traditional social apps, we 
              don't track your location via GPS, we don't sell your data, and we minimize data 
              collection wherever possible.
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <Database size={24} />
            </div>
            <h2>Information We Collect</h2>
            
            <h3>1. Information You Provide</h3>
            <ul className="highlight-list">
              <li><strong>Account Information:</strong> Email address, display name, profile photo, bio, and date of birth (to verify age requirements)</li>
              <li><strong>Profile Data:</strong> Gender, interests, and other optional profile fields you choose to share</li>
              <li><strong>User Content:</strong> Messages, photos, voice recordings, and other content you share through the app</li>
              <li><strong>Authentication Data:</strong> If you sign in with Google or Apple, we receive basic profile information from those providers</li>
            </ul>

            <h3>2. Automatically Collected Information</h3>
            <ul className="highlight-list">
              <li><strong>Bluetooth Proximity Data:</strong> Signal strength and proximity information from nearby Radius users (this is NOT GPS location)</li>
              <li><strong>Device Information:</strong> Device model, operating system, app version, unique device identifiers</li>
              <li><strong>Usage Data:</strong> Features you use, time spent in app, interaction patterns (to improve the app experience)</li>
              <li><strong>Push Notification Tokens:</strong> Device tokens to send you notifications (stored securely in Firebase)</li>
              <li><strong>Location Data (Nearby Help Only):</strong> GPS coordinates are collected ONLY for the Nearby Help (SOS) feature when you save home/work locations or request/offer emergency assistance</li>
            </ul>

            <h3>3. Information We DO NOT Collect for General Use</h3>
            <ul className="x-list">
              <li><strong>GPS Location Tracking:</strong> We don't track your GPS coordinates for proximity discovery or general app use</li>
              <li><strong>Location History:</strong> We don't maintain a history of where you've been (except saved locations for Nearby Help)</li>
              <li><strong>Contacts Access:</strong> We don't access or upload your device contacts</li>
              <li><strong>Browsing History:</strong> We don't track your activity outside the app</li>
            </ul>
            
            <div className="info-box">
              <p><strong>Important Note on Location:</strong> Radius uses Bluetooth technology for proximity discovery — NOT GPS. 
              The only feature that uses GPS location is Nearby Help (SOS) for emergency assistance, and this is entirely optional. 
              You can use all other Radius features without ever enabling location permissions.</p>
            </div>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <UserCheck size={24} />
            </div>
            <h2>How We Use Your Information</h2>
            
            <h3>Core App Functions</h3>
            <ul>
              <li>Enable Bluetooth-based proximity discovery between users</li>
              <li>Facilitate messaging and connections between users who mutually accept</li>
              <li>Create and manage user profiles visible to other Radius users</li>
              <li>Operate features like Guess Me, group chats, and location-based groups</li>
              <li>Enable Nearby Help (SOS) feature using GPS location for emergency assistance</li>
            </ul>

            <h3>App Improvement & Safety</h3>
            <ul>
              <li>Analyze usage patterns to improve features and user experience</li>
              <li>Detect and prevent spam, abuse, and fraudulent activity</li>
              <li>Enforce our Terms of Service and community guidelines</li>
              <li>Debug issues and provide technical support</li>
            </ul>

            <h3>Communications</h3>
            <ul>
              <li>Send push notifications for new messages, connections, and app activity</li>
              <li>Send important service announcements and updates</li>
              <li>Respond to your support requests and feedback</li>
            </ul>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <Eye size={24} />
            </div>
            <h2>Information Sharing & Disclosure</h2>
            
            <h3>With Other Users</h3>
            <p>
              Your public profile (name, photo, bio, interests) is visible to other authenticated 
              Radius users. Your proximity status is only visible to nearby users when you're 
              actively using the app. Messages and content are shared with users you're connected with.
            </p>

            <h3>With Service Providers</h3>
            <p>We share necessary data with trusted service providers who help us operate Radius:</p>
            <ul>
              <li><strong>Firebase (Google):</strong> Authentication, database, storage, and push notifications</li>
              <li><strong>Cloud Infrastructure:</strong> Hosting and data storage</li>
            </ul>
            <p>
              These providers are contractually obligated to protect your data and only use it 
              for specified purposes.
            </p>

            <h3>We DO NOT Sell Your Data</h3>
            <p>
              <strong>Radius does not sell, rent, or trade your personal information to third parties 
              for marketing purposes. Ever.</strong>
            </p>

            <h3>Legal Requirements</h3>
            <p>
              We may disclose information if required by law, court order, or to protect the rights, 
              safety, and security of Radius, our users, or others.
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <Lock size={24} />
            </div>
            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data:
            </p>
            <ul>
              <li>End-to-end encryption for sensitive operations</li>
              <li>Secure authentication via Firebase Authentication</li>
              <li>Firestore security rules to prevent unauthorized access</li>
              <li>Regular security audits and updates</li>
              <li>Encrypted data transmission (HTTPS/TLS)</li>
            </ul>
            <p>
              While we take security seriously, no system is 100% secure. We encourage you to 
              use strong passwords and be mindful of what you share.
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">
              <Bell size={24} />
            </div>
            <h2>Your Rights & Choices</h2>
            
            <h3>Access & Control</h3>
            <ul>
              <li><strong>Profile Management:</strong> Edit your profile information anytime in app settings</li>
              <li><strong>Data Access:</strong> Request a copy of your data by contacting us</li>
              <li><strong>Data Deletion:</strong> Delete your account and associated data in app settings</li>
              <li><strong>Notification Control:</strong> Manage push notification preferences in settings</li>
              <li><strong>Blocking:</strong> Block users to prevent them from seeing your profile or contacting you</li>
            </ul>

            <h3>California Privacy Rights</h3>
            <p>
              California residents have additional rights under CCPA, including the right to know 
              what personal information is collected, request deletion, and opt out of data sales 
              (though we don't sell data).
            </p>

            <h3>European Union Rights (GDPR)</h3>
            <p>
              EU users have rights including data portability, right to be forgotten, right to 
              rectification, and right to object to processing. Contact us to exercise these rights.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide services:
            </p>
            <ul>
              <li>Profile data is retained while your account exists</li>
              <li>Messages are retained unless you delete them</li>
              <li>Deleted content is typically removed within 30 days</li>
              <li>Some data may be retained longer for legal compliance or dispute resolution</li>
              <li>Anonymous usage data may be retained indefinitely for analytics</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Children's Privacy</h2>
            <p>
              Radius is not intended for users under 13 years of age. We do not knowingly collect 
              information from children under 13. If we learn we have collected such information, 
              we will delete it promptly. Parents who believe we may have information about a child 
              under 13 should contact us immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>International Data Transfers</h2>
            <p>
              Radius operates globally, and your information may be transferred to and processed 
              in countries other than your own. We ensure appropriate safeguards are in place for 
              international transfers, including standard contractual clauses where applicable.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material 
              changes via email or in-app notification. Your continued use of Radius after changes 
              indicates acceptance of the updated policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your data, contact us at:
            </p>
            <p className="contact-info">
              <strong>Email:</strong> <a href="mailto:radius.codeshowoff@gmail.com">radius.codeshowoff@gmail.com</a>
            </p>
            <p>
              We take privacy concerns seriously and will respond to your inquiry as quickly as possible.
            </p>
          </section>

          <section className="legal-section">
            <h2>Summary: Our Privacy Commitment</h2>
            <div className="privacy-summary">
              <div className="summary-item">
                <Shield size={20} />
                <span>No GPS tracking — only Bluetooth proximity</span>
              </div>
              <div className="summary-item">
                <Lock size={20} />
                <span>We never sell your data</span>
              </div>
              <div className="summary-item">
                <UserCheck size={20} />
                <span>You control what you share</span>
              </div>
              <div className="summary-item">
                <Database size={20} />
                <span>Minimal data collection</span>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
