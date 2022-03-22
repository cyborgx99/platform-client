import { useQuery } from '@apollo/client';
import { Query, QueryGetUsersArgs } from 'apollo/graphql/generated.types';
import { GET_USERS } from 'apollo/graphql/queries/getUsers';
import React, { useState } from 'react';

import { UserTabWrapper } from './style';
import UserCard from './userCard';

const UserTab = () => {
  const [limit, setLimit] = useState(20);
  const { data, fetchMore } = useQuery<
    Pick<Query, 'getUsers'>,
    QueryGetUsersArgs
  >(GET_USERS, {
    variables: {
      offset: 0,
      limit,
    },
  });

  const handleFetchMore = async () => {
    if (!data) return;
    const offset = data.getUsers.data.length;
    const result = await fetchMore({
      variables: {
        offset,
        limit,
      },
    });

    setLimit(offset + result.data.getUsers.data.length);
  };

  console.log(handleFetchMore);

  return (
    <UserTabWrapper>
      {data &&
        data?.getUsers.data.map((user) => (
          <UserCard key={user?.id} user={user} />
        ))}
    </UserTabWrapper>
  );
};

export default UserTab;
