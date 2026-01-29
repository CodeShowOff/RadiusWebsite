import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bluetooth, Users, MessageCircle, UserCheck, Sparkles } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      icon: Bluetooth,
      title: 'Enable Discovery',
      description: 'Turn on Bluetooth and let Radius find other users in your vicinity. No GPS or location services needed.',
      color: '#8B5CF6',
    },
    {
      number: '02',
      icon: Users,
      title: 'See Who\'s Nearby',
      description: 'View people around you sorted by proximity — very close, nearby, or far. Discover potential connections in real-time.',
      color: '#06B6D4',
    },
    {
      number: '03',
      icon: MessageCircle,
      title: 'Send a Request',
      description: 'Found someone interesting? Send a connection request or start an anonymous Guess Me game session.',
      color: '#F472B6',
    },
    {
      number: '04',
      icon: UserCheck,
      title: 'Connect & Chat',
      description: 'Once both parties accept, you\'re connected! Start chatting, sharing photos, and building a real relationship.',
      color: '#10B981',
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
            Connect in <span className="gradient-text">four simple steps</span>
          </h2>
          <p className="section-description">
            No complicated setup, no algorithms deciding who you meet. 
            Radius puts you in control of your social discovery.
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
      </div>
    </section>
  );
};

export default HowItWorks;
