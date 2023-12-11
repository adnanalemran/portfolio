import {
    backend,
    creator,
    css,
    express,
    figma,
    firebase,
    html,
    htmlcss,
    javascript,
    js,
    kitchen,
    mobile,
    mongo,
    mongodb,
    node,
    nodejs,
    react,
    reactjs,
    tailwind,
    tbootstrap,
    toylab,
    tuneTutore,
    web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "HTML & CSS",
    company_name: "html_css",
    icon: htmlcss,
    iconBg: "#383E56",
    date: "Web structure with Visual Design",
    points: [
      "Proficient in creating well-structured and semantically meaningful HTML5 documents.",
      "Experienced in crafting responsive and mobile-friendly web pages using CSS3 media queries and flexbox/grid layouts.",
      "Skilled in customizing and styling websites through CSS preprocessors like Sass or Less.",
      "Familiar with cross-browser compatibility issues and implementing CSS resets for consistent user experiences.",
    ],
  },
  {
    title: "Bootstrap & Tailwind",
    company_name: "html_css.png",
    icon: tbootstrap,
    iconBg: "#383E56",
    date: "Class-based CSS frameworks.",
    points: [
      "Proficient in developing responsive and user-friendly web interfaces using Bootstrap, utilizing its powerful grid system and components.",
      "Demonstrated expertise in creating modern and visually appealing UI designs with Tailwind CSS, leveraging its utility-first approach and extensive class library.",
      "Hands-on experience in customizing Bootstrap and Tailwind styles to match brand guidelines and project requirements.",
      "Implemented accessibility best practices with both Bootstrap and Tailwind, ensuring inclusive user experiences for all.",
    ],
  },
  {
    title: "JavaScript",
    company_name: "Tesla",
    icon: js,
    iconBg: "#E6DEDD",
    date: "Programming, Web Interactivity.",
    points: [
      "Developed interactive front-end features using JavaScript, HTML, and CSS.",
      "Utilized JavaScript to build responsive and mobile-friendly web applications.",
      "Implemented client-side validation and form handling for improved user experience.",
      "Collaborated with a cross-functional team to troubleshoot and debug JavaScript-related issues.",
    ],
  },
  {
    title: "React",
    company_name: "Shopify",
    icon: react,
    iconBg: "#383E56",
    date: "JavaScript user interfaces.",
    points: [
      "Proficient in building interactive user interfaces using React and its ecosystem.",
      "Extensive experience in creating reusable and modular components to streamline development.",
      "Skilled in state management with React hooks and Redux to maintain application state efficiently.",
      "Implemented responsive design and mobile optimization to ensure seamless user experiences across devices.",
    ],
  },
  {
    title: "Firebase",
    company_name: "Google",
    icon: firebase,
    iconBg: "#E6DEDD",
    date: "Real-time database platform.",
    points: [
      "Developed real-time applications using Firebase's Firestore and Realtime Database.",
      "Implemented Firebase Authentication for secure user sign-up and login functionalities.",
      "Utilized Firebase Cloud Functions to handle server-side logic and backend operations.",
      "Integrated Firebase Cloud Messaging for push notifications and user engagement.",
    ],
  },
  {
    title: "MongoDB",
    company_name: "Meta",
    icon: mongo,
    iconBg: "#E6DEDD",
    date: "NoSQL database system.",
    points: [
      "Proficient in designing and implementing MongoDB databases for scalable and high-performance applications.",
      "Extensive experience in querying and optimizing MongoDB databases to ensure efficient data retrieval.",
      "Hands-on expertise in setting up and managing MongoDB clusters for high availability and fault tolerance.",
      "Implemented robust security measures, including authentication and authorization, to safeguard MongoDB databases.",
    ],
  },
  {
    title: "Node.Js",
    company_name: "Meta",
    icon: node,
    iconBg: "#E6DEDD",
    date: "JavaScript runtime environment",
    points: [
      "Developed scalable and high-performance applications using Node.js.",
      "Utilized Node.js to build RESTful APIs for seamless client-server communication.",
      "Implemented real-time features with WebSockets in Node.js for enhanced user experience.",
      "Utilized npm packages to streamline development and enhance project efficiency.",
    ],
  },
  {
    title: "Express.Js",
    company_name: "Meta",
    icon: express,
    iconBg: "#E6DEDD",
    date: "Server-side JavaScript framework.",
    points: [
      "Developed and maintained RESTful APIs using Express.js to facilitate efficient communication between server and client.",
      "Implemented middleware functions for authentication, logging, and error handling to enhance application security and stability.",
      "Utilized Express.js to build scalable web applications, reducing response times and improving overall user experience.",
      "Worked with Node.js and Express.js to create real-time applications with WebSockets, enabling seamless bidirectional communication.",
    ],
  },
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
    name: "Tech Spot",
    description:
      "Tech Spot is a dynamic React website dedicated to all things technology and electronics. This platform is designed to provide an engaging and interactive experience for tech enthusiasts, offering a wide range of features and functionalities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tuneTutore,
    source_code_link: "https://github.com/adnanalemran/tech-spot-ClientSite",
    demo_link: "https://tech-spot-f78f5.web.app/",
    server_link: "https://github.com/adnanalemran/tech-spot-Server-site",
  },
  {
    name: "Fresh Taste",
    description:
      "Fresh Taste, the ultimate solution for restaurant management. With a wide range of features, it's the perfect choice for restaurateurs looking to streamline their operations and offer a delightful experience to their customers.",
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
    image: kitchen,
    source_code_link: "https://github.com/adnanalemran/fresh-taste-Client-Site",
    demo_link: "https://fresh-taste.web.app/",
    server_link: "https://github.com/adnanalemran/fresh-taste-Server-site",
  },
  {
    name: "ContestHub",
    description:
      "ContestHub ultimate platform where innovation meets recognition! ContestHub is a dynamic and user-friendly Project Contest Creation Platform designed to foster creativity, engage communities, and celebrate talent across various domains",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: toylab,

    source_code_link: "https://github.com/adnanalemran/contesthub-Client-Site",
    demo_link: "https://contesthub-adnan.web.app/",
    server_link: "https://github.com/adnanalemran/tech-spot-Server-site",
  },
];

export { experiences, projects, services, technologies, testimonials };

