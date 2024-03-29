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

export type Classroom = {
  __typename?: 'Classroom';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lesson: Lesson;
  notes?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  user?: Maybe<User>;
};

export type ConfirmEmailInput = {
  token: Scalars['String'];
};

export type CreateClassroomInput = {
  lessonId: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateLessonContentInput = {
  sentences: Array<LessonContentSentenceInput>;
  title: Scalars['String'];
};

export type CreateLessonImageInput = {
  publicId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type CreateLessonInput = {
  description: Scalars['String'];
  pages: Array<InputMaybe<LessonPage>>;
  title: Scalars['String'];
};

export type CreateResetPasswordLinkInput = {
  email: Scalars['String'];
};

export type DeleteClassroomResponse = {
  __typename?: 'DeleteClassroomResponse';
  id: Scalars['ID'];
};

export type DeleteLessonContentResponse = {
  __typename?: 'DeleteLessonContentResponse';
  id: Scalars['ID'];
};

export type DeleteLessonImageInput = {
  id: Scalars['ID'];
  publicId?: InputMaybe<Scalars['String']>;
};

export type DeleteLessonResponse = {
  __typename?: 'DeleteLessonResponse';
  id: Scalars['ID'];
};

export type FileUploadResponse = {
  __typename?: 'FileUploadResponse';
  publicId: Scalars['String'];
  url: Scalars['String'];
};

export type Lesson = {
  __typename?: 'Lesson';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  pages: Array<LessonPageObject>;
  title: Scalars['String'];
};

export type LessonContent = {
  __typename?: 'LessonContent';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  sentences: Array<LessonContentSentence>;
  title: Scalars['String'];
};

export type LessonContentSentence = {
  __typename?: 'LessonContentSentence';
  id: Scalars['ID'];
  sentenceParts: Array<LessonContentSentencePart>;
  sentenceType: LessonSentenceType;
  text?: Maybe<Scalars['String']>;
};

export type LessonContentSentenceInput = {
  id: Scalars['ID'];
  sentenceParts: Array<LessonContentSentencePartInput>;
  sentenceType: LessonSentenceType;
  text?: InputMaybe<Scalars['String']>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lesson?: Maybe<Lesson>;
  publicId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type LessonPage = {
  id: Scalars['String'];
  lessonContentId: Scalars['String'];
  lessonImageId: Scalars['String'];
};

export type LessonPageObject = {
  __typename?: 'LessonPageObject';
  id: Scalars['ID'];
  lessonContent: LessonContent;
  lessonImage: LessonImage;
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
  confirmEmail: AuthSuccessResponse;
  createClassroom: Classroom;
  createLesson: Lesson;
  createLessonContent: LessonContent;
  createLessonImage: LessonImage;
  deleteClassroom: DeleteClassroomResponse;
  deleteLesson: DeleteLessonResponse;
  deleteLessonContent: DeleteLessonContentResponse;
  deleteLessonImage: LessonImage;
  logout: AuthSuccessResponse;
  resendConfirmationEmail: AuthSuccessResponse;
  resetPasswordLink: AuthSuccessResponse;
  setNewPassword: AuthSuccessResponse;
  signIn: AuthSuccessResponse;
  signUp: AuthSuccessResponse;
  updateClassroom: Classroom;
  updateLesson: Lesson;
  updateLessonContent: LessonContent;
  updateLessonImage: LessonImage;
  uploadFile: FileUploadResponse;
};


export type MutationConfirmEmailArgs = {
  input: ConfirmEmailInput;
};


export type MutationCreateClassroomArgs = {
  input: CreateClassroomInput;
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


export type MutationDeleteClassroomArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLessonArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLessonContentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLessonImageArgs = {
  input: DeleteLessonImageInput;
};


export type MutationResendConfirmationEmailArgs = {
  input: ResendConfirmationEmailInput;
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


export type MutationUpdateClassroomArgs = {
  input: UpdateClassroomInput;
};


export type MutationUpdateLessonArgs = {
  input: UpdateLessonInput;
};


export type MutationUpdateLessonContentArgs = {
  input: UpdateLessonContentInput;
};


export type MutationUpdateLessonImageArgs = {
  input: UpdateLessonImageInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type PaginatedClassroomsResponse = {
  __typename?: 'PaginatedClassroomsResponse';
  data: Array<Classroom>;
  hasMore: Scalars['Boolean'];
  pages: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type PaginatedContentsResponse = {
  __typename?: 'PaginatedContentsResponse';
  data: Array<LessonContent>;
  hasMore: Scalars['Boolean'];
  pages: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type PaginatedImagesResponse = {
  __typename?: 'PaginatedImagesResponse';
  data: Array<LessonImage>;
  hasMore: Scalars['Boolean'];
  pages: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type PaginatedLessonsResponse = {
  __typename?: 'PaginatedLessonsResponse';
  data: Array<Lesson>;
  hasMore: Scalars['Boolean'];
  pages: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  data: Array<User>;
  hasMore: Scalars['Boolean'];
  pages: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export enum PartType {
  Gap = 'Gap',
  Regular = 'Regular',
  RightAnswer = 'RightAnswer',
  WrongAnswer = 'WrongAnswer'
}

export type Query = {
  __typename?: 'Query';
  getClassrooms: PaginatedClassroomsResponse;
  getLessonContents: PaginatedContentsResponse;
  getLessonImages: PaginatedImagesResponse;
  getLessons: PaginatedLessonsResponse;
  getSingleClassroom: Classroom;
  getUser: User;
  getUsers: PaginatedUsers;
};


export type QueryGetClassroomsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryGetLessonContentsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryGetLessonImagesArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryGetLessonsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryGetSingleClassroomArgs = {
  id: Scalars['String'];
};


export type QueryGetUsersArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type ResendConfirmationEmailInput = {
  email: Scalars['String'];
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

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type UpdateClassroomInput = {
  id: Scalars['ID'];
  lessonId?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateLessonContentInput = {
  id: Scalars['ID'];
  sentences?: InputMaybe<Array<LessonContentSentenceInput>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateLessonImageInput = {
  id: Scalars['ID'];
  publicId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type UpdateLessonInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  pages?: InputMaybe<Array<LessonPage>>;
  title?: InputMaybe<Scalars['String']>;
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

export type LessonContentFieldsFragment = { __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> };

export type LessonImageFieldsFragment = { __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string };

export type UserFieldsFragment = { __typename?: 'User', id: string, lastName: string, name: string, role: Role, email: string };

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

export type CreateClassroomMutationVariables = Exact<{
  input: CreateClassroomInput;
}>;


export type CreateClassroomMutation = { __typename?: 'Mutation', createClassroom: { __typename?: 'Classroom', id: string, title: string, notes?: string | null, user?: { __typename?: 'User', id: string, lastName: string, name: string, role: Role, email: string } | null, lesson: { __typename?: 'Lesson', id: string, title: string, description: string, pages: Array<{ __typename?: 'LessonPageObject', id: string, lessonImage: { __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string }, lessonContent: { __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> } }> } } };

export type DeleteClassroomMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteClassroomMutation = { __typename?: 'Mutation', deleteClassroom: { __typename?: 'DeleteClassroomResponse', id: string } };

export type UpdateClassroomMutationVariables = Exact<{
  input: UpdateClassroomInput;
}>;


export type UpdateClassroomMutation = { __typename?: 'Mutation', updateClassroom: { __typename?: 'Classroom', id: string, title: string, notes?: string | null, user?: { __typename?: 'User', id: string, lastName: string, name: string, role: Role, email: string } | null, lesson: { __typename?: 'Lesson', id: string, title: string, description: string, pages: Array<{ __typename?: 'LessonPageObject', id: string, lessonImage: { __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string }, lessonContent: { __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> } }> } } };

export type CreateLessonContentMutationVariables = Exact<{
  input: CreateLessonContentInput;
}>;


export type CreateLessonContentMutation = { __typename?: 'Mutation', createLessonContent: { __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> } };

export type DeleteLessonContentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteLessonContentMutation = { __typename?: 'Mutation', deleteLessonContent: { __typename?: 'DeleteLessonContentResponse', id: string } };

export type UpdateLessonContentMutationVariables = Exact<{
  input: UpdateLessonContentInput;
}>;


export type UpdateLessonContentMutation = { __typename?: 'Mutation', updateLessonContent: { __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> } };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile: { __typename?: 'FileUploadResponse', url: string, publicId: string } };

export type CreateLessonImageMutationVariables = Exact<{
  input: CreateLessonImageInput;
}>;


export type CreateLessonImageMutation = { __typename?: 'Mutation', createLessonImage: { __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string } };

export type DeleteLessonImageMutationVariables = Exact<{
  input: DeleteLessonImageInput;
}>;


export type DeleteLessonImageMutation = { __typename?: 'Mutation', deleteLessonImage: { __typename?: 'LessonImage', id: string } };

export type UpdateLessonImageMutationVariables = Exact<{
  input: UpdateLessonImageInput;
}>;


export type UpdateLessonImageMutation = { __typename?: 'Mutation', updateLessonImage: { __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string } };

export type CreateLessonMutationVariables = Exact<{
  input: CreateLessonInput;
}>;


export type CreateLessonMutation = { __typename?: 'Mutation', createLesson: { __typename?: 'Lesson', id: string, title: string, description: string, pages: Array<{ __typename?: 'LessonPageObject', id: string, lessonImage: { __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string }, lessonContent: { __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> } }> } };

export type DeleteLessonMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteLessonMutation = { __typename?: 'Mutation', deleteLesson: { __typename?: 'DeleteLessonResponse', id: string } };

export type UpdateLessonMutationVariables = Exact<{
  input: UpdateLessonInput;
}>;


export type UpdateLessonMutation = { __typename?: 'Mutation', updateLesson: { __typename?: 'Lesson', id: string, title: string, description: string, pages: Array<{ __typename?: 'LessonPageObject', id: string, lessonImage: { __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string }, lessonContent: { __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> } }> } };

export type GetClassroomsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
}>;


export type GetClassroomsQuery = { __typename?: 'Query', getClassrooms: { __typename?: 'PaginatedClassroomsResponse', pages: number, totalCount: number, hasMore: boolean, data: Array<{ __typename?: 'Classroom', id: string, title: string, notes?: string | null, user?: { __typename?: 'User', id: string, lastName: string, name: string, role: Role, email: string } | null, lesson: { __typename?: 'Lesson', id: string, title: string, description: string, pages: Array<{ __typename?: 'LessonPageObject', id: string, lessonImage: { __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string }, lessonContent: { __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> } }> } }> } };

export type GetSingleClassroomQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetSingleClassroomQuery = { __typename?: 'Query', getSingleClassroom: { __typename?: 'Classroom', id: string, title: string, notes?: string | null, lesson: { __typename?: 'Lesson', id: string, title: string, description: string, pages: Array<{ __typename?: 'LessonPageObject', id: string, lessonImage: { __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string }, lessonContent: { __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> } }> } } };

export type GetLessonContentsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
}>;


export type GetLessonContentsQuery = { __typename?: 'Query', getLessonContents: { __typename?: 'PaginatedContentsResponse', totalCount: number, hasMore: boolean, data: Array<{ __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> }> } };

export type GetLessonImagesQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
}>;


export type GetLessonImagesQuery = { __typename?: 'Query', getLessonImages: { __typename?: 'PaginatedImagesResponse', totalCount: number, hasMore: boolean, data: Array<{ __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string }> } };

export type GetLessonsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
}>;


export type GetLessonsQuery = { __typename?: 'Query', getLessons: { __typename?: 'PaginatedLessonsResponse', totalCount: number, pages: number, hasMore: boolean, data: Array<{ __typename?: 'Lesson', id: string, title: string, description: string, pages: Array<{ __typename?: 'LessonPageObject', id: string, lessonImage: { __typename?: 'LessonImage', id: string, publicId?: string | null, title: string, url: string }, lessonContent: { __typename?: 'LessonContent', id: string, title: string, sentences: Array<{ __typename?: 'LessonContentSentence', id: string, text?: string | null, sentenceType: LessonSentenceType, sentenceParts: Array<{ __typename?: 'LessonContentSentencePart', id: string, part: string, partType: PartType }> }> } }> }> } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, lastName: string, name: string, role: Role, email: string } };

export type GetUsersQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrder>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: { __typename?: 'PaginatedUsers', pages: number, totalCount: number, hasMore: boolean, data: Array<{ __typename?: 'User', id: string, lastName: string, name: string, role: Role, email: string }> } };

export const LessonContentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LessonContentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LessonContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sentences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"sentenceParts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"part"}},{"kind":"Field","name":{"kind":"Name","value":"partType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sentenceType"}}]}}]}}]} as unknown as DocumentNode<LessonContentFieldsFragment, unknown>;
export const LessonImageFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LessonImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LessonImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<LessonImageFieldsFragment, unknown>;
export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const ResetPasswordLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetPasswordLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateResetPasswordLinkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPasswordLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordLinkMutation, ResetPasswordLinkMutationVariables>;
export const SetNewPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setNewPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetNewPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setNewPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<SetNewPasswordMutation, SetNewPasswordMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const CreateClassroomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createClassroom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClassroomInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClassroom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lesson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lessonImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessonContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonContentFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"}}]}}]}},...UserFieldsFragmentDoc.definitions,...LessonImageFieldsFragmentDoc.definitions,...LessonContentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<CreateClassroomMutation, CreateClassroomMutationVariables>;
export const DeleteClassroomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteClassroom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClassroom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteClassroomMutation, DeleteClassroomMutationVariables>;
export const UpdateClassroomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClassroom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClassroomInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClassroom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lesson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lessonImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessonContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonContentFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"}}]}}]}},...UserFieldsFragmentDoc.definitions,...LessonImageFieldsFragmentDoc.definitions,...LessonContentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateClassroomMutation, UpdateClassroomMutationVariables>;
export const CreateLessonContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLessonContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLessonContentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLessonContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonContentFields"}}]}}]}},...LessonContentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<CreateLessonContentMutation, CreateLessonContentMutationVariables>;
export const DeleteLessonContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteLessonContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLessonContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteLessonContentMutation, DeleteLessonContentMutationVariables>;
export const UpdateLessonContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateLessonContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLessonContentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLessonContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonContentFields"}}]}}]}},...LessonContentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateLessonContentMutation, UpdateLessonContentMutationVariables>;
export const UploadFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]} as unknown as DocumentNode<UploadFileMutation, UploadFileMutationVariables>;
export const CreateLessonImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLessonImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLessonImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLessonImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonImageFields"}}]}}]}},...LessonImageFieldsFragmentDoc.definitions]} as unknown as DocumentNode<CreateLessonImageMutation, CreateLessonImageMutationVariables>;
export const DeleteLessonImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteLessonImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteLessonImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLessonImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteLessonImageMutation, DeleteLessonImageMutationVariables>;
export const UpdateLessonImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateLessonImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLessonImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLessonImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonImageFields"}}]}}]}},...LessonImageFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateLessonImageMutation, UpdateLessonImageMutationVariables>;
export const CreateLessonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLesson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLessonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLesson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lessonImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessonContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonContentFields"}}]}}]}}]}}]}},...LessonImageFieldsFragmentDoc.definitions,...LessonContentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<CreateLessonMutation, CreateLessonMutationVariables>;
export const DeleteLessonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteLesson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLesson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteLessonMutation, DeleteLessonMutationVariables>;
export const UpdateLessonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateLesson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLessonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLesson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lessonImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessonContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonContentFields"}}]}}]}}]}}]}},...LessonImageFieldsFragmentDoc.definitions,...LessonContentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateLessonMutation, UpdateLessonMutationVariables>;
export const GetClassroomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getClassrooms"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClassrooms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lesson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lessonImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessonContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonContentFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasMore"}}]}}]}},...UserFieldsFragmentDoc.definitions,...LessonImageFieldsFragmentDoc.definitions,...LessonContentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetClassroomsQuery, GetClassroomsQueryVariables>;
export const GetSingleClassroomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSingleClassroom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSingleClassroom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"lesson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lessonImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessonContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonContentFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"}}]}}]}},...LessonImageFieldsFragmentDoc.definitions,...LessonContentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetSingleClassroomQuery, GetSingleClassroomQueryVariables>;
export const GetLessonContentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLessonContents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLessonContents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonContentFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasMore"}}]}}]}},...LessonContentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetLessonContentsQuery, GetLessonContentsQueryVariables>;
export const GetLessonImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLessonImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLessonImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasMore"}}]}}]}},...LessonImageFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetLessonImagesQuery, GetLessonImagesQueryVariables>;
export const GetLessonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLessons"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLessons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lessonImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessonContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LessonContentFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"hasMore"}}]}}]}},...LessonImageFieldsFragmentDoc.definitions,...LessonContentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetLessonsQuery, GetLessonsQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasMore"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;