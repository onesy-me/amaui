import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabledFilled'

      short_name='HourglassDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m819-28-52-52H160v-80h80v-120q0-61 28.5-114.5T348-480q-32-20-54.5-48T257-590L27-820l57-57L876-85l-57 57ZM602-474l-60-59q45-19 71.5-59t26.5-88v-120H320v45l-45-45-80-80h605v80h-80v120q0 64-31 119t-87 87ZM320-160h320v-47L419-428q-45 19-72 59t-27 89v120Zm400 0Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledFilled.displayName = 'OnesyIconMaterialHourglassDisabledFilled';

export default IconMaterialHourglassDisabledFilled;
