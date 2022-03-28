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

const Card: React.FC<ICardComponentProps> = ({
  imageAlt,
  imageUrl,
  cardTitle,
  children,
  onLeftClick,
  onRightClick,
}) => {
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
            Edit
          </ButtonComponent>
        )}
        {onRightClick && (
          <ButtonComponent
            width='full'
            type='button'
            variant='secondary'
            shape='rectangle'
            onClick={onRightClick}>
            Delete
          </ButtonComponent>
        )}
      </ActionContainer>
    </CardContainer>
  );
};

export default Card;
