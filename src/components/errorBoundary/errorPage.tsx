import { ReactComponent as Ru } from 'assets/icons/ru.svg';
import { ReactComponent as Ua } from 'assets/icons/ua.svg';
import { ReactComponent as En } from 'assets/icons/uk.svg';
import ButtonComponent from 'components/button';
import IconComponent from 'components/icon';
import { changeLanguage } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderTwoBase, ParagraphBase } from 'styles/globalStyles';
import { LanguageFlags, Languages } from 'translations/types';
import { switchLanguage } from 'utils/language';

import { PageErrorContent, PageErrorWrapper } from './styles';
import { ErrorPageProps } from './types';

const flagIcon: LanguageFlags = {
  ru: Ru,
  ua: Ua,
  en: En,
};

const PageError = ({ reload }: ErrorPageProps) => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = async () => {
    await changeLanguage(switchLanguage(i18n.language as Languages));
  };
  return (
    <PageErrorWrapper>
      <PageErrorContent>
        <IconComponent
          title='Change language'
          Svg={flagIcon[i18n.language as Languages]}
          onClick={handleLanguageChange}
        />
        <HeaderTwoBase>{t('pages.errorBoundary.header')} </HeaderTwoBase>
        <ParagraphBase $textType='normalText' $textWeight='medium'>
          {t('pages.errorBoundary.explanation')}
        </ParagraphBase>
        <ButtonComponent
          width='full'
          isLoading={false}
          type='button'
          variant='primary'
          onClick={reload}>
          {t('pages.errorBoundary.reloadButton')}
        </ButtonComponent>
      </PageErrorContent>
    </PageErrorWrapper>
  );
};

export default PageError;
