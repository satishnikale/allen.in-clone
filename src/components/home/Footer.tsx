import { FooterLinks } from "../ui/FooterLInks"
import { MainContent } from "../ui/MainContent"

const aboutLinks = [
    { label: "About Us", link: "/about" },
    { label: "Blog", link: "/blog" },
    { label: "News", link: "/news" },
    { label: "MyExam Edublogs", link: "/edublogs" },
    { label: "Privacy Policy", link: "/policy" },
    { label: "Public Notice", link: "/publicnotic" },
    { label: "Careers", link: "/careers" },
    { label: "Dhoni Inspires Neet Aspirantes", link: "/neetinspiration" },
    { label: "Dhoni Inspires JEE Aspirants", link: "/jeeaspiration" },
]

const helpLinks = [
    { label: "Refund Policy", link: "/refundpolicy" },
    { label: "Transfer Policy", link: "/trasferpolicy" },
    { label: "Terms & Condition", link: "/terms" },
    { label: "Contact Us", link: "/contact" },
]

const pupularGoals = [
    { label: "Neet Coaching", link: "/neet" },
    { label: "JEE Coaching", link: "/jee" },
    { label: "6th to 10th", link: "/6to10" },
]

const coursesLinks = [
    { label: "Online Courses", link: "/onlinecourse" },
    { label: "Distance Learning", link: "/distacelearnig" },
    { label: "Online Test Series", link: "/onlinetestseries" },
    { label: "International Olympiads Online Course", link: "/olympiads" },
    { label: "NEET Test Series", link: "/neettestseries" },
    { label: "JEE Test Series", link: "/jeetestseris" },
    { label: "JEE Main Test Series", link: "/jeemaintest" },
]

const centerLinks = [
    { label: "Kota", link: "/kota" },
    { label: "Banglore", link: "/banglore" },
    { label: "Endore", link: "/endore" },
    { label: "Delhi", link: "/delhi"},
    { label: "More Centers", link: "/centeres"},
]

const examInformationLinks = [
    { label: "JEE Mains", link: "/onlinecourse" },
    { label: "JEE Advanced", link: "/distacelearnig" },
    { label: "NEET UG", link: "/onlinetestseries" },
    { label: "CBSE", link: "/olympiads" },
    { label: "NCERT Solutin", link: "/neettestseries" },
    { label: "Olympiad", link: "/jeetestseris" },
    { label: "NEET 2025 Result", link: "/jeemaintest" },
    { label: "NEET 2025 Answer Key", link: "/neettestseries" },
    { label: "JEE Advanced 2025 Answer Key", link: "/jeetestseris" },
    { label: "JEE Advanced Rank Predictor", link: "/jeemaintest" },

]




export const Footer = () => {
    return (
        <div className="w-full h-auto bg-lightSky py-10">
            <MainContent>
                <div className="w-full h-full py-10">
                    <img src="src/assets/images/footer-img.avif" alt="" />
                </div>
                <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    <div className="w-full h-auto fles flex-col font-sm">
                        {/* link - 1  */}
                        <p className="font-poppins">About</p>
                        {aboutLinks.map((about) => (
                            <FooterLinks key={about.label} label={about.label} link={about.link} />
                        ))}
                    </div>
                    {/* link - 2  */}
                    <div className="w-full h-auto fles flex-col font-sm">
                        <p className="font-poppins">Help & Support</p>
                        {helpLinks.map((about) => (
                            <FooterLinks key={about.label} label={about.label} link={about.link} />
                        ))}
                    </div>
                    {/* link - 3 */}
                    <div className="w-full h-auto fles flex-col font-sm">
                        <p className="font-poppins">Popular goals</p>
                        {pupularGoals.map((goals) => (
                            <FooterLinks key={goals.label} label={goals.label} link={goals.link} />
                        ))}
                    </div>
                    {/* link - 4 */}
                    <div className="w-full h-auto fles flex-col font-sm">
                        <p className="font-poppins">Courses</p>
                        {coursesLinks.map((course) => (
                            <FooterLinks key={course.label} label={course.label} link={course.link} />
                        ))}
                    </div>
                    {/* link - 5 */}
                    <div className="w-full h-auto fles flex-col font-sm">
                        <p className="font-poppins">Centers</p>
                        {centerLinks.map((center) => (
                            <FooterLinks key={center.label} label={center.label} link={center.link} />
                        ))}
                    </div>
                    {/* link - 6 */}
                    <div className="w-full h-auto fles flex-col font-sm">
                        <p className="font-poppins">Exam information</p>
                        {aboutLinks.map((about) => (
                            <FooterLinks key={about.label} label={about.label} link={about.link} />
                        ))}
                    </div>
                </div>
            </MainContent>
        </div>
    )
}