import EducationIcon from "../assets/icon_components/EducationIcon";
import DateIcon from "../assets/icon_components/DateIcon";
import UeLogo from "../assets/images/logo/ue-logo.jpg";

function Education() {
    return (
        <div className="">
            <div className="flex gap-3 items-center">
                <EducationIcon size={25}/>
                <h5>Education</h5>
            </div>
            <div className="flex gap-3 my-3 px-2">
                <div className="pt-1 min-w-[50px]">
                    <img src={UeLogo} alt="" className="rounded-full w-[45px]"/>
                </div>
                <div>
                    <h6>Bachelor of Science in Information Technology</h6>
                    <h6 className="text-[13px]">University of the East - Metro Manila, Philippines</h6>
                    <div className="flex gap-2 pt-1">
                        <DateIcon className="opacity-40"/>
                        <span className="opacity-40 font-semibold">2020 - 2024</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;