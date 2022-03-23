import React, { useState } from 'react';
import ReactQuill from 'react-quill';

const Notes = () => {
  const [text, setText] = useState('');
  console.log(text);
  const handleChange = (content: string) => {
    setText(content);
  };
  return <ReactQuill value={text} onChange={handleChange} />;
};

export default Notes;
