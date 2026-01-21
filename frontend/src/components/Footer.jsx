import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const services = [
        'Web Development',
        'App Development',
        'UI/UX Design',
        'SaaS & Dashboards',
        'Automation & AI',
        'Digital Marketing',
        'Branding & Design',
    ];

    const quickLinks = [
        { name: 'Our Mission', href: '/mission' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'How We Work', href: '/how-we-work' },
        { name: 'Why Digi Cyrus', href: '/why-digi-cyrus' },
        { name: 'Industries', href: '/industries' },
        { name: 'Technology', href: '/technology' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-navy-900 text-white">
            <div className="container-custom">
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="block mb-4">
                                <span className="text-2xl font-bold">Digi Cyrus</span>
                            </Link>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                We don't just build software. We build scalable digital businesses through long-term partnerships, process-driven execution, and automation-first mindset.
                            </p>
                            <p className="text-sm text-gray-500">
                                Trusted by startups, SMEs, and founders worldwide.
                            </p>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                {services.map((service) => (
                                    <li key={service}>
                                        <Link
                                            to="/services"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <a
                                        href="mailto:hello@digicyrus.com"
                                        className="hover:text-white transition-colors"
                                    >
                                        hello@digicyrus.com
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="hover:text-white transition-colors inline-block"
                                    >
                                        Get in Touch →
                                    </Link>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <p className="text-sm text-gray-500">
                                    Ready to build something impactful?
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-navy-800 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm mb-4 md:mb-0">
                                © {new Date().getFullYear()} Digi Cyrus. All rights reserved.
                            </p>
                            <p className="text-gray-500 text-sm">
                                Building digital businesses that scale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
