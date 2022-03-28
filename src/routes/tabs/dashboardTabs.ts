import { lazy } from 'react';

import { pathKeys } from '../pathKeys';
import { DashboardTabs } from '../types';

const HomeworkTab = lazy(() => import('../../pages/dashboard/tabs/homework'));
const PaymentsTab = lazy(() => import('../../pages/dashboard/tabs/payment'));

const UserTab = lazy(() => import('../../pages/dashboard/tabs/user'));
const LessonTab = lazy(() => import('../../pages/dashboard/tabs/lesson'));

const ClassroomsTab = lazy(
  () => import('../../pages/dashboard/tabs/classroom')
);

export const dashboardTabs: DashboardTabs = {
  USER: [
    {
      path: pathKeys.tabs.DASHBOARD_STUDENT_TABS.HOMEWORK,
      Component: HomeworkTab,
    },
    {
      path: pathKeys.tabs.DASHBOARD_STUDENT_TABS.PAYMENT,
      Component: PaymentsTab,
    },
    {
      path: pathKeys.tabs.DASHBOARD_STUDENT_TABS.CLASSROOM,
      Component: ClassroomsTab,
    },
  ],
  TEACHER: [
    {
      path: pathKeys.tabs.DASHBOARD_TEACHER_TABS.USER,
      Component: UserTab,
    },
    {
      path: pathKeys.tabs.DASHBOARD_TEACHER_TABS.LESSON,
      Component: LessonTab,
    },
    {
      path: pathKeys.tabs.DASHBOARD_STUDENT_TABS.CLASSROOM,
      Component: ClassroomsTab,
    },
  ],
  ADMIN: [],
};
