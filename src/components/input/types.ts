export interface IFormInputProps {
  label: string;
  name: string;
  type: 'date' | 'datetime-local' | 'email' | 'password' | 'text' | 'url';
  imagePreview?: boolean;
}
