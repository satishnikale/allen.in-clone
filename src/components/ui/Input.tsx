interface InputProps {
    label: string,
    placeholder: string,
}

export const Input = ({ label, placeholder }: InputProps) => {
    return (
        <div className="w-full h-auto flex flex-col font-poppins font-light text-lightBlack">
            <label className="my-1 text-" htmlFor="">{label}</label>
            <input className="shadow bg-white appearance-none py-2 px-3 outline-none hover:outline-black outline-[2px] rounded transition-all duration-200" type="text" placeholder={placeholder} />
        </div>
    )
}