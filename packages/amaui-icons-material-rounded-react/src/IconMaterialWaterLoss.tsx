import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterLoss = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLoss'

      short_name='WaterLoss'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M444 736q-47 0-91.5 11.5T267 781l13 115h400l13-120q-36 0-67-6t-84-21q-23-7-48-10t-50-3ZM209 256l49 440q45-20 92-30t95-10q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h6l48-440H209Zm71 720q-31 0-54-20t-26-51l-75-685q-2-18 10-31t30-13h630q18 0 30 13t10 31l-75 685q-3 31-26 51t-54 20H280Zm164-80h236-400 164Z"/>
    </Icon>
  );
});

IconMaterialWaterLoss.displayName = 'AmauiIconMaterialWaterLoss';

export default IconMaterialWaterLoss;
