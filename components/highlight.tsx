"use client"


import * as React from 'react';
import { Articles } from '@/constants';
import Image from 'next/image';
import { Typhography } from '@/constants/typography';
import { useRouter } from 'next/navigation';

export interface IHighlightProps {
}

export function Highlight(props: IHighlightProps) {
  
  const router = useRouter()
  return (
      <div className='flex flex-col gap-6 mt-10'>
          <h3 className={Typhography.large}>
              HIGHLIGHTS
        </h3>
          {Articles.map((article, index) => (
              <div key={index} className='flex flex-row gap-4 w-full'>
              <div className='h-[90px] w-[40%]'>
                <Image src={article.image} alt={''} className='h-full w-full object-cover' />
                  </div>
                  <div className='flex flex-col w-[60%]'>
                      <p className={`${Typhography.h4} overflow-hidden max-w-1`}>{article.title}</p>
                      <p className={`${Typhography.small} text-red-500 cursor-pointer`} onClick={() => {router.push(`/home/articles/${article.slug}`)}}>read more</p>
                  </div>
          </div>
      ))}
    </div>
  );
}
