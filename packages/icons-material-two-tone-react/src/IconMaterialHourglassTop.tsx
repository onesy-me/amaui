import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassTop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassTop'

      short_name='HourglassTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="8,7.5 12,11.5 16,7.5 16,4 8,4"/><polygon opacity=".3" points="8,7.5 12,11.5 16,7.5 16,4 8,4"/><path d="M18,2H6v6l4,4l-3.99,4.01L6,22h12l-0.01-5.99L14,12l4-3.99V2z M16,16.5V20H8v-3.5l4-4L16,16.5z M16,7.5l-4,4l-4-4V4h8V7.5 z"/></g></g>
    </Icon>
  );
});

IconMaterialHourglassTop.displayName = 'OnesyIconMaterialHourglassTop';

export default IconMaterialHourglassTop;
