import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClockLoader40W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClockLoader40W100'

      short_name='ClockLoader40'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.174 924Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924ZM480 896q64 0 122.5-24.5T706 802.165L480 576V256q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialClockLoader40W100.displayName = 'AmauiIconMaterialClockLoader40W100';

export default IconMaterialClockLoader40W100;
