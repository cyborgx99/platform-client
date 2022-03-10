import { i18n as i18nType } from 'i18next';
import { Languages } from 'translations/types';

export const setCurrentLanguage = async (
  language: Languages,
  i18n: i18nType
) => {
  await i18n.changeLanguage(language);
};

export const switchLanguage = (language: Languages) => {
  switch (language) {
    case 'ru':
      return 'en';
    case 'en':
      return 'ua';
    case 'ua':
      return 'ru';
    default:
      return 'en';
  }
};
