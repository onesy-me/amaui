import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsights = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Insights'

      short_name='Insights'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20q-.825 0-1.412-.587Q1 18.825 1 18q0-.825.588-1.413Q2.175 16 3 16h.263q.112 0 .237.05l4.55-4.55Q8 11.375 8 11.262V11q0-.825.588-1.413Q9.175 9 10 9t1.413.587Q12 10.175 12 11q0 .05-.05.5l2.55 2.55q.125-.05.238-.05h.524q.113 0 .238.05l3.55-3.55q-.05-.125-.05-.238V10q0-.825.587-1.413Q20.175 8 21 8q.825 0 1.413.587Q23 9.175 23 10q0 .825-.587 1.412Q21.825 12 21 12h-.262q-.113 0-.238-.05l-3.55 3.55q.05.125.05.238V16q0 .825-.587 1.413Q15.825 18 15 18q-.825 0-1.412-.587Q13 16.825 13 16v-.262q0-.113.05-.238l-2.55-2.55q-.125.05-.238.05H10q-.05 0-.5-.05L4.95 17.5q.05.125.05.238V18q0 .825-.588 1.413Q3.825 20 3 20ZM4 9.975l-.625-1.35L2.025 8l1.35-.625L4 6.025l.625 1.35L5.975 8l-1.35.625ZM15 9l-.95-2.05L12 6l2.05-.95L15 3l.95 2.05L18 6l-2.05.95Z"/>
    </Icon>
  );
});

IconMaterialInsights.displayName = 'OnesyIconMaterialInsights';

export default IconMaterialInsights;
