import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does Radius find people nearby?',
      answer: 'Radius uses Bluetooth Low Energy (BLE) technology to detect other Radius users in your vicinity. When your Bluetooth is on and the app is open, it broadcasts a unique signal that other devices can detect. This allows you to see who\'s nearby without using GPS or sharing your location.',
    },
    {
      question: 'Is my location tracked?',
      answer: 'No! Radius never tracks your GPS location. We only use Bluetooth to detect proximity to other users. This means you\'re only visible to people who are physically near you, and your location data is never stored or shared.',
    },
    {
      question: 'How close do I need to be to discover someone?',
      answer: 'Radius can detect users within approximately 10 meters (about 30 feet). The app categorizes proximity as "Very close" (0-1m), "Nearby" (1-3m), and "Far" (3-10m) based on Bluetooth signal strength.',
    },
    {
      question: 'What is the "Guess Me" game?',
      answer: 'Guess Me is an anonymous icebreaker game where you can chat with a nearby user without knowing who they are. You try to guess each other\'s identity through conversation. If you both enjoy the chat, you can reveal yourselves and connect!',
    },
    {
      question: 'Can someone message me without my permission?',
      answer: 'No. Radius requires mutual consent for all connections. Someone can send you a connection request, but you must accept it before they can message you. This prevents unwanted messages and spam.',
    },
    {
      question: 'Is Radius free to use?',
      answer: 'Yes! Radius is completely free to download and use. All core features including discovery, messaging, and the Guess Me game are available at no cost.',
    },
    {
      question: 'Does Radius work without internet?',
      answer: 'Bluetooth discovery works offline — you can still see nearby users. However, you\'ll need an internet connection to send messages, view profiles, and sync your connections.',
    },
    {
      question: 'How do I stop being discoverable?',
      answer: 'You can turn off discovery anytime in your settings. You can also simply close the app or turn off Bluetooth. When discovery is off, other users won\'t be able to see you.',
    },
  ];

  return (
    <section id="faq" className="faq-section" ref={ref}>
      <div className="container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            Frequently asked
            <span className="gradient-text"> questions</span>
          </h2>
          <p className="section-description">
            Everything you need to know about Radius. Can't find the answer 
            you're looking for? Feel free to contact our support team.
          </p>
        </motion.div>

        <motion.div
          className="faq-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    className="faq-icon"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="faq-contact"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="contact-card">
              <div className="contact-icon">
                <MessageCircle size={32} />
              </div>
              <h3>Still have questions?</h3>
              <p>
                Can't find what you're looking for? Our friendly support team 
                is here to help you.
              </p>
              <motion.a
                href="mailto:support@radius.app"
                className="contact-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
