import { handleApolloError } from 'apollo/errorHandling';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledErrorMessage } from './styles';
import { IErrorMessageProps } from './types';

const ErrorMessage = ({ error }: IErrorMessageProps) => {
  const { t } = useTranslation();
  return (
    <StyledErrorMessage $textType='normalText' $textWeight='regular'>
      {error ? t(`errors.${handleApolloError(error)}`) : ''}
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
