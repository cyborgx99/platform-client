import { truncate } from 'lodash-es';
import React from 'react';
import { Helmet } from 'react-helmet';

import { HtmlHeadTagsProps } from './types';

const HtmlHeadTags = ({ title }: HtmlHeadTagsProps) => (
  <Helmet>
    <title>
      {title
        ? `${truncate(title, { length: 100 })} | Language Platform`
        : 'Language Platform'}
    </title>
  </Helmet>
);

export default HtmlHeadTags;
