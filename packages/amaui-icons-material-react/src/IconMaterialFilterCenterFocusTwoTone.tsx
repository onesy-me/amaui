import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterCenterFocusTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterCenterFocusTwoTone'
      short_name='FilterCenterFocus'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm7 4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm7-6h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4z"/>
    </Icon>
  );
});

export default IconMaterialFilterCenterFocusTwoTone;
