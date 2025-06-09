import { useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

interface SidebarProps {
    label: string,
    subItem: string[],
}


export const Sidebar = ({ label, subItem }: SidebarProps) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-auto flex flex-col justify-between font-poppins py-4 px-6 border border-b-gray-300">
            <div className="flex justify-between font-medium">
                <h3 className="text-[12px]">{label}</h3>
                {isOpen ? <BiChevronDown size={20} onClick={() => { setIsOpen(!isOpen) }} /> : <BiChevronUp size={20} onClick={() => { setIsOpen(!isOpen) }} />}
            </div>
            <div>
                {isOpen && <div className="ml-10 py-2">
                    {subItem.map((item) => (
                        <p className="w-full flex flex-col text-[12px] py-2">
                            {item}
                        </p>
                    ))}
                </div>}
            </div>
        </div>
    )
}