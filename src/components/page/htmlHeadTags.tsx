import { truncate } from 'lodash-es';
import React from 'react';
import { Helmet } from 'react-helmet';

interface HtmlHeadTagsProps {
  title: string | null;
}

const HtmlHeadTags: React.FC<HtmlHeadTagsProps> = ({ title }) => (
  <Helmet>
    <title>
      {title
        ? `${truncate(title, { length: 100 })} | Language Platform`
        : 'Language Platform'}
    </title>
  </Helmet>
);

export default HtmlHeadTags;
