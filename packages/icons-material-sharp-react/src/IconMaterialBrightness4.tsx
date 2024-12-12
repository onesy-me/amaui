import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4'

      short_name='Brightness4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M492-280q83 0 141.5-58.5T692-480q0-83-58.5-141.5T492-680q-22 0-43 4.5T408-662q54 25 85.5 74T525-480q0 59-31.5 108T408-298q20 9 41 13.5t43 4.5ZM480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/>
    </Icon>
  );
});

IconMaterialBrightness4.displayName = 'OnesyIconMaterialBrightness4';

export default IconMaterialBrightness4;
