import React from 'react';

import Quiz from './quiz';
import { ClassroomPageImage, ClassroomPartWrapper } from './styles';
import { IClassroomPageProps } from './types';

const ClassroomPart = ({ page }: IClassroomPageProps) => {
  return (
    <ClassroomPartWrapper>
      <ClassroomPageImage
        src={page.lessonImage.url}
        alt={page.lessonImage.title}
      />
      <Quiz lessonContent={page.lessonContent} />
    </ClassroomPartWrapper>
  );
};

export default ClassroomPart;
