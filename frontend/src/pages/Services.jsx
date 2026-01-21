import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import CTA from '../components/CTA';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Web Development',
      icon: '🌐',
      what: 'We build modern, scalable web applications that grow with your business. From simple landing pages to complex enterprise platforms, we deliver solutions that perform.',
      who: 'Perfect for startups, SMEs, and businesses looking to establish or upgrade their online presence with a focus on scalability and performance.',
      link: '/services/web-development',
      benefits: [
        'Responsive, mobile-first design',
        'SEO-optimized for better visibility',
        'Fast load times and excellent performance',
        'Scalable architecture that grows with you',
        'Modern tech stack for long-term maintainability',
        'Secure, reliable, and well-documented code',
      ],
      tech: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Firebase'],
      why: 'We don\'t just build websites—we build digital foundations. Every project is architected for scale, maintained for quality, and optimized for performance.',
    },
    {
      title: 'Mobile App Development',
      icon: '📱',
      what: 'Native and cross-platform mobile applications that deliver exceptional user experiences. From iOS to Android to React Native, we build apps that users love.',
      who: 'Ideal for businesses ready to engage customers on mobile, whether launching a new app or extending an existing platform to mobile devices.',
      link: '/services/app-development',
      benefits: [
        'Native performance with cross-platform efficiency',
        'Beautiful, intuitive user interfaces',
        'Offline functionality and data synchronization',
        'Push notifications and real-time updates',
        'App store optimization and deployment',
        'Ongoing maintenance and updates',
      ],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store', 'Play Store'],
      why: 'Mobile is where your users are. We build apps that not only look great but perform flawlessly, engaging users and driving business results.',
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      what: 'User-centered design that combines aesthetics with functionality. We create interfaces that users love and that drive conversions.',
      who: 'Perfect for businesses that want to improve user engagement, increase conversions, or create a memorable brand experience through exceptional design.',
      link: '/services/ui-ux-design',
      benefits: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing and iteration',
        'Design systems for consistency',
        'Collaboration with development teams',
      ],
      tech: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle', 'UserTesting'],
      why: 'Great design is invisible—users notice when it\'s bad. We create designs that feel natural, look beautiful, and drive results.',
    },
    {
      title: 'SaaS & Admin Dashboards',
      icon: '⚡',
      what: 'Powerful SaaS platforms and admin dashboards that give you control over your business operations. Built for scale, designed for usability.',
      who: 'Essential for SaaS startups, established platforms, and businesses that need comprehensive admin tools to manage operations, users, and data.',
      link: '/services/saas-dashboards',
      benefits: [
        'Scalable multi-tenant architecture',
        'Comprehensive admin panels',
        'User management and permissions',
        'Data analytics and reporting',
        'API integrations and webhooks',
        'Subscription and billing management',
      ],
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'SendGrid', 'AWS', 'Docker'],
      why: 'SaaS platforms are complex. We build them right—with proper architecture, security, and scalability built in from day one.',
    },
    {
      title: 'Automation & AI Integrations',
      icon: '🤖',
      what: 'Intelligent automation and AI integrations that streamline operations, reduce costs, and free your team to focus on what matters.',
      who: 'Perfect for businesses looking to reduce manual work, improve efficiency, and leverage AI to gain competitive advantages.',
      link: '/services/automation-ai',
      benefits: [
        'Workflow automation and orchestration',
        'AI-powered features and integrations',
        'API integrations and data sync',
        'Chatbots and conversational interfaces',
        'Data processing and analysis automation',
        'Custom automation solutions',
      ],
      tech: ['Python', 'OpenAI', 'Zapier', 'Make', 'n8n', 'AWS Lambda', 'API integrations'],
      why: 'Automation isn\'t optional anymore—it\'s essential. We build automation that works, scales, and saves you time and money.',
    },
    {
      title: 'Digital Marketing',
      icon: '📈',
      what: 'Data-driven digital marketing strategies that grow your audience, increase engagement, and drive conversions.',
      who: 'Ideal for businesses ready to scale their online presence, improve brand awareness, and convert more visitors into customers.',
      link: '/services/digital-marketing',
      benefits: [
        'SEO strategy and optimization',
        'Content marketing and creation',
        'Social media management',
        'Paid advertising campaigns',
        'Email marketing automation',
        'Analytics and performance tracking',
      ],
      tech: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp', 'SEMrush'],
      why: 'Marketing is about results. We use data, strategy, and execution to drive real growth—not vanity metrics.',
    },
    {
      title: 'Branding & Identity',
      icon: '✨',
      what: 'Complete brand experiences that resonate with your audience. From logo design to brand guidelines to visual storytelling.',
      who: 'Perfect for startups launching their brand, established businesses rebranding, or companies looking to strengthen their visual identity.',
      link: '/services/branding-identity',
      benefits: [
        'Logo design and brand identity',
        'Brand guidelines and style guides',
        'Visual design systems',
        'Marketing materials design',
        'Brand strategy and positioning',
        'Consistent brand application',
      ],
      tech: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Brand Guidelines'],
      why: 'Your brand is how people remember you. We create memorable, consistent brand experiences that build trust and recognition.',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            End-to-end digital services to take your business from idea to scale
          </p>
        </div>
      </Section>

      {/* Service Selection Tabs */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`p-4 rounded-lg border-2 transition-all ${activeService === index
                  ? 'border-navy-800 bg-navy-800 text-gray-300'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-navy-300'
                  }`}
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <div className="text-sm font-semibold">{service.title}</div>
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">{services[activeService].icon}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                {services[activeService].title}
              </h2>
            </div>

            <div className="space-y-8">
              {/* What It Is */}
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">What It Is</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {services[activeService].what}
                </p>
              </div>

              {/* Who It's For */}
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Who It's For</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {services[activeService].who}
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {services[activeService].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-navy-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Tools & Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why Digi Cyrus */}
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Why Digi Cyrus</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {services[activeService].why}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="primary" size="lg" className='text-black' href="/contact">
                    Discuss Your {services[activeService].title} Project
                  </Button>
                  {services[activeService].link && (
                    <Button variant="outline" size="lg" href={services[activeService].link}>
                      Learn More →
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* All Services Overview */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer end-to-end services. Use one, or combine multiple for a complete solution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.what.substring(0, 110)}...
                </p>
                {/**<div className="mt-auto flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setActiveService(index)}>
                    View Summary
                  </Button>
                  {service.link && (
                    <Button variant="primary" size="sm" href={service.link} className="text-white">
                      Learn More →
                    </Button>
                  )}
                </div>*/}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        headline="Ready to Start Your Project?"
        description="Let's discuss which services are right for your business and how we can help you scale."
        primaryCTA={{ text: 'Get in Touch', href: '/contact' }}
        secondaryCTA={{ text: 'See How We Work', href: '/how-we-work' }}
      />
    </div>
  );
};

export default Services;
