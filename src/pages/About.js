import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

const About = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.h2
              className="display-4 text-light mb-4 position-relative section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <div className="row g-4">
              <motion.div
                className="col-md-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-secondary fs-5 lh-lg">
                  Hello! I'm a passionate software developer with a keen interest in creating
                  beautiful and functional web applications. My journey in web development
                  started with a curiosity about how things work on the internet, and it
                  has evolved into a professional pursuit.
                </p>
              </motion.div>
              <motion.div
                className="col-md-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-secondary fs-5 lh-lg">
                  I enjoy the process of turning complex problems into simple, beautiful,
                  and intuitive solutions. When I'm not coding, you'll find me exploring
                  new technologies, contributing to open-source projects, or learning new
                  skills to enhance my development capabilities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 