import { useQuery } from '@apollo/client';
import {
  GetSingleClassroomQueryVariables,
  Query,
} from 'apollo/graphql/generated.types';
import { GET_SINGLE_CLASSROOM } from 'apollo/graphql/queries/classroom/getSingleClassroom';
import Notes from 'components/notes';
import PageLayout from 'components/page';
import FourOFour from 'pages/fourOfour';
import React from 'react';
import { useParams } from 'react-router-dom';

import ClassroomPart from './classroomPart';
import { ClassroomSocketContextProvider } from './socket';
import { ClassroomContainer } from './styles';

const ClassroomPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useQuery<
    Pick<Query, 'getSingleClassroom'>,
    GetSingleClassroomQueryVariables
  >(GET_SINGLE_CLASSROOM, {
    variables: {
      id: id ?? '',
    },
  });

  return !loading && !data ? (
    <FourOFour />
  ) : (
    <ClassroomSocketContextProvider>
      <PageLayout title='Classroom'>
        <ClassroomContainer>
          {data?.getSingleClassroom.lesson.pages.map((page) => {
            return <ClassroomPart key={page.id} page={page} />;
          })}
          <Notes />
        </ClassroomContainer>
      </PageLayout>
    </ClassroomSocketContextProvider>
  );
};

export default ClassroomPage;
