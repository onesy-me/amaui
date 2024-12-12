import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumidityLow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityLow'

      short_name='HumidityLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"/>
    </Icon>
  );
});

IconMaterialHumidityLow.displayName = 'OnesyIconMaterialHumidityLow';

export default IconMaterialHumidityLow;
