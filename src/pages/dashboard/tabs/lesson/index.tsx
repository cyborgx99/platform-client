import { useMutation } from '@apollo/client';
import {
  Mutation,
  MutationUploadFileArgs,
} from 'apollo/graphql/generated.types';
import { UPLOAD_FILE } from 'apollo/graphql/mutations/uploadFile';
import React from 'react';

const LessonTab = () => {
  const [upload] =
    useMutation<Pick<Mutation, 'uploadFile'>, MutationUploadFileArgs>(
      UPLOAD_FILE
    );

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    await upload({
      variables: {
        file,
      },
    });
  };

  return (
    <div>
      <input
        type='file'
        accept='image/png, image/gif, image/jpeg'
        onChange={handleChange}
      />
    </div>
  );
};

export default LessonTab;
