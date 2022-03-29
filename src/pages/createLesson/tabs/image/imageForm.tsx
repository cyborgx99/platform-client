import ApolloErrorMessage from 'components/apolloErrorMessage';
import ButtonComponent from 'components/button';
import FormInput from 'components/input';
import ResultWrapper from 'components/result';
import ToggleButton from 'components/toggleButton';
import UploadButton from 'components/uploadButton';
import { Formik, FormikProps } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledImageForm } from './styles';
import {
  IImageFormProps,
  IImageFormValues,
  ImageFormOption,
  ImageInput,
} from './types';
import { imageFormOptions } from './utils';

const ImageForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  error,
  loading,
}: IImageFormProps) => {
  const formikRef = useRef<FormikProps<IImageFormValues>>(null);
  const [toggleValue, setToggleValue] = useState(imageFormOptions[0]);
  const [isSuccessShown, setIsSuccessShown] = useState(false);
  const { t } = useTranslation();

  const handleContinue = () => {
    if (!formikRef.current) return;
    formikRef.current.resetForm();
    setIsSuccessShown(false);
  };

  const handleSubmit = async (values: IImageFormValues) => {
    const data = await onSubmit(values);
    if (data) {
      setIsSuccessShown(true);
    }
  };

  useEffect(() => {
    if (!formikRef.current) return;
    formikRef.current.resetForm();
  }, [toggleValue]);

  const imageInput: ImageInput = {
    url: (
      <FormInput
        label={t('pages.createLesson.url')}
        name='url'
        type='url'
        imagePreview
      />
    ),
    upload: <UploadButton name='file' />,
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      innerRef={formikRef}
      validationSchema={validationSchema}>
      <StyledImageForm>
        <ResultWrapper
          isShown={isSuccessShown}
          onContinue={handleContinue}
          type='success'
          message={t('pages.createLesson.imageCreated')}>
          <>
            <ToggleButton<ImageFormOption>
              options={imageFormOptions}
              currentValue={toggleValue}
              onSetValue={setToggleValue}
            />
            {imageInput[toggleValue]}
            <FormInput
              label={t('pages.createLesson.title')}
              name='title'
              type='text'
            />
            <ButtonComponent
              width='full'
              isLoading={loading}
              type='submit'
              variant='primary'>
              {t('pages.createLesson.create')}
            </ButtonComponent>
            <ApolloErrorMessage error={error} />
          </>
        </ResultWrapper>
      </StyledImageForm>
    </Formik>
  );
};

export default ImageForm;
