import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDepartureBoard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DepartureBoard'

      short_name='DepartureBoard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.65 8.4.75-.75-1.9-1.85V3h-1v3.2ZM6.5 17q.625 0 1.062-.438Q8 16.125 8 15.5t-.438-1.062Q7.125 14 6.5 14t-1.062.438Q5 14.875 5 15.5t.438 1.062Q5.875 17 6.5 17Zm7 0q.625 0 1.062-.438Q15 16.125 15 15.5t-.438-1.062Q14.125 14 13.5 14t-1.062.438Q12 14.875 12 15.5t.438 1.062Q12.875 17 13.5 17ZM3 22v-3.05q-.45-.5-.725-1.113Q2 17.225 2 16.5V7q0-.75.288-1.513.287-.762 1.274-1.362.988-.6 2.913-.913Q8.4 2.9 11.65 3.05q-.2.475-.338.962-.137.488-.212.988-2.8-.075-4.425.2T4.45 6H11q0 .5.075 1t.225 1H4v3h9.1q.95.95 2.212 1.475Q16.575 13 18 13v3.5q0 .725-.275 1.337-.275.613-.725 1.113V22h-3v-2H6v2Zm11-9H4h12-2Zm4-2q-2.075 0-3.537-1.463Q13 8.075 13 6t1.463-3.538Q15.925 1 18 1t3.538 1.462Q23 3.925 23 6q0 2.075-1.462 3.537Q20.075 11 18 11ZM6 18h8q.825 0 1.413-.587Q16 16.825 16 16v-3H4v3q0 .825.588 1.413Q5.175 18 6 18Zm5-12H4.45 11Z"/>
    </Icon>
  );
});

IconMaterialDepartureBoard.displayName = 'AmauiIconMaterialDepartureBoard';

export default IconMaterialDepartureBoard;
