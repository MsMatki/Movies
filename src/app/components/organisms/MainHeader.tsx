import { FC } from 'react';
import classes from '@/app/styles/organisms/main-header.module.css';
import Input from '../molecules/Input';
import Container from '../molecules/Container';
import Link from 'next/link';

const MainHeader: FC = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes['header-container']}>
          <div className={classes['main-heading']}>
            <Link href="/">
            <h1>
              Cool<span>Movies</span>
            </h1>
            </Link>
          </div>
          <Input />
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
