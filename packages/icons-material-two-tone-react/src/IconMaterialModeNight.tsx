import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeNight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeNight'

      short_name='ModeNight'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M9.5,4C9.16,4,8.82,4.02,8.49,4.07C10.4,6.23,11.5,9.05,11.5,12s-1.1,5.77-3.01,7.93 C8.82,19.98,9.16,20,9.5,20c4.41,0,8-3.59,8-8S13.91,4,9.5,4z" opacity=".3"/><path d="M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22 c5.52,0,10-4.48,10-10S15.02,2,9.5,2z M9.5,20c-0.34,0-0.68-0.02-1.01-0.07c1.91-2.16,3.01-4.98,3.01-7.93s-1.1-5.77-3.01-7.93 C8.82,4.02,9.16,4,9.5,4c4.41,0,8,3.59,8,8S13.91,20,9.5,20z"/></g></g>
    </Icon>
  );
});

IconMaterialModeNight.displayName = 'OnesyIconMaterialModeNight';

export default IconMaterialModeNight;
