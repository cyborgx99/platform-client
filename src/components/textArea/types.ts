export interface ITextareaProps {
  value: string;
  title: string;
  minRows?: number;
  maxRows?: number;
  placeholder?: string;
  hasError?: boolean;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
