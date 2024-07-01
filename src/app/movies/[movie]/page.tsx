import { getMovieById } from '@/app/api/movies';
import React, { FC, Suspense } from 'react';
import LoadingScreen from '@/app/components/atoms/LoadingScreen';
import MovieDetails from '@/app/components/organisms/MovieDetails';
import { notFound } from 'next/navigation';

interface MovieDetailsProps {
  params: {
    movie: string;
  };
}

const MovieDetailsPage: FC<MovieDetailsProps> = async ({ params }) => {
  const movie = await getMovieById(params.movie);

  if (!movie) {
    notFound();
  }

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsPage;
