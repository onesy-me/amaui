import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCabinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CabinFilled'

      short_name='Cabin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h480v-36l-58-44H298l-58 44v36Zm162-160h156l-78-59-78 59ZM160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm0-640q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Z"/>
    </Icon>
  );
});

IconMaterialCabinFilled.displayName = 'OnesyIconMaterialCabinFilled';

export default IconMaterialCabinFilled;
