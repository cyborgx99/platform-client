export type ResultType = 'success' | 'error';

export type ResultIcon = Record<ResultType, JSX.Element>;

export type ResultTitle = Record<ResultType, string>;

export interface ResultWrapperProps {
  message: string;
  onContinue: () => void;
  children?: React.ReactNode;
  type: ResultType;
  isShown: boolean;
}
