import Image from "next/image"
export default function Filter()
{
    return (
        <div className=" relative p-[24px]  bg-white mx-[24px] mt-[89px] flex flex-col  justify-center space-y-[24px]  md:hidden rounded-lg">
            <div className="divide-y-2 space-y-[24px]">

            <div className=" flex space-x-3  ">
            <Image
              src={'/desktop/icon-location.svg'}
              width={16.72}
              height={23.89}
              className=''
            />
            <input
              type='text'
              className='  text-VeryDarkBlue placeholder:text-md ring-0 rounded-lg focus:ring-0 focus:outline-none focus:border-none'
              placeholder='Filter by location…'
            />
            </div>
            <div className="flex space-x-3 pt-[24px]  ">
            <input
              type='checkbox'
              className='form-chekbox  bg-Grey h-[24px] w-[24px] accent-Violet  '
            />
            <h1 className='font-bold text-VeryDarkBlue'>
              Full Time Only
            </h1>
            </div>
            </div>
            <div className="">
            <button className="w-full bg-Violet  text-White font-semibold rounded-lg text-lg p-4 mx-auto">Search</button>
            </div>
           
        </div>
    )
}
