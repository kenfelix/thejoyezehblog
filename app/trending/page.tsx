import { GridArticle } from "@/components/gridarticles";
import { Articles } from "@/constants";
import { FC } from "react";

interface TrendingProps {
    
}
 
const Trending: FC<TrendingProps> = () => {
    return ( 
        <div className="p-[30px] md:p-[60px] lg:p-[100px]"><GridArticle articles={Articles} /></div>
     );
}
 
export default Trending;