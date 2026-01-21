import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'SaaS & Admin Dashboards',
    'Automation & AI Integrations',
    'Digital Marketing',
    'Branding & Identity',
    'Multiple Services',
    'Not Sure Yet',
  ];

  return (
    <div>
      {/* Page Header */}
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Let's Build Something Impactful
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Ready to scale your digital business? Let's talk about how Digi Cyrus can help.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you for reaching out! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    Something went wrong. Please try again or email us directly at hello@digicyrus.com
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="Tell us about your project, goals, or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Email</h3>
                  <a
                    href="mailto:hello@digicyrus.com"
                    className="text-navy-600 hover:text-navy-800 transition-colors"
                  >
                    hello@digicyrus.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Response Time</h3>
                  <p className="text-gray-700">
                    We typically respond within 24 hours, Monday through Friday.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">What to Expect</h3>
                  <p className="text-gray-700 mb-2">
                    After you reach out, we'll:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-navy-600 mr-2">•</span>
                      <span>Schedule a discovery call to understand your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-navy-600 mr-2">•</span>
                      <span>Provide a detailed proposal and timeline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-navy-600 mr-2">•</span>
                      <span>Answer any questions you have about working together</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  Trust & Transparency
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We believe in building trust through transparent communication and consistent
                  delivery. When you work with Digi Cyrus, you're not just hiring a service
                  provider—you're gaining a partner committed to your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Message */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Ready to Scale Your Digital Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you build, automate, and scale. No fluff, just results.
          </p>
          <Button variant="primary" className='text-black' size="lg" href="/about">
            Learn More About Us
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
