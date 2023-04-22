import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FC } from 'react';
import img1 from "../public/img1.jpg"
import { Typhography } from '@/constants/typography';
import Timeline from '@/components/timelines';
import Loadmore from '@/components/loadmore';
import { GridArticle } from '@/components/gridarticles';
import { Highlight } from '@/components/highlight';
import { Articles } from '@/constants';

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  
}
 
const Home: FC<HomeProps> = () => {
  return (
    <div>
      {/* breadcrumbs */}

      {/* main */}

      <div className='p-[20px] mt-[20px] lg:p-[60px] flex flex-col md:flex-row gap-[50px]'>
        {/* left */}
        <div className='w-full md:w-[65%]'>
          <div className='flex flex-col space-y-[50px]'>
            <div className='relative h-[400px] w-full'>
              <Image
                src={img1}
                alt=""
                className="object-cover w-full h-full"
              />
              <div className='absolute inset-0 bg-black w-[60%] h-[80%] opacity-[70%] z-10 p-3'>
                <p className={`md:${Typhography.subtle} text-gray-400 text-[13px]`}>22-04-2023</p>
                <h1 className="text-white sm:text-[20px] font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero</h1>
                <div className='h-[15px]'></div>
                <p className={`${Typhography.small} text-gray-400 text-ellipsis overflow-hidden max-h-[40%]`}>Bala blu broooom bala our blu tia-tia eba symbol 50million garri different bulaba youths from bala highway mpower blu generated highway symbol transmission bala townhall agbado pdapc bala from bala roasted broooom bulaba our line cassava youths umbreleda corn cassava mpower electricty garri roasted symbol army blu mpower bala garri transmission mpower our umbreleda broooom bala from youths townhall symbol broooom bala eba symbol pdapc eneme army from transmission from army eneme different line broooom tia-tia agbado different super townhall from blu mpower bala super bala cassava generated blu blu down-payment 50million electricty from bala army cassava bala garri generated mpower highway eba broooom transmission army blu townhall symbol transmission super garri youths mpower youths broooom blu from mpower broooom garri townhall eba umbreleda broooom bala super cassava corn blu generated umbreleda mpower tia-tia bala umbreleda pdapc highway bulaba roasted umbreleda line from blu agbado transmission highway bala army cassava 50million roasted bulaba eba army recruit transmission bala cassava transmission blu cassava highway bala symbol 50million broooom different eba from roasted bala from townhall 50million army corn recruit eneme recruit agbado down-payment cassava umbreleda eneme generated pdapc blu broooom 50million transmission army pdapc mpower broooom garri blu eba tia-tia townhall</p>
                <p className={`${Typhography.subtle} text-red-500 cursor-pointer`}>read more...</p>
              </div>
            </div>
            <div>
              <GridArticle articles={Articles} />
              <Loadmore label='Load more' variant='default'/>
            </div>
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
