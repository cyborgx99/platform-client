import { useMutation } from '@apollo/client';
import { SIGN_UP } from 'apollo/graphql';
import ButtonComponent from 'components/button';
import FormInput from 'components/input';
import TextSpan from 'components/span';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { StyledForm } from './styles';
import { SignUpFormValues } from './types';

const initialValues: SignUpFormValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const signUpValidationSchema = yup.object({
  name: yup.string().required().min(2).max(32),
  lastName: yup.string().required().min(2).max(32),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .max(32)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/g,
      'Password must have at least 6 characters, one letter, and one number.'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.'),
});

const SignUpForm = () => {
  const { t } = useTranslation();
  const [signUp, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: (d) => {
      console.log(d);
    },
  });

  const handleSubmit = (values: SignUpFormValues) => {
    signUp({
      variables: {
        input: { ...values, confirmPassword: undefined },
      },
    });
  };

  return (
    <Formik<SignUpFormValues>
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={signUpValidationSchema}>
      <StyledForm>
        <FormInput label={t('pages.auth.name')} name='name' type='text' />
        <FormInput
          label={t('pages.auth.lastName')}
          name='lastName'
          type='text'
        />
        <FormInput label={t('pages.auth.email')} name='email' type='email' />
        <FormInput
          label={t('pages.auth.password')}
          name='password'
          type='password'
        />
        <FormInput
          label={t('pages.auth.confirmPassword')}
          name='confirmPassword'
          type='password'
        />
        <ButtonComponent isLoading={loading} type='submit' variant='primary'>
          {t('pages.auth.signUpButton')}
        </ButtonComponent>
        <TextSpan textColor='error'>{error?.message ?? ''}</TextSpan>
      </StyledForm>
    </Formik>
  );
};

export default SignUpForm;
