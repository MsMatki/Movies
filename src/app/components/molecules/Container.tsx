import React, { FC, PropsWithChildren } from 'react';
import styles from '@/app/styles/molecules/container.module.css';

interface ContainerProps extends PropsWithChildren {}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;