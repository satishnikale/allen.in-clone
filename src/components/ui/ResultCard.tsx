interface ResultCardProps {
  heading: string;
  text: string;
  roundedRight?: boolean;
  roundedLeft?: boolean;
}

export const ResultCard = ({
  heading,
  text,
  roundedRight,
  roundedLeft,
}: ResultCardProps) => {
  return (
    <div
      className={`w-full h-auto bg-white p-6 space-y-10 rouded rounded ${
        roundedLeft ? "rounded-l-3xl" : ""
      }
        ${roundedRight ? "rounded-r-3xl" : ""}
        `}
    >
      <h1 className="text-3xl text-blue-800 font-bold">{heading}</h1>
      <p className="text-lightBlack font-poppins">{text}</p>
    </div>
  );
};
