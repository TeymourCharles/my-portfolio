import Education from "../components/Education";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

function About() {
    return (
     
            <div className="flex h-full">
                <div className="w-[70%]">
                    <div className="bg-white w-full h-[41%] rounded-lg p-2">
                        This is about us page
                    </div>
                    
                    <div className="h-[30%] bg-white my-[13px] py-[15px] px-[20px] rounded-lg p-2">
                        <h5>About</h5>
                        <p>I'am a full-stack developer </p>
                    </div>
                    <footer className="flex justify-center bg-white p-2 rounded-lg h-[25%]">
                        <Footer/>
                    </footer>
                </div>
                <div className="w-[30%] flex flex-col gap-3">
                    <div className="h-[50%] bg-white ml-[13px] rounded-lg p-2">
                        <Education/>
                    </div>
                    <div className="h-[50%] bg-white ml-[13px] rounded-lg p-2">
                        <Experience/>
                    </div>
                </div>
            </div>
    )
}

export default About;