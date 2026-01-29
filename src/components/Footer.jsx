import { motion } from 'framer-motion';
import { Radio, Twitter, Instagram, Github, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Download', href: '#download' },
      { name: 'FAQ', href: '#faq' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: 'mailto:hello@radius.app' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { Icon: Twitter, href: 'https://twitter.com/radiusapp', label: 'Twitter' },
    { Icon: Instagram, href: 'https://instagram.com/radiusapp', label: 'Instagram' },
    { Icon: Github, href: 'https://github.com/radiusapp', label: 'GitHub' },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow" />
      
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <motion.a 
              href="#" 
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              <div className="logo-icon">
                <Radio size={24} />
              </div>
              <span>Radius</span>
            </motion.a>
            
            <p className="footer-tagline">
              Discover genuine connections with people around you. 
              Privacy-first social discovery powered by Bluetooth.
            </p>

            <div className="social-links">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-links">
              <h4>{category}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Radius. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={14} className="heart" /> for real connections
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
