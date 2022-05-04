import { useLazyQuery } from '@apollo/client';
import { GET_LESSON_IMAGES } from 'apollo/graphql';
import {
  GetLessonContentsQueryVariables,
  GetLessonImagesQueryVariables,
  LessonContent,
  LessonImage,
  Query,
} from 'apollo/graphql/generated.types';
import { GET_LESSON_CONTENTS } from 'apollo/graphql/queries/lesson/getLessonContents';
import ApolloErrorMessage from 'components/apolloErrorMessage';
import ButtonComponent from 'components/button';
import Card from 'components/card';
import FormInput from 'components/input';
import ResultWrapper from 'components/result';
import FormSelectAsync from 'components/select/formSelect';
import { GetOptionsFunction } from 'components/select/types';
import { Formik, FormikProps } from 'formik';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SentencePreview from '../content/preview';
import { StyledlessonForm } from './styles';
import { ILessonFormProps, ILessonFormValues } from './types';

const getImageOptionValue = (option: LessonImage): string => {
  return JSON.stringify(option);
};

const getImageOptionLabel = (option: LessonImage): string => {
  return option.title;
};

const getContentOptionValue = (option: LessonContent): string => {
  return JSON.stringify(option);
};

const getContentOptionLabel = (option: LessonContent): string => {
  return option.title;
};

const LessonForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  error,
  type = 'create',
  loading,
}: ILessonFormProps) => {
  const { t } = useTranslation();
  const [isSuccessShown, setIsSuccessShown] = useState(false);
  const formikRef = useRef<FormikProps<ILessonFormValues>>(null);

  const [imagesQuery] =
    useLazyQuery<Pick<Query, 'getLessonImages'>, GetLessonImagesQueryVariables>(
      GET_LESSON_IMAGES
    );

  const [contentsQuery] =
    useLazyQuery<
      Pick<Query, 'getLessonContents'>,
      GetLessonContentsQueryVariables
    >(GET_LESSON_CONTENTS);

  const getImagesOptions: GetOptionsFunction<
    LessonImage,
    { limit: number; offset: number }
  > = async (search, options, additional) => {
    const defaultReturn = {
      options: [],
      hasMore: false,
      additional: additional,
    };

    if (!additional) return defaultReturn;

    const { data } = await imagesQuery({
      variables: {
        limit: additional.limit,
        offset: additional.offset,
        search,
      },
    });

    if (!data) return defaultReturn;

    const hasMore = data.getLessonImages.totalCount > options.length;

    return {
      options: data.getLessonImages.data,
      hasMore,
      additional: {
        limit: additional.limit,
        offset: additional.offset + data.getLessonImages.data.length,
      },
    };
  };

  const getContentOptions: GetOptionsFunction<
    LessonContent,
    { limit: number; offset: number }
  > = async (search, options, additional) => {
    const defaultReturn = {
      options: [],
      hasMore: false,
      additional: additional,
    };
    if (!additional) return defaultReturn;

    const { data } = await contentsQuery({
      variables: {
        limit: additional.limit,
        offset: additional.offset,
        search,
      },
    });

    if (!data) return defaultReturn;

    const hasMore = data.getLessonContents.totalCount > options.length;

    return {
      options: data.getLessonContents.data,
      hasMore,
      additional: {
        limit: additional.limit,
        offset: additional.offset + data.getLessonContents.data.length,
      },
    };
  };

  const textData = {
    create: {
      message: t('pages.createLesson.imageCreated'),
      button: t('pages.createLesson.create'),
    },
    edit: {
      message: t('pages.createLesson.imageUpdated'),
      button: t('pages.createLesson.update'),
    },
  };

  const handleSubmit = (values: ILessonFormValues) => {
    onSubmit(values);
  };

  const handleContinue = () => {
    setIsSuccessShown(false);
  };

  const addPage = () => {
    if (!formikRef.current) return;
    if (!formikRef.current.values.selectedImage) return;
    if (!formikRef.current.values.selectedContent) return;

    formikRef.current.setFieldValue('pages', [
      ...formikRef.current.values.pages,
      {
        lessonImage: formikRef.current.values.selectedImage,
        lessonContent: formikRef.current.values.selectedContent,
      },
    ]);

    formikRef.current.setFieldValue('selectedImage', null);
    formikRef.current.setFieldValue('selectedContent', null);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      enableReinitialize
      innerRef={formikRef}
      validationSchema={validationSchema}>
      {({ values }) => (
        <StyledlessonForm>
          <ResultWrapper
            isShown={isSuccessShown}
            onContinue={handleContinue}
            type='success'
            message={textData[type].message}>
            <>
              <FormSelectAsync
                getOptionLabel={getImageOptionLabel}
                getOptionValue={getImageOptionValue}
                getOptions={getImagesOptions}
                additional={{ limit: 4, offset: 0 }}
                isClearable
                name='selectedImage'
                label='Select image'
              />
              {values.selectedImage && (
                <Card
                  data={values.selectedImage}
                  key={values.selectedImage.id}
                  imageUrl={values.selectedImage.url}
                  cardTitle={values.selectedImage.title}
                />
              )}
              <FormSelectAsync
                getOptionLabel={getContentOptionLabel}
                getOptionValue={getContentOptionValue}
                getOptions={getContentOptions}
                isClearable
                additional={{ limit: 4, offset: 0 }}
                name='selectedContent'
                label='Select content'
              />
              {values.selectedContent && (
                <Card
                  data={values.selectedContent}
                  key={values.selectedContent.id}
                  cardTitle={values.selectedContent.title}>
                  {values.selectedContent.sentences.map((sentence, index) => (
                    <SentencePreview
                      key={sentence.id}
                      index={index}
                      sentence={sentence}
                    />
                  ))}
                </Card>
              )}
              {`${values.pages[0]}`}
              <ButtonComponent
                onClick={addPage}
                width='full'
                isLoading={loading}
                type='button'
                shape='rectangle'
                variant='primary'>
                {t('pages.createLesson.addPage')}
              </ButtonComponent>
              <FormInput
                label={t('pages.createLesson.title')}
                name='title'
                type='text'
              />
              <FormInput
                label={t('pages.createLesson.description')}
                name='description'
                type='text'
              />
              <ButtonComponent
                width='full'
                isLoading={loading}
                type='submit'
                variant='primary'>
                {textData[type].button}
              </ButtonComponent>
              <ApolloErrorMessage error={error} />
            </>
          </ResultWrapper>
        </StyledlessonForm>
      )}
    </Formik>
  );
};

export default LessonForm;
