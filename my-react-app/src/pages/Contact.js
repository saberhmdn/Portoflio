import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact Me
            </motion.h2>
            <div className="row g-5 mt-4">
              <motion.div
                className="col-md-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="d-flex flex-column gap-4">
                  <motion.div
                    className="d-flex align-items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="text-primary fs-4">
                      <FaEnvelope />
                    </div>
                    <div className="text-light">saberhamoudan239@gmail.com</div>
                  </motion.div>
                  <motion.div
                    className="d-flex align-items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="text-primary fs-4">
                      <FaPhone />
                    </div>
                    <div className="text-light">+212631187339</div>
                  </motion.div>
                  <motion.div
                    className="d-flex align-items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="text-primary fs-4">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="text-light">Maroc,Tetouen</div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="col-md-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <form ref={formRef} onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label text-light">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control bg-dark text-light border-secondary"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label text-light">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control bg-dark text-light border-secondary"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label text-light">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control bg-dark text-light border-secondary"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label text-light">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control bg-dark text-light border-secondary"
                      rows="5"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="btn btn-outline-primary align-self-start px-4 py-2"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                  {status.message && (
                    <motion.div
                      className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 