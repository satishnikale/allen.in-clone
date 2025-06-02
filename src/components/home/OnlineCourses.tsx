import { MainContent } from "../ui/MainContent";
import { CourseCard } from "../ui/CourseCard";

export const OnlineCourses = () => {
  return (
    <MainContent>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 my-20 gap-6">      
        <CourseCard text="JEE" bgImageSrc="src/assets/images/jee-img-1.png"  />
        <CourseCard text="NEET" bgImageSrc="src/assets/images/neet-img-1.png"  />
        <CourseCard text="Class 6-10" bgImageSrc="src/assets/images/class-img-6-10.png"  />
      </div>
    </MainContent>
  );
};
