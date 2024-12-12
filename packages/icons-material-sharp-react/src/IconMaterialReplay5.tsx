import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplay5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay5'

      short_name='Replay5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM380-320v-60h120v-40H380v-140h180v60H440v40h120v140H380Z"/>
    </Icon>
  );
});

IconMaterialReplay5.displayName = 'OnesyIconMaterialReplay5';

export default IconMaterialReplay5;
