import { useState } from "react";
import { TestomonialCard } from "../ui/TestomonialCard";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import topper_1 from "../../assets/images/topper-1.webp";
import topper_2 from "../../assets/images/topper-2.webp";
import topper_3 from "../../assets/images/topper-3.webp";
import topper_4 from "../../assets/images/topper-4.webp";

export const Testomonial = () => {
  const [right, setRight] = useState(true);
  return (
    <div className="w-full h-auto bg-lightSky pt-10 pb-10">
      <div className="w-full max-w-[1080px] mx-auto flex items-center lg:justify-self-start relative">
        <h1 className="w-full text-2xl font-poppins font-medium px-2 text-center">Testimonials from our students</h1>
        <div className="hidden lg:flex lg:block absolute right-0 gap-6">
          <LuChevronLeft onClick={()=> setRight(false)} size={30}
          className={`p-1 hover:bg-gray-300 rounded-full ${right? "text-gray-500" : "text-black"}`} />
          <LuChevronRight onClick={ ()=> setRight(true) } size={30}
          className={`p-1 hover:bg-gray-300 rounded-full ${right? "text-black" : "text-gray-500"}`} />        
        </div>

      </div>
      <div className={`w-full h-auto flex mx-auto py-10 gap-4 z-40 overflow-x-auto scrollbar-hide`}>

        <div className={`w-full flex gap-4 px-6 ${right ? "ml-52" : ""} transition-all duration-200`}>
          <TestomonialCard
            text="I chose ALLEN Online Courses because I wanted to balance my NEET prep with my school schedule.
            The course structure, from daily homework to post-class handouts, was well-organized."
            image={topper_1}
            name="SARTH PATIL"
            score="NEET-UG 2024, Score 710/720"
          />
          <TestomonialCard
            text="I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Courses. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score."
            image={topper_2}
            name="SEKH GALIB RAZA"
            score="NEET-UG 2024, Score 690/720"
          />
          <TestomonialCard
            text="I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Courses. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!"
            image={topper_3}
            name="AVIK DAS"
            score="JEE Adv. 2024, AIR 69"
          />
          <TestomonialCard
            text="I came to know about ALLEN’s Online Test Series from my senior in school. The tests are really awesome as these are based mainly on NCERT and cover almost all types of NEET questions. They gave me the real feel of the competition."
            image={topper_4}
            name="SHIFA FATIMA"
            score="NEET-UG 2024, Score 696/720"
          />
        </div>
      </div>
    </div>
  );
};
