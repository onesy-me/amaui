import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterFull'

      short_name='WaterFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M444 456q-55 0-108 15.5T238 518l42 378h400l44-400h-27q-38 0-69.5-5.5T542 469q-23-7-48-10t-50-3ZM209 256l19 175q51-27 105.5-41T445 376q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h37l17-160H209Zm235 640h236-400 164Zm-164 80q-31 0-54-20t-26-51l-75-685q-2-18 10-31t30-13h630q18 0 30 13t10 31l-75 685q-3 31-26 51t-54 20H280Z"/>
    </Icon>
  );
});

IconMaterialWaterFull.displayName = 'AmauiIconMaterialWaterFull';

export default IconMaterialWaterFull;
