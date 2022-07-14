import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedTwoTone'
      short_name='ImageNotSupported'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><g><path d="M7.83,5H19v11.17L7.83,5z M16.17,19l-2-2H6l3-4l2,2.72l0.84-1.05L5,7.83V19H16.17z" opacity=".3"/><path d="M5.83,3H19c1.1,0,2,0.9,2,2v13.17l-2-2V5H7.83L5.83,3z M20.49,23.31L18.17,21H5c-1.1,0-2-0.9-2-2V5.83L0.69,3.51L2.1,2.1 l1.49,1.49L5,5l8.11,8.11l2.69,2.69L19,19l1.41,1.41l1.49,1.49L20.49,23.31z M16.17,19l-2-2H6l3-4l2,2.72l0.84-1.05L5,7.83V19 H16.17z"/></g></g>
    </Icon>
  );
});

export default IconMaterialImageNotSupportedTwoTone;
