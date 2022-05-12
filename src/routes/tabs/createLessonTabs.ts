import { lazy } from 'react';
import { pathKeys } from 'routes/pathKeys';
import { IRouteInterface } from 'routes/types';

const ImageTab = lazy(() => import('../../pages/create/tabs/image'));
const ContentTab = lazy(() => import('../../pages/create/tabs/content'));
const LessonTab = lazy(() => import('../../pages/create/tabs/lesson'));

export const createLessonTabs: IRouteInterface[] = [
  {
    path: pathKeys.tabs.CREATE_TABS.IMAGE,
    Component: ImageTab,
  },
  {
    path: pathKeys.tabs.CREATE_TABS.CONTENT,
    Component: ContentTab,
  },
  {
    path: pathKeys.tabs.CREATE_TABS.LESSON,
    Component: LessonTab,
  },
];
