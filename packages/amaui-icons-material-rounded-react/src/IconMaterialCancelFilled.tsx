import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelFilled'

      short_name='Cancel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.7 16.3q.275.275.7.275.425 0 .7-.275l2.9-2.9 2.925 2.925q.275.275.688.262.412-.012.687-.287.275-.275.275-.7 0-.425-.275-.7L13.4 12l2.925-2.925q.275-.275.262-.688-.012-.412-.287-.687-.275-.275-.7-.275-.425 0-.7.275L12 10.6 9.075 7.675Q8.8 7.4 8.388 7.412q-.413.013-.688.288-.275.275-.275.7 0 .425.275.7l2.9 2.9-2.925 2.925q-.275.275-.262.687.012.413.287.688ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialCancelFilled.displayName = 'AmauiIconMaterialCancelFilled';

export default IconMaterialCancelFilled;
