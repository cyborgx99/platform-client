import { ApolloError } from '@apollo/client';
import {
  LessonContent,
  LessonSentenceType,
} from 'apollo/graphql/generated.types';

export type FormTypes = Record<LessonSentenceType, JSX.Element>;

export interface IDeleteContentProps {
  currentContent: LessonContent;
  onClose: () => void;
}

export interface IEditContentProps {
  lessonContent: LessonContent;
}

export interface IContentFormProps {
  onContinue: () => void;
  isSuccessShown: boolean;
  successMessage: string;
  loading: boolean;
  title: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  error: ApolloError | undefined;
}
