import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMultipleStop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultipleStop'

      short_name='MultipleStop'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M17,4l4,4l-4,4V9h-4V7h4V4z M10,7C9.45,7,9,7.45,9,8s0.45,1,1,1s1-0.45,1-1S10.55,7,10,7z M6,7C5.45,7,5,7.45,5,8 s0.45,1,1,1s1-0.45,1-1S6.55,7,6,7z M7,17h4v-2H7v-3l-4,4l4,4V17z M14,17c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1s-1,0.45-1,1 C13,16.55,13.45,17,14,17z M18,17c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1s-1,0.45-1,1C17,16.55,17.45,17,18,17z"/></g>
    </Icon>
  );
});

IconMaterialMultipleStop.displayName = 'OnesyIconMaterialMultipleStop';

export default IconMaterialMultipleStop;
