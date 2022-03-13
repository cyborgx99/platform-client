import { useAuth } from 'auth';
import React, { useState } from 'react';

import Navbar from '../navbar';
import PageHeader from './pageHeader';
import {
  PageContainer,
  PageContent,
  PageContentScrollable,
  PageFooter,
} from './styles';

const PageLayout: React.FC = ({ children }) => {
  const [isNavbarShown, setIsNavbarShown] = useState(false);
  const { user } = useAuth();
  const year = new Date().getFullYear();
  const toggleNavbar = () => {
    setIsNavbarShown((prev) => !prev);
  };

  return (
    <PageContainer>
      <Navbar
        userRole={user?.role}
        isShown={isNavbarShown}
        onToggle={toggleNavbar}
      />
      <PageHeader onToggleNavbar={toggleNavbar} />
      <PageContent>
        <PageContentScrollable>{children}</PageContentScrollable>
      </PageContent>
      <PageFooter>© {year} All rights reserved. (Apparently)</PageFooter>
    </PageContainer>
  );
};

export default PageLayout;
