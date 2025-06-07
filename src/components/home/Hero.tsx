import { Button } from "../ui/Button"
import { MainContent } from "../ui/MainContent"
import { ImageCarousal } from "../ui/Carousal";
import carousal_1 from "../../assets/images/carousal-1.avif";
import carousal_2 from "../../assets/images/carousal-2.avif";
import carousal_3 from "../../assets/images/carousal-3.avif";
import carousal_4 from "../../assets/images/carousal-4.avif";
import carousal_5 from "../../assets/images/carousal-5.avif";

export const Hero = () => {

    const image = [
        carousal_1,
        carousal_2,
        carousal_3,
        carousal_4,
        carousal_5
    ]
    return (
        <div className="w-screen h-auto bg-lightSky">
            <MainContent>
                <div className="w-full h-auto font-poppins lg:flex justify-between gap-x-8 py-4">
                    <div className="w-full">
                        <h1 className="w-auto text-center lg:text-left text-3xl block font-semibold mt-4 mb-8">Get up to 90% scholarship on ALLEN Courses</h1>
                        <h2 className="text-xl font-semibold my-4 text-center lg:text-left">Register for scholarship</h2>
                        <div className="w-full flex justify-center gap-x-2 lg:justify-start mt-6">
                            <Button text="Online Courses" varient="primary" size="md" />
                            <Button text="Offline Courses" varient="primary" size="md" />
                        </div>
                    </div>
                    <div className="w-[700px] h-[300px] max-w-[350px] flex justify-center items-center mx-auto">
                        <ImageCarousal images={image} height={200} width={100} />
                    </div>
                </div>
            </MainContent>
        </div>
    )
}