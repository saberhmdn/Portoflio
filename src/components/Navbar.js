import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <Link className="navbar-brand fw-bold text-primary" to="/">
            SH
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <FaBars className="text-dark" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/certificates' ? 'active' : ''}`}
                  to="/certificates"
                >
                  Certificates
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="offcanvas offcanvas-end show"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                onClick={closeMobileMenu}
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
            <div className="offcanvas-body d-flex flex-column">
              <div className="mt-5">
                <Link
                  className="d-block py-3 text-dark text-decoration-none fs-4"
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  className="d-block py-3 text-dark text-decoration-none fs-4"
                  to="/about"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  className="d-block py-3 text-dark text-decoration-none fs-4"
                  to="/skills"
                  onClick={closeMobileMenu}
                >
                  Skills
                </Link>
                <Link
                  className="d-block py-3 text-dark text-decoration-none fs-4"
                  to="/certificates"
                  onClick={closeMobileMenu}
                >
                  Certificates
                </Link>
                <Link
                  className="d-block py-3 text-dark text-decoration-none fs-4"
                  to="/contact"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 