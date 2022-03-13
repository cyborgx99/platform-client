import ButtonComponent from 'components/button';
import FormInput from 'components/input';
import PageLayout from 'components/page';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderThree, StyledForm } from './styles';

const initialValues = {
  email: '',
};

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const handleSendResetPasswordLink = () => {
    console.log(1);
  };

  return (
    <PageLayout>
      <Formik
        onSubmit={handleSendResetPasswordLink}
        initialValues={initialValues}>
        <StyledForm>
          <HeaderThree>Enter your email to reset your password.</HeaderThree>
          <FormInput type='email' name='email' label={t('pages.auth.email')} />
          <ButtonComponent
            width='full'
            isLoading={false}
            type='submit'
            variant='primary'>
            {t('pages.auth.resetButton')}
          </ButtonComponent>
        </StyledForm>
      </Formik>
    </PageLayout>
  );
};

export default ForgotPasswordPage;
