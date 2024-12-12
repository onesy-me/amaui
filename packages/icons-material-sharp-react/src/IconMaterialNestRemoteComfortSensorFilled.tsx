import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestRemoteComfortSensorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestRemoteComfortSensorFilled'

      short_name='NestRemoteComfortSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM122-616l-59-55q81-79 188-124t229-45q122 0 229 45t188 124l-59 55q-71-67-162-105.5T480-760q-105 0-196 38.5T122-616Zm570 137q-42-38-96-59.5T480-560q-62 0-115.5 21.5T268-479l-59-55q54-50 123.5-78T480-640q78 0 147 28t123 78l-58 55Z"/>
    </Icon>
  );
});

IconMaterialNestRemoteComfortSensorFilled.displayName = 'OnesyIconMaterialNestRemoteComfortSensorFilled';

export default IconMaterialNestRemoteComfortSensorFilled;
