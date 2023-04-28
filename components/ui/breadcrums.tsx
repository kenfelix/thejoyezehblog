"use client"

import { FC } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { Separator } from "./separator";


interface BreadCrumsProps {
    
}
 
const BreadCrums: FC<BreadCrumsProps> = (  ) => {

    const router = useRouter();
    const pathname = usePathname()

    console.log(pathname)
    return ( 
        <>
            <div className="px-[30px] sm:px-[60px] mt-[30px]">
                {pathname}
            </div>
            <Separator />
        </>
     );
}
 
export default BreadCrums;