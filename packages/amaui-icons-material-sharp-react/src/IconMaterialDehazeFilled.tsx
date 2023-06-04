import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDehazeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeFilled'

      short_name='Dehaze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18v-2h20v2Zm0-5v-2h20v2Zm0-5V6h20v2Z"/>
    </Icon>
  );
});

IconMaterialDehazeFilled.displayName = 'AmauiIconMaterialDehazeFilled';

export default IconMaterialDehazeFilled;
