import PageLayout from 'components/page';
import React from 'react';

import ConfirmContent from './confirmContent';

const ConfirmEmailPage = () => {
  return (
    <PageLayout title='Confirm email'>
      <ConfirmContent />
    </PageLayout>
  );
};

export default ConfirmEmailPage;
