import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoScheduleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoScheduleRoundedFilled'
      short_name='AutoSchedule'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Zm6.575-1.9-.825-1.85-1.85-.825Q8.625 15.3 8.625 15t.275-.425l1.85-.825.825-1.85q.125-.275.425-.275t.425.275l.825 1.85 1.85.825q.275.125.275.425t-.275.425l-1.85.825-.825 1.85q-.125.275-.425.275t-.425-.275Z"/>
    </Icon>
  );
});

export default IconMaterialAutoScheduleRoundedFilled;
