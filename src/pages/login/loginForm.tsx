import { useMutation } from '@apollo/client';
import { handleApolloError } from 'apollo/errorHandling';
import { SIGN_IN } from 'apollo/graphql';
import {
  Mutation,
  SignInMutationVariables,
} from 'apollo/graphql/generated.types';
import { useAuth } from 'auth';
import ButtonComponent from 'components/button';
import FormInput from 'components/input';
import TextSpan from 'components/span';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { StyledForm, StyledLink, StyledParagraph } from './styles';
import { ISignInFormValues } from './types';

const initialValues: ISignInFormValues = {
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
      /^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]{6,}/,
      'Password must have at least 6 characters, one letter, and one number.'
    ),
});

const SignInForm = () => {
  const { t } = useTranslation();
  const { refetch } = useAuth();
  const [signIn, { loading, error }] = useMutation<
    Pick<Mutation, 'signIn'>,
    SignInMutationVariables
  >(SIGN_IN, {
    onError: (err) => {
      console.log('ERR', err.networkError?.message);
    },
  });

  const handleSignIn = async (values: ISignInFormValues) => {
    const { data } = await signIn({
      variables: {
        input: values,
      },
    });
    if (data?.signIn.success) {
      refetch();
    }
  };

  return (
    <Formik<ISignInFormValues>
      onSubmit={handleSignIn}
      initialValues={initialValues}
      validationSchema={signInValidationSchema}>
      <StyledForm>
        <FormInput label={t('pages.auth.email')} name='email' type='email' />
        <FormInput
          label={t('pages.auth.password')}
          name='password'
          type='password'
        />
        <ButtonComponent isLoading={loading} type='submit' variant='primary'>
          {t('pages.auth.signInButton')}
        </ButtonComponent>
        <TextSpan textType='lightText' textColor='error'>
          {error ? handleApolloError(error) : ''}
        </TextSpan>
        <StyledParagraph>
          Do not have an account? <StyledLink to='/sign-up'>Sign up</StyledLink>
        </StyledParagraph>
        <StyledParagraph>
          Forgot password?{' '}
          <StyledLink to='/forgot-password'>Restore</StyledLink>
        </StyledParagraph>
      </StyledForm>
    </Formik>
  );
};

export default SignInForm;
