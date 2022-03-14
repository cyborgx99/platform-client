import { useMutation } from '@apollo/client';
import { SIGN_IN } from 'apollo/graphql';
import {
  Mutation,
  SignInMutationVariables,
} from 'apollo/graphql/generated.types';
import { useAuth } from 'auth';
import ButtonComponent from 'components/button';
import ErrorMessage from 'components/errorMessage';
import FormInput from 'components/input';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormBase } from 'styles/globalStyles';
import {
  stringRequiredEmail,
  stringRequiredMaxPassword,
} from 'utils/validation';
import * as yup from 'yup';

import { StyledLink, StyledParagraph } from './styles';
import { ISignInFormValues } from './types';

const initialValues: ISignInFormValues = {
  email: '',
  password: '',
};

const signInValidationSchema: yup.SchemaOf<ISignInFormValues> = yup.object({
  email: stringRequiredEmail,
  password: stringRequiredMaxPassword,
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
      <FormBase>
        <FormInput label={t('pages.auth.email')} name='email' type='email' />
        <FormInput
          label={t('pages.auth.password')}
          name='password'
          type='password'
        />
        <ButtonComponent
          width='full'
          isLoading={loading}
          type='submit'
          variant='primary'>
          {t('pages.auth.signInButton')}
        </ButtonComponent>
        <ErrorMessage error={error} />
        <StyledParagraph>
          Do not have an account? <StyledLink to='/sign-up'>Sign up</StyledLink>
        </StyledParagraph>
        <StyledParagraph>
          Forgot password?{' '}
          <StyledLink to='/forgot-password'>Restore</StyledLink>
        </StyledParagraph>
      </FormBase>
    </Formik>
  );
};

export default SignInForm;
