import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewWeekFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekFilled'

      short_name='CalendarViewWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M550-200q-17 0-28.5-11.5T510-240v-480q0-17 11.5-28.5T550-760h55q17 0 28.5 11.5T645-720v480q0 17-11.5 28.5T605-200h-55Zm-195 0q-17 0-28.5-11.5T315-240v-480q0-17 11.5-28.5T355-760h55q17 0 28.5 11.5T450-720v480q0 17-11.5 28.5T410-200h-55Zm-195 0q-17 0-28.5-11.5T120-240v-480q0-17 11.5-28.5T160-760h55q17 0 28.5 11.5T255-720v480q0 17-11.5 28.5T215-200h-55Zm585 0q-17 0-28.5-11.5T705-240v-480q0-17 11.5-28.5T745-760h55q17 0 28.5 11.5T840-720v480q0 17-11.5 28.5T800-200h-55Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekFilled.displayName = 'OnesyIconMaterialCalendarViewWeekFilled';

export default IconMaterialCalendarViewWeekFilled;
