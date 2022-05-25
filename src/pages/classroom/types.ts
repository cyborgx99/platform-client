import {
  LessonContent,
  LessonPageObject,
} from 'apollo/graphql/generated.types';

export interface IClassroomPageProps {
  page: LessonPageObject;
}

export interface IQuizProps {
  lessonContent: LessonContent;
}
