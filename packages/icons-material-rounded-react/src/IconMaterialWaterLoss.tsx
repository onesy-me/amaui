import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterLoss = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLoss'

      short_name='WaterLoss'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M444-320q-47 0-91.5 11.5T267-275l13 115h400l13-120q-36 0-67-6t-84-21q-23-7-48-10t-50-3Zm-186-40q45-20 92-30t95-10q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h6l48-440H210l48 440Zm21 280q-31 0-53.5-20T200-151l-69-630q-5-40 22-69.5t67-29.5h520q40 0 67 29.5t22 69.5l-69 630q-3 31-25.5 51T681-80H279Zm165-80h236-400 164Z"/>
    </Icon>
  );
});

IconMaterialWaterLoss.displayName = 'OnesyIconMaterialWaterLoss';

export default IconMaterialWaterLoss;
