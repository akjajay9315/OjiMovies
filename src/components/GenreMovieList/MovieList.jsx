"use client"
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import MovieCard from '../Cards/MovieCard.jsx';
import HrMovieCard from '../Cards/HrMovieCard.jsx';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function MovieList({genreId,index_}) {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+API_KEY+'&with_genres='+genreId)
          .then(resp => {
            setMovieList(resp.data.results)
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    }, []);

    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }

  return (
    <div className='relative'>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
            className={`text-[50px] text-white
            p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==1?'mt-[70px]':'mt-[140px]'} `}/>
   
        <div ref={elementRef} className='flex overflow-x-auto gap-8 scroll-smooth pt-4 px-3 pb-4'>
            {movieList.map((item)=>(
            <Link key={item?.id} href={`/movies/${item?.id}`}>
                {index_%3==1?<HrMovieCard key={item.id} movie={item}/>:<MovieCard key={item.id}  movie={item} />}
            </Link> 
            ))}
        </div>
        
        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
            className={`text-[50px] text-white hidden md:block
            p-2 cursor-pointer z-10 top-0 absolute right-0 
            ${index_%3==1?'mt-[70px]':'mt-[140px]'}`}/> 
    </div>
  )
}

export default MovieList