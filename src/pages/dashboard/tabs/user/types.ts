import { Maybe, User } from 'apollo/graphql/generated.types';

export interface IUserCardProps {
  user?: Maybe<User>;
}
