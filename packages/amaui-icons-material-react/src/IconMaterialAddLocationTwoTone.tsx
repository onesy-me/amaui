import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLocationTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationTwoTone'
      short_name='AddLocation'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M18.5,10.2c0,2.57-2.1,5.79-6.16,9.51L12,20.01l-0.34-0.31 C7.6,15.99,5.5,12.77,5.5,10.2c0-3.84,2.82-6.7,6.5-6.7S18.5,6.35,18.5,10.2z" enable-background="new" opacity=".3"/><g><g><path d="M13,6v3h3v2h-3v3h-2v-3H8V9h3V6H13z M18,10.2C18,6.57,15.35,4,12,4s-6,2.57-6,6.2c0,2.34,1.95,5.44,6,9.14 C16.05,15.64,18,12.54,18,10.2z M12,2c4.2,0,8,3.22,8,8.2c0,3.32-2.67,7.25-8,11.8c-5.33-4.55-8-8.48-8-11.8C4,5.22,7.8,2,12,2z"/></g></g>
    </Icon>
  );
});

export default IconMaterialAddLocationTwoTone;
