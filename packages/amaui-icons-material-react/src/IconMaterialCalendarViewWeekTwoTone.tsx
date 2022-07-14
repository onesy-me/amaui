import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekTwoTone'
      short_name='CalendarViewWeek'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="12" opacity=".3" width="2.5" x="8.5" y="6"/><rect height="12" opacity=".3" width="2.5" x="13" y="6"/><rect height="12" opacity=".3" width="2.5" x="4" y="6"/><rect height="12" opacity=".3" width="2.5" x="17.5" y="6"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M6.5,18H4V6h2.5V18z M11,18H8.5V6 H11V18z M15.5,18H13V6h2.5V18z M20,18h-2.5V6H20V18z"/></g></g>
    </Icon>
  );
});

export default IconMaterialCalendarViewWeekTwoTone;
