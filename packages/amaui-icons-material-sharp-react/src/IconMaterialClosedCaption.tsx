import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaption = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaption'

      short_name='ClosedCaption'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 15h5v-2H9.5v.5h-2v-3h2v.5H11V9H6Zm7 0h5v-2h-1.5v.5h-2v-3h2v.5H18V9h-5ZM3 20V4h18v16Zm2-2h14V6H5Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialClosedCaption.displayName = 'AmauiIconMaterialClosedCaption';

export default IconMaterialClosedCaption;
