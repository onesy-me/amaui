import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoGraphFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoGraphFilled'

      short_name='AutoGraph'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 9 7.4 6.6 5 5.5l2.4-1.1L8.5 2l1.1 2.4L12 5.5 9.6 6.6Zm6.5 3-.95-2.05L12 9l2.05-.95L15 6l.95 2.05L18 9l-2.05.95ZM4 14l-.95-2.05L1 11l2.05-.95L4 8l.95 2.05L7 11l-2.05.95Zm.5 6.5L3 19l7.5-7.5 4 4 7.1-7.975 1.4 1.4-8.5 9.575-4-4Z"/>
    </Icon>
  );
});

IconMaterialAutoGraphFilled.displayName = 'AmauiIconMaterialAutoGraphFilled';

export default IconMaterialAutoGraphFilled;
