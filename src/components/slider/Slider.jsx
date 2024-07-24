"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Carousel from './Carousel.jsx'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
import Image from 'next/image'

const Slider = () => {
    const [movieList,setMovieList]=useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=" + API_KEY)
          .then(resp => {
            setMovieList(resp.data.results)
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []);

    return (
        <div className="w-full max-h-[850px] flex flex-center">
            <Carousel
                titles={movieList.map((item) => item.title || item.name)}
                years={movieList.map((item) => item.release_date && item.release_date.slice(0, 4) || item.first_air_date && item.first_air_date.slice(0, 4))}
                languages={movieList.map((item) => item.original_language)}
            >
            {
                movieList.map((item,index)=>(
                    <Image
                        key={index}
                        src={IMAGE_BASE_URL+item.backdrop_path} 
                        alt={item.title}
                        width={900}
                        height={500}
                        className="min-w-full object-cover object-left-top"
                    />
                ))
            }
            </Carousel>
        </div>
    )
}

export default Slider