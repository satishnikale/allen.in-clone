import { AdvantageCard } from "../ui/AdvantageCard";
import { MainContent } from "../ui/MainContent";

export const Advantage = () => {
  return (
    <MainContent>
      <div className="w-full h-auto my-14">
        <h1 className="w-full font-poppins text-3xl font-medium my-4">
          ALLEN App Advantages
        </h1>
        {/* main div  */}
        <div className="w-full grid lg:grid-cols-2">
          {/* left div  */}
          <div className="w-full lg:w-96">
            <AdvantageCard
              heading="400 Lakh+ Questions Practised"
              text="Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas"
            />
            <AdvantageCard
              heading="10 Lakh+ hours of Learning Content consumed"
              text="Watch live or recorded lectures from ALLEN's top faculty, covering every topic and difficulty level."
            />
            <AdvantageCard
              heading="10 Lakh+ Doubts Solved"
              text="Get instant answers with faculty help & our AI Assistant available 24/7 in any language."
            />
          </div>
          {/* right div  */}
          <div className="flex flex-col justify-center items-center">
            <img
            className="w-[526px] h-[329px] hidden lg:block"
            src="src/assets/images/accordion-1.avif" alt="" />
          </div>
        </div>
      </div>
    </MainContent>
  );
};
