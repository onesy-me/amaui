import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLunchDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LunchDiningFilled'

      short_name='LunchDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 10q-.425 0-.712-.288Q2 9.425 2 9q0-2.875 2.713-4.438Q7.425 3 12 3q4.575 0 7.288 1.562Q22 6.125 22 9q0 .425-.288.712Q21.425 10 21 10Zm-1 3.5q0-.35.25-.688.25-.337.7-.562.45-.225.95-.488.5-.262 1.45-.262 1.4 0 1.9.5t1.4.5q.9 0 1.425-.5T12 11.5q1.4 0 1.925.5.525.5 1.425.5t1.4-.5q.5-.5 1.9-.5.925 0 1.45.25.525.25.95.475.425.225.688.562.262.338.262.713 0 .425-.362.675-.363.25-.738.15-.75-.2-1.088-.513-.337-.312-1.062-.312-.9 0-1.45.5-.55.5-1.95.5t-1.925-.5q-.525-.5-1.425-.5t-1.425.5q-.525.5-1.925.5t-1.9-.5q-.5-.5-1.4-.5-.725 0-1.1.312-.375.313-1.15.513-.375.1-.738-.15Q2 13.925 2 13.5ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19v-1q0-.825.588-1.413Q3.175 16 4 16h16q.825 0 1.413.587Q22 17.175 22 18v1q0 .825-.587 1.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialLunchDiningFilled.displayName = 'AmauiIconMaterialLunchDiningFilled';

export default IconMaterialLunchDiningFilled;
