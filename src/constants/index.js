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
  ExpoElite,
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
    testimonial: "Green University of Bangladesh ",
    name: "Bachelor of Science in Computer Science and Engineering",

    designation: "2021",
    company: "Running",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Green_University_of_Bangladesh_logo.svg",
  },
  {
    testimonial: "Mymensingh Polytechnic Institute",
    name: "Diploma in computer engineering",
    designation: "2017",
    company: "2021",
    image:
      "data:image/png;base64,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",
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
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
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
  {
    name: "ExpoElite",
    description:
      "Proud to unveil ExpoElite, the cutting-edge Property Selling and Exhibition Platform I contributed to. With enhanced features like Firebase authentication and Role-Based Access Control, our platform guarantees a stellar user experience. Thanks to our dedicated team for their pivotal role in ensuring success!",
    tags: [
      {
        name: "next.js",
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
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
    ],
    image: ExpoElite,

    source_code_link: "https://github.com/nerualninjas/ExpoElite",
    demo_link: "https://expo-elite-dev.vercel.app/",
    server_link: "https://github.com/nerualninjas/ExpoElite-server",
  },
];

export { experiences, projects, services, technologies, testimonials };
