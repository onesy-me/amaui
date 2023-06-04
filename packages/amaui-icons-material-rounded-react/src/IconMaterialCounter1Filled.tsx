import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter1Filled'

      short_name='Counter1'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm-20-520v280q0 17 11.5 28.5T500 776q17 0 28.5-11.5T540 736V416q0-17-11.5-28.5T500 376h-80q-17 0-28.5 11.5T380 416q0 17 11.5 28.5T420 456h40Z"/>
    </Icon>
  );
});

IconMaterialCounter1Filled.displayName = 'AmauiIconMaterialCounter1Filled';

export default IconMaterialCounter1Filled;
