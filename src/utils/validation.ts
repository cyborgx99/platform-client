import * as yup from 'yup';

enum ErrorMessageKeys {
  required = 'required',
  min = 'min',
  max = 'max',
  email = 'email',
  password = 'password',
  confirmPassword = 'confirmPassword',
  fileTooLarge = 'fileTooLarge',
  imageUrl = 'imageUrl',
}

export const stringRequired = yup.string().required(ErrorMessageKeys.required);

export const stringRequiredMinMax = yup
  .string()
  .required(ErrorMessageKeys.required)
  .min(2, ErrorMessageKeys.min)
  .max(32, ErrorMessageKeys.max);

export const stringRequiredEmail = yup
  .string()
  .required(ErrorMessageKeys.required)
  .email(ErrorMessageKeys.email);

export const stringRequiredMaxPassword = yup
  .string()
  .required(ErrorMessageKeys.required)
  .max(32, ErrorMessageKeys.max)
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/g,
    ErrorMessageKeys.password
  );

export const stringRequiredConfirmPassword = yup
  .string()
  .required(ErrorMessageKeys.required)
  .oneOf([yup.ref('password'), null], ErrorMessageKeys.confirmPassword);

export const mixedRequiredFileSize = yup
  .mixed()
  .required(ErrorMessageKeys.required)
  .test('fileSize', ErrorMessageKeys.fileTooLarge, (value: File) => {
    return value?.size <= 1300000;
  });

export const stringRequiredImageUrl = yup
  .string()
  .required(ErrorMessageKeys.required)
  .test('checkImageUrl', ErrorMessageKeys.imageUrl, function (value) {
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
