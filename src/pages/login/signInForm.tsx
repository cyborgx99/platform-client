import { useMutation } from '@apollo/client';
import { SIGN_IN } from 'apollo/graphql';
import ButtonComponent from 'components/button';
import FormInput from 'components/input';
import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

import { StyledForm } from './styles';
import { ISignInFormValues } from './types';

const initialValues = {
  email: '',
  password: '',
};

const signInValidationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .max(32)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/g,
      'Password must have at least 6 characters, one letter, and one number.'
    ),
});

const SignInForm = () => {
  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: (d) => {
      console.log(d);
    },
  });

  const handleSignIn = async (values: ISignInFormValues) => {
    signIn({
      variables: {
        input: values,
      },
    });
  };

  return (
    <Formik<ISignInFormValues>
      onSubmit={handleSignIn}
      initialValues={initialValues}
      validationSchema={signInValidationSchema}>
      <StyledForm>
        <FormInput label='Email' name='email' type='email' />
        <FormInput label='Password' name='password' type='password' />

        <ButtonComponent isLoading={loading} type='submit' variant='primary'>
          Sign in
        </ButtonComponent>

        <div>{error?.message}</div>
      </StyledForm>
    </Formik>
  );
};

export default SignInForm;
