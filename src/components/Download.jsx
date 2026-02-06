import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Apple, Play, Smartphone } from 'lucide-react';
import './Download.css';

const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleDownload = (platform) => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isMobile = isAndroid || isIOS;

    if (platform === 'android' || (platform === 'auto' && isAndroid)) {
      // Direct APK download for Android
      window.location.href = '/Radius.apk';
    } else if (platform === 'apk') {
      // Direct APK download
      window.location.href = '/Radius.apk';
    } else if (platform === 'ios' || (platform === 'auto' && isIOS)) {
      window.location.href = 'https://apps.apple.com/app/radius/id123456789';
    } else if (platform === 'auto' && !isMobile) {
      // For desktop users, scroll to show all options
      window.scrollBy({ top: 200, behavior: 'smooth' });
    }
  };

  return (
    <section id="download" className="download-section" ref={ref} aria-labelledby="download-title" itemScope itemType="https://schema.org/SoftwareApplication">
      <meta itemProp="name" content="Radius" />
      <meta itemProp="applicationCategory" content="SocialNetworkingApplication" />
      <meta itemProp="operatingSystem" content="iOS, Android" />
      <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="price" content="0" />
        <meta itemProp="priceCurrency" content="USD" />
      </div>
      
      <div className="download-bg" aria-hidden="true">
        <div className="download-gradient-1" />
        <div className="download-gradient-2" />
        <div className="download-grid-overlay" />
      </div>
      
      <div className="container">
        <motion.div
          className="download-content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="download-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Smartphone size={16} aria-hidden="true" />
            <span>Radius Available on iOS & Android</span>
          </motion.div>

          <h2 id="download-title" className="download-title">
            Ready to meet people
            <br />
            <span className="gradient-text">around you with Radius?</span>
          </h2>

          <p className="download-description" itemProp="description">
            <strong>Download Radius</strong> now and start discovering genuine connections 
            in your vicinity. <strong>Radius is free</strong>, private, and takes seconds to set up.
            The best <strong>social discovery app</strong> for meeting people nearby.
          </p>

          <div className="store-buttons">
            <motion.div
              className="store-btn coming-soon"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              aria-label="Radius App Store - Coming Soon"
            >
              <Apple size={28} aria-hidden="true" />
              <div className="store-text">
                <span>Download Radius on the</span>
                <strong>App Store</strong>
              </div>
              <span className="coming-soon-badge">Coming Soon</span>
            </motion.div>

            <motion.div
              className="store-btn coming-soon"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              aria-label="Radius Google Play - Coming Soon"
            >
              <Play size={28} fill="currentColor" aria-hidden="true" />
              <div className="store-text">
                <span>Get Radius on</span>
                <strong>Google Play</strong>
              </div>
              <span className="coming-soon-badge">Coming Soon</span>
            </motion.div>
          </div>

          <motion.div
            className="direct-apk-section"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <p className="download-divider">
              <span>or download APK directly</span>
            </p>
            <motion.button
              onClick={() => handleDownload('apk')}
              className="apk-download-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download Radius APK file directly"
            >
              <Download size={20} aria-hidden="true" />
              <span>Download APK (Android)</span>
            </motion.button>
          </motion.div>

        </motion.div>

        {/* Floating phones decoration */}
        <div className="download-visuals">
          <motion.div
            className="floating-phone left"
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: -5 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="phone-mockup-small">
              <div className="phone-screen-small">
                <div className="mock-header">
                  <div className="mock-avatar" />
                  <div className="mock-name" />
                </div>
                <div className="mock-list">
                  <div className="mock-item" />
                  <div className="mock-item" />
                  <div className="mock-item" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="floating-phone right"
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 5 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="phone-mockup-small">
              <div className="phone-screen-small chat">
                <div className="mock-bubble sent" />
                <div className="mock-bubble received" />
                <div className="mock-bubble sent short" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
