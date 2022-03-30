import { ReactComponent as Checked } from 'assets/icons/checked.svg';
import { ReactComponent as CircleError } from 'assets/icons/circleError.svg';
import ButtonComponent from 'components/button';
import IconComponent from 'components/icon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderTwoBase, ParagraphBase } from 'styles/globalStyles';

import {
  errorIconStyles,
  ResultContainer,
  SuccessIconContainer,
  successIconStyles,
} from './styles';
import { ResultIcon, ResultTitle, ResultWrapperProps } from './types';

const iconType: ResultIcon = {
  success: (
    <SuccessIconContainer>
      <IconComponent
        iconStyle={successIconStyles}
        title='Success'
        Svg={Checked}
      />
    </SuccessIconContainer>
  ),
  error: (
    <IconComponent
      iconStyle={errorIconStyles}
      title='Error'
      Svg={CircleError}
    />
  ),
};

const ResultWrapper = ({
  onContinue,
  message,
  type = 'success',
  isShown,
  children,
}: ResultWrapperProps) => {
  const { t } = useTranslation();
  const title: ResultTitle = {
    success: t('pages.resultWrapper.success'),
    error: t('pages.resultWrapper.error'),
  };

  return isShown ? (
    <ResultContainer>
      {iconType[type]}
      <HeaderTwoBase>{title[type]}</HeaderTwoBase>
      <ParagraphBase $textType='largeText' $textWeight='medium'>
        {message}
      </ParagraphBase>
      <ButtonComponent type='button' variant='primary' onClick={onContinue}>
        {t('pages.resultWrapper.continue')}
      </ButtonComponent>
    </ResultContainer>
  ) : (
    <>{children}</>
  );
};

export default ResultWrapper;
