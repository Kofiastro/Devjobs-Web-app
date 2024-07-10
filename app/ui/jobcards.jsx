import Image from 'next/image';
export default function JobCards() {
  return (
    <div className=' grid gap-y-[49px] md:grid-cols-2 md:gap-x-[11px] md:gap-y-[65px] lg:grid-cols-3 lg:gap-x-[30px]'>
      {/* Card1 */}
      <div className='relative h-[228px] bg-White rounded-lg '>
        {/* logo */}
        <Image
          src={"/logos/scoot.svg"}
          width={50}
          height={50}
          className='bg-yellow-500 rounded-xl px-[5px] py-[19px] -mt-6 ml-[32px]'
          alt='Scoot icon'
        />
        <div className="flex flex-col m-[32px] space-y-[17px]">
            <div className='flex text-Grey '>
                <h1>5hr ago</h1>
                <h1>Full Time
                </h1>
            </div>
            <h1 className='font-bold text-lg'>Senior Software Engineer</h1>
            <div>
                <div>
                    <h1 className='text-md text-Grey'>Scoot</h1>
                </div>

            </div>
            <div className=''>
                <h1 className='text-Violet font-semibold'>United Kingdom</h1>
            </div>

        </div>
      </div>
       {/* Card1 */}
       <div className='relative h-[228px] bg-White rounded-lg '>
        {/* logo */}
        <Image
          src={"/logos/scoot.svg"}
          width={50}
          height={50}
          className='bg-yellow-500 rounded-xl px-[5px] py-[19px] -mt-6 ml-[32px]'
          alt='Scoot icon'
        />
        <div className="flex flex-col m-[32px] space-y-[17px]">
            <div className='flex text-Grey '>
                <h1>5hr ago</h1>
                <h1>Full Time
                </h1>
            </div>
            <h1 className='font-bold text-lg'>Senior Software Engineer</h1>
            <div>
                <div>
                    <h1 className='text-md text-Grey'>Scoot</h1>
                </div>

            </div>
            <div className=''>
                <h1 className='text-Violet font-semibold'>United Kingdom</h1>
            </div>

        </div>
      </div>
       {/* Card1 */}
       <div className='relative h-[228px] bg-White rounded-lg '>
        {/* logo */}
        <Image
          src={"/logos/scoot.svg"}
          width={50}
          height={50}
          className='bg-yellow-500 rounded-xl px-[5px] py-[19px] -mt-6 ml-[32px]'
          alt='Scoot icon'
        />
        <div className="flex flex-col m-[32px] space-y-[17px]">
            <div className='flex text-Grey '>
                <h1>5hr ago</h1>
                <h1>Full Time
                </h1>
            </div>
            <h1 className='font-bold text-lg'>Senior Software Engineer</h1>
            <div>
                <div>
                    <h1 className='text-md text-Grey'>Scoot</h1>
                </div>

            </div>
            <div className=''>
                <h1 className='text-Violet font-semibold'>United Kingdom</h1>
            </div>

        </div>
      </div>
       {/* Card1 */}
       <div className='relative h-[228px] bg-White rounded-lg '>
        {/* logo */}
        <Image
          src={"/logos/scoot.svg"}
          width={50}
          height={50}
          className='bg-yellow-500 rounded-xl px-[5px] py-[19px] -mt-6 ml-[32px]'
          alt='Scoot icon'
        />
        <div className="flex flex-col m-[32px] space-y-[17px]">
            <div className='flex text-Grey '>
                <h1>5hr ago</h1>
                <h1>Full Time
                </h1>
            </div>
            <h1 className='font-bold text-lg'>Senior Software Engineer</h1>
            <div>
                <div>
                    <h1 className='text-md text-Grey'>Scoot</h1>
                </div>

            </div>
            <div className=''>
                <h1 className='text-Violet font-semibold'>United Kingdom</h1>
            </div>

        </div>
      </div>
    </div>
  );
}
