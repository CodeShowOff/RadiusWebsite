import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './TrustedBy.css';

const TrustedBy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const logos = [
    { name: 'TechCrunch', opacity: 0.5 },
    { name: 'Product Hunt', opacity: 0.5 },
    { name: 'Forbes', opacity: 0.5 },
    { name: 'Wired', opacity: 0.5 },
    { name: 'The Verge', opacity: 0.5 },
  ];

  return (
    <section className="trusted-section" ref={ref} aria-label="Radius app featured in press">
      <div className="container">
        <motion.p
          className="trusted-label"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Radius App Featured in
        </motion.p>
        
        <motion.div
          className="trusted-logos"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          role="list"
          aria-label="Media outlets featuring Radius"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="logo-item"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: logo.opacity } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ opacity: 1 }}
              role="listitem"
            >
              <span className="logo-text">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
