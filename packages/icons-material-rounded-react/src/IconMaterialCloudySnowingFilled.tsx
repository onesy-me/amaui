import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudySnowingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudySnowingFilled'

      short_name='CloudySnowing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200Zm480 0q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200ZM360-40q-17 0-28.5-11.5T320-80q0-17 11.5-28.5T360-120q17 0 28.5 11.5T400-80q0 17-11.5 28.5T360-40Zm120-160q-17 0-28.5-11.5T440-240q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240q0 17-11.5 28.5T480-200ZM600-40q-17 0-28.5-11.5T560-80q0-17 11.5-28.5T600-120q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40ZM300-320q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Z"/>
    </Icon>
  );
});

IconMaterialCloudySnowingFilled.displayName = 'OnesyIconMaterialCloudySnowingFilled';

export default IconMaterialCloudySnowingFilled;
