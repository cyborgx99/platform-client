import PageLayout from 'components/page';
import Spinner from 'components/spinner';
import TabNavigator from 'components/tabNabigator';
import React, { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { pathKeys } from 'routes/pathKeys';

import { CreateLessonContainer, CreateLessonContent } from './styles';

const CreateLessonPage = () => {
  const location = useLocation();

  if (location.pathname === '/create') {
    return <Navigate to={pathKeys.tabs.CREATE_TABS.IMAGE} replace />;
  }

  return (
    <PageLayout title='Create Lesson'>
      <CreateLessonContainer>
        <TabNavigator tabs={pathKeys.tabs.CREATE_TABS} />
        <CreateLessonContent>
          <Suspense fallback={<Spinner type='animated' />}>
            <Outlet />
          </Suspense>
        </CreateLessonContent>
      </CreateLessonContainer>
    </PageLayout>
  );
};

export default CreateLessonPage;
