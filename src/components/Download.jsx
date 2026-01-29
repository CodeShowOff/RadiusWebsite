import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Apple, Play, Smartphone, QrCode } from 'lucide-react';
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
      window.location.href = 'https://play.google.com/store/apps/details?id=com.radius.app';
    } else if (platform === 'ios' || (platform === 'auto' && isIOS)) {
      window.location.href = 'https://apps.apple.com/app/radius/id123456789';
    } else if (platform === 'auto' && !isMobile) {
      // Show QR code or scroll to store links
      alert('Scan the QR code with your phone to download Radius!');
    }
  };

  return (
    <section id="download" className="download-section" ref={ref}>
      <div className="download-bg">
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
            <Smartphone size={16} />
            <span>Available on iOS & Android</span>
          </motion.div>

          <h2 className="download-title">
            Ready to meet people
            <br />
            <span className="gradient-text">around you?</span>
          </h2>

          <p className="download-description">
            Download Radius now and start discovering genuine connections 
            in your vicinity. It's free, private, and takes seconds to set up.
          </p>

          <div className="download-buttons">
            <motion.button
              className="download-btn primary"
              onClick={() => handleDownload('auto')}
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Download size={22} />
              <div className="btn-text">
                <span className="btn-label">Download Now</span>
                <span className="btn-sublabel">Free on your device</span>
              </div>
            </motion.button>
          </div>

          <div className="store-buttons">
            <motion.a
              href="https://apps.apple.com/app/radius/id123456789"
              className="store-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Apple size={28} />
              <div className="store-text">
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.radius.app"
              className="store-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play size={28} fill="currentColor" />
              <div className="store-text">
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </motion.a>
          </div>

          <motion.div
            className="qr-section"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="qr-divider">
              <span>or scan to download</span>
            </div>
            <div className="qr-code">
              <QrCode size={100} strokeWidth={1} />
              <div className="qr-overlay">
                <span>📱</span>
              </div>
            </div>
            <p className="qr-hint">Point your phone camera at the QR code</p>
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
