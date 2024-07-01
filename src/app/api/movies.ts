import { IMovieDetails, MovieResponseType } from '../types/movies';

const API_KEY = 'a9632aa4c0a084cd40a2f5f911739ec0';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFromAPI = async <T>(
  endpoint: string,
  query?: string
): Promise<T> => {
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}?api_key=${API_KEY}&query=${query}`
    );

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
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data: MovieResponseType = await fetchFromAPI('/movie/popular');
  return data;
};

export const getMovieById = async (id: string): Promise<IMovieDetails> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data: IMovieDetails = await fetchFromAPI(`/movie/${id}`);
  return data;
};

export const getMoviesBySearch = async (
  query: string
): Promise<MovieResponseType> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data: MovieResponseType = await fetchFromAPI(`/search/movie`, query);
  // throw new Error()
  return data;
};
