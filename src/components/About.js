import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const AboutContent = styled.div`
  max-width: 1000px;
`;

const Title = styled(motion.h2)`
  color: #ccd6f6;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background-color: #64ffda;
  }
`;

const AboutText = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled(motion.p)`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const About = () => {
    return (
        <AboutSection id="about">
            <AboutContent>
                <Title
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </Title>
                <AboutText>
                    <Text
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Hello! I'm a passionate software developer with a keen interest in creating
                        beautiful and functional web applications. My journey in web development
                        started with a curiosity about how things work on the internet, and it
                        has evolved into a professional pursuit.
                    </Text>
                    <Text
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        I enjoy the process of turning complex problems into simple, beautiful,
                        and intuitive solutions. When I'm not coding, you'll find me exploring
                        new technologies, contributing to open-source projects, or learning new
                        skills to enhance my development capabilities.
                    </Text>
                </AboutText>
            </AboutContent>
        </AboutSection>
    );
};

export default About; 