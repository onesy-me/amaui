import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountCircleTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleTwoTone'
      short_name='AccountCircle'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,4c-4.42,0-8,3.58-8,8c0,1.95,0.7,3.73,1.86,5.12C7.55,15.8,9.68,15,12,15 s4.45,0.8,6.14,2.12C19.3,15.73,20,13.95,20,12C20,7.58,16.42,4,12,4z M12,13c-1.93,0-3.5-1.57-3.5-3.5C8.5,7.57,10.07,6,12,6 s3.5,1.57,3.5,3.5C15.5,11.43,13.93,13,12,13z" enable-background="new" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-1.74,0-3.34-0.56-4.65-1.5 C8.66,17.56,10.26,17,12,17s3.34,0.56,4.65,1.5C15.34,19.44,13.74,20,12,20z M18.14,17.12C16.45,15.8,14.32,15,12,15 s-4.45,0.8-6.14,2.12C4.7,15.73,4,13.95,4,12c0-4.42,3.58-8,8-8s8,3.58,8,8C20,13.95,19.3,15.73,18.14,17.12z"/><path d="M12,5.93c-1.93,0-3.5,1.57-3.5,3.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5C15.5,7.5,13.93,5.93,12,5.93z M12,10.93 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S12.83,10.93,12,10.93z"/></g></g>
    </Icon>
  );
});

IconMaterialAccountCircleTwoTone.displayName = 'AmauiIconMaterialAccountCircleTwoTone';

export default IconMaterialAccountCircleTwoTone;
