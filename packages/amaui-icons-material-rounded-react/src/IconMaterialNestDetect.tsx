import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestDetect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDetect'

      short_name='NestDetect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 22q-1.45 0-2.475-1.025Q6 19.95 6 18.5V4q0-.825.588-1.413Q7.175 2 8 2h3q.825 0 1.413.587Q13 3.175 13 4v14.5q0 1.45-1.025 2.475Q10.95 22 9.5 22ZM8 15.35q.35-.175.713-.263Q9.075 15 9.5 15q.425 0 .788.087.362.088.712.263V4H8ZM9.5 20q.625 0 1.062-.438Q11 19.125 11 18.5t-.438-1.062Q10.125 17 9.5 17t-1.062.438Q8 17.875 8 18.5t.438 1.062Q8.875 20 9.5 20Zm7.5-2q-.825 0-1.412-.587Q15 16.825 15 16V8q0-.825.588-1.412Q16.175 6 17 6h1q.825 0 1.413.588Q20 7.175 20 8v8q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h1V8h-1v8Z"/>
    </Icon>
  );
});

IconMaterialNestDetect.displayName = 'AmauiIconMaterialNestDetect';

export default IconMaterialNestDetect;
