import { FC, Suspense } from 'react';
import classes from '@/app/styles/movies-list.module.css';
import Card from './organisms/Card';
import { getPopularMovies } from '../api/movies';
import LoadingScreen from './atoms/LoadingScreen';

const Movies: FC = async () => {
  const { results } = await getPopularMovies();
  return (
    <>
      {results.map((movie) => {
        return <Card movie={movie} key={movie.id} />;
      })}
    </>
  );
};

const MoviesList: FC = async () => {
  return (
    <div className={classes.moviesList}>
      <Suspense fallback={<LoadingScreen />}>
        <Movies />
      </Suspense>
    </div>
  );
};

export default MoviesList;
