import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import CTA from '../components/CTA';

const HowWeWork = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Requirement Gathering',
      description: 'We start by understanding your business, goals, users, and technical requirements. This isn\'t a checkbox exercise—we dive deep to ensure we build the right solution.',
      details: [
        'Initial consultation and discovery session',
        'Business goals and success metrics definition',
        'User research and persona development',
        'Technical requirements and constraints',
        'Project scope and timeline alignment',
      ],
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Before writing a single line of code, we create a comprehensive strategy and roadmap. This ensures everyone is aligned and expectations are clear.',
      details: [
        'Product roadmap and feature prioritization',
        'Technical architecture and tech stack selection',
        'Milestone definition and timeline',
        'Resource allocation and team assignment',
        'Success metrics and KPIs',
      ],
    },
    {
      number: '03',
      title: 'Design',
      description: 'User-centered design process that combines aesthetics with functionality. We design with the user in mind, always.',
      details: [
        'Wireframing and information architecture',
        'User flow mapping and interaction design',
        'Visual design and UI creation',
        'Prototyping and user testing',
        'Design system and style guide',
      ],
    },
    {
      number: '04',
      title: 'Development',
      description: 'Agile development with regular updates, transparent communication, and continuous iteration. You\'re always in the loop.',
      details: [
        'Sprint planning and daily standups',
        'Feature development and code reviews',
        'Weekly progress updates and demos',
        'QA testing throughout development',
        'Version control and documentation',
      ],
    },
    {
      number: '05',
      title: 'Testing & Deployment',
      description: 'Rigorous QA ensures quality, and seamless deployment gets you to market faster. We handle the complexity so you don\'t have to.',
      details: [
        'Comprehensive testing (functional, performance, security)',
        'User acceptance testing (UAT)',
        'Staging environment setup and testing',
        'Production deployment and monitoring',
        'Post-deployment verification',
      ],
    },
    {
      number: '06',
      title: 'Support & Scaling',
      description: 'Launch is just the beginning. We provide ongoing support, optimization, and scaling services to help you grow.',
      details: [
        'Bug fixes and maintenance',
        'Performance optimization',
        'Feature enhancements and iterations',
        'Scaling infrastructure and architecture',
        'Ongoing consultation and support',
      ],
    },
  ];

  const principles = [
    {
      title: 'Transparency',
      description: 'No surprises, no hidden costs, no black boxes. You always know where your project stands and what\'s happening next.',
    },
    {
      title: 'Communication',
      description: 'Regular updates, clear documentation, and open channels. We communicate frequently and clearly, always.',
    },
    {
      title: 'Agile Execution',
      description: 'We move fast, iterate quickly, and adapt to changes. Agile isn\'t just a methodology—it\'s how we work.',
    },
    {
      title: 'Dedicated Team Model',
      description: 'You get a dedicated team that understands your business, not random developers rotated in and out.',
    },
    {
      title: 'Automation Usage',
      description: 'We automate testing, deployment, monitoring, and more. This ensures consistency, reduces errors, and speeds up delivery.',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            How We Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            A proven process that ensures quality, transparency, and results at every step
          </p>
        </div>
      </Section>

      {/* Business Model Overview */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Business Model
            </h2>
            <p className="text-xl text-gray-600">
              Built for long-term partnerships, not one-off projects
            </p>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Digi Cyrus, we operate as a dedicated partner, not a transactional vendor. 
              Our business model is designed around long-term relationships where your success 
              is our success.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We assign dedicated teams to your project—developers, designers, and project 
              managers who get to know your business inside and out. This continuity ensures 
              quality, speeds up delivery, and reduces friction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our pricing is transparent, our processes are documented, and our communication 
              is constant. We believe in building trust through consistent delivery, not just 
              promises at the start.
            </p>
          </div>
        </div>
      </Section>

      {/* Process Steps */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              From idea to launch and beyond—a structured approach that works
            </p>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="text-6xl font-bold text-navy-300 mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-navy-600 mr-2 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 ml-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How We Think */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-xl text-gray-600">
              The values that shape how we work with every client
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Communication Approach */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
            Our Communication Approach
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                Regular Updates
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                You receive weekly progress reports, sprint summaries, and regular demos. 
                No surprises, no waiting weeks to see what's been built.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                Clear Documentation
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every decision, every feature, every change is documented. Code is commented, 
                APIs are documented, and processes are transparent.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                Open Channels
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Direct access to your team via Slack, email, or video calls. No communication 
                barriers, no gatekeepers—just open, honest dialogue.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Agile Execution */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
            Agile Execution
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We follow Agile methodologies—sprints, standups, retrospectives—but we're 
              not dogmatic about it. We adapt our process to fit your needs, not the other way around.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This means we move fast, iterate quickly, and adapt to changes. Priorities 
              shift? No problem. New requirements emerge? We adjust. This flexibility, 
              combined with structured execution, is what makes us effective.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We deliver working software early and often, gather feedback, and improve. 
              This iterative approach reduces risk, increases visibility, and ensures we're 
              building what you actually need.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        headline="Ready to Work Together?"
        description="Let's discuss your project and how our process can help you achieve your goals."
        primaryCTA={{ text: 'Start a Conversation', href: '/contact' }}
        secondaryCTA={{ text: 'Why Choose Us', href: '/why-digi-cyrus' }}
      />
    </div>
  );
};

export default HowWeWork;
