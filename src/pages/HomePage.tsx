import { Hero } from "../components/home/Hero"
import { ScholarshipAdd } from "../components/home/ScholarshipAdd"
import { Navbar } from "../components/navbar/Navbar"

export const Home = () => {
    return (
        <div>
            <Navbar />
            <ScholarshipAdd />
            <Hero />

        </div>
    )
}