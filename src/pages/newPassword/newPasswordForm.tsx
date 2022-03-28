import ApolloErrorMessage from 'components/apolloErrorMessage';
import ButtonComponent from 'components/button';
import FormInput from 'components/input';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormBase } from 'styles/globalStyles';

import { INewPasswordFormProps } from './types';

const NewPasswordForm = ({ error, loading }: INewPasswordFormProps) => {
  const { t } = useTranslation();
  return (
    <FormBase>
      <FormInput
        label={t('pages.auth.newPassword')}
        name='password'
        type='password'
      />
      <FormInput
        label={t('pages.auth.confirmPassword')}
        name='confirmPassword'
        type='password'
      />
      <ButtonComponent
        width='full'
        isLoading={loading}
        type='submit'
        variant='primary'>
        {t('pages.auth.setPasswordButton')}
      </ButtonComponent>
      <ApolloErrorMessage error={error} />
    </FormBase>
  );
};

export default NewPasswordForm;
