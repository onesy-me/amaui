import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOverview = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Overview'

      short_name='Overview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M740-248v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v92q0 8 3 15t9 13l61 61q6 6 14 6t14-6q6-6 6-14t-6-14l-61-61ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v200q0 17-11.5 28.5T800-520q-17 0-28.5-11.5T760-560v-200H200v560h200q17 0 28.5 11.5T440-160q0 17-11.5 28.5T400-120H200Zm0-120v40-560 243-3 280Zm80-80q0 17 11.5 28.5T320-280h83q17 0 28.5-11.5T443-320q0-17-11.5-28.5T403-360h-83q-17 0-28.5 11.5T280-320Zm0-160q0 17 11.5 28.5T320-440h200q17 0 28.5-11.5T560-480q0-17-11.5-28.5T520-520H320q-17 0-28.5 11.5T280-480Zm0-160q0 17 11.5 28.5T320-600h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/>
    </Icon>
  );
});

IconMaterialOverview.displayName = 'OnesyIconMaterialOverview';

export default IconMaterialOverview;
