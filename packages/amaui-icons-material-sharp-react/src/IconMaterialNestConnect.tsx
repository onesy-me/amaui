import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestConnect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestConnect'

      short_name='NestConnect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-2.075 0-3.537-1.462Q7 16.075 7 14v-4q0-2.075 1.463-3.537Q9.925 5 12 5t3.538 1.463Q17 7.925 17 10v4q0 2.075-1.462 3.538Q14.075 19 12 19Zm0-2q1.25 0 2.125-.875T15 14v-4q0-1.25-.875-2.125T12 7q-1.25 0-2.125.875T9 10v4q0 1.25.875 2.125T12 17Zm-7 6q-.825 0-1.413-.587Q3 21.825 3 21V3q0-.825.587-1.413Q4.175 1 5 1h14q.825 0 1.413.587Q21 2.175 21 3v18q0 .825-.587 1.413Q19.825 23 19 23Zm0-2h14V3H5v18Zm7-11q-.425 0-.712-.288Q11 9.425 11 9t.288-.713Q11.575 8 12 8t.713.287Q13 8.575 13 9t-.287.712Q12.425 10 12 10Z"/>
    </Icon>
  );
});

IconMaterialNestConnect.displayName = 'AmauiIconMaterialNestConnect';

export default IconMaterialNestConnect;
