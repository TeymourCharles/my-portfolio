import CareerStats from "../components/CareerStats";
import SkillSet from "../components/Skillset";
import Expertise from "../components/Expertise";
import Footer from "../components/Footer";

function Hero() {
    return (
    <div className="flex h-full">
        <div className="w-[70%]">
            <div className="bg-white w-full h-[44%] rounded-lg p-2">
                This is hero
            </div>
            <div className="h-[27%] bg-white my-[13px] py-[15px] px-[20px] rounded-lg p-2">
                <CareerStats/>
            </div>
            <footer className="flex justify-center bg-white p-2 rounded-lg h-[25%]">
                <Footer/>
            </footer>
        </div>
        <div className="flex flex-col gap-3 w-[30%]">
            <div className="h-[40%] bg-white ml-[13px] rounded-lg p-2">
                <SkillSet/>
            </div>
            <div className="h-[50%] bg-white ml-[13px] rounded-lg p-2">
                <Expertise/>
            </div>
        </div>
        
        
    </div>
    )
}

export default Hero;