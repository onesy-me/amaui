import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelfPositionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfPositionW100Filled'

      short_name='ShelfPosition'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 710v174h656V710H172Zm488-28h168V268H660v414Zm-488 0h168V268H172v414Zm196 0h264V268H368v414Z"/>
    </Icon>
  );
});

IconMaterialShelfPositionW100Filled.displayName = 'AmauiIconMaterialShelfPositionW100Filled';

export default IconMaterialShelfPositionW100Filled;
