import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentCalmW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentCalmW100Filled'

      short_name='SentimentCalm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.28-276Q513-276 543-289.5t56-39.5l-20-19q-23 21-48 32t-51 11q-26 0-51-11t-48-32l-20 19q27 27 56.78 40t62.5 13Zm-.11 144q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM345-496q32 0 55-22t34-53l-27-7q-8 22-23.5 38T345-524q-23 0-38.5-16T283-578l-27 7q11 31 34 53t55 22Zm270 0q32 0 55-22t34-53l-27-7q-8 22-23.5 38T615-524q-23 0-38.5-16T553-578l-27 7q11 31 34 53t55 22Z"/>
    </Icon>
  );
});

IconMaterialSentimentCalmW100Filled.displayName = 'OnesyIconMaterialSentimentCalmW100Filled';

export default IconMaterialSentimentCalmW100Filled;
