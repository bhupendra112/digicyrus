import React from 'react';
import Section from '../components/Section';
import CTA from '../components/CTA';

const Mission = () => {
    return (
        <div>
            {/* Page Header */}
            <Section background="white" className="pt-24 pb-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                        Our Mission
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                        To empower businesses worldwide by building digital products that scale,
                        automating operations that matter, and creating long-term partnerships based on trust.
                    </p>
                </div>
            </Section>

            {/* Our Mission */}
            <Section background="gray">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                            Our Mission
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                At Digi Cyrus, we believe that every business—whether a startup taking its first steps
                                or an established company looking to innovate—deserves access to world-class digital
                                solutions. Our mission is to bridge the gap between ambitious vision and technical execution.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                We don't just write code. We understand business models, market dynamics, and the
                                challenges that founders face daily. This understanding drives everything we build.
                                Every feature, every automation, every design decision is made with one question in mind:
                                "Will this help our client scale?"
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our commitment extends beyond project delivery. We're building long-term partnerships
                                where your success is our success. When you grow, we grow. When you win, we win.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Our Vision */}
            <Section background="white">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                            Our Vision
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                We envision a world where geography doesn't limit access to exceptional digital expertise.
                                Where startups in any corner of the world can compete with the best. Where automation
                                handles the repetitive work, freeing humans to focus on innovation and strategy.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                In the next decade, we see Digi Cyrus as the go-to partner for founders and businesses
                                looking to build not just products, but scalable digital ecosystems. We're not here to
                                make quick wins—we're here to build the infrastructure that powers the next generation
                                of global businesses.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our vision is ambitious because the businesses we serve are ambitious. We're building
                                for scale, for impact, and for the long term.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* What Drives Us */}
            <Section background="gray">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
                        What Drives Us
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-navy-900 mb-3">
                                Problem-Solving at Scale
                            </h3>
                            <p className="text-gray-700">
                                We're driven by complex challenges. The harder the problem, the more we want to solve it.
                                Every project teaches us something new, and we apply that learning to help the next client.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-navy-900 mb-3">
                                Client Success Stories
                            </h3>
                            <p className="text-gray-700">
                                Nothing motivates us more than seeing our clients succeed. When a startup we worked with
                                gets funded, or when automation we built saves a company thousands of hours—that's what
                                keeps us going.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-navy-900 mb-3">
                                Continuous Innovation
                            </h3>
                            <p className="text-gray-700">
                                Technology evolves rapidly, and so do we. We're always learning, always experimenting,
                                always looking for better ways to build. Stagnation is our enemy.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-navy-900 mb-3">
                                Global Impact
                            </h3>
                            <p className="text-gray-700">
                                We believe technology can level the playing field. By providing affordable, high-quality
                                digital services globally, we're helping businesses everywhere compete on merit, not location.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* How We Think */}
            <Section background="white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
                        How We Think
                    </h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                                Long-term Over Short-term
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We make decisions that benefit the long-term health of your business. This means building
                                maintainable code, scalable architecture, and systems that grow with you—not quick fixes
                                that create technical debt.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                                Automation First, Manual Last
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                If a task is repetitive, we automate it. If a process can be streamlined, we streamline it.
                                Our automation-first mindset doesn't just save time—it reduces errors, improves consistency,
                                and frees up resources for what truly matters.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                                Process-Driven Execution
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We don't wing it. Every project follows a structured process: discovery, planning, design,
                                development, testing, deployment, and support. This process ensures quality, predictability,
                                and transparency at every step.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                                Business Understanding Before Code
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We don't start coding until we understand your business. What problem are you solving?
                                Who are your users? What's your growth model? Technical solutions are only effective
                                when they're built on business understanding.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                                Transparency Always
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                No surprises, no hidden costs, no black boxes. We communicate clearly, update regularly,
                                and involve you in every important decision. You should always know where your project
                                stands and what's happening next.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Future of Digi Cyrus */}
            <Section background="gray">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
                        The Future of Digi Cyrus
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            We're not standing still. The future of Digi Cyrus is built on three pillars: deeper
                            expertise, broader automation, and stronger partnerships.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            We're investing in cutting-edge technologies—AI, machine learning, advanced automation
                            platforms—to stay ahead of the curve. But technology is only as good as the problems it solves.
                            So we're also deepening our understanding of industries, business models, and market dynamics.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Most importantly, we're doubling down on what works: long-term partnerships, process excellence,
                            and a relentless focus on client success. The tools may change, but our values won't.
                        </p>
                        <div className="bg-white rounded-lg p-6 border-l-4 border-navy-800">
                            <p className="text-lg font-semibold text-navy-900 italic">
                                "We're building Digi Cyrus not just to be a service provider, but to be the partner
                                that businesses turn to when they're serious about scaling. That's our commitment.
                                That's our future."
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <CTA
                headline="Join Us on This Journey"
                description="If our mission resonates with you, let's talk about how we can work together to build something impactful."
                primaryCTA={{ text: 'Get in Touch', href: '/contact' }}
                secondaryCTA={{ text: 'Learn About Us', href: '/about' }}
            />
        </div>
    );
};

export default Mission;
