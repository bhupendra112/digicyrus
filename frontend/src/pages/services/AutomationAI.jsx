import React from 'react';
import Section from '../../components/Section';
import CTA from '../../components/CTA';
import Button from '../../components/Button';

const AutomationAI = () => {
  const automations = [
    'Workflow automation across tools',
    'API orchestration and data sync',
    'AI-assisted operations (chatbots, copilots)',
    'Document processing and enrichment',
    'Event-driven jobs with monitoring',
    'Playbooks with human-in-the-loop controls',
  ];

  const stack = ['Python', 'Node.js', 'OpenAI', 'LangChain', 'Zapier', 'Make', 'n8n', 'AWS Lambda', 'Temporal'];

  return (
    <div>
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-navy-700 mb-4">Service</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            Automation & AI Integrations
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Automate the repetitive, augment your team with AI, and keep humans in control.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">Automation that sticks</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We design automations that are observable, maintainable, and safe. No brittle chains—just reliable systems.
            </p>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">What we automate</h3>
              <ul className="space-y-2 text-gray-700">
                {automations.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-navy-700 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow space-y-6">
            <h3 className="text-xl font-semibold text-navy-900">AI & integration stack</h3>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold text-navy-900">Principles</p>
              <p>• Human-in-the-loop where it matters.</p>
              <p>• Observability: logs, retries, alerts.</p>
              <p>• Security and compliance respected.</p>
            </div>
            <Button variant="primary" size="lg" href="/contact">Plan an Automation</Button>
          </div>
        </div>
      </Section>

      <CTA
        headline="Automate the busywork, focus on growth"
        description="Tell us your workflows; we’ll design automations and AI helpers that are robust and measurable."
        primaryCTA={{ text: 'Start an automation project', href: '/contact' }}
        secondaryCTA={{ text: 'Back to services', href: '/services' }}
      />
    </div>
  );
};

export default AutomationAI;
