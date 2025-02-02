import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCases = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cases'

      short_name='Cases'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="9" opacity=".3" width="14" x="7" y="7"/><path d="M3,9H1v11c0,1.11,0.89,2,2,2h17v-2H3V9z"/><path d="M18,5V3c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v2H5v11c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5H18z M12,3h4v2h-4V3z M21,16H7 V7h14V16z"/></g></g>
    </Icon>
  );
});

IconMaterialCases.displayName = 'OnesyIconMaterialCases';

export default IconMaterialCases;
