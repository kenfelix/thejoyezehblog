import { FC } from "react";
import { SOCIAL_ITEMS } from "@/constants";
import { Button } from "@/components/ui/button"


interface SocialsProps {
    
}
 
const Socials: FC<SocialsProps> = () => {
    return ( 
        <div className="flex flex-row gap-2">
            {SOCIAL_ITEMS.map((items) => (
                <Button variant="custom">
                    <items.icon className="h-[20px] w-[20px]"/>
                </Button>
                
            ))}
        </div>
     );
}
 
export default Socials;