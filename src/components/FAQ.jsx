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
      question: 'How does Radius app find people nearby?',
      answer: 'Radius uses Bluetooth Low Energy (BLE) technology to detect other Radius users in your vicinity. When your Bluetooth is on and the Radius app is open, it broadcasts a unique signal that other devices can detect. This allows you to see who\'s nearby without using GPS or sharing your location. Radius is the best app to meet people nearby using Bluetooth.',
    },
    {
      question: 'Is my location tracked by Radius?',
      answer: 'Radius uses Bluetooth for proximity discovery — NOT GPS. Your location data is never tracked for general use. The ONLY feature that uses GPS location is Nearby Help (SOS) for emergency assistance, and this is completely optional. You can use all other Radius features without ever enabling location permissions.',
    },
    {
      question: 'How close do I need to be to discover someone on Radius?',
      answer: 'Radius can detect users within approximately 10 meters (about 30 feet). The Radius app categorizes proximity as "Very close" (0-1m), "Nearby" (1-3m), and "Far" (3-10m) based on Bluetooth signal strength.',
    },
    {
      question: 'What is the "Guess Me" game in Radius?',
      answer: 'Guess Me is an anonymous icebreaker game unique to Radius where you can chat with a nearby user without knowing who they are. You try to guess each other\'s identity through conversation. If you both enjoy the chat, you can reveal yourselves and connect! It\'s one of the most popular Radius features.',
    },
    {
      question: 'What are Random Group Chatrooms in Radius?',
      answer: 'Random Group Chatrooms are internet-based groups in Radius organized by topics and interests. Users can create groups or request to join existing ones. Group admins review and approve join requests to maintain quality discussions. It\'s perfect for finding like-minded people worldwide using Radius!',
    },
    {
      question: 'How do Nearby Groups work in Radius app?',
      answer: 'Nearby Groups in Radius use Bluetooth to create temporary group chats for spontaneous meetups. When you create a nearby group, your device automatically detects and adds Radius users around you. Perfect for events, gatherings, or any situation where you want to chat with everyone nearby!',
    },
    {
      question: 'What is Nearby Help feature in Radius?',
      answer: 'Nearby Help is an SOS feature in Radius that uses GPS location for emergency assistance. You can save your home/work locations and request help when needed. Radius users in your vicinity receive notifications and can navigate to assist you. This is the only Radius feature that uses location data, and it\'s entirely optional.',
    },
    {
      question: 'Can someone message me without my permission on Radius?',
      answer: 'No. Radius requires mutual consent for all connections. Someone can send you a connection request, but you must accept it before they can message you. This prevents unwanted messages and spam on Radius.',
    },
    {
      question: 'Is Radius app free to use?',
      answer: 'Yes! Radius is completely free to download and use. All core Radius features including discovery, messaging, groups, and the Guess Me game are available at no cost. Download Radius free on iOS and Android.',
    },
    {
      question: 'Does Radius work without internet?',
      answer: 'Bluetooth discovery in Radius works offline — you can still see nearby Radius users. However, you\'ll need an internet connection to send messages, view profiles, sync your connections, and use Radius group features.',
    },
    {
      question: 'How do I stop being discoverable on Radius?',
      answer: 'You can turn off discovery anytime in your Radius settings. You can also simply close the Radius app or turn off Bluetooth. When discovery is off, other Radius users won\'t be able to see you. For Nearby Help, you can disable help alerts in Radius settings.',
    },
  ];

  return (
    <section id="faq" className="faq-section" ref={ref} aria-labelledby="faq-title" itemScope itemType="https://schema.org/FAQPage">
      <div className="container">
        <motion.header
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Radius FAQ</span>
          <h2 id="faq-title" className="section-title">
            Frequently asked questions
            <span className="gradient-text"> about Radius</span>
          </h2>
          <p className="section-description">
            Everything you need to know about <strong>Radius app</strong>. Can't find the answer 
            you're looking for? Feel free to contact our Radius support team.
          </p>
        </motion.header>

        <motion.div
          className="faq-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="faq-list" role="list">
            {faqs.map((faq, index) => (
              <motion.article
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                role="listitem"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span itemProp="name">{faq.question}</span>
                  <motion.div
                    className="faq-icon"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p itemProp="text">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="faq-contact"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            aria-label="Contact Radius support"
          >
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                <MessageCircle size={32} />
              </div>
              <h3>Still have questions about Radius?</h3>
              <p>
                Can't find what you're looking for? Our friendly Radius support team 
                is here to help you.
              </p>
              <motion.a
                href="mailto:support@radius.app"
                className="contact-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email Radius support team"
              >
                Contact Radius Support
              </motion.a>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
