import { LuChevronRight } from "react-icons/lu";
import { Button } from "./Button";

interface CourseCardProps {
    text: string;
    bgImageSrc: string;
    onClick?: () => void;
}

const divStyle = "h-52 max-h-52 w-full bg-lightSky p-6 rounded-lg relative z-10";
const textStyle = "font-poppins text-xl font-semibold";

export const CourseCard = ({ text, bgImageSrc, onClick }: CourseCardProps) => {
    return (
        <div className={`${divStyle}`}>
            <img className="w-32 absolute bottom-0 right-0 z-0" src={`${bgImageSrc}`} alt="" />
            <div className="flex flex-col gap-y-28">
                <h1 className={`${textStyle}`}>{text}</h1>
                <Button
                    onClick={onClick}
                    varient="tertiary"
                    size="lg"
                    text="View"
                    endIcon={<LuChevronRight size={20} />}
                />
            </div>
        </div>
    );
};
