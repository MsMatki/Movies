import React, { FC } from 'react';
import styles from '@/app/styles/molecules/detail-item.module.css';

interface DetailItemProps {
  details: { heading: string; text: string }[];
}

const DetailItem: FC<DetailItemProps> = ({ details }) => {
  return (
    <div className={styles.details}>
      {details.map((detail, index) => (
        <div key={index} className={styles.detailItem}>
          <h4>{detail.heading}</h4>
          <p>{detail.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailItem;
