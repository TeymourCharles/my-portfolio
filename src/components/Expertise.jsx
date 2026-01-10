
import ExpertiseIcon from "../assets/icon_components/ExpertiseIcon";
import { useState } from "react";

import DropdownExpertise from "./expertise/DropdownExpertise";

const expertise = [
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

function Expertise () {
    const [expandIndex, setExpandIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandIndex(prev => (prev === index ? null : index));
    };
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <ExpertiseIcon size={22} className=""/>
                <h5>Expertise</h5>
            </div>
            <div>
                {expertise.map((item, index) => (
                    <DropdownExpertise 
                        key={index} 
                        title={item.title} 
                        text={item.text}
                        isExpand={expandIndex === index}
                        toggle={() => toggleExpand(index)}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Expertise;