import { Dispatch, SetStateAction } from 'react';

export interface IToggleButtonProps {
  onSetValue: Dispatch<SetStateAction<string>>;
  currentValue: string;
  options: string[];
}

export interface IToggleButtonPartProps {
  onSetValue: (value: string) => void;
  currentValue: string;
  value: string;
}
