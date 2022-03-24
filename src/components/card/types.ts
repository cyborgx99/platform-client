export interface ICardComponentProps {
  imageUrl: string;
  imageAlt: string;
  cardTitle: string;
  children: React.ReactNode;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}
