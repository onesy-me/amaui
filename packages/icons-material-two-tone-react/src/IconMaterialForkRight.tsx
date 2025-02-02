import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForkRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkRight'

      short_name='ForkRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M14.59,15.59L16,17l4-4l-4-4l-1.41,1.41L16.17,12c-1.51-0.33-3.73,0.08-5.17,1.36l0-6.53l1.59,1.59L14,7l-4-4L6,7 l1.41,1.41L9,6.83V21l2,0v-4c0.73-2.58,3.07-3.47,5.17-3L14.59,15.59z"/></g>
    </Icon>
  );
});

IconMaterialForkRight.displayName = 'OnesyIconMaterialForkRight';

export default IconMaterialForkRight;
