import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterDamageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageW100'

      short_name='WaterDamage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240h400v-366L480-753 280-606v366Zm-28 28v-373L109-480l-17-22 388-286 389 286-17 22-144-106v374H252Zm228-134q23 0 38.5-15.5T534-400q0-17-9.5-35T480-504q-37 54-45.5 70t-8.5 34q0 23 15.5 38.5T480-346Zm0-54Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageW100.displayName = 'OnesyIconMaterialWaterDamageW100';

export default IconMaterialWaterDamageW100;
