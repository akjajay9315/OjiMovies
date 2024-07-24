import React, { useState, useEffect } from 'react';

import Image from 'next/image'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const LOADING_IMAGE_URL = "https://via.placeholder.com/150"; // Replace with your loading skeleton image URL
const MIN_LOADING_TIME_MS = 500;

function HrMovieCard({ movie }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, MIN_LOADING_TIME_MS);

    return () => clearTimeout(timer);
  }, []); // Run the effect only once when the component mounts

  return (
    
    <section className='hover:scale-105 transition-all duration-150 ease-in-out'>
      <div className={`w-[200px] md:w-[260px] max-h-[150px] rounded-lg overflow-hidden relative
        ${loading ? 'animate-pulse' : ''}`}
      >
        {loading && (
          <div className="absolute inset-0 bg-[#38406e] animate-pulse"></div>
        )}
        <Image
            key={movie.id}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            alt={movie ? movie.title : 'Loading...'}
            width={400}
            height={600}
            className={`w-full h-full object-cover cursor-pointer
              ${loading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setLoading(false)} // Mark as not loading when the image is loaded
        />
      </div>
      {loading
        ?   <div>
                <div className={`w-[200px] md:w-[260px] h-4 mt-2 animate-pulse bg-[#38406e] rounded-lg ${loading ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`w-[100px] md:w-[130px] h-4 mt-2 animate-pulse bg-[#38406e] rounded-lg ${loading ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
        :   <h2 className='w-[200px] md:w-[260px] mt-2 text-white'>
              {movie.title}
            </h2>
      }
    </section>
  );
}

export default HrMovieCard;
