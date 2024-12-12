import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCorporateFareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CorporateFareFilled'

      short_name='CorporateFare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h240q33 0 56.5 23.5T480-760v80h320q33 0 56.5 23.5T880-600v400q0 33-23.5 56.5T800-120H160Zm0-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm120-240q-17 0-28.5-11.5T560-480q0-17 11.5-28.5T600-520h80q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440h-80Zm0 160q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360h80q17 0 28.5 11.5T720-320q0 17-11.5 28.5T680-280h-80Z"/>
    </Icon>
  );
});

IconMaterialCorporateFareFilled.displayName = 'OnesyIconMaterialCorporateFareFilled';

export default IconMaterialCorporateFareFilled;
