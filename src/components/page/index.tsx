import React, { useState } from 'react';

import Navbar from '../navbar';
import {
  PageContainer,
  PageContent,
  PageFooter,
  PageHeader,
  ShowIcon,
} from './styles';

const PageLayout: React.FC = ({ children }) => {
  const [isNavbarShown, setIsNavbarShown] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarShown((prev) => !prev);
  };

  return (
    <PageContainer>
      <Navbar isShown={isNavbarShown} onToggle={toggleNavbar} />
      <PageHeader onClick={toggleNavbar}>
        <ShowIcon />
        Header
      </PageHeader>
      <PageContent>{children}</PageContent>
      <PageFooter>Footer</PageFooter>
    </PageContainer>
  );
};

export default PageLayout;
