import { LessonSentenceType } from 'apollo/graphql/generated.types';
import React, { createContext, Reducer, useContext, useReducer } from 'react';

import { lessonContentReducer } from '../reducer';
import {
  ICreateLessonContextProviderProps,
  ILessonContentContextValues,
  LessonContentAction,
} from '../tabs/content/types';

const initialValues = {
  toggleValue: LessonSentenceType.Gap,
  sentences: [],
  dispatch: () => {
    throw new Error('Called dispatch without provider');
  },
};

const CreateLessonContentContext =
  createContext<ILessonContentContextValues>(initialValues);

export const CreateLessonContentProvider = ({
  children,
}: ICreateLessonContextProviderProps) => {
  const [state, dispatch] = useReducer<
    Reducer<ILessonContentContextValues, LessonContentAction>
  >(lessonContentReducer, initialValues);

  const value: ILessonContentContextValues = {
    toggleValue: state.toggleValue,
    sentences: state.sentences,
    dispatch,
  };

  return (
    <CreateLessonContentContext.Provider value={value}>
      {children}
    </CreateLessonContentContext.Provider>
  );
};

export const useCreateLesson = () => useContext(CreateLessonContentContext);
