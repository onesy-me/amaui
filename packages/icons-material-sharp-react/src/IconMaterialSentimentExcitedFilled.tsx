import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentExcitedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentExcitedFilled'

      short_name='SentimentExcited'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-480v80q0 66 47 113t113 47q66 0 113-47t47-113v-80H320Zm160 180q-42 0-71-29t-29-71v-20h200v20q0 42-29 71t-71 29ZM340-680q-38 0-67.5 27.5T231-577l58 14q6-26 20-41.5t31-15.5q17 0 31 15.5t20 41.5l58-14q-12-48-41.5-75.5T340-680Zm280 0q-38 0-67.5 27.5T511-577l58 14q6-26 20-41.5t31-15.5q17 0 31 15.5t20 41.5l58-14q-12-48-41.5-75.5T620-680ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialSentimentExcitedFilled.displayName = 'OnesyIconMaterialSentimentExcitedFilled';

export default IconMaterialSentimentExcitedFilled;
