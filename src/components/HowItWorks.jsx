import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import React from 'react';
import { 
  UserPlus, Globe, MessageCircle, Users, Sparkles, 
  Bluetooth, Gamepad2, MapPin, BluetoothSearching,
  HandHeart, Shield, Image, Mic
} from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFeature, setActiveFeature] = useState(0);

  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Discover & Connect',
      description: 'Find people nearby via Bluetooth, or discover global groups by interests. Send connection requests with mutual consent.',
      color: '#8B5CF6',
    },
    {
      number: '02',
      icon: Globe,
      title: 'Join Communities',
      description: 'Join location-based groups, random topic groups, or create nearby groups for events. Connect with like-minded people.',
      color: '#06B6D4',
    },
    {
      number: '03',
      icon: MessageCircle,
      title: 'Rich Conversations',
      description: 'Chat with texts, voice messages, photos, and stickers. Play the Guess Me game for fun icebreakers.',
      color: '#F472B6',
    },
    {
      number: '04',
      icon: Users,
      title: 'Build Community',
      description: 'Help others with Nearby Help, participate in group discussions, and create meaningful connections.',
      color: '#10B981',
    },
  ];

  const features = [
    {
      icon: Bluetooth,
      title: 'Proximity Discovery',
      color: '#8B5CF6',
      steps: [
        'Enable Bluetooth on your device',
        'Open Radius app to start broadcasting',
        'View nearby users sorted by distance',
        'Send connection request to anyone',
      ],
      description: 'Uses Bluetooth LE to detect other Radius users within 10 meters without GPS tracking.'
    },
    {
      icon: Gamepad2,
      title: 'Guess Me Game',
      color: '#F472B6',
      steps: [
        'Select a nearby user to play with',
        'Start anonymous chat session',
        'Try to guess each other\'s identity',
        'Reveal identities if you both connect',
      ],
      description: 'Fun icebreaker that lets you chat anonymously before revealing your identity.'
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
        'Browse groups in your city/region',
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
      description: 'Internet-based groups by interests with admin-approved membership for quality.'
    },
    {
      icon: BluetoothSearching,
      title: 'Nearby Groups',
      color: '#3B82F6',
      steps: [
        'Create a temporary Bluetooth group',
        'Your device scans for nearby users',
        'Members auto-join when detected',
        'Perfect for events and gatherings',
      ],
      description: 'Create spontaneous groups that automatically add people around you.'
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
      description: 'Community assistance system to help or get help from people nearby.'
    },
    {
      icon: Shield,
      title: 'Privacy Controls',
      color: '#EF4444',
      steps: [
        'Toggle discovery on/off anytime',
        'Control who can message you',
        'Disable help alerts in settings',
        'No GPS tracking, ever',
      ],
      description: 'Complete control over your visibility and privacy at all times.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="how-it-works" className="how-it-works-section" ref={ref}>
      <div className="container">
        <motion.div
          className="how-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">How It Works</span>
          <h2 className="section-title">
            Your journey in <span className="gradient-text">four simple steps</span>
          </h2>
          <p className="section-description">
            From discovering nearby people to joining global communities, 
            Radius offers multiple ways to connect and build relationships.
          </p>
        </motion.div>

        <div className="steps-wrapper">
          <motion.div
            className="steps-container"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="step-card"
                variants={stepVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="step-number" style={{ color: step.color }}>
                  {step.number}
                </div>
                <div 
                  className="step-icon"
                  style={{ 
                    background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                    borderColor: `${step.color}30`,
                  }}
                >
                  <step.icon size={28} style={{ color: step.color }} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="step-connector">
                    <svg width="40" height="40" viewBox="0 0 40 40">
                      <motion.path
                        d="M8 20 L32 20 M24 12 L32 20 L24 28"
                        stroke={step.color}
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Connection line */}
          <div className="timeline-line">
            <motion.div
              className="timeline-progress"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            />
          </div>
        </div>

        {/* Interactive Demo */}
        <motion.div
          className="demo-section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="demo-visual">
            <div className="demo-phone">
              <div className="demo-screen">
                <div className="radar-visualization">
                  <motion.div
                    className="radar-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span>You</span>
                  </motion.div>
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      className="radar-ring-demo"
                      style={{ 
                        width: `${ring * 80}px`, 
                        height: `${ring * 80}px`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 0.3 - ring * 0.08, scale: 1 } : {}}
                      transition={{ delay: 0.5 + ring * 0.1 }}
                    />
                  ))}
                  
                  {/* Nearby users */}
                  {[
                    { x: 35, y: 25, delay: 0.8 },
                    { x: 70, y: 55, delay: 1 },
                    { x: 20, y: 75, delay: 1.2 },
                  ].map((user, i) => (
                    <motion.div
                      key={i}
                      className="demo-user"
                      style={{ left: `${user.x}%`, top: `${user.y}%` }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -5, 0],
                      } : {}}
                      transition={{ 
                        opacity: { delay: user.delay, duration: 0.3 },
                        scale: { delay: user.delay, duration: 0.3 },
                        y: { delay: user.delay + 0.3, duration: 2, repeat: Infinity },
                      }}
                    >
                      <Sparkles size={14} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="demo-content">
            <h3>Real-Time Discovery</h3>
            <p>
              Watch as Radius detects other users around you. The closer they are, 
              the stronger the signal. It's like having a social radar in your pocket.
            </p>
            <ul className="demo-features">
              <li>
                <span className="demo-dot very-close"></span>
                Very Close (0-1m)
              </li>
              <li>
                <span className="demo-dot nearby"></span>
                Nearby (1-3m)
              </li>
              <li>
                <span className="demo-dot far"></span>
                Far (3-10m+)
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Feature Explorer */}
        <motion.div
          className="feature-explorer"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <h3>Explore Features</h3>
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
      </div>
    </section>
  );
};

export default HowItWorks;
