import { useLazyQuery } from '@apollo/client';
import {
  GetLessonsQueryVariables,
  Lesson,
  Query,
} from 'apollo/graphql/generated.types';
import { GET_LESSONS } from 'apollo/graphql/queries/lesson/getLessons';
import FormSelectAsync from 'components/select/formSelect';
import { GetOptionsFunction } from 'components/select/types';
import { Formik } from 'formik';
import React from 'react';
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
} from './utils';

const ClassroomForm = ({
  initialValues,
  validationSchema,
  onSubmit,
}: IClassroomFormProps) => {
  const { t } = useTranslation();
  const handleSubmit = (values: IClassroomFormValues) => {
    onSubmit(values);
  };

  const [lessonsQuery] =
    useLazyQuery<Pick<Query, 'getLessons'>, GetLessonsQueryVariables>(
      GET_LESSONS
    );

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

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}>
      <StyledClassroomForm>
        <FormSelectAsync
          getOptionLabel={getLessonOptionLabel}
          getOptionValue={getLessonOptionValue}
          getOptions={getLessonsOptions}
          additional={getOptionsAdditional}
          isClearable
          name='selectedImage'
          label={t('pages.create.selectLesson')}
        />
      </StyledClassroomForm>
    </Formik>
  );
};

export default ClassroomForm;
