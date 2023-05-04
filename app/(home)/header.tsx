import { FC } from "react";
import Image from "next/image";
import logo from "./public/logo.png"
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import { MenuIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MENU_ITEMS, SOCIAL_ITEMS } from "@/constants";
import Link from "next/link";
import Subscribe from "@/components/subscribe";



interface HeaderProps {
    
}
 
const Header: FC<HeaderProps> = () => {
    return ( 
        <div className="sticky transition-all duration-300 w-full top-0 z-50 bg-white">
            <div className="flex flex-row flex-wrap">
            {/* logo */}
            <div className="w-[20%] max-w-[200px]">
                <Image src={logo} alt={"Logo"} className="h-full w-full sm:h-170 sm:w-150 max-h-[200px]"/>
            </div>

            {/* content */}
            <div className="flex flex-col justify-between w-[80%] px-[20px]">
                {/* socials */}
                <div className="pt-[10px] flex flex-row w-full justify-end sm:justify-between items-center">
                    <Socials/>
                    <div className="flex flex-row space-x-2 justify-end">
                        <Subscribe/>
                        <Input type="search" placeholder="Search" />
                    </div>
                        <div className="block sm:hidden ml-[10px]">
                            <DropdownMenu>
                                <DropdownMenuTrigger><MenuIcon className="justify-center"/></DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white w-[200px]">
                                    <DropdownMenuLabel className="text-black">Menu</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {MENU_ITEMS.map((item, index) => (
                                        <Link href={item.link} key={index}>
                                            <DropdownMenuItem className="text-black">
                                                {item.label}
                                            </DropdownMenuItem>
                                        </Link>
                                    ))}
                                    <DropdownMenuSeparator />
                                    <DropdownMenuLabel className="text-black">Socials</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {SOCIAL_ITEMS.map((item, index) => (
                                        <Link href={item.link} key={index}>
                                            <DropdownMenuItem className="text-black">
                                                {item.label}
                                            </DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                    </div>

                </div>

                {/* menus */}
                <Navbar/>
            </div>
            </div>
            <Separator/>
        </div>
     );
}
 
export default Header;