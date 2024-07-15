import Image from 'next/image';
import JobCards from './ui/jobcards';
import Search from './ui/search';

export default function Home() {
  return (
    <main className='overflow-x-clip '>
      <section>
        <Search/>
         {/* Card section */}
         <div className=' mx-[24px] lg:mx-[165px] md:mx-[39px] pt-[80px] '>
          <JobCards />
        </div>
        <div className="mx-auto flex py-[56px] md:py-0 md:pb-[104px] md:pt-[56px]">
          <button className="text-White font-semibold bg-Violet rounded-md h-[48px] w-[141px] mx-auto">Load More</button>
        </div>
      </section>
    </main>
 
  );
}
