import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressSharp'
      short_name='NestWakeOnPress'

      {...props}
    >
      <path d="M19 13.125v-9h3v9Zm-12.275 8-5.75-5.75 2.175-2.25 2.875.65v-8.15q0-1.05.725-1.775.725-.725 1.775-.725 1.05 0 1.775.725.725.725.725 1.775v4.3h.8l5.3 2.575-1.425 8.625Zm.85-2h6.4l.95-5.45-4.15-2.05h-1.75v-6q0-.225-.138-.363-.137-.137-.362-.137-.225 0-.362.137-.138.138-.138.363v10.6l-4.25-.9Zm0 0h6.4Z"/>
    </Icon>
  );
});

export default IconMaterialNestWakeOnPressSharp;
