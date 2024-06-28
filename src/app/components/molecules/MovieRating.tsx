import React, { FC } from 'react';
import StarIcon from '../atoms/StarIcon';
import styles from '@/app/styles/molecules/movie-rating.module.css'

interface MovieRatingProps {
  rating: number;
}

const MovieRating: FC<MovieRatingProps> = ({ rating }) => (
  <div className={styles.movieRating}>
    <StarIcon height='20' width='20'/>
    <span>{rating}</span>
  </div>
);

export default MovieRating;