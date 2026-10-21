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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "React JS",
    icon: reactjs,
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
 // {
   // name: "figma",
    //icon: figma,
  //},
 
];

const experiences = [
  //{
  //  title: "Software developer",
    //company_name: "Four Pillars",
   // icon: starbucks,
    //iconBg: "#383E56",
    //date: "Feb 2025-July 2025",
    //points: [
      //"I completed a 6-month internship as a Software Developer, where I worked primarily with React.js and Node.js to develop a full-stack portfolio website for a Limited Liability Partnership (LLP). During this time, I was responsible for building a responsive, user-friendly frontend and integrating it with backend APIs to manage dynamic content. The project helped me gain practical experience in developing and deploying real-world web applications, as well as collaborating with a team to meet project requirements and deadlines. This internship significantly enhanced my skills in full-stack development and exposed me to the end-to-end process of building a professional web solution.",
    //],
  //},
  {
   title: "Software developer",
    company_name: "Four Pillars",
    icon: tesla,
    iconBg: "#383E56",
    date: "Feb 2025-July 2025",
    points: [
      "I completed a 6-month internship as a Software Developer, where I worked primarily with React.js and Node.js to develop a full-stack portfolio website for a Limited Liability Partnership (LLP). During this time, I was responsible for building a responsive, user-friendly frontend and integrating it with backend APIs to manage dynamic content. The project helped me gain practical experience in developing and deploying real-world web applications, as well as collaborating with a team to meet project requirements and deadlines. This internship significantly enhanced my skills in full-stack development and exposed me to the end-to-end process of building a professional web solution.",
     
    ],
  },
  //{
    //title: "Web Developer",
    //company_name: "Shopify",
    //icon: shopify,
    //iconBg: "#383E56",
    //date: "Jan 2022 - Jan 2023",
    //points: [
      //"Developing and maintaining web applications using React.js and other related technologies.",
      //"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //"Implementing responsive design and ensuring cross-browser compatibility.",
      //"Participating in code reviews and providing constructive feedback to other developers.",
    //],
  //},
  //{
    //title: "Full stack Developer",
    //company_name: "Meta",
    //icon: meta,
    //iconBg: "#E6DEDD",
    //date: "Jan 2023 - Present",
    //points: [
      //"Developing and maintaining web applications using React.js and other related technologies.",
      //"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //"Implementing responsive design and ensuring cross-browser compatibility.",
      //"Participating in code reviews and providing constructive feedback to other developers.",
   // ],
  //},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online book store",
    description:
      "This online book shopping website allows users to browse, search, and purchase books easily through a clean and responsive interface. Developed using HTML, CSS, and JavaScript for the frontend, and PHP with MySQL for the backend, it includes features like user registration, cart management, and order processing.",
   
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Flower shop",
    description:
      "This online flower shop website offers a seamless experience for browsing, selecting, and ordering floral arrangements for various occasions. Built with React.js and Material UI on the frontend, and powered by Node.js on the backend for efficient data handling and order management, the site supports real-time interactions, secure checkout.",
   
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Villa Booking",
    description:
      "This villa booking website offers a smooth experience for exploring the property, viewing amenities, and reserving stays or events. Built with a clean design and real-time booking features, it ensures easy navigation, secure reservations, and a great user experience for vacations or celebrations.",
   
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };