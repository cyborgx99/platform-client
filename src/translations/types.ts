export type Languages = 'ru' | 'en' | 'ua';

export type LanguageFlags = {
  [key in Languages]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};
