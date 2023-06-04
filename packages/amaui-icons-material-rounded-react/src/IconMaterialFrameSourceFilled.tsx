import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrameSourceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameSourceFilled'

      short_name='FrameSource'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936q-33 0-56.5-23.5T120 856V736q0-17 11.5-28.5T160 696q17 0 28.5 11.5T200 736v120h120q17 0 28.5 11.5T360 896q0 17-11.5 28.5T320 936H200Zm440 0q-17 0-28.5-11.5T600 896q0-17 11.5-28.5T640 856h120V736q0-17 11.5-28.5T800 696q17 0 28.5 11.5T840 736v120q0 33-23.5 56.5T760 936H640ZM313 576l59 59q11 11 11 27.5T372 691q-12 12-28.5 12T315 691l-87-87q-12-12-12-28t12-28l88-88q12-12 28-11.5t28 12.5q11 12 11.5 28T372 517l-59 59Zm334 0-59-59q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l87 87q12 12 12 28t-12 28l-88 88q-12 12-28 11.5T588 691q-11-12-11.5-28t11.5-28l59-59ZM160 456q-17 0-28.5-11.5T120 416V296q0-33 23.5-56.5T200 216h120q17 0 28.5 11.5T360 256q0 17-11.5 28.5T320 296H200v120q0 17-11.5 28.5T160 456Zm640 0q-17 0-28.5-11.5T760 416V296H640q-17 0-28.5-11.5T600 256q0-17 11.5-28.5T640 216h120q33 0 56.5 23.5T840 296v120q0 17-11.5 28.5T800 456Z"/>
    </Icon>
  );
});

IconMaterialFrameSourceFilled.displayName = 'AmauiIconMaterialFrameSourceFilled';

export default IconMaterialFrameSourceFilled;
