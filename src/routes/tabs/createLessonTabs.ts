import { lazy } from 'react';
import { pathKeys } from 'routes/pathKeys';
import { IRouteInterface } from 'routes/types';

const ImageTab = lazy(() => import('../../pages/createLesson/tabs/image'));
const ContentTab = lazy(() => import('../../pages/createLesson/tabs/content'));
const LessonTab = lazy(() => import('../../pages/createLesson/tabs/lesson'));

export const createLessonTabs: IRouteInterface[] = [
  {
    path: pathKeys.tabs.CREATE_LESSON_TABS.IMAGE,
    Component: ImageTab,
  },
  {
    path: pathKeys.tabs.CREATE_LESSON_TABS.CONTENT,
    Component: ContentTab,
  },
  {
    path: pathKeys.tabs.CREATE_LESSON_TABS.LESSON,
    Component: LessonTab,
  },
];
