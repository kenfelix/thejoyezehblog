"use client"

import { FC, ReactNode } from "react";
import { MENU_ITEMS } from "@/constants";
import Link from "next/link";
// import { useRouter } from 'next/router';


interface NavbarProps {}
 
const Navbar: FC<NavbarProps> = () => {
    function items(value: { id: number; label: string; link: string; }, index: number, array: { id: number; label: string; link: string; }[]): ReactNode {
        throw new Error("Function not implemented.");
    }

    // const router = useRouter();

    return ( 
        <nav>
            <ul className="flex flex-row justify-between space-x-4">
                {MENU_ITEMS.map((items) => (
                    <li key={items.id}>
                        <Link href={items.link}>
                            {items.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Navbar;