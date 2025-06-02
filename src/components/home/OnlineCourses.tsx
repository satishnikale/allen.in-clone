import { MainContent } from "../ui/MainContent";
import { CourseCard } from "../ui/CourseCard";

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
          bgImageSrc="src/assets/images/jee-img-1.png" 
          />
          <CourseCard
            text="NEET"
            bgImageSrc="src/assets/images/neet-img-1.png"
          />
          <CourseCard
            text="Class 6-10"
            bgImageSrc="src/assets/images/class-img-6-10.png"
          />
        </div>
      </div>
    </MainContent>
  );
};
