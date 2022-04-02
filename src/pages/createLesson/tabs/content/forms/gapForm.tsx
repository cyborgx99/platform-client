import {
  LessonContentSentencePart,
  PartType,
} from 'apollo/graphql/generated.types';
import { useCreateLesson } from 'pages/createLesson/context';
import React, { useState } from 'react';
import { HeaderThreeBase } from 'styles/globalStyles';

import { StyledTextArea } from '../styles';
import { LessonContentActionTypes } from '../types';
import GapFormSpan from './gapFormSpan';

const GapForm = () => {
  const [value, setValue] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const { dispatch, currentSentence } = useCreateLesson();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    dispatch({
      type: LessonContentActionTypes.CREATE_SENTENCE,
      payload: value,
    });
    setIsEditing((prev) => !prev);
  };

  const handleSpanClick = (part: LessonContentSentencePart) => {
    let newType = PartType.Regular;
    if (part.partType === PartType.Regular) {
      newType = PartType.Gap;
    }

    dispatch({
      type: LessonContentActionTypes.CHANGE_TYPE,
      payload: { id: part.id, newType },
    });
  };

  return (
    <div>
      <>
        <HeaderThreeBase>Enter a sentence</HeaderThreeBase>
        {isEditing ? (
          <StyledTextArea
            minRows={2}
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
        ) : (
          currentSentence?.sentence.map((part) => (
            <GapFormSpan onClick={handleSpanClick} key={part.id} data={part} />
          ))
        )}
      </>
      <button onClick={handleClick}>Select a gap</button>
    </div>
  );
};

export default GapForm;
