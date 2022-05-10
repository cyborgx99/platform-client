import { ApolloError } from '@apollo/client';
import {
  Lesson,
  LessonContent,
  LessonImage,
} from 'apollo/graphql/generated.types';

import { LessonFormValidationSchema } from './utils';

export type LessonFormOption = 'image' | 'content';

export type LessonFormTypes = 'create' | 'edit';

export type LessonFormOptions = LessonFormOption[];

export interface LessonPage {
  id: string;
  lessonImage: LessonImage;
  lessonContent: LessonContent;
}

export interface LessonPageFormValues {
  id: string;
  lessonImageId: string;
  lessonContentId: string;
}

export interface ILessonFormValues {
  title: string;
  description: string;
  selectedImage: LessonImage | null;
  selectedContent: LessonContent | null;
  pages: LessonPage[];
}

export interface ILessonFormProps {
  loading: boolean;
  type: LessonFormTypes;
  error: ApolloError | undefined;
  initialValues: ILessonFormValues;
  onSubmit: (values: ILessonFormValues) => void;
  validationSchema: LessonFormValidationSchema;
}

export interface GetOptionsAdditional {
  limit: number;
  offset: number;
}

export interface ILessonPageInFormProps {
  isLoading: boolean;
}

export interface ICreateLessonProps {
  onCloseModal: () => void;
}

export interface IDisplayLessonPagesProps {
  pages: LessonPage[];
  onRemovePage?: (data: string | undefined) => void;
}

export interface IDeleteLessonProps {
  onClose: () => void;
  lesson: Lesson;
}
