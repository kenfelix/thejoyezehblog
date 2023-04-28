import { FC } from "react";
import GridArticle from "./gridarticles";
import Loadmore from "./loadmore";
import { Articles } from "@/constants";

interface HomeGridArticlesProps {

}

const HomeGridArticles: FC<HomeGridArticlesProps> = () => {
    return (
        <div>
            <GridArticle articles={Articles} />
            <Loadmore label='Load more' variant='default'/>
        </div>
    )
}

export default HomeGridArticles