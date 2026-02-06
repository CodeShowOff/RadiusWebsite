import { lazy, Suspense, memo } from 'react'

// Lazy load below-the-fold components for faster initial load
const TrustedBy = lazy(() => import('../components/TrustedBy'))
const Features = lazy(() => import('../components/Features'))
const HowItWorks = lazy(() => import('../components/HowItWorks'))
const WhyRadius = lazy(() => import('../components/WhyRadius'))
const DownloadSection = lazy(() => import('../components/Download'))
const FAQ = lazy(() => import('../components/FAQ'))

// Minimal placeholder for lazy components
const SectionPlaceholder = memo(() => (
  <div style={{ minHeight: '400px' }} aria-hidden="true" />
))

const Home = () => {
  return (
    <>
      <Suspense fallback={<SectionPlaceholder />}>
        <TrustedBy />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <Features />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <WhyRadius />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <DownloadSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <FAQ />
      </Suspense>
    </>
  );
};

export default Home;
