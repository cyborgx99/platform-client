import { useAuth } from 'auth';
import ErrorBoundary from 'components/errorBoundary';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from '../navbar';
import PageHeader from './pageHeader';
import {
  FooterText,
  PageContainer,
  PageContent,
  PageContentScrollable,
  PageFooter,
} from './styles';

const PageLayout: React.FC = ({ children }) => {
  const [isNavbarShown, setIsNavbarShown] = useState(false);
  const { user } = useAuth();
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const toggleNavbar = () => {
    setIsNavbarShown((prev) => !prev);
  };

  return (
    <ErrorBoundary>
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
        <PageFooter>
          <FooterText $textType='normalText' $textWeight='regular'>
            © {year} {t('pages.auth.footer')}
          </FooterText>
        </PageFooter>
      </PageContainer>
    </ErrorBoundary>
  );
};

export default PageLayout;
