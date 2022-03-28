import ButtonComponent from 'components/button';
import { useField } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ParagraphBase } from 'styles/globalStyles';

import {
  FileInput,
  PreviewImg,
  UploadButtonContainer,
  ValidationErrorMessage,
} from './styles';
import { IUploadButtonProps } from './types';

const UploadButton = ({ name }: IUploadButtonProps) => {
  const [{ value }, { touched, error }, { setValue, setTouched }] =
    useField<File>(name);
  const [fileName, setFileName] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasError = Boolean(touched && error);
  const { t } = useTranslation();

  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(value);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setFileName(event.target.files[0].name);
    setValue(event.target.files[0]);
  };

  const handleButtonClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
    setTouched(true);
  };

  return (
    <UploadButtonContainer>
      {preview && <PreviewImg alt='Preview' src={preview} />}
      <ParagraphBase $textType='normalText' $textWeight='regular'>
        {fileName}
      </ParagraphBase>
      <ButtonComponent
        width='full'
        shape='rectangle'
        variant='primary'
        type='button'
        onClick={handleButtonClick}>
        {t('pages.createLesson.selectImage')}
      </ButtonComponent>
      <ValidationErrorMessage
        data-cy-error={name}
        $textType='normalText'
        $textWeight='regular'>
        {hasError ? t(`errors.${error}`, { min: 2, max: 32 }) : ''}
      </ValidationErrorMessage>
      <FileInput
        name={name}
        ref={inputRef}
        onChange={handleChange}
        type='file'
        accept='image/*'
      />
    </UploadButtonContainer>
  );
};

export default UploadButton;
