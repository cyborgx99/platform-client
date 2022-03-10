import { ReactComponent as Show } from 'assets/icons/dial.svg';
import { ReactComponent as Ru } from 'assets/icons/ru.svg';
import { ReactComponent as Ua } from 'assets/icons/ua.svg';
import { ReactComponent as En } from 'assets/icons/uk.svg';
import IconComponent from 'components/icon';
import { changeLanguage } from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageFlags, Languages } from 'translations/types';
import { switchLanguage } from 'utils/language';

import Navbar from '../navbar';
import {
  PageContainer,
  PageContent,
  PageContentScrollable,
  PageFooter,
  PageHeader,
} from './styles';

const flagIcon: LanguageFlags = {
  ru: Ru,
  ua: Ua,
  en: En,
};

const PageLayout: React.FC = ({ children }) => {
  const [isNavbarShown, setIsNavbarShown] = useState(false);
  const { i18n } = useTranslation();

  const toggleNavbar = () => {
    setIsNavbarShown((prev) => !prev);
  };

  const handleLanguageChange = async () => {
    await changeLanguage(switchLanguage(i18n.language as Languages));
  };

  return (
    <PageContainer>
      <Navbar isShown={isNavbarShown} onToggle={toggleNavbar} />
      <PageHeader>
        <IconComponent title='Show navbar' Svg={Show} onClick={toggleNavbar} />
        <IconComponent
          title='Show navbar'
          Svg={flagIcon[i18n.language as Languages]}
          onClick={handleLanguageChange}
        />
      </PageHeader>
      <PageContent>
        <PageContentScrollable>{children}</PageContentScrollable>
      </PageContent>
      <PageFooter>Footer</PageFooter>
    </PageContainer>
  );
};

export default PageLayout;
