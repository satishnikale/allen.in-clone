import { Button } from "../ui/Button"
import { MainContent } from "../ui/MainContent"
import { ImageCarousal } from "../ui/Carousal";

export const Hero = () => {

    const image = [
    "src/assets/images/carousal-1.avif",
    "src/assets/images/carousal-2.avif",
    "src/assets/images/carousal-3.avif",
    "src/assets/images/carousal-4.avif",
    "src/assets/images/carousal-5.avif",
]
    return (
        <div className="w-screen h-auto bg-lightSky">
            <MainContent>
                <div className="w-full h-auto font-poppins lg:flex justify-between gap-x-8 py-10">
                    <div className="w-full">
                        <h1 className="w-auto text-center lg:text-left text-3xl block font-semibold mt-4 mb-8">Get up to 90% scholarship on ALLEN Courses</h1>
                        <h2 className="text-xl font-semibold my-4 text-center lg:text-left">Register for scholarship</h2>
                        <div className="flex justify-center gap-x-4 mb-5 lg:justify-start">
                            <Button text="Online Courses" varient="primary" size="md" />
                            <Button text="Offline Courses" varient="primary" size="md" />
                        </div>
                    </div> 
                    <div className="w-full flex justify-center">
                        <ImageCarousal images={image} height="200px" width="350px" />
                    </div>
                </div>
            </MainContent>
        </div>
    )
}