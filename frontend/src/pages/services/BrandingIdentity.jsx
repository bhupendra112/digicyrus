import React from 'react';
import Section from '../../components/Section';
import CTA from '../../components/CTA';
import Button from '../../components/Button';

const BrandingIdentity = () => {
  const deliverables = [
    'Logo system and variations',
    'Color, typography, and component tokens',
    'Voice and messaging guidelines',
    'Pitch decks, sales one-pagers, and templates',
    'Social and marketing asset kits',
    'Brand usage rules and governance',
  ];

  return (
    <div>
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-navy-700 mb-4">Service</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            Branding & Identity
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A cohesive brand that looks sharp, sounds confident, and scales with you.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">Make it memorable</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We craft brand systems that work everywhere—from product UI to decks to campaigns—
              so your team stays consistent and fast.
            </p>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Deliverables</h3>
              <ul className="space-y-2 text-gray-700">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-navy-700 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow space-y-6">
            <h3 className="text-xl font-semibold text-navy-900">Approach</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Discovery: market, competitors, positioning</li>
              <li>• Concept directions and iteration</li>
              <li>• Systematize assets and handoff kits</li>
              <li>• Guidelines to keep teams aligned</li>
            </ul>
            <Button variant="primary" size="lg" href="/contact">Start a Brand Sprint</Button>
          </div>
        </div>
      </Section>

      <CTA
        headline="Build a brand that customers remember"
        description="We’ll shape your visual identity, voice, and assets so you launch confidently."
        primaryCTA={{ text: 'Talk brand with us', href: '/contact' }}
        secondaryCTA={{ text: 'Back to services', href: '/services' }}
      />
    </div>
  );
};

export default BrandingIdentity;
