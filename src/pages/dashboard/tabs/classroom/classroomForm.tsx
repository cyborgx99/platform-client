import { useLazyQuery } from '@apollo/client';
import { GET_USERS } from 'apollo/graphql';
import {
  GetLessonsQueryVariables,
  GetUsersQueryVariables,
  Lesson,
  Query,
  User,
} from 'apollo/graphql/generated.types';
import { GET_LESSONS } from 'apollo/graphql/queries/lesson/getLessons';
import ApolloErrorMessage from 'components/apolloErrorMessage';
import ButtonComponent from 'components/button';
import FormInput from 'components/input';
import FormSelectAsync from 'components/select/formSelect';
import { GetOptionsFunction } from 'components/select/types';
import { Formik, FormikProps } from 'formik';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledClassroomForm } from './styles';
import {
  GetOptionsAdditional,
  IClassroomFormProps,
  IClassroomFormValues,
} from './types';
import {
  getLessonOptionLabel,
  getLessonOptionValue,
  getOptionsAdditional,
  getUserOptionLabel,
  getUserOptionValue,
} from './utils';

const ClassroomForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  loading,
  error,
  type,
}: IClassroomFormProps) => {
  const { t } = useTranslation();
  const ref = useRef<FormikProps<IClassroomFormValues>>(null);
  const textData = {
    create: {
      message: t('pages.create.classroomCreated'),
      button: t('pages.create.create'),
    },
    edit: {
      message: t('pages.create.classroomUpdated'),
      button: t('pages.create.update'),
    },
  };
  const handleSubmit = (values: IClassroomFormValues) => {
    console.log('323', values);
    onSubmit(values);
  };

  const [lessonsQuery] =
    useLazyQuery<Pick<Query, 'getLessons'>, GetLessonsQueryVariables>(
      GET_LESSONS
    );

  const [usersQuery] =
    useLazyQuery<Pick<Query, 'getUsers'>, GetUsersQueryVariables>(GET_USERS);

  const getLessonsOptions: GetOptionsFunction<Lesson, GetOptionsAdditional> =
    async (search, options, additional) => {
      const defaultReturn = {
        options: [],
        hasMore: false,
        additional: additional,
      };

      if (!additional) return defaultReturn;

      const { data } = await lessonsQuery({
        variables: {
          limit: additional.limit,
          offset: additional.offset,
          search,
        },
      });

      if (!data) return defaultReturn;

      return {
        options: data.getLessons.data,
        hasMore: data.getLessons.hasMore,
        additional: {
          limit: additional.limit,
          offset: additional.offset + data.getLessons.data.length,
        },
      };
    };

  const getUsersOptions: GetOptionsFunction<User, GetOptionsAdditional> =
    async (search, options, additional) => {
      const defaultReturn = {
        options: [],
        hasMore: false,
        additional: additional,
      };

      if (!additional) return defaultReturn;

      const { data } = await usersQuery({
        variables: {
          limit: additional.limit,
          offset: additional.offset,
          search,
        },
      });

      if (!data) return defaultReturn;

      return {
        options: data.getUsers.data,
        hasMore: data.getUsers.hasMore,
        additional: {
          limit: additional.limit,
          offset: additional.offset + data.getUsers.data.length,
        },
      };
    };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      enableReinitialize
      innerRef={ref}
      validationSchema={validationSchema}>
      <StyledClassroomForm>
        <FormSelectAsync
          getOptionLabel={getLessonOptionLabel}
          getOptionValue={getLessonOptionValue}
          getOptions={getLessonsOptions}
          additional={getOptionsAdditional}
          isClearable
          name='selectedLesson'
          label={t('pages.create.selectLesson')}
        />
        <FormSelectAsync
          getOptionLabel={getUserOptionLabel}
          getOptionValue={getUserOptionValue}
          getOptions={getUsersOptions}
          additional={getOptionsAdditional}
          isClearable
          name='selectedStudent'
          label={t('pages.create.selectUser')}
        />
        <FormInput label={t('pages.create.title')} name='title' type='text' />
        <ButtonComponent
          width='full'
          isLoading={loading}
          type='submit'
          variant='primary'>
          {textData[type].button}
        </ButtonComponent>
        <ApolloErrorMessage error={error} />
      </StyledClassroomForm>
    </Formik>
  );
};

export default ClassroomForm;
