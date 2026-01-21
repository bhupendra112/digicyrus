import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import CTA from '../components/CTA';

const About = () => {
    const journeyMilestones = [
        {
            year: '2020',
            title: 'The Beginning',
            description: 'Founded with a simple belief: every business deserves access to world-class digital expertise, regardless of location or budget.',
        },
        {
            year: '2021',
            title: 'First Partnerships',
            description: 'Started working with early-stage startups, learning the unique challenges founders face and refining our approach.',
        },
        {
            year: '2022',
            title: 'Scaling Operations',
            description: 'Expanded our team, established processes, and began serving SMEs. Introduced our automation-first methodology.',
        },
        {
            year: '2023',
            title: 'Enterprise Clients',
            description: 'Started working with larger organizations while maintaining our founder-friendly approach. Launched advanced automation services.',
        },
        {
            year: '2024',
            title: 'Global Expansion',
            description: 'Serving clients across multiple continents, building a reputation for quality, reliability, and long-term partnerships.',
        },
        {
            year: 'Today',
            title: 'Looking Forward',
            description: 'Continuing to innovate, expand capabilities, and deepen partnerships. Always learning, always growing.',
        },
    ];

    const differentiators = [
        {
            title: 'Founder-to-Founder Understanding',
            description: 'Our founder has been in your shoes. We understand the pressure, the decisions, the need to move fast while building right.',
        },
        {
            title: 'Global Talent, Local Understanding',
            description: 'We combine world-class technical talent with deep understanding of international markets and business models.',
        },
        {
            title: 'Automation as a Core Competency',
            description: 'While others treat automation as an add-on, we build it into everything. It\'s not a feature—it\'s how we think.',
        },
        {
            title: 'Process Without Bureaucracy',
            description: 'We have structured processes that ensure quality, but we move at startup speed. No red tape, no unnecessary meetings.',
        },
        {
            title: 'Long-term Partnership Model',
            description: 'We\'re not project-focused—we\'re partnership-focused. We invest in your success because your success is our success.',
        },
        {
            title: 'Cost-Effective Without Compromise',
            description: 'Our global delivery model makes quality accessible, but we never compromise on standards, communication, or results.',
        },
    ];

    return (
        <div>
            {/* Page Header */}
            <Section background="white" className="pt-24 pb-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                        Our Story
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                        From a vision to reality. Here's how Digi Cyrus came to be and what drives us forward.
                    </p>
                </div>
            </Section>

            {/* Founder Story */}
            <Section background="gray">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
                        The Founder's Story
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Digi Cyrus was born from a simple frustration: as a founder myself, I saw too many
                            businesses struggle to find the right digital partners. Traditional agencies were expensive
                            and slow. Freelancers were inconsistent. Building an in-house team was risky and costly.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            I knew there had to be a better way. A way to combine the reliability of agencies,
                            the agility of freelancers, and the cost-effectiveness of global talent—all while
                            maintaining the quality and communication standards that founders need.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            So I started Digi Cyrus with one mission: to be the digital partner I wished I had
                            when starting my own business. A partner who understands that founders don't just need
                            code—they need solutions that scale, processes that work, and partnerships that last.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Today, Digi Cyrus has grown, but our core principle remains the same: we're founder-friendly,
                            business-focused, and results-driven. We're not just building software—we're building
                            the infrastructure that helps businesses scale.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Why Digi Cyrus Was Started */}
            <Section background="white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
                        Why Digi Cyrus Exists
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                                The Problem We Noticed
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Most digital service providers were focused on projects, not partnerships. They delivered
                                code and moved on. But founders need more—they need partners who understand their business,
                                anticipate their needs, and grow with them. That's what was missing in the market.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                                The Solution We Built
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Digi Cyrus was built to fill that gap. We combine technical excellence with business
                                understanding. We think long-term, build for scale, and automate what should be automated.
                                We're not just a service provider—we're a growth partner.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* How We're Different */}
            <Section background="gray">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
                        How Digi Cyrus is Different
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {differentiators.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Journey Timeline */}
            <Section background="white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
                        Our Journey So Far
                    </h2>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-navy-200 hidden md:block"></div>

                        <div className="space-y-12">
                            {journeyMilestones.map((milestone, index) => (
                                <div key={index} className="relative flex items-start">
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute left-6 w-4 h-4 bg-navy-800 rounded-full border-4 border-white shadow-lg"></div>

                                    <div className="md:ml-16 flex-1">
                                        <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                            <div className="text-sm font-semibold text-navy-600 mb-2">
                                                {milestone.year}
                                            </div>
                                            <h3 className="text-xl font-semibold text-navy-900 mb-2">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-gray-700">{milestone.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Growth Mindset */}
            <Section background="gray">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
                        Our Growth Mindset
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            We believe that growth—both ours and our clients'—comes from continuous learning,
                            adaptation, and improvement. Every project teaches us something. Every challenge makes
                            us better. Every success inspires the next one.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            But growth isn't just about getting bigger. It's about getting better. That's why we
                            invest in our team, our processes, and our capabilities. We're constantly refining how
                            we work, what we build, and how we serve our clients.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            This growth mindset isn't just a philosophy—it's a competitive advantage. It means
                            we're always improving, always innovating, always finding better ways to help our
                            clients succeed. And that, ultimately, is what sets us apart.
                        </p>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <CTA
                headline="Want to Be Part of Our Story?"
                description="Let's work together to build something impactful. Join the growing list of businesses that trust Digi Cyrus for their digital growth."
                primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
                secondaryCTA={{ text: 'See How We Work', href: '/how-we-work' }}
            />
        </div>
    );
};

export default About;
