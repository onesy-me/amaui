import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentCalmFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentCalmFilled'

      short_name='SentimentCalm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-260q34 0 64-12.5t56-35.5q9-8 9-21t-9-21q-9-8-21.5-8t-22.5 8q-17 13-36 21t-40 8q-21 0-40-8t-36-21q-10-8-22.5-8t-21.5 8q-9 8-9 21t9 21q26 22 56 35t64 13Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM340-480q34 0 60-22t40-54q5-11-1.5-21T420-590q-11-3-22 2.5T382-571q-7 13-17.5 22t-24.5 9q-14 0-25-9.5T298-572q-5-11-16-16t-22-2q-12 3-18.5 12.5T240-557q14 32 39.5 54.5T340-480Zm280 0q34 0 60-22t40-54q5-11-1.5-21T700-590q-11-3-22 2.5T662-571q-7 13-17.5 22t-24.5 9q-14 0-25-9.5T578-572q-5-11-16-16t-22-2q-12 3-18.5 12.5T520-557q14 32 39.5 54.5T620-480Z"/>
    </Icon>
  );
});

IconMaterialSentimentCalmFilled.displayName = 'OnesyIconMaterialSentimentCalmFilled';

export default IconMaterialSentimentCalmFilled;
