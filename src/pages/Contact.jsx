import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Twitter, Instagram, MapPin } from 'lucide-react';
import './PageStyles.css';

const Contact = () => {
  return (
    <div className="page-container">
      <motion.div 
        className="page-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="hero-icon">
            <MessageCircle size={48} />
          </div>
          <h1 className="page-title">Contact Radius</h1>
          <p className="page-subtitle">
            We'd love to hear from you
          </p>
        </div>
      </motion.div>

      <div className="container page-content">
        <motion.section 
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Get in Touch</h2>
          <p>
            Whether you have questions about Radius, need support, want to provide feedback, 
            or are interested in partnership opportunities, we're here to help.
          </p>
        </motion.section>

        <motion.div 
          className="contact-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact-card primary-contact">
            <div className="contact-icon">
              <Mail size={32} />
            </div>
            <h3>Email Us</h3>
            <p>
              For general inquiries, support, partnerships, or any questions about Radius
            </p>
            <a href="mailto:radius.codeshowoff@gmail.com" className="contact-link">
              radius.codeshowoff@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Twitter size={32} />
            </div>
            <h3>Follow on Twitter</h3>
            <p>
              Stay updated with the latest news, features, and announcements
            </p>
            <a href="https://x.com/CodeShowOff" target="_blank" rel="noopener noreferrer" className="contact-link">
              @CodeShowOff
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Instagram size={32} />
            </div>
            <h3>Instagram</h3>
            <p>
              See behind-the-scenes content and community highlights
            </p>
            <a href="https://www.instagram.com/codeshowoff/" target="_blank" rel="noopener noreferrer" className="contact-link">
              @codeshowoff
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Github size={32} />
            </div>
            <h3>GitHub</h3>
            <p>
              Check out our open source projects and contributions
            </p>
            <a href="https://github.com/CodeShowOff" target="_blank" rel="noopener noreferrer" className="contact-link">
              CodeShowOff
            </a>
          </div>
        </motion.div>

        <motion.section 
          className="content-section contact-info-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>What You Can Contact Us About</h2>
          <div className="contact-topics">
            <div className="topic-item">
              <strong>Support & Help:</strong> Having issues with the app? Need assistance? We're here to help.
            </div>
            <div className="topic-item">
              <strong>Feedback & Suggestions:</strong> Your input helps us improve. Share your ideas and experiences.
            </div>
            <div className="topic-item">
              <strong>Partnerships:</strong> Interested in collaborating with Radius? Let's talk.
            </div>
            <div className="topic-item">
              <strong>Press & Media:</strong> Media inquiries and press kit requests welcome.
            </div>
            <div className="topic-item">
              <strong>Bug Reports:</strong> Found a bug? Help us fix it by reporting it.
            </div>
            <div className="topic-item">
              <strong>Account Issues:</strong> Problems with your account? We'll help you resolve them.
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2>Response Time</h2>
          <p>
            We aim to respond to all inquiries within 24-48 hours during business days. 
            For urgent matters, please indicate "URGENT" in your email subject line.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
