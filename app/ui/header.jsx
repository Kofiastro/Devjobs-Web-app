import Image from "next/image";
export default function Header() {
    return (
        <div>
    {/* header Section*/}
        <Image
          fill
          src={'/desktop/bg-pattern-header.svg'}
          className='hidden  object-contain object-top lg:block '
        />
        <Image
          fill
          src={'/tablet/bg-pattern-header.svg'}
          className='hidden  object-contain object-top md:block lg:hidden '
        />
        <Image
          fill
          src={'/mobile/bg-pattern-header.svg'}
          className='block object-contain object-top md:hidden '
        />
        <div className='relative flex flex-row justify-between  pt-[32px] pb-[72px] px-[24px] md:px-[40px]  md:pt-[45px] md:pb-[85px] lg:px-[165px]'>
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
       
            
        </div>
    )
}
