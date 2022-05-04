export interface IPageHeaderInterface {
  onToggleNavbar: () => void;
}
export interface HtmlHeadTagsProps {
  title: string | null;
}
export interface IPageProps {
  title: string;
  children?: React.ReactNode;
}
