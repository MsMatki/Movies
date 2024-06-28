import { getMovieById } from '@/app/api/movies';
import React, { FC } from 'react';
import styles from '@/app/styles/movie-details-page.module.css';
import Image from 'next/image';
import Container from '@/app/components/molecules/Container';

interface MovieDetailsProps {
  params: {
    movie: string;
  };
}

const MovieDetailsPage: FC<MovieDetailsProps> = async ({ params }) => {
  const {
    status,
    production_companies,
    genres,
    runtime,
    overview,
    title,
    backdrop_path,
    poster_path,
    tagline,
  } = await getMovieById(params.movie);

  console.log(params.movie);

  return (
    <div
      className={styles.movieDetails}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
    >
      <Container>
        <div className={styles.movieDetailsCard}>
          <div className={styles.posterContainer}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width={600}
              height={500}
              objectFit='contain'
              layout='intrinsic'
            />
          </div>
          <div className={styles.infoContainer}>
            <h1>{title}</h1>
            <h3>{tagline}</h3>
            <p>{overview}</p>

            <h3>{genres.map((genre) => genre.name).join(', ')}</h3>
            <p>{production_companies.map((company) => company.name).join(', ')}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MovieDetailsPage;
