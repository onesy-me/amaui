import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircle'

      short_name='CheckCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.6 13.8-2.175-2.175q-.275-.275-.687-.262-.413.012-.688.287-.275.275-.275.7 0 .425.275.7L9.9 15.9q.275.275.7.275.425 0 .7-.275l5.675-5.675q.275-.275.263-.688-.013-.412-.288-.687-.275-.275-.7-.275-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialCheckCircle.displayName = 'AmauiIconMaterialCheckCircle';

export default IconMaterialCheckCircle;
