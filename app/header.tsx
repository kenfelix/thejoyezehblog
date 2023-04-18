import { FC } from "react";
import Image from "next/image";
import logo from "../public/logo.png"
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { NfcIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"


interface HeaderProps {
    
}
 
const Header: FC<HeaderProps> = () => {
    return ( 
        <div className="flex flex-row space-x-[30px]">
            {/* logo */}
            <div>
                <Image src={logo} alt={"Logo"} height={170} width={140} className=""/>
            </div>

            {/* content */}
            <div className="flex flex-col justify-between">
                {/* socials */}
                <div className="pt-[10px] flex flex-row space-x-[400px]">
                    <Socials/>
                    <div className="flex flex-row space-x-2">
                        <Button variant={"ghost"}>
                            <NfcIcon className="mr-2 h-4 w-4"/>
                            Newsletter
                        </Button>
                        <Input type="search" placeholder="Search" />
                    </div>
                </div>

                {/* menus */}
                <Navbar/>
            </div>
        </div>
     );
}
 
export default Header;