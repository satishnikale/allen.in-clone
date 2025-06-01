interface NewProps {
    text:string,
}

export const New = ({text}: NewProps) => {
    return <span className="font-poppins text-[10px] text-white bg-[#ea9d30] px-1 rounded-lg uppercase">
        {text}
    </span>
}