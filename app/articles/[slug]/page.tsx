import ArticleDetailed from "@/components/article-detailed";
import BreadCrums from "@/components/ui/breadcrums";
import { FC } from "react";
import { Articles } from "@/constants";

interface ArticleDetailedPageProps {
    params: {
        slug: string
    }
}
 
const ArticleDetailedPage: FC<ArticleDetailedPageProps> = ({ params }) => {
    const article = Articles.at(0); // get the first article from the array

    if (!article) {
        return <div>Article not found</div>; // handle the case where the article is undefined
    }
    return ( 
        <div>
            <BreadCrums />
            <ArticleDetailed article={article} />
        </div>
     );
}
 
export default ArticleDetailedPage;