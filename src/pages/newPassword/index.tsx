import { useMutation } from '@apollo/client';
import { SET_NEW_PASSWORD } from 'apollo/graphql';
import {
  Mutation,
  MutationSetNewPasswordArgs,
} from 'apollo/graphql/generated.types';
import PageLayout from 'components/page';
import Success from 'components/success';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { pathKeys } from 'routes/pathKeys';
import {
  stringRequiredConfirmPassword,
  stringRequiredMaxPassword,
} from 'utils/validation';
import * as yup from 'yup';

import NewPasswordForm from './newPasswordForm';
import { INewPasswordFormValues } from './types';

const initialValues: INewPasswordFormValues = {
  password: '',
  confirmPassword: '',
};

const newPasswordValidationSchema: yup.SchemaOf<INewPasswordFormValues> =
  yup.object({
    password: stringRequiredMaxPassword,
    confirmPassword: stringRequiredConfirmPassword,
  });

const NewPassword = () => {
  const { t } = useTranslation();
  const [isSuccessShown, setIsSuccessShown] = useState(false);
  const [setNewPassword, { loading, error }] =
    useMutation<Pick<Mutation, 'setNewPassword'>, MutationSetNewPasswordArgs>(
      SET_NEW_PASSWORD
    );
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const reset = searchParams.get('reset');

  const handleContinue = () => {
    navigate(pathKeys.unathorized.LOGIN);
  };

  if (!reset) {
    return <Navigate to={pathKeys.password.FORGOT_PASSWORD} replace />;
  }

  const handleSetNewPassword = async (values: INewPasswordFormValues) => {
    const { data } = await setNewPassword({
      variables: {
        input: { password: values.password, resetToken: reset },
      },
    });

    if (data?.setNewPassword.success) {
      setIsSuccessShown(true);
    }
  };

  return (
    <PageLayout title='Set new password'>
      <Formik<INewPasswordFormValues>
        onSubmit={handleSetNewPassword}
        initialValues={initialValues}
        validationSchema={newPasswordValidationSchema}>
        {isSuccessShown ? (
          <Success
            onContinue={handleContinue}
            text={t('pages.auth.setPasswordSuccessText')}
            title={t('pages.auth.setPasswordSuccessTitle')}
            buttonText={t('pages.auth.successButton')}
          />
        ) : (
          <NewPasswordForm error={error} loading={loading} />
        )}
      </Formik>
    </PageLayout>
  );
};

export default NewPassword;
