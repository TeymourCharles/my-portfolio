import CareerStats from "../components/CareerStats";
import SkillSet from "../components/Skillset";
import Expertise from "../components/Expertise";
import Footer from "../components/Footer";

function Hero() {
    return (
    <div className="flex flex-row gap-[8px] h-full text-black dark:text-white">
        <div className="flex flex-col gap-[8px] w-[70%]">
            <div className="bg-white dark:bg-neutral-800 w-full h-[44%] rounded-sm p-2">
                This is hero
            </div>
            <div className="h-[27%] bg-white dark:bg-neutral-800 py-[15px] px-[20px] rounded-sm p-2">
                <CareerStats/>
            </div>
            <footer className="flex justify-center bg-white dark:bg-neutral-800 p-2 rounded-sm h-[25%]">
                <Footer/>
            </footer>
        </div>
        <div className="flex flex-col gap-[8px] w-[30%]">
            <div className="h-auto bg-white dark:bg-neutral-800 rounded-sm p-2">
                <SkillSet/>
            </div>
            <div className="h-[50%] bg-white dark:bg-neutral-800 rounded-sm p-2">
                <Expertise/>
            </div>
        </div>
        
        
    </div>
    )
}

export default Hero;