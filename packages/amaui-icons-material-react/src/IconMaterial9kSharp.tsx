import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial9kSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='9kSharp'
      short_name='9k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18.075L15.75 12L18.075 9H16.25L14.5 11.25V9H13ZM6.5 15H11V9H6.5V12.5H9.5V13.5H6.5ZM8 11.5V10H9.5V11.5ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial9kSharp.displayName = 'AmauiIconMaterial9kSharp';

export default IconMaterial9kSharp;
