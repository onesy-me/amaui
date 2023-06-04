import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter3Filled'

      short_name='Counter3'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm-80-200h120q33 0 56.5-23.5T600 696v-60q0-26-17-43t-43-17q26 0 43-17t17-43v-60q0-33-23.5-56.5T520 376H400q-17 0-28.5 11.5T360 416q0 17 11.5 28.5T400 456h120v80h-40q-17 0-28.5 11.5T440 576q0 17 11.5 28.5T480 616h40v80H400q-17 0-28.5 11.5T360 736q0 17 11.5 28.5T400 776Z"/>
    </Icon>
  );
});

IconMaterialCounter3Filled.displayName = 'AmauiIconMaterialCounter3Filled';

export default IconMaterialCounter3Filled;
