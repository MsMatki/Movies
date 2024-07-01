import React, { FC } from 'react';
import styles from '@/app/styles/movie-details.module.css';
import Image from 'next/image';
import Container from '@/app/components/molecules/Container';
import DetailItem from '@/app/components/molecules/DetailItem';
import Button from '@/app/components/atoms/Button';
import { IMovieDetails } from '@/app/types/movies';

interface MovieDetailsProps {
  movie: IMovieDetails
}

const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => {
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
    release_date,
    vote_average,
    homepage
  } = movie;

  const details = [
    { heading: 'Original Release', text: release_date },
    { heading: 'Status', text: status },
    { heading: 'Running Time', text: `${runtime} min` },
    { heading: 'Vote Average', text: `${vote_average.toFixed(1)}/10` },
  ];

  return (
    <div
      className={styles.movieDetails}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
    >
      <div className={styles.overlay}>
        <Container>
          <div className={styles.movieDetailsCard}>
            <div className={styles.posterContainer}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width={600}
                height={500}
                layout='intrinsic'
              />
            </div>
            <div className={styles.infoContainer}>
              <h1>{title}</h1>
              <h3>{tagline}</h3>
              <p>{overview}</p>
              <h3>{genres.map((genre) => genre.name).join(', ')}</h3>
              <p>
                {production_companies.map((company) => company.name).join(', ')}
              </p>
              <DetailItem details={details} />
              <div className={styles.buttonGroup}>
                <Button href="/">Back To Home</Button>
                <Button href={homepage}>View More Details</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MovieDetails;
