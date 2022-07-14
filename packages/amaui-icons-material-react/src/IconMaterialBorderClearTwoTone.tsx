import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderClearTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderClearTwoTone'
      short_name='BorderClear'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 3h2v2H7zm0 16h2v2H7zM3 3h2v2H3zm16 0h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM3 7h2v2H3zm0 12h2v2H3zm16 0h2v2h-2zm0-4h2v2h-2zM3 15h2v2H3zm0-4h2v2H3zm4 0h2v2H7zm8 0h2v2h-2zm-4 8h2v2h-2zm4 0h2v2h-2zm0-16h2v2h-2zm-4 0h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2zm0-4h2v2h-2z"/>
    </Icon>
  );
});

export default IconMaterialBorderClearTwoTone;
