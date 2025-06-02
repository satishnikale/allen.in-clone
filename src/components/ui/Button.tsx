
interface ButtonProps {
    varient: "primary" | "secondary" | "tertiary",
    size: "sm" | "md" | "lg",
    text: string,
    onClick?: ()=> void,
    endIcon?: any,
    fullWidth?: boolean,
    loading?: boolean
}

const buttonVarientsStyles = {
  primary: "outline outline-[2px] outline-blue-500 text-lightBlack text-sm hover:bg-gray-300",
  secondary: "appearance-none text-sm text-white rounded-3xl bg-blue-600 hover:bg-blue-700",
  tertiary: "appearance-none flex items-center gap-x-1 font-medium font-poppins text-blue-600",
};

const buttonSizeStyle = {
  sm: "py-1 px-3 rounded-2xl",
  md: "py-2 px-4 rounded-3xl",
  lg: "w-full",
};

const defaultStyles = "cursor-pointer font-poppins transition-all duration-200";


export const Button = ({ varient, size,  text, fullWidth, endIcon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonVarientsStyles[varient]} ${defaultStyles} ${buttonSizeStyle[size]}
      ${fullWidth ? "w-full" : ""}`}
    >
    {text} {endIcon}
    </button>
  );
};
