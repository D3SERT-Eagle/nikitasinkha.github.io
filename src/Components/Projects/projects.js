import React from 'react';
import './projects.scss';

const projectList = [
  {
    title: 'Netrals Portal for Arbitration and Mediation With AI Grammar Checker',
    description: 'Case management portal built for legal professionals with integrated AI-powered grammar correction optimized for legal writing. Delivered as a faster, cost-effective alternative to Grammarly using Azure AI Studio.',
    tech: ['ReactJS', 'Python', 'Azure AI Studio', 'C#', 'MySQL'],
    link: 'https://neutralsportal.namadr.com/#/'
  },
  {
    title: 'Fraud & Anomaly Detection',
    description: 'Low-latency fraud detection models for banking, insurance, and food sectors using behavioral and transactional signals.',
    tech: ['Python', 'Scikit-learn', 'Azure'],
    link: 'private'
  },
  {
    title: 'RAG Customer Agent',
    description: 'Enterprise-ready RAG agents using HuggingFace + Weaviate for contextual sales and support queries across channels.',
    tech: ['ReactJS', 'FastAPI', 'HuggingFace', 'Weaviate', 'Azure', 'AWS'],
    link: 'https://admin.prod.ryzeai.ai/dashboard'
  },
  {
    title: 'Lead Management System',
    description: 'Custom lead tracking solution with document management and expense logging for India First Life Insurance.',
    tech: ['ReactJS', 'C#', 'MySQL', 'Azure', 'Kubernetes'],
    link: 'private'
  },
  {
    title: 'Pinfigurator Engine',
    description: 'Image-based lapel pin designer using OpenCV and Flask, integrated with Shopify for seamless order flow.',
    tech: ['Python', 'Flask', 'OpenCV', 'NumPy', 'Shopify'],
    link: 'https://pinsource.com/pages/pinfigurator'
  },
  {
    title: 'Metahuman Virtual Twin',
    description: 'Voice and video avatar generation platform with facial animation and voice cloning for interactive applications.',
    tech: ['ReactJS', 'FastAPI', 'OpenCV', 'NumPy', 'WebSockets', 'AWS'],
    link: '#'
  },
  {
    title: 'SkillsEngine E-Learning',
    description: 'Live learning platform for MasterCard with role-based content delivery and real-time progress tracking.',
    tech: ['ReactJS', 'C#', 'Azure', 'WebSockets'],
    link: 'private'
  },
  {
    title: 'AI Developer Copilot for Internal Company Use',
    description: 'VS Code extension that assists in coding and reverse-engineering with AI-generated context-aware suggestions.',
    tech: ['ReactJS', 'Python', 'C#', 'Azure'],
    link: 'private'
  },
  {
    title: 'F1 DevOps Portal',
    description: 'Centralized portal for monitoring cloud infrastructure, CI/CD pipelines, and deployment health. Embedded Grafana, AI reporting, and Kubernetes insights.',
    tech: ['ReactJS', 'SCSS', 'Azure Kubernetes', 'Logic Apps', 'C#', 'Python', 'GitHub', 'Grafana', 'SonarQube'],
    link: 'private'
  }
];



const Projects = () => {
  return (
    <div className='Projects'>
      <div style={{ marginTop: '0px' }} className='SectionTitle'>
        <h1 id='SectionText'>Projects</h1>
        <div id='Underline'></div>
      </div>
      <div className='ProjectsContent'>
        {projectList.map((project, index) => (
          <div className='ProjectCard' key={index}>
            <div className='ProjectGlass'>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className='TechStack'>
                {project.tech.map((tech, i) => (
                  <span className='TechTag' key={i}>{tech}</span>
                ))}
              </div>
              {project.link !== 'private'?<a className='ProjectLink' href={project.link} target='_blank' rel='noopener noreferrer'>
                View Project →
              </a>
              :<a className='ProjectLink' style={{pointerEvents:'none !important'}} onClick={(e)=>{e.preventDefault()}} href={project.link} target='_blank' rel='noopener noreferrer'>
              Private Project
            </a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
