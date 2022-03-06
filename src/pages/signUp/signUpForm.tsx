import { useMutation } from '@apollo/client';
import FormInput from 'components/input';
import { Formik } from 'formik';
import React from 'react';

import { SIGN_UP } from './mutation';
import { StyledForm } from './styles';

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

type values = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: (d) => {
      console.log(d);
    },
  });

  const handleSubmit = (values: values) => {
    signUp({
      variables: {
        input: { ...values, confirmPassword: undefined },
      },
    });
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <StyledForm>
        <FormInput label='Name' name='name' type='text' />
        <FormInput label='Last name' name='lastName' type='text' />
        <FormInput label='Email' name='email' type='email' />
        <FormInput label='Password' name='password' type='password' />
        <FormInput
          label='Confirm password'
          name='confirmPassword'
          type='password'
        />
        <button type='submit'>Submit</button>
      </StyledForm>
    </Formik>
  );
};

export default SignUpForm;
