import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";


interface AdvantageCardProps {
    heading:string,
    text:string,
}


export const AdvantageCard = ({ heading, text }:AdvantageCardProps) => {
    const [ open, setOpen ] = useState(true);
    return(
        <div>
            <h2 onClick={ setOpen( false ) } className="flex gap-4">{heading} {open ? <LuChevronUp  /> : <LuChevronDown />} </h2>
            <p>{text}</p> 

        </div>
    )
}