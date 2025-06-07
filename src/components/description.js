import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 70px;
`;

const HeroContent = styled.div`
  max-width: 1000px;
`;

const Greeting = styled(motion.p)`
  color: #64ffda;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  color: #ccd6f6;
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  color: #8892b0;
  font-size: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  color: #8892b0;
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 3rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  color: #ccd6f6;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const Hero = () => {
    return (
        <HeroSection id="home">
            <HeroContent>
                <Greeting
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hi, My name is : Saber Hamoudan
                </Greeting>
                <Name
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                 
                </Name>
                <Subtitle
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    I build things for the web.
                </Subtitle>
                <Description
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    I'm a software developer specializing in building exceptional digital experiences.
                    Currently, I'm focused on building accessible, human-centered products.
                </Description>
                <SocialLinks
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </SocialLink>
                    <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </SocialLink>
                    <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </SocialLink>
                </SocialLinks>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero; 