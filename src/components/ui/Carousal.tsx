import { useEffect, useState } from "react"

interface CarousalProps {
    images: string[],
    height?: number,
    width?: number,
}

export const ImageCarousal = ({ images, height, width }: CarousalProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 5000);

        return () => clearInterval(interval); // Clean up on unmount

    }, []);

    return (
        <div className="relative w-full mx-auto overflow-hidden rounded-xl">
            <div className={`h-[${height}px] w-[${width}px] mx-auto`}>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={`w-[${width}px] h-[${height}px] rounded-xl object-fill mx-auto transition-all duration-700`} />
            </div>
            {/* Dots */}
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