import { FlattenSimpleInterpolation } from 'styled-components';

export interface IIconComponentProps {
  Svg: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  iconStyle?: FlattenSimpleInterpolation;
  iconContainerStyle?: FlattenSimpleInterpolation;
  title: string;
  onClick: () => void;
}
