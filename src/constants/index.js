import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  inno,
  threejs,
  fixcraft,
  spaceInvasion,
  portfolio,
  chatbot,
  caw,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.JS Developer",
    icon: web,
  },
  {
    title: "Next.JS Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Node.JS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Developer",
    company_name: "Innostax Software Labs",
    icon: inno,
    iconBg: "#FFF",
    date: "Nov 2020 - May 2021",
    points: [
      "Identified web-based user interaction and developed the highly-responsive user interface components via React concept.",
      "Worked in Agile Methodologies for incremental development and ensured timely delivery of the product.",
      "Built multiple endpoints using Express and Node JS to provide better communication between the Backend and Frontend.",
      "Tested the application with different automation tools like Playwright, Jest, React-testing-library, etc.",
    ],
  },
  {
    title: "Software Development Engineer - I",
    company_name: "Innostax Software Labs",
    icon: inno,
    iconBg: "#FFF",
    date: "Moy 2021 - May 2022",
    points: [
      "Assisted 5 software personnel in handling project-related work and fulfilling client requirements.",
      "Migrated existing React app with Bootstrap to Next.js with Tailwind for performance optimisation.",
      "Built an Admin portal using Django Admin to effectively manage the back-end operation.",
      "Added chatroom functionality with video support using Twilio Programmable Video and Messaging API's.",
      "Integrated Storybook in existing products and build independent components with maximum test coverage with Jest.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Fixcraft",
    icon: fixcraft,
    iconBg: "#FFF",
    date: "May 2022 - May 2023",
    points: [
      "Configured GitLab runner to use CI/CD pipeline with Google Cloud for various web projects.",
      "Actively participated in UI/UX discussions and utilized Tailwind CSS to revamp the existing React JS application to a Next.js application.",
      "Implemented service workers for additional support in developing Progressive Web Applications (PWAs).",
      "Developed front-end user interface using React JS and Next.js for web applications.",
      "Utilised Jest for testing and ensuring maximum test coverage of independent components.",
      "Collaborated with the development team to ensure the timely delivery of products.",
      "Worked on several web projects using agile methodologies for incremental development.",
    ],
  },
  {
    title: "Software Developement Engineer II",
    company_name: "CAW Studios",
    icon: caw,
    iconBg: "#FFF",
    date: "May 2023 - Present",
    points: [
      "Developed and maintained software solutions, contributing to project architecture at ChimpsAtWork Studios Pvt. Ltd.",
      "Conducted rigorous code reviews and testing, ensuring reliable and scalable code delivery.",
      "Upheld strict confidentiality standards for sensitive information, demonstrating professionalism in interactions.",
      "Contributed to continuous improvement, staying updated on industry trends and enhancing software development processes.",
      "Adhered to company policies and termination protocols, maintaining compliance and ethical conduct.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Portfolio",
    description:
      "My 3D portfolio, built with three.js, React, and Tailwind CSS, showcases my creative skills in the world of computer graphics. Using the latest 3D software and web technologies, I bring ideas to life with stunning visual effects, lifelike animations, and immersive environments. Each project in my portfolio is a testament to my passion for the craft and my commitment to delivering top-quality work.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Hemant-Agrawal/Portfolio",
  },
  {
    name: "Chat-e-Bot",
    description:
      "Chat-e-Bot is a Django-based chatbot designed to answer placement-related queries. It utilizes Natural Language Processing to provide accurate responses to user queries. The bot can be easily integrated into any website or application.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/Hemant-Agrawal/Chat-e-Bot",
  },
  {
    name: "Space Invasion",
    description:
      "Introducing Space Invasion - an engaging space-themed action game built with Python and Pygame. With its captivating storyline and immersive gameplay, this game challenges you to protect Earth from an alien invasion using your strategic skills and precision. Get ready to experience an intergalactic battle like no other!",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
    ],
    image: spaceInvasion,
    source_code_link: "https://github.com/Hemant-Agrawal/Space-Invasion",
  },
];

export { services, technologies, experiences, projects };
