import React from 'react';
import { motion } from 'framer-motion';

const Exhibitions = () => {
  // Sample exhibition data - this would be replaced with actual data
  const exhibitions = [
    {
      id: 1,
      title: "Emerging Voices",
      venue: "Student Gallery, University",
      date: "March 2024",
      type: "Group Exhibition",
      description: "A collaborative showcase featuring works by emerging student artists exploring contemporary themes.",
      status: "completed"
    },
    {
      id: 2,
      title: "Digital Realities",
      venue: "Contemporary Art Center",
      date: "June 2024",
      type: "Solo Exhibition",
      description: "An exploration of digital art and its relationship to physical reality, featuring mixed media installations.",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Memory & Identity",
      venue: "Community Arts Center",
      date: "September 2023",
      type: "Group Exhibition",
      description: "A group exhibition examining themes of memory, identity, and personal narrative through various artistic mediums.",
      status: "completed"
    },
    {
      id: 4,
      title: "Future Visions",
      venue: "Metropolitan Gallery",
      date: "December 2024",
      type: "Group Exhibition",
      description: "An upcoming exhibition featuring works that imagine possible futures through contemporary art practices.",
      status: "upcoming"
    }
  ];

  const collaborations = [
    {
      id: 1,
      title: "Cross-Media Collaboration",
      partner: "Local Music Collective",
      date: "Ongoing",
      description: "Collaborative project combining visual art with experimental music performances."
    },
    {
      id: 2,
      title: "Community Art Initiative",
      partner: "Neighborhood Arts Program",
      date: "Summer 2023",
      description: "Community-based art project working with local residents to create public installations."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-serif font-bold mb-6">Exhibitions & Projects</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Past and upcoming exhibitions, collaborations, and artistic projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exhibitions Timeline */}
      <section className="py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-semibold mb-4">Exhibitions</h2>
            <p className="text-muted text-lg">A timeline of artistic presentations</p>
          </motion.div>

          <div className="space-y-8">
            {exhibitions.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Exhibition Image Placeholder */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-video bg-white/5 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-muted">
                      Exhibition Image
                    </div>
                  </div>
                </div>

                {/* Exhibition Details */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exhibition.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {exhibition.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </span>
                    <span className="text-muted text-sm">{exhibition.type}</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-semibold mb-2">{exhibition.title}</h3>
                  <p className="text-lg text-muted mb-2">{exhibition.venue}</p>
                  <p className="text-muted mb-4">{exhibition.date}</p>
                  <p className="text-muted leading-relaxed">{exhibition.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-20">
        <div className="container-max section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-semibold mb-4">Collaborations</h2>
            <p className="text-muted text-lg">Artistic partnerships and community projects</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborations.map((collaboration, index) => (
              <motion.div
                key={collaboration.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{collaboration.title}</h3>
                <p className="text-muted mb-2">with {collaboration.partner}</p>
                <p className="text-sm text-muted mb-4">{collaboration.date}</p>
                <p className="text-muted leading-relaxed">{collaboration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark-grey">
        <div className="container-max section-padding text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-semibold mb-6">Interested in Collaborating?</h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to new artistic collaborations and exhibition opportunities. 
              Let's create something meaningful together.
            </p>
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Exhibitions;
