import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const SkillsContent = styled.div`
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const SkillName = styled.h3`
  color: #ccd6f6;
  font-size: 1.2rem;
`;

const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'C++', icon: <SiTypescript /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Git', icon: <FaGitAlt /> },
];

const Skills = () => {
    return (
        <SkillsSection id="skills">
            <SkillsContent>
                <Title
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Skills
                </Title>
                <SkillsGrid
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <SkillIcon>{skill.icon}</SkillIcon>
                            <SkillName>{skill.name}</SkillName>
                        </SkillCard>
                    ))}
                </SkillsGrid>
            </SkillsContent>
        </SkillsSection>
    );
};

export default Skills; 