import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery2Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery2Bar'

      short_name='Battery2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><rect height="10" opacity=".3" width="6" x="9" y="6"/><path d="M17,5v16c0,0.55-0.45,1-1,1H8c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h2V2h4v2h2C16.55,4,17,4.45,17,5z M15,6H9v10h6V6z"/></g>
    </Icon>
  );
});

IconMaterialBattery2Bar.displayName = 'OnesyIconMaterialBattery2Bar';

export default IconMaterialBattery2Bar;
