
import MediaIcon from "../assets/icon_components/MediaIcon";
import GmailIcon from "../assets/icon_components/GmailIcon";
import LinkedinIcon from "../assets/icon_components/LinkedinIcon";
import GithubIcon from "../assets/icon_components/GithubIcon";
import ViberIcon from "../assets/icon_components/ViberIcon";

function Footer() {
    return (
        <div className="">
            <div className="flex items-center gap-3">
                <MediaIcon />
                <h5>Get in touch</h5>
            </div>
           <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center py-1 w-[95%]">
                    <div className="flex items-center gap-1">
                        <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=villanuevateymour27@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Teymour,%0A%0AI%20saw%20your%20portfolio%20and%20..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:-translate-y-1 duration-300">
                            <GmailIcon size={35}/>
                            
                        </a>
                        <a 
                        href="https://www.linkedin.com/in/teymour-charles-villanueva-37969b314/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:-translate-y-1 duration-300">
                            <LinkedinIcon size={45}/>
                        </a>
                        <a 
                        href="https://github.com/TeymourCharles"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:-translate-y-1 duration-300">
                            <GithubIcon size={33}/>
                        </a>
                        <a 
                         href="viber://chat?number=+639657527690"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white px-1.5 hover:-translate-y-1 duration-300">
                            <ViberIcon size={33}/>
                        </a>
                        
                    </div>
                    <p className="text-center mt-3 text-sm text-gray-600 dark:text-gray-300">
                        I’m always open to new opportunities, collaborations, and interesting projects.
                        Whether you have a question, want to discuss a potential job offer, or just want
                        to say hi, feel free to reach out. I’m happy to connect and I usually respond
                        within 24–48 hours. Let’s build something great together!
                    </p>
                </div>
           </div>
            
            
            
            
        </div>
    )
}

export default Footer;