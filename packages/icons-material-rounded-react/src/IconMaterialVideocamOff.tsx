import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideocamOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOff'

      short_name='VideocamOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-540 126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420q0 17-11.5 28.5T680-380q-17 0-28.5-11.5T640-420v-300H360q-20 0-30-12.5T320-760q0-15 10-27.5t30-12.5h280q33 0 56.5 23.5T720-720v180Zm74 486L54-794q-11-11-11-28t11-28q11-11 28-11t28 11l740 740q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM498-575ZM382-464ZM160-800l80 80h-80v480h480v-80l80 80q0 33-23.5 56.5T640-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Z"/>
    </Icon>
  );
});

IconMaterialVideocamOff.displayName = 'OnesyIconMaterialVideocamOff';

export default IconMaterialVideocamOff;
