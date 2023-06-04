import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCases = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cases'

      short_name='Cases'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 22V9h2v11h17v2Zm4-4V5h5V1h8v4h5v13Zm7-13h4V3h-4ZM7 16h14V7H7Zm0-9v9Z"/>
    </Icon>
  );
});

IconMaterialCases.displayName = 'AmauiIconMaterialCases';

export default IconMaterialCases;
