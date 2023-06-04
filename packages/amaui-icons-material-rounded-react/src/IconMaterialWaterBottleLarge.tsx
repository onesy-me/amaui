import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterBottleLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleLarge'

      short_name='WaterBottleLarge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 976q-33 0-56.5-23.5T200 896v-80q0-33 23.5-56.5T280 736V536q-33 0-56.5-23.5T200 456v-80q0-33 23.5-56.5T280 296h120v-40q-17 0-28.5-11.5T360 216q0-17 11.5-28.5T400 176h160q17 0 28.5 11.5T600 216q0 17-11.5 28.5T560 256v40h120q33 0 56.5 23.5T760 376v80q0 33-23.5 56.5T680 536v200q33 0 56.5 23.5T760 816v80q0 33-23.5 56.5T680 976H280Zm0-80h400v-80h-80V536h-40q-17 0-28.5-11.5T520 496q0-17 11.5-28.5T560 456h120v-80H280v80h80v280h40q17 0 28.5 11.5T440 776q0 17-11.5 28.5T400 816H280v80Zm200-260Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLarge.displayName = 'AmauiIconMaterialWaterBottleLarge';

export default IconMaterialWaterBottleLarge;
