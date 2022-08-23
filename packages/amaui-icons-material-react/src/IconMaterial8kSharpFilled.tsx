import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial8kSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kSharpFilled'
      short_name='8k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM6.5 15H11V9H6.5ZM8 11.5V10H9.5V11.5ZM8 14V12.5H9.5V14ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterial8kSharpFilled.displayName = 'AmauiIconMaterial8kSharpFilled';

export default IconMaterial8kSharpFilled;
