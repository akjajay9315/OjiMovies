import primeVideo from '../../assets/Images/primeVideo.webp'
import netflix from '../../assets/Images/netflix.jpg'
import disney from '../../assets/Images/disneyPlusHotstar.jpeg'
import sonyLiv from '../../assets/Images/sonyLiv.jpg'
import zee5 from '../../assets/Images/zee5.jpeg'
import jioCinema from '../../assets/Images/jioCinema.jpeg'

import Image from 'next/image'

function OTT_House() {

    const OTT_List=[
        {
            id:1,
            image:primeVideo
        },
        {
            id:2,
            image:netflix
        },
        {
            id:3,
            image:disney
        },
        {
            id:4,
            image:sonyLiv
        },
        {
            id:5,
            image:zee5
        },
        {
            id:6,
            image:jioCinema
        },
    ]

    return (
        <div className='p-2 xl:mt-[-150px] px-5 lg:px-16'>
            <h2 className='text-[20px] mb-[10px] sm:text-[25px] text-white font-bold pl-4 sm:pl-5 z-10'>
                OTT Platforms
            </h2>
            <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 md:gap-5'>
                {OTT_List.map((item,index)=>(
                    <div key={index} className='hover:scale-110 transition-all duration-300
                        ease-in-out cursor-pointer relative shadow-xl xl:shadow-none
                        shadow-gray-800
                    '>
                        <Image
                            src={item.image}
                            alt="Picture of your mum"
                            width={9001}
                            height={500}
                            className='object-fill w-full h-full rounded-lg z-[1] opacity-100'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OTT_House