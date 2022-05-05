import { CssStyleProp } from 'styles/types';

export interface IIconComponentProps<T> {
  Svg: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  iconStyle?: CssStyleProp;
  iconContainerStyle?: CssStyleProp;
  title: string;
  data?: T;
  onClick?: (data?: T) => void;
}
