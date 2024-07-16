import React, { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode
}
const Header: React.FC<HeaderProps> = ({children}: HeaderProps)=> {
    return (
        <header className="text-white bg-black flex justify-between p-4 items-center">
            {children}
        </header>
    )

}
export default Header;