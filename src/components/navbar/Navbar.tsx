import { AllenIcon } from "../../icons/AllenIcon";
import { LuPhone } from "react-icons/lu";
import { NavLinks } from "./NavLinks";
import { Button } from "../ui/Button";

export const Navbar = () => {

  const navItem = [
    { name: "Courses", subItem:["NEET", "JEE", "Class 6-10"], },
    { name: "Test Series", subItem:[],},
    { name: "Results", subItem:[], },
    { name: "Study Materials", subItem:[], },
    { name: "Scholarships", subItem:[], },
    { name: "Books", subItem:[], },
    { name: "More", subItem:[], },
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
            <NavLinks key={item.name} label={item.name}  />
          ))}    
          </ul>           
            
        </div>

        <div className="flex absolute right-0 gap-x-4">
            <div className="p-2 rounded-full bg-blue-700 text-white cursor-pointer">
                <LuPhone />
            </div>
            <div>
                  <Button varient="primary" size="sm" text="Login" />
            </div>
        </div>
      </div>
    </div>
  );
};
