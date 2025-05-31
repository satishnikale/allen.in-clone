import { AllenIcon } from "../icons/AllenIcon";
import { LuPhone } from "react-icons/lu";
import { NavLinks } from "./NavLinks";
import { Button } from "./Button";


export const Navbar = () => {

  const navItem = [
    { name: "Courses" },
    { name: "Test Series"},
    { name: "Results" },
    { name: "Study Materials" },
    { name: "Scholarships" },
    { name: "Books" },
    { name: "More" },
  ];

  return (
    <div className="w-full h-16">
      <div className="w-[97%] h-full mx-auto flex items-center gap-x-8 relative">
        <div>
          <AllenIcon />
        </div>
        <div className="">
          <ul className="flex gap-x-6">
            {navItem.map((item) => (
            <NavLinks key={item.name} label={item.name} />
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
