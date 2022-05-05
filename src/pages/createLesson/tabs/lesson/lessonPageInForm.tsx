import { ReactComponent as Trash } from 'assets/icons/trash.svg';
import ButtonComponent from 'components/button';
import Card from 'components/card';
import IconComponent from 'components/icon';
import { useFormikContext } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ParagraphBase } from 'styles/globalStyles';
import { v4 as uuid } from 'uuid';

import SentencePreview from '../content/preview';
import {
  LessonPageWrapper,
  PageCardWrapper,
  PageTopWrapper,
  trashIconStyles,
  ValidationErrorMessage,
} from './styles';
import { ILessonFormValues, ILessonPageInFormProps, LessonPage } from './types';

const LessonPageInForm = ({ isLoading }: ILessonPageInFormProps) => {
  const { t } = useTranslation();
  const { values, setFieldValue, errors, touched } =
    useFormikContext<ILessonFormValues>();

  const removePage = (id: string | undefined) => {
    if (!id) return;
    const filtered = values.pages.filter((item) => item.id !== id);
    setFieldValue('pages', filtered, true);
  };

  const addPage = () => {
    if (!values.selectedImage) return;
    if (!values.selectedContent) return;

    const lessonPage: LessonPage = {
      id: uuid(),
      lessonImage: values.selectedImage,
      lessonContent: values.selectedContent,
    };

    setFieldValue('pages', [...values.pages, lessonPage]);
    setFieldValue('selectedImage', null);
    setFieldValue('selectedContent', null);
  };

  return (
    <>
      {values.pages.map((page, index) => (
        <LessonPageWrapper key={page.id}>
          <PageTopWrapper>
            <ParagraphBase $textType='normalText' $textWeight='medium'>
              Page: {index + 1}
            </ParagraphBase>
            <IconComponent
              data={page.id}
              iconContainerStyle={trashIconStyles}
              title='Delete page'
              Svg={Trash}
              onClick={removePage}
            />
          </PageTopWrapper>
          <PageCardWrapper>
            <Card
              data={page.lessonImage}
              key={page.lessonImage.id}
              imageUrl={page.lessonImage.url}
              cardTitle={page.lessonImage.title}
            />
            <Card
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
      <ButtonComponent
        onClick={addPage}
        width='full'
        disabled={Boolean(!(values.selectedContent && values.selectedImage))}
        isLoading={isLoading}
        type='button'
        shape='rectangle'
        variant='primary'>
        {t('pages.createLesson.addPage')}
      </ButtonComponent>
      <ValidationErrorMessage
        data-cy-error='pages'
        $textType='normalText'
        $textWeight='regular'>
        {errors.pages && touched.pages
          ? t(`errors.${errors.pages}`, { min: 2, max: 32 })
          : ''}
      </ValidationErrorMessage>
    </>
  );
};

export default LessonPageInForm;
