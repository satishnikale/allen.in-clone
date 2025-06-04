interface LinksProps {
    label:string,
    link: string
}


export const FooterLinks = ({ label, link }: LinksProps ) => {
    return (
            <a
                href={link}
                target="_blank"
                rel=""
                className="w-full h-auto my-4 text-gray-600 font-poppins text-[12px] cursor-pointer"
            >
                {label}
                <br />
            </a>
    )
}