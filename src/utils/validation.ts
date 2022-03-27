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

export const mixedRequiredFileSize = yup
  .mixed()
  .required('required')
  .test('fileSize', 'fileLarge', (value) => {
    if (!value.length) return true; // attachment is optional
    return value[0].size <= 2000000;
  });

export const requiredIfAnotherFieldIsMissing = (fieldName: string) => {
  return yup.string().when(fieldName, {
    is: (field: string) => field.length === 0,
    then: yup.string().required('required'),
  });
};

export const stringRequiredImageUrl = yup
  .string()
  .required()
  .test('checkImageUrl', 'url', function (value) {
    return new Promise(function (resolve) {
      const timeout = 5000;
      // eslint-disable-next-line prefer-const
      let timer: NodeJS.Timeout;
      const img = new Image();
      img.onerror = img.onabort = function () {
        clearTimeout(timer);
        resolve(false);
      };
      img.onload = function () {
        clearTimeout(timer);
        resolve(true);
      };
      timer = setTimeout(function () {
        // reset .src to invalid URL so it stops previous
        // loading, but doesn't trigger new load
        img.src = '//!!!!/test.jpg';
        resolve(false);
      }, timeout);
      img.src = value ?? '';
    });
  });
