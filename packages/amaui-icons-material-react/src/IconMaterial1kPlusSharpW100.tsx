import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kPlusSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusSharpW100'
      short_name='1kPlus'

      {...props}
    >
      <path d="M16.8 13.85H17.5V12.35H19V11.65H17.5V10.15H16.8V11.65H15.3V12.35H16.8ZM11.2 14.6H11.9V12.2L14.35 14.6H15.4L12.65 11.95L15.4 9.4H14.4L11.9 11.75V9.4H11.2ZM8.1 14.6H8.8V9.4H6.6V10.1H8.1ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterial1kPlusSharpW100;
