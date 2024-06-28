import React, { FC } from 'react';

type MovieDetailsProps = {
  tagline: string;
  status: string;
  production_companies: string;
  genres: string;
  runtime: string;
  overview: string;
  title: string;
};

const MovieDetails: FC<MovieDetailsProps> = ({
  status,
  production_companies,
  genres,
  runtime,
  overview,
  title,
  tagline,
}) => {
  return <div>MovieDetails</div>;
};

export default MovieDetails;
