import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

const certificates = [
  {
    title: 'Full Stack Web Development',
    issuer: 'MERN Stack',
    date: '2023',
    image: '/certificates/mern.jpg',
    link: 'https://example.com/cert1'
  },
  {
    title: 'Advanced JavaScript',
    issuer: 'Modern JS Concepts',
    date: '2023',
    image: '/certificates/js.jpg',
    link: 'https://example.com/cert2'
  },
  {
    title: 'React Development',
    issuer: 'React Mastery',
    date: '2023',
    image: '/certificates/react.jpg',
    link: 'https://example.com/cert3'
  },
  {
    title: 'Node.js Backend',
    issuer: 'Server-Side Development',
    date: '2023',
    image: '/certificates/node.jpg',
    link: 'https://example.com/cert4'
  }
];

const Certificates = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.h2
              className="display-4 text-light mb-5 position-relative section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Certificates
            </motion.h2>
            <div className="row g-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="col-md-6 col-lg-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="certificate-card card h-100">
                    <div className="position-relative overflow-hidden">
                      <img
                        src={cert.image}
                        className="card-img-top"
                        alt={cert.title}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title">{cert.title}</h3>
                      <div className="card-text">
                        <p className="mb-1">
                          <strong>Issuer:</strong> {cert.issuer}
                        </p>
                        <p className="mb-3">
                          <strong>Date:</strong> {cert.date}
                        </p>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-link mt-auto d-inline-flex align-items-center gap-2"
                      >
                        View Certificate
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 