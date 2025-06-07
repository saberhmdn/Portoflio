import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;

`;

const ProjectsContent = styled.div`
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCardCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #64ffda;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: #0a192f;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const CertificateDate = styled.p`
  color: #64ffda;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: #ccd6f6;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const certificates = [
  {
    image: '',
    title: 'Python Basic Certificate',
    description: 'Completed the Python Basic course, mastering fundamental programming concepts and Python syntax.',
    date: 'Issued: 2024',
    issuer: 'HackerRank',
    link: '../mycertificate/python_basic certificate.pdf',
  },
  {
    title: 'SQL Intermediate Certificate',
    description: 'Achieved intermediate level proficiency in SQL, including complex queries, joins, and database management.',
    date: 'Issued: 2024',
    issuer: 'HackerRank',
    link: '../mycertificate/sql_intermediate certificate.pdf',
  },
  {
    title: 'Academic Certificate',
    description: 'University academic certificate demonstrating completion of studies.',
    date: 'Issued: 2024',
    issuer: 'UAE University',
    link: '../mycertificate/_certificate_saber-hamoudan-etu-uae-ac-ma_bf9921c7-2d6a-431d-a5a6-7290e12886ce.pdf',
  },
  {
    title: 'Academic Certificate',
    description: 'Additional academic certification from UAE University.',
    date: 'Issued: 2024',
    issuer: 'UAE University',
    link: '../mycertificate/_certificate_saber-hamoudan-etu-uae-ac-ma_23895033-80ff-4829-9361-bbf64c161eb0.pdf',
  },
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </Title>
        <ProjectsGrid
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {certificates.map((certificate, index) => (
            <ProjectCardCard
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <ProjectImage>
                <FaCertificate />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{certificate.title}</ProjectTitle>
                <CertificateDate>{certificate.date}</CertificateDate>
                <ProjectDescription>{certificate.description}</ProjectDescription>
                <ProjectDescription>Issued by: {certificate.issuer}</ProjectDescription>
                <ProjectLinks>
                  <ProjectLink href={certificate.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCardCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects; 