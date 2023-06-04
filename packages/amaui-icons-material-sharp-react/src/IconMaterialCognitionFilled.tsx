import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCognitionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CognitionFilled'

      short_name='Cognition'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M491 717q70 0 119-45t49-109q0-57-36.5-96.5T534 427q-47 0-79.5 30T422 531q0 19 7.5 37t21.5 33l57-57q-3-2-4.5-5t-1.5-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492 638q-47 0-79.5-38T380 507q0-29 11-55.5t31-46.5l-57-57q-32 31-49 72t-17 86q0 88 56 149.5T491 717ZM240 976V804q-57-52-88.5-121.5T120 536q0-150 105-255t255-105q125 0 221.5 73.5T827 441l64 255H760v200H600v80H240Z"/>
    </Icon>
  );
});

IconMaterialCognitionFilled.displayName = 'AmauiIconMaterialCognitionFilled';

export default IconMaterialCognitionFilled;
