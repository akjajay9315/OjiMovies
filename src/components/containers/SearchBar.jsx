import React,{useEffect} from 'react'
import axios from 'axios'

import { FaSearch } from "react-icons/fa";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const SearchBar = ({searchTerm,setSearchTerm,setSearchResults}) => {


    const getSearchResults=()=>{
        if(searchTerm){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+searchTerm+'&sort_by=popularity.desc&include_adult=false')
            .then(resp => {
                setSearchResults(resp.data.results);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
        }
        else{
            setSearchResults([]);
        }
    }
    //Re-render on change in search term
    useEffect(() => {
        getSearchResults();
    }, [searchTerm]);
    
    return (
        <div className="fixed top-6 sm:top-16 left-[50%] -translate-x-[50%] z-1 px-5 sm:pt-3 w-full max-w-lg mx-auto ">
            <div className="relative flex z-1 items-center w-full h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center ml-2 h-full w-12 text-gray-900">
                    <FaSearch width={24} height={24} />
                </div>
                <input
                    className="h-full w-full outline-none text-sm placeholder-gray-900 text-gray-900 bg-white pr-2"
                    type="text"
                    placeholder="Search Movies.."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchBar

