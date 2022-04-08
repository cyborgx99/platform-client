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

const Card = <T,>({
  imageAlt,
  data,
  imageUrl,
  cardTitle,
  children,
  onLeftClick,
  onRightClick,
}: ICardComponentProps<T>) => {
  const handleLeftClick = () => {
    onLeftClick?.(data);
  };

  const handleRightClick = () => {
    onRightClick?.(data);
  };

  return (
    <CardContainer data-cy-card>
      <ContentWrapper>
        {imageUrl && <CardImage src={imageUrl} alt={imageAlt} />}
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
            onClick={handleLeftClick}>
            Edit
          </ButtonComponent>
        )}
        {onRightClick && (
          <ButtonComponent
            width='full'
            type='button'
            variant='secondary'
            shape='rectangle'
            onClick={handleRightClick}>
            Delete
          </ButtonComponent>
        )}
      </ActionContainer>
    </CardContainer>
  );
};

export default Card;
