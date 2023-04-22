import * as React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './ui/card'
import { Articles } from '@/constants';
import Image, { StaticImageData } from 'next/image';


type ArticleType = {
  id: number
  date: string
  title: string
  image: StaticImageData
  description: string
}[]


interface GridArticleProps {
  articles: ArticleType
}

export const GridArticle : React.FC<GridArticleProps> = ( { articles=Articles} ) =>  {
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {articles.map((article, index) => (
          
        <Card key={index} className='border-none shadow-none'>
            <CardHeader className='px-0'>
                <CardDescription className='text-gray-500'>{article.date}</CardDescription>
                <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent className='px-0'>
                <Image
                src={article.image}
                alt=""
                className="object-cover w-full h-[150px]"
              />
            </CardContent>
            <CardFooter className='px-0 flex-col items-start'>
                      <p className='overflow-hidden max-h-[120px] text-gray-500'>{article.description}</p>
                      <p className='text-red-500 cursor-pointer'>read more</p>
            </CardFooter>
        </Card>

        ))}
    </div>
  );
}

export default GridArticle;
