import { useAuth } from 'auth';
import ErrorBoundary from 'components/errorBoundary';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from '../navbar';
import HtmlHeadTags from './htmlHeadTags';
import PageHeader from './pageHeader';
import {
  FooterText,
  PageContainer,
  PageContent,
  PageContentScrollable,
  PageFooter,
} from './styles';
import { IPageProps } from './types';

const PageLayout: React.FC<IPageProps> = ({ children, title }) => {
  const [isNavbarShown, setIsNavbarShown] = useState(false);
  const { user } = useAuth();
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const toggleNavbar = () => {
    setIsNavbarShown((prev) => !prev);
  };

  return (
    <>
      <HtmlHeadTags title={title} />
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
    </>
  );
};

export default PageLayout;
