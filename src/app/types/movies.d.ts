export type MovieResponseType = {
  results: Movie[];
};

type ProductionCompanies = {
  name: string;
};

type Genres = {
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};

export interface IMovieDetails extends Movie {
  status: string;
  overview: string;
  production_companies: ProductionCompanies[];
  genres: Genres[];
  runtime: number;
  overview: string;
  backdrop_path: string;
  tagline: string;
  release_date: string;
  homepage: string;
}
