import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: Date;
  /** The `Upload` scalar type represents a file upload. */
  Upload: File;
};

export type AuthSuccessResponse = {
  __typename?: 'AuthSuccessResponse';
  success: Scalars['Boolean'];
};

export type CreateLessonContentInput = {
  sentences: Array<LessonContentSentenceInput>;
};

export type CreateLessonImageInput = {
  publicId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type CreateLessonInput = {
  content: Scalars['String'];
  description: Scalars['String'];
  imageId: Scalars['String'];
  title: Scalars['String'];
};

export type CreateResetPasswordLinkInput = {
  email: Scalars['String'];
};

export type DeleteLessonImageInput = {
  id: Scalars['ID'];
  publicId?: InputMaybe<Scalars['String']>;
};

export type FileUploadResponse = {
  __typename?: 'FileUploadResponse';
  publicId: Scalars['String'];
  url: Scalars['String'];
};

export type GetLessonImagesResponse = {
  __typename?: 'GetLessonImagesResponse';
  data: Array<Maybe<LessonImage>>;
  pages: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type GetUsersResponse = {
  __typename?: 'GetUsersResponse';
  data: Array<Maybe<User>>;
  pages: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type Lesson = {
  __typename?: 'Lesson';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: LessonImage;
  title: Scalars['String'];
};

export type LessonContent = {
  __typename?: 'LessonContent';
  id: Scalars['ID'];
  sentences: Array<LessonContentSentence>;
};

export type LessonContentSentence = {
  __typename?: 'LessonContentSentence';
  id: Scalars['ID'];
  sentence: Array<LessonContentSentencePart>;
  sentenceType: LessonSentenceType;
};

export type LessonContentSentenceInput = {
  id: Scalars['ID'];
  sentence: Array<LessonContentSentencePartInput>;
  sentenceType: LessonSentenceType;
};

export type LessonContentSentencePart = {
  __typename?: 'LessonContentSentencePart';
  id: Scalars['ID'];
  part: Scalars['String'];
  partType: PartType;
};

export type LessonContentSentencePartInput = {
  id: Scalars['ID'];
  part: Scalars['String'];
  partType: PartType;
};

export type LessonImage = {
  __typename?: 'LessonImage';
  id: Scalars['ID'];
  lesson?: Maybe<Lesson>;
  publicId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export enum LessonSentenceType {
  Gap = 'Gap',
  Multi = 'Multi',
  Scramble = 'Scramble',
  Text = 'Text',
  Title = 'Title'
}

export type Mutation = {
  __typename?: 'Mutation';
  createLesson: Lesson;
  createLessonContent: LessonContent;
  createLessonImage: LessonImage;
  deleteLessonImage: LessonImage;
  logout: AuthSuccessResponse;
  resetPasswordLink: AuthSuccessResponse;
  setNewPassword: AuthSuccessResponse;
  signIn: AuthSuccessResponse;
  signUp: AuthSuccessResponse;
  updateLessonImage: LessonImage;
  uploadFile: FileUploadResponse;
};


export type MutationCreateLessonArgs = {
  input: CreateLessonInput;
};


export type MutationCreateLessonContentArgs = {
  input: CreateLessonContentInput;
};


export type MutationCreateLessonImageArgs = {
  input: CreateLessonImageInput;
};


export type MutationDeleteLessonImageArgs = {
  input: DeleteLessonImageInput;
};


export type MutationResetPasswordLinkArgs = {
  input: CreateResetPasswordLinkInput;
};


export type MutationSetNewPasswordArgs = {
  input: SetNewPasswordInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateLessonImageArgs = {
  input: UpdateLessonImageInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export enum PartType {
  Gap = 'Gap',
  Regular = 'Regular',
  RightAnswer = 'RightAnswer',
  WrongAnswer = 'WrongAnswer'
}

export type Query = {
  __typename?: 'Query';
  getLessonImages: GetLessonImagesResponse;
  getUser: User;
  getUsers: GetUsersResponse;
};


export type QueryGetLessonImagesArgs = {
  limit: Scalars['Float'];
  offset: Scalars['Float'];
  search?: InputMaybe<Scalars['String']>;
};


export type QueryGetUsersArgs = {
  limit: Scalars['Float'];
  offset: Scalars['Float'];
};

export enum Role {
  Admin = 'ADMIN',
  Teacher = 'TEACHER',
  User = 'USER'
}

export type SetNewPasswordInput = {
  password: Scalars['String'];
  resetToken: Scalars['String'];
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
};

export type UpdateLessonImageInput = {
  id: Scalars['ID'];
  publicId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** User */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  role: Role;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'AuthSuccessResponse', success: boolean } };

export type ResetPasswordLinkMutationVariables = Exact<{
  input: CreateResetPasswordLinkInput;
}>;


export type ResetPasswordLinkMutation = { __typename?: 'Mutation', resetPasswordLink: { __typename?: 'AuthSuccessResponse', success: boolean } };

export type SetNewPasswordMutationVariables = Exact<{
  input: SetNewPasswordInput;
}>;


export type SetNewPasswordMutation = { __typename?: 'Mutation', setNewPassword: { __typename?: 'AuthSuccessResponse', success: boolean } };

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthSuccessResponse', success: boolean } };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AuthSuccessResponse', success: boolean } };

export type CreateLessonMutationVariables = Exact<{
  input: CreateLessonInput;
}>;


export type CreateLessonMutation = { __typename?: 'Mutation', createLesson: { __typename?: 'Lesson', id: string, title: string, description: string, content: string, createdAt: Date, image: { __typename?: 'LessonImage', id: string, url: string, publicId?: string | null } } };

export type CreateLessonImageMutationVariables = Exact<{
  input: CreateLessonImageInput;
}>;


export type CreateLessonImageMutation = { __typename?: 'Mutation', createLessonImage: { __typename?: 'LessonImage', id: string, title: string, url: string, publicId?: string | null } };

export type UpdateLessonImageMutationVariables = Exact<{
  input: UpdateLessonImageInput;
}>;


export type UpdateLessonImageMutation = { __typename?: 'Mutation', updateLessonImage: { __typename?: 'LessonImage', id: string, title: string, url: string, publicId?: string | null } };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile: { __typename?: 'FileUploadResponse', url: string, publicId: string } };

export type GetLessonImagesQueryVariables = Exact<{
  offset: Scalars['Float'];
  limit: Scalars['Float'];
  search?: InputMaybe<Scalars['String']>;
}>;


export type GetLessonImagesQuery = { __typename?: 'Query', getLessonImages: { __typename?: 'GetLessonImagesResponse', data: Array<{ __typename?: 'LessonImage', id: string, title: string, url: string, publicId?: string | null } | null> } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, lastName: string, name: string, role: Role, email: string } };

export type GetUsersQueryVariables = Exact<{
  offset: Scalars['Float'];
  limit: Scalars['Float'];
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: { __typename?: 'GetUsersResponse', totalCount: number, pages: number, data: Array<{ __typename?: 'User', id: string, name: string, lastName: string, email: string, role: Role, createdAt: Date } | null> } };


export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const ResetPasswordLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetPasswordLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateResetPasswordLinkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPasswordLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordLinkMutation, ResetPasswordLinkMutationVariables>;
export const SetNewPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setNewPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetNewPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setNewPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<SetNewPasswordMutation, SetNewPasswordMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const CreateLessonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLesson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLessonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLesson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateLessonMutation, CreateLessonMutationVariables>;
export const CreateLessonImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLessonImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLessonImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLessonImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]} as unknown as DocumentNode<CreateLessonImageMutation, CreateLessonImageMutationVariables>;
export const UpdateLessonImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateLessonImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLessonImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLessonImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]} as unknown as DocumentNode<UpdateLessonImageMutation, UpdateLessonImageMutationVariables>;
export const UploadFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]} as unknown as DocumentNode<UploadFileMutation, UploadFileMutationVariables>;
export const GetLessonImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLessonImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLessonImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]}}]} as unknown as DocumentNode<GetLessonImagesQuery, GetLessonImagesQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;