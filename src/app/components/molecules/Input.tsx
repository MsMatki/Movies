'use client';

import React, { FC, useState, useEffect, Suspense } from 'react';
import styles from '@/app/styles/molecules/input.module.css';
import { getMoviesBySearch } from '@/app/api/movies';
import { Movie } from '@/app/types/movies';
import useDebounce from '@/app/hooks/useDebounce';
import { usePathname } from 'next/navigation';
import LoadingScreen from '../atoms/LoadingScreen';
import DropdownItem from './DropdownItem';

const Input: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async (query: string) => {
      const trimmedValue = query.trim();
      if (trimmedValue.length === 0) {
        setSearchResults([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const { results } = await getMoviesBySearch(trimmedValue);
      setSearchResults(results);
      setLoading(false);
    };

    fetchData(debouncedSearchValue);
  }, [debouncedSearchValue]);

  useEffect(() => {
    setSearchValue('');
    setSearchResults([]);
  }, [pathname]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Search for movies...'
          className={styles.searchInput}
        />
        {loading && <LoadingScreen width='30px' height='30px' color='green'/>}
      </div>
      {searchResults.length > 0 && (
        <ul className={styles.dropdown}>
          {searchResults.map((movie) => (
            <DropdownItem key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
