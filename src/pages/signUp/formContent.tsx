import ButtonComponent from 'components/button';
import ErrorMessage from 'components/errorMessage';
import FormInput from 'components/input';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { pathKeys } from 'routes/pathKeys';
import { FormBase, LinkBase, ParagraphBase } from 'styles/globalStyles';

import { LinkContainer } from './styles';
import { FormContentProps } from './types';

const FormContent = ({ error, loading }: FormContentProps) => {
  const { t } = useTranslation();
  return (
    <FormBase>
      <FormInput label={t('pages.auth.name')} name='name' type='text' />
      <FormInput label={t('pages.auth.lastName')} name='lastName' type='text' />
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
      <ButtonComponent
        width='full'
        isLoading={loading}
        type='submit'
        variant='primary'>
        {t('pages.auth.signUpButton')}
      </ButtonComponent>
      <ErrorMessage error={error} />
      <LinkContainer>
        <ParagraphBase $textType='normalText' $textWeight='regular'>
          {t('pages.auth.alreadyHaveAccount')}{' '}
          <LinkBase
            $textType='normalText'
            $textWeight='regular'
            to={pathKeys.unathorized.SIGN_UP}>
            {t('pages.auth.signInButton')}
          </LinkBase>
        </ParagraphBase>
        <ParagraphBase $textType='normalText' $textWeight='regular'>
          {t('pages.auth.forgotPassword')}{' '}
          <LinkBase
            $textType='normalText'
            $textWeight='regular'
            to={pathKeys.password.FORGOT_PASSWORD}>
            {t('pages.auth.resetButton')}
          </LinkBase>
        </ParagraphBase>
      </LinkContainer>
    </FormBase>
  );
};

export default FormContent;
