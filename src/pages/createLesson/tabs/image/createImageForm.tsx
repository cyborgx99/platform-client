import { ApolloError, useMutation } from '@apollo/client';
import { CREATE_LESSON_IMAGE, UPLOAD_FILE } from 'apollo/graphql';
import {
  CreateLessonImageMutationVariables,
  Mutation,
  UploadFileMutationVariables,
} from 'apollo/graphql/generated.types';
import ButtonComponent from 'components/button';
import FormInput from 'components/input';
import Success from 'components/success';
import ToggleButton from 'components/toggleButton';
import UploadButton from 'components/uploadButton';
import { Formik, FormikProps } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  mixedRequiredFileSize,
  stringRequiredImageUrl,
  stringRequiredMinMax,
} from 'utils/validation';
import * as yup from 'yup';

import { StyledImageForm } from './styles';
import {
  CreateImageFormOption,
  CreateImageFormOptions,
  ICreateImageFormValues,
  ImageInput,
} from './types';

const initialValues: ICreateImageFormValues = {
  url: '',
  file: null,
  title: '',
};

const createImageFormValidationSchema: yup.SchemaOf<ICreateImageFormValues> =
  yup.object().shape(
    {
      url: yup.string().when('file', {
        is: (file: File) => !file,
        then: stringRequiredImageUrl,
        otherwise: yup.string(),
      }),
      file: yup.mixed().when('url', {
        is: (url: string) => !url,
        then: mixedRequiredFileSize,
        otherwise: yup.mixed(),
      }),
      title: stringRequiredMinMax,
    },
    [['url', 'file']]
  );

const options: CreateImageFormOptions = ['url', 'upload'];

const CreateImageForm = () => {
  const { t } = useTranslation();
  const [toggleValue, setToggleValue] = useState(options[0]);
  const [isSuccessShown, setIsSuccessShown] = useState(false);
  const formikRef = useRef<FormikProps<ICreateImageFormValues>>(null);
  const [createImage] =
    useMutation<
      Pick<Mutation, 'createLessonImage'>,
      CreateLessonImageMutationVariables
    >(CREATE_LESSON_IMAGE);
  const [uploadImage] =
    useMutation<Pick<Mutation, 'uploadFile'>, UploadFileMutationVariables>(
      UPLOAD_FILE
    );

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

  const handleCreateImage = async (values: ICreateImageFormValues) => {
    try {
      const input: {
        url: string | null;
        publicId: string | null;
        title: string | null;
      } = { url: null, publicId: null, title: null };

      if (toggleValue === 'upload' && values.file) {
        const { data } = await uploadImage({
          variables: {
            file: values.file,
          },
        });

        if (!data) throw new ApolloError({ errorMessage: 'UploadError' });

        input.url = data.uploadFile.url;
        input.publicId = data.uploadFile.publicId;
        input.title = values.title;
      } else if (values.url) {
        input.url = values.url;
        input.title = values.title;
      }

      if (input.title && input.url) {
        const { data } = await createImage({
          variables: {
            input: {
              title: input.title,
              url: input.url,
              publicId: input.publicId,
            },
          },
        });

        if (data?.createLessonImage.id) {
          setIsSuccessShown(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleContinue = () => {
    if (!formikRef.current) return;
    formikRef.current.resetForm();
    setIsSuccessShown(false);
  };

  return (
    <Formik<ICreateImageFormValues>
      onSubmit={handleCreateImage}
      initialValues={initialValues}
      innerRef={formikRef}
      validationSchema={createImageFormValidationSchema}>
      <StyledImageForm>
        {isSuccessShown ? (
          <Success
            onContinue={handleContinue}
            title={t('pages.auth.signUpSuccessTitle')}
            text={t('pages.auth.signUpSuccessText')}
            buttonText={t('pages.auth.successButton')}
          />
        ) : (
          <>
            <ToggleButton<CreateImageFormOption>
              options={options}
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
              isLoading={false}
              type='submit'
              variant='primary'>
              {t('pages.createLesson.create')}
            </ButtonComponent>
            {/* <ApolloErrorMessage error={error} /> */}
          </>
        )}
      </StyledImageForm>
    </Formik>
  );
};

export default CreateImageForm;
