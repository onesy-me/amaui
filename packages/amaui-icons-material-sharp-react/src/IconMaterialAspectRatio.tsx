import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAspectRatio = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatio'

      short_name='AspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 12h2V9h3V7H5Zm9 5h5v-5h-2v3h-3Zm8 3H2V4h20ZM4 18V6Zm0 0h16V6H4Z"/>
    </Icon>
  );
});

IconMaterialAspectRatio.displayName = 'AmauiIconMaterialAspectRatio';

export default IconMaterialAspectRatio;
