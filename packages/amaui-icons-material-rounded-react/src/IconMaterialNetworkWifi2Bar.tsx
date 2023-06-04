import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi2Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi2Bar'

      short_name='NetworkWifi2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.475 13.625q.95-.7 2.1-1.088 1.15-.387 2.425-.387t2.425.387q1.15.388 2.1 1.088L21.1 9.05q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05ZM12 20.575q-.2 0-.375-.063-.175-.062-.325-.212L.7 9.7q-.3-.3-.287-.713.012-.412.312-.687 2.35-2.125 5.238-3.212Q8.85 4 12 4q3.175 0 6.062 1.088Q20.95 6.175 23.275 8.3q.3.275.313.687.012.413-.288.713L12.7 20.3q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi2Bar.displayName = 'AmauiIconMaterialNetworkWifi2Bar';

export default IconMaterialNetworkWifi2Bar;
