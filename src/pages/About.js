import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            <h1 className="text-5xl font-serif font-bold mb-6">About</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              A student and emerging visual artist exploring contemporary themes through innovative mediums
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-dark-grey">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="w-full h-auto bg-white/5 rounded-lg overflow-hidden">
                <img 
                  src="/images/jrstand.png" 
                  alt="Juan-Ridge Isaacs - Visual Artist"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-serif font-semibold mb-6">Artist Statement</h2>
              
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  As a student and emerging visual artist, I am deeply committed to exploring the intersection 
                  of traditional and contemporary art forms. My work investigates themes of identity, memory, 
                  and the human experience through mixed media approaches.
                </p>
                
                <p>
                  Through experimentation with digital and analog techniques, I seek to create works that 
                  challenge conventional boundaries and invite viewers to engage with complex narratives. 
                  Each piece is a journey of discovery, blending personal experiences with universal themes.
                </p>
                
                <p>
                  My artistic practice is rooted in curiosity and a desire to understand the world around me. 
                  As I continue my studies, I am constantly evolving my approach, pushing the limits of 
                  what art can be and how it can connect with audiences in meaningful ways.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-xl font-semibold mb-4">Education & Background</h3>
                <ul className="space-y-2 text-muted">
                  <li>• Currently pursuing studies in Visual Arts</li>
                  <li>• Specializing in mixed media and digital art</li>
                  <li>• Active in student exhibitions and collaborative projects</li>
                  <li>• Exploring contemporary art theory and practice</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-semibold mb-4">Creative Process</h2>
            <p className="text-muted text-lg">How I approach my work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Research & Inspiration",
                description: "I begin each project with extensive research, drawing from contemporary art theory, personal experiences, and cultural observations."
              },
              {
                title: "Experimentation",
                description: "Through trial and error, I explore different mediums and techniques, allowing the process to inform the final outcome."
              },
              {
                title: "Refinement",
                description: "Each piece undergoes careful consideration and refinement, ensuring it communicates my intended message effectively."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
