import ButtonComponent from 'components/button';
import FormInput from 'components/input';
import ToggleButton from 'components/toggleButton';
import UploadButton from 'components/uploadButton';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormBase } from 'styles/globalStyles';
import {
  mixedRequiredFileSize,
  stringRequiredImageUrl,
  stringRequiredMinMax,
} from 'utils/validation';
import * as yup from 'yup';

import { ICreateImageFormValues } from './types';

const initialValues: ICreateImageFormValues = {
  url: '',
  file: null,
  title: '',
};

const createImageFormValidationSchema: yup.SchemaOf<ICreateImageFormValues> =
  yup.object({
    url: stringRequiredImageUrl,
    file: mixedRequiredFileSize,
    title: stringRequiredMinMax,
  });

const options = ['url', 'upload'];

const CreateImageForm = () => {
  const { t } = useTranslation();
  const [toggleValue, setToggleValue] = useState(options[0]);
  const handleCreateImage = () => {
    console.log(3);
  };

  return (
    <Formik<ICreateImageFormValues>
      onSubmit={handleCreateImage}
      initialValues={initialValues}
      validationSchema={createImageFormValidationSchema}>
      <FormBase>
        <ToggleButton
          options={options}
          currentValue={toggleValue}
          onSetValue={setToggleValue}
        />
        <UploadButton name='file' />
        <FormInput
          label={t('pages.createLesson.url')}
          name='url'
          type='url'
          imagePreview
        />
        <FormInput
          label={t('pages.auth.lastName')}
          name='lastName'
          type='text'
        />
        <FormInput label={t('pages.auth.email')} name='email' type='email' />
        <ButtonComponent
          width='full'
          isLoading={false}
          type='submit'
          variant='primary'>
          {t('pages.auth.signUpButton')}
        </ButtonComponent>
      </FormBase>
    </Formik>
  );
};

export default CreateImageForm;
