import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowshoeing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Snowshoeing'

      short_name='Snowshoeing'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M12.5,3.5c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S12.5,4.6,12.5,3.5z M6.32,19.03l-1.14-1.47L4,18.5l2.38,3.04 c0.51,0.65,1.16,1.15,1.88,1.41c0.28,0.1,0.53,0.04,0.72-0.11c0.3-0.23,0.42-0.7,0.12-1.07c-0.08-0.1-0.2-0.17-0.31-0.22 c-0.43-0.18-0.82-0.45-1.14-0.83l-0.08-0.1L11,18.2l0.89-3.22l2.11,2v4.52h-2V23h3.87c0.82,0,1.61-0.21,2.26-0.61 c0.26-0.16,0.37-0.39,0.37-0.64c0-0.38-0.3-0.75-0.77-0.75c-0.13,0-0.26,0.04-0.37,0.1c-0.4,0.23-0.87,0.37-1.36,0.4l0-6.02l-2.11-2 l0.6-3C15.79,11.98,17.8,13,20,13v-2c-1.9,0-3.51-1.02-4.31-2.42l-1-1.58c-0.4-0.6-1-1-1.7-1C12.24,6,11.58,6.34,7,8.28V13h2V9.58 l1.79-0.7L9.2,17L6.32,19.03z"/>
    </Icon>
  );
});

IconMaterialSnowshoeing.displayName = 'OnesyIconMaterialSnowshoeing';

export default IconMaterialSnowshoeing;
