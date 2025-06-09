import { AllenIcon } from "../../icons/AllenIcon";
import { LuChevronRight, LuHeadphones, LuHouse, LuPhone } from "react-icons/lu";
import { NavLinks } from "./NavLinks";
import { Button } from "../ui/Button";

export const Navbar = () => {

  const navItem = [
    { name: "Courses", subItem: ["NEET", "JEE", "Class 6-10", "View All Options"], },
    { name: "Test Series", subItem: ["NEET", "JEE(Main+Advanced)", "JEE Main"], },
    { name: "Results", subItem: ["JEE 2025", "NEET", "Class 6-10"], },
    { name: "Study Materials", subItem: ["JEE Mian", "JEE Advanced", "NEET", "NCERT Solution", "CBSE", "Olympiad"], },
    { name: "Scholarships", subItem: ["TALENTEX", "AOSAT"], },
    { name: "Books", subItem: ["ALLEN e-Store"], },
    { name: "More", subItem: ["ALLEN For Schools", "About ALLEN", "Blogs", "Newa", "Carrier"], },
  ];

  return (
    <div className="w-full h-16">
      <div className="w-[97%] h-full mx-auto flex items-center gap-x-8 relative">
        <div>
          <AllenIcon />
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-x-6">
            {navItem.map((item) => (
              <NavLinks key={item.name} label={item.name} subItem={item.subItem} />
            ))}
          </ul>
        </div>
        <div className="flex absolute right-0 gap-x-4">
          <div className="p-2 rounded-full bg-blue-700 text-white cursor-pointer group relative">
            <LuPhone />
            <div className="absolute -left-36 mt-6 w-52 p-2 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-auto group-hover:pointer-events-auto transition-opacity duration-300 z-10">
              <div className="font-poppins">
                  <p className="w-full flex items-center gap-2 text-[13px] text-gray-600 p-2 hover:bg-lightSky rounded relative">
                  <LuHeadphones 
                    className="text-blue-800" 
                  />
                    Request a Callback
                    <LuChevronRight size={15} className="absolute right-1" />
                  </p>
              </div>
              <div className="font-poppins">
                  <p className="w-full flex items-center gap-2 text-[13px] text-gray-600 p-2 hover:bg-lightSky rounded relative">
                  <LuHouse
                    className="text-blue-800" 
                  />
                    Book home demo
                    <LuChevronRight size={15} className="absolute right-1" />
                  </p>
              </div>
            </div>
          </div>
          <div>
            <Button varient="primary" size="sm" text="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};
