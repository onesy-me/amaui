import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmFilled'

      short_name='Alarm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-456v-144q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v159q0 8 3 15.5t9 13.5l112 112q11 11 28 11t28-11q11-11 11-28t-11-28L520-456ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM82-668q-11-11-11-28t11-28l114-114q11-11 28-11t28 11q11 11 11 28t-11 28L138-668q-11 11-28 11t-28-11Zm796 0q-11 11-28 11t-28-11L708-782q-11-11-11-28t11-28q11-11 28-11t28 11l114 114q11 11 11 28t-11 28Z"/>
    </Icon>
  );
});

IconMaterialAlarmFilled.displayName = 'OnesyIconMaterialAlarmFilled';

export default IconMaterialAlarmFilled;
