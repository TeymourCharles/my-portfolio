
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
                        <div className="text-black dark:text-white">
                            <GmailIcon size={35}/>
                            
                        </div>
                        <div className="text-black dark:text-white">
                            <LinkedinIcon size={45}/>
                        </div>
                        <div className="text-black dark:text-white">
                            <GithubIcon size={33}/>
                        </div>
                        <div className="text-black dark:text-white px-1.5">
                            <ViberIcon size={33}/>
                        </div>
                        
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