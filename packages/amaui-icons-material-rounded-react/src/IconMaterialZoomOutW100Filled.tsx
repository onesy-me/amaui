import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZoomOutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutW100Filled'

      short_name='ZoomOut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.2 19.65-6-6q-.75.65-1.725 1Q10.5 15 9.55 15q-2.3 0-3.9-1.6t-1.6-3.9q0-2.3 1.6-3.9T9.55 4q2.3 0 3.9 1.6t1.6 3.9q0 1.025-.375 2-.375.975-.975 1.65l6.025 6.025q.1.1.087.238-.012.137-.112.237-.125.125-.25.125t-.25-.125ZM9.55 14.3q2.025 0 3.413-1.388Q14.35 11.525 14.35 9.5t-1.387-3.413Q11.575 4.7 9.55 4.7T6.138 6.087Q4.75 7.475 4.75 9.5t1.388 3.412Q7.525 14.3 9.55 14.3ZM7.675 9.85q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h3.725q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialZoomOutW100Filled.displayName = 'AmauiIconMaterialZoomOutW100Filled';

export default IconMaterialZoomOutW100Filled;
