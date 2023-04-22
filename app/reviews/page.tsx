import GridArticle from "@/components/gridarticles";
import { Articles } from "@/constants";
import { FC } from "react";

interface ReviewsProps {
    
}
 
const Reviews: FC<ReviewsProps> = () => {
    return ( 
        <div><div className="p-[30px] md:p-[60px] lg:p-[100px]"><GridArticle articles={Articles} /></div></div>
     );
}
 
export default Reviews;