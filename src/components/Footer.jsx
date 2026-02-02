import { motion } from 'framer-motion';
import { Radio, Twitter, Instagram, Github, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Radius Features', href: '#features' },
      { name: 'How Radius Works', href: '#how-it-works' },
      { name: 'Download Radius', href: '#download' },
      { name: 'Radius FAQ', href: '#faq' },
    ],
    Company: [
      { name: 'About Radius', href: '#' },
      { name: 'Radius Blog', href: '#' },
      { name: 'Careers at Radius', href: '#' },
      { name: 'Contact Radius', href: 'mailto:hello@radius.app' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { Icon: Twitter, href: 'https://twitter.com/radiusapp', label: 'Follow Radius on Twitter' },
    { Icon: Instagram, href: 'https://instagram.com/radiusapp', label: 'Follow Radius on Instagram' },
    { Icon: Github, href: 'https://github.com/radiusapp', label: 'Radius on GitHub' },
  ];

  return (
    <footer className="footer" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-glow" aria-hidden="true" />
      
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Radius" />
            <meta itemProp="url" content="https://radius.app" />
            <motion.a 
              href="#" 
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
              aria-label="Radius - Home"
              itemProp="url"
            >
              <img src="/app_icon.png" alt="Radius App Logo" className="logo-icon" />
              <span itemProp="name">Radius</span>
            </motion.a>
            
            <p className="footer-tagline" itemProp="description">
              <strong>Radius</strong> - Discover genuine connections with people around you. 
              Privacy-first social discovery powered by Bluetooth. Download Radius free on iOS and Android.
            </p>

            <nav className="social-links" aria-label="Radius social media links">
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
                  itemProp="sameAs"
                >
                  <Icon size={20} aria-hidden="true" />
                </motion.a>
              ))}
            </nav>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} className="footer-links" aria-label={`${category} links`}>
              <h4>{category}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Radius App. All rights reserved. | <strong>Radius</strong> - Meet People Around You
          </p>
          <p className="made-with">
            Made with <Heart size={14} className="heart" aria-label="love" /> for real connections
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
