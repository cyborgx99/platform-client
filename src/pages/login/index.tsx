import FormInput from 'components/input';
import PageLayout from 'components/page';
import { Formik } from 'formik';
import React from 'react';

const LoginPage = () => {
  return (
    <PageLayout>
      <div>Login3Page</div>
      <Formik
        onSubmit={() => {
          console.log(123);
        }}
        initialValues={{ email: '' }}>
        <FormInput type='date' label='Hello' name='email' />
      </Formik>
    </PageLayout>
  );
};

export default LoginPage;
