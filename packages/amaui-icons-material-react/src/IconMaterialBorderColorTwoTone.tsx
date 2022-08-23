import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderColorTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorTwoTone'
      short_name='BorderColor'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M16.81,8.94l-3.75-3.75L4,14.25V18h3.75L16.81,8.94z M6,16v-0.92l7.06-7.06l0.92,0.92L6.92,16H6z"/><path d="M19.71,6.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C17.17,2.09,16.92,2,16.66,2c-0.25,0-0.51,0.1-0.7,0.29l-1.83,1.83 l3.75,3.75L19.71,6.04z"/><rect height="4" width="20" x="2" y="20"/></g></g>
    </Icon>
  );
});

IconMaterialBorderColorTwoTone.displayName = 'AmauiIconMaterialBorderColorTwoTone';

export default IconMaterialBorderColorTwoTone;
