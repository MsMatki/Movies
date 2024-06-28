import { getMovieById } from '@/app/api/movies';
import React, { FC } from 'react';
import styles from '@/app/styles/movie-details-page.module.css';
import Image from 'next/image';
import Container from '@/app/components/molecules/Container';
import DetailItem from '@/app/components/molecules/DetailItem';
import Button from '@/app/components/atoms/Button';

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
    release_date,
    vote_average,
    homepage
  } = await getMovieById(params.movie);

  console.log(params.movie);

  const details = [
    { heading: 'Original Release', text: release_date },
    { heading: 'Status', text: status },
    { heading: 'Running Time', text: `${runtime} min` },
    { heading: 'Vote Average', text: `${vote_average}/10` },
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
              objectFit='contain'
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
              <Button href="/">Movies</Button>
              <Button href={homepage}>View More Details</Button>
            </div>
          </div>
        </div>
      </Container>
      </div>
      
    </div>
  );
};

export default MovieDetailsPage;
