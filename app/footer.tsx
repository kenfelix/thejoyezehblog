import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import GraphicsLetter from "@/components/graphicletters";
import { Typhography } from "@/constants/typography";
import Loadmore from "@/components/loadmore";
import { Button } from "@/components/ui/button";
import { MENU_ITEMS } from "@/constants";
import Link from "next/link";
import { SOCIAL_ITEMS } from "@/constants";

interface FooterProps {
    
}
 
const Footer: FC<FooterProps> = () => {
    return ( 
        <div className="flex flex-col w-full">
            <Separator />
            <GraphicsLetter />
            <Separator />
            <div className="flex flex-col md:flex-row px-[20px] lg:px-[60px] h-[194px]">
                <div className="flex flex-col items-center md:items-start justify-start pt-[30px] gap-[20px] w-full h-full">
                    <div className="flex flex-col md:flex-row gap-3 items-center">
                        <p className={Typhography.h4}>Links</p>
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            {MENU_ITEMS.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <Button variant={"link"} className="focus:ring-0 dark:focus:ring-0">
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                        </div> 
                    </div>
                    <div className="w-full h-full">
                    <iframe className="h-full w-full" src="https://www.youtube.com/embed/q8Li2CTb1RI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop;" allowFullScreen></iframe>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 items-center">
                        <p className={Typhography.h4}>Socials</p>
                        <div className="flex flex-col md:flex-row  md:flex-rowgap-2 items-center">
                            {SOCIAL_ITEMS.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <Button variant={"link"} className="focus:ring-0 dark:text-white dark:focus:ring-0">
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row items-center w-full sm:space-x-3">
                        <p className={`${Typhography.small} p-2 text-center items-center bg-black text-white`}>
                            © 2023 thejoyezeh. All rights reserved. | Powered by takjug.tech
                        </p>
                        <div className="hidden md:block">
                            <Loadmore label="Contact us" variant='ghost'/>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
     );
}
 
export default Footer;