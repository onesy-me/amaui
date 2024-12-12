import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNewOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOffFilled'

      short_name='OpenInNewOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m763-84-37-36H200q-33 0-56.5-23.5T120-200v-526l-37-37q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM200-200h446L451-395l-35 35q-11 11-28 11t-28-11q-11-11-11-28t11-28l35-35-195-195v446Zm240-560H320q-20 0-30-12.5T280-800q0-15 10-27.5t30-12.5h120q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760Zm320 56L593-537q-11 11-28 11t-28-11q-11-11-11-28t11-28l167-167H600q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h200q17 0 28.5 11.5T840-800v200q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-104Zm80 264v120q0 20-12.5 30T800-280q-15 0-27.5-10.5T760-321v-119q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewOffFilled.displayName = 'OnesyIconMaterialOpenInNewOffFilled';

export default IconMaterialOpenInNewOffFilled;
