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
  data,
  imageUrl,
  cardTitle,
  children,
  isSelected,
  onCardClick,
  onLeftClick,
  onRightClick,
}: ICardComponentProps<T>) => {
  const isActionContainerShown = Boolean(onLeftClick || onRightClick);

  const handleCardClick = () => {
    onCardClick?.(data);
  };

  const handleLeftClick = () => {
    onLeftClick?.(data);
  };

  const handleRightClick = () => {
    onRightClick?.(data);
  };

  return (
    <CardContainer $isSelected={isSelected} data-cy-card>
      <ContentWrapper
        type='button'
        disabled={Boolean(!onCardClick)}
        onClick={handleCardClick}>
        {imageUrl && (
          <CardImage loading='lazy' src={imageUrl} alt={cardTitle} />
        )}
        <CardHeaderThree>{cardTitle}</CardHeaderThree>
        {children}
      </ContentWrapper>
      {isActionContainerShown && (
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
      )}
    </CardContainer>
  );
};

export default Card;
