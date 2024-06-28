import { FC } from 'react';
import classes from '@/app/styles/movies-list.module.css';
import Card from './organisms/Card';
import { getPopularMovies } from '../api/movies';

const MoviesList: FC = async () => {
  const { results } = await getPopularMovies();
  return (
    <>
      <div className={classes.moviesList}>
        {results.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
};

export default MoviesList;
