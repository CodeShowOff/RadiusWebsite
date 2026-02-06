import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Bluetooth, Users, Sparkles, ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  useEffect(() => {
    let rafId;
    const check = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setIsMobile(window.innerWidth <= 768));
    };
    window.addEventListener('resize', check, { passive: true });
    return () => {
      window.removeEventListener('resize', check);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return isMobile;
};

const Hero = () => {
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();
  const reduceAnimations = isMobile || prefersReduced;
  const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    
    if (isAndroid) {
      // Direct APK download for Android users
      window.location.href = '/Radius.apk';
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

  // Nearby people positions for the 3D animation - evenly distributed
  const nearbyPeople = [
    { id: 1, angle: -90, distance: 140, delay: 0.5, color: '#8B5CF6' },   // Top
    { id: 2, angle: -30, distance: 135, delay: 0.7, color: '#06B6D4' },   // Top-right
    { id: 3, angle: 30, distance: 140, delay: 0.9, color: '#F472B6' },    // Bottom-right
    { id: 4, angle: 150, distance: 135, delay: 1.1, color: '#10B981' },   // Bottom-left
    { id: 5, angle: -150, distance: 140, delay: 1.3, color: '#F59E0B' },  // Top-left
  ];

  return (
    <section className="hero" itemScope itemType="https://schema.org/SoftwareApplication" aria-labelledby="hero-title">
      {/* Background Elements */}
      <div className="hero-bg" aria-hidden="true">
        {!reduceAnimations ? (
          <>
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
          </>
        ) : (
          <>
            <div className="gradient-orb orb-1" />
            <div className="gradient-orb orb-2" />
          </>
        )}
        <div className="grid-overlay" />
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <article className="hero-text">
              <meta itemProp="name" content="Radius" />
              <meta itemProp="applicationCategory" content="SocialNetworkingApplication" />
              <meta itemProp="operatingSystem" content="iOS, Android" />
              <link itemProp="downloadUrl" href="https://apps.apple.com/app/radius/id123456789" />
              <link itemProp="downloadUrl" href="https://play.google.com/store/apps/details?id=com.radius.app" />
              
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Users size={14} aria-hidden="true" />
                <span>Connect, Chat & Build Community</span>
              </motion.div>

              <motion.h1
                id="hero-title"
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                itemProp="headline"
              >
                <span itemProp="name">Radius</span> - Your Social Hub
                <br />
                <span className="gradient-text">For Real Connections</span>
              </motion.h1>

              <motion.p
                className="hero-description mobile-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover people nearby using Bluetooth, join communities worldwide,
                and get emergency help when needed. Chat with rich media — all with privacy-first design.
              </motion.p>
              
              {/* Hidden SEO text for search engines */}
              <p
                className="visually-hidden"
                itemProp="description"
                aria-hidden="true"
              >
                Radius is the leading social discovery app using Bluetooth technology. 
                Connect with people nearby without GPS tracking, join group discussions worldwide, get emergency help with SOS Nearby Help, and chat with rich media. 
                Radius social network offers privacy-first social networking with Bluetooth discovery. Download Radius free on iOS and Android.
              </p>

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
                  aria-label="Download Radius App for free on iOS and Android"
                >
                  <Download size={20} aria-hidden="true" />
                  Download Radius
                </motion.button>
                <motion.a
                  href="#how-it-works"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Learn how Radius social discovery app works"
                >
                  See How Radius Works
                  <ArrowRight size={18} aria-hidden="true" />
                </motion.a>
              </motion.div>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                itemScope itemType="https://schema.org/AggregateRating"
                itemProp="aggregateRating"
              >
                <meta itemProp="ratingValue" content="4.8" />
                <meta itemProp="ratingCount" content="15000" />
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Privacy Focused</span>
                </div>
                <div className="stat-divider" aria-hidden="true" />
                <div className="stat">
                  <span className="stat-number">Rich</span>
                  <span className="stat-label">Media Messaging</span>
                </div>
                <div className="stat-divider" aria-hidden="true" />
                <div className="stat">
                  <span className="stat-number">Groups</span>
                  <span className="stat-label">Nearby & Global</span>
                </div>
              </motion.div>
            </article>

            {/* Desktop Visual - Phone Mockup */}
            <div className="hero-visual desktop-visual">
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
                          <div className="scan-pulse" />
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

                {/* Floating Elements — desktop only, skip animation overhead on mobile */}
                {!reduceAnimations && floatingIcons.map(({ Icon: IconComponent, delay, x, y }, index) => (
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
                    <IconComponent size={20} />
                  </motion.div>
                ))}

                {/* Radar rings — desktop only */}
                {!reduceAnimations && (
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
                )}
              </motion.div>
            </div>

            {/* Mobile Visual - 3D People Animation */}
            <div className="hero-visual mobile-visual">
              <motion.p 
                className="mobile-hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Connect locally and globally through secure, privacy-first social networking.
              </motion.p>
              
              <div className="people-animation-container">
                {/* Neon background text */}
                <div className="neon-background-text" aria-hidden="true">RADIUS</div>
                
                {/* 3D Platform */}
                <div className="animation-platform">
                  {/* Curved connection lines from center to nearby people */}
                  <svg className="connection-svg" viewBox="0 0 420 380">
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    {nearbyPeople.map((person) => {
                      const centerX = 210;
                      const centerY = 200;
                      const endX = centerX + Math.cos((person.angle * Math.PI) / 180) * person.distance;
                      const endY = centerY + Math.sin((person.angle * Math.PI) / 180) * person.distance * 0.6;
                      
                      const midX = (centerX + endX) / 2;
                      const midY = (centerY + endY) / 2 - 40;
                      
                      return (
                        <motion.path
                          key={`line-${person.id}`}
                          d={`M ${centerX} ${centerY} Q ${midX} ${midY} ${endX} ${endY}`}
                          stroke={person.color}
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          filter="url(#glow)"
                          initial={{ opacity: 0, pathLength: 0 }}
                          animate={{ opacity: 0.8, pathLength: 1 }}
                          transition={{ 
                            opacity: { delay: person.delay + 0.8, duration: 0.3 },
                            pathLength: { delay: person.delay + 0.8, duration: 0.5, ease: 'easeOut' }
                          }}
                        />
                      );
                    })}
                  </svg>

                  {/* Scanning rings — use CSS animation, not JS */}
                  <div className="scan-rings">
                    {[1, 2, 3].map((ring) => (
                      <div key={ring} className="scan-ring" />
                    ))}
                  </div>

                  {/* Center Person (You) */}
                  <motion.div 
                    className="person-3d center-person"
                    initial={{ scale: 0, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="person-body">
                      <div className="person-head">
                        <div className="person-face"></div>
                      </div>
                      <div className="person-torso"></div>
                      <div className="person-arms">
                        <div className="person-arm left" />
                        <div className="person-arm right" />
                      </div>
                      <div className="person-legs">
                        <div className="person-leg left" />
                        <div className="person-leg right" />
                      </div>
                    </div>
                    {/* Bluetooth Icon above head — static on mobile */}
                    <div className="bluetooth-indicator">
                      <Bluetooth size={18} />
                    </div>
                    <span className="person-label">You</span>
                  </motion.div>

                  {/* Nearby People */}
                  {nearbyPeople.map((person) => {
                    const x = Math.cos((person.angle * Math.PI) / 180) * person.distance;
                    const y = Math.sin((person.angle * Math.PI) / 180) * person.distance * 0.6;
                    
                    return (
                      <motion.div
                        key={person.id}
                        className="person-3d nearby-person"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(53% + ${y}px)`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: person.delay + 0.3 }}
                      >
                        <div className="person-body small" style={{ '--person-color': person.color }}>
                          <div className="person-head">
                            <div className="person-face"></div>
                          </div>
                          <div className="person-torso"></div>
                          <div className="person-legs">
                            <div className="person-leg left" />
                            <div className="person-leg right" />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Ground shadow */}
                  <div className="ground-plane"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      {!reduceAnimations && (
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
      )}
    </section>
  );
};

export default Hero;
