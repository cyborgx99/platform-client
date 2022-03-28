export interface ICardComponentProps {
  imageUrl: string;
  imageAlt: string;
  cardTitle: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}
