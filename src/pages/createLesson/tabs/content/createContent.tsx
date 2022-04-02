import { LessonSentenceType } from 'apollo/graphql/generated.types';
import ToggleButton from 'components/toggleButton';
import { useCreateLesson } from 'pages/createLesson/context';
import React from 'react';

import GapForm from './forms/gapForm';

const options = Object.values(LessonSentenceType);

const CreateContent = () => {
  const { toggleValue, setToggleValue } = useCreateLesson();
  return (
    <>
      <ToggleButton<LessonSentenceType>
        options={options}
        currentValue={toggleValue}
        onSetValue={setToggleValue}
      />
      <GapForm />
    </>
  );
};

export default CreateContent;
