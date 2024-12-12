import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaceW100Filled'

      short_name='Pace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q132-407.65 132-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q407.79-828 480-828q72 0 135 27t111 75q48 48 75 111t27 135q0 22.41-3 43.71-3 21.29-8 42.29-2 5-7 8t-10 1q-5-2-8-6.67-3-4.66-1-10.33 5-19 7-38.5t2-39.5q0-66.63-25-124.32Q750-662 706-706q-44-44-101.68-69-57.69-25-124.32-25-134 0-227 93t-93 227q0 134 93 227t227 93q53 0 101-16t89-45q5-3 10.5-2.33 5.5.66 8.5 5.33 4 5 2.83 10.5-1.16 5.5-5.83 8.5-45 32-96.5 49.5T480-132Zm275.06-134Q745-266 738-272.94q-7-6.95-7-17 0-10.06 6.94-17.06 6.95-7 17-7 10.06 0 17.06 6.94 7 6.95 7 17 0 10.06-6.94 17.06-6.95 7-17 7ZM494-486l146 146q4 4 4.5 9.5T640-320q-5 5-10 5t-10-5L475-465q-5-5-7-10.22-2-5.21-2-10.78v-180q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v180Z"/>
    </Icon>
  );
});

IconMaterialPaceW100Filled.displayName = 'OnesyIconMaterialPaceW100Filled';

export default IconMaterialPaceW100Filled;
