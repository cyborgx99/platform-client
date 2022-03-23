import PageLayout from 'components/page';
import React from 'react';

import LoginForm from './loginForm';

const LoginPage = () => {
  return (
    <PageLayout title='Login'>
      <LoginForm />
    </PageLayout>
  );
};

export default LoginPage;
