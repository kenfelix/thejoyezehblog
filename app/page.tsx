import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FC } from 'react';
import img1 from "../public/img1.jpg"
import { Typhography } from '@/constants/typography';
import Timeline from '@/components/timelines';


const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  
}
 
const Home: FC<HomeProps> = () => {
  return (
    <div className='divide-y divide-solid'>
      {/* breadcrumbs */}

      {/* main */}

      <div className='p-[50px] flex flex-row gap-[30px]'>
        {/* left */}
        <div className='w-[70%]'>
          <div className='flex fle-col'>
            <div className='relative h-[400px]'>
              <Image
                src={img1}
                alt=""
                className="object-cover w-full h-full"
              />
              <div className='absolute inset-0 bg-black w-[50%] h-[310px] opacity-[70%] z-10 p-3'>
                <p className={`${Typhography.subtle} text-gray-400`}>22-04-2023</p>
                <h1 className="text-white text-[20px] font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rerum. Minus dolores</h1>
                <div className='h-[15px]'></div>
                <p className={`${Typhography.small} text-gray-400`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, eaque aliquid! Quasi similique facere fugiat, possimus eveniet quod iusto hic unde illum praesentium. Et iure esse adipisci error minima debitis.</p>
                <p className={`${Typhography.subtle} text-red-500 cursor-pointer`}>read more...</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/* right */}
        <div className='w-[30%]'>
          <Timeline/>
        </div>
      </div>

      {/* bottom */}
    </div>
   );
}
 
export default Home;
