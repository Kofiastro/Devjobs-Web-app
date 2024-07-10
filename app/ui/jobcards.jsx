import Image from 'next/image';
export default function JobCards() {
  return (
    <div className=' relative grid gap-y-[49px] md:grid-cols-2 md:gap-x-[11px] md:gap-y-[65px] lg:grid-cols-3 lg:gap-x-[30px]'>
      {/* Card1 */}
      <div className=' bg-White rounded-lg '>
        {/* logo */}
        <Image
          src={'/logos/scoot.svg'}
          width={50}
          height={50}
          className='bg-yellow-500 rounded-xl px-[5px] py-[19px] -mt-6 ml-[32px]'
          alt='Scoot icon'
        />
        <div className='flex flex-col  p-[32px]  space-y-[16px]'>
          <div className='flex space-x-6 text-Grey '>
            <h1>5hr ago</h1>
            <ul className='list-disc'>
              <li>Full Time</li>
            </ul>
          </div>

          <div className='space-y-[16px]'>
            <h1 className='font-bold text-lg'>Senior Software Engineer</h1>
            <h1 className='text-md text-Grey'>Scoot</h1>
          </div>
          <div className='pt-[27px]'>
            <h1 className='text-Violet font-semibold'>United Kingdom</h1>
          </div>
        </div>
      </div>
      {/* Card 2  */}
      <div className=' bg-White rounded-lg '>
        {/* logo */}
        <Image
          src={'/logos/scoot.svg'}
          width={50}
          height={50}
          className='bg-yellow-500 rounded-xl px-[5px] py-[19px] -mt-6 ml-[32px]'
          alt='Scoot icon'
        />
        <div className='flex flex-col  p-[32px]  space-y-[16px]'>
          <div className='flex space-x-6 text-Grey '>
            <h1>5hr ago</h1>
            <ul className='list-disc'>
              <li>Full Time</li>
            </ul>
          </div>

          <div className='space-y-[16px]'>
            <h1 className='font-bold text-lg'>Senior Software Engineer</h1>
            <h1 className='text-md text-Grey'>Scoot</h1>
          </div>
          <div className='pt-[27px]'>
            <h1 className='text-Violet font-semibold'>United Kingdom</h1>
          </div>
        </div>
      </div>
      {/* Card 2  */}
      <div className=' bg-White rounded-lg '>
        {/* logo */}
        <Image
          src={'/logos/scoot.svg'}
          width={50}
          height={50}
          className='bg-yellow-500 rounded-xl px-[5px] py-[19px] -mt-6 ml-[32px]'
          alt='Scoot icon'
        />
        <div className='flex flex-col  p-[32px]  space-y-[16px]'>
          <div className='flex space-x-6 text-Grey '>
            <h1>5hr ago</h1>
            <ul className='list-disc'>
              <li>Full Time</li>
            </ul>
          </div>

          <div className='space-y-[16px]'>
            <h1 className='font-bold text-lg'>Senior Software Engineer</h1>
            <h1 className='text-md text-Grey'>Scoot</h1>
          </div>
          <div className='pt-[27px]'>
            <h1 className='text-Violet font-semibold'>United Kingdom</h1>
          </div>
        </div>
      </div>
      {/* Card 3  */}
      <div className=' bg-White rounded-lg '>
        {/* logo */}
        <Image
          src={'/logos/scoot.svg'}
          width={50}
          height={50}
          className='bg-yellow-500 rounded-xl px-[5px] py-[19px] -mt-6 ml-[32px]'
          alt='Scoot icon'
        />
        <div className='flex flex-col  p-[32px]  space-y-[16px]'>
          <div className='flex space-x-6 text-Grey '>
            <h1>5hr ago</h1>
            <ul className='list-disc'>
              <li>Full Time</li>
            </ul>
          </div>

          <div className='space-y-[16px]'>
            <h1 className='font-bold text-lg'>Senior Software Engineer</h1>
            <h1 className='text-md text-Grey'>Scoot</h1>
          </div>
          <div className='pt-[27px]'>
            <h1 className='text-Violet font-semibold'>United Kingdom</h1>
          </div>
        </div>
      </div>
      {/* Card 2  */}
      <div className=' bg-White rounded-lg '>
        {/* logo */}
        <Image
          src={'/logos/scoot.svg'}
          width={50}
          height={50}
          className='bg-yellow-500 rounded-xl px-[5px] py-[19px] -mt-6 ml-[32px]'
          alt='Scoot icon'
        />
        <div className='flex flex-col  p-[32px]  space-y-[16px]'>
          <div className='flex space-x-6 text-Grey '>
            <h1>5hr ago</h1>
            <ul className='list-disc'>
              <li>Full Time</li>
            </ul>
          </div>

          <div className='space-y-[16px]'>
            <h1 className='font-bold text-lg'>Senior Software Engineer</h1>
            <h1 className='text-md text-Grey'>Scoot</h1>
          </div>
          <div className='pt-[27px]'>
            <h1 className='text-Violet font-semibold'>United Kingdom</h1>
          </div>
        </div>
      </div>
      {/* Card 2  */}
      <div className=' bg-White rounded-lg '>
        {/* logo */}
        <Image
          src={'/logos/scoot.svg'}
          width={50}
          height={50}
          className='bg-yellow-500 rounded-xl px-[5px] py-[19px] -mt-6 ml-[32px]'
          alt='Scoot icon'
        />
        <div className='flex flex-col  p-[32px]  space-y-[16px]'>
          <div className='flex space-x-6 text-Grey '>
            <h1>5hr ago</h1>
            <ul className='list-disc'>
              <li>Full Time</li>
            </ul>
          </div>

          <div className='space-y-[16px]'>
            <h1 className='font-bold text-lg'>Senior Software Engineer</h1>
            <h1 className='text-md text-Grey'>Scoot</h1>
          </div>
          <div className='pt-[27px]'>
            <h1 className='text-Violet font-semibold'>United Kingdom</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
