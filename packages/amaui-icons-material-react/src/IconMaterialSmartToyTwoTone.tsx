import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartToyTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartToyTwoTone'
      short_name='SmartToy'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M18,7H6v12h12V7z M7.5,11.5C7.5,10.67,8.17,10,9,10s1.5,0.67,1.5,1.5S9.83,13,9,13S7.5,12.33,7.5,11.5z M16,17H8v-2h8V17z M15,13c-0.83,0-1.5-0.67-1.5-1.5S14.17,10,15,10s1.5,0.67,1.5,1.5S15.83,13,15,13z" opacity=".3"/><rect height="2" width="8" x="8" y="15"/><path d="M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3C23,10.34,21.66,9,20,9z M18,19H6V7h12V19z"/><circle cx="15" cy="11.5" r="1.5"/><circle cx="9" cy="11.5" r="1.5"/></g></g>
    </Icon>
  );
});

export default IconMaterialSmartToyTwoTone;
