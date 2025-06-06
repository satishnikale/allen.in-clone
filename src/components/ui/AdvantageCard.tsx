import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface AdvantageCardProps {
    heading: string,
    text: string,
}


export const AdvantageCard = ({ heading, text }: AdvantageCardProps) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="w-full h-auto my-8">
            <div onClick={() => setIsOpen(!isOpen)} className="w-full h-auto flex items-center gap-2 relative">
                <h1 className="font-poppins font-medium">{heading}</h1>
                {isOpen ? <BiChevronDown className="absolute right-0" size={25} /> : <BiChevronUp className="absolute right-0" size={25} />}
            </div>

            {   isOpen && (
                    <p className="w-full h-auto my-2 font-poppins text-sm ">
                    {text}
                </p>
            )}
            <div className="h-[1px] bg-gray-300 mt-6"></div>
        </div>

    )
};