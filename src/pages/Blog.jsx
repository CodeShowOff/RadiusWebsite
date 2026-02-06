import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import './PageStyles.css';

const Blog = () => {
  const featuredPosts = [
    {
      title: "The Future of Proximity-Based Social Networking",
      excerpt: "Exploring how Bluetooth technology is revolutionizing the way we connect with people around us.",
      date: "February 5, 2026",
      readTime: "5 min read",
      category: "Technology",
      image: "/app_icon.png"
    },
    {
      title: "Building Authentic Connections in a Digital World",
      excerpt: "Why privacy-first social apps are becoming essential for meaningful relationships.",
      date: "January 28, 2026",
      readTime: "4 min read",
      category: "Community",
      image: "/app_icon.png"
    },
    {
      title: "Radius Guess Me: Making Introductions Fun Again",
      excerpt: "How our anonymous chat feature is breaking the ice and starting conversations.",
      date: "January 15, 2026",
      readTime: "3 min read",
      category: "Features",
      image: "/app_icon.png"
    }
  ];

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
            <BookOpen size={48} />
          </div>
          <h1 className="page-title">Radius Blog</h1>
          <p className="page-subtitle">
            Stories, insights, and updates from the Radius team
          </p>
        </div>
      </motion.div>

      <div className="container page-content">
        <motion.section 
          className="blog-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {featuredPosts.map((post, index) => (
            <motion.article 
              key={post.title}
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span className="meta-dot">•</span>
                  <span className="read-time">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="read-more">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.section>

        <motion.section 
          className="content-section coming-soon-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>More Stories Coming Soon</h2>
          <p>
            We're working on bringing you insightful articles about social technology, privacy, 
            community building, and the future of digital connections. Stay tuned!
          </p>
          <p>
            Want to be notified when we publish new posts? Follow us on our social channels.
          </p>
          <div className="social-links-inline">
            <a href="https://x.com/CodeShowOff" target="_blank" rel="noopener noreferrer" className="social-link-btn">
              Twitter
            </a>
            <a href="https://www.instagram.com/codeshowoff/" target="_blank" rel="noopener noreferrer" className="social-link-btn">
              Instagram
            </a>
            <a href="https://github.com/CodeShowOff" target="_blank" rel="noopener noreferrer" className="social-link-btn">
              GitHub
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Blog;
