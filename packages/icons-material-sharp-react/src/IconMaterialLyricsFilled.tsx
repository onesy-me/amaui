import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLyricsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LyricsFilled'

      short_name='Lyrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h160v-80H240v80Zm520-80q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 2t19 5v-207h160v80h-80v240q0 50-35 85t-85 35Zm-520-40h280v-80H240v80Zm0-120h280v-80H240v80ZM80-80v-800h600v97q-55 24-87.5 73.5T560-600q0 60 32.5 109.5T680-417v177H240L80-80Z"/>
    </Icon>
  );
});

IconMaterialLyricsFilled.displayName = 'OnesyIconMaterialLyricsFilled';

export default IconMaterialLyricsFilled;
