import StatsIcon from "../assets/icon_components/StatsIcon";
import YearsIcon from "../assets/icon_components/YearsIcon";
import ProjectsIcon from "../assets/icon_components/ProjectsIcon";
import TechnologyIcon from "../assets/icon_components/TechnologyIcon";
import CardCareerStats from "./CardCareerStats";

function CareerStats() {
    return (
        <div className="flex flex-col gap-2 h-full text-black dark:text-white">
            <div className="flex gap-3">
                <StatsIcon size={25} className="text-black dark:text-white"/>
                <h5>Career Stats</h5>
            </div>
            <div className="grid grid-cols-3 gap-5 w-[60%] h-[90%]">
                <CardCareerStats icon={YearsIcon} number="1 year" text="Experience" gap={2}/>
                <CardCareerStats icon={ProjectsIcon} number="6" text="Projects" gap={10}/>
                <CardCareerStats icon={TechnologyIcon} number="20" text="Technologies" gap={10}/>
               
            </div>
           
        </div>
    )
}

export default CareerStats;