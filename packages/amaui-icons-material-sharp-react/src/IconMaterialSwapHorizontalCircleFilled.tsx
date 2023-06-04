import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapHorizontalCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizontalCircleFilled'

      short_name='SwapHorizontalCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9 18 1.4-1.4L8.85 15H13v-2H8.85l1.55-1.6L9 10l-4 4Zm6-4 4-4-4-4-1.4 1.4L15.15 9H11v2h4.15l-1.55 1.6Zm-3 8q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizontalCircleFilled.displayName = 'AmauiIconMaterialSwapHorizontalCircleFilled';

export default IconMaterialSwapHorizontalCircleFilled;
