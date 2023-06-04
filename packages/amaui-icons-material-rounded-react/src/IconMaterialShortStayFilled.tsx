import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShortStayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortStayFilled'

      short_name='ShortStay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 16.8v-2.3q0-.2-.15-.35Q17.2 14 17 14q-.2 0-.35.15-.15.15-.15.35V17q0 .05.15.35l1.675 1.675q.15.15.35.15.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35ZM9.5 9q-.825 0-1.412-.588Q7.5 7.825 7.5 7t.588-1.412Q8.675 5 9.5 5t1.413.588Q11.5 6.175 11.5 7t-.587 1.412Q10.325 9 9.5 9ZM17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V4q0-.825.587-1.413Q4.175 2 5 2h9q.825 0 1.413.587Q16 3.175 16 4v6.075q-.55.075-1.05.237-.5.163-.95.363V4H5v6.525q.45-.275.95-.4Q6.45 10 7 10h5q.575 0 1.113.162.537.163 1.037.438-1.275.575-2.212 1.55-.938.975-1.438 2.25V14q0-.425-.287-.713Q9.925 13 9.5 13t-.712.287Q8.5 13.575 8.5 14v1h-1q-.425 0-.713.287-.287.288-.287.713t.287.712Q7.075 17 7.5 17h1v1q0 .425.288.712.287.288.712.288.2 0 .4-.075t.325-.225q.25.95.713 1.8.462.85 1.162 1.5Z"/>
    </Icon>
  );
});

IconMaterialShortStayFilled.displayName = 'AmauiIconMaterialShortStayFilled';

export default IconMaterialShortStayFilled;
