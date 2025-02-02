import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDialerSipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialerSipW100Filled'

      short_name='DialerSip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M759-172q-103 0-207.5-48.5T358.5-358Q270-447 221-552.5T172-759v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29ZM502-638v-28h70v-34h-70v-88h98v28h-70v32h70v90h-98Zm128 0v-150h28v150h-28Zm58 0v-150h100v88h-72v62h-28Zm28-90h44v-32h-44v32Z"/>
    </Icon>
  );
});

IconMaterialDialerSipW100Filled.displayName = 'OnesyIconMaterialDialerSipW100Filled';

export default IconMaterialDialerSipW100Filled;
