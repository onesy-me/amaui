import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMilitaryTechTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechTwoTone'
      short_name='MilitaryTech'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="13,11.07 15,9.87 15,4 13,4"/><polygon opacity=".3" points="9,4 9,9.87 11,11.07 11,4"/><path d="M17,10.43V2H7v8.43c0,0.35,0.18,0.68,0.49,0.86l4.18,2.51l-0.99,2.34l-3.41,0.29l2.59,2.24L9.07,22L12,20.23L14.93,22 l-0.78-3.33l2.59-2.24l-3.41-0.29l-0.99-2.34l4.18-2.51C16.82,11.11,17,10.79,17,10.43z M11,11.07l-2-1.2V4h2V11.07z M15,9.87 l-2,1.2V4h2V9.87z"/></g></g>
    </Icon>
  );
});

export default IconMaterialMilitaryTechTwoTone;
