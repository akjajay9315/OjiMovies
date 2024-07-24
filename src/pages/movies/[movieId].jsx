import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";

import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

import Details from '../../components/MovieCards/Details'
import Carousel from '../../components/MovieCards/Carousel'
import Directors from '../../components/containers/Directors'

const Movie = () => {
    const [movie, setMovie] = useState();
    const [credits, setCredits] = useState();
    const [similarMovies, setSimilarMovies] = useState();
    const [directors, setDirectors] = useState({});

    const router = useRouter();
    const movieID = router.query.movieId;
    // Fetch movie data and cast
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/'+movieID+'?api_key='+API_KEY+'&include_adult=false')
        .then(resp => {
            setMovie(resp.data);
        })
        .catch(error => {
            console.error("Error fetching movie:", error);
        });

        axios.get('https://api.themoviedb.org/3/movie/'+movieID+'/credits?api_key='+API_KEY)
        .then(resp => {
            setCredits(resp.data);
        })
        .catch(error => {
            console.error("Error fetching similarMovies:", error);
        });

        axios.get('https://api.themoviedb.org/3/movie/'+movieID+'/similar?api_key='+API_KEY+'&include_adult=false')
        .then(resp => {
            setSimilarMovies(resp.data.results);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    }, [movieID]);

    // Create an object with director ids as keys and director names as values
    useEffect(() => {
        if (credits?.crew) {
          const directorMap = {};
          credits.crew.map((crewMember) => {
            if (crewMember.job === 'Director') {
              directorMap[crewMember.id] = crewMember.name;
            }
          });
          setDirectors(directorMap);
        }
      }, [credits]);
    
    // Extract director ids and director names from directors object
    const directorList = Object.entries(directors).map(([key, value]) => value);
    const directorIds = Object.entries(directors).map(([key, value]) => key);
  return (
    <div className='mt-16'>
            {/* Movie Details */}
            <Details movie={movie} directorList={directorList} />
            {/* Movie Cast */}
            <Carousel heading={"Cast"} data={credits?.cast} movieIDCast={movieID} />
            {/* Similar Movies */}
            <Carousel heading={"Similar Movies"} data={similarMovies} />
            {/* More Movies from the Directors */}
            <Directors directorIds={directorIds} directors={directors} />
        </div>
  )
}

export default Movie;