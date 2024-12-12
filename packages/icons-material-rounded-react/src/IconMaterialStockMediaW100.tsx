import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStockMediaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StockMediaW100'

      short_name='StockMedia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-412q-26 0-43-17t-17-43v-296q0-26 17-43t43-17h296q26 0 43 17t17 43v296q0 26-17 43t-43 17H192Zm0-28h296q14 0 23-9t9-23v-296q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v296q0 14 9 23t23 9Zm128-44-42-58q-2-3-6-3t-6 3l-37 50q-3 4-1 8t7 4h210q5 0 7-4t-1-8l-57-74q-2-3-6-3t-6 3l-62 82Zm334 352q-39 0-66.5-27.5T560-226q0-39 27.5-66.5T654-320q20 0 36.5 7t29.5 20v-197q0-13 8.5-21.5T750-520h64q6 0 10 4t4 10q0 6-4 10t-10 4h-66v266q0 39-27.5 66.5T654-132ZM160-440v-360 360Z"/>
    </Icon>
  );
});

IconMaterialStockMediaW100.displayName = 'OnesyIconMaterialStockMediaW100';

export default IconMaterialStockMediaW100;
