import { ApolloError } from '@apollo/client';
import { SchemaOf } from 'yup';

export interface ICreateClassroomProps {
  onCloseModal: () => void;
}

export type ClassroomFormTypes = 'edit' | 'create';

export type IClassroomFormValues = {
  lessonId: string;
  title: string;
  notes?: string;
  studentId?: string;
};

export type IClassroomFormValidationSchema = SchemaOf<IClassroomFormValues>;

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
