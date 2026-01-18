import AcdWhite from "../assets/images/Experience/acdi-logo.webp"
import AcdBlack from "../assets/images/Experience/acd-logo.png";
import ExperienceIcon from "../assets/icon_components/ExperienceIcon"
import { useState } from "react";
import { motion } from "motion/react";
import DateIcon from "../assets/icon_components/DateIcon";

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

function Experience () {
    const [isExpanded, setIsExpanded] = useState(false);

    
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <ExperienceIcon/>
                <h5>Experience</h5>
            </div>
            <div className="overflow-y-auto max-h-[300px] rounded-md dark:bg-transparent ">
                <div className="flex gap-3">
                    <div className="min-w-[55px]">
                        <div className="rounded-sm py-1">
                            <img
                                src={AcdBlack}
                                alt="Logo"
                                className="w-[68px] block dark:hidden"
                            />

                                {/* Dark mode logo */}
                            <img
                                src={AcdWhite}
                                alt="Logo"
                                className="w-[68px] hidden dark:block"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <h6>Front-End Developer</h6>
                            <h6 className="text-[13px]">Authentic Caps Distribution Inc.</h6>
                        </div>
                        
                        <div className="flex gap-2">
                            <DateIcon className="opacity-40"/>
                            <span className="opacity-40 font-semibold">2024 - Current</span>
                        </div>
                        
                        <motion.div className="relative overflow-hidden dark:bg-neutral-800 pb-20 rounded-sm"
                            initial={false}
                            animate={{ 
                                maxHeight: isExpanded ? 550 : 100 

                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                            
                            <p className="leading-relaxed">
                                {text}
                                
                            </p>
                            <span
                            onClick={() => setIsExpanded(!isExpanded)}
                            className={`text-blue-400 dark:text-blue-300 cursor-pointer hover:underline inline absolute
                            bottom-0 left-0 bg-white dark:bg-neutral-800  w-full pb-3`}
                            >
                            {isExpanded ? "See Less" : "See More"}
                            </span>
                        </motion.div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Experience