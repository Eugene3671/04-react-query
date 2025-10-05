import axios from "axios";
import type { Movie } from "../types/movie";

const myKey: string = import.meta.env.VITE_API_KEY;

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export default async function fetchMovies(query: string, page: number): Promise<MovieResponse> {
    const url = 'https://api.themoviedb.org/3/search/movie';

    const options = {
        params:{
        query: query,
          page:page
        },
       headers:{
        Authorization: `Bearer ${myKey}`
       }
       
    }
    const res = await axios.get<MovieResponse>(url, options);
    return res.data;
    }
    
    