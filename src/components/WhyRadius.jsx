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
    { value: 9, suffix: '+', label: 'Core Features' },
    { value: 3, suffix: '', label: 'Group Types' },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'No GPS tracking. Bluetooth for proximity, internet for groups. You control your visibility.',
    },
    {
      icon: Globe,
      title: 'Multiple Discovery Modes',
      description: 'Find people nearby, join global interest groups, or create location-based communities.',
    },
    {
      icon: Lock,
      title: 'Mutual Consent',
      description: 'All connections require acceptance. Groups have admin approval. No spam.',
    },
    {
      icon: Zap,
      title: 'Full-Featured Messaging',
      description: 'Texts, voice messages, photos, stickers, and documents. Everything you need to communicate.',
    },
    {
      icon: Heart,
      title: 'Community Focused',
      description: 'Help nearby users, join group discussions, play games. Build real relationships.',
    },
    {
      icon: Eye,
      title: 'Flexible & Fun',
      description: 'Serious groups or casual chats. Anonymous games or direct connections. Your choice.',
    },
  ];

  return (
    <section id="why-radius" className="why-radius-section" ref={ref} aria-labelledby="why-radius-title">
      <div className="container">
        {/* Stats Section */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          role="list"
          aria-label="Radius app statistics"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              role="listitem"
            >
              <div className="stat-value">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="stat-label-large">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Section */}
        <motion.header
          className="why-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="section-label">Why Choose Radius</span>
          <h2 id="why-radius-title" className="section-title">
            A complete <span className="gradient-text">Radius social experience</span>
          </h2>
          <p className="section-description">
            <strong>Radius app</strong> combines proximity discovery, group communities, rich messaging, 
            and helpful features — all while keeping your privacy intact. The best <strong>social discovery app</strong> available.
          </p>
        </motion.header>

        <div className="benefits-grid" role="list">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -5,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
              }}
              role="listitem"
            >
              <div className="benefit-icon" aria-hidden="true">
                <benefit.icon size={22} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.aside
          className="comparison-section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          aria-label="Comparison between Radius and other apps"
        >
          <div className="comparison-card other">
            <h4>Other Social Apps</h4>
            <ul>
              <li><span className="x" aria-hidden="true">✕</span> Track your GPS location</li>
              <li><span className="x" aria-hidden="true">✕</span> Algorithm decides who you see</li>
              <li><span className="x" aria-hidden="true">✕</span> Data sold to advertisers</li>
              <li><span className="x" aria-hidden="true">✕</span> Fake profiles & bots</li>
              <li><span className="x" aria-hidden="true">✕</span> Match with people miles away</li>
            </ul>
          </div>
          <div className="comparison-divider" aria-hidden="true">
            <span>VS</span>
          </div>
          <div className="comparison-card radius">
            <h4>Radius App</h4>
            <ul>
              <li><span className="check" aria-hidden="true">✓</span> Bluetooth only, no GPS tracking</li>
              <li><span className="check" aria-hidden="true">✓</span> You choose who to connect with</li>
              <li><span className="check" aria-hidden="true">✓</span> Your data stays private</li>
              <li><span className="check" aria-hidden="true">✓</span> Real people, verified nearby</li>
              <li><span className="check" aria-hidden="true">✓</span> Connect with people right here</li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default WhyRadius;
