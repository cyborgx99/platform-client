export interface IModalProps<Params> {
  isOpen: boolean;
  closeModal: () => void;
  params: Params | null;
  renderContent: ({ params }: { params: Params }) => React.ReactNode;
}
