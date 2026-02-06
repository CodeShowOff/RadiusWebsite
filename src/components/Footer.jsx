import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Radio, Twitter, Instagram, Github, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Radius Features', href: '/#features' },
      { name: 'How Radius Works', href: '/#how-it-works' },
      { name: 'Download Radius', href: '/#download' },
      { name: 'Radius FAQ', href: '/#faq' },
    ],
    Company: [
      { name: 'About Radius', href: '/about' },
      { name: 'Radius Blog', href: '/blog' },
      { name: 'Careers at Radius', href: '/careers' },
      { name: 'Contact Radius', href: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { Icon: Twitter, href: 'https://x.com/CodeShowOff', label: 'Follow Radius on Twitter' },
    { Icon: Instagram, href: 'https://www.instagram.com/codeshowoff/', label: 'Follow Radius on Instagram' },
    { Icon: Github, href: 'https://github.com/CodeShowOff', label: 'Radius on GitHub' },
  ];

  return (
    <footer className="footer" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-glow" aria-hidden="true" />
      
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Radius" />
            <meta itemProp="url" content="https://radius.app" />
            <Link to="/">
              <motion.div
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
                aria-label="Radius - Home"
                itemProp="url"
              >
                <img src="/app_icon.png" alt="Radius App Logo" className="logo-icon" />
                <span itemProp="name">Radius</span>
              </motion.div>
            </Link>
            
            <p className="footer-tagline" itemProp="description">
              <strong>Radius</strong> - Discover genuine connections using Bluetooth proximity discovery. 
              Join communities, get emergency help, and chat with rich media. Privacy-first social app. Download Radius free on iOS and Android.
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
                    {link.href.startsWith('/#') ? (
                      <a href={link.href}>{link.name}</a>
                    ) : (
                      <Link to={link.href}>{link.name}</Link>
                    )}
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
