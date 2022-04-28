import ApolloErrorMessage from 'components/apolloErrorMessage';
import ButtonComponent from 'components/button';
import Card from 'components/card';
import FormInput from 'components/input';
import ResultWrapper from 'components/result';
import ToggleButton from 'components/toggleButton';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SelectContent from './selectContent';
import SelectImage from './selectImage';
import { StyledlessonForm } from './styles';
import {
  ILessonFormProps,
  ILessonFormValues,
  LessonFormOption,
  LessonFormOptions,
} from './types';

const lessonFormOptions: LessonFormOptions = ['image', 'content'];

const LessonForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  error,
  type = 'create',
  loading,
}: ILessonFormProps) => {
  const { t } = useTranslation();
  const [toggleValue, setToggleValue] = useState(lessonFormOptions[0]);
  const [isSuccessShown, setIsSuccessShown] = useState(false);

  const lessonInput = {
    image: <SelectImage />,
    content: <SelectContent />,
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
    console.log(13);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}>
      {({ values }) => (
        <StyledlessonForm>
          <ResultWrapper
            isShown={isSuccessShown}
            onContinue={handleContinue}
            type='success'
            message={textData[type].message}>
            <>
              <ToggleButton<LessonFormOption>
                options={lessonFormOptions}
                currentValue={toggleValue}
                onSetValue={setToggleValue}
              />
              {lessonInput[toggleValue]}
              {values.selectedImage && (
                <Card
                  data={values.selectedImage}
                  key={values.selectedImage.id}
                  imageUrl={values.selectedImage.url}
                  cardTitle={values.selectedImage.title}
                />
              )}
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
