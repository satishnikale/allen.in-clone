interface TestomonialCardProps {
    text: string,
    image: string,
    name: string,
    score: string,
}




export const TestomonialCard = ({ text, image, name, score }: TestomonialCardProps) => {
    return (
        <div className="w-[300px] min-w-[300px] h-auto px-6 bg-white rounded-2xl relative font-poppins text-[13px] space-y-8 shadow-lg">
            <div>
                <img className="absolute -top-4 left-10 w-14" src="src/assets/images/testomonial-bg.svg" alt="" />
                <p className="pt-10 text-gray-600">{text}</p>
            </div>
            <div className="flex items-center gap-2">
                <img 
                className="rounded-full w-16 pb-4 max-w-[80px]"
                src={`${image}`} alt="" />
                <div className="w-full">
                    <h2>{name}</h2>
                    <p className="text-gray-600">{score}</p>
                </div>
            </div>
        </div>
    )
}