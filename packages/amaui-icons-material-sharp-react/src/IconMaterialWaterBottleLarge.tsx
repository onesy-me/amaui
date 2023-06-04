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
      <path d="M280 896h400v-80h-80V536h-80v-80h160v-80H280v80h80v280h80v80H280v80Zm-80 80V736h80V536h-80V296h200v-40h-40v-80h240v80h-40v40h200v240h-80v200h80v240H200Zm280-340Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLarge.displayName = 'AmauiIconMaterialWaterBottleLarge';

export default IconMaterialWaterBottleLarge;
