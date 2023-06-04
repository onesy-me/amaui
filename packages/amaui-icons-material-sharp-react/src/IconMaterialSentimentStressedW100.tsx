import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentStressedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentStressedW100'

      short_name='SentimentStressed'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m311 578 113-82-113-82-16 23 81 59-81 59 16 23Zm338 0 16-23-81-59 81-59-16-23-113 82 113 82ZM420 756l60-60 60 60 60-60 39 39 20-20-59-59-60 60-60-60-60 60-60-60-59 59 20 20 39-39 60 60Zm60.174 168Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924ZM480 576Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialSentimentStressedW100.displayName = 'AmauiIconMaterialSentimentStressedW100';

export default IconMaterialSentimentStressedW100;
