import { Inter } from 'next/font/google'
import { FC } from 'react';
import Timeline from '@/components/timelines';
import { Highlight } from '@/components/highlight';
import BreadCrums from '@/components/ui/breadcrums';
import HomeGridArticles from '@/components/home-grid-articles';
import Hero from '@/components/hero';


const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  
}
 
const Home: FC<HomeProps> = () => {
  return (
    <div>
      {/* breadcrumbs */}
      <BreadCrums/>

      {/* main */}

      <div className='p-[20px] mt-[20px] lg:p-[60px] flex flex-col md:flex-row gap-[50px]'>
        {/* left */}
        <div className='w-full md:w-[65%]'>
          <div className='flex flex-col space-y-[50px]'>
            <Hero/>
            <HomeGridArticles/>
          </div>
        </div>
        {/* right */}
        <div className='w-full md:w-[35%]'>
          <Timeline />
          <Highlight/>
        </div>
      </div>
    </div>
   );
}
 
export default Home;
