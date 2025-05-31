
interface ButtonProps {
    varient: "primary" | "secondary",
    size: "sm" | "md" | "lg",
    text: string,
    onClick?: ()=> void,
    loading?: boolean
}

const buttonVarientsStyles = {
  primary: "outline outline-blue-500 rounded-2xl hover:bg-gray-300",
  secondary: "bg-indigo-600 text-white",  
};

const buttonSizeStyle = {
  sm: "py-1 px-3",
  md: "py-2 px-4",
  lg: "py-3 px-5",
};

const defaultStyles = "text-sm cursor-pointer font-poppins transition-all duration-200";


export const Button = ({ varient, size,  text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonVarientsStyles[varient]} ${defaultStyles} ${buttonSizeStyle[size]}`}
    >
    {text}
    </button>
  );
};
