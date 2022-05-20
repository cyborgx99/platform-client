import { ReactComponent as Trash } from 'assets/icons/trash.svg';
import Card from 'components/card';
import IconComponent from 'components/icon';
import React from 'react';
import { ParagraphBase } from 'styles/globalStyles';

import SentencePreview from '../content/preview';
import {
  LessonPageWrapper,
  PageCardWrapper,
  PageTopWrapper,
  trashIconStyles,
} from './styles';
import { IDisplayLessonPagesProps } from './types';

const DisplayLessonPages = ({
  pages,
  onRemovePage,
}: IDisplayLessonPagesProps) => {
  return (
    <>
      {pages.map((page, index) => (
        <LessonPageWrapper key={page.id}>
          <PageTopWrapper>
            <ParagraphBase $textType='normalText' $textWeight='medium'>
              Page: {index + 1}
            </ParagraphBase>
            {onRemovePage && (
              <IconComponent
                data={page.id}
                iconContainerStyle={trashIconStyles}
                title='Delete page'
                Svg={Trash}
                onClick={onRemovePage}
              />
            )}
          </PageTopWrapper>
          <PageCardWrapper>
            <Card
              hasBorders={false}
              data={page.lessonImage}
              key={page.lessonImage.id}
              imageUrl={page.lessonImage.url}
              cardTitle={page.lessonImage.title}
            />
            <Card
              hasBorders={false}
              data={page.lessonContent}
              key={page.lessonContent.id}
              cardTitle={page.lessonContent.title}>
              {page.lessonContent.sentences.map((sentence, index) => (
                <SentencePreview
                  canRemoveSentence={false}
                  key={sentence.id}
                  index={index}
                  sentence={sentence}
                />
              ))}
            </Card>
          </PageCardWrapper>
        </LessonPageWrapper>
      ))}
    </>
  );
};

export default DisplayLessonPages;
