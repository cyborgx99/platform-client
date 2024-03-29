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
  ImageFormText,
  ImageInput,
} from './types';
import { imageFormOptions } from './utils';

const ImageForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  error,
  type = 'create',
  loading,
}: IImageFormProps) => {
  const formikRef = useRef<FormikProps<IImageFormValues>>(null);
  const [toggleValue, setToggleValue] = useState(imageFormOptions[0]);
  const [isSuccessShown, setIsSuccessShown] = useState(false);
  const { t } = useTranslation();
  const textData: ImageFormText = {
    create: {
      message: t('pages.create.imageCreated'),
      button: t('pages.create.create'),
    },
    edit: {
      message: t('pages.create.imageUpdated'),
      button: t('pages.create.update'),
    },
  };

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
        label={t('pages.create.url')}
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
      enableReinitialize
      validationSchema={validationSchema}>
      <StyledImageForm>
        <ResultWrapper
          isShown={isSuccessShown}
          onContinue={handleContinue}
          type='success'
          message={textData[type].message}>
          <>
            <ToggleButton<ImageFormOption>
              options={imageFormOptions}
              currentValue={toggleValue}
              onSetValue={setToggleValue}
            />
            {imageInput[toggleValue]}
            <FormInput
              label={t('pages.create.title')}
              name='title'
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
      </StyledImageForm>
    </Formik>
  );
};

export default ImageForm;
