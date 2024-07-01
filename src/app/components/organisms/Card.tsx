import React, { FC } from 'react';
import classes from '@/app/styles/organisms/card.module.css';
import CardTitle from '../molecules/CardTitle';
import MovieRating from '../molecules/MovieRating';
import Image from 'next/image';
import { Movie } from '@/app/types/movies';
import Link from 'next/link';

interface CardProps {
  movie: Movie;
}

const Card: FC<CardProps> = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className={classes.card}>
        <MovieRating rating={movie.vote_average} />
        <div className={classes.imageContainer}>
          <Image
            fill
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt='Movie Poster'
            className={classes.image}
          ></Image>
        </div>
        <CardTitle title={movie.title} />
      </div>
    </Link>
  );
};

export default Card;
