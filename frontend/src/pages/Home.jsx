import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import CTA from '../components/CTA';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Scalable, modern web applications built for growth.',
      icon: '🌐',
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile solutions.',
      icon: '📱',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that drives engagement.',
      icon: '🎨',
    },
    {
      title: 'SaaS & Dashboards',
      description: 'Powerful admin panels and SaaS platforms.',
      icon: '⚡',
    },
    {
      title: 'Automation & AI',
      description: 'Streamline operations with intelligent automation.',
      icon: '🤖',
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your audience.',
      icon: '📈',
    },
    {
      title: 'Branding & Identity',
      description: 'Complete brand experiences that resonate.',
      icon: '✨',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Requirement Gathering',
      description: 'We dive deep into your business goals, user needs, and technical requirements.',
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Roadmap creation with clear milestones, timelines, and success metrics.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'User-centered design process from wireframes to high-fidelity prototypes.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Agile development with regular updates and transparency at every step.',
    },
    {
      number: '05',
      title: 'Testing & Deployment',
      description: 'Rigorous QA and seamless deployment to production.',
    },
    {
      number: '06',
      title: 'Support & Scaling',
      description: 'Ongoing maintenance, optimization, and scaling as you grow.',
    },
  ];

  const whyPoints = [
    {
      title: 'Long-term Partnerships',
      description: 'We invest in your success for the long haul, not just project completion.',
    },
    {
      title: 'Process-Driven',
      description: 'Proven methodologies ensure quality, consistency, and predictability.',
    },
    {
      title: 'Automation-First',
      description: 'We build with scalability in mind, leveraging automation to reduce costs.',
    },
    {
      title: 'Cost-Effective',
      description: 'Global delivery model without compromising on quality or communication.',
    },
    {
      title: 'Founder-Friendly',
      description: 'We understand startup challenges and move at the speed you need.',
    },
    {
      title: 'Enterprise-Ready',
      description: 'Solutions that scale from startup to enterprise seamlessly.',
    },
  ];

  const industries = [
    'Real Estate',
    'Finance',
    'E-commerce',
    'Startups',
    'Education',
    'Healthcare',
    'Hospitality',
    'Logistics',
  ];

  const testimonials = [
    {
      quote: 'Digi Cyrus transformed our startup idea into a scalable SaaS platform. Their automation-first approach saved us thousands in operational costs.',
      author: 'Sarah Chen',
      role: 'Founder',
      company: 'TechFlow Solutions',
    },
    {
      quote: 'Working with Digi Cyrus feels like having an in-house team, but better. The quality and speed of delivery exceeded our expectations.',
      author: 'Michael Rodriguez',
      role: 'CTO',
      company: 'EcoCommerce Inc.',
    },
    {
      quote: 'They don\'t just code—they understand business. Every feature they built aligned with our growth strategy.',
      author: 'Priya Sharma',
      role: 'CEO',
      company: 'FinanceHub',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="white" className="pt-0">
        <Hero
          headline="Build. Automate. Scale."
          subheadline="Digital Products That Grow With Your Business"
          description="We don't just build software. We build scalable digital businesses through long-term partnerships, process-driven execution, and automation-first mindset."
          primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
          secondaryCTA={{ text: 'Learn How We Work', href: '/how-we-work' }}
        />
      </Section>

      {/* Value Proposition */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Your Partner in Digital Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with startups, SMEs, and founders who are serious about building products that scale.
            Our approach combines technical excellence with business acumen.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-navy-800 mb-2">100+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-navy-800 mb-2">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-navy-800 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </Section>

      {/* Services Snapshot */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            What We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end digital services to take your business from idea to scale
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white   rounded-xl p-6 hover:border-navy-300 hover:shadow-lg transition-all flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="mt-auto">
                <Button variant="outline" size="sm" href="/services">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg" href="/services">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Process Overview */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven process that ensures quality, transparency, and results
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start">
                <div className="text-5xl font-bold text-navy-300 mr-4">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-black mt-12">
          <Button variant="primary" className='text-black' size="lg" href="/how-we-work">
            Learn More About Our Process
          </Button>
        </div>
      </Section>

      {/* Why Digi Cyrus */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Why Choose Digi Cyrus
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What sets us apart from agencies, freelancers, and in-house teams
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyPoints.map((point, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="primary" className='text-black' size="lg" href="/why-digi-cyrus">
            See Full Comparison
          </Button>
        </div>
      </Section>

      {/* Industries Served */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience across diverse sectors and use cases
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white px-6 py-3 rounded-full border border-gray-200 hover:border-navy-400 hover:bg-navy-50 transition-all cursor-default"
            >
              <span className="text-gray-700 font-medium">{industry}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className='hover:text-gray-400' size="lg" href="/industries">
            Learn More About Our Industries
          </Button>
        </div>
      </Section>

      {/* Company Logos */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to work with innovative businesses across industries
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
          {[
            'TechFlow Solutions',
            'EcoCommerce Inc.',
            'FinanceHub',
            'PropertyPro',
            'HealthCare Connect',
            'LogiStream',
          ].map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-16 bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-all"
            >
              <span className="text-gray-700 font-semibold text-sm text-center">
                {company}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Video Testimonials */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Watch Our Clients' Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from businesses we've helped scale
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
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
          ].map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative aspect-video bg-linear-to-br from-navy-800 to-navy-900">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{video.summary}</p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm font-semibold text-navy-900">
                    {video.author}
                  </p>
                  <p className="text-xs text-gray-600">
                    {video.role} at {video.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="primary" className="text-black" size="lg" href="/testimonials">
            Watch More Video Testimonials
          </Button>
        </div>
      </Section>

      {/* Written Testimonials */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by founders and businesses worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg" href="/testimonials">
            Read More Testimonials
          </Button>
        </div>
      </Section>

      {/* Final CTA */}
      <CTA
        headline="Ready to Build Something Impactful?"
        description="Let's discuss how Digi Cyrus can help scale your digital business. No fluff, just results."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        secondaryCTA={{ text: 'Learn About Us', href: '/about' }}
      />
    </div>
  );
};

export default Home;
