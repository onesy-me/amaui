import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPortraitLightingOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PortraitLightingOff'

      short_name='PortraitLightingOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M791 1001 686 896H160V784q0-34 17.5-62.5T224 678q45-23 91.5-37t94.5-21L55 265l57-57 736 736-57 57ZM480 816h126L486 696h-6v120Zm256-138q29 14 46 42.5t18 61.5L666 648q18 7 35.5 14t34.5 16ZM568 550l-59-59q23-9 37-29.5t14-45.5q0-33-23.5-56.5T480 336v126L346 328q23-34 58-53t76-19q66 0 113 47t47 113q0 41-19 76t-53 58Z"/>
    </Icon>
  );
});

IconMaterialPortraitLightingOff.displayName = 'AmauiIconMaterialPortraitLightingOff';

export default IconMaterialPortraitLightingOff;
