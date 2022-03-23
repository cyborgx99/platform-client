import PageLayout from 'components/page';
import React from 'react';

import SignUpForm from './signUpForm';

const SignUpPage = () => {
  return (
    <PageLayout title='Sign up'>
      <SignUpForm />
    </PageLayout>
  );
};

export default SignUpPage;
