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
  return (
    <div>
      <Navbar />
      <main>
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
