import React from "react";


interface LogoItem {
    title: string;
    link: string;
    
}

interface LogoProps {
    items: LogoItem
}


const Logo: React.FC<LogoProps> = ({items}: LogoProps) =>{
    return <>
        <a href='/' className="flex justify-between items-center">
            <img src={items.link} alt={items.title} className="w-20 h-16"/>
            <span className="font-inspiration text-54">{items.title}</span>
        </a>
    </>
}
export default Logo;