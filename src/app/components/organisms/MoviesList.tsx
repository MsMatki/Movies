import { FC, Suspense } from 'react';
import classes from '@/app/styles/movies-list.module.css';
import Card from './Card';
import { getPopularMovies } from '../../api/movies';
import LoadingScreen from '../atoms/LoadingScreen';
import Container from '../molecules/Container';

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
    <Container>
      <div className={classes.moviesList}>
        <Suspense fallback={<LoadingScreen height="70px" width="70px" color="lightblue" position="absolute"/>}>
          <Movies />
        </Suspense>
      </div>
    </Container>
  );
};

export default MoviesList;
