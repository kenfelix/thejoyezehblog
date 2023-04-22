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
        <>
            <div className="flex flex-row flex-wrap">
            {/* logo */}
            <div className="w-[20%] max-w-[200px]">
                <Image src={logo} alt={"Logo"} className="h-full w-full sm:h-170 sm:w-150 max-h-[200px]"/>
            </div>

            {/* content */}
            <div className="flex flex-col justify-between w-[80%] px-[20px]">
                {/* socials */}
                <div className="pt-[10px] flex flex-row w-full justify-between">
                    <Socials/>
                    <div className="flex flex-row space-x-2 justify-end">
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
            <Separator/>
        </>
     );
}
 
export default Header;