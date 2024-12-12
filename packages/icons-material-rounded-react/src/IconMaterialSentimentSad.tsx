import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentSad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentSad'

      short_name='SentimentSad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-500q65 0 112 44t56 109q2 12 11 19.5t21 7.5q12 0 21.5-8t7.5-20q-10-90-74.5-151T480-560q-90 0-154.5 61T251-348q-2 12 7.5 20t21.5 8q12 0 21-7.5t11-19.5q9-65 56-109t112-44Zm-58-159q9-8 8.5-20.5T420-700q-10-8-22-7t-22 9q-16 14-33.5 23.5T305-658q-12 5-19.5 15t-5.5 23q2 13 12 20t21 3q30-10 58-25.5t51-36.5Zm116 0q23 21 50 36t57 25q12 4 22.5-2.5T680-620q2-13-6-23t-20-15q-19-7-36.5-17T584-698q-10-8-22-9t-22 7q-10 8-10.5 20.5T538-659ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialSentimentSad.displayName = 'OnesyIconMaterialSentimentSad';

export default IconMaterialSentimentSad;
