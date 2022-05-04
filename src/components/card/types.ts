export interface ICardComponentProps<T> {
  data: T;
  imageUrl?: string;
  cardTitle: string;
  isSelected?: boolean;
  onCardClick?: (data: T) => void;
  onLeftClick?: (data: T) => void;
  onRightClick?: (data: T) => void;
  children?: React.ReactNode;
}
