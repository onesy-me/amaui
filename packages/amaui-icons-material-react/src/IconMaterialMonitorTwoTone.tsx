import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorTwoTone'
      short_name='Monitor'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v11c0,1.1,0.9,2,2,2h3l-1,1v2h12v-2l-1-1h3c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,16H4V5h16 V16z"/></g><rect height="11" opacity=".3" width="16" x="4" y="5"/></g>
    </Icon>
  );
});

export default IconMaterialMonitorTwoTone;
