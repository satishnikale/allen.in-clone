import { MainContent } from "../ui/MainContent"
import ChampImg from "../../assets/images/champions-img.avif";

export const Champions = () => {
    return (
        <div className="w-full h-auto bg-lightSky py-10">
            <MainContent>
                <h1 className="w-full text-center font-poppins text-3xl font-medium mb-8">Meet our Champions</h1>
                <img src={ChampImg} alt="" />
            </MainContent>
        </div>
    )
}