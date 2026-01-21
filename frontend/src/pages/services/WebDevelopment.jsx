import React from 'react';
import Section from '../../components/Section';
import CTA from '../../components/CTA';
import Button from '../../components/Button';

const WebDevelopment = () => {
  const features = [
    'Responsive, mobile-first architecture',
    'SEO-ready structure and performance',
    'Component-driven UI with design systems',
    'Robust auth, RBAC, and security best practices',
    'API-first, integration-ready backends',
    'Observability, logging, and monitoring baked in',
  ];

  const stack = ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Vercel'];

  return (
    <div>
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-navy-700 mb-4">Service</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            Web Development
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Modern, scalable web platforms built for speed, security, and growth.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">What we deliver</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From marketing sites to complex platforms, we engineer fast, secure, and maintainable products.
              Every build follows best practices in performance, accessibility, and SEO.
            </p>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Core capabilities</h3>
              <ul className="space-y-2">
                {features.map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <span className="text-navy-700 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow space-y-6">
            <h3 className="text-xl font-semibold text-navy-900">Tech stack</h3>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-gray-700">Ideal for:</p>
              <ul className="space-y-1 text-gray-700">
                <li>• SaaS and dashboard products</li>
                <li>• Content and marketing sites</li>
                <li>• Multi-tenant web platforms</li>
                <li>• Global audiences and high-traffic workloads</li>
              </ul>
            </div>
            <div className="pt-2">
              <Button variant="primary" size="lg" href="/contact">Start a Web Project</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-navy-900">Why Digi Cyrus</h3>
            <p className="text-gray-700 leading-relaxed">
              We pair business understanding with technical depth. You get predictable delivery,
              transparent communication, and architecture that scales.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Performance-first builds (Core Web Vitals aware)</li>
              <li>• Secure by default (auth, RBAC, best practices)</li>
              <li>• Automation-first CI/CD and QA</li>
              <li>• Clear documentation and handover</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-navy-900 mb-3">Engagement models</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Fixed-scope delivery for well-defined builds</li>
              <li>• Agile squads for iterative shipping</li>
              <li>• Ongoing optimization and growth retainers</li>
            </ul>
          </div>
        </div>
      </Section>

      <CTA
        headline="Let’s ship a faster, scalable web platform"
        description="Tell us about your roadmap. We’ll design the right architecture and team to deliver it."
        primaryCTA={{ text: 'Talk to the team', href: '/contact' }}
        secondaryCTA={{ text: 'See more services', href: '/services' }}
      />
    </div>
  );
};

export default WebDevelopment;
