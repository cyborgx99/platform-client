import { ApolloError } from '@apollo/client';
import { Classroom, Lesson, User } from 'apollo/graphql/generated.types';

import { classroomFormValidationSchema } from './utils';

export interface ICreateClassroomProps {
  onCloseModal: () => void;
}

export interface IUpdateClassroomProps {
  onCloseModal: () => void;
  classroom: Classroom;
}

export interface IDeleteClassroomProps {
  onCloseModal: () => void;
  classroom: Classroom;
}

export type ClassroomFormTypes = 'edit' | 'create';

export type IClassroomFormValues = {
  selectedLesson: Lesson | null;
  title: string;
  notes?: string;
  selectedStudent?: User | null;
};

export type IClassroomFormValidationSchema =
  typeof classroomFormValidationSchema;

export interface IClassroomFormProps {
  loading: boolean;
  type: ClassroomFormTypes;
  error: ApolloError | undefined;
  initialValues: IClassroomFormValues;
  onSubmit: (values: IClassroomFormValues) => void;
  validationSchema: IClassroomFormValidationSchema;
}

export interface GetOptionsAdditional {
  limit: number;
  offset: number;
}
