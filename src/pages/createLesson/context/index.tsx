import { LessonSentenceType } from 'apollo/graphql/generated.types';
import React, { createContext, Reducer, useContext, useReducer } from 'react';

import { lessonContentReducer } from '../reducer';
import { LessonContentAction } from '../reducer/types';
import {} from '../tabs/content/types';
import {
  ICreateLessonContextProviderProps,
  ILessonContentContextValues,
  ILessonContentReducerState,
} from './types';

const initialContextValues: ILessonContentContextValues = {
  toggleValue: LessonSentenceType.Gap,
  sentences: [],
  dispatch: () => {
    throw new Error('Called dispatch without provider');
  },
};

const CreateLessonContentContext =
  createContext<ILessonContentContextValues>(initialContextValues);

export const CreateLessonContentProvider = ({
  children,
  lessonContent,
}: ICreateLessonContextProviderProps) => {
  const initialReducerValues: ILessonContentReducerState = {
    toggleValue: LessonSentenceType.Gap,
    sentences: lessonContent?.sentences ?? [],
  };

  const [state, dispatch] = useReducer<
    Reducer<ILessonContentReducerState, LessonContentAction>
  >(lessonContentReducer, initialReducerValues);

  const providerValue: ILessonContentContextValues = {
    toggleValue: state.toggleValue,
    sentences: state.sentences,
    lessonContent,
    dispatch,
  };

  return (
    <CreateLessonContentContext.Provider value={providerValue}>
      {children}
    </CreateLessonContentContext.Provider>
  );
};

export const useCreateLesson = () => useContext(CreateLessonContentContext);
