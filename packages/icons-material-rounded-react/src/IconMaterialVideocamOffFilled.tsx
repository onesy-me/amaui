import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideocamOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffFilled'

      short_name='VideocamOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-540 126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L713-427q-10 14-28.5 17T652-421L341-732q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h270q33 0 56.5 23.5T720-720v180Zm74 486L54-794q-11-11-11-28t11-28q11-11 28-11t28 11l740 740q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM160-800l560 560q0 33-23.5 56.5T640-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffFilled.displayName = 'OnesyIconMaterialVideocamOffFilled';

export default IconMaterialVideocamOffFilled;
