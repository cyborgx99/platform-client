import { useQuery } from '@apollo/client';
import { GET_USERS } from 'apollo/graphql';
import { Query, QueryGetUsersArgs } from 'apollo/graphql/generated.types';
import React, { useState } from 'react';

import { UserTabWrapper } from './style';
import UserCard from './userCard';

const UserTab = () => {
  const [offset, setOffset] = useState(0);
  const { data, fetchMore } = useQuery<
    Pick<Query, 'getUsers'>,
    QueryGetUsersArgs
  >(GET_USERS, {
    variables: {
      offset: offset,
      limit: 2,
    },
  });

  const handleFetchMore = async () => {
    if (!data) return;
    const offset = data.getUsers.data.length;
    fetchMore({
      variables: {
        offset,
      },
    });

    setOffset(offset);
  };

  return (
    <UserTabWrapper>
      <button onClick={handleFetchMore}>Fetch more</button>
      {data &&
        data?.getUsers.data.map((user) => (
          <UserCard key={user?.id} user={user} />
        ))}
    </UserTabWrapper>
  );
};

export default UserTab;
