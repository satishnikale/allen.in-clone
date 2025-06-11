import { LuChevronRight } from "react-icons/lu";

interface NavLinkProps {
  label: string,
  subItem: string[],
}

export const NavLinks = ({ label, subItem }: NavLinkProps) => {

  return (
    <li
      className="text-lightBlack text-sm font-poppins py-3 hover:cursor-pointer transition-all trasition-duration-200 relative group">
      <span>{label}</span>
      <div className="absolute bottom-0 rounded w-full h-1 bg-blue-600 hidden group-hover:block transition-all trasition-duration-200"></div>
      {/* Modal */}
      <div className="absolute left-0 mt-6 w-52 p-2 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-auto group-hover:pointer-events-auto transition-opacity duration-300 z-10">
        <div className="">
          {subItem.map((item) => (
            <p className="w-full flex items-center text-[14px] text-gray-600 p-2 hover:bg-lightSky rounded relative">
              {item}
              <LuChevronRight size={15} className="absolute right-1" />
            </p>
          ))}
        </div>
      </div>
    </li>
  );
};
