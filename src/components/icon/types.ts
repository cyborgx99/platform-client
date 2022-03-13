import { CssStyleProp } from 'styles/types';

export interface IIconComponentProps {
  Svg: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  iconStyle?: CssStyleProp;
  iconContainerStyle?: CssStyleProp;
  title: string;
  onClick: () => void;
}
