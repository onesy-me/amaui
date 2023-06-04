import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCake = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cake'

      short_name='Cake'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.425 0-.712-.288Q3 21.425 3 21v-5q0-.825.587-1.413Q4.175 14 5 14v-4q0-.825.588-1.413Q6.175 8 7 8h4V6.55q-.45-.3-.725-.725Q10 5.4 10 4.8q0-.375.15-.738.15-.362.45-.662l1.05-1.05q.05-.05.35-.15.05 0 .35.15L13.4 3.4q.3.3.45.662.15.363.15.738 0 .6-.275 1.025-.275.425-.725.725V8h4q.825 0 1.413.587Q19 9.175 19 10v4q.825 0 1.413.587Q21 15.175 21 16v5q0 .425-.288.712Q20.425 22 20 22Zm3-8h10v-4H7Zm-2 6h14v-4H5Zm2-6h10Zm-2 6h14Zm14-6H5h14Z"/>
    </Icon>
  );
});

IconMaterialCake.displayName = 'AmauiIconMaterialCake';

export default IconMaterialCake;
