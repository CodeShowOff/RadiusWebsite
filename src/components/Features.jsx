import { useRef, useEffect, useState, useMemo, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Bluetooth, 
  MessageCircle, 
  Users, 
  Shield, 
  Gamepad2, 
  MapPin,
  Mic,
  Image,
  Bell,
  Globe,
  BluetoothSearching,
  HandHeart
} from 'lucide-react';
import './Features.css';

// Memoized feature card to prevent re-renders
const FeatureCard = memo(({ feature, index, isInView, isMobile }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Simplified hover props for mobile
  const hoverProps = useMemo(() => isMobile ? {} : {
    whileHover: { 
      y: -8, 
      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px ${feature.color}20`,
    }
  }, [isMobile, feature.color]);

  return (
    <motion.article
      className="feature-card"
      variants={cardVariants}
      {...hoverProps}
      role="listitem"
      itemScope
      itemType="https://schema.org/ListItem"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content={String(index + 1)} />
      <div 
        className="feature-icon"
        style={{ background: feature.gradient }}
        aria-hidden="true"
      >
        <feature.icon size={24} />
      </div>
      <h3 className="feature-title" itemProp="name">{feature.title}</h3>
      <p className="feature-description" itemProp="description">{feature.description}</p>
      
      {!isMobile && <div className="feature-glow" style={{ background: feature.color }} aria-hidden="true" />}
    </motion.article>
  );
});

FeatureCard.displayName = 'FeatureCard';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  const [currentCard, setCurrentCard] = useState(0);
  
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

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) > 500 || Math.abs(offset) > threshold) {
      if (velocity < 0 || offset < 0) {
        // Swipe left - next card
        setCurrentCard(prev => Math.min(prev + 1, features.length - 1));
      } else {
        // Swipe right - previous card
        setCurrentCard(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const goToCard = (index) => {
    setCurrentCard(index);
  };

  const features = useMemo(() => [
    {
      icon: Bluetooth,
      title: 'Bluetooth Proximity Discovery',
      description: 'Radius finds people nearby using Bluetooth LE technology — no GPS required. See who\'s close, who\'s nearby, and who\'s just in range. Location is only used for SOS Nearby Help.',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    },
    {
      icon: Gamepad2,
      title: 'Radius Guess Me Game',
      description: 'Start anonymous conversations with nearby Radius users. Chat, connect, and try to guess who they are before revealing identities.',
      color: '#F472B6',
      gradient: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)',
    },
    {
      icon: MessageCircle,
      title: 'Rich Messaging in Radius',
      description: 'Send texts, voice messages, images, stickers, and documents. Full-featured Radius chat with read receipts and push notifications.',
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
    },
    {
      icon: Users,
      title: 'Mutual Consent Connections',
      description: 'Both Radius users must accept to form a connection. No unwanted messages, no spam — just genuine interactions.',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    },
    {
      icon: MapPin,
      title: 'Location-Based Radius Groups',
      description: 'Join Radius community groups anchored to your city or region. Find local events, discussions, and like-minded people.',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    },
    {
      icon: Globe,
      title: 'Random Group Chatrooms',
      description: 'Create or discover internet-based Radius groups by topic. Admin-approved membership ensures quality discussions with like-minded people worldwide.',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%)',
    },
    {
      icon: BluetoothSearching,
      title: 'Radius Nearby Groups',
      description: 'Create temporary Bluetooth-based Radius groups for spontaneous meetups. Members automatically join when detected nearby — perfect for events or gatherings.',
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
    },
    {
      icon: HandHeart,
      title: 'Radius Nearby Help',
      description: 'SOS feature using location for emergency assistance. Request or provide help to people nearby. Set home/work locations to get notified when someone needs help in your area.',
      color: '#EC4899',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
    },
    {
      icon: Shield,
      title: 'Privacy First Design',
      description: 'Radius uses Bluetooth for proximity discovery — no GPS tracking. Location is only used for Nearby Help (SOS) feature. We never sell your data.',
      color: '#EF4444',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
    },
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.1,
      },
    },
  }), [isMobile]);

  return (
    <section id="features" className="features-section" ref={ref} aria-labelledby="features-title" itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="name" content="Radius App Features" />
      <meta itemProp="description" content="Complete list of Radius social discovery app features" />
      <meta itemProp="numberOfItems" content="9" />
      <div className="container">
        <motion.header
          className="features-header"
          initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
        >
          <span className="section-label">Radius App Features</span>
          <h2 id="features-title" className="section-title">
            Everything Radius offers for
            <span className="gradient-text"> meaningful connections</span>
          </h2>
          <p className="section-description mobile-hidden">
            From <strong>Bluetooth nearby discovery</strong> to global communities, from one-on-one chats to group discussions,
            <strong> Radius social app</strong> offers a complete social experience that respects your privacy.
          </p>
        </motion.header>

        {/* Desktop: Grid Layout */}
        {!isMobile && (
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            role="list"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                isInView={isInView}
                isMobile={isMobile}
              />
            ))}
          </motion.div>
        )}

        {/* Mobile: Tinder-style Swiper */}
        {isMobile && (
          <div className="features-swiper" role="list">
            <div className="swiper-container">
              <motion.div
                className="swiper-cards"
                animate={{ x: `-${currentCard * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {features.map((feature, index) => (
                  <motion.article
                    key={feature.title}
                    className="feature-card-swiper"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    role="listitem"
                    itemScope
                    itemType="https://schema.org/ListItem"
                    itemProp="itemListElement"
                  >
                    <meta itemProp="position" content={String(index + 1)} />
                    <div 
                      className="feature-icon"
                      style={{ background: feature.gradient }}
                      aria-hidden="true"
                    >
                      <feature.icon size={28} />
                    </div>
                    <h3 className="feature-title" itemProp="name">{feature.title}</h3>
                    <p className="feature-description" itemProp="description">{feature.description}</p>
                    
                    <div className="swiper-card-number">
                      {index + 1} / {features.length}
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>

            {/* Swipe Navigation Dots */}
            <div className="swiper-dots">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`swiper-dot ${currentCard === index ? 'active' : ''}`}
                  onClick={() => goToCard(index)}
                  aria-label={`Go to feature ${index + 1}`}
                  style={{
                    background: currentCard === index ? features[index].color : 'var(--border)',
                  }}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            {currentCard === 0 && (
              <motion.div
                className="swipe-hint"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <span>← Swipe to explore →</span>
              </motion.div>
            )}
          </div>
        )}

        {/* Feature Highlight */}
        <motion.aside
          className="feature-highlight"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          aria-label="Radius messaging features highlight"
        >
          <div className="highlight-content">
            <h3>Full-Featured Radius Chat Experience</h3>
            <p>
              Everything you expect from a modern messenger in <strong>Radius app</strong>, designed for spontaneous connections.
            </p>
            <div className="highlight-features">
              <div className="highlight-item">
                <Mic size={18} aria-hidden="true" />
                <span>Voice Messages</span>
              </div>
              <div className="highlight-item">
                <Image size={18} aria-hidden="true" />
                <span>Photo Sharing</span>
              </div>
              <div className="highlight-item">
                <Bell size={18} aria-hidden="true" />
                <span>Push Notifications</span>
              </div>
            </div>
          </div>
          <div className="highlight-visual" aria-hidden="true">
            <div className="chat-preview">
              <div className="chat-bubble sent">
                <span>Hey! I think I saw you at the coffee shop 👋</span>
              </div>
              <div className="chat-bubble received">
                <span>Haha yeah! The one on Main Street?</span>
              </div>
              <div className="chat-bubble sent">
                <span>Yes! Want to grab a coffee sometime?</span>
              </div>
              <motion.div 
                className="chat-bubble received typing"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Features;
