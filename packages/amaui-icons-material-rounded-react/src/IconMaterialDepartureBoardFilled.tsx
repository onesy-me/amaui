import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDepartureBoardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DepartureBoardFilled'

      short_name='DepartureBoard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.275 8.025q.15.15.375.15t.375-.15q.15-.15.15-.375t-.15-.375L18.5 5.8V3.5q0-.2-.15-.35Q18.2 3 18 3q-.2 0-.35.15-.15.15-.15.35V6q0 .05.15.35ZM6.5 17q.625 0 1.062-.438Q8 16.125 8 15.5t-.438-1.062Q7.125 14 6.5 14t-1.062.438Q5 14.875 5 15.5t.438 1.062Q5.875 17 6.5 17Zm7 0q.625 0 1.062-.438Q15 16.125 15 15.5t-.438-1.062Q14.125 14 13.5 14t-1.062.438Q12 14.875 12 15.5t.438 1.062Q12.875 17 13.5 17Zm4.5-6q-2.075 0-3.537-1.463Q13 8.075 13 6t1.463-3.538Q15.925 1 18 1t3.538 1.462Q23 3.925 23 6q0 2.075-1.462 3.537Q20.075 11 18 11ZM4.5 22q-.625 0-1.062-.438Q3 21.125 3 20.5v-1.55q-.45-.5-.725-1.113Q2 17.225 2 16.5V7q0-.75.288-1.513.287-.762 1.274-1.362.988-.6 2.913-.913Q8.4 2.9 11.65 3.05q-.475 1.2-.6 2.437-.125 1.238.25 2.513H4v3h9.1q.95.95 2.212 1.475Q16.575 13 18 13v3.5q0 .725-.275 1.337-.275.613-.725 1.113v1.55q0 .625-.438 1.062Q16.125 22 15.5 22t-1.062-.438Q14 21.125 14 20.5V20H6v.5q0 .625-.438 1.062Q5.125 22 4.5 22Z"/>
    </Icon>
  );
});

IconMaterialDepartureBoardFilled.displayName = 'AmauiIconMaterialDepartureBoardFilled';

export default IconMaterialDepartureBoardFilled;
