import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter4Filled'

      short_name='Counter4'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm40-360v120q0 17 11.5 28.5T560 776q17 0 28.5-11.5T600 736V416q0-17-11.5-28.5T560 376q-17 0-28.5 11.5T520 416v120h-80V416q0-17-11.5-28.5T400 376q-17 0-28.5 11.5T360 416v160q0 17 11.5 28.5T400 616h120Z"/>
    </Icon>
  );
});

IconMaterialCounter4Filled.displayName = 'AmauiIconMaterialCounter4Filled';

export default IconMaterialCounter4Filled;
