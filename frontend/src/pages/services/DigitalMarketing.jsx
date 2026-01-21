import React from 'react';
import Section from '../../components/Section';
import CTA from '../../components/CTA';
import Button from '../../components/Button';

const DigitalMarketing = () => {
  const services = [
    'SEO strategy and on-page optimization',
    'Content and landing page funnels',
    'Performance ads (search, social)',
    'Email/marketing automation',
    'Attribution and analytics setup',
    'CRO experiments and A/B testing',
  ];

  return (
    <div>
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-navy-700 mb-4">Service</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            Digital Marketing
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Data-driven growth: from traffic to trials to revenue.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">Full-funnel execution</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We design and run campaigns tied to business outcomes—not vanity metrics. Clear reporting, rapid iteration.
            </p>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">What we do</h3>
              <ul className="space-y-2 text-gray-700">
                {services.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-navy-700 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow space-y-6">
            <h3 className="text-xl font-semibold text-navy-900">How we measure</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• CAC, LTV, payback periods</li>
              <li>• Funnel conversion benchmarks</li>
              <li>• Channel ROI with attribution clarity</li>
              <li>• Experiment logs and learnings</li>
            </ul>
            <Button variant="primary" size="lg" href="/contact">Plan a Growth Sprint</Button>
          </div>
        </div>
      </Section>

      <CTA
        headline="Turn traffic into revenue"
        description="We’ll build the funnel, track the numbers, and iterate until it works."
        primaryCTA={{ text: 'Start a growth plan', href: '/contact' }}
        secondaryCTA={{ text: 'Back to services', href: '/services' }}
      />
    </div>
  );
};

export default DigitalMarketing;
