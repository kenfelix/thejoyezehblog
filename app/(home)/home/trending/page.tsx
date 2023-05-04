import { GridArticle } from "@/components/gridarticles";
import Loadmore from "@/components/loadmore";
import BreadCrums from "@/components/ui/breadcrums";
import { Articles } from "@/constants";
import { FC } from "react";

interface TrendingProps {
    
}
 
const Trending: FC<TrendingProps> = () => {
    return ( 
        <>
            <BreadCrums />
            <div className="p-[30px] md:p-[60px] lg:p-[100px]">
                <GridArticle articles={Articles} />
                <Loadmore label='Load more' variant='default'/>
            </div>
        </>
     );
}
 
export default Trending;