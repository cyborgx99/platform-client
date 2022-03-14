import ButtonComponent from 'components/button';
import ErrorMessage from 'components/errorMessage';
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
        label={t('pages.auth.password')}
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
      <ErrorMessage error={error} />
    </FormBase>
  );
};

export default NewPasswordForm;
