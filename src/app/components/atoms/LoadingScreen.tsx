import { FC } from 'react';
import styles from '@/app/styles/atoms/loading-screen.module.css';

interface LoadingScreenProps {
  width?: string;
  height?: string;
  color?: string;
  position?: 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static';
}

const LoadingScreen: FC<LoadingScreenProps> = ({
  width = '12px',
  height = '12px',
  color = '#3498db',
  position = 'static',
}) => {
  return (
    <div
      className={styles.spinner}
      style={{ width, height, position, borderTopColor: color }}
    ></div>
  );
};

export default LoadingScreen;
