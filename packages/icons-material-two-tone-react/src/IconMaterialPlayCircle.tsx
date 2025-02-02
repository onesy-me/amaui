import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayCircle'

      short_name='PlayCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M9.5,16.5v-9l7,4.5L9.5,16.5z" enableBackground="new" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z"/><polygon points="9.5,16.5 16.5,12 9.5,7.5"/></g></g>
    </Icon>
  );
});

IconMaterialPlayCircle.displayName = 'OnesyIconMaterialPlayCircle';

export default IconMaterialPlayCircle;
