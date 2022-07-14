import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardSharp'
      short_name='Keyboard'

      {...props}
    >
      <path d="M4 17H20V7H4ZM2 19V5H22V19ZM11 10H13V8H11ZM11 13H13V11H11ZM8 10H10V8H8ZM8 13H10V11H8ZM5 13H7V11H5ZM5 10H7V8H5ZM8 16H16V14H8ZM14 13H16V11H14ZM14 10H16V8H14ZM17 13H19V11H17ZM17 10H19V8H17ZM4 17V7V17Z"/>
    </Icon>
  );
});

export default IconMaterialKeyboardSharp;
