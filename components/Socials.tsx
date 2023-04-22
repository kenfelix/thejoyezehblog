import { FC } from "react";
import { SOCIAL_ITEMS } from "@/constants";
import { Button } from "@/components/ui/button"


interface SocialsProps {
    
}
 
const Socials: FC<SocialsProps> = () => {
    return ( 
        <div className="hidden sm:flex flex-row gap-2">
            {SOCIAL_ITEMS.map((items, index) => (
                <Button key={index} variant="custom">
                    <items.icon className="h-[20px] w-[20px]"/>
                </Button>
                
            ))}
        </div>
     );
}
 
export default Socials;