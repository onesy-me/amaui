import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderRightW100Filled'

      short_name='BorderRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4 16v-1h1v1Zm0-8v-1h1v1Zm0-8v-1h1v1Zm4 16v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4 16v-1h1v1Zm0-8v-1h1v1Zm0-8v-1h1v1Zm4 16v-17h1v17Z"/>
    </Icon>
  );
});

IconMaterialBorderRightW100Filled.displayName = 'AmauiIconMaterialBorderRightW100Filled';

export default IconMaterialBorderRightW100Filled;
