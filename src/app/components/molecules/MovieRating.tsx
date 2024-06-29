import React, { FC } from 'react';
import StarIcon from '../atoms/StarIcon';
import styles from '@/app/styles/molecules/movie-rating.module.css'

interface MovieRatingProps {
  rating: number;
}

const MovieRating: FC<MovieRatingProps> = ({ rating }) => (
  <div className={styles.movieRating}>
    <StarIcon height='18' width='18'/>
    <span className={styles.rating}>{rating.toFixed(1)}</span>
  </div>
);

export default MovieRating;