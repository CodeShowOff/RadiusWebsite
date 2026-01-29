import { useRef } from 'react';
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
  Bell
} from 'lucide-react';
import './Features.css';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Bluetooth,
      title: 'Proximity Discovery',
      description: 'Find people nearby using Bluetooth LE technology. See who\'s close, who\'s nearby, and who\'s just in range — all without GPS.',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    },
    {
      icon: Gamepad2,
      title: 'Guess Me Game',
      description: 'Start anonymous conversations with nearby users. Chat, connect, and try to guess who they are before revealing identities.',
      color: '#F472B6',
      gradient: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)',
    },
    {
      icon: MessageCircle,
      title: 'Rich Messaging',
      description: 'Send texts, voice messages, images, stickers, and documents. Full-featured chat with read receipts and notifications.',
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
    },
    {
      icon: Users,
      title: 'Mutual Connections',
      description: 'Both users must accept to form a connection. No unwanted messages, no spam — just genuine interactions.',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    },
    {
      icon: MapPin,
      title: 'Location Groups',
      description: 'Join community groups anchored to your city or region. Find local events, discussions, and like-minded people.',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'No location tracking, no data selling. Your proximity is shared only when you\'re physically there.',
      color: '#EF4444',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="features" className="features-section" ref={ref}>
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Features</span>
          <h2 className="section-title">
            Everything you need to
            <span className="gradient-text"> connect nearby</span>
          </h2>
          <p className="section-description">
            Radius combines powerful features with simplicity, giving you the tools
            to discover and build meaningful connections with people around you.
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px ${feature.color}20`,
              }}
            >
              <div 
                className="feature-icon"
                style={{ background: feature.gradient }}
              >
                <feature.icon size={24} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              
              <div className="feature-glow" style={{ background: feature.color }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Highlight */}
        <motion.div
          className="feature-highlight"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="highlight-content">
            <h3>Full-Featured Chat Experience</h3>
            <p>
              Everything you expect from a modern messenger, designed for spontaneous connections.
            </p>
            <div className="highlight-features">
              <div className="highlight-item">
                <Mic size={18} />
                <span>Voice Messages</span>
              </div>
              <div className="highlight-item">
                <Image size={18} />
                <span>Photo Sharing</span>
              </div>
              <div className="highlight-item">
                <Bell size={18} />
                <span>Push Notifications</span>
              </div>
            </div>
          </div>
          <div className="highlight-visual">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
