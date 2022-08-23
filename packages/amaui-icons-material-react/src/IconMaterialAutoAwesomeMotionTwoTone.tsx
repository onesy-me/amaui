import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMotionTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionTwoTone'
      short_name='AutoAwesomeMotion'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" x="0"/></g><g><g><rect height="8" opacity=".3" width="8" x="12" y="12"/><path d="M14,2H4C2.9,2,2,2.9,2,4v10h2V4h10V2z"/><path d="M20,10h-8c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-8C22,10.9,21.1,10,20,10z M20,20h-8v-8h8V20z"/><path d="M18,6H8C6.9,6,6,6.9,6,8v10h2V8h10V6z"/></g></g>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotionTwoTone.displayName = 'AmauiIconMaterialAutoAwesomeMotionTwoTone';

export default IconMaterialAutoAwesomeMotionTwoTone;
