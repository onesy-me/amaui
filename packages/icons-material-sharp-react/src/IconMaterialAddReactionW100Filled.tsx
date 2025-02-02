import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddReactionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddReactionW100Filled'

      short_name='AddReaction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M826-706v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM610.24-540q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm-260 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM480-292q55.46 0 100.73-29.5T650-400H310q24 49 69.27 78.5Q424.54-292 480-292Zm.17 160q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q407.79-828 480-828q39 0 76 8t70 24v90h119v120h67q8 25 12 51.26 4 26.26 4 54.74 0 72.21-27.39 135.72-27.39 63.51-74.35 110.49-46.96 46.98-110.43 74.39Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialAddReactionW100Filled.displayName = 'OnesyIconMaterialAddReactionW100Filled';

export default IconMaterialAddReactionW100Filled;
