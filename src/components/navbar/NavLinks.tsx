interface NavLinkProps {
  label: string;
}

export const NavLinks = ({ label }: NavLinkProps) => {
  return (
    <li className="text-lightBlack text-sm font-poppins py-3 hover:cursor-pointer transition-all trasition-duration-200 relative group">
      <span>{label}</span>
      <div className="absolute bottom-0 rounded w-full h-1 bg-blue-600 hidden group-hover:block transition-all trasition-duration-200"></div>
    </li>
  );
};
