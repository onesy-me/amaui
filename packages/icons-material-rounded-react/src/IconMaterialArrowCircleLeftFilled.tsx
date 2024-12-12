import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleLeftFilled'

      short_name='ArrowCircleLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M472-440h128q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520H472l36-36q11-11 11-28t-11-28q-11-11-28-11t-28 11L348-508q-12 12-12 28t12 28l104 104q11 11 28 11t28-11q11-11 11-28t-11-28l-36-36Zm8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleLeftFilled.displayName = 'OnesyIconMaterialArrowCircleLeftFilled';

export default IconMaterialArrowCircleLeftFilled;
