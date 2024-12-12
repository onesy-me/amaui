import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddLinkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLinkFilled'

      short_name='AddLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-280h-81q-17 0-28-11.5T560-320q0-17 11.5-28.5T600-360h80v-80q0-17 11.5-28.5T720-480q17 0 28.5 11.5T760-440v80h80q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280h-80v80q0 17-11.5 28.5T720-160q-17 0-28.5-11.5T680-200v-80Zm-280 0H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h120q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H280q-50 0-85 35t-35 85q0 50 35 85t85 35h120q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280Zm-40-160q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h240q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440H360Zm520-40h-80q0-50-35-85t-85-35H559q-17 0-28-11.5T520-640q0-17 11.5-28.5T560-680h120q83 0 141.5 58.5T880-480Z"/>
    </Icon>
  );
});

IconMaterialAddLinkFilled.displayName = 'OnesyIconMaterialAddLinkFilled';

export default IconMaterialAddLinkFilled;
