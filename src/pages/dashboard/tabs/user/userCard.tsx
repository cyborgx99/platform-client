import React from 'react';
import { HeaderThreeBase, ParagraphBase } from 'styles/globalStyles';

import { CardContainer } from './style';
import { IUserCardProps } from './types';

const UserCard = ({ user }: IUserCardProps) => {
  return (
    <CardContainer>
      <HeaderThreeBase>
        {user?.name} {user?.lastName}
      </HeaderThreeBase>
      <ParagraphBase $textType='normalText' $textWeight='regular'>
        Id: {user?.id}
      </ParagraphBase>
      <ParagraphBase $textType='normalText' $textWeight='regular'>
        Email: {user?.email}
      </ParagraphBase>
    </CardContainer>
  );
};

export default UserCard;
