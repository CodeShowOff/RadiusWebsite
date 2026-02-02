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
  Bell,
  Globe,
  BluetoothSearching,
  HandHeart
} from 'lucide-react';
import './Features.css';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Bluetooth,
      title: 'Bluetooth Proximity Discovery',
      description: 'Radius finds people nearby using Bluetooth LE technology. See who\'s close, who\'s nearby, and who\'s just in range — all without GPS tracking.',
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
      description: 'Request or provide help to people in your vicinity through Radius. Get notified when someone nearby needs assistance — build a caring community.',
      color: '#EC4899',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
    },
    {
      icon: Shield,
      title: 'Privacy First Design',
      description: 'Radius never tracks your location or sells data. Your proximity is shared only when you\'re physically there.',
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
    <section id="features" className="features-section" ref={ref} aria-labelledby="features-title" itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="name" content="Radius App Features" />
      <meta itemProp="description" content="Complete list of Radius social discovery app features" />
      <meta itemProp="numberOfItems" content="9" />
      <div className="container">
        <motion.header
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Radius App Features</span>
          <h2 id="features-title" className="section-title">
            Everything Radius offers for
            <span className="gradient-text"> meaningful connections</span>
          </h2>
          <p className="section-description">
            From <strong>Bluetooth nearby discovery</strong> to global communities, from one-on-one chats to group discussions,
            <strong> Radius social app</strong> offers a complete social experience that respects your privacy.
          </p>
        </motion.header>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          role="list"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="feature-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px ${feature.color}20`,
              }}
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
              
              <div className="feature-glow" style={{ background: feature.color }} aria-hidden="true" />
            </motion.article>
          ))}
        </motion.div>

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
