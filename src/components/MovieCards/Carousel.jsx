import React from 'react'

const Carousel = ({ heading, data, movieIdCast }) => {
    return (
        <div className="mb-12 mt-5 sm:mt-8">
            <h1 className="text-center text-cyan-500 text-3xl font-bold">
                {heading}
            </h1>
            <div
                id="scroll-bar"
                className="mx-auto my-5 flex flex-row overflow-x-scroll scrollbar-none scroll-smooth  carousel-center max-w-7xl p-4 space-x-5 rounded-box"
            >
                {/* Carousel Cards */}
                {data?.map((item) => (
                <a
                    key={item?.id}
                    href={
                    movieIdCast
                        ? `https://www.google.com/search?q=${item?.name}`
                        : `/movie/${item?.id}`
                    }
                    className="rounded-xl hover:shadow-sky-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out carousel-item flex flex-col items-center"
                >
                    {/* Requested Image with Fallback Path */}
                    {item?.profile_path || item?.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200/${
                        item?.profile_path || item?.poster_path
                        }`}
                        alt={item?.name || item?.title}
                        className="rounded-box object-cover object-center min-w-[200px] h-[300px] p-4"
                        width={200}
                        height={300}
                    />
                    ) : (
                    <img
                        src={`https://placeholder.pics/svg/500x750/E0F9FF/000000-E0F9FF/${
                        item?.name || item?.title
                        }`}
                        alt={item?.name || item?.title}
                        className="rounded-box object-cover object-center h-[300px]"
                        width={200}
                        height={300}
                    />
                    )}
                    {/* Requested Data */}
                    <h1 className="mt-2 max-w-[200px] text-center text-lg text-[#D9D9D9] font-bold">
                        {item?.name || item?.title}
                    </h1>
                    {item?.character && (
                        <p className="mt-2 text-amber-400 text-center max-w-[200px] text-md">
                            {item?.character}
                        </p>
                    )}
                </a>
                ))}
            </div>
        </div>
    )
}

export default Carousel