import { LessonSentenceType } from 'apollo/graphql/generated.types';
import ToggleButton from 'components/toggleButton';
import { useCreateLesson } from 'pages/createLesson/context';
import React from 'react';

import SentenceDisplay from './display';
import GapForm from './forms/gapForm';
import MultiForm from './forms/multiForm';
import ScrambleForm from './forms/scrambleForm';
import TextForm from './forms/textForm';
import { LessonContentActionTypes } from './types';

const options = Object.values(LessonSentenceType);

const CreateContent = () => {
  const { toggleValue, sentences, dispatch } = useCreateLesson();

  const forms = {
    Gap: <GapForm />,
    Multi: <MultiForm />,
    Scramble: <ScrambleForm />,
    Text: <TextForm />,
    Title: <TextForm />,
  };

  const handleToggle = (value: LessonSentenceType) => {
    dispatch({
      type: LessonContentActionTypes.CHANGE_LESSON_SENTENCE_TYPE,
      payload: value,
    });
  };

  return (
    <>
      <ToggleButton<LessonSentenceType>
        options={options}
        currentValue={toggleValue}
        onSetValue={handleToggle}
      />
      {forms[toggleValue]}
      {sentences.map((sentence, i) => (
        <>
          <SentenceDisplay index={i} key={sentence.id} sentence={sentence} />
        </>
      ))}
    </>
  );
};

export default CreateContent;
