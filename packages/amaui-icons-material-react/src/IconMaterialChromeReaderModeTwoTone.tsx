import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChromeReaderModeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeTwoTone'
      short_name='ChromeReaderMode'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 6h8v13H3z" opacity=".3"/><path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM11 19H3V6h8v13zm10 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeTwoTone.displayName = 'AmauiIconMaterialChromeReaderModeTwoTone';

export default IconMaterialChromeReaderModeTwoTone;
