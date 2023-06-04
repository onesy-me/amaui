import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConversionPathOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConversionPathOff'

      short_name='ConversionPathOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M818 1028 26 236l57-57 792 792-57 57ZM440 856q-66 0-113-47t-47-113q0-66 47-113t113-47l80 80h-80q-33 0-56.5 23.5T360 696q0 33 23.5 56.5T440 776h240l142 142q-14 8-29.5 13t-32.5 5q-39 0-70-22.5T647 856H440Zm433-1L721 703q9-3 18.5-5t20.5-2q50 0 85 35t35 85q0 11-2 20.5t-5 18.5ZM608 590l-59-59q23-9 37-29t14-46q0-33-23.5-56.5T520 376H394l-80-80h206q66 0 113 47t47 113q0 42-20 77t-52 57ZM200 456q-50 0-85-35t-35-85q0-32 16-59t42-43l164 164q-16 26-43 42t-59 16Z"/>
    </Icon>
  );
});

IconMaterialConversionPathOff.displayName = 'AmauiIconMaterialConversionPathOff';

export default IconMaterialConversionPathOff;
