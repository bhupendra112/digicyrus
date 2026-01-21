import React from 'react';
import Section from '../components/Section';
import TestimonialCard from '../components/TestimonialCard';
import CTA from '../components/CTA';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Digi Cyrus transformed our startup idea into a scalable SaaS platform in record time. Their automation-first approach saved us thousands in operational costs, and their understanding of business needs made them feel like true partners, not just developers.',
      author: 'Sarah Chen',
      role: 'Founder & CEO',
      company: 'TechFlow Solutions',
    },
    {
      quote: 'Working with Digi Cyrus feels like having an in-house team, but better. The quality and speed of delivery exceeded our expectations, and their communication is second to none. They\'ve become an integral part of our growth strategy.',
      author: 'Michael Rodriguez',
      role: 'CTO',
      company: 'EcoCommerce Inc.',
    },
    {
      quote: 'They don\'t just code—they understand business. Every feature they built aligned with our growth strategy. The automation they implemented has freed up hours of our team\'s time every week.',
      author: 'Priya Sharma',
      role: 'CEO',
      company: 'FinanceHub',
    },
    {
      quote: 'The best part about working with Digi Cyrus is their long-term thinking. They built our platform with scale in mind, and now that we\'re growing fast, we\'re reaping the benefits of that forward-thinking architecture.',
      author: 'James Thompson',
      role: 'Co-Founder',
      company: 'PropertyPro',
    },
    {
      quote: 'We were hesitant about working with a remote team, but Digi Cyrus proved that location doesn\'t matter when you have the right processes and communication. They\'re as responsive as any in-house team we\'ve worked with.',
      author: 'Emily Davis',
      role: 'Product Manager',
      company: 'HealthCare Connect',
    },
    {
      quote: 'The quality of work is outstanding, and their automation expertise is truly impressive. They automated processes we didn\'t even know could be automated, and it\'s transformed how we operate.',
      author: 'David Kim',
      role: 'Founder',
      company: 'LogiStream',
    },
  ];

  const videoTestimonials = [
    {
      title: 'From MVP to Scale',
      author: 'Sarah Chen',
      role: 'Founder & CEO',
      company: 'TechFlow Solutions',
      summary: 'How automation-first delivery cut ops costs by 40% and scaled to 15k users.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:34',
    },
    {
      title: 'Enterprise-Grade Delivery',
      author: 'Michael Rodriguez',
      role: 'CTO',
      company: 'EcoCommerce Inc.',
      summary: 'Going from idea to marketplace launch in 90 days with weekly ship cycles.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:12',
    },
    {
      title: 'Automation Wins',
      author: 'Priya Sharma',
      role: 'CEO',
      company: 'FinanceHub',
      summary: 'Why automation-first architecture saved 20+ hrs/week and improved reliability.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:05',
    },
  ];

  const caseStudies = [
    {
      title: 'SaaS Platform for Real Estate',
      company: 'PropertyPro',
      challenge: 'Needed a scalable platform for property management with automation for repetitive tasks.',
      solution: 'Built a comprehensive SaaS platform with automated lead management, document generation, and reporting.',
      results: [
        'Reduced manual work by 70%',
        'Scaled from 100 to 1000+ properties',
        'Improved client satisfaction scores',
      ],
      testimonial: 'The automation alone saves us 20+ hours per week. The platform scales beautifully as we grow.',
    },
    {
      title: 'E-commerce Marketplace',
      company: 'EcoCommerce Inc.',
      challenge: 'Launched a marketplace connecting eco-friendly sellers with conscious consumers.',
      solution: 'Developed a full-featured marketplace with inventory management, payment processing, and seller dashboards.',
      results: [
        'Launched in 3 months',
        'Onboarded 500+ sellers',
        'Processed $2M+ in transactions',
      ],
      testimonial: 'From concept to launch, Digi Cyrus delivered. The platform handles our growth effortlessly.',
    },
    {
      title: 'Fintech Mobile App',
      company: 'FinanceHub',
      challenge: 'Built a mobile-first financial platform with compliance and security as priorities.',
      solution: 'Created a secure, compliant mobile app with real-time transactions, analytics, and automation.',
      results: [
        'HIPAA and PCI-DSS compliant',
        '50K+ active users',
        '99.9% uptime',
      ],
      testimonial: 'They handled all the complex compliance requirements so we could focus on user experience.',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Testimonials & Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Real stories from businesses we've helped scale
          </p>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by founders and businesses worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Detailed looks at how we've helped businesses achieve their goals
            </p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 md:p-12 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">{caseStudy.company}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Challenge</h4>
                    <p className="text-gray-700">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Solution</h4>
                    <p className="text-gray-700">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-gray-700 flex items-start">
                          <span className="text-navy-600 mr-2">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border-l-4 border-navy-800">
                  <p className="text-gray-700 italic">"{caseStudy.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Video Testimonials */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Watch Our Clients
            </h2>
            <p className="text-xl text-gray-600">
              Short, no-fluff video stories on how we build, automate, and scale
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="relative bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="aspect-video bg-navy-900/80 text-white flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <button
                      className="w-14 h-14 rounded-full bg-white/90 text-navy-900 flex items-center justify-center shadow-md hover:scale-105 transition"
                      aria-label={`Play video testimonial: ${video.title}`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <span className="mt-3 text-sm font-semibold">
                      {video.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <p className="text-sm font-semibold text-navy-700 mb-1">
                    {video.author} · {video.role} · {video.company}
                  </p>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-700 grow">{video.summary}</p>
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-navy-800 font-semibold hover:underline"
                  >
                    Watch now
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              By The Numbers
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy-800 mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy-800 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy-800 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy-800 mb-2">8+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        headline="Ready to Join Our Success Stories?"
        description="Let's work together to achieve similar results for your business."
        primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCTA={{ text: 'See Our Services', href: '/services' }}
      />
    </div>
  );
};

export default Testimonials;
