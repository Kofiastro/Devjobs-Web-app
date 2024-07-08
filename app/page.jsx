import Image from 'next/image';

export default function Home() {
  return (
    <main className='bg-LightGray h-dvh'>
      {/* header Section*/}
      <section>
        <Image
          fill
          src={'/desktop/bg-pattern-header.svg'}
          className='hidden  absolute object-contain object-top lg:block '
        />
        <Image
          fill
          src={'/tablet/bg-pattern-header.svg'}
          className='hidden absolute object-contain object-top md:block lg:hidden '
        />
        <Image
          fill
          src={'/mobile/bg-pattern-header.svg'}
          className='block absolute object-contain object-top md:hidden '
        />
        <div className='relative flex flex-row justify-between pt-[32px] pb-[72px] px-[24px] md:px-[40px]  md:pt-[45px] md:pb-[85px] lg:px-[165px]'>
          <div>
            <Image
              src={'/desktop/logo.svg'}
              width={115}
              height={32}
              className=''
              alt='desktop logo'
            />
          </div>
          {/* Dark and light mode switcher */}
          <div className='flex flex-row items-center '>
            <div>
              <Image
                src={'/desktop/icon-sun.svg'}
                width={20}
                height={18.6}
                className=' '
                alt='switcher sun'
              />
            </div>
            <div>
              <button className=' w-[48px] h-[24px] mx-[16px] rounded-full bg-White p-[5px]'>
                <div className='w-[14px] h-[14px] bg-Lightviolet rounded-full '></div>
              </button>
            </div>
            <Image
              src={'/desktop/icon-moon.svg'}
              width={12}
              height={12}
              className=' '
              alt='switcher moon'
            />
          </div>
        </div>
        {/* FIlter section and search */}
        <div className=' relative  flex justify-between mx-[24px] bg-White rounded-lg h-[80px] -mt-9 md:pl-[32px] md:pr-[16px] md:-mt-2 md:mx-[39px] lg:-mt-8 lg:mx-[165px] md:divide-x-2 '>
          {/* FIlter and search  section for medium and large screens */}
          <div className='hidden md:flex flex-row justify-center items-center'>
            {/* input large screens*/}
            {/* Search field */}
            <Image
              src={'/desktop/icon-search.svg'}
              width={23.94}
              height={23.94}
              className='mx-[16px]'
            />
            <input
              type='text'
              className=' text-Grey ring-0 rounded-lg focus:ring-0 focus:outline-none focus:border-none w-[271px]  '
              placeholder='Filter by title, companies, expertise…' 
            />
          </div>
          {/* Filter by location */}
          <div className='hidden md:flex flex-row justify-center items-center pl-[32px]'>
            {/* Filter location */}
            <Image
              src={'/desktop/icon-location.svg'}
              width={16.72}
              height={23.89}
              className='mx-[16px]'
            />
            <input
              type='text'
              className=' text-Grey ring-0 rounded-lg focus:ring-0 focus:outline-none focus:border-none'
              placeholder='Filter by location'
            />
          </div>
          {/* jobs category */}
          <div className='hidden md:flex flex-row justify-center items-center pl-[32px]'>
            <input type='checkbox' className='form-chekbox  bg-Grey h-[24px] w-[24px] accent-Violet  ' />
            <h1 className='font-bold text-VeryDarkBlue pl-[16px]'>
              Full Time Only
            </h1>
            <button className='bg-Violet w-[123px] h-[48px] rounded-lg ml-[26px] '>
              <h1 className='text-White font-semibold'>Search</h1>
            </button>
          </div>

          {/* input for small screens */}
          <input
            type='text'
            className='pl-[24px] text-Grey ring-0 rounded-lg focus:ring-0 focus:outline-none focus:border-none md:hidden '
            placeholder='Filter by title…'
          />
          {/* search and filter BUtton on small screens*/}
          <div className=' relative flex justify-center items-center space-x-[24.03px] mx-auto mr-[16px] md:hidden '>
            <Image src={'/mobile/icon-filter.svg'} width={19.97} height={20} />

            <div className=' h-[48px] w-[48px]  flex items-center justify-center rounded-lg bg-Violet '>
              <Image
                src={'/mobile/icon-search.svg'}
                width={19.95}
                height={19.95}
                className=''
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
