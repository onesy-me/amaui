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
      <path d="M444 736q-47 0-91.5 11.5T267 781l13 115h400l13-120q-36 0-67-6t-84-21q-23-7-48-10t-50-3Zm-186-40q45-20 92-30t95-10q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h6l48-440H209l49 440Zm-50 280-88-800h720l-88 800H208Zm236-80h236-400 164Z"/>
    </Icon>
  );
});

IconMaterialWaterLoss.displayName = 'AmauiIconMaterialWaterLoss';

export default IconMaterialWaterLoss;
