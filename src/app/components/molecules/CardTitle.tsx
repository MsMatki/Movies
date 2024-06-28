import { FC } from 'react';
import styles from '@/app/styles/molecules/card-title.module.css'

interface CardTitleProps {
  title: string;
}

const CardTitle: FC<CardTitleProps> = ({ title }) => (
  <div className={styles.cardTitle}>
    <h6>{title}</h6>
  </div>
);

export default CardTitle;