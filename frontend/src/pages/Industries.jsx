import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import CTA from '../components/CTA';

const Industries = () => {
  const industries = [
    {
      name: 'Real Estate',
      icon: '🏠',
      description: 'Property management platforms, listing websites, CRM systems, and automation tools for real estate businesses.',
      solutions: [
        'Property listing and management platforms',
        'CRM and lead management systems',
        'Virtual tour integrations',
        'Document automation and e-signatures',
        'Market analytics dashboards',
      ],
    },
    {
      name: 'Finance',
      icon: '💰',
      description: 'Secure financial platforms, payment processing, compliance tools, and fintech solutions that meet regulatory requirements.',
      solutions: [
        'Fintech platforms and mobile banking apps',
        'Payment processing and gateway integrations',
        'Compliance and reporting systems',
        'Investment and portfolio management tools',
        'Cryptocurrency and blockchain solutions',
      ],
    },
    {
      name: 'E-commerce',
      icon: '🛒',
      description: 'Online stores, marketplaces, inventory management, and automation tools to streamline e-commerce operations.',
      solutions: [
        'Custom e-commerce platforms',
        'Marketplace development',
        'Inventory and order management',
        'Payment gateway integrations',
        'Shipping and logistics automation',
      ],
    },
    {
      name: 'Startups',
      icon: '🚀',
      description: 'MVP development, rapid prototyping, and scalable solutions for startups moving fast and iterating quickly.',
      solutions: [
        'MVP development and rapid prototyping',
        'Product-market fit validation tools',
        'Scalable architecture from day one',
        'Investor-ready dashboards and reporting',
        'Growth and automation tools',
      ],
    },
    {
      name: 'Education',
      icon: '📚',
      description: 'Learning management systems, student portals, online courses, and educational technology platforms.',
      solutions: [
        'Learning management systems (LMS)',
        'Student information systems',
        'Online course platforms',
        'Assessment and grading tools',
        'Parent and teacher portals',
      ],
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'HIPAA-compliant healthcare platforms, patient management systems, telemedicine solutions, and medical records systems.',
      solutions: [
        'Patient management systems',
        'Telemedicine platforms',
        'Electronic health records (EHR)',
        'Appointment scheduling systems',
        'Healthcare analytics dashboards',
      ],
    },
    {
      name: 'Hospitality',
      icon: '🏨',
      description: 'Booking platforms, property management systems, guest experience apps, and automation for hotels and restaurants.',
      solutions: [
        'Hotel and restaurant booking systems',
        'Property management systems',
        'Guest experience mobile apps',
        'Inventory and supply chain management',
        'Loyalty and rewards programs',
      ],
    },
    {
      name: 'Logistics',
      icon: '🚚',
      description: 'Supply chain management, tracking systems, warehouse automation, and logistics optimization platforms.',
      solutions: [
        'Supply chain management platforms',
        'Real-time tracking and monitoring',
        'Warehouse management systems',
        'Route optimization tools',
        'Fleet management solutions',
      ],
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Experience across diverse sectors and use cases
          </p>
        </div>
      </Section>

      {/* Industries Grid */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Cross-Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              While every industry is unique, the principles of building great software remain the same. 
              We bring deep technical expertise and adapt it to your specific industry needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{industry.description}</p>
                <details className="mt-4">
                  <summary className="text-navy-800 font-medium cursor-pointer hover:underline text-base">
                    Common Solutions
                  </summary>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {industry.solutions.map((solution, solIndex) => (
                      <li key={solIndex} className="flex items-start">
                        <span className="text-navy-600 mr-2 font-bold">•</span>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industry Approach */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
            Our Industry Approach
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Every industry has its own challenges, regulations, and best practices. While we bring 
              universal technical expertise, we take the time to understand your industry's specific 
              needs, constraints, and opportunities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Whether you're in healthcare and need HIPAA compliance, finance and require regulatory 
              adherence, or e-commerce and need payment processing—we understand what matters in your 
              industry and build accordingly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our cross-industry experience means we bring best practices from one sector to another, 
              creating innovative solutions that might not occur to industry-specific teams.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies Teaser */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Real Results Across Industries
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            See how we've helped businesses in different sectors achieve their goals
          </p>
          <Button variant="primary" size="lg" href="/testimonials">
            View Case Studies & Testimonials
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        headline="Ready to Build for Your Industry?"
        description="Let's discuss how Digi Cyrus can help solve your industry-specific challenges with technology that works."
        primaryCTA={{ text: 'Start a Conversation', href: '/contact' }}
        secondaryCTA={{ text: 'See Our Services', href: '/services' }}
      />
    </div>
  );
};

export default Industries;
