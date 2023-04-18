"use client"

import { FC, ReactNode } from "react";
import { MENU_ITEMS } from "@/constants";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
  


interface NavbarProps {}
 
const Navbar: FC<NavbarProps> = () => {
    function items(value: { id: number; label: string; link: string; }, index: number, array: { id: number; label: string; link: string; }[]): ReactNode {
        throw new Error("Function not implemented.");
    }

    // const router = useRouter();

    return ( 
        <NavigationMenu>
        <NavigationMenuList>
          {MENU_ITEMS.map((items) => (
            <NavigationMenuItem key={items.id}>
            <Link href={items.link} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {items.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
            
    );
}
 
export default Navbar;