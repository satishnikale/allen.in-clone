import { AdvantageCard } from "../ui/AdvantageCard"
import { MainContent } from "../ui/MainContent"

export const Advantage = () => {
    return (
        <MainContent>
            <div className="w-full h-auto my-14">
                <h1 className="w-full font-poppins text-3xl font-medium my-4">ALLEN App Advantages</h1>
                {/* main div  */}
                <div className="grid lg:grid-cols-2">
                    {/* left div  */}
                    <div>
                        <AdvantageCard heading="helooooooo" text="satish nikale hi kay kartoy jevla ka bjakarti khalli ka tu" />
                    </div>
                    {/* right div  */}
                    <div>Hello</div>
                </div>
            </div>
        </MainContent>
    )
}