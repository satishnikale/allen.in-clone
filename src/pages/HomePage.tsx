import { Hero } from "../components/home/Hero"
import { OnlineCourses } from "../components/home/OnlineCourses"
import { ScholarshipAdd } from "../components/home/ScholarshipAdd"
import { Navbar } from "../components/navbar/Navbar"

export const Home = () => {
    return (
        <div>
            <Navbar />
            <ScholarshipAdd />
            <Hero />
            <OnlineCourses />

        </div>
    )
}