//for hero banner page
import heroBanner1 from "../assets/images/hero-banner/pexels-bradleyhook-123335.jpg"
import heroBanner2 from "../assets/images/hero-banner/pexels-lastly-699122.jpg";
import heroBanner3 from "../assets/images/hero-banner/pexels-luis-gomes-166706-546819.jpg";

//for projects
import corpWebsite from "../assets/images/projects/corp-website.png";
import redemptionSystem from "../assets/images/projects/redemption-system.png";
import aimsSystem from "../assets/images/projects/aims-system.png";
import ticketingSystem from "../assets/images/projects/ticketing-system.jpg";

//for Skillset card
import ReactIcon from "../assets/icons/react-icon.png";
import LaravelIcon from "../assets/icons/laravel-icon.png"
import PhpIcon from "../assets/icons/php-icon.png";
import GithubIcon from "../assets/icons/github-icon.png";
import VueIcon from "../assets/icons/vue-icon.png";
import HtmlIcon from "../assets/icons/html-icon.png";
import TypescriptIcon from "../assets/icons/typescript-icon.png";
import BootstrapIcon from "../assets/icons/bootstrap.png"; 

import FigmaIcon from "../assets/icons/figma-icon.png";
import CssIcon from "../assets/icons/css-icon.png";
import MysqlIcon from "../assets/icons/mysql-icon.png";
import JsIcon from "../assets/icons/js-icon.png";
import TailwindIcon from "../assets/icons/tailwind-icon.png";
import ViteIcon from "../assets/icons/vite-icon.png";
import PostmanIcon from "../assets/icons/postman-icon.png";
import DockerIcon from "../assets/icons/docker.png"

export const projects = [
    {
        img: ticketingSystem,
        name: "Ticketing System",
        description: "This is Ticketing system for giordano",
        techStack: [ 'React.js', 'Laravel', 'Tailwind', 'Mysql' ],
        link: null,
        githubLink: null
    },
    {
        img: corpWebsite,
        name: "Corporate Website",
        description: "This is Corporate website for Authentic Caps Distribution",
        techStack: [ 'React.js', 'Tailwind', 'Mysql', 'CMS' ],
        link: "https://ahci.com.ph/",
        githubLink: null
    },
    {
        img: aimsSystem,
        name: "Asset Inventory Management System",
        description: "This is Asset Inventory Management System for New Era Cap Philippines",
        techStack: [ 'Vue.js', 'Tailwind', 'Mysql', 'laravel', 'Vuetify' ],
        link: null,
        githubLink: null
    },
    {
        img: redemptionSystem,
        name: "Redemption System",
        description: "This is Redemption System for New Era Cap Philippines",
        techStack: [ 'Jquery', 'Tailwind', 'Mysql' ],
        link: null,
        githubLink: null
    }
]

export const aboutMe = `I’m a Frontend Developer with hands-on experience in React and Vue, 
                passionate about building responsive, user-friendly web applications that 
                solve real-world problems. Beyond frontend development, I have experience 
                creating backend APIs, integrating databases, and ensuring smooth communication 
                between client and server. I am also comfortable deploying projects, setting up 
                environments, and managing applications in live production, which gives me a full-stack
                perspective on web development.

                I enjoy working on scalable solutions, optimizing performance, and writing clean, 
                maintainable code. I thrive in collaborative environments, learning from real-world 
                challenges, and continuously improving my skills by exploring new frameworks, tools, and 
                technologies. My goal is to create web applications that not only look great but also deliver
                    seamless functionality and performance for both users and businesses.`



export const herobanner = [
    heroBanner1,
    heroBanner2,
    heroBanner3
]

export const expertise = [
    {
        title: "Front-End Development",
        text: `I am proficient in building responsive and user-friendly web interfaces using React.js 
                and Vue.js, with a strong understanding of component-based architecture and the creation of reusable
                UI components for scalable applications. I have experience translating Figma and other design mockups 
                into clean, pixel-perfect code while maintaining consistency and usability across different screen sizes.
                I am also knowledgeable in HTML5, CSS3, and modern JavaScript (ES6+), and I apply current styling best practices
                to deliver visually polished and well-structured front-end solutions.`
    },
    {
        title: "State Management & App Logic",
        text: `I have experience working with state management concepts to handle complex UI interactions 
        and ensure smooth user experiences. I am familiar with managing application state, props, and
         data flow in scalable front-end applications, allowing components to communicate efficiently and 
         remain predictable. I also structure projects with a focus on maintainability and long-term growth,
          making the codebase easier to extend, debug, and scale as requirements evolve.`
    },
    {
        title: "API Integration & Backend Exposure",
        text: `I have experience consuming and integrating REST APIs into front-end applications to 
        enable dynamic data handling and seamless user interactions. I also have basic backend experience
         in building APIs and connecting front-end systems to databases, allowing me to understand and 
         collaborate effectively across the full stack. Additionally, I am comfortable handling authentication
          flows, user roles, and permissions, ensuring secure access and proper user authorization within
           applications.`
    },
    {
        title: "Performance & Optimization",
        text: `I focus on improving website performance, accessibility, and overall best practices to deliver
         fast and reliable user experiences. I have experience using Lighthouse audits to analyze web 
         applications, identify performance bottlenecks, and apply targeted optimizations. Through these
          improvements, I have implemented performance enhancements that meet industry-standard benchmarks and 
          contribute to higher-quality, production-ready web applications.`
    },
    {
        title: "Testing & Quality Assurance",
        text: `I have experience writing and understanding unit tests for front-end code, helping ensure
         application logic behaves as expected. I am knowledgeable in using testing tools such as Jest to 
         validate functionality and catch issues early in the development process. Through thorough testing, 
         I ensure features work correctly before deployment and consistently meet established quality and 
         reliability standards.`
    },
    {
        title: "Version Control & Collaboration",
        text: `I am proficient in using Git and GitHub for version control, allowing me to manage code changes
         efficiently and maintain a clean project history. I have experience working in team environments
          that use branching strategies, pull requests, and code reviews to ensure code quality and
           collaboration. I am also comfortable collaborating closely with designers, backend developers,
            and other stakeholders to align technical implementation with project requirements and business 
            goals.`
    },
    {
        title: "Deployment & Production",
        text: `I have experience deploying web applications to production environments and am familiar 
        with common build tools and deployment workflows used in modern web development. I am able to 
        troubleshoot production issues efficiently, identify root causes, and apply timely fixes to ensure 
        application stability and smooth user experiences.`
    }

]

export const firstArray = [
    ReactIcon, LaravelIcon, PhpIcon, GithubIcon, VueIcon, HtmlIcon, TypescriptIcon, BootstrapIcon
]

export const secondArray = [
    FigmaIcon, CssIcon, MysqlIcon, JsIcon, TailwindIcon, ViteIcon, PostmanIcon, DockerIcon
]

export const experience = `During my time at Authentic Caps Distribution Inc., I significantly developed my technical 
                    and professional skills by working on real-world corporate and internal systems. I strengthened my front-end 
                    expertise by building responsive, reusable UI components and improving user experience across multiple platforms,
                    while also gaining full-stack exposure through implementing REST APIs, authentication, and database logic.
                    I expanded my understanding of modern web architecture by working with CMS integration, containerization using Docker,
                    and tools such as Kong, Kafka, and Temporal. Through close collaboration with stakeholders and continuous hands-on development, 
                    I improved my problem-solving, system design, and ability to deliver scalable, production-ready web solutions.`

