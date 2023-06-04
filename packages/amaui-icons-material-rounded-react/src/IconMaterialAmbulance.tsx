import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmbulance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ambulance'

      short_name='Ambulance'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 216v-80q0-17 11.5-28.5T480 96q17 0 28.5 11.5T520 136v80q0 17-11.5 28.5T480 256q-17 0-28.5-11.5T440 216Zm-205 68-63-63q-12-12-12-28.5t12-28.5q12-12 28-12t28 12l64 64q12 12 12 28t-12 28q-12 12-28.5 12T235 284Zm-75 732q-17 0-28.5-11.5T120 976V670q0-7 1-14t3-13l80-227q6-18 21.5-29t34.5-11h100v-40q0-17 11.5-28.5T400 296h91q-24 34-37.5 74.5T440 456H274l-59 160h276q17 24 38 44.5t47 35.5H200v160h560V733q21-3 41-9t39-15v267q0 17-11.5 28.5T800 1016h-40q-17 0-28.5-11.5T720 976v-40H240v40q0 17-11.5 28.5T200 1016h-40Zm200-200q17 0 28.5-11.5T400 776q0-17-11.5-28.5T360 736H260q-8 0-14 6t-6 14v40q0 8 6 14t14 6h100Zm240 0h100q8 0 14-6t6-14v-40q0-8-6-14t-14-6H600q-17 0-28.5 11.5T560 776q0 17 11.5 28.5T600 816ZM200 696v160-160Zm491-235-18-18q-9-9-21-8.5t-21 9.5q-9 9-9 21t9 21l32 32q12 12 28 12t28-12l90-89q9-9 9-21t-9-21q-9-9-21-8.5t-21 8.5l-76 74Zm29-205q83 0 141.5 58.5T920 456q0 83-58.5 141.5T720 656q-83 0-141.5-58.5T520 456q0-83 58.5-141.5T720 256Z"/>
    </Icon>
  );
});

IconMaterialAmbulance.displayName = 'AmauiIconMaterialAmbulance';

export default IconMaterialAmbulance;
