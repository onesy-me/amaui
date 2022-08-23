import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroups3TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups3TwoTone'
      short_name='Groups3'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M15.43,15.48c-1.1-0.49-2.26-0.73-3.43-0.73c-1.18,0-2.33,0.25-3.43,0.73c-0.23,0.1-0.4,0.29-0.49,0.52 h7.85C15.83,15.77,15.66,15.58,15.43,15.48z" opacity=".3"/><circle cx="12" cy="9" opacity=".3" r="1"/><path d="M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61 C18,15.21,17.32,14.13,16.24,13.65z M8.07,16c0.09-0.23,0.27-0.42,0.49-0.52c1.1-0.49,2.26-0.73,3.43-0.73 c1.18,0,2.33,0.25,3.43,0.73c0.23,0.1,0.4,0.29,0.49,0.52H8.07z"/><path d="M1.22,14.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61c0-0.83,0.23-1.61,0.63-2.29C4.76,14.04,4.39,14,4,14 C3.01,14,2.07,14.21,1.22,14.58z"/><path d="M22.78,14.58C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0v-1.57 C24,15.62,23.52,14.9,22.78,14.58z"/><path d="M12,12c1.66,0,3-1.34,3-3c0-1.66-1.34-3-3-3S9,7.34,9,9C9,10.66,10.34,12,12,12z M12,8c0.55,0,1,0.45,1,1s-0.45,1-1,1 s-1-0.45-1-1S11.45,8,12,8z"/><rect height="3.54" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.6066 6.0503)" width="3.54" x="2.23" y="9.23"/><polygon points="20,9 17.5,13 22.5,13"/></g></g>
    </Icon>
  );
});

IconMaterialGroups3TwoTone.displayName = 'AmauiIconMaterialGroups3TwoTone';

export default IconMaterialGroups3TwoTone;
