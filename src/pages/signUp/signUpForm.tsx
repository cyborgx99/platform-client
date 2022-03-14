import { useMutation } from '@apollo/client';
import { SIGN_UP } from 'apollo/graphql';
import { Mutation } from 'apollo/graphql/generated.types';
import Success from 'components/success';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { pathKeys } from 'routes/pathKeys';
import {
  stringRequiredConfirmPassword,
  stringRequiredEmail,
  stringRequiredMaxPassword,
  stringRequiredMinMax,
} from 'utils/validation';
import * as yup from 'yup';

import FormContent from './formContent';
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
  const navigate = useNavigate();
  const [isSuccessShown, setIsSuccessShown] = useState(false);
  const [signUp, { error, loading }] =
    useMutation<Pick<Mutation, 'signUp'>>(SIGN_UP);

  const handleContinue = () => {
    navigate(pathKeys.unathorized.LOGIN);
  };

  const handleSubmit = async (values: SignUpFormValues) => {
    const { data } = await signUp({
      variables: {
        input: { ...values, confirmPassword: undefined },
      },
    });
    if (data?.signUp.success) {
      setIsSuccessShown(true);
    }
  };

  return (
    <Formik<SignUpFormValues>
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={signUpValidationSchema}>
      <>
        {isSuccessShown ? (
          <Success
            onContinue={handleContinue}
            title={t('pages.auth.signUpSuccessTitle')}
            text={t('pages.auth.signUpSuccessText')}
            buttonText={t('pages.auth.signUpSuccessButton')}
          />
        ) : (
          <FormContent loading={loading} error={error} />
        )}
      </>
    </Formik>
  );
};

export default SignUpForm;
