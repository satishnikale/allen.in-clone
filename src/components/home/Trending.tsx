import { ImageCarousal } from "../ui/Carousal";
import { MainContent } from "../ui/MainContent";

export const Trending = () => {
  const images = [
    "src/assets/images/trending-img-1.avif",
    "src/assets/images/trending-img-2.avif",
    "src/assets/images/trending-img-3.avif",
    "src/assets/images/trending-img-4.avif",
  ];
  return (
    <div className="w-full h-auto bg-lightSky">
      <MainContent>
        <div className="h-full w-full">
            <div className="py-10">
                <img src="src/assets/images/rankers-img-homepage.avif" alt="" loading="lazy" />
            </div>
          <div>
            <h1 className="font-poppins text-center text-2xl font-medium py-10">
              What's Trending
            </h1>
            <div className="w-full rounded-xl pb-8">
              <ImageCarousal images={images} height="256px" width="1080px" />
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  );
};
