import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiJest } from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: <FaReact />, level: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
      { name: 'JavaScript', icon: <FaJs />, level: 90 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
      { name: 'Express', icon: <SiExpress />, level: 80 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
      { name: 'SQL', icon: <FaDatabase />, level: 80 },
      { name: 'Python', icon: <FaPython />, level: 70 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 85 },

    ],
  },
];

const Skills = () => {
  let width;
  if (typeof document !== 'undefined') {
    width = document.body.clientWidth;
  }

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
              Skills
            </motion.h2>
            <motion.div
              className="d-flex flex-column gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="d-flex flex-wrap gap-4 justify-content-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-card bg-light rounded-3 p-4 d-flex align-items-center gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + skillIndex * 0.1 }}
                    >
                      <div className="text-primary fs-2">{skill.icon}</div>
                      <div>
                        <h3 className="h5 mb-2">{skill.name}</h3>
                        <div className="progress" style={{ width: '100px', height: '4px' }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: `${skill.level}%` }}
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 