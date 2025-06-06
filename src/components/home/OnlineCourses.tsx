import { MainContent } from "../ui/MainContent";
import { CourseCard } from "../ui/CourseCard";
import jee from "../../assets/images/jee-img-1.png";
import neet from "../../assets/images/jee-img-1.png";
import class6to10 from "../../assets/images/jee-img-1.png";

export const OnlineCourses = () => {
  
  return (
    <MainContent>
      <div className="my-10 overflow-x-hidden">
        <h1 className="font-poppins text-xl font-medium my-6">
          Discover the perfect online course
        </h1>

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard 
          text="JEE" 
          bgImageSrc={jee} 
          />
          <CourseCard
            text="NEET"
            bgImageSrc={neet}
          />
          <CourseCard
            text="Class 6-10"
            bgImageSrc={class6to10}
          />
        </div>
      </div>
    </MainContent>
  );
};
