import 'react-quill/dist/quill.snow.css';

import Notes from 'components/notes';
import PageLayout from 'components/page';
import React from 'react';

const HomePage = () => {
  return (
    <PageLayout title='Home'>
      <Notes />
    </PageLayout>
  );
};

export default HomePage;
