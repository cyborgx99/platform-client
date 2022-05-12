import ButtonComponent from 'components/button';
import { useFormikContext } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';

import DisplayLessonPages from './displayLessonPages';
import { ValidationErrorMessage } from './styles';
import { ILessonFormValues, ILessonPageInFormProps, LessonPage } from './types';

const LessonPageInForm = ({ isLoading }: ILessonPageInFormProps) => {
  const { t } = useTranslation();
  const { values, setFieldValue, errors, touched } =
    useFormikContext<ILessonFormValues>();

  const addPage = async () => {
    if (!values.selectedImage) return;
    if (!values.selectedContent) return;

    const lessonPage: LessonPage = {
      id: uuid(),
      lessonImage: values.selectedImage,
      lessonContent: values.selectedContent,
    };

    await setFieldValue('pages', [...values.pages, lessonPage]);
    await setFieldValue('selectedImage', null);
    await setFieldValue('selectedContent', null);
  };

  const removePage = (id: string | undefined) => {
    if (!id) return;
    const filtered = values.pages.filter((item) => item.id !== id);
    setFieldValue('pages', filtered, true);
  };

  return (
    <>
      <DisplayLessonPages pages={values.pages} onRemovePage={removePage} />
      <ButtonComponent
        onClick={addPage}
        width='full'
        disabled={Boolean(!(values.selectedContent && values.selectedImage))}
        isLoading={isLoading}
        type='button'
        shape='rectangle'
        variant='primary'>
        {t('pages.create.addPage')}
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
