import React, { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { ImInfo } from 'react-icons/im';
import { FaPlay } from 'react-icons/fa';

const Carousel = ({children: slides,titles,years,languages}) => {
    const [curr, setCurr] = useState(0);

    function prev(){
        setCurr((curr) => (
            // curr === 0 ? slides.length - 1 : curr - 1
            curr === 0 ? 19 : curr - 1
        ))
    }

    function next(){
        setCurr((curr) => (
            // curr === slides.length-1 ? 0 : curr+1
            curr === 19 ? 0 : curr+1
        ))
    } 

    useEffect(() => {
        const slideInterval = setInterval(next, 5000);
        return () => clearInterval(slideInterval)
    }, [])

    const handleRedirect = () => {
        if (titles[curr]) {
          const encodedTitle = encodeURIComponent(titles[curr] + " official trailer");
          const searchUrl = `https://www.google.com/search?q=${encodedTitle}`;
          window.open(searchUrl, '_blank');
        }
      };

    return (
        <div className="object-fill overflow-hidden scroll-smooth relative mb-4">

            {/* Slides */}

            <div 
                className="flex transition-transform ease-out duration-500"
                style={{transform: `translateX(-${curr*100}%)`}}
            >
                {slides}
            </div>

            {/* Shadow */}

            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#131520] to-transparent">

            </div>
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#131520] to-[transparent]">

            </div>

            {/* Details */}

            <div className='absolute left-12 md:left-[100px] bottom-[30px] md:bottom-[50px] xl:bottom-[130px]'>
                <div className='flex flex-row mb-2 lg:mb-4'>
                    {titles[curr] !== undefined && (
                    <div className="">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl">{titles[curr]}</h2>
                    </div>
                    )}
                </div>
                <div className='flex flex-row items-center mb-2 lg:mb-4'>
                    {years[curr] !== undefined && (
                        <>
                            <div className="">
                                <h2 className="text-xl">{years[curr]}</h2>
                            </div>
                            <div className=" transition-all w-1.5 h-1.5 mx-3 bg-white rounded-full">
                            </div>
                        </>
                    )}

                    {languages[curr] !== undefined && (
                    <div className="">
                        <h2 className="text-md md:text-lg lg:text-xl">
                            {   languages[curr] === 'en' ? 'English'
                                    :
                                languages[curr] === 'ja' ? 'Japanise'
                                    :
                                languages[curr] === 'fr' ? 'French'
                                    :
                                languages[curr] === 'hi' ? 'Hindi'
                                    :
                                languages[curr]}
                        </h2>
                    </div>
                    )}
                </div>
                <div className='flex gap-2 md:gap-3'>
                    <button
                        className='border-0 w-[70px] md:w-[100px] text-xl px-2 md:px-4 py-1 md:py-2 font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600'
                        onClick={handleRedirect}
                    >
                        <div className='flex flex-row text-[15px] md:text-xl items-center gap-2'>
                            <FaPlay className='text-sm md:text-lg'/>
                            Play
                        </div>
                    </button>
                    <button
                        className='border-0 w-[70px] md:w-[100px] text-xl px-2 md:px-4 py-1 md:py-2 font-bold rounded-lg bg-white bg-opacity-30'
                    >
                        <div className='flex flex-row text-[15px] md:text-xl items-center gap-2'>
                            <ImInfo />
                            Info
                        </div>
                    </button>
                </div>
            </div>

            {/* bottom bar */}
            
            <div className='absolute bottom-3 md:bottom-5 xl:bottom-[140px] right-0 left-0 z-10'>
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                    {
                        slides.map((el, i) => (
                            <div
                                key={i}
                                className={`
                                transition-all w-2 md:w-4 h-1 md:h-1.5 bg-white rounded-sm
                                ${curr === i ? "w-5 md:w-8" : "opacity-50"}
                                `}
                            />
                        ))
                    }
                </div>
            </div>

            {/* left right button */}
            
            <div className="absolute bottom-[30px] md:bottom-[50px] xl:bottom-[120px] right-12 md:right-[100px] xl:right-[150px] flex items-center gap-2 md:gap-3 xl:gap-4">
                <button 
                    onClick={prev}
                    className='bg-white bg-opacity-20 w-[36px] h-[36px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] text-white hover:scale-105 transition-all duration-150 ease-in cursor-pointer border-0 p-0 rounded-md'
                >
                    <HiChevronLeft
                        className=" text-white text-[25px] xl:text-[30px] font-bold mx-auto"
                    />
                </button>

                <button
                    onClick={next}
                    className='bg-white bg-opacity-20 w-[36px] h-[36px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] text-white hover:scale-105 transition-all duration-150 ease-in cursor-pointer border-0 p-0 rounded-md' 
                >
                    <HiChevronRight
                        className=" text-white text-[25px] xl:text-[30px] font-bold mx-auto"
                    />
                </button>

            </div> 

        </div>
    )
}

export default Carousel