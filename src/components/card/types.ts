export interface ICardComponentProps<T> {
  data: T;
  imageUrl?: string;
  cardTitle: string;
  onLeftClick?: (data: T) => void;
  onRightClick?: (data: T) => void;
  children?: React.ReactNode;
}
