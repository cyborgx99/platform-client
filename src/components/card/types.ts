import { CssStyleProp } from 'styles/types';

export interface ICardComponentProps<T> {
  data: T;
  imageUrl?: string;
  cardTitle: string;
  isSelected?: boolean;
  cardContainerStyles?: CssStyleProp;
  onCardClick?: (data: T) => void;
  onLeftClick?: (data: T) => void;
  onRightClick?: (data: T) => void;
  children?: React.ReactNode;
}
