import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/atoms/button.module.css';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ href, children }) => {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
};

export default Button;