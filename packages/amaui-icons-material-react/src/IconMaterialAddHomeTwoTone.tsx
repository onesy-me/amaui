import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddHomeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeTwoTone'
      short_name='AddHome'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g opacity=".3"><path d="M12,5.5L6,10v9h5.08c-0.62-4.3,2.72-8,6.92-8v-1L12,5.5z"/></g><path d="M6,19v-9l6-4.5l6,4.5v1c0.7,0,1.37,0.1,2,0.29V9l-8-6L4,9v12h7.68c-0.3-0.62-0.5-1.29-0.6-2H6z"/><g><path d="M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M21,18.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21V18.5z"/></g></g></g>
    </Icon>
  );
});

IconMaterialAddHomeTwoTone.displayName = 'AmauiIconMaterialAddHomeTwoTone';

export default IconMaterialAddHomeTwoTone;
