import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAvTimerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvTimerW100Filled'

      short_name='AvTimer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-63.53 0-119.77-24Q304-220 262-262q-42-42-66-98.23-24-56.24-24-119.77 0-65 23.5-119.5t62.77-95.33Q267-704 279.5-704t21.5 9l205 205q4 4 4.5 9.5T506-470q-5 5-10 5t-10-5L280-676q-32 35-56 82.5T200-480q0 116 82 198t198 82q116 0 198-82t82-198q0-104-71-186.5T494-760v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-80q0-5.95 4.02-9.97Q474.05-788 480-788q63.53 0 119.77 24Q656-740 698-698q42 42 66 98.23 24 56.24 24 119.77 0 63.53-24 119.77Q740-304 698-262q-42 42-98.23 66-56.24 24-119.77 24ZM279.93-452Q268-452 260-460.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm200 200Q468-252 460-260.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm200-200Q668-452 660-460.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Z"/>
    </Icon>
  );
});

IconMaterialAvTimerW100Filled.displayName = 'OnesyIconMaterialAvTimerW100Filled';

export default IconMaterialAvTimerW100Filled;
