import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessMediumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessMediumFilled'

      short_name='BrightnessMedium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 20H6q-.825 0-1.412-.587Q4 18.825 4 18v-2.65L2.075 13.4Q1.5 12.825 1.5 12t.575-1.4L4 8.65V6q0-.825.588-1.412Q5.175 4 6 4h2.65l1.95-1.925Q11.175 1.5 12 1.5t1.4.575L15.35 4H18q.825 0 1.413.588Q20 5.175 20 6v2.65l1.925 1.95q.575.575.575 1.4t-.575 1.4L20 15.35V18q0 .825-.587 1.413Q18.825 20 18 20h-2.65l-1.95 1.925q-.575.575-1.4.575t-1.4-.575ZM12 17q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7Z"/>
    </Icon>
  );
});

IconMaterialBrightnessMediumFilled.displayName = 'AmauiIconMaterialBrightnessMediumFilled';

export default IconMaterialBrightnessMediumFilled;
