import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPace = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pace'

      short_name='Pace'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 27-3 53t-10 51q-14-16-32.5-27T794 638q3-15 4.5-30.5T800 576q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93q51 0 97.5-15t85.5-42q12 17 29.5 30t37.5 20q-51 41-114.5 64T480 976Zm290-160q-21 0-35.5-14.5T720 766q0-21 14.5-35.5T770 716q21 0 35.5 14.5T820 766q0 21-14.5 35.5T770 816ZM520 560l120 120q11 11 11 28t-11 28q-11 11-28 11t-28-11L452 604q-6-6-9-13.5t-3-15.5V416q0-17 11.5-28.5T480 376q17 0 28.5 11.5T520 416v144Z"/>
    </Icon>
  );
});

IconMaterialPace.displayName = 'AmauiIconMaterialPace';

export default IconMaterialPace;
