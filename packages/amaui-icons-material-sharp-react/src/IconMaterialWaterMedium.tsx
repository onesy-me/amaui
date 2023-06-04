import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterMedium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterMedium'

      short_name='WaterMedium'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m255 668 25 228h400l26-240h-9q-38 0-69.5-5.5T542 629q-23-7-48-10t-50-3q-51 0-98.5 13T255 668Zm-10-86q47-23 97.5-34.5T445 536q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h19l35-320H209l36 326Zm-37 394-88-800h720l-88 800H208Zm72-80h400-400Z"/>
    </Icon>
  );
});

IconMaterialWaterMedium.displayName = 'AmauiIconMaterialWaterMedium';

export default IconMaterialWaterMedium;
