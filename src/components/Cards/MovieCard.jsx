import React, { useState, useEffect } from 'react';

import Image from 'next/image'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const LOADING_IMAGE_URL = "https://via.placeholder.com/150"; // Replace with your loading skeleton image URL
const MIN_LOADING_TIME_MS = 500;

function MovieCard({ movie }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, MIN_LOADING_TIME_MS);

    return () => clearTimeout(timer);
  }, []); // Run the effect only once when the component mounts

  return (
    <>
      <div className={`min-w-[150px] md:min-w-[200px] rounded-lg relative
        ${loading ? 'animate-pulse' : ''}`}>
        {loading && (
          <div className="absolute inset-0 bg-[#38406e] animate-pulse"></div>
        )}
        {/* <img
          src={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : LOADING_IMAGE_URL}
          alt={movie ? movie.title : 'Loading...'}
          className={`w-full h-full object-cover cursor-pointer rounded-lg
            ${loading ? 'opacity-0' : 'opacity-100'}
            hover:scale-105 transition-all duration-150 ease-in-out`}
          onLoad={() => setLoading(false)} // Mark as not loading when the image is loaded
        /> */}
        <Image
            key={movie.id}
            src={IMAGE_BASE_URL + movie.poster_path}
            alt={movie ? movie.title : 'Loading...'}
            width={400}
            height={600}
            className={`w-full h-full object-cover cursor-pointer rounded-lg
              ${loading ? 'opacity-0' : 'opacity-100'}
              hover:scale-105 transition-all duration-150 ease-in-out`}
            onLoad={() => setLoading(false)} // Mark as not loading when the image is loaded
        />
      </div>
    </>
  );
}

export default MovieCard;
