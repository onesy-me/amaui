import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppBadging = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBadging'

      short_name='AppBadging'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 576Zm-400 0q0-83 31.5-156T197 293q54-54 127-85.5T480 176q27 0 53 3.5t51 10.5q-16 15-28.5 33T535 261q-14-2-27.5-3.5T480 256q-134 0-227 93t-93 227q0 134 93 227t227 93q134 0 227-93t93-227q0-14-1.5-27.5T795 521q20-8 38-20.5t33-28.5q7 25 10.5 51t3.5 53q0 83-31.5 156T763 859q-54 54-127 85.5T480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576Zm640-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialAppBadging.displayName = 'AmauiIconMaterialAppBadging';

export default IconMaterialAppBadging;
