import { ImageCarousal } from "../ui/Carousal";
import { MainContent } from "../ui/MainContent";
import trending_1 from "../../assets/images/trending-img-1.avif";
import trending_2 from "../../assets/images/trending-img-2.avif";
import trending_3 from "../../assets/images/trending-img-3.avif";
import trending_4 from "../../assets/images/trending-img-4.avif";
import rankeres_img from "../../assets/images/rankers-img-homepage.avif";

export const Trending = () => {

  const images = [
    trending_1,
    trending_2,
    trending_3,
    trending_4
  ];
  
  return (
    <div className="w-full h-auto bg-lightSky">
      <MainContent>
        <div className="h-full w-full">
            <div className="py-10">
                <img 
                className="w-full h-[200px] sm:h-full"
                src={rankeres_img} alt="" loading="lazy" />
            </div>
          <div>
            <h1 className="font-poppins text-center text-2xl font-medium py-10">
              What's Trending
            </h1>
            <div className="w-full rounded-xl pb-8">
              <ImageCarousal images={images} />
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  );
};
