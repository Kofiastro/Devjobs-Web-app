import Image from 'next/image';
export default function Details() {
  return (
    <div>
    <div className='relative mx-[24px] md:mx-[40px] lg:mx-auto max-w-3xl flex-col justify-center items-center '>
      {/* job card details */}
      <div className='relative bg-White w-full mx-auto flex rounded-lg  md:rounded-none md:rounded-br-lg flex-col md:flex-row items-center md:justify-between -mt-6 md:space-y-0 '>
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
          className='bg-yellow-600 px-[5px] py-[19px] relative -top-5 rounded-xl block md:hidden '
        />
        <div className='flex flex-col items-center justify-center space-y-[13px] md:space-y-0 my-[24px] md:my-0 '>
          <h1 className='font-bold text-xl text-VeryDarkBlue '>Scoot</h1>
          <h1 className='font-md text-lg text-Grey '>scoot.com</h1>
        </div>
        <div>
          <div className='md:mr-[40px] md:ml-[248px] pb-[32px] md:pb-0'>
            <button className='bg-LightGray font-semibold flex rounded-lg items-center justify-center  md:text-md mx-auto lg:text-lg text-Violet  w-[141px]   h-[48px] '>
              Company Site
            </button>
          </div>
        </div>
      </div>
      {/* job Details */}
      <div className='relative mx-auto bg-White w-full p-[43px] mt-[32px]'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between '>
          <div className='flex flex-col space-y-[8px] '>
            <ul className='flex space-x-[28px] text-Grey'>
              <li>1w ago</li>
              <li className='list-disc'> Part Time</li>
            </ul>
            <div>
              <h1 className='font-bold text-2xl  text-VeryDarkBlue'>
                Senior Software Engineer
              </h1>
            </div>
            <div>
              <h1 className='text-Violet font-semibold text-lg'>
                United Kingdom
              </h1>
            </div>
          </div>

          <div className='mt-[50px] md:mt-0'>
            {/* Button */}
            <button className='bg-Violet font-semibold items-center justify-center flex rounded-lg  md:text-md mx-auto lg:text-lg text-White  md:w-[141px] w-full h-[48px] '>
              Apply Now
            </button>
          </div>
        </div>
        {/* Job Description */}
        <div>
          <h1 className='text-DarkGrey antialiased font-md py-[40px]'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus libero,
            faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor. Sed semper lorem at felis.
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </h1>
        </div>
        {/* Requirements section */}
        <div className='flex flex-col pb-[48px]'>
          <h1 className='font-bold text-xl text-VeryDarkBlue pb-[28px]'>
            Requirements
          </h1>
          <h1 className='text-DarkGrey font-md antialiased pb-[24px]'>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
            libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
            varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
            Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
            gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
            lacinia eu, vulputate vel, nisl.
          </h1>
          <ul className='list-disc font-md text-DarkGrey antialiased space-y-[8px] list-inside marker:text-Violet marker:font-bold '>
            <li> Morbi interdum mollis sapien. Sed</li>
            <li>
              Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
              pulvinar risus
            </li>
            <li>
              Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
              tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
            </li>
            <li> Morbi interdum mollis sapien. Sed</li>
          </ul>
        </div>
        {/* What will you do */}
        <div className='flex flex-col '>
          <h1 className='font-bold text-xl text-VeryDarkBlue pb-[28px]'>
            What You Will Do
          </h1>
          <h1 className='text-DarkGrey font-md antialiased pb-[24px]'>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna.
          </h1>
          <ul className='list-decimal font-md text-DarkGrey antialiased space-y-[8px] list-inside marker:text-Violet marker:font-bold '>
            <li> Morbi interdum mollis sapien. Sed</li>
            <li>
              Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
              pulvinar risus
            </li>
            <li>
              Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
              tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
            </li>
            <li> Morbi interdum mollis sapien. Sed</li>
          </ul>
        </div>
      </div>
      
    </div>
    {/* Footer Section */}
    <div className='relative mx-auto bg-White w-full p-[43px] mt-[32px]'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between '>
          <div className='flex flex-col md:space-y-[8px] sm:hidden md:block '>
            <div>
              <h1 className='font-bold text-2xl  text-VeryDarkBlue'>
                Senior Software Engineer
              </h1>
            </div>
            <div>
              <h1 className='text-Grey font-md text-lg'>
              So Digital Inc.
              </h1>
            </div>
          </div>
          <div className=''>
            {/* Button */}
            <button className='bg-Violet font-semibold items-center justify-center flex rounded-lg  md:text-md mx-auto lg:text-lg text-White  md:w-[141px] w-full h-[48px] '>
              Apply Now
            </button>
          </div>
        </div>
        </div>
    </div>
  );
}
