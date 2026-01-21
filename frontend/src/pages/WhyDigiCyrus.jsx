import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import CTA from '../components/CTA';

const WhyDigiCyrus = () => {
    const comparisonData = [
        {
            category: 'Traditional Agencies',
            agency: {
                cost: 'High',
                speed: 'Slow',
                quality: 'Good',
                communication: 'Limited',
                flexibility: 'Low',
                longTerm: 'Project-based',
                automation: 'Minimal',
            },
            digiCyrus: {
                cost: 'Competitive',
                speed: 'Fast',
                quality: 'Excellent',
                communication: 'Transparent',
                flexibility: 'High',
                longTerm: 'Partnership-focused',
                automation: 'Built-in',
            },
        },
        {
            category: 'Freelancers',
            agency: {
                cost: 'Low',
                speed: 'Variable',
                quality: 'Inconsistent',
                communication: 'Inconsistent',
                flexibility: 'High',
                longTerm: 'Unreliable',
                automation: 'Rare',
            },
            digiCyrus: {
                cost: 'Competitive',
                speed: 'Consistent',
                quality: 'Consistent',
                communication: 'Reliable',
                flexibility: 'High',
                longTerm: 'Dedicated team',
                automation: 'Standard',
            },
        },
        {
            category: 'In-House Team',
            agency: {
                cost: 'Very High',
                speed: 'Medium',
                quality: 'Good',
                communication: 'Easy',
                flexibility: 'Medium',
                longTerm: 'Permanent',
                automation: 'Possible',
            },
            digiCyrus: {
                cost: 'Lower',
                speed: 'Fast',
                quality: 'Excellent',
                communication: 'Easy',
                flexibility: 'High',
                longTerm: 'Partnership',
                automation: 'Expertise',
            },
        },
    ];

    const advantages = [
        {
            title: 'Cost Efficiency',
            description: 'Get enterprise-quality work at a fraction of the cost. Our global delivery model doesn\'t mean lower quality—it means better value.',
            details: [
                'No recruitment or onboarding costs',
                'No employee benefits or overhead',
                'Pay for what you need, when you need it',
                'Transparent pricing with no hidden fees',
                'Scalable team that grows with your budget',
            ],
        },
        {
            title: 'Speed & Agility',
            description: 'Move at startup speed without sacrificing quality. We\'re built to execute fast, adapt quickly, and deliver consistently.',
            details: [
                'Experienced team ready to start immediately',
                'Proven processes that reduce time-to-market',
                'Agile methodology for rapid iteration',
                'No bureaucracy or decision-making delays',
                'Automation that speeds up development',
            ],
        },
        {
            title: 'Quality & Accountability',
            description: 'We stand behind our work. Every project follows rigorous quality standards, and we\'re accountable for results.',
            details: [
                'Comprehensive QA and testing',
                'Code reviews and best practices',
                'Documentation and knowledge transfer',
                'Performance optimization',
                'Ongoing support and maintenance',
            ],
        },
        {
            title: 'Automation-First Mindset',
            description: 'While others treat automation as an afterthought, we build it in from day one. This saves time, reduces costs, and improves quality.',
            details: [
                'Automated testing and deployment',
                'Workflow automation integration',
                'Monitoring and alerting systems',
                'Data processing automation',
                'API integrations and sync',
            ],
        },
    ];

    const getScoreColor = (score) => {
        if (score === 'High' || score === 'Fast' || score === 'Excellent' || score === 'Transparent' || score === 'Built-in' || score === 'Partnership-focused' || score === 'Standard' || score === 'Consistent' || score === 'Reliable' || score === 'Expertise' || score === 'Lower' || score === 'Partnership') {
            return 'text-green-600 font-semibold';
        }
        if (score === 'Low' || score === 'Slow' || score === 'Inconsistent' || score === 'Limited' || score === 'Unreliable' || score === 'Rare' || score === 'Very High' || score === 'Minimal') {
            return 'text-red-600 font-semibold';
        }
        return 'text-gray-700';
    };

    return (
        <div>
            {/* Page Header */}
            <Section background="white" className="pt-24 pb-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                        Why Digi Cyrus
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                        What sets us apart from agencies, freelancers, and in-house teams
                    </p>
                </div>
            </Section>

            {/* Comparison Tables */}
            <Section background="gray">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Digi Cyrus vs Alternatives
                        </h2>
                        <p className="text-xl text-gray-600">
                            See how we compare across key factors
                        </p>
                    </div>
                    <div className="space-y-8">
                        {comparisonData.map((comparison, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="bg-navy-900 text-white px-6 py-4">
                                    <h3 className="text-xl font-bold">{comparison.category}</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Factor</th>
                                                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Alternative</th>
                                                <th className="px-6 py-4 text-center text-sm font-semibold text-navy-900">Digi Cyrus</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {Object.keys(comparison.agency).map((key) => (
                                                <tr key={key}>
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </td>
                                                    <td className={`px-6 py-4 text-sm text-center ${getScoreColor(comparison.agency[key])}`}>
                                                        {comparison.agency[key]}
                                                    </td>
                                                    <td className={`px-6 py-4 text-sm text-center ${getScoreColor(comparison.digiCyrus[key])}`}>
                                                        {comparison.digiCyrus[key]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Key Advantages */}
            <Section background="white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Our Key Advantages
                        </h2>
                        <p className="text-xl text-gray-600">
                            What makes Digi Cyrus the right choice for your business
                        </p>
                    </div>
                    <div className="space-y-8">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                                    {advantage.title}
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    {advantage.description}
                                </p>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {advantage.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="flex items-start">
                                            <svg className="w-5 h-5 text-navy-600 mr-2 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Cost Efficiency */}
            <Section background="gray">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
                        Cost Efficiency Without Compromise
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Many assume that lower cost means lower quality. At Digi Cyrus, we prove that wrong.
                            Our global delivery model allows us to offer competitive pricing without compromising
                            on quality, communication, or results.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            You get access to top-tier talent without the overhead of recruitment, benefits,
                            office space, or equipment. You pay for what you need, when you need it, with
                            complete transparency.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Plus, our automation-first approach means we build solutions that reduce your
                            long-term operational costs. You save money not just on development, but on
                            ongoing operations too.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Speed & Quality */}
            <Section background="white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
                        Speed Meets Quality
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            You don't have to choose between speed and quality. Our proven processes,
                            experienced team, and automation-first approach allow us to deliver both.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            We move fast because we've done this before. We know what works, what doesn't,
                            and how to avoid common pitfalls. This experience, combined with agile methodologies
                            and automated processes, means faster delivery without cutting corners.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Quality isn't optional—it's built into our process. Code reviews, automated testing,
                            comprehensive QA, and documentation ensure that speed doesn't come at the expense
                            of quality.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Accountability */}
            <Section background="gray">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
                        Accountability You Can Count On
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            We stand behind our work. If something isn't right, we fix it. If a deadline is
                            at risk, we communicate early. If requirements change, we adapt.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Our reputation depends on your success. We're not a faceless agency or a one-off
                            freelancer—we're your partner, and we're invested in your outcomes.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            This accountability shows up in our communication, our quality standards, and our
                            commitment to results. You can count on us to deliver, and we do.
                        </p>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <CTA
                headline="Ready to Experience the Difference?"
                description="See for yourself why businesses choose Digi Cyrus over agencies, freelancers, and in-house teams."
                primaryCTA={{ text: 'Start a Project', href: '/contact' }}
                secondaryCTA={{ text: 'See How We Work', href: '/how-we-work' }}
            />
        </div>
    );
};

export default WhyDigiCyrus;
