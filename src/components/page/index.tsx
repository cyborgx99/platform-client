import { ReactComponent as Show } from 'assets/icons/dial.svg';
import IconComponent from 'components/icon';
import React, { useState } from 'react';

import Navbar from '../navbar';
import {
  PageContainer,
  PageContent,
  PageContentScrollable,
  PageFooter,
  PageHeader,
} from './styles';

const PageLayout: React.FC = ({ children }) => {
  const [isNavbarShown, setIsNavbarShown] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarShown((prev) => !prev);
  };

  return (
    <PageContainer>
      <Navbar isShown={isNavbarShown} onToggle={toggleNavbar} />
      <PageHeader>
        <IconComponent title='Show navbar' Svg={Show} onClick={toggleNavbar} />
      </PageHeader>
      <PageContent>
        <PageContentScrollable>{children}</PageContentScrollable>
      </PageContent>
      <PageFooter>Footer</PageFooter>
    </PageContainer>
  );
};

export default PageLayout;
