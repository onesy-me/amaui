import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileUploadOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUploadOffRounded'
      short_name='FileUploadOff'

      {...props}
    >
      <path d="m12 4 5 5-1.4 1.45-2.6-2.6v2.3l-2-2-1.575-1.575ZM2.8 2.8l18.4 18.4-1.425 1.425L17.15 20H6q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h9.15L1.375 4.225ZM11 16v-5l2 2v3Z"/>
    </Icon>
  );
});

IconMaterialFileUploadOffRounded.displayName = 'AmauiIconMaterialFileUploadOffRounded';

export default IconMaterialFileUploadOffRounded;
