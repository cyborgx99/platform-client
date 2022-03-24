import ButtonComponent from 'components/button';
import React from 'react';

import {
  ActionContainer,
  CardContainer,
  CardHeaderThree,
  CardImage,
  ContentWrapper,
} from './styles';
import { ICardComponentProps } from './types';

const Card = ({
  imageAlt,
  imageUrl,
  cardTitle,
  children,
  onLeftClick,
  onRightClick,
}: ICardComponentProps) => {
  return (
    <CardContainer>
      <ContentWrapper>
        <CardImage src={imageUrl} alt={imageAlt} />
        <CardHeaderThree>{cardTitle}</CardHeaderThree>
        {children}
      </ContentWrapper>
      <ActionContainer>
        {onLeftClick && (
          <ButtonComponent
            width='full'
            type='button'
            shape='rectangle'
            variant='primary'
            onClick={onLeftClick}>
            Left
          </ButtonComponent>
        )}
        {onRightClick && (
          <ButtonComponent
            width='full'
            type='button'
            variant='secondary'
            shape='rectangle'
            onClick={onRightClick}>
            Right
          </ButtonComponent>
        )}
      </ActionContainer>
    </CardContainer>
  );
};

export default Card;
