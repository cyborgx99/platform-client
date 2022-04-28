import React from 'react';

import SkeletonComponent from './skeletonComponent';
import { ISkeletonLoaderProps } from './types';

const SkeletonLoading = ({ numberOfLoaders = 1 }: ISkeletonLoaderProps) => {
  const arrayFromLoaderNumber = Array.from(
    { length: numberOfLoaders },
    (_, i) => i + 1
  );

  return (
    <>
      {arrayFromLoaderNumber.map((loader) => (
        <SkeletonComponent key={loader} />
      ))}
    </>
  );
};

export default SkeletonLoading;
