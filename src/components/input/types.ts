export interface IFormInputProps {
  label: string;
  name: string;
  type: 'date' | 'datetime-local' | 'email' | 'password' | 'text' | 'url';
  imagePreview?: boolean;
}

export interface IRegularInputProps {
  value: string | number;
  title: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Svg?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}
