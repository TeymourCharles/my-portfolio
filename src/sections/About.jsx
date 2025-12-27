import Education from "../components/Education";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import { useState } from "react";

function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    const text = `I’m a Frontend Developer with hands-on experience in React and Vue, 
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
    const limit = 290;
    return (
     
            <div className="flex flex-row gap-[8px] h-[720px] text-black dark:text-white">
                <div className="flex flex-col gap-[8px] w-[70%]">
                    <div className="bg-white dark:bg-neutral-800 w-full h-[41%] rounded-sm p-2">
                        This is about us page
                    </div>
                    
                    <div className={`relative overflow-hidden bg-white pb-15 dark:bg-neutral-800 pt-[15px] px-[20px] rounded-sm 
                          transition-[max-height] duration-600 ease-in-out
                        ${isExpanded ? "max-h-[400px]" : "max-h-[123px]"}`}>
                        <h5 className="pb-2">About</h5>
                        <p className="leading-relaxed">
                            {text}
                            
                        </p>
                        <span
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`text-blue-400 dark:text-blue-300 cursor-pointer hover:underline inline absolute
                        bottom-0 left-0 bg-white dark:bg-neutral-800  w-full pl-[20px] pb-3`}
                        >
                        {isExpanded ? "See Less" : "See More"}
                        </span>
                    </div>
                    
                    <footer className="flex justify-center bg-white dark:bg-neutral-800 p-2 rounded-sm h-[25%]">
                        <Footer/>
                    </footer>
                </div>
                <div className="w-[30%] flex flex-col gap-[8px]">
                    <div className="h-[50%] bg-white dark:bg-neutral-800 rounded-sm p-2">
                        <Education/>
                    </div>
                    <div className="h-[50%] bg-white dark:bg-neutral-800 rounded-sm p-2">
                        <Experience/>
                    </div>
                </div>
            </div>
    )
}

export default About;