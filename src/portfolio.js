const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://enyioman.github.io/cleanfolio/',
  title: 'EN.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Enyioma Nwadibia',
  role: 'Cloud & DevOps Engineer',
  description:
    'I am a seasoned Cloud & DevOps Engineer with over 4 years of experience in the field. I have worked with various organizations helping them streamline their software development and IT operations processes. I have a passion for automation, continuous integration, and continuous delivery. I have also written extensively on these topics as my contribution to the growth of the Tech community. My expertise includes containerization, orchestration, cloud infrastructure, and automation. I am committed to promoting best practices in DevOps, fostering collaboration between development and operations teams, and driving efficiency throughout the software development lifecycle. When not working on DevOps initiatives, I enjoys writing, reading, music and traveling.',
  resume: 'https://drive.google.com/file/d/1h0NxUwVDBwJPpBOCrHc_mneP2XDD1ZTU/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/enyioman/',
    github: 'https://github.com/enyioman',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Infrastructure Automation',
    description:
      'Automate the build of a 3-Tier Architecture Solution for consistency, scalabity and reusability.',
    stack: ['Terraform', 'Ansible', 'AWS'],
    sourceCode: 'https://github.com/enyioman/project19',
    livePreview: 'https://gitlab.com/enyioma/terraform-project18',
  },
  {
    name: 'CI/CD Pipeline',
    description:
      'A Continous Integration/Continous Delivery Infracstructure for a smoother path to production and efficiency.',
    stack: ['Jenkins', 'Ansible', 'Artifactory', 'AWS'],
    sourceCode: 'https://github.com/enyioman/project14',
    livePreview: 'https://github.com/enyioman/project14/blob/main/project14.md',
  },
  {
    name: '3-Tier Cloud Solution',
    description:
      'A robust, secured and highly scalable Cloud Infrastructure. Offering cost-savings and faster time to market.',
    stack: ['AWS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Client-Server DB Solution',
    description:
      'Configured two database servers with different roles. Enabling efficient resource delivery and low-cost maintenance.',
    stack: ['AWS', 'MySQL'],
    sourceCode: 'https://github.com/enyioman/project5',
    livePreview: 'https://github.com/enyioman/project5/blob/main/project5.md',
  },
  {
    name: 'MERN Stack Deployment',
    description:
      'Deploy any application stack to Cloud for reduced IT costs, business continuity and scalability.',
    stack: ['AWS'],
    sourceCode: 'https://github.com/enyioman/Project3',
    livePreview: 'https://github.com/enyioman/Project3/blob/main/project3.md',
  },
  {
    name: 'Configuration Management',
    description:
      'For consistency of systems and software, an entire application environment can be orchestrated with Ansible.',
    stack: ['AWS', 'Ansible', 'Jenkins'],
    sourceCode: 'https://github.com/enyioman/project11',
    livePreview: 'https://github.com/enyioman/project11/blob/main/project11.md',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'AWS',
  'GCP',
  'Kubernetes',
  'Docker',
  'Terraform',
  'Jenkins',
  'Ansible',
  'Sonarqube',
  'Vault',
  'Artifactory',
  'MySQL',
  'Postgres',
  'NoSQL',
  'Python',
  'Shell Scripting',
  'Linux',
  'Git',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hello@zaiany.tech',
}

export { header, about, projects, skills, contact }
