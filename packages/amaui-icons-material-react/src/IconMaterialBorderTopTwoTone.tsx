import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderTopTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderTopTwoTone'
      short_name='BorderTop'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19h2v2h-2zM3 19h2v2H3zm8 0h2v2h-2zm-8-8h2v2H3zm0 4h2v2H3zm4 4h2v2H7zm4-12h2v2h-2zm0 4h2v2h-2zM3 7h2v2H3zm0-4h18v2H3zm8 12h2v2h-2zm4 4h2v2h-2zm-8-8h2v2H7zm8 0h2v2h-2zm4 4h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"/>
    </Icon>
  );
});

export default IconMaterialBorderTopTwoTone;
