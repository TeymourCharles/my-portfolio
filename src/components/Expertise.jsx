
import ExpertiseIcon from "../assets/icon_components/ExpertiseIcon";
import DropdownExpertise from "./expertise/DropdownExpertise";

import { expertise } from "../constants";
import { useState } from "react";


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