import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShareOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareOffW100Filled'

      short_name='ShareOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-112q-62 0-105-43T92-260q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm0-128 60 60q4 4 9.5 4.5T320-180q5-5 5-10t-5-10l-60-60 60-60q4-4 4.5-9.5T320-340q-5-5-10-5t-10 5l-60 60-60-60q-4-4-9.5-4.5T160-340q-5 5-5 10t5 10l60 60-60 60q-4 4-4.5 9.5T160-180q5 5 10 5t10-5l60-60Zm74-298 318-188q-3-8-4.5-17t-1.5-17q0-39 27.5-66.5T720-854q39 0 66.5 27.5T814-760q0 39-27.5 66.5T720-666q-22 0-41-9.5T646-702L319-511q-8 5-17.5 6.5T282-505q-11-2-21-2.5t-21-.5q-17 0-34 2t-33 7q-9 2-15.5-3.5T154-516q10-26 33.5-42t52.5-16q22 0 41 9.5t33 26.5Zm406 432q-39 0-66.5-27.5T626-200q0-8 1.5-17t4.5-17l-152-90q-5-3-6.5-8.5T475-343q3-5 8.5-6.5T494-348l152 90q14-17 33-26.5t41-9.5q39 0 66.5 27.5T814-200q0 39-27.5 66.5T720-106Z"/>
    </Icon>
  );
});

IconMaterialShareOffW100Filled.displayName = 'OnesyIconMaterialShareOffW100Filled';

export default IconMaterialShareOffW100Filled;
