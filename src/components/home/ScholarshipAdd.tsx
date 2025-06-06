import { LuChevronRight } from "react-icons/lu";
import announcement from "../../assets/images/announcement-ico.png";
const defaultStyles = "text-sm font-poppins";
export const ScholarshipAdd = () => {
    return (
        <div className="w-full min-h-15">

            <div className="h-full flex justify-center items-center bg-[#019370] cursor-pointer gap-2 py-2">
                <div className="mx-2">
                    <img className="h-7 w-7" src={announcement} alt="" loading="lazy" />
                </div>

                <div className="w-auto flex flex-col lg:flex-row lg:gap-2">
                    <div className={`${defaultStyles} uppercase text-yellow-300 font-medium`}>
                        get upto 90% Scholarship
                    </div>
                    <p className={`${defaultStyles} text-white`}>
                        on NEET Leader & Achiever Online Courses
                    </p>
                </div>
                <div className="text-white text-xl">
                    <LuChevronRight />
                </div>
            </div>
        </div>
    )
} 