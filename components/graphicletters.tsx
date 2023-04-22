"use client"

import * as React from 'react';
import { Letters } from '@/constants';
import Image from 'next/image';

interface GraphicsLetterProps {
    
}

 const GraphicsLetter: React.FC<GraphicsLetterProps> = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-[20px] lg:p-[60px] gap-7 overflow-hidden'>
      {Letters.map((letter, index) => (
        <div key={index} className='w-full h-[200px] sm:h-[150px] xl:h-[200px]'>
          <Image alt='' src={letter.image} className='object-cover h-full w-full'/>
        </div>
      ))}
    </div>
  );
}

export default GraphicsLetter