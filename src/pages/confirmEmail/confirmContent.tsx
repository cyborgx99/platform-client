import { useMutation } from '@apollo/client';
import {
  Mutation,
  MutationConfirmEmailArgs,
} from 'apollo/graphql/generated.types';
import { CONFIRM_EMAIL } from 'apollo/graphql/mutations/auth/confirmEmail';
import ResultWrapper from 'components/result';
import Spinner from 'components/spinner';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ConfirmContentWrapper } from './styles';

const ConfirmContent = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'error' | 'success'>('error');
  const email = searchParams.get('email');
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isConfirmed = status === 'success';
  const [confirmEmail, { loading }] = useMutation<
    Pick<Mutation, 'confirmEmail'>,
    MutationConfirmEmailArgs
  >(CONFIRM_EMAIL, {
    onCompleted: (data) => {
      if (data.confirmEmail.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    },
  });

  const confirmedEmail = useCallback(async () => {
    await confirmEmail({
      variables: {
        input: { token: email ?? '' },
      },
    });
  }, [confirmEmail, email]);

  useEffect(() => {
    confirmedEmail();
  }, [confirmedEmail]);

  const onContinue = () => {
    navigate(`/`, { replace: true });
  };
  return (
    <ConfirmContentWrapper>
      {loading ? (
        <Spinner type='animated' />
      ) : (
        <ResultWrapper
          onContinue={onContinue}
          message={
            isConfirmed
              ? t('pages.auth.confirmed')
              : t('errors.somethingWentWrong')
          }
          isShown={status === 'error' || status === 'success'}
          type={status}
        />
      )}
    </ConfirmContentWrapper>
  );
};

export default ConfirmContent;
