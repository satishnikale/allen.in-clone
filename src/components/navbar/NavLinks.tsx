import { useState } from "react";

interface NavLinkProps {
  label: string;
  onHover?: () => void,
}

export const NavLinks = ({ label }: NavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-lightBlack text-sm font-poppins py-3 hover:cursor-pointer transition-all trasition-duration-200 relative group">
      <span>{label}</span>
      <div className="absolute bottom-0 rounded w-full h-1 bg-blue-600 hidden group-hover:block transition-all trasition-duration-200"></div>
    </li>
  );
};
