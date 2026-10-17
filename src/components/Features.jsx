import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import React from 'react';
import { 
  Bluetooth, 
  MessageCircle, 
  Users, 
  Shield, 
  MapPin,
  Globe,
  BluetoothSearching,
  HandHeart,
  Shuffle
} from 'lucide-react';
import './Features.css';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Bluetooth,
      title: 'Proximity Discovery',
      color: '#8B5CF6',
      steps: [
        'Enable Bluetooth on your device',
        'Open Radius to start broadcasting',
        'View nearby users sorted by distance',
        'Send connection request to anyone',
      ],
      description: 'Bluetooth LE detects nearby Radius users within 10m \u2014 no GPS needed.'
    },
    {
      icon: MessageCircle,
      title: 'Rich Messaging',
      color: '#06B6D4',
      steps: [
        'Send text messages instantly',
        'Record and share voice messages',
        'Share photos, stickers, documents',
        'Get read receipts and notifications',
      ],
      description: 'Full-featured chat with everything you need for meaningful conversations.'
    },
    {
      icon: MapPin,
      title: 'Location Groups',
      color: '#F59E0B',
      steps: [
        'Browse groups in your city or region',
        'Request to join existing groups',
        'Participate in local discussions',
        'Discover community events',
      ],
      description: 'Join location-based communities to connect with people in your area.'
    },
    {
      icon: Globe,
      title: 'Random Group Chatrooms',
      color: '#8B5CF6',
      steps: [
        'Create a group with name & topic',
        'Set description and rules',
        'Review join requests as admin',
        'Build quality discussions',
      ],
      description: 'Internet-based groups by interests with admin-approved membership.'
    },
    {
      icon: BluetoothSearching,
      title: 'Nearby Groups',
      color: '#3B82F6',
      steps: [
        'Create a temporary Bluetooth group',
        'Device scans for nearby users',
        'Members auto-join when detected',
        'Perfect for events and gatherings',
      ],
      description: 'Spontaneous groups that automatically add people around you.'
    },
    {
      icon: Shuffle,
      title: 'Random Chat',
      color: '#F472B6',
      steps: [
        'Receive up to 10 random suggestions daily',
        'Send requests to people you like',
        'Chat one-on-one when they accept',
        'Resets at midnight for fresh matches',
      ],
      description: 'Daily random discovery for spontaneous connections.'
    },
    {
      icon: HandHeart,
      title: 'Nearby Help',
      color: '#EC4899',
      steps: [
        'Set your home/work locations',
        'Request help when needed',
        'Nearby users get notified',
        'Helpers can navigate to you',
      ],
      description: 'SOS using GPS for emergencies \u2014 the only feature that uses location.'
    },
    {
      icon: Shield,
      title: 'Privacy Controls',
      color: '#EF4444',
      steps: [
        'Toggle discovery on/off anytime',
        'Control who can message you',
        'Disable help alerts in settings',
        'GPS only for SOS Nearby Help',
      ],
      description: 'Complete control over your visibility and data.'
    },
    {
      icon: Users,
      title: 'Mutual Consent',
      color: '#10B981',
      steps: [
        'Both users must accept to connect',
        'No unwanted messages or spam',
        'Groups have admin approval',
        'Block or report at any time',
      ],
      description: 'All connections require acceptance from both sides.'
    },
  ];

  return (
    <section id="features" className="features-section" ref={ref} aria-labelledby="features-title">
      <div className="container">
        <motion.header
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 id="features-title" className="section-title">
            Explore <span className="gradient-text">Features</span>
          </h2>
        </motion.header>

        <motion.div
          className="feature-explorer"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="explorer-container">
            <div className="explorer-tabs">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  className={`explorer-tab ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                  style={{
                    borderColor: activeFeature === index ? feature.color : 'transparent',
                  }}
                >
                  <feature.icon size={18} style={{ color: feature.color }} />
                  <span>{feature.title}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="explorer-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="explorer-header">
                  <div 
                    className="explorer-icon"
                    style={{ 
                      background: `linear-gradient(135deg, ${features[activeFeature].color}30 0%, ${features[activeFeature].color}10 100%)`,
                    }}
                  >
                    {React.createElement(features[activeFeature].icon, { 
                      size: 32, 
                      style: { color: features[activeFeature].color } 
                    })}
                  </div>
                  <div>
                    <h4>{features[activeFeature].title}</h4>
                    <p>{features[activeFeature].description}</p>
                  </div>
                </div>

                <div className="explorer-steps">
                  <h5>How it works:</h5>
                  {features[activeFeature].steps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="explorer-step"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div 
                        className="explorer-step-number"
                        style={{ background: features[activeFeature].color }}
                      >
                        {index + 1}
                      </div>
                      <span>{step}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          className="screenshots-carousel-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="screenshots-scroll-view">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <img 
                key={num}
                src={`/screenshots/${num}.jpeg`} 
                alt={`Radius App Screenshot ${num}`}
                className="carousel-image"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
