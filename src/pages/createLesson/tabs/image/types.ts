import { ApolloError } from '@apollo/client';
import { SchemaOf } from 'yup';

export interface IImageFormValues {
  url?: string;
  file?: File | null;
  title: string;
}

export type IImageFormValidationSchema = SchemaOf<IImageFormValues>;

export type ImageFormOption = 'url' | 'upload';

export type ImageInput = Record<ImageFormOption, JSX.Element>;

export type ImageFormOptions = ImageFormOption[];

export interface IImageFormProps {
  loading: boolean;
  error: ApolloError | undefined;
  initialValues: IImageFormValues;
  onSubmit: (values: IImageFormValues) => Promise<string | undefined>;
  validationSchema: IImageFormValidationSchema;
}
