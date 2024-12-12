import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBalcony = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Balcony'

      short_name='Balcony'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-480v-80h80v80h-80Zm240 0v-80h80v80h-80ZM120-80v-320h40v-160q0-66 25-124.5t68.5-102Q297-830 355.5-855T480-880q66 0 124.5 25t102 68.5Q750-743 775-684.5T800-560v160h40v320H120Zm80-80h80v-160h-80v160Zm160 0h80v-160h-80v160ZM240-400h200v-397q-86 14-143 80.5T240-560v160Zm280 0h200v-160q0-90-57-156.5T520-797v397Zm0 240h80v-160h-80v160Zm160 0h80v-160h-80v160Z"/>
    </Icon>
  );
});

IconMaterialBalcony.displayName = 'OnesyIconMaterialBalcony';

export default IconMaterialBalcony;
