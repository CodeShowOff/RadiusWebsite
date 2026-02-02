import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import WhyRadius from './components/WhyRadius'
import DownloadSection from './components/Download'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
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

  return (
    <div itemScope itemType="https://schema.org/WebPage">
      <Navbar />
      <main role="main" itemProp="mainContentOfPage">
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <WhyRadius />
        <DownloadSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
