import React from 'react'
import { FaRegStar } from "react-icons/fa";

import Image from 'next/image'
import Link from 'next/link'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500";

const Card = ({ cardData }) => {

    return (
        <>
            {cardData.map((movie) => (
                <Link key={movie?.id} href={`/movies/${movie?.id}`}>
                    <div className="w-full h-full group z-6">
                        <div className="w-full h-full max-h-[35rem] flex flex-col justify-end mx-auto overflow-hidden">
                            {/* Movie Poster with Fallback Image */}
                            {movie.poster_path ? (
                                <Image
                                    key={movie.id}
                                    src={IMAGE_BASE_URL+movie.poster_path}
                                    alt={movie.title}
                                    width={400}
                                    height={600}
                                    className="rounded-lg h-full object-cover object-center group-hover:opacity-75"
                                    style={{ margin: "auto" }}
                                />
                            ) : (
                                <div className='w-full min-h-[200px] h-full flex items-center justify-center rounded-lg bg-slate-800 animate-pulse'>
                                    <div className='-rotate-45 text-5xl'>
                                        {movie.title}
                                    </div>
                                </div>
                            )}
                            {/* Movie Details */}
                            <h3 className="w-full mt-3 text-md text-white h-[30px] overflow-hidden">{movie?.title}</h3>
                            <div className="w-full flex flex-row items-center justify-between">
                                <p className="mt-1 text-md font-medium text-white">
                                    {parseInt(movie?.release_date)}
                                </p>
                                <p className="flex flex-row items-center justify-between mt-1 text-md font-medium text-white">
                                    <FaRegStar className="mr-2"
                                        width={20}
                                        height={20}
                                        style={{ color: "#dddd0e" }}
                                    />
                                    {movie?.vote_average?.toFixed(1)}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default Card