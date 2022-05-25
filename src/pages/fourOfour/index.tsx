import PageLayout from 'components/page';
import React from 'react';

import {
  FourOFourContainer,
  NotFountCodeHeader,
  NotFountHeader,
} from './styles';

const FourOFour = () => {
  return (
    <PageLayout title='Not found'>
      <FourOFourContainer>
        <NotFountCodeHeader>404</NotFountCodeHeader>
        <NotFountHeader>Page not found</NotFountHeader>
      </FourOFourContainer>
    </PageLayout>
  );
};

export default FourOFour;
