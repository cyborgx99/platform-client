import { ReactComponent as Checked } from 'assets/icons/checked.svg';
import ButtonComponent from 'components/button';
import IconComponent from 'components/icon';
import React from 'react';
import { HeaderTwoBase, ParagraphBase } from 'styles/globalStyles';

import { IconContainer, iconStyles, SuccessContainer } from './styles';
import { SuccessComponentProps } from './types';

const Success = ({
  onContinue,
  title,
  text,
  buttonText,
}: SuccessComponentProps) => {
  const handleContinue = () => {
    onContinue();
  };
  return (
    <SuccessContainer>
      <IconContainer>
        <IconComponent iconStyle={iconStyles} title='Success' Svg={Checked} />
      </IconContainer>
      <HeaderTwoBase>{title}</HeaderTwoBase>
      <ParagraphBase $textType='largeText' $textWeight='medium'>
        {text}
      </ParagraphBase>
      <ButtonComponent
        isLoading={false}
        type='button'
        variant='primary'
        onClick={handleContinue}>
        {buttonText}
      </ButtonComponent>
    </SuccessContainer>
  );
};

export default Success;
