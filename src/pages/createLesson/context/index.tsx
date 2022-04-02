import {
  LessonContentSentence,
  LessonSentenceType,
} from 'apollo/graphql/generated.types';
import React, {
  createContext,
  Reducer,
  useContext,
  useReducer,
  useState,
} from 'react';

import { lessonContentReducer } from '../reducer';
import {
  ICreateLessonContextProviderProps,
  ILessonContentContextValues,
  LessonContentAction,
} from '../tabs/content/types';

const initialValues = {
  toggleValue: LessonSentenceType.Gap,
  setToggleValue: () => {
    throw new Error('Called setToggleValue without provider');
  },
  currentSentence: {} as LessonContentSentence,
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
  const [toggleValue, setToggleValue] = useState<LessonSentenceType>(
    LessonSentenceType.Gap
  );
  const [state, dispatch] = useReducer<
    Reducer<ILessonContentContextValues, LessonContentAction>
  >(lessonContentReducer, initialValues);

  const value: ILessonContentContextValues = {
    toggleValue,
    setToggleValue,
    sentences: state.sentences,
    currentSentence: state.currentSentence,
    dispatch,
  };

  return (
    <CreateLessonContentContext.Provider value={value}>
      {children}
    </CreateLessonContentContext.Provider>
  );
};

export const useCreateLesson = () => useContext(CreateLessonContentContext);
