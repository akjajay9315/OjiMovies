import React,{ useState, useEffect } from 'react'
import axios from 'axios'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import Carousel from '../MovieCards/Carousel'


const Directors = ({ directorIds, directors }) => {
    const [data,setData] = useState([]);
    const [moreFrom, setMoreFrom] = useState(null);

    //Fetch movies of all directors
    const fetchDirectorMovies = async () => {
        const moviesFetched = await Promise.all(
            directorIds?.map(async (id) => {

                axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+API_KEY+'&with_crew='+id+'&sort_by=popularity.desc&include_adult=false')
                .then(resp => {
                    setData(resp.data.results);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
                return { directorId: id, movies: data };
            })
        );
        setMoreFrom(moviesFetched);
    };
    //Render data on change in director ids
    useEffect(() => {
        fetchDirectorMovies();
    }, [directorIds]);

    return (
        <div>
            {moreFrom?.map((director) => (
                <Carousel
                    key={director?.directorId}
                    heading={`More from ${directors[director?.directorId]}`}
                    data={director?.movies}
                />
            ))}
        </div>
    )
}

export default Directors