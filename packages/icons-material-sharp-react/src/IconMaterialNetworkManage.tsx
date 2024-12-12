import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkManage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkManage'

      short_name='NetworkManage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M339-262q22-22 49.5-36t58.5-19q-5 19-8 38t-3 39q0 24 3.5 47t11.5 44L339-262Zm-85-84-84-86q62-62 142-95t168-33q49 0 96 10.5t90 30.5q-44 8-81.5 29T517-438q-9-1-18.5-1.5T480-440q-64 0-122.5 24.5T254-346ZM84-516 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600l-84 84q-79-79-181.5-121.5T480-680q-112 0-214.5 42.5T84-516Zm676 76 12 60q12 5 22.5 10.5T816-356l58-18 40 68-46 40q2 12 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T772-100l-12 60h-80l-12-60q-12-5-22.5-10.5T624-124l-58 18-40-68 46-40q-2-12-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T668-380l12-60h80Zm-40 120q-33 0-56.5 23.5T640-240q0 33 23.5 56.5T720-160q33 0 56.5-23.5T800-240q0-33-23.5-56.5T720-320Z"/>
    </Icon>
  );
});

IconMaterialNetworkManage.displayName = 'OnesyIconMaterialNetworkManage';

export default IconMaterialNetworkManage;
