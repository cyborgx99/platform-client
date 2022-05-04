import React from 'react';

import {
  SkeletonContainer,
  SkeletonContent,
  SkeletonDescription,
  SkeletonImage,
  SkeletonTitle,
} from './styles';

const SkeletonComponent = () => {
  return (
    <SkeletonContainer>
      <SkeletonImage />
      <SkeletonContent>
        <SkeletonTitle />
        <SkeletonDescription />
      </SkeletonContent>
    </SkeletonContainer>
  );
};

export default SkeletonComponent;
