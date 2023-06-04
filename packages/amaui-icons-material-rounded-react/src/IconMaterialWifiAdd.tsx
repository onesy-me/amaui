import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAdd'

      short_name='WifiAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 816h-80q-17 0-28.5-11.5T600 776q0-17 11.5-28.5T640 736h80v-80q0-17 11.5-28.5T760 616q17 0 28.5 11.5T800 656v80h80q17 0 28.5 11.5T920 776q0 17-11.5 28.5T880 816h-80v80q0 17-11.5 28.5T760 936q-17 0-28.5-11.5T720 896v-80Zm-268 92L29 485q-12-12-12-29t13-28q91-85 209-128.5T480 256q122 0 241 43.5T930 428q12 11 12.5 28T931 485l-68 68q-21-10-44-15.5t-48-6.5l73-73q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 35-35q1 25 6.5 48t15.5 44l-29 29q-12 12-28 12t-28-12Zm28-329Z"/>
    </Icon>
  );
});

IconMaterialWifiAdd.displayName = 'AmauiIconMaterialWifiAdd';

export default IconMaterialWifiAdd;
