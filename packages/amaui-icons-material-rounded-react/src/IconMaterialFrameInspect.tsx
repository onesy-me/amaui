import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrameInspect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameInspect'

      short_name='FrameInspect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M450 636q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0 80q-71 0-120.5-49.5T280 546q0-71 49.5-120.5T450 376q71 0 120.5 49.5T620 546q0 23-6.5 45.5T594 634l78 78q12 12 11.5 28T671 768q-12 11-28 11.5T615 768l-77-77q-20 13-42.5 19t-45.5 6ZM200 936q-33 0-56.5-23.5T120 856V736q0-17 11.5-28.5T160 696q17 0 28.5 11.5T200 736v120h120q17 0 28.5 11.5T360 896q0 17-11.5 28.5T320 936H200Zm440 0q-17 0-28.5-11.5T600 896q0-17 11.5-28.5T640 856h120V736q0-17 11.5-28.5T800 696q17 0 28.5 11.5T840 736v120q0 33-23.5 56.5T760 936H640ZM160 456q-17 0-28.5-11.5T120 416V296q0-33 23.5-56.5T200 216h120q17 0 28.5 11.5T360 256q0 17-11.5 28.5T320 296H200v120q0 17-11.5 28.5T160 456Zm640 0q-17 0-28.5-11.5T760 416V296H640q-17 0-28.5-11.5T600 256q0-17 11.5-28.5T640 216h120q33 0 56.5 23.5T840 296v120q0 17-11.5 28.5T800 456Z"/>
    </Icon>
  );
});

IconMaterialFrameInspect.displayName = 'AmauiIconMaterialFrameInspect';

export default IconMaterialFrameInspect;
