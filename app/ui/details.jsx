import Image from 'next/image';
export default function Details() {
  return (
    <div className='  relative mx-[24px] md:mx-[40px] lg:mx-auto max-w-3xl flex justify-center items-center '>
      {/* job card details */}
      <div className='relative bg-White w-full mx-auto flex rounded-lg flex-col md:flex-row items-center md:justify-between  md:space-y-0 '>
        <Image
          src={'/logos/scoot.svg'}
          width={140}
          height={140}
          className='bg-yellow-600 py-[59px] px-[30px] rounded-bl-lg hidden md:block'
        />
    
        <Image
          src={'/logos/scoot.svg'}
          width={50}
          height={50}
          className='bg-yellow-600 px-[5px] py-[19px]  relative -top-5 rounded-xl block md:hidden '
        />
        <div className='flex flex-col items-center justify-center space-y-[13px] md:space-y-0 my-[24px] md:my-0 '>
          <h1 className='font-bold text-lg text-VeryDarkBlue '>Scoot</h1>
          <h1 className='font-light text-lg text-Grey '>scoot.com</h1>
        </div>
        <div>
          <div className='md:mr-[40px] md:ml-[248px] pb-[32px] md:pb-0'>
            <button className='bg-LightGray font-semibold flex rounded-lg  md:text-md mx-auto lg:text-lg text-Violet  py-[16px] px-[20px] '>
              Company Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
