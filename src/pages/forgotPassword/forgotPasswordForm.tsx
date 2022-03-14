import ButtonComponent from 'components/button';
import ErrorMessage from 'components/errorMessage';
import FormInput from 'components/input';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormBase } from 'styles/globalStyles';

import { HeaderThree } from './styles';
import { IForgotPasswordFormProps } from './types';

const ForgotPasswordForm = ({ error, loading }: IForgotPasswordFormProps) => {
  const { t } = useTranslation();
  return (
    <FormBase>
      <HeaderThree>{t('pages.auth.resetPasswordTitle')} </HeaderThree>
      <FormInput type='email' name='email' label={t('pages.auth.email')} />
      <ButtonComponent
        width='full'
        isLoading={loading}
        type='submit'
        variant='primary'>
        {t('pages.auth.resetButton')}
      </ButtonComponent>
      <ErrorMessage error={error} />
    </FormBase>
  );
};

export default ForgotPasswordForm;
