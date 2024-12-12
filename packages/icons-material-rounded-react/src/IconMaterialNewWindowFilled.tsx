import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewWindowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewWindowFilled'

      short_name='NewWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200q17 0 28.5 11.5T440-800q0 17-11.5 28.5T400-760H200v560h560v-200q0-17 11.5-28.5T800-440q17 0 28.5 11.5T840-400v200q0 33-23.5 56.5T760-120H200Zm440-520h-80q-17 0-28.5-11.5T520-680q0-17 11.5-28.5T560-720h80v-80q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v80h80q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640h-80v80q0 17-11.5 28.5T680-520q-17 0-28.5-11.5T640-560v-80Z"/>
    </Icon>
  );
});

IconMaterialNewWindowFilled.displayName = 'OnesyIconMaterialNewWindowFilled';

export default IconMaterialNewWindowFilled;
