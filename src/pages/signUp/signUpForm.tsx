import { useMutation } from '@apollo/client';
import { handleApolloError } from 'apollo/errorHandling';
import { SIGN_UP } from 'apollo/graphql';
import { Mutation } from 'apollo/graphql/generated.types';
import ButtonComponent from 'components/button';
import FormInput from 'components/input';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  stringRequiredConfirmPassword,
  stringRequiredEmail,
  stringRequiredMaxPassword,
  stringRequiredMinMax,
} from 'utils/validation';
import * as yup from 'yup';

import { ErrorMessage, StyledForm } from './styles';
import { SignUpFormValues } from './types';

const initialValues: SignUpFormValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const signUpValidationSchema: yup.SchemaOf<SignUpFormValues> = yup.object({
  name: stringRequiredMinMax,
  lastName: stringRequiredMinMax,
  email: stringRequiredEmail,
  password: stringRequiredMaxPassword,
  confirmPassword: stringRequiredConfirmPassword,
});

const SignUpForm = () => {
  const { t } = useTranslation();
  const [signUp, { loading, error }] = useMutation<Pick<Mutation, 'signUp'>>(
    SIGN_UP,
    {
      onCompleted: (d) => {
        console.log(d);
      },
    }
  );

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
        <ErrorMessage $textType='normalText' $textWeight='regular'>
          {error ? t(`errors.${handleApolloError(error)}`) : ''}
        </ErrorMessage>
      </StyledForm>
    </Formik>
  );
};

export default SignUpForm;
