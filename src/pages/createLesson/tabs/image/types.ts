import { ApolloError } from '@apollo/client';
import { LessonImage, SortOrder } from 'apollo/graphql/generated.types';
import { Maybe } from 'graphql/jsutils/Maybe';
import { SchemaOf } from 'yup';

export interface ICreateImageFormValues {
  url?: string;
  file?: File | null;
  title: string;
}

export interface IEditImageFormValues {
  url: string;
  publicId: Maybe<string>;
  title: string;
  id: string;
  file?: File | null;
}

export type IImageFormValues = ICreateImageFormValues | IEditImageFormValues;

export function isEditImageForm(
  values: IImageFormValues
): values is IEditImageFormValues {
  return (values as IEditImageFormValues).id !== undefined;
}

export type IImageFormValidationSchema = SchemaOf<IImageFormValues>;

export type ImageFormOption = 'url' | 'upload';

export type ImageInput = Record<ImageFormOption, JSX.Element>;

export type ImageFormOptions = ImageFormOption[];

export type LimitOption = {
  label: string;
  value: number;
};

export type OrderOption = {
  label: string;
  value: SortOrder;
};

export interface IEditImageProps {
  currentImage: LessonImage;
}

export interface IDeleteImageProps {
  currentImage: LessonImage;
  onClose: () => void;
}

export type ImageFormTypes = 'edit' | 'create';
export type ImageFormText = {
  [key in ImageFormTypes]: { button: string; message: string };
};

export interface IImageFormProps {
  loading: boolean;
  type: ImageFormTypes;
  error: ApolloError | undefined;
  initialValues: IImageFormValues;
  onSubmit: (values: IImageFormValues) => Promise<string | undefined>;
  validationSchema: IImageFormValidationSchema;
}
