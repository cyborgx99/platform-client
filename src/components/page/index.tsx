import React from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout: React.FC = () => {
  return (
    <div>
      Page Layout
      <Outlet />
    </div>
  );
};

export default PageLayout;
