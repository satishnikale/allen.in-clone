import { LuChevronRight } from "react-icons/lu";

interface NavHoverProps {
    text: string,
    endIcon?: boolean,
    onclick?: () => void,
    onHover?: () => void,
}


const defaultStyles = "text-sm px-2 py-2 z-100 rounded text-lightBlack flex items-center relative hover:bg-[#edf2fa] transition-all duration-200";



export const NavHover = ({ text, endIcon, onclick, onHover }: NavHoverProps) => {
    return (
        <div className="w-56 rounded">
            <div className="px-2 py-2">
                <div className={defaultStyles}>
                    <span>{text}</span>
                    {endIcon && <span className="absolute right-2"><LuChevronRight /></span>}
                </div>
            </div>
        </div>
    )
}