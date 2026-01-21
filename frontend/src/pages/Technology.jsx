import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import CTA from '../components/CTA';

const Technology = () => {
  const techCategories = [
    {
      category: 'Frontend',
      description: 'Modern frameworks and libraries for building responsive, interactive user interfaces.',
      technologies: [
        { name: 'React', description: 'Component-based UI library' },
        { name: 'Next.js', description: 'React framework for production' },
        { name: 'Vue.js', description: 'Progressive JavaScript framework' },
        { name: 'TypeScript', description: 'Typed superset of JavaScript' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
      ],
    },
    {
      category: 'Backend',
      description: 'Robust server-side technologies for building scalable APIs and applications.',
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime for backend' },
        { name: 'Express', description: 'Fast, minimalist web framework' },
        { name: 'Python', description: 'Versatile programming language' },
        { name: 'Django', description: 'High-level Python web framework' },
        { name: 'FastAPI', description: 'Modern, fast API framework' },
      ],
    },
    {
      category: 'Databases',
      description: 'Relational and NoSQL databases for different data storage needs.',
      technologies: [
        { name: 'PostgreSQL', description: 'Advanced open-source relational database' },
        { name: 'MongoDB', description: 'NoSQL document database' },
        { name: 'MySQL', description: 'Popular relational database' },
        { name: 'Redis', description: 'In-memory data structure store' },
        { name: 'Firebase', description: 'Google\'s backend-as-a-service' },
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      description: 'Cloud platforms and infrastructure tools for deployment and scaling.',
      technologies: [
        { name: 'AWS', description: 'Amazon Web Services' },
        { name: 'Firebase', description: 'Google Cloud Platform services' },
        { name: 'Vercel', description: 'Frontend deployment platform' },
        { name: 'Docker', description: 'Containerization platform' },
        { name: 'Kubernetes', description: 'Container orchestration' },
      ],
    },
    {
      category: 'Mobile Development',
      description: 'Frameworks and tools for building native and cross-platform mobile apps.',
      technologies: [
        { name: 'React Native', description: 'Cross-platform mobile framework' },
        { name: 'Flutter', description: 'Google\'s UI toolkit' },
        { name: 'Swift', description: 'iOS native development' },
        { name: 'Kotlin', description: 'Android native development' },
      ],
    },
    {
      category: 'Automation & AI',
      description: 'Tools and platforms for automation, AI integration, and workflow optimization.',
      technologies: [
        { name: 'OpenAI API', description: 'AI and machine learning capabilities' },
        { name: 'Zapier', description: 'Workflow automation platform' },
        { name: 'Make (Integromat)', description: 'Visual automation platform' },
        { name: 'n8n', description: 'Open-source workflow automation' },
        { name: 'Python Scripts', description: 'Custom automation solutions' },
      ],
    },
    {
      category: 'Design & Prototyping',
      description: 'Design tools for creating user interfaces and experiences.',
      technologies: [
        { name: 'Figma', description: 'Collaborative interface design' },
        { name: 'Sketch', description: 'Digital design toolkit' },
        { name: 'Adobe XD', description: 'User experience design software' },
        { name: 'InVision', description: 'Digital product design platform' },
      ],
    },
    {
      category: 'DevOps & Tools',
      description: 'Development tools and practices for efficient software delivery.',
      technologies: [
        { name: 'Git', description: 'Version control system' },
        { name: 'GitHub/GitLab', description: 'Code hosting and collaboration' },
        { name: 'CI/CD Pipelines', description: 'Automated testing and deployment' },
        { name: 'Jira', description: 'Project management and tracking' },
        { name: 'Slack', description: 'Team communication' },
      ],
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Technology Stack
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Modern, proven technologies we use to build scalable digital solutions
          </p>
        </div>
      </Section>

      {/* MERN Stack Highlight */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              The MERN Stack & Beyond
            </h2>
            <p className="text-xl text-gray-600">
              We specialize in the MERN stack, but we're not limited to it
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-navy-900 mb-2">M</div>
                <div className="text-lg font-semibold text-gray-700">MongoDB</div>
                <div className="text-sm text-gray-600 mt-1">NoSQL Database</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-900 mb-2">E</div>
                <div className="text-lg font-semibold text-gray-700">Express</div>
                <div className="text-sm text-gray-600 mt-1">Backend Framework</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-900 mb-2">R</div>
                <div className="text-lg font-semibold text-gray-700">React</div>
                <div className="text-sm text-gray-600 mt-1">Frontend Library</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-900 mb-2">N</div>
                <div className="text-lg font-semibold text-gray-700">Node.js</div>
                <div className="text-sm text-gray-600 mt-1">Runtime Environment</div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-700 text-center">
                The MERN stack is our bread and butter—it's fast, scalable, and perfect for modern 
                web applications. But we're technology agnostic and choose the best tools for each project.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Technology Categories */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Technology Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern digital solutions
            </p>
          </div>
          <div className="space-y-8">
            {techCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    {category.category}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-white rounded-lg p-4 border border-gray-200"
                    >
                      <div className="font-semibold text-navy-900 mb-1">
                        {tech.name}
                      </div>
                      <div className="text-sm text-gray-600">{tech.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technology Philosophy */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
            Our Technology Philosophy
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                Right Tool, Right Job
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're not dogmatic about any particular technology. We choose the best tool for 
                your specific needs, considering factors like scalability, maintainability, team 
                expertise, and long-term viability.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                Modern, But Proven
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We use modern technologies, but we avoid bleeding-edge tools that haven't been 
                battle-tested. Your project's stability and success matter more than using the 
                latest trend.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                Scalability First
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every technology choice considers scalability. We build solutions that can grow 
                with your business, from startup to enterprise scale.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                Security & Compliance
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Security isn't an afterthought—it's built in. We choose technologies with strong 
                security track records and ensure compliance with relevant regulations (HIPAA, 
                GDPR, PCI-DSS, etc.).
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        headline="Ready to Build With Modern Technology?"
        description="Let's discuss which technologies are right for your project and how we can build a scalable solution."
        primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCTA={{ text: 'See Our Services', href: '/services' }}
      />
    </div>
  );
};

export default Technology;
