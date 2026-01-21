import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mission from './pages/Mission';
import About from './pages/About';
import Services from './pages/Services';
import WebDevelopment from './pages/services/WebDevelopment';
import AppDevelopment from './pages/services/AppDevelopment';
import UiUxDesign from './pages/services/UiUxDesign';
import SaaSDashboards from './pages/services/SaaSDashboards';
import AutomationAI from './pages/services/AutomationAI';
import DigitalMarketing from './pages/services/DigitalMarketing';
import BrandingIdentity from './pages/services/BrandingIdentity';
import HowWeWork from './pages/HowWeWork';
import WhyDigiCyrus from './pages/WhyDigiCyrus';
import Industries from './pages/Industries';
import Technology from './pages/Technology';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/services/saas-dashboards" element={<SaaSDashboards />} />
            <Route path="/services/automation-ai" element={<AutomationAI />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/branding-identity" element={<BrandingIdentity />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/why-digi-cyrus" element={<WhyDigiCyrus />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
