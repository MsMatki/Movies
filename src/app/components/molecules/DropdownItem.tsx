import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/styles/molecules/dropdown-item.module.css';
import { Movie } from '@/app/types/movies';

interface DropdownItemProps {
  movie: Movie;
}

const DropdownItem: FC<DropdownItemProps> = ({ movie }) => {
  const { id, poster_path, title } = movie;

  return (
    <li className={styles.dropdownItem}>
      <Link href={`/movies/${id}`}>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
            width={40}
            height={60}
            objectFit='cover'
          />
        ) : (
          <div
            style={{
              width: 40,
              height: 60,
              backgroundColor: '#ccc',
              marginRight: 10,
            }}
          />
        )}
        <h4>{title}</h4>
      </Link>
    </li>
  );
};

export default DropdownItem;
