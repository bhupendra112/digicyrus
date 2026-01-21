import React from 'react';
import Section from '../../components/Section';
import CTA from '../../components/CTA';
import Button from '../../components/Button';

const UiUxDesign = () => {
  const phases = [
    'Discovery: user research, goals, success metrics',
    'Information architecture and user flows',
    'Wireframes to high-fidelity UI',
    'Interactive prototypes and usability testing',
    'Design systems and component libraries',
    'Handover with specs and assets',
  ];

  return (
    <div>
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-navy-700 mb-4">Service</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">UI/UX Design</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            User-centered design that turns ideas into intuitive, conversion-focused experiences.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">Design that drives outcomes</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We balance aesthetics with utility—every screen, flow, and interaction is crafted to
              reduce friction and increase engagement.
            </p>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Process</h3>
              <ul className="space-y-2 text-gray-700">
                {phases.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-navy-700 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow space-y-6">
            <h3 className="text-xl font-semibold text-navy-900">Deliverables</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Research summaries and personas</li>
              <li>• Site maps, flows, and wireframes</li>
              <li>• High-fidelity UI and component libraries</li>
              <li>• Prototypes for testing and stakeholder review</li>
              <li>• Annotated specs for developers</li>
            </ul>
            <Button variant="primary" size="lg" href="/contact">Book a Design Sprint</Button>
          </div>
        </div>
      </Section>

      <CTA
        headline="Let’s design an experience users love"
        description="We’ll uncover the user problems, then design flows and interfaces that solve them."
        primaryCTA={{ text: 'Start a design project', href: '/contact' }}
        secondaryCTA={{ text: 'Back to services', href: '/services' }}
      />
    </div>
  );
};

export default UiUxDesign;
