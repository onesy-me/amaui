import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStickyNote2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2'

      short_name='StickyNote2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h360v-160q0-17 11.5-28.5T600-400h160v-360H200v560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v367q0 16-6 30.5T817-337L623-143q-11 11-25.5 17t-30.5 6H200Zm240-280H320q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480h120q17 0 28.5 11.5T480-440q0 17-11.5 28.5T440-400Zm200-160H320q-17 0-28.5-11.5T280-600q0-17 11.5-28.5T320-640h320q17 0 28.5 11.5T680-600q0 17-11.5 28.5T640-560ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2.displayName = 'OnesyIconMaterialStickyNote2';

export default IconMaterialStickyNote2;
