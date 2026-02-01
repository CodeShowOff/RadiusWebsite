import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bluetooth, Users, Sparkles, ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    
    if (isAndroid) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.radius.app';
    } else if (isIOS) {
      window.location.href = 'https://apps.apple.com/app/radius/id123456789';
    } else {
      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Bluetooth, delay: 0, x: -120, y: -80 },
    { Icon: Users, delay: 0.2, x: 120, y: -60 },
    { Icon: Sparkles, delay: 0.4, x: -100, y: 80 },
  ];

  return (
    <section className="hero" ref={ref}>
      {/* Background Elements */}
      <div className="hero-bg">
        <motion.div 
          className="gradient-orb orb-1"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="gradient-orb orb-2"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="gradient-orb orb-3"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="grid-overlay" />
      </div>

      <motion.div className="hero-content" style={{ y, opacity }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Users size={14} />
                <span>Connect, Chat & Build Community</span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Your Social Hub
                <br />
                <span className="gradient-text">For Real Connections</span>
              </motion.h1>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover people nearby, join group discussions worldwide, 
                help your community, and chat with rich media. Privacy-first 
                social networking without the tracking.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  className="btn-primary"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download App
                </motion.button>
                <motion.a
                  href="#how-it-works"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See How It Works
                  <ArrowRight size={18} />
                </motion.a>
              </motion.div>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Privacy Focused</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-number">Rich</span>
                  <span className="stat-label">Media Messaging</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-number">Groups</span>
                  <span className="stat-label">Nearby & Global</span>
                </div>
              </motion.div>
            </div>

            <div className="hero-visual">
              <motion.div
                className="phone-mockup"
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="app-header">
                      <span className="app-title">Nearby</span>
                      <div className="app-icons">
                        <div className="scan-indicator">
                          <motion.div 
                            className="scan-pulse"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="user-list">
                      {['Sarah M.', 'Alex K.', 'Jordan T.', 'Riley P.'].map((name, i) => (
                        <motion.div
                          key={name}
                          className="user-card"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + i * 0.15 }}
                        >
                          <div className="user-avatar" style={{ background: ['#8B5CF6', '#06B6D4', '#F472B6', '#10B981'][i] }}>
                            {name[0]}
                          </div>
                          <div className="user-info">
                            <span className="user-name">{name}</span>
                            <span className="user-distance">{['Very close', 'Nearby', 'Nearby', 'Far'][i]}</span>
                          </div>
                          <div className={`proximity-indicator ${['very-close', 'nearby', 'nearby', 'far'][i]}`}>
                            <div className="dot" />
                            <div className="dot" />
                            <div className="dot" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                  <motion.div
                    key={index}
                    className="floating-icon"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      opacity: { delay: delay + 0.5, duration: 0.4 },
                      scale: { delay: delay + 0.5, duration: 0.4 },
                      y: { delay: delay + 0.9, duration: 3, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  >
                    <Icon size={20} />
                  </motion.div>
                ))}

                {/* Radar rings */}
                <div className="radar-rings">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="radar-ring"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: [0.5, 1.5], opacity: [0.5, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="scroll-dot"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
