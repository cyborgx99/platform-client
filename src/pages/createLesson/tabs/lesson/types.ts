import { ApolloError } from '@apollo/client';
import { SchemaOf } from 'yup';

export type LessonFormOption = 'image' | 'content';

export type LessonFormTypes = 'create' | 'edit';

export type LessonFormOptions = LessonFormOption[];

export interface LessonPage {
  lessonImageId: string;
  lessonContentId: string;
}

export interface ILessonFormValues {
  title: string;
  description: string;
  pages: LessonPage[];
}

export type ILessonFormValidationSchema = SchemaOf<ILessonFormValues>;

export interface ILessonFormProps {
  loading: boolean;
  type: LessonFormTypes;
  error: ApolloError | undefined;
  initialValues: ILessonFormValues;
  onSubmit: (values: ILessonFormValues) => Promise<string | undefined>;
  validationSchema: ILessonFormValidationSchema;
}
