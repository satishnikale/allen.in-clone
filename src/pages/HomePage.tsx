import { Trending } from "../components/home/Trending"
import { Hero } from "../components/home/Hero"
import { OnlineCourses } from "../components/home/OnlineCourses"
import { ScholarshipAdd } from "../components/home/ScholarshipAdd"
import { Navbar } from "../components/navbar/Navbar"
import { Result } from "../components/home/Result"
import { Champions } from "../components/home/Champions"
import { Testomonial } from "../components/home/Testomonial"
// import { Advantage } from "../components/home/Advantage"

export const Home = () => {
    return (
        <div>
            <Navbar />
            <ScholarshipAdd />
            <Hero />
            <OnlineCourses />
            <Trending />
            <Result />
            <Champions />
            {/* <Advantage /> */}
            <Testomonial />

        </div>
    )
}