import * as yup from 'yup';

export type ConfigType = yup.SchemaOf<
  {
    REACT_APP_APOLLO_SERVER_URL: string;
    REACT_APP_APOLLO_SERVER_URL_SUBSCRIPTION: string;
  },
  never
>;

export const envConfig: ConfigType = yup.object({
  REACT_APP_APOLLO_SERVER_URL: yup.string().required(),
  REACT_APP_APOLLO_SERVER_URL_SUBSCRIPTION: yup.string().required(),
});

export const envConfigValidator = async (envConfig: ConfigType) => {
  const isValid = await envConfig.isValid({
    REACT_APP_APOLLO_SERVER_URL: process.env.REACT_APP_APOLLO_SERVER_URL,
    REACT_APP_APOLLO_SERVER_URL_SUBSCRIPTION:
      process.env.REACT_APP_APOLLO_SERVER_URL_SUBSCRIPTION,
  });
  if (!isValid) {
    throw new Error('ENVIRONMENT VARIABLES MISSING');
  }
};
