import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCottage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cottage'

      short_name='Cottage'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon opacity=".3" points="18,19 13,19 13,15 11,15 11,19 6,19 6,10.1 12,5.52 18,10.1"/><path d="M12,3L6,7.58V6H4v3.11L1,11.4l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M18,19h-5v-4h-2v4H6v-8.9l6-4.58 l6,4.58V19z M10,1c0,1.66-1.34,3-3,3C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z"/>
    </Icon>
  );
});

IconMaterialCottage.displayName = 'OnesyIconMaterialCottage';

export default IconMaterialCottage;
