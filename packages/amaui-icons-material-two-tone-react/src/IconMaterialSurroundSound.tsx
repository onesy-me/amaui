import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurroundSound = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurroundSound'

      short_name='SurroundSound'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M4,18h16V6H4V18z M16.94,7.06C18.32,8.41,19,10.21,19,12s-0.68,3.59-2.05,4.95l-1.23-1.23 c1.02-1.03,1.53-2.37,1.53-3.72c0-1.35-0.52-2.69-1.54-3.71L16.94,7.06z M12,8.5c1.93,0,3.5,1.57,3.5,3.5c0,1.93-1.57,3.5-3.5,3.5 c-1.93,0-3.5-1.57-3.5-3.5C8.5,10.07,10.07,8.5,12,8.5z M7.05,7.05l1.23,1.23C7.27,9.31,6.75,10.65,6.75,12 c0,1.35,0.52,2.69,1.54,3.71l-1.23,1.23C5.68,15.59,5,13.79,5,12S5.68,8.41,7.05,7.05z" opacity=".3"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z"/><path d="M8.29,15.71C7.27,14.69,6.75,13.35,6.75,12c0-1.35,0.52-2.69,1.53-3.72L7.05,7.05C5.68,8.41,5,10.21,5,12 s0.68,3.59,2.06,4.94L8.29,15.71z"/><path d="M12,15.5c1.93,0,3.5-1.57,3.5-3.5c0-1.93-1.57-3.5-3.5-3.5c-1.93,0-3.5,1.57-3.5,3.5C8.5,13.93,10.07,15.5,12,15.5z M12,10.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,10.5,12,10.5z"/><path d="M15.72,15.72l1.23,1.23C18.32,15.59,19,13.79,19,12s-0.68-3.59-2.06-4.94l-1.23,1.23c1.02,1.02,1.54,2.36,1.54,3.71 C17.25,13.35,16.73,14.69,15.72,15.72z"/></g></g>
    </Icon>
  );
});

IconMaterialSurroundSound.displayName = 'AmauiIconMaterialSurroundSound';

export default IconMaterialSurroundSound;
