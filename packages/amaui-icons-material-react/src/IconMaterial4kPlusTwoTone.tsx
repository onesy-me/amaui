import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4kPlusTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kPlusTwoTone'
      short_name='4kPlus'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5V19z M11.5,9H13v2.25 L14.75,9h1.75l-2.25,3l2.25,3h-1.75L13,12.75V15h-1.5V9z M5.5,9H7v3h1.5V9H10v3h1v1.5h-1V15H8.5v-1.5h-3V9z" enable-background="new" opacity=".3"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z"/><polygon points="8.5,15 10,15 10,13.5 11,13.5 11,12 10,12 10,9 8.5,9 8.5,12 7,12 7,9 5.5,9 5.5,13.5 8.5,13.5"/><polygon points="13,12.75 14.75,15 16.5,15 14.25,12 16.5,9 14.75,9 13,11.25 13,9 11.5,9 11.5,15 13,15"/></g></g>
    </Icon>
  );
});

export default IconMaterial4kPlusTwoTone;
