import * as React from 'react';
import { Articles } from '@/constants';
import Image from 'next/image';
import { Typhography } from '@/constants/typography';

export interface IHighlightProps {
}

export function Highlight (props: IHighlightProps) {
  return (
      <div className='flex flex-col gap-6 mt-10'>
          <h3 className={Typhography.large}>
              HIGHLIGHTS
        </h3>
          {Articles.map((article, index) => (
              <div key={index} className='flex flex-row gap-4'>
                  <Image src={article.image} alt={''} className='h-[90px] w-[40%] object-cover' />
                  <div className='flex flex-col w-[60%]'>
                      <p className={`${Typhography.h4} overflow-hidden max-w-1`}>{article.title}</p>
                      <p className={`${Typhography.small} text-red-500 cursor-pointer`}>read more</p>
                  </div>
          </div>
      ))}
    </div>
  );
}
