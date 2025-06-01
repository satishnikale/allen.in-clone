import { useEffect, useState } from "react"


const images = [
    "src/assets/images/carousal-1.avif",
    "src/assets/images/carousal-2.avif",
    "src/assets/images/carousal-3.avif",
    "src/assets/images/carousal-4.avif",
    "src/assets/images/carousal-5.avif",

]

export const ImageCarousal = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 4000);

        return () => clearInterval(interval); // Clean up on unmount

    }, []);

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-[350px] h-[200px] rounded-xl mx-auto bg-cover transition-all duration-700" />
            {/* Optional: Dots */}
            <div className="text-center my-4 space-x-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full ${currentIndex === i ? "bg-black" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrentIndex(i)}
                    />
                ))}
            </div>
        </div>
    )
}