export interface ICreateImageFormValues {
  url?: string;
  file?: File | null;
  title: string;
}

export type CreateImageFormOption = 'url' | 'upload';

export type ImageInput = Record<CreateImageFormOption, JSX.Element>;

export type CreateImageFormOptions = CreateImageFormOption[];
