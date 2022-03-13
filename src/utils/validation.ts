import * as yup from 'yup';

export const stringRequiredMinMax = yup
  .string()
  .required('required')
  .min(2, 'min')
  .max(32, 'max');

export const stringRequiredEmail = yup
  .string()
  .required('required')
  .email('email');

export const stringRequiredMaxPassword = yup
  .string()
  .required('required')
  .max(32, 'max')
  .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/g, 'password');

export const stringRequiredConfirmPassword = yup
  .string()
  .required('required')
  .oneOf([yup.ref('password'), null], 'confirmPassword');
