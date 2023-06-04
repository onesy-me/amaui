import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCellTower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellTower'

      short_name='CellTower'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M7.3,14.7l1.2-1.2c-1-1-1.5-2.3-1.5-3.5c0-1.3,0.5-2.6,1.5-3.5L7.3,5.3c-1.3,1.3-2,3-2,4.7S6,13.4,7.3,14.7z"/><path d="M19.1,2.9l-1.2,1.2c1.6,1.6,2.4,3.8,2.4,5.9c0,2.1-0.8,4.3-2.4,5.9l1.2,1.2c2-2,2.9-4.5,2.9-7.1C22,7.4,21,4.9,19.1,2.9z"/><path d="M6.1,4.1L4.9,2.9C3,4.9,2,7.4,2,10c0,2.6,1,5.1,2.9,7.1l1.2-1.2c-1.6-1.6-2.4-3.8-2.4-5.9C3.7,7.9,4.5,5.7,6.1,4.1z"/><path d="M16.7,14.7c1.3-1.3,2-3,2-4.7c-0.1-1.7-0.7-3.4-2-4.7l-1.2,1.2c1,1,1.5,2.3,1.5,3.5c0,1.3-0.5,2.6-1.5,3.5L16.7,14.7z"/><path d="M14.5,10c0-1.38-1.12-2.5-2.5-2.5S9.5,8.62,9.5,10c0,0.76,0.34,1.42,0.87,1.88L7,22h2l0.67-2h4.67L15,22h2l-3.37-10.12 C14.16,11.42,14.5,10.76,14.5,10z M10.33,18L12,13l1.67,5H10.33z"/></g></g>
    </Icon>
  );
});

IconMaterialCellTower.displayName = 'AmauiIconMaterialCellTower';

export default IconMaterialCellTower;
