import { motion } from 'framer-motion';
import { Radio, Heart, Shield, Users, Bluetooth, Sparkles } from 'lucide-react';
import './PageStyles.css';

const About = () => {
  return (
    <div className="page-container">
      <motion.div 
        className="page-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="hero-icon">
            <Radio size={48} />
          </div>
          <h1 className="page-title">About Radius</h1>
          <p className="page-subtitle">
            Redefining social connections through proximity and privacy
          </p>
        </div>
      </motion.div>

      <div className="container page-content">
        <motion.section 
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Our Story</h2>
          <p>
            Radius was born from a simple observation: despite living in an increasingly connected world, 
            genuine human connections have become rare. We're surrounded by people yet more isolated than ever. 
            Traditional social apps focus on followers, likes, and curated personas — not real relationships.
          </p>
          <p>
            We asked ourselves: what if technology could help us connect with the people who are actually around us? 
            What if your phone could be a bridge to real-world connections instead of a barrier? What if privacy 
            wasn't sacrificed for connectivity?
          </p>
          <p>
            That's how Radius was created — a social discovery app that uses Bluetooth technology to help you 
            discover and connect with people in your immediate vicinity, all while respecting your privacy.
          </p>
        </motion.section>

        <motion.section 
          className="values-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>What We Believe</h2>
          <div className="values-container">
            <div className="value-card">
              <Shield className="value-icon" />
              <h3>Privacy First</h3>
              <p>
                Your data is yours. We use Bluetooth for proximity discovery — no GPS tracking. 
                Location is only used for the Nearby Help (SOS) feature for emergency assistance. 
                We don't sell your information or monitor your activity.
              </p>
            </div>
            <div className="value-card">
              <Heart className="value-icon" />
              <h3>Authentic Connections</h3>
              <p>
                We believe in quality over quantity. Radius encourages meaningful interactions 
                through mutual consent and shared proximity, fostering genuine relationships.
              </p>
            </div>
            <div className="value-card">
              <Users className="value-icon" />
              <h3>Community Driven</h3>
              <p>
                From local groups to global communities, Radius empowers users to build and 
                participate in communities that matter to them.
              </p>
            </div>
            <div className="value-card">
              <Bluetooth className="value-icon" />
              <h3>Innovative Technology</h3>
              <p>
                We leverage Bluetooth Low Energy technology to create unique proximity-based 
                experiences that traditional social apps can't offer.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>How Radius Works</h2>
          <p>
            Radius uses Bluetooth Low Energy (BLE) technology to detect nearby users without requiring 
            GPS or internet connectivity. When you open the app, it scans for other Radius users within 
            Bluetooth range and displays them based on signal strength — showing who's close, nearby, or 
            at the edge of your radius.
          </p>
          <p>
            You can send connection requests to users you're interested in connecting with. Once both 
            parties accept, you can start chatting, join groups together, or participate in features 
            like our popular Guess Me game — an anonymous icebreaker that makes starting conversations fun.
          </p>
          <p>
            Beyond one-on-one connections, Radius offers location-based groups for your city, 
            topic-based global communities, and even temporary Bluetooth groups for spontaneous meetups.
          </p>
        </motion.section>

        <motion.section 
          className="content-section mission-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="mission-icon">
            <Sparkles size={40} />
          </div>
          <h2>Our Mission</h2>
          <p className="mission-text">
            To empower people to discover and build genuine connections with those around them, 
            creating stronger communities and combating the loneliness epidemic — all while 
            championing privacy and user control.
          </p>
        </motion.section>

        <motion.section 
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Join the Radius Movement</h2>
          <p>
            Radius is more than an app — it's a movement towards more meaningful, privacy-respecting 
            social technology. Whether you're looking to make new friends, find your community, or 
            simply connect with interesting people nearby, Radius is here to help.
          </p>
          <p>
            Download Radius today and start discovering the amazing people around you.
          </p>
          <div className="cta-buttons">
            <a href="/#download" className="primary-button">Download Radius</a>
            <a href="/contact" className="secondary-button">Get in Touch</a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
