import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMms = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mms'

      short_name='Mms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 17.17L5.17 16H20V4H4v13.17zM8.5 9.5l2.5 3.01L14.5 8l4.5 6H5l3.5-4.5z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-5.5-8L11 12.51 8.5 9.5 5 14h14z"/>
    </Icon>
  );
});

IconMaterialMms.displayName = 'OnesyIconMaterialMms';

export default IconMaterialMms;
