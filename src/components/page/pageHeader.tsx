import { useApolloClient, useMutation } from '@apollo/client';
import { LOGOUT } from 'apollo/graphql';
import { Mutation } from 'apollo/graphql/generated.types';
import { ReactComponent as Show } from 'assets/icons/dial.svg';
import { ReactComponent as Ru } from 'assets/icons/ru.svg';
import { ReactComponent as Ua } from 'assets/icons/ua.svg';
import { ReactComponent as En } from 'assets/icons/uk.svg';
import { useAuth } from 'auth';
import ButtonComponent from 'components/button';
import IconComponent from 'components/icon';
import { changeLanguage } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageFlags, Languages } from 'translations/types';
import { switchLanguage } from 'utils/language';

import { showIconStyles, StyledPageHeader } from './styles';
import { IPageHeaderInterface } from './types';

const flagIcon: LanguageFlags = {
  ru: Ru,
  ua: Ua,
  en: En,
};

const PageHeader = ({ onToggleNavbar }: IPageHeaderInterface) => {
  const { i18n } = useTranslation();
  const { user } = useAuth();
  const { t } = useTranslation();
  const apolloClient = useApolloClient();
  const [logout, { loading }] = useMutation<Pick<Mutation, 'logout'>>(LOGOUT, {
    onCompleted: async () => {
      await apolloClient.cache.reset();
      await apolloClient.resetStore();
    },
  });

  const handleLogout = async () => {
    await logout();
  };

  const handleLanguageChange = async () => {
    await changeLanguage(switchLanguage(i18n.language as Languages));
  };

  return (
    <StyledPageHeader>
      <IconComponent
        iconContainerStyle={showIconStyles}
        title='Show navbar'
        Svg={Show}
        onClick={onToggleNavbar}
      />
      <IconComponent
        title='Change language'
        Svg={flagIcon[i18n.language as Languages]}
        onClick={handleLanguageChange}
      />
      {user && (
        <ButtonComponent
          onClick={handleLogout}
          type='button'
          variant='primary'
          isLoading={loading}>
          {t('pages.auth.logoutButton')}
        </ButtonComponent>
      )}
    </StyledPageHeader>
  );
};

export default PageHeader;
