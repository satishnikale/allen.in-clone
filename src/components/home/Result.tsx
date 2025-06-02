import { MainContent } from "../ui/MainContent"
import { ResultCard } from "../ui/ResultCard"



export const Result = () => {
    return (
        <div className="bg-lightSky">
            <MainContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-10">
                    <ResultCard heading="9000+" text="Qualified for JEE Advanced" roundedLeft={true} roundedRight={false} />
                    <ResultCard heading="278" text="Students in Top 100 of leading Olympiads" roundedLeft={false} roundedRight={false} />
                    <ResultCard heading="1,30,000+" text="Qualified in NEET" roundedLeft={false} roundedRight={false} />
                    <ResultCard heading="227" text="Students Scored 95%+ in CBSE 10th Boards" roundedLeft={false} roundedRight={true} />
                </div>
                
            </MainContent> 
        </div>
    )
}