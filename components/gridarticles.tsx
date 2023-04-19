import * as React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './ui/card'
import { Articles } from '@/constants';
import Image from 'next/image';


export interface IGridArticleProps {
}

export function GridArticle (props: IGridArticleProps) {
  return (
      <div className='grid grid-cols-3 gap-6'>
          {Articles.map((article, index) => (
          
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
