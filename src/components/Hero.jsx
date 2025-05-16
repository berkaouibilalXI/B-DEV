import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';
import me from '../assets/hero.jpg'; 

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-10" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={me}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-500"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Es Salem Alaykom, I'm <span className="text-purple-600">Berkaoui Bilal</span>
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
          >
            <TypeAnimation
              sequence={[
                'Algerian Developer',
                2000,
                '22 Years Old',
                2000,
                'Student',
                2000,
                'FullStack Developer',
                2000,
                'React Specialist',
                2000,
                'API Developer',
                2000,
                'MongoDB Specialist',
                2000,
                'Express.js Developer',
                2000,
                'TailwindCSS Specialist',
                2000,
                'Next.js Developer',
                2000,
                'SQL, NoSQL Database Developer',
                2000,
                'Node.js Developer',
                2000,
                'SEO Enthusiast',
                2000,
                'Cyber Analyst',
                2000,
                'Tech Enthusiast',
                2000,
                'Open Source Contributor',
                2000,
                'Future AI Engineer',
                2000,
                '& Much More...',
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4 mb-8"
          >
            {[
              { Icon: Github, href: 'https://github.com/berkaouibilalXI' },
              { Icon: Mail, href: 'mailto:berkaouibilal@mail.ru' },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/50"
              >
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
