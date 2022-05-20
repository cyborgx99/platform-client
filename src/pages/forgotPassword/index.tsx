import { useMutation } from '@apollo/client';
import { RESET_PASSWORD_LINK } from 'apollo/graphql';
import {
  Mutation,
  MutationResetPasswordLinkArgs,
} from 'apollo/graphql/generated.types';
import PageLayout from 'components/page';
import ResultWrapper from 'components/result';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { pathKeys } from 'routes/pathKeys';
import { stringRequiredEmail } from 'utils/validation';
import * as yup from 'yup';

import ForgotPasswordForm from './forgotPasswordForm';
import { ResetPasswordLinkFormValues } from './types';

const initialValues: ResetPasswordLinkFormValues = {
  email: '',
};

const resetPasswordValidationSchema: yup.SchemaOf<ResetPasswordLinkFormValues> =
  yup.object({
    email: stringRequiredEmail,
  });

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSuccessShown, setIsSuccessShown] = useState(false);
  const [resetPasswordLink, { loading, error }] =
    useMutation<
      Pick<Mutation, 'resetPasswordLink'>,
      MutationResetPasswordLinkArgs
    >(RESET_PASSWORD_LINK);

  const handleSendResetPasswordLink = async (
    values: ResetPasswordLinkFormValues
  ) => {
    const { data } = await resetPasswordLink({
      variables: {
        input: values,
      },
    });

    if (data?.resetPasswordLink.success) {
      setIsSuccessShown(true);
    }
  };

  const handleContinue = () => {
    navigate(pathKeys.unathorized.HOME);
  };

  return (
    <PageLayout title='Forgot password'>
      <Formik<ResetPasswordLinkFormValues>
        onSubmit={handleSendResetPasswordLink}
        initialValues={initialValues}
        validationSchema={resetPasswordValidationSchema}>
        <ResultWrapper
          message={t('pages.auth.passwordResetText')}
          isShown={isSuccessShown}
          type='success'
          onContinue={handleContinue}>
          <ForgotPasswordForm error={error} loading={loading} />
        </ResultWrapper>
      </Formik>
    </PageLayout>
  );
};

export default ForgotPasswordPage;
