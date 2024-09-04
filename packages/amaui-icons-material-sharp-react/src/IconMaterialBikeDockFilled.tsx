import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeDockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeDockFilled'

      short_name='BikeDock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80l170-49 70-591h240l70 591 170 49v80H120Zm320-120h80v-520h-80v520Z"/>
    </Icon>
  );
});

IconMaterialBikeDockFilled.displayName = 'AmauiIconMaterialBikeDockFilled';

export default IconMaterialBikeDockFilled;
