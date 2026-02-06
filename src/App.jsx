import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Cookies = lazy(() => import('./pages/Cookies'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Update page title dynamically for better SEO signals
    document.title = 'Radius Connect | Social Discovery App - Connect, Chat & Build Community';
    
    // Add dynamic structured data for real-time updates
    const updateStructuredData = () => {
      const existingScript = document.querySelector('script[data-dynamic-ld]');
      if (existingScript) existingScript.remove();
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-ld', 'true');
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Radius Connect - Social Discovery App",
        "description": "Radius Connect is the #1 privacy-first social discovery app. Connect with people nearby, join communities, and build relationships.",
        "url": window.location.href,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Radius",
          "url": "https://radiusconnect.tech"
        },
        "about": {
          "@type": "SoftwareApplication",
          "name": "Radius",
          "applicationCategory": "SocialNetworkingApplication"
        }
      });
      document.head.appendChild(script);
    };
    
    updateStructuredData();
  }, []);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <div itemScope itemType="https://schema.org/WebPage">
      <Navbar />
      <main role="main" itemProp="mainContentOfPage">
        {isHomePage && <Hero />}
        <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
