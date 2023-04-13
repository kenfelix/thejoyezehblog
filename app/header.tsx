import { FC } from "react";
import Image from "next/image";
import logo from "../public/logo.png"
import Navbar from "@/components/Navbar";

interface HeaderProps {
    
}
 
const Header: FC<HeaderProps> = () => {
    return ( 
        <div className="flex flex-row">
            {/* logo */}
            <div>
                <Image src={logo} alt={"Logo"} height={170} width={140} className=""/>
            </div>

            {/* content */}
            <div className="flex flex-col justify-between">
                {/* socials */}
                <div></div>

                {/* menus */}
                <Navbar/>
            </div>
        </div>
     );
}
 
export default Header;