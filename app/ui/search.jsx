import Image from "next/image"
export default function Search() {
    return (
        <div>
             {/* FIlter section and search */}
        <div className=' relative  flex justify-between mx-[24px] bg-White rounded-lg  h-[80px] -mt-9 md:pl-[32px] md:pr-[16px] md:-mt-2 md:mx-[39px] lg:-mt-8 lg:mx-[165px] md:divide-x-2 '>
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
              className='  text-VeryDarkBlue placeholder:text-md p  ring-0 rounded-lg focus:ring-0 focus:outline-none focus:border-none hidden lg:block lg:w-[312px] '
              placeholder='Filter by title, companies, expertise…'
            />
            <input
              type='text'
              className=' text-VeryDarkBlue  placeholder:text-md ring-0 rounded-lg focus:ring-0 focus:outline-none focus:border-none sm:hidden md:block lg:hidden'
              placeholder='Filter by title...'
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
              className=' text-VeryDarkBlue placeholder:text-Gr ring-0 rounded-lg focus:ring-0 focus:outline-none focus:border-none'
              placeholder='Filter by location'
            />
          </div>
          {/* jobs category */}
          <div className='hidden md:flex flex-row justify-center items-center pl-[32px]'>
            <input
              type='checkbox'
              className='form-chekbox  bg-Grey h-[24px] w-[24px] accent-Violet  '
            />
            <h1 className='font-bold text-VeryDarkBlue pl-[16px] hidden lg:block'>
              Full Time Only
            </h1>
            <h1 className='font-bold text-VeryDarkBlue pl-[16px] block lg:hidden'>
              Full Time
            </h1>
            <button className='bg-Violet hover:bg-Lightviolet md:w-[80px] md:h-[48px] rounded-lg ml-[26px] '>
              <h1 className='text-White font-semibold'>Search</h1>
            </button>
          </div>

          {/* input for small screens */}
          <input
            type='text'
            className='pl-[24px] text-VeryDarkBlue placeholder:text-Gr ring-0 rounded-lg focus:ring-0 focus:outline-none focus:border-none md:hidden '
            placeholder='Filter by title…'
          />
          {/* search and filter BUtton on small screens*/}
          <div className=' relative flex justify-center items-center space-x-[24.03px] mx-auto mr-[16px] md:hidden '>
            <Image src={'/mobile/icon-filter.svg'} width={19.97} height={20} />

            <div className='h-[48px] w-[48px] flex items-center justify-center rounded-lg bg-Violet '>
              <Image
                src={'/mobile/icon-search.svg'}
                width={19.95}
                height={19.95}
                className='seatch icon'
              />
            </div>
          </div>
        </div>
        </div>
    )
}
