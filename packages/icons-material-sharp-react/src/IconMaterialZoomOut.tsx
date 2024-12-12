import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZoomOut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOut'

      short_name='ZoomOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400ZM280-540v-80h200v80H280Z"/>
    </Icon>
  );
});

IconMaterialZoomOut.displayName = 'OnesyIconMaterialZoomOut';

export default IconMaterialZoomOut;
