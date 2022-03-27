import { ReactComponent as Plus } from 'assets/icons/brush-and-pencil.svg';
import Card from 'components/card';
import IconComponent from 'components/icon';
import React from 'react';

import { iconContainerStyle, LessonTabWrapper } from './style';

const LessonTab = () => {
  const goToCreateLessonPage = () => {
    console.log(123);
  };

  return (
    <LessonTabWrapper>
      <IconComponent
        onClick={goToCreateLessonPage}
        iconContainerStyle={iconContainerStyle}
        title='Add lesson'
        Svg={Plus}
      />
      <Card
        onLeftClick={() => {
          console.log(123);
        }}
        onRightClick={() => {
          console.log(123);
        }}
        imageUrl='https://res.cloudinary.com/cyborgx999/image/upload/v1648131622/platform/lessons/photography-01-800x400_obxyix.jpg'
        imageAlt='Card'
        cardTitle='My card title'>
        <p>123123</p>
      </Card>
    </LessonTabWrapper>
  );
};

export default LessonTab;
