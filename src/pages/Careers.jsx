import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Heart, Rocket } from 'lucide-react';
import './PageStyles.css';

const Careers = () => {
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
            <Briefcase size={48} />
          </div>
          <h1 className="page-title">Careers at Radius</h1>
          <p className="page-subtitle">
            Join us in building the future of proximity-based social connections
          </p>
        </div>
      </motion.div>

      <div className="container page-content">
        <motion.section 
          className="content-section coming-soon-main"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="coming-soon-icon">
            <Rocket size={64} />
          </div>
          <h2>We're Building Something Special</h2>
          <p>
            Radius is in its early stages, and we're focused on creating the best possible 
            experience for our users. While we don't have open positions at the moment, 
            we're always interested in connecting with talented individuals who share our vision.
          </p>
        </motion.section>

        <motion.section 
          className="values-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>What We Look For</h2>
          <div className="values-container">
            <div className="value-card">
              <Sparkles className="value-icon" />
              <h3>Innovation</h3>
              <p>
                We value creative thinkers who push boundaries and aren't afraid to 
                challenge the status quo.
              </p>
            </div>
            <div className="value-card">
              <Heart className="value-icon" />
              <h3>Empathy</h3>
              <p>
                Understanding user needs and building with empathy is at the core of 
                everything we do.
              </p>
            </div>
            <div className="value-card">
              <Briefcase className="value-icon" />
              <h3>Excellence</h3>
              <p>
                We're committed to quality and continuous improvement in all aspects 
                of our work.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Stay in Touch</h2>
          <p>
            Interested in future opportunities or want to learn more about our team? 
            We'd love to hear from you. Send us your resume and a brief introduction 
            to stay on our radar for future openings.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="primary-button">Contact Us</a>
            <a href="https://github.com/CodeShowOff" target="_blank" rel="noopener noreferrer" className="secondary-button">
              View Our GitHub
            </a>
          </div>
        </motion.section>

        <motion.section 
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2>Coming Soon</h2>
          <p>
            As Radius grows, we'll be opening positions across engineering, design, 
            marketing, and community management. Check back here or follow us on social 
            media for updates.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default Careers;
