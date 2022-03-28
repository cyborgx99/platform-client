import { Dispatch, SetStateAction } from 'react';

export interface IToggleButtonProps<T extends string> {
  onSetValue: Dispatch<SetStateAction<T>>;
  currentValue: T;
  options: T[];
}

export interface IToggleButtonPartProps<T extends string> {
  onSetValue: (value: T) => void;
  currentValue: T;
  value: T;
}
