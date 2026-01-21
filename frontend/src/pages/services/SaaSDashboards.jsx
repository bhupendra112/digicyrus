import React from 'react';
import Section from '../../components/Section';
import CTA from '../../components/CTA';
import Button from '../../components/Button';

const SaaSDashboards = () => {
  const modules = [
    'Multi-tenant architecture and RBAC',
    'User management, billing, and subscriptions',
    'Reporting, analytics, and exports',
    'Webhook and API integrations',
    'Audit logs, security, and compliance',
    'Performance and scalability planning',
  ];

  return (
    <div>
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-navy-700 mb-4">Service</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            SaaS & Admin Dashboards
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Powerful, reliable dashboards and SaaS platforms engineered for scale and clarity.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">Operate with confidence</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We design and build dashboards that surface the right data, streamline operations,
              and give teams real-time visibility.
            </p>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">What we implement</h3>
              <ul className="space-y-2 text-gray-700">
                {modules.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-navy-700 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow space-y-6">
            <h3 className="text-xl font-semibold text-navy-900">Data and integration ready</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Charts, tables, and custom analytics modules</li>
              <li>• Role-based access and granular permissions</li>
              <li>• Billing with Stripe and subscription logic</li>
              <li>• Secure APIs, webhooks, and third-party integrations</li>
              <li>• Observability: logs, metrics, alerts</li>
            </ul>
            <Button variant="primary" size="lg" href="/contact">Plan a Dashboard</Button>
          </div>
        </div>
      </Section>

      <CTA
        headline="Launch a SaaS or admin dashboard that scales"
        description="We’ll map your modules, data model, and user roles, then build fast."
        primaryCTA={{ text: 'Schedule a build plan', href: '/contact' }}
        secondaryCTA={{ text: 'Back to services', href: '/services' }}
      />
    </div>
  );
};

export default SaaSDashboards;
