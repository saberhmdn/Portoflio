import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

const Home = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.p
              className="text-primary fs-5 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              className="display-3 fw-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Saber Hamoudan.
            </motion.h1>
            <motion.h2
              className="display-4 text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build things for the web.
            </motion.h2>
            <motion.p
              className="lead text-secondary mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm a software developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="btn btn-outline-primary btn-lg px-4 py-2"
              >
                Get In Touch
              </Link>
            </motion.div>
            <motion.div
              className="d-flex gap-4 mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-4 social-link"
                whileHover={{ y: -3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-4 social-link"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-4 social-link"
                whileHover={{ y: -3 }}
              >
                <FaTwitter />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 