import React from 'react';
import Section from '../../components/Section';
import CTA from '../../components/CTA';
import Button from '../../components/Button';

const AppDevelopment = () => {
  const features = [
    'Native and cross-platform builds',
    'Offline-first experiences with sync',
    'Push notifications and in-app messaging',
    'Secure auth and payments',
    'Analytics, A/B testing, and telemetry',
    'App Store and Play Store readiness',
  ];

  const stack = ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo', 'AWS Amplify'];

  return (
    <div>
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-navy-700 mb-4">Service</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            Mobile App Development
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Beautiful, reliable apps that users love—built for iOS, Android, and cross-platform scale.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">Build experiences users keep</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We design and ship mobile apps that feel premium and perform flawlessly.
              From onboarding to retention, every detail is considered.
            </p>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">What you get</h3>
              <ul className="space-y-2 text-gray-700">
                {features.map((item) => (
                  <li key={item} className="flex items-start">
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
                <li>• Product-led growth apps</li>
                <li>• Marketplace and fintech experiences</li>
                <li>• Customer engagement and loyalty apps</li>
                <li>• Field/operations apps with offline workflows</li>
              </ul>
            </div>
            <Button variant="primary" size="lg" href="/contact">Discuss a Mobile App</Button>
          </div>
        </div>
      </Section>

      <CTA
        headline="Launch a high-performing mobile app"
        description="Share your goals and we’ll propose a roadmap, timeline, and team to ship it."
        primaryCTA={{ text: 'Start a conversation', href: '/contact' }}
        secondaryCTA={{ text: 'Back to services', href: '/services' }}
      />
    </div>
  );
};

export default AppDevelopment;
