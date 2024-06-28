import { FC } from 'react';

type StarIconProps = {
  width: string;
  height: string;
};

const StarIcon: FC<StarIconProps> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='orange'
    stroke='orange'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-star'
  >
    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
  </svg>
);

export default StarIcon;
