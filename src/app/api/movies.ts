import { MovieDetails, MovieResponseType } from '../types/movies';

const API_KEY = 'a9632aa4c0a084cd40a2f5f911739ec0';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFromAPI = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);

    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getPopularMovies = async (): Promise<MovieResponseType> => {
  const data: MovieResponseType = await fetchFromAPI('/movie/popular');
  return data;
};

export const getMovieById = async (id: string): Promise<MovieDetails> => {
    console.log(id)
  const data: MovieDetails = await fetchFromAPI(`/movie/${id}`);
  return data;
};
