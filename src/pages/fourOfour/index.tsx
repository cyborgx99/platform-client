import notFound from 'assets/images/404.jpg';
import PageLayout from 'components/page';
import React from 'react';

import { FourOFourContainer, NotFoundImage, NotFountHeader } from './styles';

const FourOFour = () => {
  return (
    <PageLayout title='Not found'>
      <FourOFourContainer>
        <NotFoundImage src={notFound} />
        <NotFountHeader>Page not found</NotFountHeader>
      </FourOFourContainer>
    </PageLayout>
  );
};

export default FourOFour;
