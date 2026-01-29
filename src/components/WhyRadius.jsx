import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Zap, Eye, Lock, Globe, Heart } from 'lucide-react';
import './WhyRadius.css';

const AnimatedNumber = ({ value, suffix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const duration = 2000;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(easeOut * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const WhyRadius = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 100, suffix: '%', label: 'Privacy Protected' },
    { value: 0, suffix: '', label: 'Location Tracking' },
    { value: 10, suffix: 'm', label: 'Discovery Range' },
    { value: 24, suffix: '/7', label: 'Works Offline' },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'No GPS Required',
      description: 'Uses Bluetooth only. Your location is never tracked or stored.',
    },
    {
      icon: Eye,
      title: 'You\'re in Control',
      description: 'Decide when to be discoverable. Turn off anytime, instantly disappear.',
    },
    {
      icon: Lock,
      title: 'Mutual Consent',
      description: 'Both users must accept. No unwanted messages or spam.',
    },
    {
      icon: Zap,
      title: 'Instant Discovery',
      description: 'Find nearby users in seconds. Real-time proximity detection.',
    },
    {
      icon: Globe,
      title: 'Works Anywhere',
      description: 'Coffee shops, events, campus — anywhere people gather.',
    },
    {
      icon: Heart,
      title: 'Genuine Connections',
      description: 'Meet people you\'re actually near. No fake profiles, no catfishing.',
    },
  ];

  return (
    <section id="why-radius" className="why-radius-section" ref={ref}>
      <div className="container">
        {/* Stats Section */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stat-value">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="stat-label-large">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Section */}
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="section-label">Why Radius</span>
          <h2 className="section-title">
            Built for <span className="gradient-text">real connections</span>
          </h2>
          <p className="section-description">
            Unlike traditional social apps, Radius focuses on what matters: 
            genuine, in-person connections without compromising your privacy.
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -5,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
              }}
            >
              <div className="benefit-icon">
                <benefit.icon size={22} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          className="comparison-section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="comparison-card other">
            <h4>Other Apps</h4>
            <ul>
              <li><span className="x">✕</span> Track your GPS location</li>
              <li><span className="x">✕</span> Algorithm decides who you see</li>
              <li><span className="x">✕</span> Data sold to advertisers</li>
              <li><span className="x">✕</span> Fake profiles & bots</li>
              <li><span className="x">✕</span> Match with people miles away</li>
            </ul>
          </div>
          <div className="comparison-divider">
            <span>VS</span>
          </div>
          <div className="comparison-card radius">
            <h4>Radius</h4>
            <ul>
              <li><span className="check">✓</span> Bluetooth only, no GPS</li>
              <li><span className="check">✓</span> You choose who to connect with</li>
              <li><span className="check">✓</span> Your data stays yours</li>
              <li><span className="check">✓</span> Real people, verified nearby</li>
              <li><span className="check">✓</span> Connect with people right here</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyRadius;
