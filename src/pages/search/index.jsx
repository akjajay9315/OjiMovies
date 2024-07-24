"use client"

import React, {useState,useEffect} from 'react'
import axios from 'axios'

import Navbar from "../../components/Header/Navbar.jsx"
import SearchBar from '../../components/containers/SearchBar.jsx';
import Card from '../../components/Cards/Card'
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "../../components/Footer/Footer.jsx"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

var currentPage = 1;

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const onLoadMore=()=>{
        currentPage = currentPage + 1;
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+API_KEY+'&page='+currentPage+'&include_adult=false')
          .then(resp => {
            setMovies((movies) => [...movies, ...resp.data.results]);
            // setMovies([...movies, ...resp.data.results]);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    }

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+API_KEY+'&page='+currentPage+'&include_adult=false')
          .then(resp => {
            setMovies(resp.data.results);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []);
    return (
        <div className="w-full min-h-screen scrollbar-hide">
            <Navbar />
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setSearchResults={setSearchResults}
            />
            <div className="z-3 mx-auto max-w-2xl px-6 py-6 sm:py-16 sm:mt-40 md:px-2 lg:py-0 lg:max-w-7xl lg:px-8">
                {!searchTerm ? (
                    <InfiniteScroll
                        dataLength={movies?.length}
                        next={onLoadMore}
                        hasMore={true}
                        scrollThreshold="500px"
                    >
                        <div className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            <Card cardData={movies} />
                        </div>
                    </InfiniteScroll>
                    ) : (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <Card cardData={searchResults} />
                    </div>
                )}
            </div>
            
            <Footer />
        </div>
  )
}

export default Search