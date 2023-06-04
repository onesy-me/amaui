import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial360Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='360Filled'

      short_name='360'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 19.3q-.275-.275-.275-.7 0-.425.275-.7l1.1-1.1q-3.2-.425-5.3-1.75Q2 13.725 2 12q0-2.075 2.888-3.538Q7.775 7 12 7t7.113 1.462Q22 9.925 22 12q0 1.35-1.3 2.475t-3.475 1.8q-.5.15-.862-.125-.363-.275-.363-.825 0-.3.212-.587.213-.288.513-.388 1.575-.5 2.425-1.175Q20 12.5 20 12q0-.8-2.137-1.9Q15.725 9 12 9q-3.725 0-5.862 1.1Q4 11.2 4 12q0 .6 1.275 1.438Q6.55 14.275 8.9 14.7l-.6-.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterial360Filled.displayName = 'AmauiIconMaterial360Filled';

export default IconMaterial360Filled;
