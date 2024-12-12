import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccessibilityNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityNewFilled'

      short_name='AccessibilityNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720ZM360-80v-520q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-720l20 80q-56 15-118 25t-122 15v520h-80v-240h-80v240h-80Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityNewFilled.displayName = 'OnesyIconMaterialAccessibilityNewFilled';

export default IconMaterialAccessibilityNewFilled;
